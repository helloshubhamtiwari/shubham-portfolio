import { motion } from "motion/react";
import { ExternalLink, Github, Code2, Palette, Database } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTheme } from "./ThemeContext";
import { GlassCard } from "./GlassCard";

const majorProject = {
  title: "Online Scrap Portal Management System",
  domain: "Web Development",
  description: "A web-based platform that digitalizes scrap booking, collection, and recycling management by connecting users with scrap agents.",
  technologies: ["JavaScript", "MySQL"],
  objectives: [
    "Simplify scrap collection process",
    "Digital management of recycling",
    "User-agent interaction system"
  ],
  image: "https://images.unsplash.com/photo-1761593280919-766a4acbcfca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY5NzI2OTU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  icon: Database,
};

const minorProjects = [
  {
    title: "Health-Based Food Suggestion App",
    description: "A smart food suggestion system that recommends home-made dishes based on health conditions, region, and ingredient availability. Includes preferences like Jain food (no onion, no garlic).",
    image: "https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBzY3JlZW4lMjBkZXNpZ25zJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2OTc5NjgwOHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Mobile App", "Health Tech", "UI Design"],
    icon: Code2,
  },
  {
    title: "EV Charging Station Finder App",
    description: "UI/UX design for an EV charging station finder app created using Figma, focusing on usability, accessibility, and clean navigation.",
    image: "https://images.unsplash.com/photo-1763543012832-e50ec2e6b236?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBjaGFyZ2luZyUyMHN0YXRpb24lMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY5Nzk2ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["UI/UX", "Figma", "Mobile Design"],
    icon: Palette,
  },
  {
    title: "IRCTC Website Redesign",
    description: "Modern UI redesign of the Indian Railway (IRCTC) website to improve user experience, accessibility, and visual clarity.",
    image: "https://images.unsplash.com/photo-1587573088697-b4fa10460683?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWlsd2F5JTIwYm9va2luZyUyMHdlYnNpdGUlMjBtb2Rlcm4lMjByZWRlc2lnbnxlbnwxfHx8fDE3Njk3OTY4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Web Design", "Redesign", "UX"],
    icon: Palette,
  },
  {
    title: "Fintech App UI Design",
    description: "A financial management mobile app UI designed in Figma to track expenses, savings, and transactions with a modern fintech look.",
    image: "https://images.unsplash.com/photo-1726137065565-2c088892ee76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwYmFua2luZyUyMG1vYmlsZSUyMGFwcCUyMGludGVyZmFjZXxlbnwxfHx8fDE3Njk3OTY4MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Fintech", "Mobile UI", "Figma"],
    icon: Palette,
  },
];

export function UnifiedProjectsSection() {
  const { theme } = useTheme();
  
  return (
    <section
      id="projects"
      className={`relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 transition-colors duration-300 ${
        theme === "dark" ? "bg-zinc-950" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <motion.p 
            className={`text-sm font-medium tracking-wide uppercase mb-4 ${
              theme === "dark" ? "text-cyan-400" : "text-cyan-600"
            }`}
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Academic & Personal Projects
          </motion.p>
          <motion.h2 
            className={`text-4xl sm:text-5xl font-bold mb-4 ${
              theme === "dark" ? "text-zinc-100" : "text-zinc-900"
            }`}
            animate={{
              x: [0, 3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            My Projects
          </motion.h2>
          <p className={`text-lg max-w-2xl ${
            theme === "dark" ? "text-zinc-500" : "text-zinc-600"
          }`}>
            Real-world problem solving through technology and design
          </p>
        </motion.div>

        {/* Major Project - Featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <GlassCard className="p-8 group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image */}
              <motion.div 
                className={`relative aspect-video rounded-xl overflow-hidden ${
                  theme === "dark" ? "bg-zinc-800" : "bg-zinc-200"
                }`}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ImageWithFallback
                  src={majorProject.image}
                  alt={majorProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 px-4 py-2 rounded-full text-xs font-medium ${
                  theme === "dark" 
                    ? "bg-cyan-400/20 text-cyan-400 border border-cyan-400/30" 
                    : "bg-cyan-600/20 text-cyan-600 border border-cyan-600/30"
                }`}>
                  Major Project
                </div>
              </motion.div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <motion.div 
                      className={`p-3 rounded-xl ${
                        theme === "dark" ? "bg-cyan-400/10" : "bg-cyan-100"
                      }`}
                      whileHover={{ 
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      <majorProject.icon className={`w-6 h-6 ${
                        theme === "dark" ? "text-cyan-400" : "text-cyan-600"
                      }`} />
                    </motion.div>
                    <div>
                      <h3 className={`text-2xl sm:text-3xl font-bold mb-2 ${
                        theme === "dark" ? "text-zinc-100" : "text-zinc-900"
                      }`}>
                        {majorProject.title}
                      </h3>
                      <p className={`text-sm font-medium ${
                        theme === "dark" ? "text-cyan-400" : "text-cyan-600"
                      }`}>
                        {majorProject.domain}
                      </p>
                    </div>
                  </div>
                  
                  <p className={`text-base leading-relaxed ${
                    theme === "dark" ? "text-zinc-400" : "text-zinc-600"
                  }`}>
                    {majorProject.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className={`text-sm font-semibold mb-3 ${
                    theme === "dark" ? "text-zinc-300" : "text-zinc-700"
                  }`}>
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {majorProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                          theme === "dark"
                            ? "bg-zinc-800/50 text-zinc-300"
                            : "bg-zinc-200 text-zinc-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Objectives */}
                <div>
                  <h4 className={`text-sm font-semibold mb-3 ${
                    theme === "dark" ? "text-zinc-300" : "text-zinc-700"
                  }`}>
                    Key Objectives
                  </h4>
                  <ul className="space-y-2">
                    {majorProject.objectives.map((objective, index) => (
                      <motion.li
                        key={objective}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-start gap-2 text-sm ${
                          theme === "dark" ? "text-zinc-400" : "text-zinc-600"
                        }`}
                      >
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          theme === "dark" ? "bg-cyan-400" : "bg-cyan-600"
                        }`} />
                        {objective}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Minor Projects Grid */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-2xl sm:text-3xl font-bold mb-8 ${
              theme === "dark" ? "text-zinc-100" : "text-zinc-900"
            }`}
          >
            Minor Projects
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {minorProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full group">
                  <div className={`relative aspect-video overflow-hidden rounded-t-xl ${
                    theme === "dark" ? "bg-zinc-800" : "bg-zinc-200"
                  }`}>
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t opacity-60 ${
                      theme === "dark" ? "from-zinc-900" : "from-white"
                    } to-transparent`} />
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <motion.div 
                        className={`p-2 rounded-lg flex-shrink-0 ${
                          theme === "dark" ? "bg-cyan-400/10" : "bg-cyan-100"
                        }`}
                        whileHover={{ 
                          rotate: [0, -10, 10, -10, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        <project.icon className={`w-5 h-5 ${
                          theme === "dark" ? "text-cyan-400" : "text-cyan-600"
                        }`} />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className={`text-lg font-semibold mb-2 transition-colors ${
                          theme === "dark"
                            ? "text-zinc-100 group-hover:text-cyan-400"
                            : "text-zinc-900 group-hover:text-cyan-600"
                        }`}>
                          {project.title}
                        </h4>
                        <p className={`text-sm leading-relaxed ${
                          theme === "dark" ? "text-zinc-400" : "text-zinc-600"
                        }`}>
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs px-2 py-1 rounded ${
                            theme === "dark"
                              ? "bg-zinc-800/50 text-zinc-400"
                              : "bg-zinc-200 text-zinc-700"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
