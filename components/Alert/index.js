import AlertError from 'components/icons/alertError'
import { useEffect, useState } from 'react'
import { Container } from './styles'

export default function Alert (props) {
  const [items, setItems] = useState(['error'])

  useEffect(() => {
    const { content } = props
    setItems(content)
  }, [props.content])
  return (
    <Container
    initial={{ scale: 0, y: -24 }}
    animate={{ y: 0, scale: 1 }}
    transition={{
      type: 'spring',
      stiffness: 240,
      damping: 20
    }}
    >
      <div>
        <h3>Error</h3>
        <ul>
          {items.owner && <li>{'El titular es obligatorio'}</li>}
          {items.number && <li>{'El numero es obligatorio'}</li>}
          {items.expiration && <li>{'La fecha de expiración es obligatoria'}</li>}
          {items.amount && <li>{'El monto actual es obligatorio'}</li>}
        </ul>
      </div>
      <AlertError />
    </Container>
  )
}
