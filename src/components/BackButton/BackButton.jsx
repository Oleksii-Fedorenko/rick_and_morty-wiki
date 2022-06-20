import React from "react";
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigation = useNavigate();

  return (
    <button
      className="btn-danger btn mt-3 w-100"
      onClick={() => {
        navigation(-1);
      }}
    >
      Back
    </button>
  );
};

export default BackButton;
