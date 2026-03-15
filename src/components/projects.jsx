  export default function Projects() {
    const projects = [
      {
        title: "Cric Run",
        desc: "Node.js  MongoDB + Redis + WebHooks + REST API" ,
        content : "Integrated third-party sports APIs (e.g., CricAPI) to fetch real-time data including live scores, team information, player stats, and match timelines. Implemented Web-Sockets and long polling for seamless real-time updates without full-page reloads, ensuring low-latency data delivery. Developed caching and fallback mechanisms to maintain data consistency during API delays or outages."
      },
      {
        title: "Live Traders",
        desc: "MEAN, MySQL, Firebase, Stipe, Mailchimp, Jest",
        content : "Developed RESTful APIs to manage course content, user register, subscriptions, and feedback submissions. Integrated features such as email notifications, automated certificate generation, and dashboard analytics for performance tracking.  Deployed the application to AWS (Lambda, S3) and automated version control."
      },
      {
        title: "2FA",
        desc: "MERN stack, MySQL, JellyReach, Twilio ,",
        content : "Designed and implemented a secure Two-Factor Authentication (2FA) system to enhance user login security. Integrated SMS-based verification using Twilio API and time-based one-time passwords (TOTP) via Google Authenticator."
      },
      {
        title: "Jackpot BB ",
        desc: "NodeJs, PhaserJS, MySQL, Socket.io, Jest, HTML, CSS",
        content : "Developed a real-time online sports betting platform allowing users to place bets on various sports events with jackpot pools. It supporting thousands of concurrent users. Integrated live odds and match data APIs to provide up-to-date betting options and real-time results."
      }
    ];
  
    return (
      <section id="projects" className="projects">
        <h2>Projects</h2>  
        <div className="project-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.title}>
              <h3>{p.title}</h3><br/>
              <p>{p.desc}</p><br/>
              <p>{p.content}</p>
            </div>
          ))}
        </div>
      </section>
    );
 }