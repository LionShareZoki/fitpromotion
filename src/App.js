import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Kontakt from "./components/pages/Kontakt";
import OnlineCoaching from "./components/pages/OnlineCoaching";
import PrivatniTrening from "./components/pages/PrivatniTrening";
import RegistrirajSe from "./components/pages/RegistrirajSe";

const App = (props) => {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/online/coaching" element={<OnlineCoaching />} />
          <Route path="/privatni/trening" element={<PrivatniTrening />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/registriraj/se" element={<RegistrirajSe />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
