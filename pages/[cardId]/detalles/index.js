import Head from 'next/head'
import Link from 'next/link'
import { useCard } from 'hooks/useCards'
import { useRouter } from 'next/router'
import { Header, Container, FormContainer, A, Controls } from 'styles/stylesDetails'
import { useForm } from 'react-hook-form'
import Alert from 'components/Alert'
import Input from 'components/Input'
import { amountScheme, expirationScheme, numberScheme, ownerScheme } from 'utils/validationSchemes'
import Button from 'components/Button'
import Card from 'components/Card'
import ArrowLeft from 'components/icons/arrowLeft'
import { useEffect } from 'react'
import { amountFormater, cardNumberFormater } from 'utils/formats'

export default function Details () {
  const router = useRouter()
  const { cardId } = router.query
  if (cardId === undefined) {
    return <></>
  }
  const { register, watch, handleSubmit, errors, reset } = useForm()
  const watchOwner = watch('owner')
  const watchNumber = watch('number')
  const watchExpiration = watch('expiration')
  const watchAmount = watch('amount')
  const card = useCard(cardId)

  useEffect(() => {

  }, [])

  useEffect(() => {
    const result = {
      owner: card.owner,
      number: card.number,
      expiration: card.expiration,
      amount: card.amount
    }
    reset(result)
  }, [reset, card, cardId])

  const onSubmit = data => {
    // TODO: call method to update data card with cardId
    const body = JSON.stringify({
      owner: data.owner,
      number: parseInt(data.number, 10),
      brand: 'visa',
      expiration: data.expiration,
      amount: parseFloat(data.amount, 10),
      type: 'credit'
    })
    console.log(body)
    cardId && fetch(`https://api-crud-card.herokuapp.com/api/v1/cards/${cardId}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body
    })
      .then(res => res.json())
      .then(data => data.status)
      .then(status => status === 200 && router.push('/'))
      .catch(err => console.log('error fetching: ', err))
  }

  const handleDeleteCard = () => {
    // TODO: call method to delete card with cardId
    cardId && fetch(`https://api-crud-card.herokuapp.com/api/v1/cards/${cardId}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(data => data.status)
      .then(status => status === 200 && router.push('/'))
      .catch(err => console.log('err2: ', err))
  }

  return (
    <div>
      <Head>
        <title>CRUD MongoDB | detalles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Controls>
          <Link href="/">
            <A> <ArrowLeft /> Regresar</A>
          </Link>
          <Button onClick={handleDeleteCard} theme="danger">Eliminar</Button>
        </Controls>
        <h1>Hola, {card.owner}</h1>
        <p>Edita o elimina la información de tu tarjeta</p>
      </Header>
      <Container>
        {Object.keys(errors).length ? <Alert content={errors}/> : null}
        <Card
          owner={watchOwner || card.owner}
          brand={card.brand}
          numberCard={cardNumberFormater(watchNumber || card.number)}
          amount={amountFormater(watchAmount || card.amount)}
          expiration={watchExpiration || card.expiration}
        />
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Titular"
            register={register(ownerScheme)}
            name="owner" />
          <Input
            placeholder="Numero de tarjeta"
            register={register(numberScheme)}
            name="number" />
          <Input
            placeholder="MM/YY"
            register={register(expirationScheme)}
            name="expiration" />
          <Input
            placeholder="Monto actual"
            register={register(amountScheme)}
            name="amount" />
          <Button>Actualizar tarjeta</Button>
        </FormContainer>
      </Container>
    </div>
  )
}
