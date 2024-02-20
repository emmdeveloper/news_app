import Entertainment from "./Routes/Entertainment";
import Finance from "./Routes/Finance";
import SearchFeed from "./Routes/SearchFeed";
import Sports from "./Routes/Sports";
import Technology from "./Routes/Technology";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <section className="section  ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </section>
    </div>
  );
};

export default App;
