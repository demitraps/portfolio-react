import React from "react";
import "./skills.css";
import Design from "./Design";
import Programming from "./Programming";
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Programming & Design</span>

      <div className="skills__container container grid">
        <Programming />
        <Design />
      </div>
    </section>
  );
};

export default Skills;
