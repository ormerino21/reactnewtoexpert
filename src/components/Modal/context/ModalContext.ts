import { createContext, useContext} from "react";

interface ModalContextType {
    state: boolean
    setState: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalContext = createContext<ModalContextType>({
    state: false,
    setState: () => null
})

export const useModalContext = () => {
    const context = useContext(ModalContext)
    
    if (!context) {
        throw new Error("Modal context must be used within a ModalContext.Provider")
    }

    return context
}
