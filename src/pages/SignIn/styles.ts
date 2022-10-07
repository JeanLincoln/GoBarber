import styled, { css } from 'styled-components'

export const LoginContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 100vh;

    h2 {
      margin-bottom: 2.4rem;
      font-size: 2.4rem;
      font-weight: 700;
    }

    a {
      color: ${theme['white']};
      text-decoration: none;
      font-size: 1.6rem;

      &:first-of-type {
        margin-bottom: 8rem;
      }
    }

    a[href='/signUp'] {
      color: ${theme['orange-500']};
      display: flex;
      align-items: center;

      &::before {
        width: 20px;
        height: 20px;
        margin-right: 1.6rem;
        content: url('images/Criar.svg');
      }

      &:hover {
        color: ${theme['orange-400']};
        transition: color 0.2s;
      }
    }
  `}
`
export const ImageContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background: url('images/Imagem.svg') no-repeat;
  background-size: cover;
`
export const LoginFormContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    height: 100vh;
    flex: 1;

    form {
      display: flex;
      flex-direction: column;
      width: 34rem;

      input {
        height: 5.6rem;
        border-radius: 10px;
        border: none;
        font-size: 1.4rem;
        padding: 0 0 0 5.2rem;
        text-align: start;

        background-color: ${theme['gray-900']};
        color: ${theme['gray-500']};

        &:first-of-type {
          margin-bottom: 0.8rem;
          &::placeholder {
            color: ${theme['gray-500']};
            font-size: 1.4rem;
            background-image: url('images/E-mail.svg');
            background-repeat: no-repeat;
            background-position: 18px;
            background-size: 24px;
          }
        }

        &:last-of-type {
          margin-bottom: 2.4rem;
          &::placeholder {
            color: ${theme['gray-500']};
            font-size: 1.4rem;
            background-image: url('images/Senha.svg');
            background-repeat: no-repeat;
            background-position: 18px;
            background-size: 24px;
          }
        }
      }

      a[type='submit'] {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 5.6rem;
        margin-bottom: 2.4rem;
        border-radius: 10px;
        border: none;
        font-size: 1.6rem;
        cursor: pointer;
        background-color: ${theme['orange-500']};
        color: ${theme['gray-700']};

        &:hover {
          background-color: ${theme['orange-400']};
          transition: background-color 0.2s;
        }
      }
    }
  `}
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
