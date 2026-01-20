import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format the message for WhatsApp
    const whatsappMessage = `New Inquiry from KRUTHI KAPTURES Website:
    
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Message:
${formData.message}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp business number (using the existing number from the contact info)
    const whatsappNumber = "919743656533";
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    toast({
      title: "Redirecting to WhatsApp!",
      description: "We're opening WhatsApp to send your message. Please press send in WhatsApp to submit your inquiry.",
    });

    // Reset form
    setFormData({ name: "", phone: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-body text-sm text-primary tracking-wider uppercase mb-4 block animate-fade-up">
              Get In Touch
            </span>
            <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6 animate-fade-up delay-100">
              Contact Us
            </h1>
            <p className="font-body text-muted-foreground animate-fade-up delay-200">
              Ready to capture your special moments? Let's connect and create something beautiful together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-up">
              <h2 className="font-display text-3xl text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-body text-sm text-muted-foreground mb-2 block">Your Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-card border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-muted-foreground mb-2 block">Phone Number</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                    className="bg-card border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-muted-foreground mb-2 block">Email Address</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-card border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-muted-foreground mb-2 block">Your Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event, preferred dates, and any special requirements..."
                    rows={5}
                    required
                    className="bg-card border-border focus:border-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="premium"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Preparing WhatsApp..." : "Send via WhatsApp"}
                  <Send size={18} />
                </Button>
              </form>
              <p className="font-body text-xs text-muted-foreground mt-4 text-center">
                By submitting this form, you'll be redirected to WhatsApp to send your message.
              </p>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-up delay-200">
              <h2 className="font-display text-3xl text-foreground mb-6">Contact Information</h2>
              <p className="font-body text-muted-foreground mb-8">
                Prefer to reach out directly? Here's how you can connect with us.
              </p>

              <div className="space-y-6">
                <a
                  href="tel:+919743656533"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">Call Us</p>
                    <p className="font-display text-lg text-foreground">+91 97436 56533</p>
                  </div>
                </a>

                <a
                  href="mailto:KruthiKaptures@gmail.com"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">Email Us</p>
                    <p className="font-display text-lg text-foreground">KruthiKaptures@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919743656533"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg hover:border-green-500 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-display text-lg text-foreground">+91 97436 56533</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">Studio Location</p>
                    <p className="font-display text-lg text-foreground">Bangalore, Karnataka</p>
                    <p className="font-body text-sm text-muted-foreground mt-1">India - 560001</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="font-display text-xl text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  >
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Find Us"
            subtitle="Visit our studio in Bangalore"
          />
          <div className="aspect-[21/9] rounded-lg overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.49085452149516!3d12.954517009617722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KRUTHI KAPTURES Location"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;