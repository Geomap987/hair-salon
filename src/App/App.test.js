import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the salon header content', () => {
  render(<App />);
  expect(screen.getByText(/^TVERSKAYA$/i)).toBeInTheDocument();
  expect(screen.getByText(/^OPEN DAILY$/i)).toBeInTheDocument();
});
