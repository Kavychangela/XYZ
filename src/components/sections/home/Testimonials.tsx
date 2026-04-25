"use client";

import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

const reviews = [
  { 
    name: "John Miller", 
    role: "CTO, GlobalTech", 
    text: "PDS transformed our operations. Their agents resolved 75% of tickets without intervention in the first month." 
  },
  { 
    name: "Sarah Chen", 
    role: "Head of AI, NexaHealth", 
    text: "The Vision AI integration was flawless. Their team truly knows how to handle complex healthcare datasets." 
  },
  { 
    name: "Alex Rivera", 
    role: "Founder, RapidSaaS", 
    text: "Quickest implementation I've seen. Concept to fully functional RAG-powered chatbot in just 3 weeks." 
  }
];

export default function Testimonials() {
  return (
    <section className="section bg-background-primary py-24 md:py-32 border-b border-text-primary/5">
      <div className="container px-6 sm:px-8">
        <SectionHeading 
          title="The Feedback"
          subtitle="Measurable impact through intelligent automation."
          gradient
          align="left"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {reviews.map((review, i) => (
            <Card key={i} className="group hover:bg-text-primary/[0.02] transition-all relative overflow-hidden flex flex-col h-full">
              <div className="text-[120px] font-black text-text-primary/[0.02] absolute -top-10 -right-5 select-none pointer-events-none group-hover:text-neon-cyan/[0.05] transition-colors leading-none">
                &quot;
              </div>

              <p className="text-text-secondary leading-relaxed text-base md:text-lg mb-12 relative z-10 italic">
                &quot;{review.text}&quot;
              </p>
              
              <div className="mt-auto flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neon-cyan flex items-center justify-center text-black font-black text-xl">
                   <span>{review.name[0]}</span>
                </div>
                <div>
                   <h5 className="text-text-primary font-black uppercase tracking-tighter text-lg leading-none mb-1">{review.name}</h5>
                   <p className="text-text-secondary text-xs uppercase tracking-widest font-bold">{review.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
