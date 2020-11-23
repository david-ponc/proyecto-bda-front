import styled from 'styled-components'

export const Container = styled.article`
  min-width: 320px;
  background-color: ${props => props.brand === 'visa' ? 'var(--bg-card)' : 'var(--bg-card-alt)'};
  color: ${props => props.brand === 'visa' ? 'var(--text-card)' : 'var(--text-card-alt)'};
  border-radius: 1rem;
  padding: 1.5rem 2rem;
  box-shadow: 0px 0.875rem 2rem -0.875rem rgba(0,0,0,0.25);
  cursor: pointer;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Body = styled.section`
  display: block;
  margin: 2rem 0 3rem 0;

  h2 {
    font-weight: 300;
  }
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
