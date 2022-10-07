/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Clock } from 'phosphor-react'

import { DayPicker } from 'react-day-picker'
import { useState } from 'react'
import pt from 'date-fns/locale/pt-BR'
import 'react-day-picker/dist/style.css'
import * as S from './styles'
import { format } from 'date-fns'
import { Header } from '../../components/Header'
import { Schedule } from '../../components/Schedule'

const weekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado'
]

const disabledDays = [
  new Date('2022-10-01T00:00:00'),
  new Date('2022-10-02T00:00:00'),
  new Date('2022-10-08T00:00:00'),
  new Date('2022-10-09T00:00:00')
]

type Schedule = {
  scheduleDate: Date
  userImage: string
  userName: string
}

const Testschedules = [
  {
    scheduleDate: new Date('2022-10-06T08:00:00'),
    userImage: '/images/10.jpg',
    userName: 'Leonardo Minatti'
  },
  {
    scheduleDate: new Date('2022-10-06T09:00:00'),
    userImage: '/images/47.jpg',
    userName: 'Sarah Souza'
  },
  {
    scheduleDate: new Date('2022-10-06T11:00:00'),
    userImage: '/images/52.jpg',
    userName: 'Bruna Ferreira'
  },
  {
    scheduleDate: new Date('2022-10-06T14:00:00'),
    userImage: '/images/39.jpg',
    userName: 'Cleiton Souza'
  },
  {
    scheduleDate: new Date('2022-10-06T15:00:00'),
    userImage: '/images/19.jpg',
    userName: 'Rolangela B. Rusena'
  }
]

export function ScheduleList() {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(new Date())
  const [schedules] = useState<Schedule[]>(Testschedules)

  const selectedDaySchedules = () =>
    schedules.filter(
      (schedule) =>
        selectedDay!.getDate() === Number(format(schedule.scheduleDate, 'd'))
    )

  return (
    <>
      <Header />
      <S.PageContainer>
        {!selectedDaySchedules().length ? (
          <S.ScheculeListContainer>
            <h1>Nao tem agendamentos</h1>
          </S.ScheculeListContainer>
        ) : (
          <S.ScheculeListContainer>
            <S.HeadingContainer>
              <h1>Horarios agendados</h1>
              <span>
                Dia{' '}
                {selectedDay!.getDate() < 10
                  ? `0${selectedDay!.getDate()}`
                  : selectedDay!.getDate()}{' '}
                | {weekDays[selectedDay!.getDay()]}
              </span>
            </S.HeadingContainer>
            <span>Atendimento a seguir</span>
            <S.NextScheduleContainer>
              <div>
                {<img src={selectedDaySchedules()[0].userImage} />}
                <span>{selectedDaySchedules()[0].userName}</span>
              </div>
              <div>
                <Clock size={24} />
                <span>
                  {format(selectedDaySchedules()[0].scheduleDate, 'p', {
                    locale: pt
                  })}
                </span>
              </div>
            </S.NextScheduleContainer>
            <S.DayPartScheduleContainer>
              <S.DayPartText>Manhã</S.DayPartText>
              {selectedDaySchedules()
                .filter(
                  (schedule) =>
                    Number(format(schedule.scheduleDate, 'k')) < 12 &&
                    schedules.indexOf(schedule) !== 0
                )
                .map(({ scheduleDate, userImage, userName }) => (
                  <Schedule
                    key={userName}
                    time={format(scheduleDate, 'p', { locale: pt })}
                    userImage={userImage}
                    userName={userName}
                  />
                ))}
            </S.DayPartScheduleContainer>
            <S.DayPartScheduleContainer>
              <S.DayPartText>Tarde</S.DayPartText>
              {selectedDaySchedules()
                .filter(
                  (schedule) =>
                    Number(format(schedule.scheduleDate, 'k')) > 12 &&
                    schedules.indexOf(schedule) !== 0
                )
                .map(({ scheduleDate, userImage, userName }) => (
                  <Schedule
                    key={userName}
                    time={format(scheduleDate, 'p', { locale: pt })}
                    userImage={userImage}
                    userName={userName}
                  />
                ))}
            </S.DayPartScheduleContainer>
          </S.ScheculeListContainer>
        )}
        <S.DayPickerContainer>
          <DayPicker
            locale={pt}
            mode="single"
            disabled={disabledDays}
            selected={selectedDay}
            onSelect={setSelectedDay}
          ></DayPicker>
        </S.DayPickerContainer>
      </S.PageContainer>
    </>
  )
}
