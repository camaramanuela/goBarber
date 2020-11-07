import React from 'react';

import Toast from './Toast';

import { ToastMessage } from '../../hooks/toast';
import { Container } from './styles';

interface ToastContainerMessages {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerMessages> = ({ messages }) => {
  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message}>
        </Toast>
      ))}
    </Container>
  );
};

export default ToastContainer;