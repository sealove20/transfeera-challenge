import {
  ArrowIcon,
  PaginationNumber,
  PaginationNumberContainer,
  Pagination as SPagination,
} from './Pagination.styles';
import leftArrowIcon from '../../assets/left-arrow.svg';
import rightArrowIcon from '../../assets/right-arrow.svg';

export const Pagination = ({ pagination, onChangePagination }) => {
  const { currentPage, perPage, numberOfPages } = pagination;
  const pages = Array.from({ length: numberOfPages }, (_, index) => index + 1);

  const handlePagination = (page) => {
    onChangePagination(page, perPage);
  };

  const handleBackArrowPagination = () => {
    if (currentPage - 1 >= 1) {
      onChangePagination(currentPage - 1, perPage);
    }
  };

  const handleFowardArrowPagination = () => {
    if (currentPage + 1 <= numberOfPages) {
      onChangePagination(currentPage + 1, perPage);
    }
  };

  return (
    <SPagination>
      <ArrowIcon src={leftArrowIcon} onClick={handleBackArrowPagination} />
      <PaginationNumberContainer>
        {pages.map((page) => (
          <PaginationNumber
            $currentPage={currentPage === page}
            onClick={() => handlePagination(page)}
            key={page}
          >
            {page}
          </PaginationNumber>
        ))}
      </PaginationNumberContainer>
      <ArrowIcon src={rightArrowIcon} onClick={handleFowardArrowPagination} />
    </SPagination>
  );
};
