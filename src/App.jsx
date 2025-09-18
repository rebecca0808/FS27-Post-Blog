import { useState } from 'react';
import NavBar from './components/nav-bar';
import Footer from './components/footer';
import PostList from './components/post-list';
import './App.scss'

function App() {
  

  return (
    <>
      <div className = "App" data-bs-theme="dark">
        <NavBar></NavBar>
        <div>
          <PostList></PostList>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
