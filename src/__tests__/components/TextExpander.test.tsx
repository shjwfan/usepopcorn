import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { TextExpander } from '../../components';

describe('TextExpander component test', () => {
  test('should render collapsed text', () => {
    const text =
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam quidem, laborum magni aperiam temporibus vitae, labore vero pariatur iure reprehenderit maxime quo! Delectus asperiores consequatur quisquam non nihil quidem iste?';
    const { queryByTestId } = render(<TextExpander>{text}</TextExpander>);

    const button = queryByTestId('text-expander')?.querySelector(
      'button',
    ) as HTMLButtonElement;

    fireEvent.click(button);

    expect(
      queryByTestId('text-expander')?.querySelector('span')?.textContent,
    ).toContain('Lorem ipsum dolor, sit amet...');
    expect(button.textContent).toContain('Show more');
  });

  test('should render expanded text', () => {
    const text =
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam quidem, laborum magni aperiam temporibus vitae, labore vero pariatur iure reprehenderit maxime quo! Delectus asperiores consequatur quisquam non nihil quidem iste?';
    const { queryByTestId } = render(<TextExpander>{text}</TextExpander>);

    expect(
      queryByTestId('text-expander')?.querySelector('span')?.textContent,
    ).toContain(text);
    expect(
      queryByTestId('text-expander')?.querySelector('button')?.textContent,
    ).toContain('Show less');
  });
});
