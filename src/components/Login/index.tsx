import * as S from './styles'

export function Login() {
  return (
    <S.LoginContainer>
      <S.LoginFormContainer>
        <S.LogoContainer>
          <span>Awesome</span>
          <img src="images/GoBarber.svg" />
          <span>Haircuts & shaves</span>
        </S.LogoContainer>
        <h2>Faça seu login</h2>
        <form>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
        </form>
        <a href="#">Esqueci minha senha</a>
        <a href="#">Criar conta</a>
      </S.LoginFormContainer>
      <S.ImageContainer />
    </S.LoginContainer>
  )
}
