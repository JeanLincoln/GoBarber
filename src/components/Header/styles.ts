import styled, { css } from 'styled-components'

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 16rem;
    height: 14.4rem;
    width: 100%;
    background-color: ${theme['gray-800']};
  `}
`
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`
export const LogoContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: 13.7rem;
    text-align: center;

    img {
      border-top: 2px solid ${theme['orange-500']};
      border-bottom: 2px solid ${theme['orange-500']};
      padding: 1.6rem 0;
      max-width: 11rem;
    }

    span {
      font-size: 1.2rem;
      margin: 1rem 0;
    }
  `}
`
export const UserContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    margin-left: 8rem;
    gap: 1.6rem;

    max-width: 21.4rem;

    img {
      max-width: 5.6rem;
      max-height: 5.6rem;
      border-radius: 50%;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    span {
      font-size: 1.6rem;
      font-weight: 700;
      &:last-child {
        color: ${theme['orange-400']};
      }
    }
  `}
`
