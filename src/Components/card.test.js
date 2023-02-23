import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Card } from './Card';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Card', () => {
  const data = {
    name: 'Product1',
    price: 10,
    shortD: 'Short description',
    image_Link: 'image.jpg',
  };

  beforeEach(() => {
    useNavigate.mockReturnValue(jest.fn());
  });

  it('renders product information', () => {
   //ACT
    render(<Card data={data} />);
    //ASSERT
    expect(screen.getByText(data.name)).toBeInTheDocument();
    expect(screen.getByText(`Price : ${data.price}`)).toBeInTheDocument();
    expect(screen.getByText(data.shortD)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add to Cart' })).toBeInTheDocument();
  });

  it('navigates to product description page on title click', () => {
    //ACT
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    render(<Card data={data} />);
    fireEvent.click(screen.getByText(data.name));
    //ASSERT
    expect(navigate).toHaveBeenCalledWith('/Descrip', { state: data });
  });
});
