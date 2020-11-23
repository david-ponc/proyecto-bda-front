import { Container } from './styles'

export default function Input (props) {
  return (
    <Container {...props} ref={props.register} value={props.value} onChange={props.onChange} />
  )
}
