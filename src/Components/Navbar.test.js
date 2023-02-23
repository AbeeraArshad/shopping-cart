import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Navbar } from './Navbar';


test('contains a div with class "wrap"', () => {
    const component = shallow(<Navbar />);
    expect(component.find('.wrap')).toHaveLength(1);
  });

test('contains an h1 element with the correct text', () => {
    const component = shallow(<Navbar />);
    const h1 = component.find('h1');
    expect(h1).toHaveLength(1);
    expect(h1.text()).toBe('ALI SANNOBA');
  });
  

