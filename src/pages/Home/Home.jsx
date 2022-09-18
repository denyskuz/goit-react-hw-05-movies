import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../services/api'
import Items  from 'components/Items';
import classes from './Home.module.css'

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then((data) => setItems(data.results));
  }, []);
  return (
     <main>
        <h1 className={classes.title}>Trending today</h1>
        <Items items={items} />
      </main>
  );
}
export default Home;
