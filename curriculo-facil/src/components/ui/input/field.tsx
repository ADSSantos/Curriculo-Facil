" use client ";
import { ComponentProps } from "react";
import { Controller, useFormContext } from "React-hook-form";
import { Input } from ".";
import { FieldWrapper } from "../field-wrapper";



type InputFieldProps = ComponentProps<typeof Input> & {
  label: string;
  name: string;
};

export const InputField = ({
  name,
  label,
  required,
  ...props
}: InputFieldProps) => {
  const { control } = useFormContext(); // para pegar dados externas utilizando API React Hook Form

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: required && "Campo obrigatório",
      }}
      render={({ field , fieldState}) => (
        <FieldWrapper label={label}>
          <input {...field} {...props} />
          {fieldState.error && (
            <p className="text-sm text-red-500">
              {fieldState.error.message}
            </p>
          )}
        </FieldWrapper>
      )}
    />
  );
};
