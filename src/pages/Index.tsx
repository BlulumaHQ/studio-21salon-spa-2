import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Award, Clock, Star, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import heroSpa from "@/assets/hero-spa.jpg";
import massageService from "@/assets/massage-service.jpg";
import nailsService from "@/assets/nails-service.jpg";
import saltScrub from "@/assets/salt-scrub.jpg";
import microblading from "@/assets/microblading.jpg";
import spaInterior from "@/assets/spa-interior.jpg";
import facialTreatment from "@/assets/facial-treatment.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const Index = () => {
  return (
    <main className="pb-16 md:pb-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={heroSpa} alt="Studio 21 Salon and Spa luxury treatment room" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-darker/90 via-primary-darker/70 to-primary-darker/40" />
        </div>
        <div className="relative container-site py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.p variants={fadeUp} className="font-body text-primary/90 text-sm uppercase tracking-[0.2em] mb-4">
              Award-Winning Spa & Salon Since 1996
            </motion.p>
            <motion.h1 variants={fadeUp} className="heading-hero text-secondary-foreground mb-6">
              Relax. Refresh.<br />Re-imagine.
            </motion.h1>
            <motion.p variants={fadeUp} className="font-body text-secondary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              Book a time at our tranquil facility for manicures, pedicures, massage, facials, and skin treatments.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild className="px-10 py-6 text-base">
                <Link to="/contact-us">Book Online</Link>
              </Button>
              <Button variant="cta-outline" size="lg" asChild className="px-10 py-6 text-base border-secondary-foreground/40 text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground">
                <Link to="/services">View Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-primary-dark text-secondary-foreground">
        <div className="container-site py-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 items-center">
            {["Best in Tri-State", "Best in Ashland", "Reader's Choice Awards", "NE Kentucky Small Business of the Year"].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <Award className="h-4 w-4 opacity-70" />
                <span className="font-body text-xs md:text-sm tracking-wide opacity-90">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.p variants={fadeUp} className="font-body text-secondary text-sm uppercase tracking-[0.15em] mb-3">
              Your Escape Awaits
            </motion.p>
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-6">
              Step Away from the Everyday
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-muted-foreground text-lg leading-relaxed">
              From the moment you walk in the door, our focus is on your complete relaxation. From massage to salt scrubs, our services are a great way to take a step back from the bustle of everyday life. Come take a break with us.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Sparkles, title: "Friendly Service", desc: "Our highly trained team of professionals are here to provide you with a complete experience of personal well-being." },
              { icon: Star, title: "Relaxing Environment", desc: "From the moment you walk in, our tranquil facility envelops you in calm. Every detail is designed for your comfort." },
              { icon: CheckCircle, title: "High-Quality Products", desc: "Many people underestimate the effect high-quality lotions and oils have on a spa treatment. We guarantee all of our products help you with that extra feeling of zen." },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-lg p-8 border border-border text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-5">
                  <item.icon className="h-6 w-6 text-primary-dark" />
                </div>
                <h3 className="heading-card text-foreground mb-3">{item.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-section-alt">
        <div className="container-site">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.p variants={fadeUp} className="font-body text-secondary text-sm uppercase tracking-[0.15em] mb-3">
              Our Services
            </motion.p>
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-6">
              World-Class Spa Treatments
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-muted-foreground text-lg">
              We strive to build a trusting relationship with our clients, offering small town friendliness along with world-class treatments.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Massage Therapy", img: massageService, desc: "Therapeutic and relaxation massage in a tranquil setting." },
              { title: "Facials & Skin Care", img: facialTreatment, desc: "Professional facials and skin treatments for radiant results." },
              { title: "Manicures & Pedicures", img: nailsService, desc: "Luxury nail services for beautifully polished hands and feet." },
              { title: "Salt Scrubs", img: saltScrub, desc: "Exfoliating body treatments for silky smooth skin." },
              { title: "Microblading", img: microblading, desc: "Precision eyebrow microblading for natural, lasting results." },
              { title: "Skin Treatments", img: spaInterior, desc: "Advanced skin treatments tailored to your unique needs." },
            ].map((service) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="heading-card text-foreground mb-2">{service.title}</h3>
                  <p className="font-body text-muted-foreground text-sm mb-4">{service.desc}</p>
                  <Link to="/services" className="font-body text-primary-dark text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="cta" size="lg" asChild className="px-10 py-6">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* New Service Highlight */}
      <section className="section-padding bg-primary-darker text-secondary-foreground">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p variants={fadeUp} className="font-body text-primary text-sm uppercase tracking-[0.15em] mb-3">
                Big News
              </motion.p>
              <motion.h2 variants={fadeUp} className="heading-section mb-6">
                We Now Offer Microblading!
              </motion.h2>
              <motion.p variants={fadeUp} className="font-body text-secondary-foreground/80 text-lg leading-relaxed mb-8">
                Achieve beautifully defined brows with our new microblading service. Our trained professionals deliver natural-looking, long-lasting results.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Button variant="hero" size="lg" asChild className="px-10 py-6 bg-primary text-primary-foreground hover:bg-primary/80">
                  <Link to="/contact-us">Book Now</Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-lg overflow-hidden"
            >
              <img src={microblading} alt="Microblading service" className="w-full h-80 md:h-96 object-cover rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.p variants={fadeUp} className="font-body text-secondary text-sm uppercase tracking-[0.15em] mb-3">
              Testimonials
            </motion.p>
            <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-10">
              What Our Clients Say
            </motion.h2>
            <motion.div variants={fadeUp} className="bg-accent/50 rounded-xl p-10 md:p-14 border border-border">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary-dark fill-primary-dark" />
                ))}
              </div>
              <blockquote className="font-heading text-xl md:text-2xl text-foreground leading-relaxed mb-6 italic">
                "Great experience! Definitely would recommend!"
              </blockquote>
              <cite className="font-body text-muted-foreground text-sm not-italic">— Brianna</cite>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-section-alt">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <img src={spaInterior} alt="Studio 21 interior" className="w-full rounded-lg h-80 md:h-[450px] object-cover" />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p variants={fadeUp} className="font-body text-secondary text-sm uppercase tracking-[0.15em] mb-3">
                About Us
              </motion.p>
              <motion.h2 variants={fadeUp} className="heading-section text-foreground mb-6">
                Award-Winning Since 1996
              </motion.h2>
              <motion.p variants={fadeUp} className="font-body text-muted-foreground text-base leading-relaxed mb-4">
                Studio 21 Salon and Spa is located in the historic downtown Ashland area. Since opening our doors in 1996, we have grown from a small two chair salon to an award-winning hydro spa and salon.
              </motion.p>
              <motion.p variants={fadeUp} className="font-body text-muted-foreground text-base leading-relaxed mb-6">
                Awards include "Best in Tri-State", "Best in Ashland", "Reader's Choice Awards", and 2016's Northeast Kentucky Small Business of the Year. We have also been named a finalist in the "Global Salon Awards" given yearly by the UCLA Anderson School of Business.
              </motion.p>
              <motion.div variants={fadeUp} className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary-dark" />
                  <span className="font-body text-sm text-foreground font-medium">29+ Years of Service</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gift Cards & Mailing List */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Gift Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-primary-darker text-secondary-foreground rounded-xl p-10 md:p-12 text-center"
            >
              <h2 className="heading-section mb-4">Gift Cards</h2>
              <p className="font-body text-secondary-foreground/80 mb-8">
                Give the gift of relaxation. Our gift cards are the perfect present for any occasion.
              </p>
              <Button variant="hero" size="lg" asChild className="px-10 py-6 bg-primary text-primary-foreground hover:bg-primary/80">
                <Link to="/shop">Buy Now</Link>
              </Button>
            </motion.div>

            {/* Mailing List */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-accent rounded-xl p-10 md:p-12 text-center border border-border"
            >
              <h2 className="heading-section text-foreground mb-4">Join Our Mailing List</h2>
              <p className="font-body text-muted-foreground mb-8">
                Sign up to hear from us about specials, sales, and events.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-4 py-3 rounded-md bg-background border border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  aria-label="Email Address"
                />
                <Button variant="cta" type="submit">Sign Up</Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary-dark text-secondary-foreground text-center">
        <div className="container-site">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-2xl mx-auto"
          >
            <motion.h2 variants={fadeUp} className="heading-section mb-6">
              Ready to Relax?
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-secondary-foreground/80 text-lg mb-8">
              Book a time at our tranquil facility and experience the Studio 21 difference. Come take a break with us.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button variant="hero" size="lg" asChild className="px-12 py-6 text-base bg-primary-darker hover:bg-primary-darker/80">
                <Link to="/contact-us">Book Your Appointment</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
