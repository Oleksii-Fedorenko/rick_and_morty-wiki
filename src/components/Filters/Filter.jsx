import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filter = ({
  setPageNumber,
  setStatus,
  setGender,
  setSpecies,
}) => {
  const clear = () => {
    setPageNumber(1);
    setStatus("");
    setStatus("");
    setGender("");
    window.location.reload(false);
  }

  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-center text-success text-decoration-underline mb-3"
      >
        Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
      </div>
    </div>
  );
}

export default Filter;