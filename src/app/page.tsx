
import Link from "next/link";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <main>
        <section className="hero container">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              Building, learning, and exploring
            </div>

            <p className="eyebrow">HELLO, WORLD! I&apos;M</p>

            <h1>
              Firdaus.
              <br />
              <span>Programmer in progress.</span>
            </h1>

            <p className="hero-description">
              I&apos;m a Computer Engineering student exploring
              robotics, machine learning, and software development.
              This is where I document my projects and learning journey.
            </p>

            <div className="hero-actions">
              <Link href="/projects" className="button button-primary">
                Explore projects ↗
              </Link>

              <Link href="/contact" className="button button-secondary">
                Get in touch
              </Link>
            </div>

            <div className="hero-meta">
              <span>Indonesia</span>
              <span>Interested in: Robotics & ML</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Engineering illustration">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="visual-core">
              <span className="core-symbol">{"{ }"}</span>
              <span className="core-label">BUILD / LEARN / REPEAT</span>
            </div>

            <span className="float-label float-one">Python.py</span>
            <span className="float-label float-two">ROS 2</span>
            <span className="float-label float-three">Machine Learning</span>
          </div>
        </section>

        <section className="container section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT I&apos;VE BEEN EXPLORING</p>
              <h2>Selected projects<span>.</span></h2>
            </div>

            <Link href="/projects" className="text-link">
              All projects ↗
            </Link>
          </div>

          <div className="project-grid">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="container about-strip">
          <div>
            <p className="eyebrow">THE DIRECTION</p>
            <h2>Curiosity into capability.</h2>
          </div>

          <p>
            I believe good engineering comes from understanding
            fundamentals, experimenting with ideas, and learning
            from what does not work.
          </p>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} Firdaus
          </span>
          <span>Built with Next.js & TypeScript</span>
        </div>
      </footer>
    </>
  );
}
