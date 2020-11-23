import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ListContainer = motion.custom(styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 360px);
  gap: 1rem 3rem;
  margin: 2rem auto;
  width: 90%;
  max-width: 1440px;
  @media screen and (max-width: 640px) {
    justify-content: center;
  }
`)

export const Header = styled.header`
  width: 90%;
  max-width: 1440px;
  margin: 3rem auto;

  h1 {
    margin-bottom: 1rem;
  }
`

export const ControlsContainer = styled.section`
  width: 90%;
  max-width: 1440px;
  margin: 1rem auto;
  display: flex;
  justify-content: flex-end;
`
