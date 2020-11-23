export function determinateBrand (value) {
  if (/4[0-9]+/.test(value)) {
    return 'visa'
  }
  return 'mastercard'
}
