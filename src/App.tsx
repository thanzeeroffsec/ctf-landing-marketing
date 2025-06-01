import RegistrationForm from "./pages/Form";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/bmloYWwta3UuLi1yYWVlei1rdS4u"
        element={<RegistrationForm />}
      />
    </Routes>
  );
}

export default App;
