import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from 'components/Button'
import Card from 'components/Card'
import { ListContainer, Header, ControlsContainer } from 'styles/stylesIndex'
import { AnimateSharedLayout } from 'framer-motion'
import { useCards } from 'hooks/useCards'
import { amountFormater, cardNumberFormater } from 'utils/formats'
import { useEffect, useState } from 'react'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.125,
      duration: 0.4
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
}

export default function Home () {
  const [loading, setLoading] = useState(true)
  const cards = useCards()
  const router = useRouter()

  useEffect(() => {
    cards.length && setLoading(false)
  }, [cards])

  const handleCreateCard = () => {
    router.push('/crear')
  }

  return (
    <div>
      <Head>
        <title>CRUD MongoDB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <h1>Hola, bienvenido a tu gestor de tarjetas</h1>
        <p>Crea, visualiza, edita y elimina tarjetas bancarias</p>
      </Header>

      <ControlsContainer style={{ display: 'flex' }}>
        <Button onClick={handleCreateCard}>Crear tarjeta</Button>
      </ControlsContainer>
      <AnimateSharedLayout type="crossfade">
        <ListContainer
          initial="hidden"
          variants={container}
          animate="visible"
        >
          { !loading &&
            cards.map(card => {
              return (
                <Link href={`/${card.number}/detalles`} key={card.number}>
                  <a>
                    <Card
                      owner={card.owner}
                      brand={card.brand}
                      numberCard={cardNumberFormater(card.number)}
                      amount={amountFormater(card.amount)}
                      expiration={card.expiration}
                      variants={item}
                    />
                  </a>
                </Link>
              )
            })
          }
          {!loading && !cards.length && (
            <>
              <h3>Parece que aun no hay tarjetas creadas 😓</h3>
              <p>Crea una nueva tarjeta</p>
            </>
          )}
        </ListContainer>
      </AnimateSharedLayout>
    </div>
  )
}
