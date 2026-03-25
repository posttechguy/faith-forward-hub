import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import aboutImage from "@/assets/about-church.jpg";

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <img src={aboutImage} alt="Church sanctuary" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1280} height={720} />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 font-heading text-5xl md:text-6xl text-primary-foreground"
      >
        About Us
      </motion.h1>
    </section>

    <section className="py-20">
      <div className="container max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h2 className="font-heading text-3xl mb-6">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Grace Community Church was founded with a simple mission: to love God and love people. For over 25 years, we've been a gathering place for those seeking hope, purpose, and authentic community.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            We are a diverse, multi-generational church that believes the best days are ahead. Our doors are open to everyone—no matter where you've been or what you've been through.
          </p>

          <h2 className="font-heading text-3xl mb-6">What We Believe</h2>
          <div className="space-y-4">
            {[
              { title: "The Bible", text: "We believe the Bible is God's inspired Word and the authority for our faith and practice." },
              { title: "Jesus Christ", text: "We believe Jesus is the Son of God who came to reconcile us to the Father through His life, death, and resurrection." },
              { title: "Community", text: "We believe the church is the body of Christ, called to worship, fellowship, and serve the world together." },
              { title: "Mission", text: "We are called to share the love of Christ with our neighbors and the nations." },
            ].map((belief) => (
              <div key={belief.title} className="p-6 bg-card rounded-lg border">
                <h3 className="font-heading text-xl mb-2">{belief.title}</h3>
                <p className="text-muted-foreground text-sm">{belief.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default About;
