import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

const { card, img, content, badge } = styles;

const Card = ({ results, page }) => {
  let display;

  console.log(results);

  if (results) {
    display = results.map((result) => {
      const { id, name, image, location, status } = result;

      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`/card${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark"
        >
          <div className={`${card} d-flex flex-column`}>
            <img src={image} alt="Person card" className={`${img} img-fluid`} />
            <div className={`${content}`}>
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div>
                <div className="fs-6">Last location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>

          {(() => {
            if (status === "Dead") {
              return (
                <div className={`${badge} position-absolute badge bg-danger`}>
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div className={`${badge} position-absolute badge bg-success`}>
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = "No Characters Found 🙃";
  }
  return <>{display}</>;
};

export default Card;
