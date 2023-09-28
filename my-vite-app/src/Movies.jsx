// Movie component
const Movie = ({ movie }) => {
    const [rating, setRating] = useState(0);
    const [reviews, setReviews] = useState([]);
  
    const handleRatingChange = (value) => {
      setRating(value);
    };
  
    const handleReviewSubmit = (name, text) => {
      const newReview = { name, text };
      setReviews([...reviews, newReview]);
    };
  
    return (
      <div className="movie">
        <img src={movie.image} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>{movie.synopsis}</p>
        <Stars rating={rating} onChange={handleRatingChange} />
        <ReviewList reviews={reviews} />
        <ReviewForm onSubmit={handleReviewSubmit} />
      </div>
    );
  };