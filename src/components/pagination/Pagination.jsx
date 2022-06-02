import React, { useState } from "react";
const Pagination = ({ postsPerPage, totalPosts, goPage, currentPage }) => {
  const pages = [];
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  for (let i = 1; i <= Math.ceil(totalPosts.length / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      {pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return (
            <button
              key={number}
              className={currentPage === number ? "page --active" : "page"}
              onClick={() => goPage(number)}
            >
              {number}
            </button>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Pagination;
