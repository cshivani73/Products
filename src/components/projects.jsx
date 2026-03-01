

  export default function Projects() {
    const projects = [
      {
        title: "Task Manager API",
        desc: "Node.js + MongoDB + JWT Authentication"
      },
      {
        title: "E-Commerce UI",
        desc: "React + Redux + Filters + Cart System"
      },
      {
        title: "Portfolio Website",
        desc: "HTML / CSS / JavaScript responsive design"
      }
    ];
  
    return (
      <section id="projects" className="projects">
        <h2>Projects</h2>
  
        <div className="project-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }