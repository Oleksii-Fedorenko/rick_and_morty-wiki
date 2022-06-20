import React from "react";

const InputGroup = ({ total, name, setId }) => {
  return (
    <div className="input-group mb-3">
      <select
        id={name}
        className="form-select"
        onChange={event => setId(event.target.value)}
      >
        <option value="1" selected>Choose...</option>
        {[...Array(total).keys()].map((episode) => {
          return (
            <option key={episode.id} value={episode + 1}>
              {name} - {episode + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;
