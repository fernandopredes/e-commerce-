import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="E-mail"
          {...register('email', { required: "E-mail é obrigatório" })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Senha"
          {...register('password', { required: "Senha é obrigatória" })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Login</button>
      </form>
      <p>Não tem uma conta? <a href="/register">Registre-se</a></p>
    </div>
  );
}

export default Login;
