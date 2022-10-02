import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Kontakt from "./components/pages/Kontakt";
import OnlineTrening from "./components/pages/OnlineTrening";
import PrivatniTrening from "./components/pages/PrivatniTrening";
import RegistrirajSe from "./components/pages/RegistrirajSe";
import OMeni from "./components/pages/OMeni";

const App = (props) => {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/online/trening" element={<OnlineTrening />} />
          <Route path="/privatni/trening" element={<PrivatniTrening />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/registriraj/se" element={<RegistrirajSe />} />
          <Route path="/omeni" element={<OMeni />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
