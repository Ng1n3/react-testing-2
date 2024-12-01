import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { CounterTwo } from './counter-two';

describe('counter Two', () => {
  test('renders correctly', () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText('counter Two');
    expect(textElement).toBeInTheDocument();
  });

  test('handlers are called', () => {
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );
    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    const decrementButton = screen.getByRole('button', { name: 'Decrement' });
    user.click(incrementButton);
    user.click(decrementButton);
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
