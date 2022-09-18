import { useState, useEffect } from "react";
import {
  NavLink,
  Outlet,
  useLocation,
  useParams  
} from "react-router-dom";
import { fetchMovieById } from "../../services/api";
import classes from './MovieDetails.module.css';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [item, setItem] = useState(null);
    const location = useLocation();

    useEffect(() => {
        fetchMovieById(movieId).then((movie) => {
            setItem(movie);
        });
    }, [movieId]);


    const releaseDate = item && new Date(item.release_date).getFullYear();
    console.log('location.state?.from', location.state?.from);
    const backLinkHref = location.state?.from ?? '/movies';

    return (
        <main>
            <NavLink className={classes.backLink} to={backLinkHref}>Go back</NavLink>
            { item && (
                <>
                    <section className={classes.information}>
                        <div className={classes.image}>
                            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
                        </div>
                        <div className={ classes.info}>
                            <h2>{item.title} ({releaseDate})</h2>
                            <ul>
                                <li>
                                    <strong>User score:</strong>
                                    <span>{item.vote_average}</span>
                                </li>
                                <li>
                                    <strong>Overview:</strong>
                                    <span>{item.overview}</span>
                                </li>
                                <li>
                                    <div className={classes.genres}>
                                        <strong>Genres:</strong>
                                        {item.genres.map(({id, name})=> <span key={id}>{name}</span>)} 
                                    </div> 
                                </li>
                            </ul> 
                              <div className={classes.additionalBox}>
                                    <strong>Additional information</strong>
                                    <ul className={classes.list}>
                                        <li>
                                            <NavLink to="cast" state={{ from: location.state?.from }}>Cast</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="reviews" state={{ from: location.state?.from }}>Reviews</NavLink>
                                        </li>
                                    </ul>
                                    <Outlet context={item} />
                                </div>
                        </div>
                    </section>
            </>
            )}
        </main>
    );
};

export default MovieDetails;