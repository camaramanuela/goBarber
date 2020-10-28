import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';


import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="logo GoBarber" />

      <form>
        <h1>Faça seu cadastro</h1>

        <Input name="name" icon={FiUser} placeholder="E-mail" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        
        <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
      
        <Button type="submit">Entrar</Button>
      </form>

      <a href="login">
        <FiArrowLeft />
        Voltar para o login
      </a>
    </Content>
  </Container>
);

export default SignUp;