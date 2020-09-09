import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <main className="content">
          <Route component={Profile} path="/profile" />
          <Route component={Dialogs} path="/dialogs" />
          <Route component={News} path="/news" />
          <Route component={Settings} path="/settings" />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
