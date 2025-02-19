"use client"; // se usar hooks tem que usar use client
import { BaseDialogProps, Dialog } from "@/components/ui/dialog";
import { InputField } from "@/components/ui/input/field";
import { Button } from "@/components/ui/button";
import {  FormProvider, useForm } from "React-hook-form";
type FormData = {
  title: string;
};
export const NewResumeDialog = (props: BaseDialogProps) => {
  const methods = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <Dialog
      {...props}
      title="Criar novo curriculo"
      description="Para começar, escolha um titulo para seu curriculo"
      content={
        <FormProvider {...methods}>
          <form className="flex flex-col" onSubmit={methods.handleSubmit(onSubmit)}>
            <InputField label="Titulo" name="title" required/>
            <Button type="submit" className="w-max mt-6 ml-auto">
              Criar
            </Button>
          </form>
        </FormProvider>
      }
    />
  );
};

// preciso add o input do sher cn ui
