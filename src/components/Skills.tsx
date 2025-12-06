"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Palette,
  GitBranch,
  Wrench,
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Code2 size={24} />,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "shadcn/ui",
      "React Query",
      "React Hook Form",
      "React Router",
      "Lexical",
      "Redux",
    ],
  },
  {
    title: "Backend",
    icon: <Database size={24} />,
    skills: [
      "NestJS",
      "Express.js",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "GraphQL",
      "TypeORM",
      "Prisma",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud size={24} />,
    skills: [
      "AWS",
      "AWS Cognito",
      "Auth0",
      "Docker",
      "CI/CD",
      "Vercel",
      "Serverless",
    ],
  },
  {
    title: "Architecture",
    icon: <GitBranch size={24} />,
    skills: [
      "TurboRepo",
      "Monorepo",
      "Microservices",
      "Clean Architecture",
      "Design Patterns",
    ],
  },
  {
    title: "UI/UX",
    icon: <Palette size={24} />,
    skills: [
      "Responsive Design",
      "Accessibility",
      "Figma",
      "Component Libraries",
      "Design Systems",
    ],
  },
  {
    title: "Tools & Others",
    icon: <Wrench size={24} />,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Tableau",
      "Jira",
      "Agile/Scrum",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-wider mb-4">
            EXPERTISE
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
            Skills & Technologies
          </h2>
          <p className="text-surface-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit built through years of building complex
            applications for healthcare and enterprise clients.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-surface-900/50 border border-surface-800 hover:border-surface-700 transition-all duration-300"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent group-hover:bg-accent/20 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="font-display text-xl text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-surface-800/50 text-surface-300 text-sm rounded-lg border border-surface-700/50 hover:border-accent/30 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "Years Experience", value: "3+" },
            { label: "Projects Completed", value: "5+" },
            { label: "Technologies", value: "20+" },
            { label: "Happy Clients", value: "3+" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="font-display text-4xl md:text-5xl text-accent mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-surface-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
