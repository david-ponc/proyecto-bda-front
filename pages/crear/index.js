import Button from 'components/Button'
import Card from 'components/Card'
import Input from 'components/Input'
import Alert from 'components/Alert'
import Head from 'next/head'
import Link from 'next/link'
import { Container, FormContainer, Header, A } from 'styles/stylesCreate'
import { useForm } from 'react-hook-form'
import { amountScheme, expirationScheme, numberScheme, ownerScheme } from 'utils/validationSchemes'
import ArrowLeft from 'components/icons/arrowLeft'
import { amountFormater, cardNumberFormater, expirationDateFormater } from 'utils/formats'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { determinateBrand } from 'utils/tools'

export default function Home () {
  const [brand, setBrand] = useState('visa')
  const router = useRouter()
  const { register, watch, handleSubmit, errors, setValue } = useForm()
  const watchOwner = watch('owner')
  const watchNumber = watch('number')
  const watchExpiration = watch('expiration')
  const watchAmount = watch('amount')

  const onSubmit = data => {
    // TODO: call method to create new card
    const body = JSON.stringify({
      owner: data.owner,
      number: parseInt(data.number, 10),
      brand,
      expiration: data.expiration,
      amount: parseFloat(data.amount, 10),
      type: 'credit'
    })
    console.log(body)
    fetch('https://api-crud-card.herokuapp.com/api/v1/cards', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body
    })
      .then(res => res.json())
      .then(data => data.status)
      .then(status => status === 200 && router.push('/'))
      .catch(err => console.log('error fetching: ', err))
  }

  const handleChangeNumber = ({ target }) => {
    const { value } = target
    const newBrand = determinateBrand(value)
    setBrand(newBrand)
    console.log(brand)
  }

  const handleChangeExpiration = ({ target }) => {
    const { value } = target
    setValue('expiration', expirationDateFormater(value))
  }

  return (
    <div>
      <Head>
        <title>CRUD MongoDB | Crear</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Link href="/">
          <A> <ArrowLeft /> Regresar</A>
        </Link>
      </Header>
      <Container>
        {Object.keys(errors).length ? <Alert content={errors}/> : null}
        <Card
          owner={watchOwner && watchOwner}
          brand={brand}
          numberCard={watchNumber && cardNumberFormater(watchNumber)}
          amount={watchAmount && amountFormater(watchAmount)}
          expiration={watchExpiration && watchExpiration}
        />
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Titular"
            register={register(ownerScheme)}
            name="owner" />
          <Input
            type="number"
            placeholder="Numero de tarjeta"
            register={register(numberScheme)}
            onChange={handleChangeNumber}
            name="number" />
          <Input
            placeholder="MM/YY"
            register={register(expirationScheme)}
            onChange={handleChangeExpiration}
            name="expiration" />
          <Input
            type="number"
            placeholder="Monto actual"
            register={register(amountScheme)}
            name="amount" />
          <Button>Crear tarjeta</Button>
        </FormContainer>
      </Container>
    </div>
  )
}
