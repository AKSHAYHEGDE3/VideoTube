import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/utils/Navbar';
import SideBar from './components/utils/SideBar';
import Home from './pages/Home';
import VideoPage from './pages/VideoPage';
import { SideBarContext, SideBarContextInterface } from './SideBarContext';
import axios from "./api/Youtube"
import { videoInterface } from './typeUtils'
import SignIn from './components/utils/SignIn';
import SignUp from './components/utils/SignUp';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { setUser } from './store/reducers/auth';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const [showSideBar, setShowSideBar] = useState<boolean>(true)
  const [videos, setVideos] = useState<videoInterface[]>([]);
  const auth = getAuth();
  const dispatch = useDispatch()
  const side: SideBarContextInterface = {
    showSideBar: showSideBar,
    setShowSideBar: setShowSideBar
  }

  useEffect(() => {
    const AuthCheck = onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(setUser({...user}))
        } else {
            console.log('unauthorized');
        }
    });

    return () => AuthCheck();
}, [auth]);


  useEffect(() => {
    axios.get("/search").then((res: any) => {
      console.log(res.data.items);
      res.data.items.map((vid: any) => {
        setVideos((pre)=>[
          ...pre,{
            channelId: vid.snippet.channelId,
            channelTitle: vid.snippet.channelTitle,
            videoId: vid.id.videoId,
            description: vid.snippet.description,
            videoTitle: vid.snippet.title,
            image: vid.snippet.thumbnails.high.url,
            time: vid.snippet.publishTime
          }
        ])
      })
    })
  }, [])

  // console.log(videos)

  return (
    <div className="App">
      <SideBarContext.Provider value={side}>
        <BrowserRouter>
          <Navbar />
          <SignIn />
          <SignUp />
          <div style={{ display: 'flex' }}>
            <div style={showSideBar ? { flex:2.2 } : { display: 'none' }}>
              <SideBar />
            </div>
            <div style={
              showSideBar ?
                {
                  flex: 12,
                  borderTop: '0.5px solid lightgray',
                  overflow: 'scroll',
                  backgroundColor: "black",
                  height: "calc(100vh - 60px)"
                } : {
                  borderTop: '0.5px solid lightgray',
                  overflow: 'scroll',
                  backgroundColor: "black",
                  height: "calc(100vh - 60px)"
                }
            }>
              <Routes>
                <Route path="/">
                  <Route index element={<Home videos={videos} />} />
                  <Route path=":id" element={<VideoPage />} />
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
