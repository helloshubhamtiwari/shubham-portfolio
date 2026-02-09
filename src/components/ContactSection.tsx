import { motion } from "framer-motion";
import { Mail, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { useTheme } from "./ThemeContext";
import emailjs from '@emailjs/browser';
import { toast } from "sonner"; // Assuming sonner is set up in the app, usually in main.tsx or App.tsx

export function ContactSection() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [captcha, setCaptcha] = useState({
    num1: Math.floor(Math.random() * 10) + 1,
    num2: Math.floor(Math.random() * 10) + 1,
    userAnswer: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS Keys - loaded from environment variables
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verify Captcha
    if (parseInt(captcha.userAnswer) !== captcha.num1 + captcha.num2) {
      toast.error("Incorrect Verification.", {
        description: `Please solve the math problem: ${captcha.num1} + ${captcha.num2}`,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Fetch IP address
      let ipAddress = "Unknown";
      try {
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();
        ipAddress = data.ip;
      } catch (error) {
        console.error("Failed to fetch IP:", error);
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: `${formData.message}\n\n[Sender Info]\nIP Address: ${ipAddress}\nUser Agent: ${navigator.userAgent}`,
        to_name: "Shubham",
      };

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      toast.success("Message sent successfully!", {
        description: "I'll get back to you as soon as possible.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      // Only log errors in development mode
      if (import.meta.env.DEV) {
        console.error("EmailJS Error:", error);
      }
      toast.error("Failed to send message.", {
        description: "Please check your internet connection or try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={`relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 transition-colors duration-300 ${theme === "dark" ? "bg-[#0a0a0f]" : "bg-zinc-50"
        }`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
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
            Get In Touch
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl font-bold mb-4 ${theme === "dark" ? "text-zinc-100" : "text-zinc-900"
              }`}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Let's Work Together
          </motion.h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === "dark" ? "text-zinc-500" : "text-zinc-600"
            }`}>
            Have a project, idea, or collaboration in mind? Let's connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-zinc-100" : "text-zinc-900"
                }`}>
                Contact Information
              </h3>
              <p className={`leading-relaxed mb-6 ${theme === "dark" ? "text-zinc-500" : "text-zinc-600"
                }`}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href="mailto:shubhamtiwariinbox@gmail.com"
                whileHover={{ x: 4 }}
                className={`flex items-center gap-3 p-4 border rounded-lg transition-all ${theme === "dark"
                  ? "bg-zinc-900/50 border-zinc-800/50 hover:border-zinc-700/50"
                  : "bg-white border-zinc-200 hover:border-zinc-300"
                  }`}
              >
                <div className={`p-2 rounded-lg ${theme === "dark" ? "bg-cyan-400/10" : "bg-cyan-100"
                  }`}>
                  <Mail className={`w-5 h-5 ${theme === "dark" ? "text-cyan-400" : "text-cyan-600"
                    }`} />
                </div>
                <div>
                  <p className={`text-sm ${theme === "dark" ? "text-zinc-500" : "text-zinc-600"
                    }`}>Email</p>
                  <p className={theme === "dark" ? "text-zinc-300" : "text-zinc-900"}>shubhamtiwariinbox@gmail.com</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-zinc-300" : "text-zinc-700"
                    }`}
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${theme === "dark"
                    ? "bg-zinc-900/50 border-zinc-800/50 text-zinc-100 placeholder:text-zinc-600 focus:border-cyan-400/50"
                    : "bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-400 focus:border-cyan-600"
                    }`}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-zinc-300" : "text-zinc-700"
                    }`}
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${theme === "dark"
                    ? "bg-zinc-900/50 border-zinc-800/50 text-zinc-100 placeholder:text-zinc-600 focus:border-cyan-400/50"
                    : "bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-400 focus:border-cyan-600"
                    }`}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-zinc-300" : "text-zinc-700"
                    }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none resize-none transition-colors ${theme === "dark"
                    ? "bg-zinc-900/50 border-zinc-800/50 text-zinc-100 placeholder:text-zinc-600 focus:border-cyan-400/50"
                    : "bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-400 focus:border-cyan-600"
                    }`}
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Math Captcha */}
              <div>
                <label
                  htmlFor="captcha"
                  className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-zinc-300" : "text-zinc-700"
                    }`}
                >
                  Verification: What is {captcha.num1} + {captcha.num2}?
                </label>
                <input
                  id="captcha"
                  type="text"
                  placeholder="Enter the result"
                  value={captcha.userAnswer}
                  onChange={(e) => setCaptcha({ ...captcha, userAnswer: e.target.value })}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${theme === "dark"
                    ? "bg-zinc-900/50 border-zinc-800/50 text-zinc-100 placeholder:text-zinc-600 focus:border-cyan-400/50"
                    : "bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-400 focus:border-cyan-600"
                    }`}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.05, boxShadow: theme === "dark" ? "0 10px 40px rgba(34, 211, 238, 0.3)" : "0 10px 40px rgba(8, 145, 178, 0.3)" } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 font-medium rounded-lg transition-colors ${theme === "dark"
                  ? "bg-cyan-400 hover:bg-cyan-500 text-zinc-900 disabled:bg-zinc-800 disabled:text-zinc-500"
                  : "bg-cyan-600 hover:bg-cyan-700 text-white disabled:bg-zinc-200 disabled:text-zinc-500"
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
