import React, { useState } from "react";
import "../services/services.css";
import Card from "./Card";

const WorkItems = ({ item }) => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="work__card" key={item.id}>
      <img src={item.images[0]} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>

      <span
        className="work__button"
        onClick={() => {
          toggleTab(1);
        }}
      >
        View More
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </span>

      <div
        className={
          toggleState === 1 ? "services__modal active-modal" : "services__modal"
        }
      >
        <div className="services__modal-content">
          <i
            onClick={() => toggleTab(0)}
            className="uil uil-times services__modal-close"
          ></i>

          <Card item={item}/>
        </div>
      </div>
    </div>
  );
};

export default WorkItems;
