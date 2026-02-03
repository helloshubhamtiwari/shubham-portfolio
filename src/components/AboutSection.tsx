import { motion } from "motion/react";
import { Code2, Palette, Rocket } from "lucide-react";
import { useTheme } from "./ThemeContext";
import { GlassCard } from "./GlassCard";

const highlights = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Crafting intuitive and aesthetically pleasing user interfaces",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive, performant web applications",
  },
  {
    icon: Rocket,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions",
  },
];

export function AboutSection() {
  const { theme } = useTheme();
  
  return (
    <section
      id="about"
      className={`relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 transition-colors duration-300 ${
        theme === "dark" ? "bg-[#0a0a0f]" : "bg-zinc-50"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
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
                About Me
              </motion.p>
              <motion.h2 
                className={`text-4xl sm:text-5xl font-bold mb-6 ${
                  theme === "dark" ? "text-zinc-100" : "text-zinc-900"
                }`}
                animate={{
                  x: [0, 2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Crafting Digital
                <br />
                Experiences
              </motion.h2>
            </div>

            <div className={`space-y-4 leading-relaxed ${
              theme === "dark" ? "text-zinc-400" : "text-zinc-600"
            }`}>
              <p>
                I am a <span className={`font-medium ${
                  theme === "dark" ? "text-zinc-300" : "text-zinc-900"
                }`}>BCA student with specialization in UI/UX</span> at Chandigarh University. I work as a frontend developer and professional video editor, combining design thinking with clean, efficient code.
              </p>
              <p>
                I enjoy creating user-friendly digital experiences using modern frontend technologies and design tools. Currently, I am working on major and minor academic projects that focus on real-world problem solving through technology.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {highlights.map((item, index) => (
              <GlassCard key={item.title} delay={index * 0.15} className="p-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <motion.div 
                    className={`p-3 rounded-xl ${
                      theme === "dark" ? "bg-cyan-400/10" : "bg-cyan-100"
                    }`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <item.icon className={`w-6 h-6 ${
                      theme === "dark" ? "text-cyan-400" : "text-cyan-600"
                    }`} />
                  </motion.div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-1 ${
                      theme === "dark" ? "text-zinc-100" : "text-zinc-900"
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm ${
                      theme === "dark" ? "text-zinc-500" : "text-zinc-600"
                    }`}>{item.description}</p>
                  </div>
                </motion.div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
