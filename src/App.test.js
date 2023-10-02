import { fireEvent, render, screen } from '@testing-library/react';
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
  render(<BookingForm />);
  expect(updateTimes('2023-10-02').toBe(!state.availableTimes));
});

describe("Submission is disabled if one input is not valid", () => {
  const handleSubmit = jest.fn();
  render(<BookingForm /> );

  const firstNameInput = screen.getByLabelText(/Your name/);
  fireEvent.change(firstNameInput, {target: { value: "Jeremy"}});

  const emailInput = screen.getByLabelText(/Email Address/);
  fireEvent.change(emailInput, {target: { value: "fakeaaaaaaa" } });

  const phoneInput = screen.getByLabelText(/Phone/);
  fireEvent.change(phoneInput, { target: { value: "2226666969"}});

  const dateInput = screen.getByLabelText(/Choose date/);
  fireEvent.change(dateInput, {taget: { value: '2023-10-11'}}); 

  const timeInput = screen.getByLabelText(/Choose time/);
  fireEvent.change(timeInput, { taget: { value: '18:30' }});

  const guestsInput = screen.getByLabelText(/Number of Guests/);
  fireEvent.change(guestsInput, { target: { value: '2'}});
  
  const occasionInput = screen.getByLabelText(/Occasion/);
  fireEvent.change(occasionInput, {target: { value: 'Birthday'}});

  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);

  expect (handleSubmit).not.toHaveBeenCalled();
  expect (submitButton).toHaveAttribute('disabled');
});

describe("Submission is enabled if all form entries are valid", () => {
  const handleSubmit = jest.fn();
  render(<BookingForm /> );

  const firstNameInput = screen.getByLabelText(/Your name/);
  fireEvent.change(firstNameInput, {target: { value: "Jeremy"}});

  const emailInput = screen.getByLabelText(/Email Address/);
  fireEvent.change(emailInput, {target: { value: "danbfaster@iamyours.com" } });

  const phoneInput = screen.getByLabelText(/Phone/);
  fireEvent.change(phoneInput, { target: { value: "2226666969"}});

  const dateInput = screen.getByLabelText(/Choose date/);
  fireEvent.change(dateInput, {taget: { value: '2023-10-11'}}); 

  const timeInput = screen.getByLabelText(/Choose time/);
  fireEvent.change(timeInput, { taget: { value: '18:30' }});

  const guestsInput = screen.getByLabelText(/Number of Guests/);
  fireEvent.change(guestsInput, { target: { value: '2'}});
  
  const occasionInput = screen.getByLabelText(/Occasion/);
  fireEvent.change(occasionInput, {target: { value: 'Birthday'}});

  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);

  expect(handleSubmit).toBeCalled();
});