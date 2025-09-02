import { Navigate, Route, Routes } from "react-router-dom"
import { Dashboard } from "./Dashboard/Dashboard"
import { About } from "./About/About" 

export const PrivateRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/private/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}