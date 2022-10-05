import { Clock } from 'phosphor-react'
import * as S from './styles'

type ScheduleInfos = {
  time: string
  userImage: string
  userName: string
}

export function Schedule({ time, userImage, userName }: ScheduleInfos) {
  return (
    <S.ScheduleContainer>
      <S.ClockContainer>
        <Clock size={24} />
        <span>{time}</span>
      </S.ClockContainer>
      <S.ScheduleInfosContainer>
        <img src={userImage} />
        <span>{userName}</span>
      </S.ScheduleInfosContainer>
    </S.ScheduleContainer>
  )
}
