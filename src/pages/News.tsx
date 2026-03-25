import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import communityImage from "@/assets/community.jpg";
import aboutImage from "@/assets/about-church.jpg";

const articles = [
  {
    title: "New Small Groups Launching This Spring",
    date: "March 20, 2026",
    excerpt: "We're excited to announce 12 new small groups forming this spring, covering topics from parenting to Bible study. Find your community!",
    image: communityImage,
  },
  {
    title: "Building Expansion Update",
    date: "March 12, 2026",
    excerpt: "Construction on our new Family Life Center is on schedule. Here's a look at the progress and what to expect when it opens this fall.",
    image: aboutImage,
  },
  {
    title: "Mission Trip to Guatemala: A Life-Changing Journey",
    date: "March 5, 2026",
    excerpt: "Twenty members of our church family recently returned from a mission trip to Guatemala. Read about the incredible impact they made.",
    image: communityImage,
  },
  {
    title: "Volunteer Spotlight: The Johnson Family",
    date: "February 28, 2026",
    excerpt: "Meet the Johnson family, who have been faithfully serving in our children's ministry for over a decade.",
    image: aboutImage,
  },
];

const News = () => (
  <Layout>
    <section className="py-20">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="font-heading text-5xl md:text-6xl mb-4">News & Updates</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Stay up to date with what God is doing at Grace Community.</p>
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
              className="rounded-xl border bg-card overflow-hidden hover:shadow-lg transition-all group cursor-pointer"
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
