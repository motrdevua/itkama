import React from 'react';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Posts from './Components/Posts/Posts';
import Footer from './Components/Footer/Footer';
import Messages from './Components/Messages/Messages';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <main className="content">
        <Posts />
        <Messages />
      </main>
      <Footer />
    </div>
  );
}

export default App;
