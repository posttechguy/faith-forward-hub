import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-worship.jpg";
import communityImage from "@/assets/community.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Congregation worshipping together"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-5xl md:text-7xl text-primary-foreground mb-6 leading-tight"
        >
          Welcome Home
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-primary-foreground/80 mb-8 font-body"
        >
          Join us as we worship, grow, and serve together. Everyone is welcome.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link to="/about">Learn More</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <Link to="/sermons">Watch Sermons</Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Feature Cards */}
    <section className="py-20">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: BookOpen, title: "Sermons", desc: "Watch and listen to our latest messages.", link: "/sermons" },
            { icon: Calendar, title: "Events", desc: "See what's happening at our church.", link: "/events" },
            { icon: Users, title: "Community", desc: "Find your place to belong and grow.", link: "/about" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Link
                to={item.link}
                className="block p-8 rounded-xl bg-card hover:shadow-lg transition-all duration-300 group border"
              >
                <item.icon className="h-10 w-10 text-accent mb-4" />
                <h3 className="font-heading text-2xl mb-2 text-card-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                <span className="text-accent text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Community Section */}
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl mb-6">
              A Place to <span className="text-accent">Belong</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Grace Community, we believe that faith is lived out in community. Whether you're taking your first steps of faith or you've been walking with God for years, there's a place here for you.
            </p>
            <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link to="/about">
                About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={communityImage}
              alt="Church community gathering"
              className="rounded-xl shadow-lg w-full object-cover aspect-video"
              loading="lazy"
              width={1280}
              height={720}
            />
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
