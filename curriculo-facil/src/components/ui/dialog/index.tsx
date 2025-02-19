import { ReactNode } from "react";
import {
    Dialog as DialogRoot,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "./primitive"

  // Esticando as propriedades do dialogo como props
  export type BaseDialogProps = {
    children?: ReactNode;
    open?: boolean;
    setOpen?: ( open: boolean) => void;

  }

  type DialogProps = BaseDialogProps & {
    title: string;
    description?: string;
    content: ReactNode;
  }
  
export const Dialog = ({children, title, description, content, open, setOpen}: DialogProps) => {
    return (
        <DialogRoot open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
        {children}
  </DialogTrigger>

  <DialogContent>
    <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        {description && <DialogDescription asChild>{description}</DialogDescription>}
    </DialogHeader>
    {content}  {/* Aqui está o content */}
</DialogContent>
</DialogRoot>

    )

}