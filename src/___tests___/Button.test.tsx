import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/Button';
import { vi } from 'vitest';

describe('Button Component', () => {
  it('renders correctly with text', () => {
    render(<Button>Click me</Button>);

    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const onClickMock = vi.fn();
    render(<Button onClick={onClickMock}>Click me</Button>);

    // Simulate a click event
    fireEvent.click(screen.getByText('Click me'));

    // Verify if the onClick function was called
    expect(onClickMock).toHaveBeenCalled();
  });
});
