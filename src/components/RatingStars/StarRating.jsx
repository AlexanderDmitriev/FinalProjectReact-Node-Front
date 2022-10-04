import { useState, useEffect } from 'react';
import Star from './Star';

export default function StarRating({
  numTotalStars = 5,
  initialRating = 0,
  handleStarsRating,
}) {
  const [numSelectedStars, setNumSelectedStars] = useState(initialRating);
  const [numHoveringStars, setNumHoveringStars] = useState(null);
  const [isUserHovering, setIsUserHovering] = useState(false);

  function getColor(isUserHovering, i, numSelectedStars, numHoveringStars) {
    const threshold = isUserHovering ? numHoveringStars : numSelectedStars;
    return i < threshold ? '#FF6B08' : '#A6ABB9';
  }

  useEffect(() => {
    handleStarsRating(numSelectedStars);
  }, [handleStarsRating, numSelectedStars]);

  return (
    <>
      <div
        onMouseEnter={() => setIsUserHovering(true)}
        onMouseLeave={() => setIsUserHovering(false)}
      >
        {Array.from({ length: numTotalStars }).map((e, i) => (
          <Star
            key={i}
            color={getColor(
              isUserHovering,
              i,
              numSelectedStars,
              numHoveringStars
            )}
            handleSelect={() => setNumSelectedStars(i + 1)}
            handleHover={() => setNumHoveringStars(i + 1)}
          />
        ))}
      </div>
    </>
  );
}

export { StarRating };
