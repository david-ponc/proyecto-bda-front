import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = motion.custom(styled.div`
  width: 100%;
  border-radius: 9px;
  background-color: var(--bg-alert);
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;

  ul {
    padding: 0 0 0 0.5rem;
    list-style: none;
    color: var(--gray-400)
  }

  svg {
    align-self: center;
    width: 48px;
    height: 48px;
    padding: .5rem;
    fill: var(--fill-color-icon-alert);
    background-color: var(--bg-icon-alert);
    border-radius: 50%;
  }
`)
