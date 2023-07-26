import { FC, useState } from 'react';

const Search: FC = () => {
  const [query, setQuery] = useState<string>(() => '');

  return (
    <input
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={e => setQuery(e.target.value)}
    />
  );
};

export default Search;
