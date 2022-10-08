import {
  Section,
  TrainingSection,
  Input,
  TrainingTitle,
  Select,
  Option,
  AddBtn,
  InputContainer,
  SelectContainer,
  Svg,
  SvgContainer,
} from './AddTraining.styled';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as IconBack } from '../../../images/iconback.svg';
import { useGetBooksQuery } from 'redux/booksApi/booksSlice';
import { useUpdateTrainingMutation } from 'redux/results/resultsSlice';
import BooksList from 'components/Training/BooksList/BooksList';
import BookListInTraining from '../BookkListInTraining/BookkListInTraining';
import MetaThreePoints from '../../LibraryPage/Meta/MetaThree';
import toast from 'react-hot-toast';
import WellDoneModal from 'components/LibraryPage/WellDoneModal/WellDoneModal';
import Modal from 'components/Modal/Modal';

export default function AddTraining({ getFinishDate }) {
  const location = useLocation();
  const path = location?.state?.from ?? '/';
  const { data, isLoading } = useGetBooksQuery();
  const [inProgressBooks, setInProgressBooks] = useState([]);

  /* useEffect(() => {
    if (!isLoading) {
      const books = data.findIndex(book => book.status === 'in progress');
      if (books === -1) {
        return;
      }
      setInProgressBooks(books);
    }
  }, [data, isLoading]); */

  const [updateTraining] = useUpdateTrainingMutation();

  const [start, setStart] = useState('');
  const [finish, setFinish] = useState('');
  const [booksListArr, setBooksListArr] = useState([]);
  const [selectedBookArr, setSelectedBookArr] = useState([]);
  const [selectedBook, setSelectedBook] = useState('');
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const books = data.findIndex(book => book.status === 'in progress');
      if (books === -1) {
        return setDisabled(false);
      }
      setInProgressBooks(books);
    }
  }, [data, isLoading]);

  // return <div>Hello, World</div>;

  useEffect(() => {
    if (!isLoading) {
      const booksArr = data.filter(({ _id }) => selectedBookArr.includes(_id));
      setBooksListArr(booksArr);
    }
  }, [data, isLoading, selectedBookArr]);

  const handleSelectChange = event => {
    setSelectedBook(event.target.value);
  };

  const handleChangeStartTime = e => {
    setStart(e.target.value);
  };

  const handleChangeFinishTime = e => {
    const chosenDate = new Date(e.target.value);
    const startDate = new Date(start);
    if (startDate > chosenDate) {
      return toast.error(
        'Дата закінчення тренування повинна бути пізніше за початок'
      );
    }
    setFinish(e.target.value);
    getFinishDate(e.target.value);
  };

  const handleAddBook = () => {
    const booksArrInfo = data.filter(({ _id }) =>
      selectedBookArr.includes(_id)
    );
    setBooksListArr(booksArrInfo);
    setSelectedBookArr([selectedBook, ...selectedBookArr]);
  };

  const onDeleteBtnClick = e => {
    const bookId = e.currentTarget.value;
    const filteredBooks = selectedBookArr.filter(i => i !== bookId);
    setSelectedBookArr(filteredBooks);
    const bookListSelected = booksListArr.filter(i => i._id !== bookId);
    setBooksListArr(bookListSelected);
  };

  const addTrainingClick = async e => {
    if (!start.includes('-') || !finish.includes('-')) {
      return toast.error('Пропустили дату тренування');
    }
    try {
      const value = {
        start: start,
        end: finish,
        book: selectedBookArr,
      };
      await updateTraining(value);
      toast.success(`Тренування додано.`);
      setDisabled(true);
    } catch (err) {
      toast.error('На жаль, додавання тренування не було успішним');
    }
  };

  return (
    <>
      {/* {open ? <WellDoneModal /> : <MetaThreePoints />} */}
      <MetaThreePoints />

      <Section>
        {inProgressBooks.length === 0 ? (
          <>
            <TrainingSection>
              <SvgContainer>
                <NavLink to={path} exact="true">
                  <IconBack fill="#FF6B08" width="24" height="12" />
                </NavLink>
              </SvgContainer>
              <Svg>
                <use href="../../../images/icons.svg#icon-calendar-1" />
              </Svg>
              <TrainingTitle>Моє тренування</TrainingTitle>
              <InputContainer>
                <Input
                  type="text"
                  placeholder="Початок"
                  name="startTime"
                  onChange={handleChangeStartTime}
                  onFocus={e => (e.target.type = 'date')}
                  onBlur={e => (e.target.type = 'text')}
                />
                <Input
                  type="text"
                  placeholder="Кінець"
                  name="finishTime"
                  onChange={handleChangeFinishTime}
                  onFocus={e => (e.target.type = 'date')}
                  onBlur={e => (e.target.type = 'text')}
                />
              </InputContainer>

              {isLoading ? (
                <h2>loading</h2>
              ) : (
                <SelectContainer>
                  <Select value={selectedBook} onChange={handleSelectChange}>
                    <Option disabled={true} value="">
                      Обрати книги з бібліотеки
                    </Option>
                    {data.map(book => {
                      return (
                        <Option value={book._id} key={book._id}>
                          {book.title}
                        </Option>
                      );
                    })}
                  </Select>
                  <AddBtn type="submit" onClick={handleAddBook}>
                    Додати
                  </AddBtn>
                </SelectContainer>
              )}
            </TrainingSection>

            <BooksList
              books={booksListArr}
              onDeleteBtnClick={onDeleteBtnClick}
              addTrainingClick={addTrainingClick}
              disabled={disabled}
            />
          </>
        ) : (
          <BookListInTraining booksList={data} />
        )}
      </Section>
    </>
  );
}
