import { Routes , Route } from "react-router-dom";
//  import  Meda  from "./components/Meda/Meda";
// import Hstory from "./components/Hstory/Hstory";
// import Contact from "./components/Contact/Contact";
// import Experence from "./components/Experence/Experence";
// import Servces from "./components/Servces/Servces";
// import Intro from "./components/intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/login/Login"
import Home from "./components/Home/Home";
import Sign from "./components/login/Sign";

import './App.css';
// import { Footer } from "./components/Footer/Footer";
import background from "./img/background.jpeg" 


// i dawnload swipper liprary
function App() {

  return (
    <div className="App" style={{
      backgroundImage:'url('+background +')',
      backgroundSize: "cover",
       backgroundRepeat: "no-repeatS"
   

    }}>
       <Navbar/>
      <Routes>    
      <Route path="/" element={<Home/>}/> 
      <Route path="Login" element={<Login/>}/>
      <Route path="Sign" element={<Sign/>}/>
      
      {/* <Route path="Intro" element={<Intro/>}/> 
      <Route path="Servces" element={<Servces/>}/> 
      <Route path="Experence" element={<Experence/>}/>
      <Route path="Contact" element={<Contact/>}/>
      <Route path="Hstory" element={<Hstory/>}/>
      <Route path="Meda" element={<Meda/>}/> */}
      
      
      {/* <Navbar/>
      <Intro/>
      <Servces/>
      <Experence/> */}
      {/* <Meda/> */}
      {/* <Portofilo/> */}
      {/* <Hstory/>
      <Contact/>
      <Footer/> */}

      </Routes>
      {/* <Footer/>  */}
      
      
   
      

      
    </div>
  );
}

export default App;
