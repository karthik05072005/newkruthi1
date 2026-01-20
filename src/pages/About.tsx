import { Link } from "react-router-dom";
import { ArrowRight, Target, Sparkles, Heart, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import photographerPortrait from "@/assets/photographer-portrait.jpg";
import heroWedding from "@/assets/hero-wedding.jpg";
const values = [{
  icon: Sparkles,
  title: "Creativity",
  description: "Every shoot is a canvas where we paint stories with light, shadow, and emotion."
}, {
  icon: Target,
  title: "Precision",
  description: "Attention to detail in every frame, ensuring nothing less than perfection."
}, {
  icon: Heart,
  title: "Emotion",
  description: "We capture feelings, not just faces. Every photo should stir the soul."
}, {
  icon: Camera,
  title: "Excellence",
  description: "Premium quality in every deliverable, from capture to final edit."
}];
const About = () => {
  return <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroWedding} alt="Background" className="w-full h-full object-cover blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-body text-sm text-primary tracking-wider uppercase mb-4 block animate-fade-up">
              Our Story
            </span>
            <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6 animate-fade-up delay-100">
              About KRUTHI KAPTURES
            </h1>
            <p className="font-body text-xl text-primary italic animate-fade-up delay-200">
              Where passion meets precision
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-fade-up">
              <img src={photographerPortrait} alt="Guru Prasad - Founder" className="w-full rounded-lg shadow-card" />
              
            </div>

            <div className="animate-fade-up delay-200">
              <h2 className="font-display text-4xl text-foreground mb-6">
                The Journey of a Thousand Frames
              </h2>
              <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
                <p>
                  KRUTHI KAPTURES was born in 2016 from the creative vision of <span className="text-foreground">Guru Prasad</span>, an engineering graduate who discovered that his true calling wasn't in algorithms and code, but in capturing the poetry of human emotions through his lens.
                </p>
                <p>
                  What started as weekend shoots for friends' weddings quickly evolved into a passion project that couldn't be contained. Guru's unique ability to see stories in stolen glances and find art in candid moments set KRUTHI KAPTURES apart from the very beginning.
                </p>
                <p>
                  Today, KRUTHI KAPTURES is renowned for its <span className="text-primary">cinematic storytelling</span>, <span className="text-primary">artistic editing</span>, and <span className="text-primary">premium-quality photography services</span>. With every click, we don't just take photographs – we capture emotions, preserve memories, and create timeless art.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-script text-6xl text-primary animate-fade-up">K</span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-8 animate-fade-up delay-100">
              Our Vision
            </h2>
            <blockquote className="font-display text-2xl md:text-3xl text-foreground italic leading-relaxed animate-fade-up delay-200">
              "To freeze time and turn memories into art"
            </blockquote>
            <p className="font-body text-muted-foreground mt-8 max-w-2xl mx-auto animate-fade-up delay-300">
              Every moment is precious, every emotion is fleeting. Our mission is to capture these ephemeral instances and transform them into eternal treasures that you can hold, share, and relive for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading title="Our Values" subtitle="The principles that guide every shot we take" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => <div key={value.title} className="bg-card border border-border rounded-lg p-8 text-center hover-lift animate-fade-up" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{value.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{value.description}</p>
              </div>)}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl text-foreground mb-6 animate-fade-up">
            Let's Create Together
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto mb-8 animate-fade-up delay-100">
            Ready to turn your special moments into timeless memories? We'd love to be part of your story.
          </p>
          <Button variant="premium" size="xl" asChild className="animate-fade-up delay-200">
            <Link to="/contact">
              Get In Touch
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>;
};
export default About;