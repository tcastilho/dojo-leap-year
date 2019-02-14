const checkYearBO = require('../core/business-operation/checkYearBO');
const CheckYear = new checkYearBO();

const checkYear = async (req, res) => {
  try {
    const year = parseInt(req.headers.year, 10)
    const result = await CheckYear.year(year)
    return res.status(200).json(result)
  } catch (err) {
    return res.status(400).json(err)
  }
}

module.exports = {
  checkYear
}