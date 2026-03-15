import React from "react";
import resume from "../assets/resume.pdf";

export default function DownloadBtn(){

// const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = "./resume.pdf";
//     link.download = "resume.pdf";
//     link.click();
// };

// return(
//    <button onClick={handleDownload}>⬇ Download CV</button>
// );
// }

return (
    <a href={resume} download className="btn-primary">
      Download CV
    </a>
  );
}