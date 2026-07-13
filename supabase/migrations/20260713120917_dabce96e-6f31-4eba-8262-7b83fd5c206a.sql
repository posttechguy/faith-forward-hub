
CREATE TABLE public.sermons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  speaker text NOT NULL DEFAULT 'Pastor',
  sermon_date date NOT NULL DEFAULT CURRENT_DATE,
  youtube_id text NOT NULL,
  category text NOT NULL DEFAULT 'Other',
  description text,
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.sermons TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.sermons TO authenticated;
GRANT ALL ON public.sermons TO service_role;

ALTER TABLE public.sermons ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view sermons" ON public.sermons FOR SELECT USING (true);
CREATE POLICY "Admins can insert sermons" ON public.sermons FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update sermons" ON public.sermons FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete sermons" ON public.sermons FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER update_sermons_updated_at
  BEFORE UPDATE ON public.sermons
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
