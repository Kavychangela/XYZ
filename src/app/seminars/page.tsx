"use client";

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { HiOutlineCalendarDays, HiOutlineMapPin, HiOutlineUsers, HiOutlineMicrophone } from 'react-icons/hi2';

const seminars = [
  {
    title: "Autonomous AI Agents",
    date: "MAY 15, 2026",
    time: "10:00 - 14:00 GST",
    location: "DUBAI HQ / HYBRID",
    description: "Next-gen autonomous agents demonstration. Deep dive into RAG pipelines and self-healing systems.",
    speaker: "Dr. Sarah Chen, AI Lead",
    attendees: "500+ CAP"
  },
  {
    title: "Modern Architectures",
    date: "JUNE 05, 2026",
    time: "11:00 - 13:00 GMT",
    location: "LONDON / VIRTUAL",
    description: "Building resilient enterprise apps with Next.js 16. Focus on Edge Ops and Server Actions.",
    speaker: "Marco Rossi, Architect",
    attendees: "350+ CAP"
  },
  {
    title: "Cybersecurity Protocol",
    date: "JUNE 22, 2026",
    time: "15:00 - 17:00 IST",
    location: "REMOTE OPS",
    description: "Zero Trust implementation in the age of LLMs. Defensive and offensive tactical AI patterns.",
    speaker: "Alex Rivera, CSO",
    attendees: "200+ CAP"
  }
];

export default function SeminarsPage() {
  return (
    <div className="bg-background-primary min-h-screen">
      <section className="section pt-32 md:pt-48 pb-20">
        <div className="container px-6 sm:px-8">
            <SectionHeading 
                title="Seminars" 
                subtitle="High-velocity workshops and technical summits on the future of autonomous technology."
                gradient
                align="left"
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12 mb-32">
                {seminars.map((seminar, i) => (
                    <Card
                        key={i}
                        delay={i * 0.1}
                        className="p-10 md:p-14 group hover:bg-text-primary/[0.02] transition-all h-full rounded-3xl"
                    >
                        <div className="flex justify-between items-start mb-10">
                            <span className="text-[10px] font-black text-neon-cyan uppercase tracking-[0.4em]">INITIATING</span>
                            <div className="flex items-center gap-2 text-[10px] font-black text-text-primary/40 uppercase tracking-widest">
                                <HiOutlineUsers /> {seminar.attendees}
                            </div>
                        </div>

                        <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 text-text-primary group-hover:text-neon-cyan transition-colors leading-none">
                            {seminar.title}
                        </h3>
                        
                        <p className="text-text-secondary text-base leading-relaxed mb-10 font-medium h-[80px] overflow-hidden">
                            {seminar.description}
                        </p>

                        <div className="space-y-4 mb-12">
                            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-text-primary">
                                <HiOutlineCalendarDays className="text-neon-purple text-lg" />
                                <span>{seminar.date} / {seminar.time}</span>
                            </div>
                            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-text-primary">
                                <HiOutlineMapPin className="text-neon-purple text-lg" />
                                <span>{seminar.location}</span>
                            </div>
                            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-text-primary">
                                <HiOutlineMicrophone className="text-neon-purple text-lg" />
                                <span>SPEAKER: {seminar.speaker.split(',')[0]}</span>
                            </div>
                        </div>

                        <Button variant="primary" className="w-full py-4 skew-x-[-12deg] rounded-none">
                            <span className="skew-x-[12deg]">SECURE SEAT</span>
                        </Button>
                    </Card>
                ))}
            </div>

            <SectionHeading 
                title="Visual Archives" 
                subtitle="Highlights from our local and global community initiatives."
                align="left"
            />
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                    <motion.div 
                        key={i}
                        className="relative aspect-[4/3] border border-text-primary/10 overflow-hidden group rounded-2xl"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        viewport={{ once: true }}
                    >
                        <img 
                            src={`https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=800`} 
                            alt={`Activity ${i}`}
                            className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-transparent to-transparent p-8 flex flex-col justify-end">
                            <h4 className="font-black text-text-primary uppercase tracking-tighter text-xl">Operational Highlights {i}</h4>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neon-cyan mt-2">Archive Protocol #3492</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-32 p-12 lg:p-20 border border-text-primary/10 bg-text-primary/[0.02] text-center relative overflow-hidden rounded-[40px]">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-cyan"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-cyan"></div>
                
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-none">Propose a Summit.</h2>
                <p className="text-text-secondary mb-10 max-w-xl mx-auto font-medium">
                    Is there a critical technology or AI shift we should cover? Collaborate with us on the next local community workshop.
                </p>
                <Button href="/contact" variant="outline" className="px-10 py-5">INITIATE REQUEST</Button>
            </div>
        </div>
      </section>
    </div>
  );
}
