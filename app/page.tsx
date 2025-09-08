import { TypingText } from "@/components/typing-text";
import { ContactForm } from "@/components/contact-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Globe, Mail, MapPin, Phone } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Laboratory Information System",
    description:
      "Full-stack MERN application for managing laboratory information, including sample tracking and reporting.",
    image: "/projects/lis.png",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "#",
    demo: "https://lis.ajbregs.com",
  },
  {
    title: "Civil Registrar System",
    description:
      "A web-based application for managing civil registration processes, including birth, marriage, and death certificates.",
    image: "/projects/registrar.png",
    tech: ["MongoDB", "Next.js"],
    github: "#",
    demo: "https://registrar.ajbregs.com",
  },
  {
    title: "Laboratory Management System Landing Page",
    description:
      "Landing page for a laboratory management system with a focus on user experience and accessibility.",
    image: "/projects/lims-landing.png",
    tech: ["Next.js", "Tailwind CSS", "React"],
    github: "https://github.com/AlvinJohnB/lims-landing-page",
    demo: "https://lims.ajbregs.com",
  },
  {
    title: "Flight Booking App - Working Prototype",
    description:
      "Prototype for a flight booking system with a focus on user experience and accessibility.",
    image: "/projects/flight-booking.png",
    tech: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "React",
    ],
    github: "https://github.com/AlvinJohnB/MCP-Side-Project",
    demo: "https://flight-booking-app-pearl.vercel.app",
  },
  {
    title: "FreshMart - E-commerce",
    description:
      "A full-stack e-commerce application built with the MERN stack.",
    image: "/projects/e-commerce.png",
    tech: ["MongoDB", "Express", "React", "Node.js", "Bootstrap", "CSS"],
    github: "https://github.com/AlvinJohnB/",
    demo: "#",
  },
];

const technologies = [
  { name: "HTML5", icon: "/technologies/html5-original-wordmark.svg" },
  { name: "CSS3", icon: "/technologies/css3-original-wordmark.svg" },
  { name: "JavaScript", icon: "/technologies/javascript-original.svg" },
  { name: "Bootstrap", icon: "/technologies/bootstrap-original-wordmark.svg" },
  { name: "Tailwind CSS", icon: "/technologies/tailwindcss-original.svg" },
  { name: "Express.js", icon: "/technologies/express-original-wordmark.svg" },
  { name: "MongoDB", icon: "/technologies/mongodb-original-wordmark.svg" },
  { name: "Node.js", icon: "/technologies/nodejs-original-wordmark.svg" },
  { name: "React", icon: "/technologies/react-original.svg" },
  { name: "Git", icon: "/technologies/git-original.svg" },
  { name: "Insomnia", icon: "/technologies/insomnia-original.svg" },
  { name: "Postman", icon: "/technologies/postman-original.svg" },
  { name: "VS Code", icon: "/technologies/vscode-original.svg" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Landing Section */}
      <section
        id="landing"
        className="container grid grid-cols-1 lg:grid-cols-3 gap-8 px-5 mx-auto min-h-screen py-12"
      >
        <div className="col-span-2 lg:my-auto px-5 lg:order-1 order-2">
          <TypingText />
          <div className="mt-6 space-y-4">
            <p className="text-lg leading-relaxed">
              I&apos;m passionate in building functional, user-friendly
              applications. With experience in React.js, Node.js, and
              MongoDB/MySQL, I specialize in creating full-stack solutions—from
              mobile apps to modern web systems. I enjoy solving real-world
              problems with clean, scalable code. I&apos;m always learning,
              always building, and always up for the next challenge. Let&apos;s
              create something awesome together.
            </p>
            <p className="text-lg">
              Welcome to my portfolio — feel free to explore my work!
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center order-1 lg:order-2">
          <div className="w-full md:w-3/4 lg:w-full max-w-sm">
            <Image
              src="/alvinpic.jpg"
              width={400}
              height={650}
              alt="Alvin John Bregana"
              className="pic-shadow w-full h-auto rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg">
              A showcase of my recent work and achievements
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border overflow-hidden hover:bg-card/70 transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-foreground text-lg">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-border text-muted-foreground text-xs bg-muted/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs"
                      asChild
                    >
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Code className="w-3 h-3 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-xs"
                      asChild
                    >
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="w-3 h-3 mr-2" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20 px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-4">
              Tools & Technologies
            </h2>
            <p className="text-muted-foreground text-lg">
              Technologies I work with to bring ideas to life
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tool, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border hover:bg-card/70 transition-colors"
              >
                <CardContent className="p-6 text-center">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={45}
                    height={45}
                    className="w-full h-25"
                  />

                  <h3 className="text-foreground font-medium mb-2 text-sm">
                    {tool.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg">
              Ready to work together? Let&apos;s create something amazing!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-medium text-foreground mb-6">
                Let&apos;s Connect
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-foreground">
                  <Mail className="w-4 h-4 mr-3 text-muted-foreground" />
                  <span className="text-sm">alvinbregana@gmail.com</span>
                </div>
                <div className="flex items-center text-foreground">
                  <Phone className="w-4 h-4 mr-3 text-muted-foreground" />
                  <span className="text-sm">+639 99-7725143</span>
                </div>
                <div className="flex items-center text-foreground">
                  <MapPin className="w-4 h-4 mr-3 text-muted-foreground" />
                  <span className="text-sm">Laoag City, Ilocos Norte</span>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I&apos;m always interested in new opportunities and exciting
                  projects. Whether you have a question or just want to say hi,
                  feel free to reach out!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-8 border-t border-border relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Alvin John Bregana. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
