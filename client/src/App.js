import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home/Home";
import Clothes from "./pages/clothes/Clothes";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Join from "./pages/join/Join";
import Mypage from "./pages/mypage/Mypage";
import Notice from './pages/notice/Notice';
import CollectionList from './pages/collectionlist/CollectionList';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/clothess" element = {<List/>}/>
        <Route path='/clothes' element = {<Clothes/>}/>
        {/* <Route path="/clothess/:id" element = {<Clothes/>}/> */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/mypage" element={<Mypage/>}/>
        <Route path="/notice" element={<Notice/>}/>
        <Route path="/collectionlist" element={<CollectionList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
