import { useState } from "react";
import { Container, RatingCaption, StarsContainer, Form, FormCaption, FormText, Btn, BtnContainer, StarsField } from './BookRating.styled';
import StarRating from "../RatingStars/StarRating";

export default function BookRating({onClose}) {
    const [comment, setComment] = useState("");
    const [starsRating, setStarsRating] = useState(0);
    
    const handleComment = e => {
        setComment(e.currentTarget.value);
    }
    
    const handleSaveComment = () => {
        // todo логика отправки комментария на бек
        console.log(starsRating, comment)
        reset();
        onClose();
    }
    const reset = () => {
        setComment("")
    }

    const handleStarsRating = numberOfStar => {
        setStarsRating(numberOfStar)
    }

    return (
        <Container>
            <RatingCaption>Обрати рейтинг книги</RatingCaption>
            <StarsContainer>
                <StarsField>
                    <StarRating numTotalStars="5" initialRating="0" handleStarsRating={handleStarsRating} /> 
                </StarsField>
            </StarsContainer>
            <Form>
                <FormCaption>Резюме
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
                <Btn type="button" onClick={onClose}>Назад</Btn>
                <Btn type="button" onClick={handleSaveComment}>Зберегти</Btn>
            </BtnContainer> 
        </Container>
    )
}