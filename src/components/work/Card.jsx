
const Card = ({ item }) => {
  return (
    <div>
      <h3 className="services__modal-title">{item.title}</h3>

      {/* Coding card links */}
      {item.category === "coding" && (
        <div>
          <a
            className="work__button"
            href={item.link}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
            <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
          <a
            className="work__button"
            href={item.repo}
            target="_blank"
            rel="noreferrer"
          >
            View on Github
            <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        </div>
      )}

      {/* Origami card links */}
      {item.category === "origami" && (
        <div>
          <a
            className="work__button"
            href={item.link}
            target="_blank"
            rel="noreferrer"
          >
            Shop item
            <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
          <a
            className="work__button"
            href="http://hopacho.com/"
            target="_blank"
            rel="noreferrer"
          >
            See all items
            <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        </div>
      )}

      <p className="services__modal-description">
        Service with more than 1.5 years of experience. Providing as well as
        constantly improving the quality of the product while improving my own
        skills. If I don't know how to, I'll learn and implement it.
      </p>

      <ul className="services__modal-services grid">
        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">I develop the UI.</p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Web page development</p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">I make figma wireframes</p>
        </li>
      </ul>

      <img src={item.image} alt="" className="work__img" />
      <br />
      <img src={item.image} alt="" className="work__img" />

      <img src={item.image} alt="" className="work__img" />
    </div>
  );
};

export default Card;
