import { useState, useEffect } from 'react';
import {
  Container,
  RatingCaption,
  StarsContainer,
  Form,
  FormCaption,
  FormText,
  Btn,
  BtnContainer,
  StarsField,
} from './BookRating.styled';
import StarRating from '../RatingStars/StarRating';
import { useUpdateRatingMutation } from 'redux/booksApi/booksSlice';
import { useGetBooksQuery } from 'redux/booksApi/booksSlice';
/* import { useUpdateRatingMutation } from 'redux/booksApi/booksSlice'; */

export default function BookRating({ onClose, bookId }) {
  const [comment, setComment] = useState('');
  const [starsRating, setStarsRating] = useState(1);
  const [text, setText] = useState('...'); 
  const [updateRating] = useUpdateRatingMutation();
  const { data, /* error, isLoading*/ } = useGetBooksQuery();
  useEffect(() => {
    const coincidence = data.find(i => i._id === bookId)
    if ( coincidence) {
      setText(coincidence.resume.comment)
    }
  }, [bookId, data]);

  const handleSaveComment = async () => {
    try {
      const value = {
        id: bookId,
        comment: comment,
        rating: starsRating.toString(),
      };
      await updateRating(value);
    } catch (err) {
      console.log(err);
    }
    reset();
    onClose();
  };
  const reset = () => {
    setComment('');
  };

  const handleStarsRating = numberOfStar => {
    setStarsRating(numberOfStar);
  };

  const handleComment = e => {
    setComment(e.currentTarget.value);
  };

  return (
    <Container>
      <RatingCaption>Обрати рейтинг книги</RatingCaption>
      <StarsContainer>
        <StarsField>
          <StarRating
            numTotalStars="5"
            initialRating='0'
            handleStarsRating={handleStarsRating}
          />
        </StarsField>
      </StarsContainer>
      <Form>
        <FormCaption>
          Резюме
          <FormText
            name="comment"
            cols="40"
            rows="3"
            placeholder={text}
            onChange={handleComment}
            value={comment}
          ></FormText>
        </FormCaption>
      </Form>
      <BtnContainer>
        <Btn type="button" onClick={onClose}>
          Назад
        </Btn>
        <Btn type="button" onClick={handleSaveComment}>
          Зберегти
        </Btn>
      </BtnContainer>
    </Container>
  );
}
