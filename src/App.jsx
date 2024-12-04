import './App.css'
import Footer from './Components/Footer/Footer.jsx'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home/Home.jsx'
import Header from './Components/Header/Header.jsx'
import About_us from './pages/About_us/About_us.jsx'
import Homepage_account from './pages/Homepage_account/Homepage_account.jsx'
import Chat_bot from './pages/Chat_bot/Chat_bot.jsx';

function App() {
  return (
    <>
    <div id='App' className='wrapper'>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/About_us" element={<About_us />} />
            <Route path="/Homepage Account" element={<Homepage_account/>} />
            <Route path="/Chat_bot" element={<Chat_bot />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
