import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { CloseableBox } from '../../../components';

describe('CloseableBox component test', () => {
  const text = 'Lorem, ipsum dolor sit amet';

  test('should render itself and its children when is not closed', () => {
    const { queryByTestId, queryByText } = render(
      <CloseableBox>
        <>{text}</>
      </CloseableBox>,
    );

    expect(queryByTestId('box')).toBeInTheDocument();
    expect(queryByText('-')).toBeInTheDocument();
    expect(queryByText(text)).toBeInTheDocument();
  });

  test('should render itself and should not render its children when is closed', () => {
    const { queryByTestId, queryByText } = render(
      <CloseableBox>
        <>{text}</>
      </CloseableBox>,
    );

    fireEvent.click(queryByText('-') as HTMLButtonElement);

    expect(queryByTestId('box')).toBeInTheDocument();
    expect(queryByText('+')).toBeInTheDocument();
    expect(queryByText(text)).not.toBeInTheDocument();
  });
});
