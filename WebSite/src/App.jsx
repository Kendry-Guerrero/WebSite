import { useState, useEffect,useRef } from "react";
import { About } from "./Components/About/About";
import { Footeer } from "./Components/Footer/Footeer";
import { Projects } from "./Components/Projects/Projects";
import { ProjectsMobile } from "./Components/ProjectsMobile/ProjectsMobile";
import { Header } from "./Components/Header/Header";








function App() {

  const MAX_MOBILE_WIDTH = 500

  //---USE STATES
  const [language, setLanguage] = useState('ES');
  //Initialize the windowsize with the current dimensions

  const [isMobile, setIsMobile] = useState(window.innerWidth <= MAX_MOBILE_WIDTH)
  const prevWidth = useRef(window.innerWidth)




  const handleSetLanguage = (lan) => {
    // console.log('language: ' + lan);
    setLanguage(lan);



  }



  useEffect(() => {
    const handleResize = () => {
      const currWidth = window.innerWidth
      if (currWidth <= MAX_MOBILE_WIDTH && prevWidth.current > MAX_MOBILE_WIDTH){
        setIsMobile(true)
      } else if (currWidth > MAX_MOBILE_WIDTH && prevWidth.current <= MAX_MOBILE_WIDTH) {
        setIsMobile(false)
      }
      prevWidth.current = currWidth
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])





  





  return (
    <>

      <Header language={language} handleSetLanguage={handleSetLanguage} />

      {(isMobile) ?
        <ProjectsMobile language={language} />
        :
        <Projects language={language} />
      }
      

      <About language={language} isMobile={isMobile} />




      {/* <Footeer /> */}

    </>




  )
}

export default App
