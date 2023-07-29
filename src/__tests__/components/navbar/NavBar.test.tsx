import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { NavBar } from '../../../components';

describe('NavBar component test', () => {
  test('should render itself and its children correct', () => {
    const children = ['Lorem', ',', 'ipsum', 'dollar', 'sit', 'amet'];

    const { queryByTestId, queryByText } = render(
      <NavBar>
        {children.map((value, i: number) => (
          <span key={i}>{value}</span>
        ))}
      </NavBar>,
    );

    expect(queryByTestId('nav-bar')).toBeInTheDocument();
    children.forEach(value => {
      expect(queryByText(value)).toBeInTheDocument();
    });
  });
});
