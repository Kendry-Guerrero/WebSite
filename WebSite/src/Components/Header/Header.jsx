import React, {useRef} from 'react'
import './HeaderStyle.css';
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";

    
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);



export const Header = (props) => {
    const { language, handleSetLanguage } = props;
    
    

    const themeModeContainer = useRef();
    const { contextSafe } = useGSAP({ scope: themeModeContainer });

  



    useGSAP(() => {

        
       
        gsap.to(".lanBtn-es", {
            scale: 1.1,
            opacity: 1,
            duration: .5,
            ease: "power1.in",
            color: "white",

        })
        gsap.to(".lanBtn-en", {

            opacity: .5,
            duration: .5,
            ease: "power1.in",


        })
       

    })

  
  


    const lanChangeEn = contextSafe(() => {
        let el = document.getElementById("lanText");
       
        gsap.to(el,{
            
            text: "Language:",
            duration:1
        })
     
        gsap.to(".lanBtn-en", {
            scale: 1.1,
            opacity: 1,
            duration: .3,
            ease: "power1.in",
            color: "white",

        })
        gsap.to(".lanBtn-es", {
            scale: 1,
            opacity: 0.5,
            duration: .3,
            ease: "power1.out",
            color: "white",

        })
        handleSetLanguage('EN');
        

    })

    const lanChangeEs = contextSafe(() => {
        let el = document.getElementById("lanText");
       
        gsap.to(el,{
            
            text: "Idioma:",
            duration:1
        })

        gsap.to(".lanBtn-es", {
            scale: 1.1,
            opacity: 1,
            duration: .3,
            ease: "power1.in",
            color: "white",

        })
        gsap.to(".lanBtn-en", {
            scale: 1,
            opacity: 0.5,
            duration: .3,
            ease: "power1.out",
            color: "white",

        })
        handleSetLanguage('ES');
        

    })





    return (
        <header className='header-container'>
            <h1>
                <p id="name">Kendry Guerrero</p>
                <p id="job-description">FullStack Developer</p>
            </h1>

            <div className='language-setion' >
                
                <p id="lanText" >Idioma:</p>

                <div className="language-button-container" ref={themeModeContainer} >
                    <span className='lanBtn-en' id='btn' onClick={() => { lanChangeEn() }}>EN</span>
                    <span className='lanBtn-es' id='btn' onClick={() => { lanChangeEs() }}>ES</span>



                </div>



            </div>

        </header>
    )
}
