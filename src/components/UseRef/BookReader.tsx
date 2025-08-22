import { useRef, useState } from "react"

export const BookReader = () => {
    const currentPageRef = useRef<number>(1)
    const [currentPageState, setCurrentPageState] = useState(1)

    const nextPage = () => {
        currentPageRef.current += 1
        alert("Now we are one page ahead")
    }

    const previousPage = () => {
        if (currentPageRef.current == 1) {
            alert("We are already on page 1")
            return 1
        }

        currentPageRef.current -= 1
    }

    const goToPage = (page: number) => {
        if (page < 1) {
            alert("We can't go to this page")
            return currentPageRef.current
        }

        currentPageRef.current = page
        setCurrentPageState(page)
    }

    return (
        <div>
            <h2>Reading Book</h2>
            <p>Current Page: {currentPageRef.current}</p>
            <p>Current Page from [STATE]: {currentPageState}</p>
            <button onClick={previousPage}>Previous page</button>
            <button onClick={nextPage}>Next Page</button>
            <button onClick={() => {goToPage(50)}}>Go To Page 50</button>
        </div>
    )
}