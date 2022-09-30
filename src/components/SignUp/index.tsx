import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import * as S from './styles'
import { EnvelopeSimple, Lock, User } from 'phosphor-react'

const NewUserValidationSchema = z.object({
  UserType: z.enum(['clientUser', 'barberUser']),
  Name: z.string().min(1, 'Informe a tarefa'),
  Email: z.string().min(1, 'Informe o Email'),
  Senha: z.string().min(1, 'infome a senha')
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
            name="UserType"
            render={({ field }) => {
              console.log(field)
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
              {...register('Name')}
              placeholder="Nome"
            />
            <EnvelopeSimple size={24} />
            <input
              type="email"
              id="Email"
              {...register('Email')}
              placeholder="E-mail"
            />
            <Lock size={24} />
            <input
              type="password"
              id="Senha"
              {...register('Senha')}
              placeholder="Senha"
            />
          </S.inputContainer>
          <S.SubmitButton type="submit">Entrar</S.SubmitButton>
        </form>
        <a href="#">Esqueci minha senha</a>
        <a href="#">Criar conta</a>
      </S.SignUpFormContainer>
    </S.SignUpContainer>
  )
}
