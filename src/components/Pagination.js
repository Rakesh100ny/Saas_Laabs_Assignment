import React from 'react';

const Pagination = ({ currentPage, totalPages, onPrev, onNext }) => {
  return (
    <div className="pagination">
      <button onClick={onPrev} disabled={currentPage === 1} aria-label="Previous Page">
        Previous
      </button>
      <span aria-live="polite">
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={onNext} disabled={currentPage === totalPages} aria-label="Next Page">
        Next
      </button>
    </div>
  );
};

export default Pagination;