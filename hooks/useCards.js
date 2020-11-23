import { useEffect, useState } from 'react'

export function useCards () {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch('https://api-crud-card.herokuapp.com/api/v1/cards')
      .then(res => res.json())
      .then(data => data.body)
      .then(setCards)
      .catch(err => console.log('err1: ', err))
  }, [])

  return cards
}

export function useCard (cardId) {
  const [card, setCard] = useState({})
  console.log('cardId: ', cardId)
  useEffect(() => {
    cardId && fetch(`https://api-crud-card.herokuapp.com/api/v1/cards/${cardId}`)
      .then(res => res.json())
      .then(data => data.body)
      .then(setCard)
      .catch(err => console.log('err2: ', err))
  }, [])

  return card
}
