export default function Skills() {
    const skills = [
      "React", "Node.js", "Express", "MongoDB",
      "JavaScript", "HTML", "CSS", "Git", "Docker"
    ];
  
    return (
      <section className="skills">
        <h2>Skills</h2>
        <div className="grid">
          {skills.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </section>
    );
  }