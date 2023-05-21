import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';

describe('Button', () => {
  test('exist', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('when props theme is provided - show connected class', () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});
