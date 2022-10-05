import { Clock } from 'phosphor-react'
import { Header } from '../Header'
import { Schedule } from '../Schedule'
import * as S from './styles'

export function ScheduleList() {
  return (
    <>
      <Header />
      <S.ScheculeListContainer>
        <S.HeadingContainer>
          <h1>times agendados</h1>
          <span>Hoje | Dia 06 | Segunda-feira</span>
        </S.HeadingContainer>
        <span>Atendimento a seguir</span>
        <S.NextScheduleContainer>
          <div>
            <img src="images/10.jpg" />
            <span>Leonardo Minatti</span>
          </div>
          <div>
            <Clock size={24} />
            <span>08:00</span>
          </div>
        </S.NextScheduleContainer>
        <S.DayPartScheduleContainer>
          <S.DayPartText>Manhã</S.DayPartText>
          <Schedule
            time="08:00"
            userImage="/images/39.jpg"
            userName="Cleiton Souza"
          />
          <Schedule
            time="11:00"
            userImage="/images/19.jpg"
            userName="Rolangela B. Rusena"
          />
        </S.DayPartScheduleContainer>
        <S.DayPartScheduleContainer>
          <S.DayPartText>Tarde</S.DayPartText>
          <Schedule
            time="13:00"
            userImage="/images/47.jpg"
            userName="Sarah Souza"
          />
          <Schedule
            time="15:00"
            userImage="/images/52.jpg"
            userName="Bruna Ferreira"
          />
        </S.DayPartScheduleContainer>
      </S.ScheculeListContainer>
    </>
  )
}
