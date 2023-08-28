import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bxs-book about__icon"></i>
        <h3 className="about__title">Education</h3>
        <span className="about__subtitle">
          Currently attending{" "}
          <a
            className="cf-link"
            href="https://codingfactory.aueb.gr/"
            target="_black"
          >
            AUEB's Coding Factory
          </a>{" "}
          bootcamp
        </span>
      </div>

      <div className="about__box">
        <i class="bx bx-paint about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">
          In graphic and architectural design
        </span>
      </div>

      <div className="about__box">
        <i class="bx bxs-paper-plane about__icon"></i>
        <h3 className="about__title">Origami artist</h3>
        <span className="about__subtitle">
          <br />
          <br />
          at{" "}
          <a className="cf-link" href="http://hopacho.com/" target="_black">
            hopacho.com
          </a>
        </span>
      </div>
    </div>
  );
}

export default Info;