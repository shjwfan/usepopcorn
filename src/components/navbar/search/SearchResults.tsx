import { FC } from 'react';

type Props = {
  resultsNumber: number;
};

const SearchResults: FC<Props> = ({ resultsNumber }) => {
  return (
    <p className='search-results' data-testid='search-results'>
      Found <strong>{resultsNumber}</strong> results
    </p>
  );
};

export default SearchResults;
