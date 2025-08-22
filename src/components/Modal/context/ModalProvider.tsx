import { useState, type ReactNode } from "react"
import { ModalContext } from "./ModalContext"

export const ModalProvider = ({children}: {children: ReactNode}) => {
    const [state, setState] = useState<boolean>(false)

    return (
        <ModalContext.Provider value={{state, setState}}>
            {children}
        </ModalContext.Provider>
    )
}