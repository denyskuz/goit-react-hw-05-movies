import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";
import classes from "./Reviews.module.css";

const Reviews = () => {
  const { id } = useOutletContext();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(id).then((data) => setReviews(data.results));
  }, [id]);

  return (
      reviews.length > 0 ? (
          <ul className={classes.list}>
            {reviews.map((item, id) => (
              <li key={id} className={classes.item}>
                <p className={classes.title}>{item.author}</p>
                <p className={classes.description}>{item.content}</p>
              </li>
            ))}
          </ul>
      ) : (
        <p>No Reviews</p>
    )
  );
}
export default Reviews;