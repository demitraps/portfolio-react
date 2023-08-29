const Card = ({ item }) => {
  return (
    <div>
      <h3 className="services__modal-title">{item.title}</h3>

      {/* Coding card links */}
      {item.category === "coding" && (
        <div className="card-links">
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
        <div className="card-links">
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

      <div className="subtitle">
        <p>{item.subtitle}</p>
      </div>

      <p className="services__modal-description">{item.description}</p>
      <p className="scroll-prompt">
        Scroll down for more{" "}
        <i className="bx bx-down-arrow-alt work__button-icon"></i>
      </p>

      <div className="image-container">
        {item.images &&
          item.images.map((image) => {
            return (
              <img src={image} alt={image} className="card__img" key={image} />
            );
          })}

        <img src={item.image} alt="" className="card__img" />
        <img src={item.image} alt="" className="card__img" />
        <img src={item.image} alt="" className="card__img" />
      </div>
    </div>
  );
};

export default Card;
