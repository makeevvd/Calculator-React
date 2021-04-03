import { render, screen } from '@testing-library/react';

import * as React from 'react';

import App from './App';
import userEvent from "@testing-library/user-event/dist";


test('66 + 4 = 70', () => {

  render(<App />);
  expect(screen.getByRole('output')).toBeInTheDocument();

  userEvent.click(screen.getByRole('button', {
    name: /6/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /6/i
  }));
  expect(screen.getByRole('output')).toHaveTextContent('66');

  userEvent.click(screen.getByRole('button', {
    name: /\+/i
  }))
  userEvent.click(screen.getByRole('button', {
    name: /4/i
  }))
  userEvent.click(screen.getByRole('button', {
    name: /=/i
  }))
  expect(screen.getByRole('output')).toHaveTextContent('70')

})

test('5524 del, del => 55 - 5 = 50', () => {
  render(<App />);
  userEvent.click(screen.getByRole('button', {
    name: /5/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /5/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /2/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /4/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /del/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /del/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /-/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /5/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /=/i
  }));
  expect(screen.getByRole('output')).toHaveTextContent('50')
})

test('7 * sqrt(81) + 37 = 100', () => {
  render(<App />);
  userEvent.click(screen.getByRole('button', {
    name: /7/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /\*/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /8/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /1/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /√/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /\+/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /3/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /7/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /=/i
  }));
  expect(screen.getByRole('output')).toHaveTextContent('100')
})

test('7+ (-7) = 0, then press 2 to have 2, then allClear to have 0', () => {
  render(<App />);
  userEvent.click(screen.getByRole('button', {
    name: /7/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /\+/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /7/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /±/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /=/i
  }));
  expect(screen.getByRole('output')).toHaveTextContent('0')
  userEvent.click(screen.getByRole('button', {
    name: /2/i
  }));
  expect(screen.getByRole('output')).toHaveTextContent('2')
  userEvent.click(screen.getByRole('button', {
    name: /ac/i
  }));
  expect(screen.getByRole('output')).toHaveTextContent('0')
})

test('negative root throws error and calculator is able to work after that', () => {
  render(<App />);
  userEvent.click(screen.getByRole('button', {
    name: /7/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /±/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /√/i
  }));

  expect(screen.getByRole('output')).toHaveTextContent('NaN')

  userEvent.click(screen.getByRole('button', {
    name: /1/i
  }));
  expect(screen.getByRole('output')).toHaveTextContent('1')
})

test('2 ^ 4 = 16', () => {
  render(<App />);
  userEvent.click(screen.getByRole('button', {
    name: /2/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /\^/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /4/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /=/i
  }));

  expect(screen.getByRole('output')).toHaveTextContent('16')

})

test('decimals + negative decimals work', () => {
  render(<App />);
  userEvent.click(screen.getByRole('button', {
    name: /\./i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /2/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /\+/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /1/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /=/i
  }));

  expect(screen.getByRole('output')).toHaveTextContent('1.2')
  userEvent.click(screen.getByRole('button', {
    name: /±/i
  }));
  expect(screen.getByRole('output')).toHaveTextContent('-1.2')
  userEvent.click(screen.getByRole('button', {
    name: /-/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /8/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /\./i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /8/i
  }));
  userEvent.click(screen.getByRole('button', {
    name: /=/i
  }));
  expect(screen.getByRole('output')).toHaveTextContent('-10')
})

