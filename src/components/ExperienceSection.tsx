import { motion } from "motion/react";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { useTheme } from "./ThemeContext";

const experiences = [
  {
    icon: Briefcase,
    type: "Work",
    title: "Freelance Designer & Developer",
    organization: "Self-Employed",
    period: "2023 - Present",
    description: "Creating custom websites and digital experiences for clients across various industries. Specializing in React, TypeScript, and modern UI/UX design.",
    achievements: [
      "Completed 15+ client projects",
      "Maintained 100% client satisfaction rate",
      "Specialized in responsive web applications"
    ]
  },
  {
    icon: GraduationCap,
    type: "Education",
    title: "Bachelor of Engineering",
    organization: "Engineering College",
    period: "2021 - Present",
    description: "Pursuing engineering degree with focus on computer science and software development. Active in coding clubs and tech events.",
    achievements: [
      "Relevant coursework in Data Structures & Algorithms",
      "Member of coding club",
      "Participated in hackathons"
    ]
  },
  {
    icon: Award,
    type: "Achievement",
    title: "UI/UX Design Certification",
    organization: "Online Platform",
    period: "2022",
    description: "Completed comprehensive UI/UX design course covering user research, wireframing, prototyping, and design systems.",
    achievements: [
      "Design thinking methodology",
      "Figma & Adobe XD proficiency",
      "User-centered design principles"
    ]
  }
];

export function ExperienceSection() {
  const { theme } = useTheme();

  return (
    <section
      id="experience"
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
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`text-sm font-medium tracking-wide uppercase mb-4 ${
              theme === "dark" ? "text-cyan-400" : "text-cyan-600"
            }`}
          >
            Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-4xl sm:text-5xl font-bold mb-4 ${
              theme === "dark" ? "text-zinc-100" : "text-zinc-900"
            }`}
          >
            Experience & Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg max-w-2xl ${
              theme === "dark" ? "text-zinc-500" : "text-zinc-600"
            }`}
          >
            My professional journey and continuous learning path
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
            theme === "dark" ? "bg-zinc-800" : "bg-zinc-200"
          } hidden md:block`} />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
                className="relative"
              >
                <div className="flex gap-8 items-start">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center border-4 ${
                      theme === "dark"
                        ? "bg-zinc-900 border-zinc-950"
                        : "bg-white border-white"
                    } relative z-10 shadow-lg`}
                  >
                    <div className={`p-3 rounded-full ${
                      theme === "dark" ? "bg-cyan-400/10" : "bg-cyan-100"
                    }`}>
                      <exp.icon className={`w-6 h-6 ${
                        theme === "dark" ? "text-cyan-400" : "text-cyan-600"
                      }`} />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className={`flex-1 p-6 rounded-lg border transition-all ${
                      theme === "dark"
                        ? "bg-zinc-900/50 border-zinc-800/50 hover:border-zinc-700/50 hover:bg-zinc-900/70"
                        : "bg-zinc-50 border-zinc-200 hover:border-zinc-300 hover:bg-white"
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                            theme === "dark"
                              ? "bg-cyan-400/10 text-cyan-400"
                              : "bg-cyan-100 text-cyan-700"
                          }`}
                        >
                          {exp.type}
                        </motion.span>
                        <h3 className={`text-xl font-semibold mb-1 ${
                          theme === "dark" ? "text-zinc-100" : "text-zinc-900"
                        }`}>
                          {exp.title}
                        </h3>
                        <p className={`text-sm font-medium ${
                          theme === "dark" ? "text-zinc-400" : "text-zinc-600"
                        }`}>
                          {exp.organization}
                        </p>
                      </div>
                      <span className={`text-sm font-medium ${
                        theme === "dark" ? "text-zinc-500" : "text-zinc-500"
                      }`}>
                        {exp.period}
                      </span>
                    </div>

                    <p className={`text-sm leading-relaxed mb-4 ${
                      theme === "dark" ? "text-zinc-500" : "text-zinc-600"
                    }`}>
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          whileHover={{ x: 5 }}
                          className={`text-sm flex items-start gap-2 ${
                            theme === "dark" ? "text-zinc-400" : "text-zinc-600"
                          }`}
                        >
                          <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                            className={theme === "dark" ? "text-cyan-400" : "text-cyan-600"}
                          >
                            •
                          </motion.span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
