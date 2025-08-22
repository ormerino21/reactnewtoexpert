import { useRef } from "react"

export const FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleClick = () => {
        if (!inputRef.current) {
            alert("Reference doesn't exists")
            return
        }

        inputRef.current.focus()
    }

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Write something here..."></input>
            <button onClick={handleClick}>Focus on the Input</button>
        </div>
    )
}