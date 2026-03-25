import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    title: "Easter Sunday Celebration",
    date: "April 5, 2026",
    time: "9:00 AM & 11:00 AM",
    location: "Main Sanctuary",
    category: "Worship",
    description: "Celebrate the risen King with us! Special music, message, and activities for the whole family.",
  },
  {
    title: "Women's Conference 2026",
    date: "April 18–19, 2026",
    time: "9:00 AM – 4:00 PM",
    location: "Fellowship Hall",
    category: "Conference",
    description: "A weekend of encouragement, worship, and fellowship for women of all ages.",
  },
  {
    title: "Community Outreach Day",
    date: "April 25, 2026",
    time: "8:00 AM – 1:00 PM",
    location: "Various Locations",
    category: "Outreach",
    description: "Serve our community through food drives, neighborhood cleanups, and free family resources.",
  },
  {
    title: "Youth Summer Kickoff",
    date: "May 2, 2026",
    time: "6:00 PM – 9:00 PM",
    location: "Youth Center",
    category: "Youth",
    description: "Games, worship, and fun as we launch into an exciting summer of activities for teens.",
  },
  {
    title: "Marriage Enrichment Workshop",
    date: "May 16, 2026",
    time: "10:00 AM – 2:00 PM",
    location: "Room 201",
    category: "Workshop",
    description: "Strengthen your marriage with practical tools and biblical wisdom for couples.",
  },
];

const categoryColors: Record<string, string> = {
  Worship: "bg-secondary text-secondary-foreground",
  Conference: "bg-primary text-primary-foreground",
  Outreach: "bg-accent text-accent-foreground",
  Youth: "bg-muted text-foreground",
  Workshop: "bg-card text-card-foreground border",
};

const Events = () => (
  <Layout>
    <section className="py-20">
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="font-heading text-5xl md:text-6xl mb-4">Upcoming Events</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Stay connected with what's happening at Grace Community.</p>
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
                <Badge className={categoryColors[event.category] || ""}>
                  {event.category}
                </Badge>
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
