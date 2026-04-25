import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Calendar, Users, Baby, Heart, BookMarked } from "lucide-react";
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

const ministries = [
  { icon: Baby, title: "KidzZone", desc: "Growing with the Word of God. Activities, discipleship material & parents lounge.", link: "/about" },
  { icon: Heart, title: "Women's Bible Study", desc: "Growing together in the Word of God. Encouragement, study material & prayer support.", link: "/about" },
  { icon: BookMarked, title: "Men's Bible Study", desc: "Stronger together through the Word of God. Focused study & prayer support.", link: "/about" },
  { icon: Users, title: "Prayer Meeting", desc: "Relying on God's Grace through Prayer. Shared prayer needs & thanksgiving.", link: "/about" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Bible with cross — Where the Truth can be found"
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
          Where the Truth can be found.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-primary-foreground/80 mb-8 font-body"
        >
          Discover the real meaning of the "Good News" of Jesus Christ. We would love to have you be our guest this Sunday.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link to="/about">What We Believe</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <Link to="/sermons">Recorded Sermons</Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Welcome Section */}
    <section className="py-20">
      <div className="container max-w-4xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-heading text-4xl md:text-5xl mb-6">Welcome!</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            It is our hope at Gospel Baptist that you will discover the real meaning of the "Good News" of Jesus Christ. We want everyone to see the difference that a real relationship with Jesus can make. It is our desire to make your family feel like part of our family. It is our goal to make you feel at home when you walk through our doors and when you leave, you leave with a greater knowledge of the "Good News" of Jesus.
          </p>
          <Button asChild className="mt-8 bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link to="/about">
              Find out more <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Ministries */}
    <section className="py-20 bg-muted">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl text-center mb-12"
        >
          Our Ministries
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ministries.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="h-full"
            >
              <Link
                to={item.link}
                className="block p-8 rounded-xl bg-card hover:shadow-lg transition-all duration-300 group border text-center h-full"
              >
                <item.icon className="h-10 w-10 text-accent mb-4 mx-auto" />
                <h3 className="font-heading text-xl mb-2 text-card-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Quick Links */}
    <section className="py-20">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: BookOpen, title: "Recorded Sermons", desc: "Watch and listen to messages on Prophecy, Christian Walk, Family & more.", link: "/sermons" },
            { icon: Calendar, title: "Calendar of Events", desc: "See what's happening at Gospel Baptist Church.", link: "/events" },
            { icon: Users, title: "Find Us Here", desc: "Visit us this Sunday — we'd love to meet you.", link: "/contact" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="h-full"
            >
              <Link
                to={item.link}
                className="block p-8 rounded-xl bg-card hover:shadow-lg transition-all duration-300 group border h-full"
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

    {/* Community Image Section */}
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
              At Gospel Baptist Church, we believe that faith is lived out in community. Whether you're taking your first steps of faith or you've been walking with God for years, there's a place here for you.
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
              alt="Gospel Baptist Church community gathering"
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
