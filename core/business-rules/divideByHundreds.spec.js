const divideHundred = require('./divideByHundreds');

describe('Test checkLeapYear Rule', () => {
  describe('check()', () => {
    it ('Should return 2000', async (done) => {
      const num = 2000
      const result = await divideHundred.divide(num)
      expect(result).toEqual(num)
      done()
    })
    it ('Should return É divisível por 100', async (done) => {
      try {
        const num = 2100
        await divideHundred.divide(num)
      } catch (err) {
        expect(err).toEqual('É divisível por 100')
        done()
      }
    })
  })
})