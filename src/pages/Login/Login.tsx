import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container, ErrorText, FormContainer, StyledButton, StyledForm, StyledInput } from './FormStyles';
import { Link } from 'react-router-dom';

const loginSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Senha é obrigatória")
});

type FormData = {
  email?: string;
  password?: string;
};

const Login = () => {
  const { register, handleSubmit, formState } = useForm<FormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: yupResolver(loginSchema) as any
  })
  const { errors } = formState;

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <Container>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            type="email"
            placeholder="E-mail"
            {...register('email', { required: "E-mail é obrigatório" })}
          />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

          <StyledInput
            type="password"
            placeholder="Senha"
            {...register('password', { required: "Senha é obrigatória" })}
          />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}

          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
        <p>Não tem uma conta? <Link to="/register">Registre-se</Link></p>
      </FormContainer>
    </Container>
  );
}

export default Login;
