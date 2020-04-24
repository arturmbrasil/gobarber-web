import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

// igual a uma interface vazia
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;