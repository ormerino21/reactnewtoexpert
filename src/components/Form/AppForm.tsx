import type { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export const AppForm = ({children}: Props ) => {
    return (
        <form>
            {children}
        </form>
    )
}