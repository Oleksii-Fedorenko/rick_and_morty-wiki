import React from 'react';
import { Link } from "react-router-dom";
import styles from './Card.module.scss';


const { card, img, content, badge } = styles;

const Card = ({ results, page }) => {
  let display;

  if (!results) {
    return display = 'No Characters Found 🙃'
  } else {
    display = results.map(x => {
      const { id, name, image, location, status } = x;

      return (
        <Link 
          style={{textDecoration: "none"}}
          to={`${page}${id}`}
          key={id}
          className="col-4 mb-4 position-relative text-dark"
        >
          <div className={card}>
            <img
              src={image}
              alt=""
              className={`${img} img-fluid`}
            />
            <div className={`${content}`}>
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Last location</div>
                <div className="fs-5">{location.name}</div>
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
                  <div className={`${badge} position-absolute badge bg-secondary`}>
                    {status}
                  </div>
                );
              }
            }) ()}
          </div>
        
        </Link>
      )
    })

  }

  return (
    <>{display}</>
  )
}

export default Card;