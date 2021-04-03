import {numberToFixed} from './numberToFixed'

test('different cases for numberToFixed function', () => {
  expect(numberToFixed(2, 2)).toEqual(2)
  expect(numberToFixed(22, 1)).toEqual(22)
  expect(numberToFixed(2.12345, 2)).toEqual(2.12)
  expect(numberToFixed(2.1, 2)).toEqual(2.1)
  expect(numberToFixed(2.4124, 3)).toEqual(2.412)
  expect(numberToFixed(2.00004, 2)).toEqual(2)
})