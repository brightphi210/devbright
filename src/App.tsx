import { useEffect, useState } from 'react';
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import { motion } from "framer-motion";



import AOS from 'aos';
import 'aos/dist/aos.css';
import BottomBar from './components/BottomBar';
AOS.init();


function App() {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const moveCursor = (e:any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);


  const [isDark, setIsDark] = useState<any>(true)
  

  return (
    <div>

      <motion.div
        className="outer-circle lg:block hidden"
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      />
      <div
        className={`inner-dot lg:block hidden`}
        style={{ top: position.y, left: position.x }}
      />


      <Header isDark={isDark} setIsDark={setIsDark}/>
      <Home isDark={isDark} setIsDark={setIsDark}/>
      <Footer isDark={isDark} setIsDark={setIsDark}/>
      <BottomBar isDark={isDark}/>
    </div>
  )
}

export default App
