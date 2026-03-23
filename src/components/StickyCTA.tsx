import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const StickyCTA = () => {
  return (
    <>
      {/* Desktop: Fixed right-side button */}
      <div className="hidden md:block fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <Button
          variant="cta"
          size="lg"
          asChild
          className="rounded-l-lg rounded-r-none py-6 px-5 shadow-2xl flex flex-col gap-1 h-auto"
        >
          <Link to="/contact-us">
            <Calendar className="h-5 w-5" />
            <span className="text-[10px]">Book Now</span>
          </Link>
        </Button>
      </div>

      {/* Mobile: Sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-primary-darker p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
        <Button variant="hero" size="lg" asChild className="w-full">
          <Link to="/contact-us">Book Your Appointment</Link>
        </Button>
      </div>
    </>
  );
};

export default StickyCTA;
