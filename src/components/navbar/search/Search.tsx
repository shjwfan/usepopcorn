import { FC } from 'react';

type Props = {
  query: string;
  setQuery: (query: string) => void;
};

const Search: FC<Props> = ({ query, setQuery }) => {
  return (
    <input
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={e => setQuery(e.target.value)}
      data-testid='search'
    />
  );
};

export default Search;
