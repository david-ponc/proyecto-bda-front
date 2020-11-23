export const ownerScheme = {
  required: true,
  minLength: 8,
  maxLength: 25,
  pattern: /[A-Za-z\s]+/,
  message: 'El titular de la tarjeta es obligatorio'
}

export const numberScheme = {
  required: true,
  minLength: 16,
  maxLength: 16,
  pattern: /[0-9\s]+/,
  message: 'El numero es obligatorio'
}

export const expirationScheme = {
  required: true,
  minLength: 5,
  maxLength: 5,
  pattern: /[0-9]{2,2}[/][0-9]{2,2}/,
  message: 'La fecha de expiración es obligatoria'
}

export const amountScheme = {
  required: true,
  minLength: 1,
  maxLength: 8,
  pattern: /[0-9]+/,
  message: 'El monto actual es obligatorio'
}
