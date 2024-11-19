import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  const totalStars = 5;
  
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {Array(fullStars).fill(0).map((_, index) => (
        <FaStar key={index} className="text-amber-300 text-md" />
      ))}

      {halfStar && <FaStarHalfAlt className="text-amber-300 text-md" />}

      {Array(emptyStars).fill(0).map((_, index) => (
        <FaRegStar key={index} className="text-amber-300 text-md" />
      ))}

      <span className="ml-2 text-xl font-bold">{rating}</span>
    </div>
  );
};

export default Rating;
