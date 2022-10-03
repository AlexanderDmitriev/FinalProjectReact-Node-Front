const getBooksList = state => state.bookList;

const getStartDate = state => state.startDate;

const getFinishDate = state => state.finishDate;

const bookListSelectors = {
  getBooksList,
  getStartDate,
  getFinishDate,
};

export default bookListSelectors;