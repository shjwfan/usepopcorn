import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { SearchResults } from '../../../../components';

describe('SearchResults component test', () => {
  test('should render itself correct', () => {
    const resultsNumber = 100;

    const { queryByTestId } = render(
      <SearchResults resultsNumber={resultsNumber} />,
    );

    expect(queryByTestId('search-results')?.textContent).toContain(
      `Found ${resultsNumber} results`,
    );
  });
});
