import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Countries from "./Components/Countries";
import Country from "./Components/Country";
import Header from "./Components/Header";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Countries />} />
        <Route path="/:name" exact element={<Country />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;

// https://restcountries.com/#api-endpoints-v2
