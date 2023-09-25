import React, { useState } from 'react';

// Movie component
const Movie = ({ movie, onAddReview }) => {
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

    onAddReview(newReview);
    setReviewText('');
    setRating(0);
  };

  return (
    <div className="movie">
      <img src={movie.image} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.synopsis}</p>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= rating ? 'active' : ''}`}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>
      <div>
        <textarea
          placeholder="Leave a review"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <button onClick={handleReviewSubmit}>Submit Review</button>
      </div>
    </div>
  );
};

// MovieList component
const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [reviews, setReviews] = useState([]);
  
    useEffect(() => {
      // Fetch movie data from an API (replace 'API_ENDPOINT' with your actual API endpoint)
      fetch('API_ENDPOINT')
        .then((response) => response.json())
        .then((data) => setMovies(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
  
    const addReview = (review) => {
      setReviews([...reviews, review]);
    };
  
    return (
      <div className="movie-list">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} onAddReview={addReview} />
        ))}
      </div>
    );
  };
  
// Example data
const moviesData = [
  {
    id: 1,
    title: 'Movie 1',
    image: 'movie1.jpg',
    synopsis: 'This is the synopsis for Movie 1.',
  },
  {
    id: 2,
    title: 'Movie 2',
    image: 'movie2.jpg',
    synopsis: 'This is the synopsis for Movie 2.',
  },
];

