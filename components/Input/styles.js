import styled from 'styled-components'

export const Container = styled.input`
  width: 100%;
  font-size: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 9px;
  box-shadow: inset 0 0 0 2px var(--input-border);
  transition: all .3s ease;

  &::placeholder {
    color: #A9B2C2;
  }

  &:hover {
    box-shadow: inset 0 0 0 2px var(--input-hover-border);
  }

  &:focus {
    box-shadow: inset 0 0 0 2px var(--primary-color);
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type=number] {
    -moz-appearance: textfield;
  }
`
