import React, { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filters/Category/InputGroup";

const Episodes = () => {
  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);

  const { air_date, name } = info;

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json());
      setInfo(data);

      let episode = await Promise.all(
        data.characters.map((person) => {
        return fetch(person).then(res => res.json());
        })
      );
      setResults(episode);
    })();
}, [api]);

  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center mb-4">
          Episode:{" "}
          <span className="text-success">{name === "" ? "Unknown" : name}</span>
        </h1>
        
        <h5 className="text-center">
          Air Data {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>

      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-4">Pick Episodes</h4>
          <InputGroup setId={setId} name="Episode" total={51} />
        </div>
        
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
