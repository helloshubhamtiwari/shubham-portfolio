import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import { useTheme } from "./ThemeContext";

// Custom Behance icon component
function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.5 4.5h4.5c1.5 0 2.7.3 3.6 1 .9.6 1.4 1.6 1.4 2.9 0 .8-.2 1.5-.7 2-.4.6-1 .9-1.7 1.1v.1c1 .1 1.8.5 2.3 1.2.5.6.8 1.4.8 2.4 0 1-.2 1.8-.7 2.4-.4.7-1 1.1-1.8 1.4-.7.3-1.6.4-2.5.4H6.5V4.5zm3 5.3h2.3c.7 0 1.2-.2 1.6-.5.4-.3.5-.8.5-1.4 0-.7-.2-1.1-.6-1.4-.4-.3-.9-.4-1.6-.4H9.5v3.7zm0 2.4v4.2h2.6c.7 0 1.3-.2 1.7-.5.4-.4.6-.9.6-1.6 0-1.4-.8-2.1-2.3-2.1H9.5zM15.5 7h5v1.5h-5V7zm3.5 5c-1.5 0-2.7.4-3.5 1.3-.8.9-1.2 2-1.2 3.5v.4c0 1.5.4 2.7 1.1 3.6.8.9 1.9 1.4 3.3 1.4 1.2 0 2.2-.3 3-.9.7-.6 1.1-1.4 1.3-2.4h-2.6c-.1.4-.3.7-.6.9-.3.2-.7.3-1.1.3-.6 0-1.1-.2-1.5-.6-.3-.4-.5-1-.5-1.7h6.2v-.8c0-1.5-.4-2.7-1.2-3.6-.8-.9-1.9-1.4-3.3-1.4zm-1.5 3.5c0-.6.2-1.1.5-1.5.3-.4.8-.6 1.4-.6.6 0 1 .2 1.3.5.3.4.5.9.5 1.6h-3.7z" />
    </svg>
  );
}

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/shubamtiwari-dev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/helloshubhamtiwari", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/shubhamtiwari.in", label: "Instagram" },
  { icon: BehanceIcon, href: "https://www.behance.net/shubhamtiwari78", label: "Behance" },
];

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`relative py-12 px-6 sm:px-8 lg:px-12 border-t transition-colors duration-300 ${theme === "dark"
      ? "bg-zinc-950 border-zinc-800/50"
      : "bg-white border-zinc-200"
      }`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`text-sm ${theme === "dark" ? "text-zinc-500" : "text-zinc-600"
              }`}
          >
            © {new Date().getFullYear()} Shubham Tiwari. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className={`p-2 transition-colors ${theme === "dark"
                  ? "text-zinc-500 hover:text-cyan-400"
                  : "text-zinc-600 hover:text-cyan-600"
                  }`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
