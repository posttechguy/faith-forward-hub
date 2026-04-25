import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import communityImage from "@/assets/community.jpg";
import aboutImage from "@/assets/about-church.jpg";

const articles = [
  {
    title: "Upcoming Prophecy Sermon Series",
    date: "March 20, 2026",
    excerpt: "Join us as we begin a new series exploring Biblical prophecy through the books of Revelation, Daniel, and Isaiah.",
    image: communityImage,
  },
  {
    title: "KidzZone New Term Activities",
    date: "March 12, 2026",
    excerpt: "Exciting new activities and discipleship materials for our young ones this term. Parents lounge now available!",
    image: aboutImage,
  },
  {
    title: "Men's & Women's Bible Study Update",
    date: "March 5, 2026",
    excerpt: "Our fortnightly Bible studies continue with encouraging topics. New members always welcome to join.",
    image: communityImage,
  },
  {
    title: "Mission Support Update",
    date: "February 28, 2026",
    excerpt: "Read about how Gospel Baptist Church is supporting missions both locally and around the world.",
    image: aboutImage,
  },
];

const News = () => (
  <Layout>
    <section className="py-20">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="font-heading text-5xl md:text-6xl mb-4">News & Updates</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Stay up to date with what God is doing at Gospel Baptist Church.</p>
        </motion.div>

        {/* Featured */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-16 items-center"
        >
          <img
            src={articles[0].image}
            alt={articles[0].title}
            className="rounded-xl w-full aspect-video object-cover shadow-md"
            loading="lazy"
            width={1280}
            height={720}
          />
          <div>
            <span className="text-accent text-sm font-medium">{articles[0].date}</span>
            <h2 className="font-heading text-3xl mt-2 mb-4">{articles[0].title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{articles[0].excerpt}</p>
            <span className="text-accent text-sm font-medium inline-flex items-center gap-1">
              Read More <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </motion.article>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.slice(1).map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border bg-card overflow-hidden hover:shadow-lg transition-all group cursor-pointer h-full flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="text-accent text-xs font-medium">{article.date}</span>
                <h3 className="font-heading text-lg mt-1 mb-2">{article.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-3">{article.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default News;
