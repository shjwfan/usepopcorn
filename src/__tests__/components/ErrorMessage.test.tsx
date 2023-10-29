import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ErrorMessage } from '../../components';

describe('ErrorMessage component test', () => {
  test('should render error message', () => {
    const errorMessage = 'Lorem, ipsum dolor sit amet';

    const { queryByTestId } = render(
      <ErrorMessage errorMessage={errorMessage} />,
    );

    expect(queryByTestId('error-message')).toContainHTML(
      `<p class='error'>⛔️ ${errorMessage}</p>`,
    );
  });
});
