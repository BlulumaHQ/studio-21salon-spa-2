import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Gift, ShoppingBag } from "lucide-react";
import spaProducts from "@/assets/spa-products.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Shop = () => {
  return (
    <main className="pb-16 md:pb-0">
      {/* Hero */}
      <section className="bg-primary-darker text-secondary-foreground py-32 md:py-40 text-center">
        <div className="container-site">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-body text-primary text-sm uppercase tracking-[0.2em] mb-4">
            Studio 21 Salon and Spa
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="heading-hero mb-6">
            Shop
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }} className="font-body text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
            Browse our curated selection of premium spa products and gift cards.
          </motion.p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="font-body text-secondary text-sm uppercase tracking-[0.15em] mb-3">Featured</p>
            <h2 className="heading-section text-foreground mb-4">Featured Products</h2>
            <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
              Many people underestimate the effect high-quality lotions and oils have on a spa treatment. We guarantee all of our products help you with that extra feeling of zen.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-4xl mx-auto"
          >
            <img
              src={spaProducts}
              alt="Studio 21 featured spa products"
              className="w-full rounded-lg h-64 md:h-96 object-cover mb-12"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Gift Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-primary-darker text-secondary-foreground rounded-xl p-10 text-center"
            >
              <Gift className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <h3 className="heading-card mb-3">Gift Cards</h3>
              <p className="font-body text-sm opacity-80 mb-6">
                Give the gift of relaxation to someone special. Perfect for any occasion.
              </p>
              <Button variant="hero" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 px-8">
                Buy Now
              </Button>
            </motion.div>

            {/* Products */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-accent rounded-xl p-10 text-center border border-border"
            >
              <ShoppingBag className="h-12 w-12 mx-auto mb-4 text-primary-dark" />
              <h3 className="heading-card text-foreground mb-3">Spa Products</h3>
              <p className="font-body text-muted-foreground text-sm mb-6">
                Take the spa experience home with our professional-grade lotions, oils, and skincare products.
              </p>
              <Button variant="cta" size="lg" asChild className="px-8">
                <Link to="/contact-us">Inquire Now</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-dark text-secondary-foreground text-center">
        <div className="container-site max-w-2xl">
          <h2 className="heading-section mb-6">Visit Us In Person</h2>
          <p className="font-body text-secondary-foreground/80 text-lg mb-8">
            Stop by our location in the historic downtown Ashland area to browse our full collection of products and gift options.
          </p>
          <Button variant="hero" size="lg" asChild className="px-12 py-6 text-base bg-primary-darker hover:bg-primary-darker/80">
            <Link to="/contact-us">Get Directions</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Shop;
