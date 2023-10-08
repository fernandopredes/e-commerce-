import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ColumnContainer, Container, ErrorText, FormContainer, LeftColumn, RightColumn, StyledButton, StyledCheckboxLabel, StyledForm, StyledInput } from '../Login/FormStyles';
import { Link } from 'react-router-dom';

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
    <Container>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <ColumnContainer>
          <LeftColumn>
          <StyledInput
            placeholder="Nome completo"
            {...register('fullName', { required: "Nome completo é obrigatório" })}
          />
          {errors.fullName && <ErrorText>{errors.fullName.message}</ErrorText>}

          <StyledInput
            type="email"
            placeholder="E-mail"
            {...register('email', { required: "E-mail é obrigatório" })}
          />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

          <StyledInput
            placeholder="Telefone"
            {...register('phone', { required: "Telefone é obrigatório" })}
          />
          {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}

          <StyledInput
            placeholder="CEP"
            {...register('cep', { required: "CEP é obrigatório" })}
          />
          {errors.cep && <ErrorText>{errors.cep.message}</ErrorText>}

          <StyledInput
            placeholder="Rua, Avenida, travessa, etc."
            {...register('address', { required: "Endereço é obrigatório" })}
          />
          {errors.address && <ErrorText>{errors.address.message}</ErrorText>}

          <StyledInput
            placeholder="Número (Informe 'S/N' se não tiver)"
            {...register('number', { required: "Número é obrigatório" })}
          />
          {errors.number && <ErrorText>{errors.number.message}</ErrorText>}
          <StyledCheckboxLabel>
            <input
              type="checkbox"
              {...register('privacyPolicy', { required: "Aceitar as políticas de privacidade é obrigatório" })}
            />
            Eu aceito as políticas de privacidade.
          </StyledCheckboxLabel>
          {errors.privacyPolicy && <ErrorText>{errors.privacyPolicy.message}</ErrorText>}

          <StyledButton type="submit">Cadastrar</StyledButton>
          </LeftColumn>
          <RightColumn>

          <StyledInput
            placeholder="Bairro"
            {...register('neighborhood', { required: "Bairro é obrigatório" })}
          />
          {errors.neighborhood && <ErrorText>{errors.neighborhood.message}</ErrorText>}

          <StyledInput
            placeholder="Complemento"
            {...register('complement')}
          />

          <StyledInput
            placeholder="Cidade"
            {...register('city', { required: "Cidade é obrigatório" })}
          />
          {errors.city && <ErrorText>{errors.city.message}</ErrorText>}

          <StyledInput
            placeholder="Estado"
            {...register('state', { required: "Estado é obrigatório" })}
          />
          {errors.state && <ErrorText>{errors.state.message}</ErrorText>}

          <StyledInput
            type="password"
            placeholder="Senha"
            {...register('password', { required: "Password é obrigatório" })}
          />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}

          <StyledInput
            type="password"
            placeholder="Confirmar Senha"
            {...register('confirmPassword', { required: "Confirmação de senha é obrigatória" })}
          />
          {errors.confirmPassword && <ErrorText>{errors.confirmPassword.message}</ErrorText>}
          </RightColumn>
        </ColumnContainer>
        </StyledForm>
        <p>Já tem uma conta? <Link to="/login">Faça login</Link></p>
      </FormContainer>
    </Container>
  );
}

export default Register;
