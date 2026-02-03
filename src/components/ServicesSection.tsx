import { motion } from "motion/react";
import { Palette, Code, Smartphone, Zap, Search, Layers } from "lucide-react";
import { useTheme } from "./ThemeContext";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces with a focus on user experience and accessibility.",
    features: ["Wireframing", "Prototyping", "Design Systems", "User Research"]
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building modern, responsive websites and web applications using the latest technologies and best practices.",
    features: ["React & Next.js", "TypeScript", "Tailwind CSS", "Performance Optimization"]
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Ensuring your website looks perfect and functions flawlessly on all devices and screen sizes.",
    features: ["Mobile-First", "Cross-Browser", "Touch Friendly", "Adaptive Layouts"]
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing websites for lightning-fast load times and smooth interactions for better user engagement.",
    features: ["Speed Optimization", "Code Splitting", "Lazy Loading", "SEO Ready"]
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Implementing best practices to improve your website's visibility and ranking in search engines.",
    features: ["Meta Tags", "Schema Markup", "Sitemap", "Analytics"]
  },
  {
    icon: Layers,
    title: "Maintenance",
    description: "Providing ongoing support, updates, and improvements to keep your website running smoothly.",
    features: ["Bug Fixes", "Updates", "Backups", "Security"]
  }
];

export function ServicesSection() {
  const { theme } = useTheme();

  return (
    <section
      id="services"
      className={`relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 transition-colors duration-300 ${
        theme === "dark" ? "bg-[#0a0a0f]" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`text-sm font-medium tracking-wide uppercase mb-4 ${
              theme === "dark" ? "text-cyan-400" : "text-cyan-600"
            }`}
          >
            Services
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
            What I Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-zinc-500" : "text-zinc-600"
            }`}
          >
            Comprehensive digital solutions tailored to your needs
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, rotateY: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.03,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className={`group p-6 rounded-xl border transition-all relative overflow-hidden ${
                theme === "dark"
                  ? "bg-zinc-900/50 border-zinc-800/50 hover:border-cyan-400/50 hover:bg-zinc-900/70"
                  : "bg-zinc-50 border-zinc-200 hover:border-cyan-600/50 hover:bg-white hover:shadow-xl"
              }`}
              style={{ perspective: 1000 }}
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  background: [
                    "radial-gradient(circle at 0% 0%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 100% 100%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 0% 0%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 relative z-10 ${
                  theme === "dark" 
                    ? "bg-gradient-to-br from-cyan-400/20 to-purple-600/20" 
                    : "bg-gradient-to-br from-cyan-100 to-purple-100"
                }`}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  <service.icon className={`w-7 h-7 ${
                    theme === "dark" ? "text-cyan-400" : "text-cyan-600"
                  }`} />
                </motion.div>
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <motion.h3
                  className={`text-xl font-semibold mb-3 ${
                    theme === "dark" 
                      ? "text-zinc-100 group-hover:text-cyan-400" 
                      : "text-zinc-900 group-hover:text-cyan-600"
                  } transition-colors`}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p
                  className={`text-sm leading-relaxed mb-4 ${
                    theme === "dark" ? "text-zinc-400" : "text-zinc-600"
                  }`}
                >
                  {service.description}
                </motion.p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2"
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.5, 1],
                          rotate: [0, 180, 360]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                        className={`w-1.5 h-1.5 rounded-full ${
                          theme === "dark" ? "bg-cyan-400" : "bg-cyan-600"
                        }`}
                      />
                      <span className={`text-xs ${
                        theme === "dark" ? "text-zinc-500" : "text-zinc-600"
                      }`}>
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hover effect corner accent */}
              <motion.div
                className={`absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity ${
                  theme === "dark" ? "bg-cyan-400/5" : "bg-cyan-600/5"
                }`}
                style={{
                  clipPath: "polygon(100% 0, 100% 100%, 0 0)"
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
