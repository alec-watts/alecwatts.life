import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Support from "./pages/Support";
// import Privacy from "./pages/Privacy";

function App() {
  return (
    // <Home />
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/support.html" element={ <Support/> }/>
    </Routes>
  );
}

export default App;