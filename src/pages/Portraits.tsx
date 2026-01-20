import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortraitsGallery from "@/components/PortraitsGallery";

const Portraits = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-body text-sm text-primary tracking-wider uppercase mb-4 block animate-fade-up">
              Our Work
            </span>
            <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6 animate-fade-up delay-100">
              Portraits Gallery
            </h1>
            <p className="font-body text-muted-foreground animate-fade-up delay-200">
              Professional portrait sessions that reveal your personality and essence. From corporate headshots to artistic portraits.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-8 pb-24">
        <PortraitsGallery />
      </section>

      <Footer />
    </main>
  );
};

export default Portraits;