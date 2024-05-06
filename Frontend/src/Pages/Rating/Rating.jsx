import React, { useState } from "react";
import "./Rating.css"; // Assuming your CSS styles are defined in styles.css

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleStarClick = (starValue) => {
    setRating(starValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., sending data to a server
    console.log("Rating:", rating);
    console.log("Review:", review);
  };

  return (
    <div className="rating-form-container">
      <div className="inner-container">
        <h2>Give a Rating</h2>
        <form onSubmit={handleSubmit}>
          <div className="rating-review">
            <div className="star-rating">
              <p style={{ color: "white", fontSize: "1rem" }}>Rate stars out of 5:</p>
              {[1, 2, 3, 4, 5].map((value) => (
                <span
                  key={value}
                  className={value <= rating ? "star filled" : "star"}
                  onClick={() => handleStarClick(value)}
                >
                  ★
                </span>
              ))}
            </div>
            <textarea
              placeholder="Write a review..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="review-input"
            ></textarea>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Rating;
