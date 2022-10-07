import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import * as S from './styles'
import { EnvelopeSimple, Lock, User } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

const NewUserValidationSchema = z.object({
  userType: z.enum(['clientUser', 'barberUser']),
  name: z.string().min(1, 'Informe seu Nome'),
  email: z.string().min(1, 'Informe o Email'),
  senha: z.string().min(1, 'infome a senha')
})

type NewUserFormData = z.infer<typeof NewUserValidationSchema>

export function SignUp() {
  const { register, control, handleSubmit } = useForm<NewUserFormData>({
    resolver: zodResolver(NewUserValidationSchema)
  })

  const handleCreateUser = (data: NewUserFormData) => {
    console.log(data)
  }

  return (
    <S.SignUpContainer>
      <S.ImageContainer />
      <S.SignUpFormContainer>
        <S.LogoContainer>
          <span>Barbearia</span>
          <img src="images/GoBarber.svg" />
          <span>Cortes & Penteados</span>
        </S.LogoContainer>
        <form onSubmit={handleSubmit(handleCreateUser)}>
          <Controller
            control={control}
            name="userType"
            render={({ field }) => {
              return (
                <S.RadioContainer onValueChange={field.onChange}>
                  <S.RadioButton value="clientUser">Sou Cliente</S.RadioButton>
                  <S.RadioButton value="barberUser">Sou barbeiro</S.RadioButton>
                </S.RadioContainer>
              )
            }}
          ></Controller>
          <S.inputContainer>
            <User size={24} />
            <input
              type="text"
              id="Name"
              {...register('name')}
              placeholder="Nome"
            />
            <EnvelopeSimple size={24} />
            <input
              type="email"
              id="Email"
              {...register('email')}
              placeholder="E-mail"
            />
            <Lock size={24} />
            <input
              type="password"
              id="Senha"
              {...register('senha')}
              placeholder="Senha"
            />
          </S.inputContainer>
          <S.SubmitButton type="submit">Criar Conta</S.SubmitButton>
        </form>
        <NavLink to="/">Voltar para a tela de Login</NavLink>
      </S.SignUpFormContainer>
    </S.SignUpContainer>
  )
}
