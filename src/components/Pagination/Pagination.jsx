import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

export const Pagination = ({ setPageNumber, pageNumber, info }) => {
  const [width, setWitdth] = useState(window.innerWidth);
  const updateDimension = () => {
    setWitdth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  return (
    <>
      <style>
        {`
        @media (max-width: 768px) {
          .next, .prev {
            display: none;
          }
          .pagination {
            font-size: 14px;
          }
        }
        `}
      </style>
      <ReactPaginate
        className="pagination justify-content-center my-4 gap-4"
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName="btn btn-primary fs-5 prev"
        nextClassName="btn btn-primary fs-5 next"
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={(data) => setPageNumber(data.selected)}
        pageClassName="page-item"
        pageLinkClassName="page-link"
      />
    </>
  );
};
