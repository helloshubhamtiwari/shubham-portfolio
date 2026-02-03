import { motion } from "motion/react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Eye } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "E-Commerce Mobile App",
    description: "A modern shopping experience with intuitive navigation and seamless checkout",
    image: "https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzNzEyODA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    behanceUrl: "https://www.behance.net/shubhamtiwari78",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization platform for real-time business insights",
    image: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjM2NzU0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    behanceUrl: "https://www.behance.net/shubhamtiwari78",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Portfolio Website Redesign",
    description: "Clean, minimal design focused on showcasing creative work",
    image: "https://images.unsplash.com/photo-1669062897193-f8a4215c2033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2Mzc0ODk5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    behanceUrl: "https://www.behance.net/shubhamtiwari78",
    color: "from-orange-500 to-red-500",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 px-4 bg-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50 to-white" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <motion.div 
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(99, 102, 241, 0.3)",
                  "0 0 40px rgba(99, 102, 241, 0.6)",
                  "0 0 20px rgba(99, 102, 241, 0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              My Work
            </motion.div>
          </motion.div>
          
          <motion.h2 
            className="text-slate-900 text-5xl md:text-6xl mb-4"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Projects
          </motion.h2>
          <p className="text-slate-600 text-xl">UI/UX case studies and development projects</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                y: {
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }
              }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group"
            >
              <Card className="relative overflow-hidden rounded-3xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 h-full flex flex-col bg-white">
                {/* Gradient Overlay on Hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 z-10`}
                  animate={{
                    opacity: [0, 0.05, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                />
                
                <div className="relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                  
                  {/* Overlay with Icon */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`p-4 bg-gradient-to-br ${project.color} rounded-full`}>
                        <Eye className="size-8 text-white" />
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-slate-900 text-2xl">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <p className="text-slate-600 text-lg">{project.description}</p>
                </CardContent>
                
                <CardFooter>
                  <Button
                    className={`w-full gap-2 rounded-2xl bg-gradient-to-r ${project.color} hover:shadow-lg hover:scale-105 transition-all duration-300 border-0`}
                    asChild
                  >
                    <a href={project.behanceUrl} target="_blank" rel="noopener noreferrer">
                      View Case Study
                      <ExternalLink className="size-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}