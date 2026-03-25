import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "@/components/Layout";
import { Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const categories = [
  "All",
  "Prophecy",
  "Christian Walk",
  "Church",
  "Family Principles",
  "Bible Characters",
  "Worship",
  "Missions",
  "Wisdom",
  "Foundations",
];

const sermons = [
  {
    title: "Understanding Revelation",
    speaker: "Pastor",
    date: "March 23, 2026",
    youtubeId: "dQw4w9WgXcQ",
    category: "Prophecy",
    description: "A study through the book of Revelation and its prophetic significance.",
  },
  {
    title: "Walking by Faith",
    speaker: "Pastor",
    date: "March 16, 2026",
    youtubeId: "dQw4w9WgXcQ",
    category: "Christian Walk",
    description: "What it means to trust God in every area of life.",
  },
  {
    title: "The Church God Intended",
    speaker: "Pastor",
    date: "March 9, 2026",
    youtubeId: "dQw4w9WgXcQ",
    category: "Church",
    description: "God's design for the local church and its mission in the world.",
  },
  {
    title: "Building a Godly Home",
    speaker: "Pastor",
    date: "March 2, 2026",
    youtubeId: "dQw4w9WgXcQ",
    category: "Family Principles",
    description: "Biblical principles for raising a family that honours God.",
  },
  {
    title: "The Life of Peter",
    speaker: "Pastor",
    date: "February 23, 2026",
    youtubeId: "dQw4w9WgXcQ",
    category: "Bible Characters",
    description: "Lessons from Peter's journey of faith, failure, and restoration.",
  },
  {
    title: "Psalms of David",
    speaker: "Pastor",
    date: "February 16, 2026",
    youtubeId: "dQw4w9WgXcQ",
    category: "Worship",
    description: "Exploring David's heart of worship through the Psalms.",
  },
  {
    title: "The Great Commission",
    speaker: "Pastor",
    date: "February 9, 2026",
    youtubeId: "dQw4w9WgXcQ",
    category: "Missions",
    description: "Our calling to share the Gospel with every nation.",
  },
  {
    title: "Wisdom from James",
    speaker: "Pastor",
    date: "February 2, 2026",
    youtubeId: "dQw4w9WgXcQ",
    category: "Wisdom",
    description: "Practical wisdom for everyday Christian living from the book of James.",
  },
  {
    title: "Foundations of the Faith",
    speaker: "Pastor",
    date: "January 26, 2026",
    youtubeId: "dQw4w9WgXcQ",
    category: "Foundations",
    description: "Core truths every believer needs to know and live by.",
  },
];

const Sermons = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? sermons
    : sermons.filter((s) => s.category === activeCategory);

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="font-heading text-5xl md:text-6xl mb-4">Recorded Sermons</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">Watch and listen to messages from Gospel Baptist Church.</p>
          </motion.div>

          {/* Category filter */}
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

          {/* Featured sermon */}
          {filtered.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-16"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto">
                <iframe
                  src={`https://www.youtube.com/embed/${filtered[0].youtubeId}`}
                  title={filtered[0].title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="text-center mt-6">
                <Badge className="bg-secondary text-secondary-foreground mb-2">{filtered[0].category}</Badge>
                <h2 className="font-heading text-3xl">{filtered[0].title}</h2>
                <p className="text-muted-foreground text-sm mt-2">{filtered[0].date}</p>
              </div>
            </motion.div>
          )}

          {/* Sermon grid */}
          <h2 className="font-heading text-3xl mb-8">All Messages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((sermon, i) => (
              <motion.a
                key={sermon.title}
                href={`https://www.youtube.com/watch?v=${sermon.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
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
                  <Badge variant="outline" className="text-accent border-accent mb-2 text-xs">{sermon.category}</Badge>
                  <h3 className="font-heading text-lg mb-1">{sermon.title}</h3>
                  <p className="text-muted-foreground text-xs mb-2">{sermon.date}</p>
                  <p className="text-muted-foreground text-sm">{sermon.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sermons;
