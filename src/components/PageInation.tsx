import { Dispatch, SetStateAction } from "react";

type propTypesPageInation = {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
};
const PageInation = ({
  currentPage,
  setCurrentPage,
  totalPages,
}: propTypesPageInation) => {
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="flex justify-center mt-5 mx-auto">
      <button
        className="bg-gray-200  text-black font-bold py-2 px-4 rounded-l"
        onClick={() => goToPreviousPage()}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <div className="bg-gray-100 py-2 px-4">{`Page ${currentPage} of ${totalPages}`}</div>
      <button
        className="bg-gray-200  text-black font-bold py-2 px-4 rounded-r"
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default PageInation;
