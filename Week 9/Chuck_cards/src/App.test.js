import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the title "React props and state"', () => {
  render(<App />);
  const linkElement = screen.getByText(/React props and state/i);
  expect(linkElement).toBeInTheDocument();
});
