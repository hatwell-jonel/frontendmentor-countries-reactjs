import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Countries from "./Components/Countries";
import Country from "./Components/Country";
import Header from "./Components/Header";
import ErrorPage from "./Components/ErrorPage";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/:name" exact element={<Country />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;

// https://restcountries.com/#api-endpoints-v2
