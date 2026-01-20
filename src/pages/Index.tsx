import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import SectionHeading from "@/components/SectionHeading";

import heroImage from "@/assets/hero-wedding.jpg";

const testimonials = [
  {
    name: "Priya & Rahul",
    event: "Wedding Photography",
    content: "KRUTHI KAPTURES made our wedding day absolutely magical. Every photo tells a story, and they captured emotions we didn't even know we had. Truly exceptional work!",
    rating: 5,
  },
  {
    name: "Ananya Sharma",
    event: "Maternity Shoot",
    content: "The team was so professional and made me feel comfortable throughout the shoot. The photos are beyond beautiful - they're memories I'll cherish forever.",
    rating: 5,
  },
  {
    name: "Vikram & Sneha",
    event: "Pre-Wedding Shoot",
    content: "We wanted something different for our pre-wedding, and KRUTHI KAPTURES delivered beyond our expectations. Creative, artistic, and absolutely stunning!",
    rating: 5,
  },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="KRUTHI KAPTURES Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <div className="animate-fade-up">
            <span className="font-script text-8xl md:text-9xl text-[hsl(43,74%,49%)]">K</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-[0.2em] text-foreground mt-4 animate-fade-up delay-100">
            KRUTHI KAPTURES
          </h1>
          <p className="font-body text-lg md:text-xl text-[hsl(43,74%,49%)] italic mt-4 animate-fade-up delay-200">
            Thru our lens, ur life unfoldzzz…
          </p>
          <p className="font-body text-muted-foreground max-w-xl mx-auto mt-6 animate-fade-up delay-300">
            Capturing emotions, moments, and memories with passion. The art of storytelling through light.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-fade-up delay-400">
            <Button variant="gold" size="xl" asChild>
              <Link to="/contact">Book Your Shoot</Link>
            </Button>
            <Button variant="goldOutline" size="xl" asChild>
              <Link to="/services">
                View Services
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[hsl(43,74%,49%)]/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-[hsl(43,74%,49%)] rounded-full animate-fade-in" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Client Stories"
            subtitle="What our clients say about their experience with KRUTHI KAPTURES"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                {...testimonial}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-secondary via-background to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[hsl(43,74%,49%)] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="font-script text-6xl text-[hsl(43,74%,49%)] animate-fade-up">K</span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6 animate-fade-up delay-100">
            Ready to Create Magic?
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto mb-8 animate-fade-up delay-200">
            Let's capture your special moments together. Book a session with us and let your story unfold through our lens.
          </p>
          <Button variant="gold" size="xl" asChild className="animate-fade-up delay-300">
            <Link to="/contact">Book Your Shoot Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;