"use client";

import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { HiOutlineCheckCircle, HiOutlineCodeBracket, HiOutlineCpuChip, HiOutlineRocketLaunch } from 'react-icons/hi2';

const serviceDetails = {
  web: {
    title: "Web Development",
    description: "High-performance, scalable web architectures built for the modern internet. From Next.js applications to complex microservices, we build platforms that perform.",
    howWeUse: [
      "Agile development cycles with bi-weekly sprints.",
      "Component-driven development using React and TailwindCSS.",
      "Strict code reviews and automated testing pipelines.",
      "Headless CMS integration for content flexibility.",
      "Server-side rendering (SSR) and Incremental Static Regeneration (ISR) for SEO."
    ],
    whatWeUse: [
      "Next.js / React",
      "TypeScript",
      "TailwindCSS / Styled Components",
      "Node.js / Go / Python",
      "PostgreSQL / MongoDB / Redis",
      "Vercel / AWS / Docker"
    ]
  },
  mobile: {
    title: "Mobile Apps",
    description: "Creating immersive mobile experiences that live in your pocket. We focus on performance, accessibility, and high-quality UI/UX.",
    howWeUse: [
      "Cross-platform development with a single codebase.",
      "Native bridge implementation for high-performance tasks.",
      "Biometric security integration (FaceID, Fingerprint).",
      "Offline-first architecture with local SQLite storage.",
      "CI/CD for App Store and Play Store deployments."
    ],
    whatWeUse: [
      "React Native",
      "Swift / Kotlin (Native Modules)",
      "Redux / React Query",
      "Firebase / Supabase",
      "Branch.io (Deep Linking)",
      "Fastlane (Automation)"
    ]
  },
  ai: {
    title: "NexGen AI",
    description: "Integrating intelligence into your workflows. We specialize in LLMs, computer vision, and predictive analytics that solve real business problems.",
    howWeUse: [
      "Retrieval-Augmented Generation (RAG) for private data context.",
      "Fine-tuning open-source models for specific industry domains.",
      "Developing multi-agent systems for complex decision-making.",
      "Ethical AI frameworks to ensure bias reduction.",
      "Edge AI deployment for low-latency inference."
    ],
    whatWeUse: [
      "OpenAI / Anthropic / Meta Llama",
      "LangChain / LlamaIndex",
      "PyTorch / TensorFlow",
      "Pinecone / Weaviate (Vector DBs)",
      "Hugging Face",
      "NVIDIA CUDA"
    ]
  },
  ecommerce: {
    title: "E-Commerce",
    description: "Building storefronts that convert. From custom headless builds to enterprise Magento deployments, we scale your sales.",
    howWeUse: [
      "Conversion Rate Optimization (CRO) driven design.",
      "Secure payment gateway integrations (Stripe, Adyen).",
      "Multi-channel inventory management syncing.",
      "AI-powered product recommendation engines.",
      "High-speed checkout optimization."
    ],
    whatWeUse: [
      "Shopify Plus / Magento (Adobe Commerce)",
      "Builder.io / Sanity (Headless CMS)",
      "Stripe API",
      "Algolia (Search)",
      "Klaviyo (Marketing Automation)",
      "Google Analytics 4 / Hotjar"
    ]
  },
  cybersecurity: {
    title: "Cybersecurity & Zero Trust",
    description: "Protecting your digital assets with a security-first mindset. We implement Zero Trust principles and proactive threat detection.",
    howWeUse: [
      "Comprehensive vulnerability assessments and pen testing.",
      "Zero Trust Architecture (ZTA) implementation.",
      "Identity and Access Management (IAM) setup.",
      "24/7 Security Operations Center (SOC) monitoring.",
      "Regulatory compliance auditing (GDPR, SOC2, HIPAA)."
    ],
    whatWeUse: [
      "Okta / Auth0",
      "Cloudflare (WAF/Zero Trust)",
      "CrowdStrike",
      "Splunk (SIEM)",
      "HashiCorp Vault",
      "Kali Linux (Testing)"
    ]
  },
  specialized: {
    title: "Specialized Solutions",
    description: "Custom software for unique challenges. Whether it's ERP implementation or legacy migration, we have the expertise.",
    howWeUse: [
      "In-depth tech debt analysis and migration roadmapping.",
      "Custom ERP/CRM integrations tailored to business logic.",
      "Scalable cloud infrastructure design.",
      "Legacy system refactoring for modern performance.",
      "Full-cycle dedicated software development teams."
    ],
    whatWeUse: [
      "SAP / Oracle Integration",
      "Microsoft Azure / GCP / AWS",
      "Kubernetes / Terraform",
      "Jenkins / GitHub Actions",
      "Microservices Architecture",
      "Apache Kafka"
    ]
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const service = serviceDetails[id as keyof typeof serviceDetails];

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container px-4 md:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <SectionHeading 
            title={service.title}
            subtitle={service.description}
            gradient
          />
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* How we use it */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 flex items-center justify-center text-neon-cyan text-2xl">
                <HiOutlineRocketLaunch />
              </div>
              <h2 className="text-3xl font-bold">How We Use It</h2>
            </div>
            
            <div className="space-y-6">
              {service.howWeUse.map((item, index) => (
                <div key={index} className="flex gap-4 p-6 glass-card border border-white/5 bg-white/2 hover:border-neon-cyan/30 transition-all">
                  <HiOutlineCheckCircle className="text-neon-cyan text-xl flex-shrink-0 mt-1" />
                  <p className="text-text-secondary leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* What we use (Tech Stack) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center text-neon-purple text-2xl">
                <HiOutlineCodeBracket />
              </div>
              <h2 className="text-3xl font-bold">What We Use</h2>
            </div>

            <Card className="p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.whatWeUse.map((tech, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                    <HiOutlineCpuChip className="text-neon-purple" />
                    <span className="font-medium">{tech}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5 border border-white/10">
                <h4 className="font-bold mb-2">Enterprise Ready</h4>
                <p className="text-sm text-text-secondary">
                  Our stack is selected for stability, security, and global scalability. We continuously evaluate and update our toolchain to stay at the cutting edge.
                </p>
              </div>
            </Card>

            <div className="mt-12 flex flex-col gap-6">
              <h3 className="text-2xl font-bold">Ready to scale?</h3>
              <p className="text-text-secondary">
                Let&apos;s discuss how we can apply our specialized {service.title} expertise to your unique business challenges.
              </p>
              <Button href="/contact">Start a Project</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
