import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";
import classes from "./Cast.module.css";

const Cast = () => {
  const { id } = useOutletContext()
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(id).then(({ cast }) => setCast(cast));
  }, [id]);

  return (
    <ul className={classes.list}>
      {cast && cast.map((item) => (
        <li key={item.id}>
          <img
            src={item.profile_path ? `https://image.tmdb.org/t/p/w300${item.profile_path}`:'https://via.placeholder.com/200x300'}
            alt={item.name}
            width="100"
            height="150"
          />
          <p className={classes.name}>{item.name}</p>
        </li>
      ))}
    </ul>
  );
}
export default Cast;