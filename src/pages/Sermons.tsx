import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Play } from "lucide-react";

const sermons = [
  {
    title: "Walking in Faith",
    speaker: "Pastor James Mitchell",
    date: "March 23, 2026",
    youtubeId: "dQw4w9WgXcQ",
    description: "Discover what it means to trust God in uncertain times.",
  },
  {
    title: "The Power of Prayer",
    speaker: "Pastor James Mitchell",
    date: "March 16, 2026",
    youtubeId: "dQw4w9WgXcQ",
    description: "How prayer transforms our hearts and our circumstances.",
  },
  {
    title: "Love Your Neighbor",
    speaker: "Pastor Sarah Williams",
    date: "March 9, 2026",
    youtubeId: "dQw4w9WgXcQ",
    description: "Practical ways to live out the commandment to love.",
  },
  {
    title: "Finding Hope in Hard Seasons",
    speaker: "Pastor James Mitchell",
    date: "March 2, 2026",
    youtubeId: "dQw4w9WgXcQ",
    description: "God's promises for those walking through difficulty.",
  },
  {
    title: "Created for Community",
    speaker: "Pastor Sarah Williams",
    date: "February 23, 2026",
    youtubeId: "dQw4w9WgXcQ",
    description: "Why we need each other and how to build genuine connections.",
  },
  {
    title: "Grace That Changes Everything",
    speaker: "Pastor James Mitchell",
    date: "February 16, 2026",
    youtubeId: "dQw4w9WgXcQ",
    description: "Understanding the depth and breadth of God's grace.",
  },
];

const Sermons = () => (
  <Layout>
    <section className="py-20">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="font-heading text-5xl md:text-6xl mb-4">Sermons</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Watch our latest messages and be encouraged in your faith journey.</p>
        </motion.div>

        {/* Featured sermon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto">
            <iframe
              src={`https://www.youtube.com/embed/${sermons[0].youtubeId}`}
              title={sermons[0].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <div className="text-center mt-6">
            <h2 className="font-heading text-3xl">{sermons[0].title}</h2>
            <p className="text-muted-foreground text-sm mt-2">
              {sermons[0].speaker} · {sermons[0].date}
            </p>
          </div>
        </motion.div>

        {/* Past sermons grid */}
        <h2 className="font-heading text-3xl mb-8">Recent Messages</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sermons.slice(1).map((sermon, i) => (
            <motion.a
              key={sermon.title}
              href={`https://www.youtube.com/watch?v=${sermon.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group block rounded-xl overflow-hidden border bg-card hover:shadow-lg transition-all"
            >
              <div className="relative aspect-video bg-muted">
                <img
                  src={`https://img.youtube.com/vi/${sermon.youtubeId}/hqdefault.jpg`}
                  alt={sermon.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="h-12 w-12 text-primary-foreground" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg mb-1">{sermon.title}</h3>
                <p className="text-muted-foreground text-xs mb-2">
                  {sermon.speaker} · {sermon.date}
                </p>
                <p className="text-muted-foreground text-sm">{sermon.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Sermons;
