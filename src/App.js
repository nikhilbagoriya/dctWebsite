import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
