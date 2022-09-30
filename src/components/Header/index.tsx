import * as S from './styles'

export function Header() {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.LogoContainer>
          <span>Barbearia</span>
          <img src="images/GoBarber.svg" />
          <span>Cortes & Penteados</span>
        </S.LogoContainer>
        <S.UserContainer>
          <img src="images/userExample.jpeg" />
          <div>
            <span>Bem vindo,</span>
            <span>Jean Lincoln</span>
          </div>
        </S.UserContainer>
      </S.HeaderContainer>
      <img src="images/Sair.svg" alt="" />
    </S.Header>
  )
}
