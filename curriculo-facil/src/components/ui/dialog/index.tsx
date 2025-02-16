import { ReactNode } from "react";
import {
    Dialog as DialogRoot,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "./primitive"

 
  export type BaseDialogProps = {
    children?: ReactNode;
    open?: boolean;
    setOpen?: ( open: boolean) => void;

  }
 // Esticando as propriedades do dialogo como props
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
      { description && <DialogDescription >{description}</DialogDescription>}
        
      
    </DialogHeader>
    {content} {/* Aqui é onde o conteudo do dialogo é renderizado */}
  </DialogContent>
</DialogRoot>

    )

}