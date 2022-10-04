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

// function Star1({ color = '#A6ABB9' }) {
//   return (
//     <svg
//       version="1.1"
//       xmlns="http://www.w3.org/2000/svg"
//       width="17"
//       height="17"
//       viewBox="0 0 34 32"
//       className="star-rating-star"
//     >
//       <title>star</title>
//       <path
//         fill={color}
//         stroke={color}
//         strokeLinejoin="miter"
//         strokeLinecap="butt"
//         strokeMiterlimit="4"
//         strokeWidth="2"
//         d="M17 3.236l3.090 9.511h10l-8.090 5.878 0.225 0.691 2.866 8.82-8.090-5.878-8.090 5.878 3.090-9.511-8.090-5.878h10l3.090-9.511z"
//       ></path>
//     </svg>
//   );
// }
