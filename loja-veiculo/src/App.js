import { BrowserRouter as Router,Route , Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

import Home from './components/pages/home/Home'

function App() {
  return (
    <Router>
      <Navbar />

      <div>
        <Routes>
          <Route path='/' element={<Home />} />

          


        </Routes>
      </div>
    </Router>
  );
}

export default App;
