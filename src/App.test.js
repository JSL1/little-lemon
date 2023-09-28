import { render, screen } from '@testing-library/react';
import App from './App';
import BookingPage from './BookingPage';
import BookingForm from './BookingForm';
import Main from './Main';

test('renders the booking form heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText(/Choose time/);
  expect(headingElement).toBeInTheDocument();
});

describe('initializes available times array', () => {
  render(<Main />);
  expect(initializeTimes().length().toBe(!0));
});

describe('reinitializes the available times array when the calendar is touchbed', () => {
  render(<Main />);
  expect(updateTimes('2023-10-02').toBe(!state.availableTimes));
});