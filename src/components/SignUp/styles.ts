import * as RadioGroup from '@radix-ui/react-radio-group'
import styled, { css } from 'styled-components'

export const SignUpContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 100vh;

    a {
      color: ${theme['white']};
      text-decoration: none;
      font-size: 1.6rem;

      &:first-of-type {
        margin-bottom: 8rem;
      }

      &:last-of-type {
        color: ${theme['orange-500']};
        display: flex;
        align-items: center;

        &::before {
          width: 20px;
          height: 20px;
          margin-right: 1.6rem;
          content: url('images/GoBackIcon.svg');
        }

        &:hover {
          color: ${theme['orange-400']};
          transition: color 0.2s;
        }
      }
    }
  `}
`
export const ImageContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background: url('images/SignUpBackground.svg') no-repeat;
  background-size: cover;
`
export const SignUpFormContainer = styled.div`
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
  }
`
export const inputContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 34rem;

    svg {
      position: relative;
      top: 4rem;
      left: 1.5rem;
    }

    input {
      height: 5.6rem;
      border-radius: 10px;
      border: none;
      font-size: 1.4rem;
      padding: 0 0 0 5.2rem;
      text-align: start;
      margin-bottom: 0.8rem;

      background-color: ${theme['gray-900']};
      color: ${theme['gray-500']};

      &:first-of-type {
        &::placeholder {
          color: ${theme['gray-500']};
          font-size: 1.4rem;
        }
      }

      &:first-of-type + input {
        &::placeholder {
          color: ${theme['gray-500']};
          font-size: 1.4rem;
        }
      }

      &:last-of-type {
        margin-bottom: 1.6rem;
        &::placeholder {
          color: ${theme['gray-500']};
          font-size: 1.4rem;
        }
      }
    }
  `}
`
export const SubmitButton = styled.button`
  ${({ theme }) => css`
    height: 5.6rem;
    margin-bottom: 2.4rem;
    border-radius: 10px;
    border: none;
    font-size: 1.6rem;
    cursor: pointer;
    background-color: ${theme['orange-500']};

    &:hover {
      background-color: ${theme['orange-400']};
      transition: background-color 0.2s;
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
export const RadioContainer = styled(RadioGroup.Root)`
  display: flex;
  justify-content: space-around;
  margin-bottom: 4rem;
  font-weight: 700;
  font-size: 1.6rem;
`
export const RadioButton = styled(RadioGroup.Item)`
  ${({ theme }) => css`
    border: none;
    font-size: 1.6rem;
    font-weight: 700;
    cursor: pointer;
    position: relative;

    background-color: transparent;
    color: ${theme['white']};

    &[data-state='checked']::after {
      box-shadow: none;
      width: 10rem;
    }

    &::after {
      content: '';
      width: 0%;
      height: 0.2rem;
      background-color: ${theme['orange-500']};

      left: 0;
      bottom: -0.5rem;
      transition: width 0.3s;
      position: absolute;
    }

    &:hover::after {
      width: 10rem;
    }
  `}
`
