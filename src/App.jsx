import { useState } from 'react';
import NavBar from './components/nav-bar';
import Footer from './components/footer';
import PostList from './components/post-list';
import WritePost from './components/write-post';
import PostDetail from './components/post-detail';
import ManageMain from './components/manage/manage-main';
import DashBoard from './components/manage/dashboard';
import PostManage from './components/manage/post-manage';

import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <div className = "App" data-bs-theme="dark">
        <NavBar></NavBar>
        <div className="container main-container">
          <Routes>
            <Route path='/' element={<PostList></PostList>}></Route>
            <Route path='/post-list' element={<PostList></PostList>}></Route>
            <Route path='/post-detail/:id' element = {<PostDetail></PostDetail>}></Route>
            <Route path='/write-post' element={<WritePost></WritePost>}></Route>
            <Route path='/manage' element={<ManageMain></ManageMain>}>
               <Route path='dashboard' element={<DashBoard></DashBoard>}></Route>
               <Route path='post-mng' element={<PostManage></PostManage>}></Route>
            </Route>
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  )
}

export default App
