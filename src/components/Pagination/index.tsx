import React from "react";
import cx from "classnames";

import Button from "../Button";

interface PaginationProps {
  hasNext?: boolean;
  hasPrevious?: boolean;
  onNext: () => void;
  onPrev: () => void;
  className?: string;
}
const Pagination: React.FC<PaginationProps> = ({
  className,
  hasNext,
  hasPrevious,
  onNext,
  onPrev,
}) => {
  return (
    <div className={cx("d-flex justify-content-center", className)}>
      <Button
        onClick={onPrev}
        disabled={hasNext}
        variant="link"
        leftIcon="bi bi-chevron-left"
      >
        Previous Page
      </Button>
      <Button
        disabled={hasPrevious}
        variant="link"
        rightIcon="bi bi-chevron-right"
        onClick={onNext}
      >
        Next Page
      </Button>
    </div>
  );
};

export default Pagination;
