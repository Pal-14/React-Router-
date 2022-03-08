import { Route, Routes } from "react-router-dom";
import './App.css'
import Contact from "./Components/Contact/Contact";
import Home from './Components/Home/Home';
import Navbar from "./Components/Navbar/Navbar";
import Profile from './Components/Profile/Profile'
import CyberS from "./Components/Services/CyberS/CyberS";
import Developpement from "./Components/Services/Developpement/Developpement";
import Services from "./Components/Services/Services";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">

    {/* <Navbar /> */}
    <Routes>

     <Route path="/" element={<div> <Navbar /><Home /></div>} />

     
     {/* mettre /:id pour aller au profil correspondant on peut mettre aussi slug ou n'importe quoi ou juste * sans les :  */}
     {/* utiliser avec les useParams */}
     <Route path="/profil/:id" element={<Profile />} />


     <Route path="/services" element={<div> <Navbar /><Services /></div>} >
     <Route path="/services/developpement" element={<Developpement />} />
     <Route path="/services/cybersecurite" element={<CyberS />} />
     </Route>


     <Route path="/contact" element={<div> <Navbar /><Contact /></div>} />

     {/* gerer les  404  */}
     <Route path="*" element={<NotFound/>} />
    
    </Routes>

      
    </div>
  );

}

export default App;
