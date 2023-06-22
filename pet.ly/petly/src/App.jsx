import React from 'react'
import ProfileBar from './components/ProfileBar';
import {Route, Routes} from 'react-router-dom';
import Contact from './pages/Contact';
import ListPage from './pages/ListPage';
import ProfilePage from './pages/ProfilePage';


const App = () => (
    <div className="bg-white w-full overflow-hidden">
      
      <div ClassName="App text-white">
      
      <ProfileBar/>
      <Routes>
        <Route path="/" element={<ListPage/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/ProfilePage" element={<ProfilePage/>} />
      </Routes>
      
      
    </div>
  
    </div>
  );
export default App

