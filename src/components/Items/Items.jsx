import { Link, useLocation } from "react-router-dom";
import { arrayOf, shape, string, number  } from 'prop-types';
import classes from "./Item.module.css";

const Items = ({ items }) => {
  const location = useLocation();
    return (
      <ul className={classes.list}>
        {items.map(({id, title, poster_path, name }) => (
          <li key={id} className={classes.item}>
            <Link
              to={ `/movies/${id}`}
              state={{ from: location }}
            >
              <img
                className={classes.image}
                src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}`: 'https://via.placeholder.com/500'}
                alt={title || name}
                width="320"
              />
              <strong>{title || name}</strong>
            </Link>
          </li>
        ))}
        </ul>
    );
};
Items.propTypes = {
  items: arrayOf(shape({
    id: number.isRequired,
    title: string,
    poster_path: string.isRequired,
    name: string
  })).isRequired
};
export default Items;