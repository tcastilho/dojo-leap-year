const divide = data => {
  return new Promise((resolve, reject) => {
    try {
      if (data % 4 === 0)
        resolve(data)
      throw "Não divisível por 4"
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = {
  divide
}