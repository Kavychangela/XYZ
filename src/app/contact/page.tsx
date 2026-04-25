"use client";

import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  return (
    <div className="bg-background-primary min-h-screen">
      <section className="section pt-32 md:pt-48 pb-20 overflow-hidden relative">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-neon-cyan opacity-5 blur-[150px] pointer-events-none rounded-full" />
        
        <div className="container px-6 sm:px-8 relative z-10">
          <SectionHeading
            title="Get In Touch"
            subtitle="Whether you're looking for enterprise AI solutions or a comprehensive web build—we're here to help."
            gradient
            align="left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mt-12 items-start">
            {/* Contact Form */}
            <div className="bg-text-primary/[0.02] border border-text-primary/10 p-8 md:p-12 rounded-3xl">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-10 text-text-primary underline decoration-neon-cyan decoration-4 underline-offset-8">Send a Message</h3>

              <form className="flex flex-col gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-text-secondary text-[10px] font-black uppercase tracking-widest">First Name</label>
                    <input type="text" placeholder="John" className="bg-background-primary border-b border-text-primary/20 py-4 font-outfit text-white outline-none focus:border-neon-cyan transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-text-secondary text-[10px] font-black uppercase tracking-widest">Last Name</label>
                    <input type="text" placeholder="Doe" className="bg-background-primary border-b border-text-primary/20 py-4 font-outfit text-white outline-none focus:border-neon-cyan transition-colors" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-text-secondary text-[10px] font-black uppercase tracking-widest">Work Email</label>
                  <input type="email" placeholder="john@company.com" className="bg-background-primary border-b border-text-primary/20 py-4 font-outfit text-white outline-none focus:border-neon-cyan transition-colors" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-text-secondary text-[10px] font-black uppercase tracking-widest">How can we help?</label>
                  <textarea rows={4} placeholder="Project scope or AI needs..." className="bg-background-primary border-b border-text-primary/20 py-4 font-outfit text-white outline-none focus:border-neon-cyan transition-colors resize-none"></textarea>
                </div>

                <Button variant="primary" className="mt-8 py-5 text-lg skew-x-[-12deg] rounded-none">
                    <span className="skew-x-[12deg]">TRANSMIT ENQUIRY</span>
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-12 lg:pt-12">
              <div>
                <h4 className="text-neon-cyan text-xs font-black uppercase tracking-[0.4em] mb-6">// Global HQ</h4>
                <p className="text-text-secondary text-base md:text-lg leading-relaxed font-medium">
                  39/1 Manik Baug, Sinhagad road,<br />
                  Uma Housing Society, Niranjan Park,<br />
                  Pune, Maharashtra 411051
                </p>
              </div>

              <div>
                <h4 className="text-neon-purple text-xs font-black uppercase tracking-[0.4em] mb-6">// Communications</h4>
                <p className="text-text-secondary text-base md:text-lg leading-relaxed font-medium">
                  Email: info@proserindustries.com<br />
                  Phone: +91 9284870790<br />
                  Support: support@proserindustries.com
                </p>
                
                <div className="mt-8">
                  <Button 
                    href="https://wa.me/919284870790" 
                    variant="outline" 
                    className="flex items-center gap-4 text-[#25D366] border-[#25D366]/30 hover:bg-[#25D366] hover:border-[#25D366] group"
                  >
                    <span className="group-hover:text-white transition-colors">Chat on WhatsApp</span>
                  </Button>
                </div>
              </div>

              {/* Map */}
              <div className="border border-text-primary/10 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all h-[300px] overflow-hidden rounded-2xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.444772648719!2d73.8184518!3d18.47482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2959828cc7e0b%3A0x6b86ab8b39d1b09b!2sPro%20Se%20Ra%20Ashutosh%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1713960000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
