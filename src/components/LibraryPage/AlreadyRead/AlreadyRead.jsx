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
// import StarRating from 'components/RatingStars/StarRating';

export default function AlreadyRead({ books }) {
  const handleSubmit = () => {
    // setIsModalOpen(true);
  };
  const filterBook = books.filter(book => book.status === 'finished');
  return (
    <Section>
      <Title>Вже прочитано</Title>
      <Wrapper>
        <>
          {filterBook.map(book => (
            <BookCard key={book.id}>
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
                  disabled={false}
                  onClick={handleSubmit}
                  type="submit"
                >
                  Резюме
                </ResumeButton>
              </List>
            </BookCard>
          ))}
        </>
      </Wrapper>
    </Section>
  );
}
