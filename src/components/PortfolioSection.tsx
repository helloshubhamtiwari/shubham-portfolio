import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTheme } from "./ThemeContext";
import { ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    title: "UI Mockups",
    category: "Design",
    image: "https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1aSUyMG1vY2t1cHMlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY5Nzk2ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "App Screens",
    category: "Mobile Design",
    image: "https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBzY3JlZW4lMjBkZXNpZ25zJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2OTc5NjgwOHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Web Layouts",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1583932692875-a42450d50acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwbGF5b3V0JTIwZGVzaWduJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2OTc5NjgwOHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Video Projects",
    category: "Video Editing",
    image: "https://images.unsplash.com/photo-1730890754876-1657029c9eb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB0aW1lbGluZSUyMGNyZWF0aXZlJTIwcHJvamVjdHxlbnwxfHx8fDE3Njk3OTY4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Brand Identity",
    category: "Design",
    image: "https://images.unsplash.com/photo-1616205255812-c07c8102cc02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc2OTcxMTc3OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Dashboard UI",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1761593280919-766a4acbcfca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY5NzI2OTU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function PortfolioSection() {
  const { theme } = useTheme();

  return (
    <section
      id="portfolio"
      className={`relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 transition-colors duration-300 ${theme === "dark" ? "bg-[#0a0a0f]" : "bg-zinc-50"
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
            Portfolio
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
            Design Work
          </motion.h2>
          <p className={`text-lg max-w-2xl ${theme === "dark" ? "text-zinc-500" : "text-zinc-600"
            }`}>
            A showcase of my creative work across UI/UX design, web layouts, and video editing
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`relative rounded-xl overflow-hidden border ${theme === "dark"
                    ? "bg-zinc-900/50 border-zinc-800/50 hover:border-zinc-700/50"
                    : "bg-white border-zinc-200 hover:border-zinc-300"
                  } transition-all`}
              >
                {/* Image */}
                <div className={`relative aspect-[4/3] overflow-hidden ${theme === "dark" ? "bg-zinc-800" : "bg-zinc-200"
                  }`}>
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className={`absolute inset-0 flex items-center justify-center ${theme === "dark"
                        ? "bg-gradient-to-t from-zinc-900/90 via-zinc-900/50 to-transparent"
                        : "bg-gradient-to-t from-white/90 via-white/50 to-transparent"
                      }`}
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className={`p-3 rounded-full ${theme === "dark"
                          ? "bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30"
                          : "bg-cyan-600/20 backdrop-blur-sm border border-cyan-600/30"
                        }`}
                    >
                      <ExternalLink className={`w-5 h-5 ${theme === "dark" ? "text-cyan-400" : "text-cyan-600"
                        }`} />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className={`text-lg font-semibold mb-1 transition-colors ${theme === "dark"
                      ? "text-zinc-100 group-hover:text-cyan-400"
                      : "text-zinc-900 group-hover:text-cyan-600"
                    }`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm ${theme === "dark" ? "text-zinc-500" : "text-zinc-600"
                    }`}>
                    {item.category}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://www.behance.net/shubhamtiwari78"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium transition-all ${theme === "dark"
                ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-zinc-900"
                : "bg-gradient-to-r from-cyan-600 to-blue-600 text-white"
              }`}
          >
            View Full Portfolio on Behance
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
