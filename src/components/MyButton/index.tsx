//./src/components/Button/index.tsx
import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';
// import { MSD_COLOUR } from 'msd-colour';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const MyButton: React.FC<ButtonProps> = ({ label, ...rest }) => {
  return (
    <Container type='button' {...rest}>
     {label}
    </Container>
  );
};