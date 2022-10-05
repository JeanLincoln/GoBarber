import styled, { css } from 'styled-components'

export const ScheduleContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  height: 8.8rem;
  margin-top: 2.4rem;
`

export const ClockContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    color: ${theme['white']};

    svg {
      color: ${theme['orange-500']};
    }
  `}
`

export const ScheduleInfosContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1.6rem;
    padding: 1.6rem 0 1.6rem 1.6rem;
    width: 100%;
    border-radius: 10px;
    background-color: ${theme['gray-600']};

    img {
      height: 5.6rem;
      width: 5.6rem;
      border-radius: 50%;
    }

    span {
      color: ${theme['white']};
    }
  `}
`
