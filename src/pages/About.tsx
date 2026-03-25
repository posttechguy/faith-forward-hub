import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import aboutImage from "@/assets/about-church.jpg";

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <img src={aboutImage} alt="Gospel Baptist Church" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1280} height={720} />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 font-heading text-5xl md:text-6xl text-primary-foreground"
      >
        What We Believe
      </motion.h1>
    </section>

    <section className="py-20">
      <div className="container max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h2 className="font-heading text-3xl mb-6">About Gospel Baptist Church</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            It is our hope at Gospel Baptist that you will discover the real meaning of the "Good News" of Jesus Christ. We want everyone to see the difference that a real relationship with Jesus can make. We would love to have you be our guest this Sunday.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            It is our desire to make your family feel like part of our family. It is our goal to make you feel at home when you walk through our doors and when you leave, you leave with a greater knowledge of the "Good News" of Jesus.
          </p>

          <h2 className="font-heading text-3xl mb-6">What We Believe</h2>
          <div className="space-y-4">
            {[
              { title: "The Bible", text: "We believe the Bible is God's inspired, inerrant Word and the sole authority for our faith and practice." },
              { title: "God", text: "We believe in one God, eternally existing in three persons — Father, Son, and Holy Spirit." },
              { title: "Jesus Christ", text: "We believe Jesus is the Son of God who came to reconcile us to the Father through His life, death, and resurrection." },
              { title: "Salvation", text: "We believe salvation is by grace alone through faith alone in Christ alone, not by works." },
              { title: "The Church", text: "We believe the local church is a body of baptised believers, called to worship, fellowship, and share the Gospel." },
              { title: "Baptism", text: "We believe in believer's baptism by immersion as an act of obedience following salvation." },
            ].map((belief) => (
              <div key={belief.title} className="p-6 bg-card rounded-lg border">
                <h3 className="font-heading text-xl mb-2">{belief.title}</h3>
                <p className="text-muted-foreground text-sm">{belief.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-secondary/10 rounded-xl border border-secondary/20">
            <h2 className="font-heading text-3xl mb-4">About the Pastor</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our pastor is passionate about teaching the Word of God faithfully and equipping believers to live out their faith daily. With a heart for discipleship and evangelism, he leads Gospel Baptist Church with a commitment to biblical truth and love for the community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default About;
