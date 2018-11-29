import { currency } from '@/utilities/currency'

describe('Currency utilities test', () => {
  it('currency function must return two decimals with $ sign', () => {
    expect(currency(5555.3)).toMatch('$5,555.30')
    expect(currency(5.3)).toMatch('$5.30')
    expect(currency(0.3)).toMatch('$0.30')
    expect(currency(5)).toMatch('$5.00')
  })
})
