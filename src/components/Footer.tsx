import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary-darker text-secondary-foreground">
      <div className="container-site section-padding">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6">
          {/* Column 1: Logo & Description */}
          <div className="md:col-span-1">
            <h3 className="font-heading text-xl font-bold mb-4">Studio 21</h3>
            <p className="font-body text-sm leading-relaxed opacity-80">
              Award-winning hydro spa and salon located in the historic downtown Ashland area. Serving our community since 1996.
            </p>
          </div>

          {/* Column 2: Empty Spacer */}
          <div className="hidden md:block" />

          {/* Column 3: Navigation */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-4 opacity-90">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity">Home</Link></li>
              <li><Link to="/services" className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity">Services</Link></li>
              <li><Link to="/shop" className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity">Shop</Link></li>
              <li><Link to="/contact-us" className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-4 opacity-90">Services</h4>
            <ul className="space-y-2">
              <li className="font-body text-sm opacity-80">Massage</li>
              <li className="font-body text-sm opacity-80">Facials</li>
              <li className="font-body text-sm opacity-80">Manicures & Pedicures</li>
              <li className="font-body text-sm opacity-80">Microblading</li>
              <li className="font-body text-sm opacity-80">Salt Scrubs</li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-4 opacity-90">Contact</h4>
            <div className="space-y-2">
              <p className="font-body text-sm opacity-80">Historic Downtown Ashland Area</p>
              <Link to="/contact-us" className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity block">
                Get in Touch →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container-site py-5">
          <p className="font-body text-xs opacity-60 text-center">
            © {new Date().getFullYear()} Studio 21 Salon and Spa. All rights reserved. | Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 underline"
            >
              Bluluma
            </a>{" "}
            | Powered by{" "}
            <a
              href="https://swiftlift.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 underline"
            >
              SwiftLift
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
