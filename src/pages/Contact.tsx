import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";

const Contact = () => (
  <Layout>
    <section className="py-20">
      <div className="container max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="font-heading text-5xl md:text-6xl mb-4">Get In Touch</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">We'd love to hear from you. Reach out anytime.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="font-heading text-3xl mb-6">Visit Us</h2>
            <div className="space-y-5 mb-10">
              {[
                { icon: MapPin, label: "Address", value: "123 Faith Avenue, City, State 12345" },
                { icon: Phone, label: "Phone", value: "(555) 123-4567" },
                { icon: Mail, label: "Email", value: "info@gracecommunity.org" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <item.icon className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">{item.label}</p>
                    <p className="text-muted-foreground text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-heading text-3xl mb-6">Service Times</h2>
            <div className="space-y-4">
              {[
                { day: "Sunday", times: "9:00 AM & 11:00 AM" },
                { day: "Wednesday", times: "7:00 PM – Bible Study" },
              ].map((s) => (
                <div key={s.day} className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium text-sm">{s.day}</p>
                    <p className="text-muted-foreground text-sm">{s.times}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <div className="bg-card rounded-xl border p-8">
              <h2 className="font-heading text-2xl mb-6">Send a Message</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input type="email" placeholder="Email Address" />
                <Input placeholder="Subject" />
                <Textarea placeholder="Your message..." className="min-h-[120px]" />
                <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
