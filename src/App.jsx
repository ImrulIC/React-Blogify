import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<HomePage />} path="/" />
        </Route>
        <Route element={<LoginPage />} path="/login" />
      </Routes>
    </>
  );
}

export default App;
