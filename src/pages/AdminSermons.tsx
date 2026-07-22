import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Pencil, Trash2, Plus, ArrowLeft } from "lucide-react";

type Sermon = {
  id: string;
  title: string;
  speaker: string;
  sermon_date: string;
  youtube_id: string;
  category: string;
  description: string | null;
};

const CATEGORIES = [
  "Prophecy", "Christian Walk", "Church", "Family Principles",
  "Bible Characters", "Worship", "Missions", "Wisdom", "Foundations", "Other",
];

const emptyForm = {
  title: "",
  speaker: "Pastor",
  sermon_date: new Date().toISOString().slice(0, 10),
  youtube_id: "",
  category: "Other",
  description: "",
};

function extractYouTubeId(input: string): string {
  const trimmed = input.trim();
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([\w-]{11})/,
  ];
  for (const p of patterns) {
    const m = trimmed.match(p);
    if (m) return m[1];
  }
  return trimmed;
}

const AdminSermons = () => {
  const { user } = useAuth();
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [thumbPreview, setThumbPreview] = useState<string | null>(null);

  const syncMetadata = async (rawInput: string) => {
    const id = extractYouTubeId(rawInput);
    if (!/^[\w-]{11}$/.test(id)) {
      toast.error("Enter a valid YouTube URL or 11-character video ID");
      return;
    }
    setSyncing(true);
    try {
      const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
      const anonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
      const res = await fetch(
        `https://${projectId}.supabase.co/functions/v1/youtube-metadata?id=${id}`,
        { headers: { apikey: anonKey, Authorization: `Bearer ${anonKey}` } }
      );
      const meta = await res.json();
      if (!res.ok) throw new Error(meta.error || "Failed to fetch metadata");
      setForm((f) => ({
        ...f,
        youtube_id: id,
        title: meta.title || f.title,
        speaker: meta.author && f.speaker === "Pastor" ? meta.author : f.speaker,
        sermon_date: meta.publishDate || f.sermon_date,
      }));
      setThumbPreview(meta.thumbnail);
      toast.success("Metadata synced from YouTube");
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setSyncing(false);
    }
  };

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("sermons")
      .select("*")
      .order("sermon_date", { ascending: false });
    if (error) toast.error(error.message);
    else setSermons(data ?? []);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const openNew = () => {
    setEditingId(null);
    setForm(emptyForm);
    setThumbPreview(null);
    setOpen(true);
  };

  const openEdit = (s: Sermon) => {
    setEditingId(s.id);
    setForm({
      title: s.title,
      speaker: s.speaker,
      sermon_date: s.sermon_date,
      youtube_id: s.youtube_id,
      category: s.category,
      description: s.description ?? "",
    });
    setThumbPreview(`https://img.youtube.com/vi/${s.youtube_id}/hqdefault.jpg`);
    setOpen(true);
  };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const payload = {
      ...form,
      youtube_id: extractYouTubeId(form.youtube_id),
      description: form.description || null,
    };
    const { error } = editingId
      ? await supabase.from("sermons").update(payload).eq("id", editingId)
      : await supabase.from("sermons").insert({ ...payload, created_by: user?.id });
    setSaving(false);
    if (error) return toast.error(error.message);
    toast.success(editingId ? "Sermon updated" : "Sermon added");
    setOpen(false);
    load();
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this sermon?")) return;
    const { error } = await supabase.from("sermons").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Sermon deleted");
    load();
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-white border-b">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link to="/admin"><Button variant="ghost" size="sm"><ArrowLeft className="h-4 w-4 mr-1" />Back</Button></Link>
            <h1 className="text-xl font-bold">Manage Sermons</h1>
          </div>
          <Button size="sm" onClick={openNew}><Plus className="h-4 w-4 mr-1" />New sermon</Button>
        </div>
      </header>

      <main className="container py-8">
        {loading ? (
          <p className="text-muted-foreground">Loading…</p>
        ) : sermons.length === 0 ? (
          <Card><CardContent className="pt-6 text-muted-foreground">No sermons yet. Add your first one.</CardContent></Card>
        ) : (
          <div className="grid gap-3">
            {sermons.map((s) => (
              <Card key={s.id}>
                <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0">
                  <div className="flex gap-4 min-w-0">
                    <img
                      src={`https://img.youtube.com/vi/${s.youtube_id}/default.jpg`}
                      alt=""
                      className="w-24 h-16 object-cover rounded flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <CardTitle className="text-base truncate">{s.title}</CardTitle>
                      <p className="text-xs text-muted-foreground mt-1">
                        {s.speaker} · {new Date(s.sermon_date).toLocaleDateString()} · {s.category}
                      </p>
                      {s.description && <p className="text-sm mt-2 line-clamp-2">{s.description}</p>}
                    </div>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <Button variant="outline" size="icon" onClick={() => openEdit(s)}><Pencil className="h-4 w-4" /></Button>
                    <Button variant="outline" size="icon" onClick={() => remove(s.id)}><Trash2 className="h-4 w-4" /></Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        )}
      </main>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{editingId ? "Edit sermon" : "New sermon"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={save} className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input id="title" required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="speaker">Speaker</Label>
                <Input id="speaker" required value={form.speaker} onChange={(e) => setForm({ ...form, speaker: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" required value={form.sermon_date} onChange={(e) => setForm({ ...form, sermon_date: e.target.value })} />
              </div>
            </div>
            <div>
              <Label htmlFor="youtube">YouTube URL or ID</Label>
              <div className="flex gap-2">
                <Input
                  id="youtube"
                  required
                  placeholder="https://youtube.com/watch?v=..."
                  value={form.youtube_id}
                  onChange={(e) => setForm({ ...form, youtube_id: e.target.value })}
                  onBlur={(e) => {
                    const v = e.target.value.trim();
                    if (v && v !== extractYouTubeId(v).slice(0, 0)) {
                      const id = extractYouTubeId(v);
                      if (/^[\w-]{11}$/.test(id)) syncMetadata(v);
                    }
                  }}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => syncMetadata(form.youtube_id)}
                  disabled={syncing || !form.youtube_id}
                >
                  {syncing ? "Syncing…" : "Sync"}
                </Button>
              </div>
              {thumbPreview && (
                <img
                  src={thumbPreview}
                  alt="Video thumbnail"
                  className="mt-2 w-40 aspect-video object-cover rounded border"
                />
              )}
            </div>
            <div>
              <Label htmlFor="category">Category</Label>
              <select
                id="category"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              >
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="submit" disabled={saving}>{saving ? "Saving…" : "Save"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminSermons;
