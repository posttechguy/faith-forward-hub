import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-heading text-2xl mb-4">Grace Community</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            A place of faith, hope, and love. Join us as we grow together in Christ.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-lg mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["About", "Sermons", "Events", "News", "Contact"].map((l) => (
              <Link
                key={l}
                to={`/${l.toLowerCase()}`}
                className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg mb-4">Service Times</h4>
          <div className="space-y-3 text-sm text-primary-foreground/70">
            <div className="flex items-start gap-2">
              <Clock className="h-4 w-4 mt-0.5 text-secondary" />
              <div>
                <p className="font-medium text-primary-foreground">Sunday Service</p>
                <p>9:00 AM & 11:00 AM</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="h-4 w-4 mt-0.5 text-secondary" />
              <div>
                <p className="font-medium text-primary-foreground">Wednesday Bible Study</p>
                <p>7:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg mb-4">Contact</h4>
          <div className="space-y-3 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-secondary" />
              <span>123 Faith Avenue, City</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-secondary" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-secondary" />
              <span>info@gracecommunity.org</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} Grace Community Church. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
