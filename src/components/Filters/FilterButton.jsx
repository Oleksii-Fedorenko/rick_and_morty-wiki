import React from "react";

const FilterButton = ({
  name,
  index,
  items,
  task,
  setPageNumber,
}) => {
  return (
    <div>
      <style>
        {`
        .x:checked + label {
          background-color: #1ba41b;
          color: white;
        }

        input[type="radio"] {
          display: none;
        }
        `}
      </style>
      
      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
          onClick={() => {
            setPageNumber(1);
            task(items);
          }}
        />
        <label
          class="btn btn-outline-success"
          for={`${name}-${index}`}
        >
          {items}
        </label>
      </div>
    </div>
  );
};

export default FilterButton;