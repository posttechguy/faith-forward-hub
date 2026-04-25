import { motion } from "framer-motion";
import { MapPin, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";

const Contact = () => (
  <Layout>
    <section className="py-20">
      <div className="container max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="font-heading text-5xl md:text-6xl mb-4">Find Us Here</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">We'd love to meet you. Come visit us this Sunday!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="font-heading text-3xl mb-6">Visit Us</h2>
            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Location</p>
                  <p className="text-muted-foreground text-sm">Gospel Baptist Church, Australia</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Email</p>
                  <p className="text-muted-foreground text-sm">info@gospelbaptist.org.au</p>
                </div>
              </div>
            </div>

            <h2 className="font-heading text-3xl mb-6">Service Times</h2>
            <div className="space-y-4">
              {[
                { day: "Sunday", times: "10:00 AM – Worship Service" },
                { day: "Wednesday", times: "7:00 PM – Prayer Meeting" },
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

            {/* Map embed placeholder */}
            <div className="mt-8 rounded-xl overflow-hidden border aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3389.0699999999997!2d115.7979292!3d-31.7775722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32ace09e72aac9%3A0x1bba07a9c29fd2d6!2sGospel%20Baptist%20Church!5e0!3m2!1sen!2sau!4v1"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gospel Baptist Church Location"
              />
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
