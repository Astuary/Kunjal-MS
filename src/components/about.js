import React from "react"
import downloadResume from '../Files/Kunjal_Panchal_Resume.pdf' 

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaYoutube as Youtube,
  FaInstagram as Insta,
  FaEnvelope as Mail,
  FaLinkedinIn,
  FaPython as Python,
  FaJava as Java,
  FaRProject as R,
  FaHtml5 as HTML,
  FaCss3 as CSS,
  FaFlask as Flask,
  FaJs as JS,
} from "react-icons/fa"

export default function about() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-5" style={{ color: "#FF8A00" }}>
        Programming Languages. <span style = {{color : "white"}}>   <Python title="Python"/>/<Java title="Java"/>/<R title="R Language"/>/Matlab/C/C++</span>
      </div>
      
      <div className="display-5" style={{ color: "#FF8A00" }}>
        Machine Learning. <span style = {{color : "white"}}>PyTorch/Scikit-learn/Scipy/Numpy/Pandas/Seaborn</span>
      </div>
      <div className="display-5" style={{ color: "#FF8A00" }}>
        Web Developement. <span style = {{color : "white"}}><HTML title="HTML5"/>/<CSS title="CSS3"/>/<JS title="JavaScript"/>/<Flask title="Python Flask Framework"/>/SQL/RESTful APIs</span>
      </div>
      <div className="display-5" style={{ color: "#FF8A00" }}>
        Resume. <a href={downloadResume}>Here</a>
      </div>
      <div className="h1 code mt-4 mb-3">contact {"{"}</div>
      <div className="h1">
        <a className="mr-5 icon" href="https://www.linkedin.com/in/kunjal-panchal/">
          <FaLinkedinIn />
        </a>

        <a className="mr-5 icon" href="https://github.com/Astuary">
          <Github />
        </a>
        
        <a className="mr-5 icon" href="mailto://kunjalspanchal@gmail.com">
          <Mail />
        </a>
      </div>
    
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      </div>  
  )
}
