import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={'Home'} />
      <Route path="/signin" element={'Sign in'} />
      <Route path="/signup" element={'Sign up'} />
    </Routes>
  </BrowserRouter>
)

export default App;
