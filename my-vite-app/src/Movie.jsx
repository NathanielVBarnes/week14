import  { useState } from 'react';
// LOOKUP PROP VALIDATION IN VITE APP or go in the .eslintrc.cjs file and change the rule to "off"
const Movie = ({ movie }) => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);

  const handleReviewSubmit = () => {
    if (reviewText.trim() === '') {
      alert('Please enter a review before submitting.');
      return;
    }

    const newReview = {
      text: reviewText,
      rating: rating,
    };

    // Handle adding the review (You can pass this function as a prop if needed)
    console.log('Review Added:', newReview);

    setReviewText('');
    setRating(0);
  };
// recopied the src path and it worked, not sure the difference looked over it for a while and no clue why... -mv
  return (
    <div className='movie'>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <div className='movie-info'>
        <h3>{movie.title}</h3>
        <span>{movie.vote_average}</span>
      </div>
      <div className='movie-over'>
        <h2>Overview:</h2>
        <p>{movie.overview}</p>
      </div>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= rating ? "active" : ""}`}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>
      <div>
        <textarea
          placeholder='Leave a review'
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <button onClick={handleReviewSubmit}>Submit Review</button>
      </div>
    </div>
  );
};

export default Movie;
