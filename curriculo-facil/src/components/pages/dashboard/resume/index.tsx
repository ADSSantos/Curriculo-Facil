import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { InfosSidebar } from "./infos-sideBar";
import { ResumeContent } from "./resume-content";
import { StructureSidebar } from "./structure-sidebar";
export const ResumePage = () => {
  return (
    <main className="w-full h-screen overflow-y-hidden">
      
      <ResizablePanelGroup direction="horizontal" className=" w-full h-full">
        <ResizablePanel minSize={20} maxSize={40} defaultSize={30}>One
            <InfosSidebar/>
        </ResizablePanel>
        <ResizableHandle withHandle />


        <ResizablePanel className="h-full">Two
            <ResumeContent/>
        </ResizablePanel>
        <ResizableHandle withHandle />

        <ResizablePanel minSize={20} maxSize={35} defaultSize={25} className="h-full">Tree
            <StructureSidebar/>
        </ResizablePanel>
        <ResizableHandle  />

      </ResizablePanelGroup>

    </main>
  );
};
