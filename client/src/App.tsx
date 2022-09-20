import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/utils/Navbar';
import SideBar from './components/utils/SideBar';
import Home from './pages/Home';
import VideoPage from './pages/VideoPage';
import { SideBarContext, SideBarContextInterface } from './SideBarContext';
import axios from "./api/Youtube"
// import axios from "axios"
function App() {

  const [showSideBar, setShowSideBar] = useState<boolean>(true)
  const [videos,setVideos] = useState<object>([]);
  const side: SideBarContextInterface = {
    showSideBar: showSideBar,
    setShowSideBar: setShowSideBar
  }

  useEffect(()=>{
    axios.get("/search").then((res:any)=>setVideos(res.data.items))
  },[])

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
              borderTop: '0.5px solid lightgray',
              overflow:'scroll',
              backgroundColor: "black",
              height:"calc(100vh - 60px)"
            }:{
              borderTop: '0.5px solid lightgray',
              overflow:'scroll',
              backgroundColor: "black",
              height:"calc(100vh - 60px)"
            }
            }>
              <Routes>
                <Route path="/">
                  <Route index element={<Home  videos={videos}/>} />
                  <Route path=":id" element={<VideoPage/>} />
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
