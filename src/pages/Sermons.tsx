import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Layout from "@/components/Layout";
import { Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";

type Sermon = {
  id: string;
  title: string;
  speaker: string;
  sermon_date: string;
  youtube_id: string;
  category: string;
  description: string | null;
};

const Sermons = () => {
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("sermons")
        .select("*")
        .order("sermon_date", { ascending: false });
      setSermons(data ?? []);
      setLoading(false);
    })();
  }, []);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(sermons.map((s) => s.category)))],
    [sermons]
  );

  const filtered = activeCategory === "All"
    ? sermons
    : sermons.filter((s) => s.category === activeCategory);

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="font-heading text-5xl md:text-6xl mb-4">Recorded Sermons</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">Watch and listen to messages from Gospel Baptist Church.</p>
          </motion.div>

          {loading ? (
            <p className="text-center text-muted-foreground">Loading sermons…</p>
          ) : sermons.length === 0 ? (
            <p className="text-center text-muted-foreground">No sermons available yet. Check back soon.</p>
          ) : (
            <>
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 text-sm rounded-full font-medium transition-colors ${
                      activeCategory === cat
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {filtered.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-16"
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto">
                    <iframe
                      src={`https://www.youtube.com/embed/${filtered[0].youtube_id}`}
                      title={filtered[0].title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <div className="text-center mt-6">
                    <Badge className="bg-secondary text-secondary-foreground mb-2">{filtered[0].category}</Badge>
                    <h2 className="font-heading text-3xl">{filtered[0].title}</h2>
                    <p className="text-muted-foreground text-sm mt-2">{formatDate(filtered[0].sermon_date)}</p>
                  </div>
                </motion.div>
              )}

              <h2 className="font-heading text-3xl mb-8">All Messages</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((sermon, i) => (
                  <motion.a
                    key={sermon.id}
                    href={`https://www.youtube.com/watch?v=${sermon.youtube_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group block rounded-xl overflow-hidden border bg-card hover:shadow-lg transition-all h-full flex flex-col"
                  >
                    <div className="relative aspect-video bg-muted">
                      <img
                        src={`https://img.youtube.com/vi/${sermon.youtube_id}/hqdefault.jpg`}
                        alt={sermon.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="h-12 w-12 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="p-5">
                      <Badge variant="outline" className="text-accent border-accent mb-2 text-xs">{sermon.category}</Badge>
                      <h3 className="font-heading text-lg mb-1">{sermon.title}</h3>
                      <p className="text-muted-foreground text-xs mb-2">{formatDate(sermon.sermon_date)}</p>
                      {sermon.description && <p className="text-muted-foreground text-sm">{sermon.description}</p>}
                    </div>
                  </motion.a>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Sermons;
