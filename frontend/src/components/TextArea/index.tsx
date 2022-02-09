import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

import Container from '@/styles/components/TextArea';

export interface ITextAreaProps {
  name: string;
}

function TextArea({ name }: ITextAreaProps): JSX.Element {
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
          <Container>
            <textarea {...field} />
          </Container>

          {errors && <strong>{errors[name]?.message}</strong>}
        </>
      )}
    />
  );
}

export default TextArea;
