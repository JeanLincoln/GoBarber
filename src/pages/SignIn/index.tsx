import { NavLink } from 'react-router-dom'
import * as S from './styles'

export function SignIn() {
  return (
    <S.LoginContainer>
      <S.LoginFormContainer>
        <S.LogoContainer>
          <span>Barbearia</span>
          <img src="images/GoBarber.svg" />
          <span>Cortes & Penteados</span>
        </S.LogoContainer>
        <h2>Faça seu login</h2>
        <form>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <NavLink to="/scheduleList" type="submit">
            Entrar
          </NavLink>
        </form>
        <a href="#">Esqueci minha senha</a>
        <NavLink to="/signUp">Criar conta</NavLink>
      </S.LoginFormContainer>
      <S.ImageContainer />
    </S.LoginContainer>
  )
}
