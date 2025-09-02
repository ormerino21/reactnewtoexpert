import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { PrivateGuard } from "./guard/PrivateGuard";
import { PrivateRouter } from "./private/PrivateRouter";
import { Login } from "./public/Login";
import { RoutesNotFound } from "./components";

export const AppRouter = () => {
    return (
    <BrowserRouter>
        <RoutesNotFound>
            <Route path="/" element={<Navigate to={"/login"} />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateGuard />}>
                <Route path="/private/*" element={<PrivateRouter />} />
            </Route>
        </RoutesNotFound>
    </BrowserRouter>)
}