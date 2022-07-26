import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('rederns learn react link', () => {
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
})