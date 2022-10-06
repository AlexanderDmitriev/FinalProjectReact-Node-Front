import Star from '../../../components/RatingStars/Star';

export default function StarRatingBook({ numTotalStars = 5, rating }) {
  function getColor(rating, i) {
    const i2 = rating * 2;
    const threshold = i2 - i;
    return i < threshold ? '#FF6B08' : '#A6ABB9';
  }

  return (
    <>
      <div>
        {Array.from({ length: numTotalStars }).map((e, i) => (
          <Star key={i} color={getColor(rating, i)} />
        ))}
      </div>
    </>
  );
}

export { StarRatingBook };
