export default function Skills() {
    const skills = [
       "Node.js", "React", "Express","MYSQL", "MongoDB",
      "JavaScript", "AWS", "Redis", "Git", "Docker", "Firebase", "Socket.io"
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