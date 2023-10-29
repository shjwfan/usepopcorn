import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Search } from '../../../../components';

describe('Search component test', () => {
  test('should render itself and contain typed text', () => {
    const query = 'Lorem, ipsum dolor sit amet';

    const { queryByTestId } = render(
      <Search
        query={query}
        setQuery={() => {
          return void 0;
        }}
      />,
    );

    const input = queryByTestId('search') as HTMLInputElement;
    expect(input.value).toContain(query);
  });
});
