const leapYear = require('../business-rules/checkLeapYear');

class checkYearBO {
  year(data) {
    return new Promise( async (resolve, reject) => {
      try {
        const result = await leapYear.check(data);
        resolve(result);
      } catch (err) {
        reject(err);
      }
    })
  }
}

module.exports = checkYearBO