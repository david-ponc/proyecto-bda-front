import { Container } from './styles'

export default function Button (props) {
  return (
    <Container {...props} theme={props.theme} initial={{ scale: 1 }} whileTap={{ scale: 0.95 }}>
      {props.children}
    </Container>
  )
}
