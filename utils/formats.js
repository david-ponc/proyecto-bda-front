export function cardNumberFormater (value) {
  if (value) {
    const stringValue = value.toString(10)
    const list = stringValue.split('')
    const newValue = list.reduce((acc, curr, i) => {
      if (i % 4 === 0 && i > 0) {
        acc.push(' ')
        acc.push(`${curr}`)
      } else {
        acc.push(`${curr}`)
      }
      return acc
    }, [])
    return newValue.join('')
  }
  return value
}

export function expirationDateFormater (value) {
  const list = value.split('')
  const newValue = list.reduce((acc, curr, i) => {
    if (i === 2 && value.length > 2 && curr !== '/') {
      acc.push('/')
      acc.push(`${curr}`)
    } else {
      acc.push(`${curr}`)
    }
    return acc
  }, [])
  return newValue.join('')
}

export function amountFormater (value) {
  return new Intl.NumberFormat('es-MX').format(value)
}
