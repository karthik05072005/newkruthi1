import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import RotatingBabyShootImage from "@/components/RotatingBabyShootImage";
import RotatingCandidWeddingImage from "@/components/RotatingCandidWeddingImage";
import RotatingEngagementImage from "@/components/RotatingEngagementImage";
import RotatingMaternityImage from "@/components/RotatingMaternityImage";
import RotatingPreWeddingImage from "@/components/RotatingPreWeddingImage";
import RotatingPortraitsImage from "@/components/RotatingPortraitsImage";

import candidVideo from "@/assets/candid-video.jpg";
import candidWedding from "@/assets/candid-wedding.jpg";
import engagement from "@/assets/engagement.jpg";
import portrait from "@/assets/portrait.jpg";
import preWedding from "@/assets/pre-wedding.jpg";
import maternity from "@/assets/maternity.jpg";
import events from "@/assets/events.jpg";
import traditionalWedding from "@/assets/traditional-wedding.jpg";
import birthdayShoot from "@/assets/birthday-shoot.jpg";
import productShoot from "@/assets/product-shoot.jpg";
import fashionShoot from "@/assets/fashion-shoot.jpg";

const services = [
  {
    title: "Baby Shoot",
    description: "Adorable baby portraits and milestone shoots that capture those precious early moments you'll treasure forever.",
    image: "rotating-baby", // Special identifier for rotating images
    link: "/baby-shoot"
  },
  {
    title: "Candid Wedding",
    description: "Natural, unposed moments captured with artistic flair. We become invisible observers, documenting genuine emotions and spontaneous joy.",
    image: "rotating-candid", // Special identifier for rotating images
    link: "/candid-wedding"
  },
  {
    title: "Engagement",
    description: "Celebrate your commitment with beautiful engagement photography that captures the excitement and love of this special milestone.",
    image: "rotating-engagement", // Special identifier for rotating images
    link: "/engagement"
  },
  {
    title: "Maternity",
    description: "Beautiful maternity photography celebrating the journey of motherhood. Elegant, graceful, and deeply personal.",
    image: "rotating-maternity", // Special identifier for rotating images
    link: "/maternity"
  },

  {
    title: "Pre Wedding",
    description: "Romantic pre-wedding shoots at stunning locations. Tell your love story through creative concepts and breathtaking imagery.",
    image: "rotating-pre-wedding", // Special identifier for rotating images
    link: "/pre-wedding"
  },
  {
    title: "Portraits",
    description: "Professional portrait sessions that reveal your personality and essence. From corporate headshots to artistic portraits.",
    image: "rotating-portraits", // Special identifier for rotating images
    link: "/portraits"
  },
];

const Services = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-body text-sm text-primary tracking-wider uppercase mb-4 block animate-fade-up">
              What We Offer
            </span>
            <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6 animate-fade-up delay-100">
              Our Services
            </h1>
            <p className="font-body text-muted-foreground animate-fade-up delay-200">
              From intimate portraits to grand celebrations, we offer a comprehensive range of photography and videography services tailored to capture your most precious moments.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-card border border-border rounded-lg overflow-hidden hover-lift animate-fade-up"
                style={{ animationDelay: `${(index % 6) * 100}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {service.image === "rotating-baby" ? (
                    <RotatingBabyShootImage />
                  ) : service.image === "rotating-candid" ? (
                    <RotatingCandidWeddingImage />
                  ) : service.image === "rotating-engagement" ? (
                    <RotatingEngagementImage />
                  ) : service.image === "rotating-maternity" ? (
                    <RotatingMaternityImage />
                  ) : service.image === "rotating-pre-wedding" ? (
                    <RotatingPreWeddingImage />
                  ) : service.image === "rotating-portraits" ? (
                    <RotatingPortraitsImage />
                  ) : (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-foreground mb-3">{service.title}</h3>
                  <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 font-body text-sm text-primary hover:gap-3 transition-all duration-300"
                  >
                    View Gallery
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Our Process"
            subtitle="Simple steps to capture your perfect moments"
          />
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Consultation", description: "Discuss your vision, preferences, and requirements" },
              { step: "02", title: "Planning", description: "Create a detailed shoot plan and timeline" },
              { step: "03", title: "Shoot Day", description: "Capture your moments with care and creativity" },
              { step: "04", title: "Delivery", description: "Receive beautifully edited photos and videos" },
            ].map((item, index) => (
              <div
                key={item.step}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-primary flex items-center justify-center">
                  <span className="font-display text-xl text-primary">{item.step}</span>
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl text-foreground mb-6 animate-fade-up">
            Ready to Book Your Session?
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto mb-8 animate-fade-up delay-100">
            Let's discuss your photography needs and create something beautiful together.
          </p>
          <Button variant="premium" size="xl" asChild className="animate-fade-up delay-200">
            <Link to="/contact">
              Get a Quote
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;