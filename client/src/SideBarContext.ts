import { createContext } from "react";

export interface SideBarContextInterface{
    showSideBar:boolean,
    setShowSideBar:React.Dispatch<React.SetStateAction<boolean>>
}

export const SideBarContext = createContext<SideBarContextInterface | null>(null)