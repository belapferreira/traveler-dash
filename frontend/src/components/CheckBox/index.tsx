import React, { ChangeEventHandler } from 'react';
import { useFormContext, Controller } from 'react-hook-form';

export interface ICheckBoxProps {
  name: string;
  value: string;
  disabled: boolean | undefined;
}

function CheckBox({ name, value, disabled }: ICheckBoxProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <input
            {...field}
            type="checkbox"
            value={value}
            disabled={disabled}
            onChange={field.onChange}
          />
        </>
      )}
    />
  );
}

export default CheckBox;
