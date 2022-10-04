import { useState } from 'react';
import {
  Section,
  Title,
  List,
  BookCard,
  ListItem,
  IconBook,
  BookName,
  ResumeButton,
  BookDescription,
  Wrapper,
  Value,
} from './AlreadyRead.styled';
import Star from 'components/RatingStars/Star';
import Modal from 'components/Modal/Modal';
import BookRating from 'components/BookRating/BookRating';
// import StarRating from 'components/RatingStars/StarRating';

export default function AlreadyRead({ books }) {
  const [id, setId] = useState('')
  const [isModalOpen, setModalOpen] = useState(false)
  const handleSubmit = (e) => {
    setId(e.currentTarget.value)
    setModalOpen(true)
  }
  const handleCloseModal = () => {
    setModalOpen(false);
  }
  const filterBook = books.filter(book => book.status === 'finished');
  return (
    <Section>
      <Title>Вже прочитано</Title>
      <Wrapper>
        <>
          {filterBook.map(book => (
            <BookCard key={book._id}>
              <List>
                <ListItem>
                  {' '}
                  <IconBook />
                  <BookName>{book.title}</BookName>
                </ListItem>
                <ListItem>
                  <BookDescription>Автор:</BookDescription>
                  <Value>{book.author}</Value>
                </ListItem>
                <ListItem>
                  <BookDescription>Рік:</BookDescription>
                  <Value>{book.year}</Value>
                </ListItem>
                <ListItem>
                  <BookDescription>Кількість сторінок: </BookDescription>
                  <Value>{book.pages}</Value>
                </ListItem>
                <ListItem>
                  <BookDescription>Рейтинг: </BookDescription>
                  <Value>{book.rating}</Value>
                  <Star></Star> <Star></Star> <Star></Star> <Star></Star>{' '}
                  <Star></Star>
                  {/* <StarRating /> */}
                </ListItem>
                <ResumeButton
                  value={book._id}
                  disabled={false}
                  onClick={handleSubmit}
                  type="button"
                >
                  Резюме
                </ResumeButton>
              </List>
            </BookCard>
          ))}
        </> 
       <Modal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal}>
         <BookRating onClose={handleCloseModal} bookId={id} />
       </Modal>
      </Wrapper>
    </Section>
  );
}
