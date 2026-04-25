"use client";

import SectionHeading from '@/components/ui/SectionHeading';
import CTA from '@/components/sections/CTA';
import Card from '@/components/ui/Card';
import { HiOutlineLightBulb, HiOutlineRocketLaunch, HiOutlineStar } from 'react-icons/hi2';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const values = [
    { title: "Innovation", desc: "Pushing the boundaries of what's possible with LLMs and Computer Vision.", icon: <HiOutlineLightBulb /> },
    { title: "Integrity", desc: "Building transparent, ethical AI that respects user privacy and data sovereignty.", icon: <HiOutlineStar /> },
    { title: "Impact", desc: "Focusing on real-world ROI and operational efficiency for our global partners.", icon: <HiOutlineRocketLaunch /> },
  ];

  return (
    <div className="bg-background-primary min-h-screen">
      <section className="section pt-32 md:pt-48 pb-20">
        <div className="container px-6 sm:px-8">
          <SectionHeading 
            title="About PDS" 
            subtitle="Our vision, our mission, and the team bringing autonomous AI to the enterprise."
            gradient
            align="left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mt-12 items-center">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 text-text-primary leading-none">
                The PDS Journey
              </h2>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-6 font-medium">
                Proser Digital Solutions is a software vertical of ProSer Group of Companies. Founded in 2010, ProSer Digital Solutions has expertise in Custom Application Development and Software Product Innovation.
              </p>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-6 font-medium">
                We have a specialized team of designers, developers, and testers to deliver best-in-class Quality services to our valuable clients. Client satisfaction forms the core of our services.
              </p>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed font-medium">
                Our young, energetic, and tech-savvy team ensures our deliverables utilize the latest innovative technologies. Our smart work will often describe who we are!
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
                <Card glowColor="cyan" className="flex flex-col items-center justify-center p-6 min-h-[160px] md:min-h-[200px]">
                  <h3 className="text-gradient text-3xl md:text-5xl font-black mb-2 leading-none">16+</h3>
                  <p className="text-text-secondary text-xs md:text-sm font-bold uppercase tracking-widest text-center">Years of Excellence</p>
                </Card>
                <Card className="flex flex-col items-center justify-center p-6 min-h-[160px] md:min-h-[200px]">
                  <h3 className="text-text-primary text-3xl md:text-5xl font-black mb-2 leading-none">50+</h3>
                  <p className="text-text-secondary text-xs md:text-sm font-bold uppercase tracking-widest text-center">Experts Worldwide</p>
                </Card>
                <Card className="flex flex-col items-center justify-center p-6 min-h-[160px] md:min-h-[200px]">
                  <h3 className="text-text-primary text-3xl md:text-5xl font-black mb-2 leading-none">150+</h3>
                  <p className="text-text-secondary text-xs md:text-sm font-bold uppercase tracking-widest text-center">Projects Delivered</p>
                </Card>
                <Card glowColor="purple" className="flex flex-col items-center justify-center p-6 min-h-[160px] md:min-h-[200px]">
                  <h3 className="text-gradient text-3xl md:text-5xl font-black mb-2 leading-none">98%</h3>
                  <p className="text-text-secondary text-xs md:text-sm font-bold uppercase tracking-widest text-center">Growth Rate</p>
                </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section py-20 overflow-hidden bg-background-secondary/20 border-y border-text-primary/5">
        <div className="container px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
             <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="h-full"
             >
                <div className="p-8 md:p-12 h-full bg-gradient-to-br from-neon-cyan/10 to-transparent border border-neon-cyan/20 rounded-3xl">
                  <h3 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tight flex items-center gap-3">
                    <span className="text-neon-cyan">01.</span> Our Vision
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed font-medium">
                    To be the global catalyst for the autonomous age, where business intelligence is not just a tool, but a seamless, self-evolving ecosystem that empowers humanity to focus on creativity.
                  </p>
                </div>
             </motion.div>

             <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="h-full"
             >
                <div className="p-8 md:p-12 h-full bg-gradient-to-br from-neon-purple/10 to-transparent border border-neon-purple/20 rounded-3xl">
                  <h3 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tight flex items-center gap-3">
                    <span className="text-neon-purple">02.</span> Our Mission
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed font-medium">
                    We engineer premium, scalable software solutions that bridge the gap between legacy operations and future-ready AI. We are dedicated to technical excellence and driving measurable ROI.
                  </p>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section py-24 md:py-32 bg-background-primary">
        <div className="container px-6 sm:px-8">
          <SectionHeading 
            title="The methodology"
            subtitle="How we deliver consistently high-quality results at scale."
            align="left"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { title: "Analysis", desc: "Custom application development tailored precisely to your specific requirements." },
              { title: "Develop", desc: "Expertise in crafting robust Web and Mobile ecosystems using cutting-edge tools." },
              { title: "Qualify", desc: "Ensuring top-tier quality via comprehensive manual and automated testing methods." },
              { title: "Deploy", desc: "Seamless cloud solutions ensuring your project runs flawlessly on day one." }
            ].map((item, i) => (
              <Card key={i} delay={i * 0.1} className="group hover:bg-text-primary/[0.02] transition-colors relative h-full">
                  <div className="text-xs font-black text-neon-cyan mb-4 uppercase tracking-[0.3em]">Phase {i + 1}</div>
                  <h4 className="text-xl md:text-2xl font-black uppercase mb-4 text-text-primary">{item.title}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed font-medium">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTA 
        title="Ready to Build the Future?" 
        subtitle="39/1 Manik Baug, Sinhagad road, Pune, Maharashtra 411051" 
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
      />
    </div>
  );
}
