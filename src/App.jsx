
import './App.css'
import AboutUs from './components/AboutUs.jsx';
import Contact from './components/Contact.jsx';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Menus from './components/Menus.jsx';
import { HotBeverages } from './Constant/Const.jsx';
import { ColdBrews } from './Constant/Const.jsx';
import { Pastries } from './Constant/Const.jsx';

function App() {

  return (
      <div>
        <Header/>
        <div className='max-w-7xl flex flex-col items-center mx-auto md:px-5 pt-10'>
          <Home/>
          <Menus/>
        </div>
        <div className=' flex flex-col items-center mx-auto mt-15 px-5 pt-10 bg-amber-950'>
          <AboutUs />
        <Contact />


        </div>
     
      </div>
  )
}

export default App
