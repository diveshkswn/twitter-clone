import React from 'react';
import './App.css';
import Feed from './components/Feed';
import Sidebar from './components/SideBar';
import Widgets from './components/Widgets';

function App() {
  return (
    <div className="App">

      {/* SideBar */}
      <Sidebar />

      {/* Feed */}
      <Feed />
      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
