import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaYoutube as Youtube,
  FaInstagram as Insta,
  FaEnvelope as Mail,
  FaLinkedinIn,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style = {{color : "white"}}>Hello, I'm</span> <br />
        Kunjal.
      </div>
      <div className="h1 code mt-4 mb-3">predict {"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        A Passionate Machine Learning Engineer Aspirant, Computer Vision and Natural Language Processing Enthusiast, AI Geek and Cryptography Aficionado.
        <br /> <br />I am currently a grad student at University of Massachusetts, Amherst; completing my research track masters in computer science. 
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <div className="h1 mt-5">
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
    </div>
  )
}
