import React from 'react';
import ReactPaginate from 'react-paginate';

export const Pagination = ({ setPageNumber, pageNumber, info }) => {

  return (
          <ReactPaginate
        className="pagination justify-content-center my-4 gap-4"
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName="btn btn-primary fs-5 prev"
        nextClassName="btn btn-primary fs-5 next"
        activeClassName="active"
        pageCount={info?.pages}
        onPageChange={(data) =>
        setPageNumber(data.selected)}
        pageClassName="page-item"
        pageLinkClassName="page-link"
      />
  );
};