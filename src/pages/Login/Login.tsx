import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container, ErrorText, FormContainer, StyledButton, StyledForm, StyledInput } from './FormStyles';
import { Link } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';



const loginSchema = yup.object().shape({
  username: yup.string().required("Nome de usuário é obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: yup.string().min(4, "A senha deve ter no mínimo 4 caracteres").required("Senha é obrigatória")
});

type FormData = {
  username?: string;
  email?: string;
  password?: string;
};

const Login = () => {
  const { setUser, clearCart } = useUser();

  const { register, handleSubmit, formState } = useForm<FormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: yupResolver(loginSchema) as any
  })
  const { errors } = formState;
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
        })
      });

      const responseData = await response.json();

      if (responseData.token) {
        localStorage.setItem('token', responseData.token);
        localStorage.setItem('user', data.username!);
        localStorage.setItem('email', data.email!);
        setUser({ fullName: "Usuário", email: data.email });
        clearCart();
        navigate('/');
      }
    } catch (error) {
      console.error('Erro no login:', error);
    }
  }

  return (
    <Container>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            type="text"
            placeholder="Nome de usuário"
            {...register('username', { required: "Nome de usuário é obrigatório" })}
          />
          {errors.username && <ErrorText>{errors.username.message}</ErrorText>}
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
