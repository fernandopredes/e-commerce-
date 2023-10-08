import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const registerSchema = yup.object().shape({
  fullName: yup.string().required("Nome completo é obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  phone: yup.string().min(9, "Telefone deve ter 9 números").required("Telefone é obrigatório"),
  cep: yup.string().length(8, "CEP deve ter 8 números").required("CEP é obrigatório"),
  address: yup.string().required("Endereço é obrigatório"),
  number: yup.string().required("Número é obrigatório"),
  complement: yup.string(),
  neighborhood: yup.string().required("Bairro é obrigatório"),
  city: yup.string().required("Cidade é obrigatória"),
  state: yup.string().required("Estado é obrigatório"),
  password: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Senha é obrigatória"),
  confirmPassword: yup.string().oneOf([yup.ref('password')], "As senhas devem coincidir").required("Confirmação de senha é obrigatória"),
  privacyPolicy: yup.bool().oneOf([true], "Aceitar as políticas de privacidade é obrigatório")
});

type FormData = {
  fullName?: string;
  email?: string;
  phone?: string;
  cep?: string;
  address?: string;
  number?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  password?: string;
  confirmPassword?: string;
  privacyPolicy?: boolean;
};

const Register = () => {
  const { register, handleSubmit, formState } = useForm<FormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: yupResolver(registerSchema) as any
  });

  const { errors } = formState

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Nome completo"
          {...register('fullName', { required: "Nome completo é obrigatório" })}
        />
        {errors.fullName && <p>{errors.fullName.message}</p>}

        <input
          type="email"
          placeholder="E-mail"
          {...register('email', { required: "E-mail é obrigatório" })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Senha"
          {...register('password', { required: "Password é obrigatório" })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <input
          type="password"
          placeholder="Confirmar Senha"
          {...register('confirmPassword', { required: "Confirmação de senha é obrigatória" })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

        <input
          placeholder="Telefone"
          {...register('phone', { required: "Telefone é obrigatório" })}
        />
        {errors.phone && <p>{errors.phone.message}</p>}

        <input
          placeholder="CEP"
          {...register('cep', { required: "CEP é obrigatório" })}
        />
        {errors.cep && <p>{errors.cep.message}</p>}

        <input
          placeholder="Rua, Avenida, travessa, etc."
          {...register('address', { required: "Endereço é obrigatório" })}
        />
        {errors.address && <p>{errors.address.message}</p>}

        <input
          placeholder="Número (Informe 'S/N' se não tiver)"
          {...register('number', { required: "Número é obrigatório" })}
        />
        {errors.number && <p>{errors.number.message}</p>}

        <input
          placeholder="Complemento"
          {...register('complement')}
        />

        <input
          placeholder="Bairro"
          {...register('neighborhood', { required: "Bairro é obrigatório" })}
        />
        {errors.neighborhood && <p>{errors.neighborhood.message}</p>}

        <input
          placeholder="Cidade"
          {...register('city', { required: "Cidade é obrigatório" })}
        />
        {errors.city && <p>{errors.city.message}</p>}

        <input
          placeholder="Estado"
          {...register('state', { required: "Estado é obrigatório" })}
        />
        {errors.state && <p>{errors.state.message}</p>}

        <label>
          <input
            type="checkbox"
            {...register('privacyPolicy', { required: "Aceitar as políticas de privacidade é obrigatório" })}
          />
          Eu aceito as políticas de privacidade.
        </label>
        {errors.privacyPolicy && <p>{errors.privacyPolicy.message}</p>}

        <button type="submit">Cadastrar</button>
      </form>
      <p>Já tem uma conta? <a href="/login">Faça login</a></p>
    </div>
  );
}

export default Register;
