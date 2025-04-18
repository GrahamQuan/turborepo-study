import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../app/page';

// Mock the imported components to isolate the page component
vi.mock('../componnets/input-form', () => ({
  default: () => <div data-testid='mock-input-form'>Input Form</div>,
}));

vi.mock('../componnets/post-list', () => ({
  default: () => <div data-testid='mock-post-list'>Post List</div>,
}));

test('Home Page', () => {
  render(<Home />);

  // Test the heading is present
  const headingElement = screen.getByText('Home');
  expect(headingElement).toBeDefined();

  // Verify the mocked components are rendered
  expect(screen.getByTestId('mock-input-form')).toBeDefined();
  expect(screen.getByTestId('mock-post-list')).toBeDefined();
});
