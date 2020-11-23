import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import VisaBrand from 'components/brands/Visa/index.js'
import MastercardBrand from 'components/brands/Mastercard/index.js'
import { Container, Header, Body, Footer } from './styles.js'

// style={{ perspective: '520px' }}
export default function Card ({ owner, brand = 'visa', numberCard, amount, expiration, variants }) {
  const [type, setType] = useState(<VisaBrand />)

  useEffect(() => {
    brand === 'visa' && setType(<VisaBrand />)
    brand === 'mastercard' && setType(<MastercardBrand />)
    // console.log(brand)
  }, [brand])

  return (
    <motion.div
      initial={{ y: 10, scale: 0.95, rotateX: 24, transformPerspective: 500 }}
      whileHover={{ y: 0, scale: 1, rotateX: 0 }}
      transition={{ duration: 0.3 }}
      variants={variants}
    >
      <Container brand={brand}>
        <Header>
          <h4>{owner || 'Nombre completo'}</h4>
          <span>{type}</span>
        </Header>
        <Body>
          <h2>{numberCard || '0000 0000 0000 0000'}</h2>
        </Body>
        <Footer>
          <h3>${amount || '0000.00'}</h3>
          <p>{expiration || 'MM/YY'}</p>
        </Footer>
      </Container>
    </motion.div>
  )
}
