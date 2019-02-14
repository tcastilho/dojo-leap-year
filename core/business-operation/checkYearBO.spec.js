const checkYearBO = require('./checkYearBO');
const CheckYear = new checkYearBO();

describe('Test checkLeapYear Rule', () => {
  describe('check()', () => {
    it ('Should return 2016', async (done) => {
      const num = 2016
      const result = await CheckYear.year(num)
      expect(result).toEqual(num)
      done()
    })
    it ('Should return Não divisível por 4', async (done) => {
      try {
        const num = 2015
        await CheckYear.year(num)
      } catch (err) {
        expect(err).toEqual('Não divisível por 4')
        done()
      }
    })
    it ('Should return É divisível por 100', async (done) => {
      try {
        const num = 2100
        await CheckYear.year(num)
      } catch (err) {
        expect(err).toEqual('É divisível por 100')
        done()
      }
    })
  })
})