import React from 'react';
import { PagintationButton, PaginationContainer } from './Pagination.styles';
import { withRouter } from 'react-router-dom';
import parseuri from 'parseuri';

const Pagination = ({ history, pageNumber, lastPageNum, isMovies }) => {
  let currentLocation = parseuri(history.location.pathname)
    .pathNames.slice(0, -1)
    .join('/');
  const parsedNum = parseInt(pageNumber);
  const pageMinusOne = parsedNum - 1;
  const pagePlusOne = parsedNum + 1;

  const nextPage = () => {
    history.push({
      pathname: `/${currentLocation}/${pagePlusOne}`
    });
  };

  const previousPage = () => {
    if (parsedNum === 1) return;
    history.push({
      pathname: `/${currentLocation}/${pageMinusOne}`
    });
  };

  const setPage = pageNum => {
    history.push({
      pathname: `/${currentLocation}/${pageNum}`
    });
  };

  return (
    <PaginationContainer isMovies={isMovies}>
      <PagintationButton disabled={parsedNum === 1} onClick={previousPage}>
        Previous
      </PagintationButton>
      <PagintationButton
        onClick={() => setPage(pageMinusOne)}
        hidden={parsedNum <= 1}
      >
        {pageMinusOne}
      </PagintationButton>
      <PagintationButton active onClick={previousPage}>
        {parsedNum}
      </PagintationButton>
      <PagintationButton
        hidden={lastPageNum === parsedNum}
        onClick={() => setPage(pagePlusOne)}
      >
        {pagePlusOne}
      </PagintationButton>
      <PagintationButton
        disabled={lastPageNum === parsedNum}
        onClick={() => nextPage(parsedNum)}
      >
        Next
      </PagintationButton>
    </PaginationContainer>
  );
};

export default withRouter(Pagination);
