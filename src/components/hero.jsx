
// import DownloadResume from "./download";
import resume from "../assets/resume_doc.pdf";

export default function Hero() {
    //   const handleDownload = () => {
    //     const link = document.createElement("a");
    //     link.href = "/resume.pdf";
    //     link.download = "resume.pdf";
    //     link.click();
    // };
    return (
      <header className="home">
        <h1>Shivani Chouhan</h1><br/>
        <p>Full-Stack Developer (Node.js + React Js)</p>
        <br/><br/>
        <a className="btn-primary" href="#projects">View Projects</a><span></span>
        <a className="btn-primary" href={resume} >Download CV</a>

       {/* <button className="btn-primary" onClick={handleDownload}>Download CV</button> */}

      </header>
    );
  }