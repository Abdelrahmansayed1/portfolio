"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Lock,
  ChevronRight,
  Building2,
  Home,
  Bot,
  Target,
  TrendingUp,
  MapPin,
} from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  location: string;
  isConfidential?: boolean;
  companyLogo?: string;
  images?: string[];
  frontend: string[];
  backend: string[];
  highlights: string[];
  challenge?: string;
  outcome?: string;
  link?: string;
  iconType?: "building" | "home" | "ai";
}

const projects: Project[] = [
  {
    id: "healthcare-platform",
    title: "Healthcare Platform",
    subtitle: "Enterprise Health Tech",
    description:
      "A comprehensive healthcare application designed to streamline patient care and medical data management. Worked on complex features spanning both frontend and backend, implementing robust data visualization, rich text editing, and secure authentication systems.",
    role: "Full-Stack Engineer",
    location: "USA · Remote",
    isConfidential: true,
    challenge:
      "The client faced an aggressive release cadence requiring fast implementation with high confidence in quality. They needed scalable features across the full stack while managing growing user feedback that demanded tight regression coverage and faster issue resolution. Manual healthcare processes were bottlenecked by Excel-based workflows.",
    outcome:
      "Transformed Excel-based healthcare workflows into a fully automated digital platform, significantly reducing manual data entry and human error. Delivered features on an accelerated timeline while maintaining code quality through monorepo architecture. Improved system reliability and enabled faster feature iterations.",
    frontend: [
      "React",
      "TypeScript",
      "TurboRepo",
      "React Query",
      "React Hook Form",
      "React Router",
      "Lexical Editor",
      "Tableau Integration",
      "Auth0",
    ],
    backend: ["NestJS", "MongoDB", "FastAPI"],
    highlights: [
      "Migrated manual Excel processes to automated digital workflows",
      "Refactored codebase to monorepo structure using TurboRepo for faster builds",
      "Built dual backend system (NestJS + FastAPI) for complex data operations",
      "Implemented Tableau integration for real-time data visualization",
      "Developed rich text medical documentation with Lexical Editor",
    ],
  },
  {
    id: "nimblr-time",
    title: "Nimblr Time",
    subtitle: "AI Agent Orchestration Platform",
    description:
      "An AI-native time management platform coordinating 15 specialized AI agents across automated workflows. Built a multi-agent orchestration system that handles research, strategy, marketing, design, and presentation generation through intelligent agent coordination with Jira/Confluence integration.",
    role: "AI / Full-Stack Engineer",
    location: "USA · Remote",
    iconType: "ai",
    images: ["/projects/nimblr-time.png"],
    challenge:
      "Traditional software development workflows required extensive manual coordination between research, strategy, design, and implementation phases. Teams spent significant time on repetitive tasks like market research synthesis, requirements gathering, and documentation—slowing down the entire product development lifecycle.",
    outcome:
      "Built an intelligent orchestration layer that automates complex multi-phase workflows, reducing manual coordination overhead by enabling AI agents to handle research, analysis, and documentation autonomously. The platform now powers end-to-end product development cycles with seamless Jira/Confluence integration for complete traceability.",
    frontend: ["TypeScript", "CLI Tools"],
    backend: [
      "Node.js",
      "Claude AI (Anthropic)",
      "Docker",
      "Jira API",
      "Confluence API",
    ],
    highlights: [
      "Architected multi-agent orchestration system with 15 specialized AI agents",
      "Built 3 workflow templates: Pre-development, Development, Post-production",
      "Integrated Claude AI for intelligent agent execution and coordination",
      "Developed real-time Jira/Confluence integration for automated ticket management",
      "Containerized agent execution environment using Docker",
    ],
  },
  {
    id: "rentai",
    title: "RentAI",
    subtitle: "Rental Property Platform",
    description:
      "A full-featured rental property platform enabling users to discover, filter, and book properties with an intuitive map-based interface. Features include property management dashboards, payment integration, and real-time availability tracking.",
    role: "Full-Stack Engineer",
    location: "Egypt · Remote",
    images: [
      "/projects/rent-1.png",
      "/projects/rent-2.png",
      "/projects/rent-3.png",
      "/projects/rent-4.png",
    ],
    challenge:
      "The rental market lacked a modern, user-friendly platform that combined intuitive property discovery with comprehensive management tools. Existing solutions offered fragmented experiences—forcing users to juggle multiple apps for searching, applications, and payments while landlords struggled with outdated property management interfaces.",
    outcome:
      "Delivered an end-to-end rental platform that streamlines the entire rental journey. Users can discover properties via interactive maps, apply seamlessly, and manage payments in one place. Landlords gained a powerful dashboard for tenant management, billing history, and property analytics—all deployed on scalable AWS infrastructure.",
    frontend: ["Next.js", "Tailwind CSS", "shadcn/ui", "AWS Cognito"],
    backend: ["Express.js", "PostgreSQL", "AWS"],
    highlights: [
      "Designed and built interactive map-based property search",
      "Implemented advanced filtering with property type, price range, and amenities",
      "Created comprehensive user dashboards for favorites, applications, and billing",
      "Developed property management system for landlords",
      "Deployed scalable infrastructure on AWS",
    ],
    link: "https://github.com/Abdelrahmansayed1/Rentai",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-surface-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-wider mb-4">
            FEATURED WORK
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
            Projects I&apos;ve Built
          </h2>
          <p className="text-surface-400 max-w-2xl mx-auto text-lg">
            A selection of projects showcasing my expertise in building
            full-stack applications with modern technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-24"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      variants={itemVariants}
      className={`grid lg:grid-cols-2 gap-12 items-center ${
        isEven ? "" : "lg:grid-flow-dense"
      }`}
    >
      {/* Content */}
      <div className={isEven ? "" : "lg:col-start-2"}>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-accent/10 rounded-lg text-accent">
            {project.iconType === "ai" ? (
              <Bot size={20} />
            ) : project.isConfidential ? (
              <Building2 size={20} />
            ) : (
              <Home size={20} />
            )}
          </div>
          <span className="text-surface-400 font-mono text-sm">
            {project.subtitle}
          </span>
          {project.isConfidential && (
            <span className="flex items-center gap-1 text-amber-500/80 text-xs font-mono bg-amber-500/10 px-2 py-1 rounded-full">
              <Lock size={12} />
              Confidential
            </span>
          )}
        </div>

        <h3 className="font-display text-3xl md:text-4xl text-white mb-2">
          {project.title}
        </h3>

        <div className="flex items-center gap-4 mb-4 text-sm">
          <span className="text-accent font-medium">{project.role}</span>
          <span className="flex items-center gap-1 text-surface-500">
            <MapPin size={14} />
            {project.location}
          </span>
        </div>

        <p className="text-surface-400 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Challenge & Outcome */}
        {(project.challenge || project.outcome) && (
          <div className="space-y-4 mb-6">
            {project.challenge && (
              <div className="p-4 rounded-xl bg-surface-800/30 border border-surface-700/50">
                <div className="flex items-center gap-2 mb-2">
                  <Target size={16} className="text-amber-500" />
                  <span className="text-amber-500 text-xs font-mono uppercase tracking-wider">
                    Challenge
                  </span>
                </div>
                <p className="text-surface-400 text-sm leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            )}
            {project.outcome && (
              <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp size={16} className="text-green-500" />
                  <span className="text-green-500 text-xs font-mono uppercase tracking-wider">
                    Outcome & Impact
                  </span>
                </div>
                <p className="text-surface-300 text-sm leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Tech Stack */}
        <div className="space-y-4 mb-6">
          <div>
            <span className="text-surface-500 text-sm font-mono mb-2 block">
              Frontend
            </span>
            <div className="flex flex-wrap gap-2">
              {project.frontend.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-surface-800 text-surface-300 text-sm rounded-full border border-surface-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="text-surface-500 text-sm font-mono mb-2 block">
              Backend
            </span>
            <div className="flex flex-wrap gap-2">
              {project.backend.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-surface-800 text-surface-300 text-sm rounded-full border border-surface-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="space-y-2 mb-6">
          {project.highlights.slice(0, 5).map((highlight, i) => (
            <div key={i} className="flex items-start gap-2 text-surface-400">
              <ChevronRight
                size={16}
                className="text-accent mt-1 flex-shrink-0"
              />
              <span className="text-sm">{highlight}</span>
            </div>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors"
          >
            View Project <ExternalLink size={16} />
          </a>
        )}
      </div>

      {/* Visual */}
      <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
        {project.isConfidential ? (
          <ConfidentialPlaceholder isAI={project.iconType === "ai"} />
        ) : (
          <ProjectGallery images={project.images || []} title={project.title} />
        )}
      </div>
    </motion.article>
  );
}

function ConfidentialPlaceholder({ isAI = false }: { isAI?: boolean }) {
  return (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass border-surface-800">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-surface-900/50 to-surface-800/50" />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(255,255,255,0.03) 20px,
            rgba(255,255,255,0.03) 40px
          )`,
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
        <div className="p-4 bg-surface-800/50 rounded-full mb-4">
          {isAI ? (
            <Bot size={32} className="text-surface-500" />
          ) : (
            <Lock size={32} className="text-surface-500" />
          )}
        </div>
        <h4 className="font-display text-xl text-surface-300 mb-2">
          {isAI ? "AI Platform" : "Confidential Project"}
        </h4>
        <p className="text-surface-500 text-sm max-w-xs">
          {isAI
            ? "This AI agent orchestration platform runs in backend environments. Visual demos available upon request."
            : "Due to NDA requirements, screenshots of this application cannot be shared publicly."}
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 flex gap-2">
        <div className="w-3 h-3 rounded-full bg-accent/30" />
        <div className="w-3 h-3 rounded-full bg-surface-600/30" />
        <div className="w-3 h-3 rounded-full bg-surface-700/30" />
      </div>
    </div>
  );
}

function ProjectGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  return (
    <div className="relative">
      {/* Main large image */}
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-surface-800 shadow-2xl shadow-black/30">
        <Image
          src={images[0] || "/placeholder.png"}
          alt={`${title} screenshot`}
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-950/60 via-transparent to-transparent" />
      </div>

      {/* Floating smaller images */}
      {images.length > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="absolute -bottom-8 -right-4 w-2/5 aspect-[4/3] rounded-xl overflow-hidden border border-surface-700 shadow-xl shadow-black/40"
        >
          <Image
            src={images[1]}
            alt={`${title} feature`}
            fill
            className="object-cover"
          />
        </motion.div>
      )}

      {images.length > 2 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="absolute -top-4 -left-4 w-1/4 aspect-square rounded-lg overflow-hidden border border-surface-700 shadow-xl shadow-black/40"
        >
          <Image
            src={images[2]}
            alt={`${title} detail`}
            fill
            className="object-cover"
          />
        </motion.div>
      )}
    </div>
  );
}
