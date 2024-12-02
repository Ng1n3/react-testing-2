import { render, screen } from '@testing-library/react';
import { http } from 'msw';
import { server } from '../../mocks/server';
import { Users } from './users';

describe('Users', () => {
  test('renders correctly', () => {
    render(<Users />);
    const textElement = screen.getByText('Users');
    expect(textElement).toBeInTheDocument();
  });

  test('render a list of users', async () => {
    render(<Users />);
    const users = await screen.findAllByRole('listitem');
    expect(users).toHaveLength(3);
  });

  test('renders error', async () => {
    // Override the default handler with an error response
    server.use(
      http.get(
        'https://jsonplaceholder.typicode.com/users',
        async (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<Users />);
    const error = await screen.findByText('Error fetching users');
    expect(error).toBeInTheDocument();
  });
});
