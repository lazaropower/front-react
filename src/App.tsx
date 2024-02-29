import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFoundPage from "./pages/NotFoundPage";
import TermsAndConditions from "./pages/TermsAndConditions";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={"Landing"} />
      <Route path="/home" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={"Forgot password"} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </>
);

export default App;
