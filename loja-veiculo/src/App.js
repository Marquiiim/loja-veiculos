import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

import Home from './components/pages/home/Home'

function App() {
  return (
    <Router>
      <Navbar />

      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/buy' element={<Home />} />
          <Route path='/sell' element={<Home />} />
          <Route path='/services' element={<Home />} />
          <Route path='/help' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
