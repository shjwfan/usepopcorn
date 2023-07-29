import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import StarsRating from '../../../components/rating/StarRaiting';

describe('StarRating component test', () => {
  const rating = 5;

  test('should render correct filled stars count on click', () => {
    const { container, queryAllByTestId } = render(<StarsRating />);

    fireEvent.click(queryAllByTestId('star-svg')[rating - 1]);

    expect(container.querySelector('p')?.textContent).toBe(`${rating}`);
    checkFilledStars(container, rating);

    fireEvent.click(queryAllByTestId('filled-star-svg')[0]);

    expect(container.querySelector('p')?.textContent).toBe('1');
    checkFilledStars(container, 1);
  });

  test('should render correct messages on click', () => {
    const messages = ['bad', 'good'];

    const { container, queryAllByTestId } = render(
      <StarsRating raitngLimit={messages.length} messages={messages} />,
    );

    fireEvent.click(queryAllByTestId('star-svg')[1]);

    expect(container.querySelector('p')?.textContent).toBe(messages[1]);

    fireEvent.click(queryAllByTestId('filled-star-svg')[0]);

    expect(container.querySelector('p')?.textContent).toBe(messages[0]);
  });

  test('should render correct filled stars count on mouse enter and on mouse leave', () => {
    const { container, queryAllByTestId } = render(<StarsRating />);

    fireEvent.mouseEnter(queryAllByTestId('star-svg')[rating - 1]);

    expect(container.querySelector('p')?.textContent).toBe(`${rating}`);
    checkFilledStars(container, rating);

    fireEvent.mouseLeave(queryAllByTestId('star-svg')[rating - 1]);

    expect(container.querySelector('p')?.textContent).toBe('');
    checkFilledStars(container, 0);
  });

  test('should call onSetRating callback', () => {
    const mockOnSetRating = jest.fn();

    const { queryAllByTestId } = render(
      <StarsRating onSetRating={mockOnSetRating} />,
    );

    fireEvent.click(queryAllByTestId('star-svg')[rating - 1]);

    expect(mockOnSetRating).toHaveBeenCalledWith(5);
  });

  const checkFilledStars = (container: HTMLElement, rating: number) => {
    container.querySelectorAll('svg').forEach((star: SVGElement, i) => {
      const fill = star.getAttribute('fill');
      expect(fill).toBe(i + 1 > rating ? 'none' : 'yellow');
    });
  };
});
