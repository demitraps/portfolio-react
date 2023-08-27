import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  /* --- Toggle Menu --- */
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;

      for (let i = 0; i < sections.length; i++) {
        const currentSection = sections[i];
        const sectionTop = currentSection.offsetTop - 50;
        const sectionBottom = sectionTop + currentSection.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          const id = currentSection.getAttribute("id");
          setActiveNav(`#${id}`);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Demitra
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#services"
                className={
                  activeNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>Services
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i>Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
          </ul>
          <i
            class="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
