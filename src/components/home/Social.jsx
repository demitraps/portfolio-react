import React from "react";
import "./social.css";
const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/dimitra-psychogyiou/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="bx bxl-linkedin"></i>
      </a>

      <a
        href="https://github.com/demitraps"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-github-alt"></i>
      </a>

      <a
        href="https://www.instagram.com/hopacho/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-instagram"></i>
      </a>
    </div>
  );
};

export default Social;
