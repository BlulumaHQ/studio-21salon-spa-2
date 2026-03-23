import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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

const services = [
  {
    title: "Massage Therapy",
    description: "From therapeutic deep tissue to relaxing Swedish massage, our trained therapists help you release tension and restore balance. Experience complete relaxation in our tranquil treatment rooms.",
    image: massageService,
  },
  {
    title: "Facials & Skin Care",
    description: "Our professional facials and advanced skin treatments are customized to your skin type and concerns. Using high-quality products, we help you achieve radiant, healthy-looking skin.",
    image: facialTreatment,
  },
  {
    title: "Manicures & Pedicures",
    description: "Pamper your hands and feet with our luxury nail services. From classic manicures to spa pedicures, we deliver beautifully polished results every time.",
    image: nailsService,
  },
  {
    title: "Salt Scrubs",
    description: "Our exfoliating salt scrub body treatments remove dead skin cells and leave your skin feeling silky smooth. A perfect complement to any massage or facial treatment.",
    image: saltScrub,
  },
  {
    title: "Microblading",
    description: "Achieve beautifully defined, natural-looking eyebrows with our precision microblading service. Our trained professionals create long-lasting results tailored to your facial features.",
    image: microblading,
  },
  {
    title: "Skin Treatments",
    description: "We offer a range of advanced skin treatments designed to address specific concerns and enhance your natural beauty. Our team uses professional-grade products for superior results.",
    image: spaInterior,
  },
];

const Services = () => {
  return (
    <main className="pb-16 md:pb-0">
      {/* Hero */}
      <section className="relative py-32 md:py-40">
        <div className="absolute inset-0">
          <img src={heroSpa} alt="Studio 21 services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary-darker/85" />
        </div>
        <div className="relative container-site text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-body text-primary text-sm uppercase tracking-[0.2em] mb-4">
            Studio 21 Salon and Spa
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="heading-hero text-secondary-foreground mb-6">
            Our Services
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }} className="font-body text-secondary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Book a time at our tranquil facility for manicures, pedicures, massage, facials, and skin treatments.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}>
            <Button variant="hero" size="lg" asChild className="px-10 py-6">
              <Link to="/contact-us">Book Online</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  i % 2 === 1 ? "md:direction-rtl" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-72 md:h-96 object-cover rounded-lg"
                  />
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <h2 className="heading-section text-foreground mb-4">{service.title}</h2>
                  <p className="font-body text-muted-foreground text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button variant="cta" size="lg" asChild>
                    <Link to="/contact-us" className="flex items-center gap-2">
                      Book This Service <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-dark text-secondary-foreground text-center">
        <div className="container-site max-w-2xl">
          <h2 className="heading-section mb-6">Ready to Book?</h2>
          <p className="font-body text-secondary-foreground/80 text-lg mb-8">
            Come take a break with us. Our highly trained team is ready to provide you with a complete experience of personal well-being.
          </p>
          <Button variant="hero" size="lg" asChild className="px-12 py-6 text-base bg-primary-darker hover:bg-primary-darker/80">
            <Link to="/contact-us">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Services;
