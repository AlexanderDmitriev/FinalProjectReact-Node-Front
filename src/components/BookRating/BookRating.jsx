import { useState } from 'react';
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
import { useUpdateRatingMutation } from 'redux/rating/ratingSlice';

export default function BookRating({ onClose, bookId }) {
  const [comment, setComment] = useState('');
  const [starsRating, setStarsRating] = useState(1);
  const [updateRating] = useUpdateRatingMutation();

  const handleSaveComment = async () => {
    try {
      const value = {
        id: bookId,
        comment: comment,
        rating: starsRating.toString(),
      };
      console.log(value);
      console.log(typeof bookId);
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
            initialRating="0"
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
            placeholder="..."
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
