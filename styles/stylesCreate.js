import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = motion.custom(styled.section`
  width: 90%;
  max-width: 640px;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  article {
    max-width: 360px;
    cursor: default;
    margin-bottom: -2rem;
  }
`)

export const FormContainer = motion.custom(styled.form`
  width: 100%;
  border-radius: 13px;
  box-shadow: 0 1px 4px -1px rgba(95, 110,133,0.12),
              0 .5rem 1.5rem -1rem rgba(95, 110, 133, 1);
  padding: 4rem 1.5rem 2rem 1.5rem;
  background-color: var(--gray-100);
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  grid-template-areas: "owner owner owner"
                       "number number expiration"
                       "amount amount amount"
                       "button button button";
  gap: 1.5rem;

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  input {
    &:first-child {
      grid-area: owner;
    }
    &:nth-child(4) {
      grid-area: amount;
    }
    &:nth-child(2) {
      grid-area: number;
    }
  }
  button {
    width: 100%;
    grid-area: button;
  }
`)

export const Header = styled.header`
  width: 90%;
  max-width: 640px;
  margin: 3rem auto;
`

export const A = styled.a`
  max-width: 145px;
  width: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 13px;
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--gray-300);
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    background-color: var(--gray-100);
    box-shadow: 0 4px 1.5rem -0.875rem var(--gray-300);
  }
`
