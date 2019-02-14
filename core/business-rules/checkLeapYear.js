const divideFour = require('./divideByFour'),
  divideHundred = require('./divideByHundreds');

const check = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const div4 = await divideFour.divide(data);
      const result = await divideHundred.divide(div4);
      resolve(result)
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = {
  check
}
