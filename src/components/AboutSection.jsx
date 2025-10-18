import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Developer & Problem Solver
            </h3>

            <p className="text-muted-foreground">
              I create intelligent, scalable, and secure web applications using
              modern technologies like <b>Java, Python, React, Spring Boot,</b> and <b>FastAPI</b>.
              With a strong foundation in <b>data structures, algorithms,</b> and
              <b> cloud deployment (AWS, Docker)</b>, I love turning complex ideas
              into impactful software solutions.
            </p>

            <p className="text-muted-foreground">
              I’ve contributed to projects like <b>Technothon Hackathon Platform</b> 
              and a secure <b>JavaFX Password Manager</b>, and have been recognized
              as a <b>Winner of IBM Expert Labs and Technothon Hackathons 2025</b>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/Ranit_Saha_Resume.pdf"
                download="Ranit_Saha_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Full-Stack Development </h4>
                  <p className="text-muted-foreground">
                    Building high-performance applications with Java, Python,
                    React, and RESTful APIs.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud & DevOps</h4>
                  <p className="text-muted-foreground">
                    Deploying scalable and containerized apps using AWS, Docker,
                    and CI/CD pipelines.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">System Design & Architecture</h4>
                  <p className="text-muted-foreground">
                    Designing modular, maintainable, and scalable software systems using 
  microservice architecture and clean code principles for enterprise-grade reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
