import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <img
            src="/src/assets/gbc-logo-white.png"
            alt="Gospel Baptist Church"
            className="h-20 w-auto mb-4"
          />
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Where the Truth can be found. Discover the real meaning of the "Good News" of Jesus Christ.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-lg mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "What We Believe", to: "/about" },
              { label: "Recorded Sermons", to: "/sermons" },
              { label: "Calendar of Events", to: "/events" },
              { label: "News", to: "/news" },
              { label: "Find Us Here", to: "/contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                {l.label}
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
                <p>10:00 AM</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="h-4 w-4 mt-0.5 text-secondary" />
              <div>
                <p className="font-medium text-primary-foreground">Wednesday Prayer Meeting</p>
                <p>7:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg mb-4">Find Us Here</h4>
          <div className="space-y-3 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-secondary" />
              <span>Gospel Baptist Church, Australia</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-secondary" />
              <span>info@gospelbaptist.org.au</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} Gospel Baptist Church. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
