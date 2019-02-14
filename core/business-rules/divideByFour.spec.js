const divideFour = require('./divideByFour');

describe('Test checkLeapYear Rule', () => {
  describe('check()', () => {
    it ('Should return 2016', async (done) => {
      const num = 2016
      const result = await divideFour.divide(num)
      expect(result).toEqual(num)
      done()
    })
    it ('Should return Não divisível por 4', async (done) => {
      try {
        const num = 2015
        await divideFour.divide(num)
      } catch (err) {
        expect(err).toEqual('Não divisível por 4')
        done()
      }
    })
  })
})