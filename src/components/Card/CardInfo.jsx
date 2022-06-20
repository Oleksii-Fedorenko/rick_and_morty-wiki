import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CardInfo = () => {
  const { id } = useParams();
  const [fetchedData, updateFetchedData] = useState([]);
  const navigation = useNavigate();

  const { name, image, location, origin, gender, species, status, type } =
    fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());

      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex flex-column gap-2">
        <h1 className="text-center">{name}</h1>
        <img src={image} alt="Person" className="img-fluid" />
        {(() => {
          if (status === "Dead") {
            return <div className="badge bg-danger fs-5">{status}</div>;
          } else if (status === "Alive") {
            return <div className="badge bg-success fs-5">{status}</div>;
          } else {
            return <div className="badge bg-secondary fs-5">{status}</div>;
          }
        })()}

        <div className="content">
          <div>
            <span className="fw-bold">Gender: </span>
            {gender}
          </div>

          <div>
            <span className="fw-bold">Species: </span>
            {species}
          </div>

          <div>
            <span className="fw-bold">Type: </span>
            {type === "" ? "Unknown" : type}
          </div>

          <div>
            <span className="fw-bold">Location: </span>
            {location?.name}
          </div>

          <div>
            <span className="fw-bold">Origin: </span>
            {origin?.name}
          </div>
          <button
            className="btn-danger btn w-100 mt-3"
            onClick={() => {
              navigation(-1);
            }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
