import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom"

export const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/login" />
            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Switch>
        </BrowserRouter>
    )
}