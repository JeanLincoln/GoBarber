import styled, { css } from 'styled-components'

export const ScheculeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16rem;
  margin-top: 6.4rem;
  max-width: 64rem;

  span {
    font-size: 2rem;
  }
`
export const HeadingContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: start;

    height: 9.7rem;

    h1 {
      font-size: 3.6rem;
      color: ${theme['white']};
    }

    span {
      font-size: 1.6rem;
      color: ${theme['orange-400']};
    }
  `}
`
export const NextScheduleContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 2.4rem;
    margin-bottom: 4.8rem;
    padding: 1.6rem 2.4rem;
    border-radius: 12px;

    background-color: ${theme['gray-600']};

    &::before {
      position: absolute;
      left: -0.1rem;
      border-color: ${theme['orange-500']};
      border-width: 0.2rem;
      border-style: solid;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;

      content: '';
      height: 8rem;
      background-color: ${theme['orange-500']};
    }

    div {
      display: flex;
      align-items: center;
      gap: 2.4rem;

      &:first-of-type {
        span {
          font-size: 2rem;
          color: ${theme['white']};
          font-weight: 700;
        }
      }
    }

    img {
      border-radius: 50%;
      height: 8rem;
      width: 8rem;
    }

    svg {
      color: ${theme['orange-500']};
      margin-right: -1.2rem;
    }
  `}
`
export const DayPartScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4.8rem;
`
export const DayPartText = styled.span`
  ${({ theme }) => css`
    padding-bottom: 1.6rem;
    border-bottom: 1px solid ${theme['gray-600']};
  `}
`
