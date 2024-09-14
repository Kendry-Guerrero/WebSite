import { gsap } from 'gsap';

import { CustomEase } from "gsap/CustomEase";

import { cards,aboutDes } from './GlobalVariables';
import { TextPlugin } from "gsap/TextPlugin";
import SplitType from 'split-type';


gsap.registerPlugin(TextPlugin);

gsap.registerPlugin(CustomEase);





let isAnimating = false;

let currentCard = cards.length - 1;
let language = 'ES';

/* function to change char of a text in an element into spans, no longer neccesary since I'm using split-type*/
// export const splitTextIntoSpans = (selector) => {

//     let elements = document.querySelectorAll(selector);

//     elements.forEach((element) => {

//         let text = element.innerText;

//         let splitText = text.split("").map(function (char) {

//             return `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`
//         }).join("");
//         element.innerHTML = splitText;
//     });
// }



export const initializeCards = (lan) => {
    let cardsArray = Array.from(document.querySelectorAll(".card"));
    let cardTitle = document.querySelector(".card-title");
    let cardDes = document.querySelector(".card-des");
    language = lan;

    gsap.to(cardsArray, {
        y: (i) => -15 + 15 * "%",
        z: (i) => 15 * i,
        duration: 1,
        // ease: "slow",
        ease: CustomEase.create("custom", "0.83, 0, 0.17, 1"),
        stagger: -0.1,
    });


    if(language === 'ES'){
        changeCardtitleLangEs();

    }else if(language==='EN'){
        changeCardTitleLangEn();


    }
   
}



export const nextCard = (lan) => {


    let slider = document.querySelector(".cards-slider");
    let cardsArray = Array.from(slider.querySelectorAll(".card"));
    let cardTitle = document.querySelector(".card-title");
    let cardDes = document.querySelector(".card-des");
    let lastCard = cardsArray.pop();
    // let nextCard = cardsArray[cardsArray.length - 1];

    //Checking the current card to properly display title and description and not allow the the title to change unless animation is over
    if (currentCard >= 1 && !isAnimating) {
        currentCard--;
        console.log(currentCard);
    } else if (currentCard < 1 && !isAnimating) {

        currentCard = cards.length - 1;
    }

    if (isAnimating) {
        return;
    }
    isAnimating = true;


    //Pushing card downwards

    gsap.to(lastCard.querySelectorAll("a"), {
        y: 200,
        duration: 0.1,
        // ease: "cubic",
        ease: CustomEase.create("custom", "0.83, 0, 0.17, 1")
    });

    //Pushing stack of cards to the front
    gsap.to(lastCard, {
        y: "+=110%",
        duration: 0.3,
        ease: "slow",
        onComplete: () => {
            slider.prepend(lastCard);

            initializeCards(lan);
            gsap.set(lastCard.querySelectorAll("a"), { y: 200 });
            setTimeout(() => {
                isAnimating = false;
            }, 900);

        },
    });


}




//Changing the language of the title and description of the card
export const changeCardtitleLangEs = () => {
    let cardTitle = document.querySelector(".card-title");
    let cardTitleText = new SplitType(".card-title", {types: 'chars'});
    cardTitleText.char;
    const tl = gsap.timeline();


    //Animatimating the title of the card
    tl.to(".char", {
        y: 50,
        stagger: 0.05,

        // delay: 0.2,
        duration: .5,

        // ease: CustomEase.create("custom", "0.83, 0, 0.17, 1"),
        onComplete: () => {

            cardTitleText.revert();
            //change the card title after I have moved
            cardTitle.innerHTML = cards[currentCard].TitleEs;
            cardTitleText = new SplitType(".card-title", { types: 'chars', charClass: 'card-title-char' });


            //Creating the chars
            cardTitleText.char;
            //animating the chars
            gsap.to(".card-title-char", {

                y: 0,
                stagger: 0.05,

                // delay: 0.2,
                duration: .5,

                ease: CustomEase.create("custom", "0.83, 0, 0.17, 1"),
                onComplete: () => {
                    //creverting changes
                    cardTitleText.revert();
                }
            })




        }

    })

    changeCardDesLangEs();



}



export const changeCardTitleLangEn = () => {
    let cardTitle = document.querySelector(".card-title");
    let cardTitleText = new SplitType(".card-title", {types: 'chars'});



    cardTitleText.char;

    const tl = gsap.timeline();



    tl.to(".char", {
        y: 50,
        stagger: 0.05,

        // delay: 0.2,
        duration: .5,

        // ease: CustomEase.create("custom", "0.83, 0, 0.17, 1"),
        onComplete: () => {

            cardTitleText.revert();

            cardTitle.innerHTML = cards[currentCard].TitleEn;
            cardTitleText = new SplitType(".card-title", { types: 'chars', charClass: 'card-title-char' });


            cardTitleText.char;

            gsap.to(".card-title-char", {

                y: 0,
                stagger: 0.05,

                // delay: 0.2,
                duration: .5,

                ease: CustomEase.create("custom", "0.83, 0, 0.17, 1"),
                onComplete: () => {
                    cardTitleText.revert();
                }
            })




        }

    })
    changeCardDesLangEn();


}



export const changeCardDesLangEs = () => {

    let cardDes = document.querySelectorAll(".card-des");
    // let cardDesText = new SplitType(".card-des", { types: 'words' });
    // cardDesText.words;

    const tl = gsap.timeline();

   

    //Itero por cada description 

    cardDes.forEach((card, i) => {

      gsap.to(card, {
        x: 600,
        duration: 1,
        ease: 'power1',
        onComplete: () => {
          card.innerHTML = cards[i].DescriptionEs
          gsap.to(card, {
            scale: 1,
            x: 0,
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

export const changeCardDesLangEn = () => {
    let cardDes = document.querySelectorAll(".card-des");
   

    //Itero por cada description 

    cardDes.forEach((card, i) => {

      gsap.to(card, {
        x: 600,
        duration: 1,
        ease: 'power1',
        onComplete: () => {
          card.innerHTML = cards[i].DescriptionEn
          gsap.to(card, {
            scale: 1,
            x: 0,
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

//changing the language of de about me description
export const changeAboutDesLangEn = () => {
    let abouSectionDes = document.querySelectorAll(".about-des");
    // let aboutSectionDesText = new SplitType(".about-des", { types: 'words' });
    // aboutSectionDesText.words;
    // const tl = gsap.timeline();




      //Itero por cada description 

      abouSectionDes.forEach((about, i) => {

        gsap.to(about, {
          y: 600,
          duration: 1,
          ease: 'power1',
          onComplete: () => {
            about.innerHTML = aboutDes[1].DescriptionEn
            gsap.to(about, {
            //   scale: 1,
              y: 0,
            //   opacity: 1,
              duration: 1,
              ease: 'power1',
              onComplete: () => {
  
              }
            })
  
          }
  
        })
  
      })


   

}
export const changeAboutDesLangEs = () => {
    let abouSectionDes = document.querySelectorAll(".about-des");
    // let aboutSectionDesText = new SplitType(".about-des", { types: 'words' });
    // aboutSectionDesText.words;
    // const tl = gsap.timeline();




      //Itero por cada description 

      abouSectionDes.forEach((about, i) => {

        gsap.to(about, {
          y: 600,
          duration: 1,
          ease: 'power1',
          onComplete: () => {
            about.innerHTML = aboutDes[0].DescriptionEs
            gsap.to(about, {
            //   scale: 1,
              y: 0,
            //   opacity: 1,
              duration: 1,
              ease: 'power1',
              onComplete: () => {
  
              }
            })
  
          }
  
        })
  
      })

}







