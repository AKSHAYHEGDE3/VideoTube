import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <SideBar />
          <div style={{width:"calc(100vw - 200px)"}}>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
