import { useEffect, useState } from "react";
import { fetchSearchQuery } from '../services/api';
import { useSearchParams } from "react-router-dom";
import Items from "components/Items";
import SearchBar from "components/SearchBar";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [items, setMovieItems] = useState([]);

  useEffect(() => {
    if (
      searchParams.get('query') !== '' &&
      searchParams.get('query') !== null
    ) {
      fetchSearchQuery(searchParams.get('query')).then(movies =>
        setMovieItems(movies.results)
      );
    } else {
      setMovieItems([]);
    }
  }, [searchParams]);

  const eventFrom = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.elements['search'].value.trim() });
  };

  return (
    <main>
      <SearchBar
        onSubmit={eventFrom}
        defaultValue={searchParams.get('query')}
      />
      {items.length ? <Items items={items} /> : 'No items :('}
    </main>
    );
};
export default Movies;