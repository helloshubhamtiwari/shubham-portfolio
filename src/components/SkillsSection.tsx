import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import { GlassCard } from "./GlassCard";
import Antigravity from "./Antigravity";

const skills = {
  "UI/UX & Design": [
    "Figma",
    "UI/UX Design",
    "Wireframing & Prototyping",
    "Design Systems",
    "User Research Basics"
  ],
  "Frontend Development": [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Responsive Design",
    "Tailwind CSS"
  ],
  "Backend & Database": [
    "JavaScript",
    "MySQL",
    "Basic PHP"
  ],
  "Tools & Creative": [
    "Git & GitHub",
    "VS Code",
    "Framer Motion",
    "Video Editing"
  ],
};

export function SkillsSection() {
  const { theme } = useTheme();

  return (
    <section
      id="skills"
      className={`relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 transition-colors duration-300 ${theme === "dark"
          ? "bg-gradient-to-b from-[#0a0a0f] to-zinc-950"
          : "bg-gradient-to-b from-zinc-50 to-white"
        }`}
    >
      <div className="absolute inset-0 z-0 hidden lg:block pointer-events-none">
        <div className="w-full h-full" style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Antigravity
            count={150} // Reduced count for subtlety
            magnetRadius={15}
            ringRadius={15}
            waveSpeed={0.2}
            waveAmplitude={1}
            particleSize={1.5}
            lerpSpeed={0.05}
            color={theme === 'dark' ? '#22d3ee' : '#0891b2'} // Cyan to match theme
            autoAnimate
            particleVariance={1}
            rotationSpeed={0}
            depthFactor={1}
            pulseSpeed={3}
            particleShape="capsule"
            fieldStrength={10}
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <motion.p
            className={`text-sm font-medium tracking-wide uppercase mb-4 ${theme === "dark" ? "text-cyan-400" : "text-cyan-600"
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
            Skills & Tools
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl font-bold mb-4 ${theme === "dark" ? "text-zinc-100" : "text-zinc-900"
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
            My Tech Stack
          </motion.h2>
          <p className={`text-lg max-w-2xl ${theme === "dark" ? "text-zinc-500" : "text-zinc-600"
            }`}>
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="space-y-4"
            >
              <h3 className={`text-lg font-semibold mb-4 ${theme === "dark" ? "text-zinc-300" : "text-zinc-700"
                }`}>
                {category}
              </h3>
              <div className="space-y-2">
                {items.map((skill, index) => (
                  <GlassCard
                    key={skill}
                    delay={categoryIndex * 0.1 + index * 0.05}
                    className="px-4 py-3"
                  >
                    <motion.div
                      className="flex items-center justify-between"
                      whileHover={{ x: 4 }}
                    >
                      <span className={`text-sm font-medium ${theme === "dark" ? "text-zinc-300" : "text-zinc-700"
                        }`}>{skill}</span>

                      {/* Animated dot indicator */}
                      <motion.div
                        className={`w-2 h-2 rounded-full ${theme === "dark" ? "bg-cyan-400" : "bg-cyan-600"
                          }`}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      />
                    </motion.div>
                  </GlassCard>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
