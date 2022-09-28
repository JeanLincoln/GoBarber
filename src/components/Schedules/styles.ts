import styled, { css } from 'styled-components'

export const Header = styled.div`
  display: flex;
`

export const LogoContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    margin-bottom: 8rem;
    max-width: 23rem;

    img {
      border-top: 2px solid ${theme['orange-500']};
      border-bottom: 2px solid ${theme['orange-500']};
      padding: 1.6rem 0;
    }

    span {
      font-size: 1.6rem;
      margin: 1.6rem 0;
    }
  `}
`
