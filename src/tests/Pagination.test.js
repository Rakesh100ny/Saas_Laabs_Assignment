import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../components/Pagination';

test('renders pagination with correct buttons', () => {
  render(<Pagination currentPage={1} totalPages={3} onPrev={() => {}} onNext={() => {}} />);

  expect(screen.getByText('Previous')).toBeDisabled();
  expect(screen.getByText('Next')).not.toBeDisabled();
  expect(screen.getByText('Page 1 of 3')).toBeInTheDocument();
});

test('calls onPrev and onNext correctly', () => {
  const onPrev = jest.fn();
  const onNext = jest.fn();

  render(<Pagination currentPage={2} totalPages={3} onPrev={onPrev} onNext={onNext} />);

  fireEvent.click(screen.getByText('Previous'));
  fireEvent.click(screen.getByText('Next'));

  expect(onPrev).toHaveBeenCalledTimes(1);
  expect(onNext).toHaveBeenCalledTimes(1);
});