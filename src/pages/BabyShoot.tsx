import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BabyShootGallery from "@/components/BabyShootGallery";

const BabyShoot = () => {
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
              Baby Shoot Gallery
            </h1>
            <p className="font-body text-muted-foreground animate-fade-up delay-200">
              Adorable baby portraits and milestone shoots that capture those precious early moments you'll treasure forever.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-8 pb-24">
        <BabyShootGallery />
      </section>

      <Footer />
    </main>
  );
};

export default BabyShoot;