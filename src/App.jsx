import React from 'react';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Search from './Components/Search/Search';
import Support from './Components/Support/Support';
import Info from './Components/Info/Info';
import Lounge from './Components/Lounge/Lounge'
import Travelers from './Components/Travelers/Travelers';
import Subscribers from './Components/Subscribers/Subscribers';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribers />
      <Footer />
    </div>
  );
}

export default App;
