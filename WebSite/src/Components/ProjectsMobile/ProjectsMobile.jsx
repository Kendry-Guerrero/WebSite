import React, { useEffect } from 'react'
import { cards } from '../../Utils/GlobalVariables';
import gsap from 'gsap';
import SplitType from 'split-type';
import './ProjectsMobile.css';
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);


export const ProjectsMobile = (props) => {

  const { language } = props;



  const changeCardtitleLangEs = () => {
    let cardTitles = document.querySelectorAll('.card-title-mobile');
    let cardTitleText = new SplitType(".card-title-mobile", { types: 'chars' });
    cardTitleText.char;
    const tl = gsap.timeline();


    //Animatimating the title of the card
    tl.to(".char", {
      y: 50,
      stagger: 0.05,


      // delay: 0.2,
      duration: .2,

      // ease: CustomEase.create("custom", "0.83, 0, 0.17, 1"),
      onComplete: () => {

        cardTitleText.revert();
        cardTitles.forEach((title, i) => (
          title.innerHTML = cards[i].TitleEs
        ));



        cardTitleText = new SplitType(".card-title-mobile", { types: 'chars', charClass: 'card-title-mobile-char' });


        //Creating the chars
        cardTitleText.char;
        //animating the chars
        gsap.to(".card-title-mobile-char", {

          y: 0,
          stagger: 0.05,

          // delay: 0.2,
          duration: .2,

          // ease: CustomEase.create("custom", "0.83, 0, 0.17, 1"),
          onComplete: () => {
            //creverting changes
            cardTitleText.revert();


          }
        })




      }

    })






  }

  const changeCardtitleLangEn = () => {
    let cardTitles = document.querySelectorAll('.card-title-mobile');
    let cardTitleText = new SplitType(".card-title-mobile", { types: 'chars' });
    cardTitleText.char;
    const tl = gsap.timeline();
    console.log('triggeref');

    //Animatimating the title of the card
    tl.to(".char", {
      y: 50,
      stagger: 0.05,

      // delay: 0.2,
      duration: .2,

      // ease: CustomEase.create("custom", "0.83, 0, 0.17, 1"),
      onComplete: () => {

        cardTitleText.revert();
        cardTitles.forEach((title, i) => (
          title.innerHTML = cards[i].TitleEn
        ));



        cardTitleText = new SplitType(".card-title-mobile", { types: 'chars', charClass: 'card-title-mobile-char' });


        //Creating the chars
        cardTitleText.char;
        //animating the chars
        gsap.to(".card-title-mobile-char", {

          y: 0,
          stagger: 0.05,

          // delay: 0.2,
          duration: .2,

          // ease: CustomEase.create("custom", "0.83, 0, 0.17, 1"),
          onComplete: () => {
            //creverting changes
            cardTitleText.revert();
          }
        })




      }

    })





  }

  const changeCardDesLanngEs = () => {
    let cardDes = document.querySelectorAll(".card-des-mobile");

    //Itero por cada description 

    cardDes.forEach((card, i) => {

      gsap.to(card, {
        y: -300,
        duration: 1,
        ease: 'power1',
        onComplete: () => {
          card.innerHTML = cards[i].DescriptionEs
          gsap.to(card, {
            scale: 1,
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power1',
            onComplete: () => {

            }
          })

        }

      })

    })

  }

  const changeCardDesLanngEn = () => {
    let cardDes = document.querySelectorAll(".card-des-mobile");

    //Itero por cada description 

    cardDes.forEach((card, i) => {

      gsap.to(card, {
        y: -300,
        duration: 1,
        ease: 'power1',
        onComplete: () => {
          card.innerHTML = cards[i].DescriptionEn
          gsap.to(card, {
            scale: 1,
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power1',
            onComplete: () => {

            }
          })

        }

      })

    })

  }

  useEffect(() => {

    if (language === 'ES') {
      changeCardtitleLangEs();
      changeCardDesLanngEs();




    } else if (language === 'EN') {
      changeCardtitleLangEn();
      changeCardDesLanngEn();
      // 
    }


  }, [language])



  return (
    <>


      <div>


        <h2 className="projects-title-mobile" > Proyectos</h2>

        <ul className='project-container'>
          {cards.map((img, i) => (

            <li className="card-mobile" key={img.id}>
              <h2 className='card-title-mobile'>{cards[i].TitleEs}</h2>
              <a href={img.Link} target='_blank'>
                <img src={img.Image} alt='image' />
              </a>
              <div className='des-container'>
                <h3 className='card-des-mobile'>{cards[i].DescriptionEs}</h3>

              </div>
            </li>
          ))}

        </ul>





      </div>



    </>


  )
}
