import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github, Star } from "lucide-react";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const devProjects = [
  {
    title: "Task Management App",
    description: "Full-stack React application with real-time updates, drag-and-drop functionality, and collaborative features",
    image: "https://images.unsplash.com/photo-1742072594013-c87f855e29ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZGV2ZWxvcG1lbnQlMjBzY3JlZW58ZW58MXx8fHwxNzYzNzMzNDE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    stars: 234,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "E-Commerce Platform",
    description: "Modern online store with cart management, payment integration, and responsive design across all devices",
    image: "https://images.unsplash.com/photo-1687524690542-2659f268cde8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MzcyODkxMnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    stars: 567,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather app with geolocation support, detailed forecasts, and beautiful data visualizations",
    image: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjM2NzU0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "API", "Charts"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    stars: 189,
    color: "from-violet-500 to-purple-500",
  },
];

export function DevelopmentProjectsSection() {
  return (
    <section id="dev-projects" className="relative py-32 px-4 bg-slate-950 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

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
            <div className="px-4 py-2 bg-white/10 backdrop-blur-lg text-white rounded-full text-sm border border-white/20">
              Live Applications
            </div>
          </motion.div>

          <h2 className="text-white text-5xl md:text-6xl mb-4">Development Projects</h2>
          <p className="text-slate-300 text-xl">Built with modern web technologies</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {devProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -15, rotateY: 5 }}
              className="group perspective-1000"
            >
              <Card className="relative overflow-hidden rounded-3xl border-0 shadow-2xl bg-slate-900/50 backdrop-blur-lg border border-white/10 h-full flex flex-col">
                {/* Glowing Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                <div className="relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>

                  {/* GitHub Stars Badge */}
                  <motion.div
                    initial={{ x: 100 }}
                    whileInView={{ x: 0 }}
                    className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 bg-slate-900/80 backdrop-blur-lg rounded-full border border-white/20"
                  >
                    <Star className="size-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white text-sm">{project.stars}</span>
                  </motion.div>
                </div>

                <CardHeader>
                  <CardTitle className="text-white text-2xl">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className={`rounded-full bg-gradient-to-r ${project.color} border-0 text-white`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <p className="text-slate-300 text-lg">{project.description}</p>
                </CardContent>

                <CardFooter className="gap-3">
                  <Button
                    className={`flex-1 gap-2 rounded-2xl bg-gradient-to-r ${project.color} hover:shadow-lg hover:scale-105 transition-all duration-300 border-0`}
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                      <ExternalLink className="size-4" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="gap-2 rounded-2xl bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="size-4" />
                      Code
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