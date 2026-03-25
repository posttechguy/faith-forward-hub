import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "10:00 AM",
    location: "Main Auditorium",
    category: "Worship",
    description: "Join us for worship, prayer, and a message from God's Word. Everyone is welcome!",
  },
  {
    title: "Wednesday Prayer Meeting",
    date: "Every Wednesday",
    time: "7:00 PM",
    location: "Main Auditorium",
    category: "Prayer",
    description: "Relying on God's Grace through prayer. Shared prayer needs and thanksgiving.",
  },
  {
    title: "Women's Bible Study",
    date: "Fortnightly",
    time: "10:00 AM",
    location: "Fellowship Hall",
    category: "Bible Study",
    description: "Growing together in the Word of God. Encouragement, study material & prayer support.",
  },
  {
    title: "Men's Bible Study",
    date: "Fortnightly",
    time: "7:00 PM",
    location: "Fellowship Hall",
    category: "Bible Study",
    description: "Stronger together through the Word of God. Focused study & prayer support.",
  },
  {
    title: "KidzZone",
    date: "Every Sunday",
    time: "10:00 AM",
    location: "Kids Room",
    category: "Kids",
    description: "Growing with the Word of God. Activities, discipleship material & parents lounge.",
  },
];

const categoryColors: Record<string, string> = {
  Worship: "bg-secondary text-secondary-foreground",
  Prayer: "bg-primary text-primary-foreground",
  "Bible Study": "bg-accent text-accent-foreground",
  Kids: "bg-muted text-foreground",
};

const Events = () => (
  <Layout>
    <section className="py-20">
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="font-heading text-5xl md:text-6xl mb-4">Calendar of Events</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Stay connected with what's happening at Gospel Baptist Church.</p>
        </motion.div>

        <div className="space-y-6">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 md:p-8 rounded-xl border bg-card hover:shadow-md transition-shadow"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <h3 className="font-heading text-2xl">{event.title}</h3>
                <Badge className={categoryColors[event.category] || ""}>{event.category}</Badge>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-accent" /> {event.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-accent" /> {event.time}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-accent" /> {event.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Events;
