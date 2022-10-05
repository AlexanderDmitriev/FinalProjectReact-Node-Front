export default function Star({
  color = '#A6ABB9',
  handleSelect = () => {},
  handleHover = () => {},
}) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 34 32"
      className="star-rating-star"
    >
      <title>star</title>
      <path
        fill={color}
        onMouseOver={handleHover}
        onClick={handleSelect}
        stroke={color}
        strokeLinejoin="miter"
        strokeLinecap="butt"
        strokeMiterlimit="4"
        strokeWidth="2"
        d="M17 3.236l3.090 9.511h10l-8.090 5.878 0.225 0.691 2.866 8.82-8.090-5.878-8.090 5.878 3.090-9.511-8.090-5.878h10l3.090-9.511z"
      ></path>
    </svg>
  );
}
