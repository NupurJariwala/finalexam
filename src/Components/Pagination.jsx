/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination({ totalPages, handlePageChange, currentPage }) {
  console.log(totalPages);
  let pages = createArrayOfSize(totalPages).map((a, i) => {
    return (
      <button
        data-testid="page-btn"
        style={{
          color: currentPage == i + 1 ? "teal" : "black",
          backgroundColor: currentPage == i + 1 ? "black" : "white",
        }}
        disabled={currentPage == i + 1}
        onClick={() => handlePageChange(i + 1)}
      >
        {i + 1}
      </button>
    );
  });
  return <div>{pages}</div>;
}

export default Pagination;
