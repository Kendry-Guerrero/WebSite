import React, { useEffect } from 'react'
import { aboutDes } from '../../Utils/GlobalVariables';
import gsap from 'gsap';
import { Footeer } from '../Footer/Footeer';
import { changeAboutDesLangEn, changeAboutDesLangEs } from '../../Utils/Animations';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './About.css';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);



export const About = (props) => {

  const techStack = [
    { title: 'stack1', id: 1 },
    { title: 'stack2', id: 2 },
    { title: 'stack3', id: 3 },
    { title: 'stack4', id: 4 },
    { title: 'stack5', id: 5 },
    { title: 'stack6', id: 6 },
    { title: 'stack7', id: 7 },
    { title: 'stack8', id: 8 },
    { title: 'stack9', id: 9 },
  ]


  //Props
  const { language, isMobile } = props

  //Changing the title and description language 
  const changeSectionTitleEs = () => {


    const tl = gsap.timeline();
    let sectionTitle = document.getElementById("about-section-title")
    let aTitleIn = new SplitType(sectionTitle, { types: 'chars', charClass: 'about-title-in' });
    let aTitleOut = null;
    aTitleIn.chars;



    tl.to(".about-title-in", {
      x: 30,
      stagger: 0.05,

      // delay: 0.2,
      duration: 0.3,
      onComplete: () => {
        aTitleIn.revert();

        sectionTitle.innerHTML = "Sobre me";
        aTitleOut = new SplitType(sectionTitle, { types: 'chars', charClass: 'about-title-out' });
        aTitleOut.char

        tl.to('.about-title-out', {

          x: 0,
          stagger: 0.05,

          //  delay: 0.2,
          duration: 0.2,


          onComplete: () => {
            aTitleOut.revert();
          }
        })
      }

    })

    changeAboutDesLangEs();
  }


  const changeSectionTitleEn = () => {


    const tl = gsap.timeline();
    let sectionTitle = document.getElementById("about-section-title")
    let aTitleIn = new SplitType(sectionTitle, { types: 'chars', charClass: 'about-title-in' });
    let aTitleOut = null;
    aTitleIn.chars;
    aTitleIn.char;



    tl.to(".about-title-in", {
      x: 30,
      stagger: 0.05,

      // delay: 0.2,
      duration: 0.3,
      onComplete: () => {
        aTitleIn.revert();

        sectionTitle.innerHTML = "About me";
        aTitleOut = new SplitType(sectionTitle, { types: 'chars', charClass: 'about-title-out' });
        aTitleOut.char

        tl.to('.about-title-out', {

          x: 0,
          stagger: 0.05,

          //  delay: 0.2,
          duration: 0.2,


          onComplete: () => {
            aTitleOut.revert();
          }
        })
      }

    })
    changeAboutDesLangEn();
  }




  //Use Effects


  useEffect(
    () => {
      if (language === 'ES') {

        changeSectionTitleEs();

      } else {
        changeSectionTitleEn();


      }
    }, [language]


  );



  return (
    <section className="about-section-container">

      <h2 id='about-section-title' >Sobre me

      </h2>
      <div className='about-des-container'>
        <div className='about-des'>
          {aboutDes[0].DescriptionEs}

        </div>
      </div>
      <h2>jsd</h2>

      {!isMobile && 
        <ul className='stack-container' >
          <li className='stack'>stack1</li>
          <li className='stack'>stack2</li>
          <li className='stack'>stack3</li>
          <li className='stack'>stack4</li>
          <li className='stack'>stack5</li>
          <li className='stack'>stack6</li>
          <li className='stack'>stack7</li>
          <li className='stack'>stack8</li>
          <li className='stack'>stack9</li>
        </ul>
    
      }



      <Footeer />


    </section>



  )
}
