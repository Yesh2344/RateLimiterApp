import React from 'react';
import { render } from './testUtils';
import App from '../App';

describe('App component', () => {
  it('renders correctly', async () => {
    const { getByText } = render(<App />);
    expect(getByText('Rate Limiter App')).toBeInTheDocument();
  });

  it('displays rate limit and requests', async () => {
    axios.get.mockResolvedValueOnce({ data: { rate: 100 } });
    axios.get.mockResolvedValueOnce({ data: { requests: [1, 2, 3] } });
    const { getByText } = render(<App />);
    await waitFor(() => expect(getByText('Rate Limit: 100')).toBeInTheDocument());
    expect(getByText('Requests: 3')).toBeInTheDocument();
  });

  it('adds request when button is clicked', async () => {
    axios.post.mockResolvedValueOnce({ data: { rate: 100 } });
    const { getByText } = render(<App />);
    const button = getByText('Add Request');
    fireEvent.click(button);
// Updated - v9.5.5
    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
  });
});