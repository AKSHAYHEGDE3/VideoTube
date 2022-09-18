import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import { SideBarContext, SideBarContextInterface } from './SideBarContext';

function App() {

  const [showSideBar, setShowSideBar] = useState<boolean>(true)
  const side: SideBarContextInterface = {
    showSideBar: showSideBar,
    setShowSideBar: setShowSideBar
  }

  return (
    <div className="App">
      <SideBarContext.Provider value={side}>
        <BrowserRouter>
          <Navbar />
          <div style={{ display: 'flex' }}>
            <div style={showSideBar?{width:'200px'}:{display:'none'}}>
              <SideBar />
            </div>
            <div style={
              showSideBar?
              {
              flex: 12,
              borderTop: '0.5px solid lightgray'
            }:{
              borderTop: '0.5px solid lightgray'
            }
            }>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                </Route>
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </SideBarContext.Provider>
    </div>
  );
}

export default App;
