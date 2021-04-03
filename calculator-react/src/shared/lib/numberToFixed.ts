export const numberToFixed = (num: number, digitsAfterPoint: number): number => {
  return +parseFloat((num).toFixed(digitsAfterPoint))
}