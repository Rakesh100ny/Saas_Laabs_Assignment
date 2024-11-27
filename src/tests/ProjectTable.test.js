import { render, screen } from '@testing-library/react';
import ProjectTable from '../components/ProjectTable';

test('renders table with correct data', () => {
  const mockProjects = [
    { pledged: 5000, goal: 10000 },
    { pledged: 20000, goal: 15000 },
  ];

  render(<ProjectTable projects={mockProjects} startIndex={0} />);

  expect(screen.getByText('50%')).toBeInTheDocument();
  expect(screen.getByText('$5,000')).toBeInTheDocument();
  expect(screen.getByText('133%')).toBeInTheDocument();
});