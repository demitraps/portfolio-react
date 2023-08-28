import React, { useState } from "react";
import "./qualifications.css";
const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-book-reader qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Work Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  <a className="cf-link" href="shecodes.io" target="_blank">
                    Coding Factory
                  </a>
                </h3>
                <span className="qualification__subtitle">
                  Athens University of Economics and Business
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 03.2023 - 10.2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  {" "}
                  Web & Mobile Apps Specialist
                </h3>
                <span className="qualification__subtitle">
                  eLearning, Athens University of Economics and Business
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 02.2023 - 05.2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Game Design & Development
                </h3>
                <span className="qualification__subtitle">
                  Information Techology Center TechOropos
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 02.2023 - 05.2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  {" "}
                  SheCodes Basics | Plus | Responsive | React
                </h3>
                <span className="qualification__subtitle">
                  <a className="cf-link" href="shecodes.io" target="_blank">
                    shecodes.io
                  </a>
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 07.2022 - 12.2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Architectural Engineering
                </h3>
                <span className="qualification__subtitle">
                  National Technical University of Athens
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2008 - 2013
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Senior Customer Experience Specialist
                </h3>
                <span className="qualification__subtitle">
                  Pollfish by Prodege, LLC
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 07.2016 - current
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Hopacho</h3>
                <span className="qualification__subtitle">
                  Creative Director and Origami artist
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 11.2018 - current
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Digital Campaigns Manager - Volunteering
                </h3>
                <span className="qualification__subtitle">LWD Athens</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 08.2023 - current
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Social Media Manager & Content Creator
                </h3>
                <span className="qualification__subtitle">
                  MinorSin | RI2K London | Vanity&Post | OndeVenezia
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 03.2013 - O6.2016
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Sales Representative</h3>
                <span className="qualification__subtitle">Dell | Intel</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 02.2010 - 02.2013
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
