import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Star from '../../../components/rating/Star';

describe('Star component test', () => {
  test('should render its self filled', () => {
    const { queryByTestId } = render(
      <Star
        color={'yellow'}
        isFilled={true}
        rectangle={['48px', '48px']}
        onClick={() => void 0}
        onMouseEnter={() => void 0}
        onMouseLeave={() => void 0}
      />,
    );

    expect(queryByTestId('filled-star-svg')).toBeInTheDocument();
  });

  test('should render its self', () => {
    const { queryByTestId } = render(
      <Star
        color={'yellow'}
        isFilled={false}
        rectangle={['48px', '48px']}
        onClick={() => void 0}
        onMouseEnter={() => void 0}
        onMouseLeave={() => void 0}
      />,
    );

    expect(queryByTestId('star-svg')).toBeInTheDocument();
  });
});
