import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = motion.custom(styled.button`
  padding: ${props => props.theme === 'danger' ? '8px 1rem' : '0.875rem 2rem'};
  border-radius: 9px;
  background-color: ${props => props.theme === 'danger' ? 'var(--danger-complementary-color)' : 'var(--bg-btn)'};
  box-shadow: ${props => props.theme === 'danger' ? '0 0 0px 2px var(--danger-color)' : '0 0 0'};
  color: ${props => props.theme === 'danger' ? 'var(--danger-color)' : 'var(--text-btn)'};
  cursor: pointer;
  font-weight: 500;
  justify-self: flex-end;
`)
