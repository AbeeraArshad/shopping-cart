import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Card } from './Card';

const navigateMock = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => navigateMock,
}));

const productData = {
  name: 'Product1',
  image_Link: 'http://example.com/image.jpg',
  price: 9.99,
  shortD: 'A short description',
};

test('navigates to the correct page when clicked', () => {
  const { getByText } = render(<Card data={productData} />);
  fireEvent.click(getByText(productData.name));
  expect(navigateMock).toHaveBeenCalledWith('/Descrip', { state: productData });
});
