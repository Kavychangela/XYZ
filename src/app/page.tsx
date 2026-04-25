import Hero from '@/components/sections/home/Hero';
import Trust from '@/components/sections/home/Trust';
import WhyPDS from '@/components/sections/home/WhyPDS';
import ServicesOverview from '@/components/sections/home/ServicesOverview';
import Process from '@/components/sections/home/Process';
import AICapabilities from '@/components/sections/home/AICapabilities';
import TechStack from '@/components/sections/home/TechStack';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <WhyPDS />
      <ServicesOverview />
      <Process />
      <AICapabilities />
      <TechStack />
      <CTA 
        title="Ready to Scale Your Business with AI?"
        subtitle="Book a strategic discovery call to see how PDS can automate your complex workflows."
      />
    </>
  );
}
