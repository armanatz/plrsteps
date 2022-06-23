import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import TripPage from "./pages/TripPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/trip/:tripId" element={<TripPage />} />
                <Route
                    path="*"
                    element={<Navigate replace to="/trip/1" />}
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
