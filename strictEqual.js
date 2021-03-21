const strictEqual = (value1, value2) => {
  if (typeof value1 !== typeof value2 || value1 !== value2) {
    return false
  }

  return true
}

module.exports = strictEqual
