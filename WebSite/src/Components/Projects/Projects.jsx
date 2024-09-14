import React from 'react'
import {useEffect, useRef,useState } from 'react';

import { initializeCards, nextCard,changeCardtitleLangEs, changeCardTitleLangEn } from '../../Utils/Animations';
import { cards } from '../../Utils/GlobalVariables';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Projects.css';
import { TextPlugin } from "gsap/TextPlugin";
import SplitType from 'split-type';

gsap.registerPlugin(TextPlugin);






export const Projects = (props) => {


  const {language } = props;
  /*----Use States-----*/


  const container = useRef();
  const { contextSafe } = useGSAP({ scope: container });
  const tl = gsap.timeline();
  /* ----- GSAP -----*/
  useGSAP(() => {
    
      initializeCards();
  

    

  })




  /* Change title language Es*/
  const titleChangeEs = contextSafe(() => {
    // let el = document.getElementById("txt");
    const tl = gsap.timeline();
    let sectionTitle = document.getElementById("projects-title")
    let pTitleIn = new SplitType(sectionTitle, { types: 'chars', charClass: 'projects-title-in' });
    let pTitleOut = null;
    pTitleIn.char;

    tl.to(".projects-title-in", {
      x: 30,
      stagger: 0.05,

      // delay: 0.2,
      duration: 0.3,
      onComplete: () => {
        pTitleIn.revert();

        sectionTitle.innerHTML = "Proyectos";
        pTitleOut = new SplitType(sectionTitle, { types: 'chars', charClass: 'projects-title-out' });
        pTitleOut.char

        tl.to('.projects-title-out', {

          x: 0,
          stagger: 0.05,

          //  delay: 0.2,
          duration: 0.2,


          onComplete: () => {
            pTitleOut.revert();
          }
        })
      }

    })




  })


  /* Change title language En*/
  const titleChangeEn = contextSafe(() => {
    // let el = document.getElementsById("txt");
    const tl = gsap.timeline();
    let sectionTitle = document.getElementById("projects-title")
    let pTitleIn = new SplitType(sectionTitle, { types: 'chars', charClass: 'projects-title-in' });
    let pTitleOut = null;
    pTitleIn.char;

    tl.to(".projects-title-in", {
      x: 30,
      stagger: 0.05,

      // delay: 0.2,
      duration: 0.3,
      onComplete: () => {
        pTitleIn.revert();

        sectionTitle.innerHTML = "Projects"
        pTitleOut = new SplitType(sectionTitle, { types: 'chars', charClass: 'projects-title-out' });
        pTitleOut.char

        tl.to('.projects-title-out', {

          x: 0,
          stagger: 0.05,

          //  delay: 0.2,
          duration: 0.2,


          onComplete: () => {
            pTitleOut.revert();
          }
        })
      }

    })




  })

  const arrowEffect = contextSafe(() => {

    tl.to(".next-btn", {
      x: 10,
      yoyo: true,
      duration: 0.5,

    }).to(".next-btn", { x: 0, duration: 1 })

    nextCard(language);


  })


  /*-----Use Effects----*/



  useEffect(
    () => {
      //Check to render the correct tipe of title based on language
      if (language === 'ES') {

        // langChangeEs();
        titleChangeEs();
 
        changeCardtitleLangEs();

      } else {
        // langChangeEn();
        titleChangeEn();
        
        changeCardTitleLangEn();

      }

    }, [language]

  );






  return (

    <>


      <div className='showcase-container' ref={container}>

       
        <h2 id="projects-title" > Proyectos</h2>

        
    
        <div className='cards-slider'>
          {  
           cards.map((img, i) => (<div key={img.id} className='card'>
            {/*Abrir en una nueva pestaña */}
            <a href={img.Link}>
              <img src={img.Image} alt='image' />
            </a>
          </div>))
          }
        </div>
       
        {/* poner condicional para que el titulo y descripción se generen adecuadamanete */}
        <h2 className='card-title'>{cards[cards.length-1].TitleEs}</h2>
        <h3 className='card-des'>Card Description </h3>


        {/* Button to change cards */}
        <div className='nextBtn-conatiner'>

          <button className='next-btn' onClick={() => { arrowEffect() }}>

            <span className="material-symbols-outlined">
              trending_flat
            </span>
          </button>

        </div>



      </div>



    </>



  )
}
