import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Logo } from '../../../components';

describe('Logo component test', () => {
  test('should render itself with app emoji and app title', () => {
    const { queryByTestId } = render(<Logo />);

    expect(queryByTestId('logo')).toContainHTML(
      `<span role='img'>🍿</span><h1>usePopcorn</h1>`,
    );
  });
});
