import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import placeholder from "/placeholder.svg";

const pastors = [
  {
    name: "Pastor Name One",
    role: "Senior Pastor",
    image: placeholder,
    blurb: "Short bio about this pastor — their background, family, and heart for the church. Replace this with the real blurb.",
  },
  {
    name: "Pastor Name Two",
    role: "Pastor",
    image: placeholder,
    blurb: "Short bio about this pastor — their background, family, and heart for the church. Replace this with the real blurb.",
  },
  {
    name: "Pastor Name Three",
    role: "Pastor",
    image: placeholder,
    blurb: "Short bio about this pastor — their background, family, and heart for the church. Replace this with the real blurb.",
  },
];

const elders = [
  {
    name: "Elder Name One",
    role: "Elder",
    image: placeholder,
    blurb: "Short bio about this elder — their background, family, and ministry focus. Replace this with the real blurb.",
  },
  {
    name: "Elder Name Two",
    role: "Elder",
    image: placeholder,
    blurb: "Short bio about this elder — their background, family, and ministry focus. Replace this with the real blurb.",
  },
  {
    name: "Elder Name Three",
    role: "Elder",
    image: placeholder,
    blurb: "Short bio about this elder — their background, family, and ministry focus. Replace this with the real blurb.",
  },
  {
    name: "Elder Name Four",
    role: "Elder",
    image: placeholder,
    blurb: "Short bio about this elder — their background, family, and ministry focus. Replace this with the real blurb.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const LeaderCard = ({ person }: { person: typeof pastors[0] }) => (
  <motion.div
    variants={item}
    className="bg-card rounded-xl border overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
  >
    <div className="aspect-square overflow-hidden">
      <img
        src={person.image}
        alt={person.name}
        className="w-full h-full object-cover"
        loading="lazy"
        width={400}
        height={400}
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="font-heading text-xl text-card-foreground">{person.name}</h3>
      <p className="text-sm text-secondary font-medium mb-3">{person.role}</p>
      <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
        {person.blurb}
      </p>
    </div>
  </motion.div>
);

const Leadership = () => (
  <Layout>
    <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-primary" />
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 font-heading text-5xl md:text-6xl text-primary-foreground"
      >
        Leadership Team
      </motion.h1>
    </section>

    <section className="py-20">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-4xl mb-4">Our Pastors</h2>
          <p className="text-muted-foreground leading-relaxed">
            Faithful shepherds committed to teaching the Word of God and caring for the flock at Gospel Baptist Church.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {pastors.map((person) => (
            <LeaderCard key={person.name} person={person} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-4xl mb-4">Our Elders</h2>
          <p className="text-muted-foreground leading-relaxed">
            Dedicated leaders who serve the church through prayer, oversight, and spiritual guidance.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {elders.map((person) => (
            <LeaderCard key={person.name} person={person} />
          ))}
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Leadership;
