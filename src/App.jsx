import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./routes/PrivateRoute";
import Registration from "./pages/Registration";
import Profile from "./profile/Profile";
import SinglePage from "./singleblogs/SinglePage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<HomePage />} path="/" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<SinglePage />} path="/blogs" />
        </Route>
        <Route element={<Registration />} path="/register" />
      </Routes>
    </>
  );
}

export default App;
