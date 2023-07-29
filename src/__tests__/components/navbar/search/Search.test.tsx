import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { Search } from '../../../../components';

describe('Search component test', () => {
  test('should render itself and contain typed text', () => {
    const text = 'Lorem, ipsum dolor sit amet';

    const { queryByTestId } = render(<Search />);

    const input = queryByTestId('search') as HTMLInputElement;

    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: text } });

    expect(input.value).toContain(text);
  });
});
