import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { List } from '../../../components';

describe('List component test', () => {
  test('should render itself and its children correct', () => {
    const children = Array.from({ length: 100 });

    const { queryByTestId, queryByText } = render(
      <List>
        {children.map((_, i: number) => (
          <li key={i}>{i + 1}</li>
        ))}
      </List>,
    );

    expect(queryByTestId('list')).toBeInTheDocument();
    children.forEach((_, i: number) => {
      expect(queryByText(`${i + 1}`)).toBeInTheDocument();
    });
  });
});
