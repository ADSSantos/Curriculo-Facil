"use client"; // se usar hooks tem que usar use client

import { BaseDialogProps, Dialog } from "@/components/ui/dialog";
import { useState } from "react";
import { Controller, useForm } from "React-hook-form";

type FormData = {
  title: string;
};

export const NewResumeDialog = (props: BaseDialogProps) => {
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Dialog
      {...props}
      title="Criar novo curriculo"
      description="Para começar, escolha um titulo para seu curriculo"
      content={
        <form onSubmit={handleSubmit(onSubmit)}>
          <button>Confirmar</button>
        </form>
      }
    />
  );
};

// preciso add o input do sher cn ui