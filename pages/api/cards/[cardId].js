const data = [
  {
    owner: 'Juanito Perez Ortega',
    number: '0000 0000 0000 0000',
    expiration: '00/00',
    brand: 'visa',
    amount: '00000.00',
    movimientos: {
      0: {
        fecha: '00/00/0000',
        monto: '0000.00',
        destino: 'Pamela Jimenez Luma',
        categoria: 'transferencia'
      },
      1: {
        fecha: '00/00/0000',
        monto: '0000.00',
        categoria: 'deposito'
      }
    }
  },
  {
    owner: 'Pamela Jimenez Luma',
    number: '0000 0000 0000 0000',
    expiration: '00/00',
    brand: 'mastercard',
    amount: '00000.00',
    movimientos: {
      0: {
        fecha: '00/00/0000',
        destino: 'Juanito Perez Ortega',
        monto: '0000.00',
        categoria: 'transferencia'
      },
      1: {
        fecha: '00/00/0000',
        monto: '0000.00',
        categoria: 'deposito'
      }
    }
  }
]

export default (req, res) => {
  const { cardId } = req.query
  res.statusCode = 200
  res.json(data[cardId])
}
