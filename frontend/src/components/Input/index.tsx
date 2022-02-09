import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

import Container from '@/styles/components/Input';

export interface IInputProps {
  type: 'top' | 'bottom' | 'single';
  placeholder?: string;
  icon?: JSX.Element;
  name: string;
}

function Input({ type, placeholder, icon, name }: IInputProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <Container type={type}>
            <input {...field} id={name} type="text" placeholder={placeholder} />
            <div>{icon}</div>
          </Container>

          {errors && <strong>{errors[name]?.message}</strong>}
        </>
      )}
    />
  );
}

export default Input;
