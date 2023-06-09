import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./pages/Layouts/MainLayout/MainLayout";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { AuthorizationLayout } from "./pages/Layouts/AuthorizationLayout/AuthorizationLayout";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { QuizPage } from "./pages/QuizPage/QuizPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="quiz" element={<QuizPage />} />
        </Route>

        <Route path="/" element={<AuthorizationLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegistrationPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
