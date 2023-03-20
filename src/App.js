import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutDefault from "./HOC/LayoutDefault";
import DetailPage from "./Pages/DetailPage/DetailPage";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import CoursesListPage from "./Pages/CoursesListPage/CoursesListPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import InforPage from "./Pages/InforPage/InforPage";
import "animate.css";
import CheckOutPage from "./Pages/CheckOutPage/CheckOutPage";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutDefault>
                <HomePage />
              </LayoutDefault>
            }
          />
          <Route
            path="/detail/:id"
            element={
              <LayoutDefault>
                <DetailPage />
              </LayoutDefault>
            }
          />
          <Route
            path="/login"
            element={
              <LayoutDefault>
                <LoginPage />
              </LayoutDefault>
            }
          />
          <Route
            path="/register"
            element={
              <LayoutDefault>
                <RegisterPage />
              </LayoutDefault>
            }
          />
          <Route
            path="/courses-list"
            element={
              <LayoutDefault>
                <CoursesListPage />
              </LayoutDefault>
            }
          />
          <Route
            path="/wishList"
            element={
              <LayoutDefault>
                <InforPage />
              </LayoutDefault>
            }
          />
          <Route
            path="/check-out"
            element={
              <LayoutDefault>
                <CheckOutPage />
              </LayoutDefault>
            }
          />
          <Route
            path="/profile/basic-information"
            element={
              <LayoutDefault>
                <Profile />
              </LayoutDefault>
            }
          />
          <Route
            path="*"
            element={
              <LayoutDefault>
                <NotFoundPage />
              </LayoutDefault>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
