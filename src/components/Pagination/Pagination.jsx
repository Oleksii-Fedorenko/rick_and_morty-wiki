import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ setPageNumber, pageNumber, info }) => {

  return (
          <ReactPaginate
        className="pagination justify-content-center my-4 gap-4"
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName="btn btn-primary fs-5 prev"
        nextClassName="btn btn-primary fs-5 next"
        activeClassName="active"
        // marginPagesDisplayed={width < 576 ? 1 : 2}
        // pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        // onPageChange={pageChange}
        pageClassName="page-item"
        pageLinkClassName="page-link"
      />
  );
};

export default Pagination;