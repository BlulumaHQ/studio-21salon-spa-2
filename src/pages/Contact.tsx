import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, Send } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  return (
    <main className="pb-16 md:pb-0">
      {/* Hero */}
      <section className="bg-primary-darker text-secondary-foreground py-32 md:py-40 text-center">
        <div className="container-site">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-body text-primary text-sm uppercase tracking-[0.2em] mb-4">
            Get in Touch
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="heading-hero mb-6">
            Contact Us
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }} className="font-body text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Book an appointment or send us a message.
          </motion.p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="heading-section text-foreground mb-6">Send Us a Message</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-sm text-foreground font-medium mb-1.5 block">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-md bg-background border border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground font-medium mb-1.5 block">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-md bg-background border border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                </div>
                <div>
                  <label className="font-body text-sm text-foreground font-medium mb-1.5 block">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-md bg-background border border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="font-body text-sm text-foreground font-medium mb-1.5 block">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-md bg-background border border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="font-body text-sm text-foreground font-medium mb-1.5 block">Service Interested In</label>
                  <select className="w-full px-4 py-3 rounded-md bg-background border border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>Select a service</option>
                    <option>Massage Therapy</option>
                    <option>Facials & Skin Care</option>
                    <option>Manicures & Pedicures</option>
                    <option>Salt Scrubs</option>
                    <option>Microblading</option>
                    <option>Skin Treatments</option>
                  </select>
                </div>
                <div>
                  <label className="font-body text-sm text-foreground font-medium mb-1.5 block">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-md bg-background border border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
                </div>
                <Button variant="cta" size="lg" type="submit" className="px-10 py-6 flex items-center gap-2">
                  <Send className="h-4 w-4" /> Send Message
                </Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="heading-section text-foreground mb-6">Visit Us</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary-dark mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-body text-foreground font-semibold mb-1">Our Location</h3>
                    <p className="font-body text-muted-foreground text-sm">Historic Downtown Ashland Area</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-accent rounded-lg h-72 md:h-80 flex items-center justify-center border border-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12458.12345!2d-82.6379!3d38.4784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8845d3e8c2d00001%3A0x1234567890!2sAshland%2C+KY!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Studio 21 Location"
                  className="rounded-lg"
                />
              </div>

              {/* Book CTA */}
              <div className="mt-8 bg-primary-darker text-secondary-foreground rounded-lg p-8 text-center">
                <h3 className="font-heading text-xl font-bold mb-3">Ready to Book?</h3>
                <p className="font-body text-sm opacity-80 mb-5">
                  Come take a break with us. Experience the Studio 21 difference.
                </p>
                <Button variant="hero" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 px-8">
                  Book Online
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
