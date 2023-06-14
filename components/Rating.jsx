import React from 'react';

const Rating = ({ rating }) => {
  const maxRating = 5;
  const parsedRating = parseInt(rating, 10);
  const filledStars = !isNaN(parsedRating) ? Math.floor(parsedRating) : 0;
  const remainingStars = maxRating - filledStars;

  const goldenStar = <span style={{ color: 'gold',fontSize:"26px" }}>★</span>;
  const greyStar = <span style={{ color: 'grey',fontSize:"26px" }}>★</span>;

  const filledStarElements = Array(filledStars).fill(goldenStar);
  const remainingStarElements = Array(remainingStars).fill(greyStar);

  const starElements = [...filledStarElements, ...remainingStarElements];

  return <div>{starElements}</div>;
};

export default Rating;
