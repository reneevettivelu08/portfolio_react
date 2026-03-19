export default function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Hi, I’m Renee</h1>
        <p>
          Product Manager + Software Engineer specializing in digital home
          financing experiences.
        </p>
        <div className="buttons">
          <a href="/projects">View Projects</a>
          <a href="/contact">Contact Me</a>
        </div>
      </section>

      <section>
        <h2>About Me</h2>
        <p>
          I combine product strategy with engineering execution to build
          scalable digital experiences across pre-approvals, document uploads,
          and customer workflows.
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul className="skills">
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Product Strategy</li>
          <li>UX Thinking</li>
        </ul>
      </section>
    </div>
  );
}