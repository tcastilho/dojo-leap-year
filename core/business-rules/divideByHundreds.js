const divide = data => {
  return new Promise((resolve, reject) => {
  try {
    if ((data % 100 !== 0) || (data % 400 === 0))
      resolve(data)
    throw 'É divisível por 100'
  } catch (err) {
    reject(err)
  }
})
}

module.exports = {
  divide
}