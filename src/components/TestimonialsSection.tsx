import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import { useTheme } from "./ThemeContext";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc",
    content: "Shubham transformed our outdated website into a modern, user-friendly platform. His attention to detail and creative approach exceeded our expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "StartupHub",
    content: "Working with Shubham was a pleasure. He delivered a beautiful, responsive website on time and was always available for revisions and improvements.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "DesignCo",
    content: "Shubham's UI/UX skills are exceptional. He created an intuitive interface that our users love. Highly recommend his services!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
  }
];

export function TestimonialsSection() {
  const { theme } = useTheme();

  return (
    <section
      id="testimonials"
      className={`relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 overflow-hidden transition-colors duration-300 ${
        theme === "dark" ? "bg-[#0a0a0f]" : "bg-zinc-50"
      }`}
    >
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-20 ${
          theme === "dark" ? "bg-cyan-500" : "bg-cyan-300"
        }`}
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className={`absolute bottom-20 left-20 w-64 h-64 rounded-full blur-3xl opacity-20 ${
          theme === "dark" ? "bg-purple-500" : "bg-purple-300"
        }`}
      />

      <div className="max-w-6xl mx-auto relative z-10">
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
            Testimonials
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
            What Clients Say
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
            Don't just take my word for it - here's what my clients have to say
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`p-6 rounded-xl border transition-all relative overflow-hidden ${
                theme === "dark"
                  ? "bg-zinc-900/50 border-zinc-800/50 hover:border-cyan-400/30 hover:bg-zinc-900/70"
                  : "bg-white border-zinc-200 hover:border-cyan-600/30 hover:shadow-xl"
              }`}
            >
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Quote icon */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${
                  theme === "dark" ? "bg-cyan-400/10" : "bg-cyan-100"
                }`}
              >
                <Quote className={`w-5 h-5 ${
                  theme === "dark" ? "text-cyan-400" : "text-cyan-600"
                }`} />
              </motion.div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + i * 0.1 }}
                    whileHover={{ scale: 1.3, rotate: 360 }}
                  >
                    <Star className={`w-4 h-4 fill-current ${
                      theme === "dark" ? "text-yellow-400" : "text-yellow-500"
                    }`} />
                  </motion.div>
                ))}
              </div>

              {/* Content */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.2 }}
                className={`text-sm leading-relaxed mb-6 relative z-10 ${
                  theme === "dark" ? "text-zinc-400" : "text-zinc-600"
                }`}
              >
                "{testimonial.content}"
              </motion.p>

              {/* Author */}
              <div className="flex items-center gap-3 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className={`absolute inset-0 rounded-full border-2 border-dashed ${
                      theme === "dark" ? "border-cyan-400/30" : "border-cyan-600/30"
                    }`}
                  />
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </motion.div>
                <div>
                  <h4 className={`font-semibold text-sm ${
                    theme === "dark" ? "text-zinc-100" : "text-zinc-900"
                  }`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-xs ${
                    theme === "dark" ? "text-zinc-500" : "text-zinc-600"
                  }`}>
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
