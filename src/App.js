import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import WebDevelopment from "./components/courses/WebDevelopment";
import AppDevelopment from "./components/courses/AppDevelopment";
import CodingForCids from "./components/courses/CodingForkids";
import CyberSecurity from "./components/courses/CyberSecurity";
import DigitalMarketing from "./components/courses/DigitalMarketing";
import EnglishSpoken from "./components/courses/EnglishSpoken";
import EthicalHeacking from "./components/courses/EthicalHeacking";
import GameDevelopment from "./components/courses/GameDevelopment";
import RsCit from "./components/courses/RsCit";
import TallyWithGst from "./components/courses/TallyWithGst";
import WebDesigner from "./components/courses/WebDesigner";
import Account from "./components/courses/Account";
import GoogleAds from "./components/services/GoogleAds";
import Cheatsheet from "./components/services/CheatSheet";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/appdevelopment" element={<AppDevelopment />} />
        <Route exact path="/codingforkids" element={<CodingForCids/>} />
        <Route exact path="/cybersecurity" element={<CyberSecurity/>} />
        <Route exact path="/digitalmarketing" element={<DigitalMarketing/>} />
        <Route exact path="/englishspoken" element={<EnglishSpoken/>} />
        <Route exact path="/ethicalheacking" element={<EthicalHeacking/>} />
        <Route exact path="/gamedevelopment" element={<GameDevelopment/>} />
        <Route exact path="/rscit" element={<RsCit/>} />
        <Route exact path="/tallywithgst" element={<TallyWithGst/>} />
        <Route exact path="/webdesigner" element={<WebDesigner/>} />
        <Route exact path="/webdevelopment" element={<WebDevelopment />} />
        <Route exact path="/account" element={<Account/>} />
        <Route exact path="/main" element={<Main/>} />
        <Route exact path="/googleads" element={<GoogleAds/>} />
        <Route exact path="/cheatsheet" element={<Cheatsheet/>} />

      </Routes>
    </Router>
  );
}

export default App;
