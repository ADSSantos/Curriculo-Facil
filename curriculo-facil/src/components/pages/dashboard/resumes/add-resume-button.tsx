import { Plus } from "lucide-react"
import { ResumeCardButton } from "./resumes-card"

export const AddResumeButton = () => {
    return (
        <ResumeCardButton 
            title="Criar novo curriculo"
            description="Comece do Zero"
            icon={<Plus size={50} />}
        />
    )
}