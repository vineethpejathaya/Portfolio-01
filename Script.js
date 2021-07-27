const hamburger = document.querySelector('.hamburger');

const background = document.querySelector('.background-menu');

const menuDiv = document.querySelector('.menu-div');
 const BrandName = document.querySelector('.Brand-name');

let nav = true;


const handleMenu = () =>{
     if(nav)
     {
          menuDiv.style.cssText ='right:0%; transition: all 0.3s ease-out;color:black;';
          nav=!nav;
          BrandName.style.cssText='color:black;';
          hamburger.style.cssText='color:black;';
          background.style.cssText ='right:0px; top:0px;transform: scale(30);';
     }
     else
     {
          menuDiv.style.cssText ='right:100%;transition: all 0.3s ease-out; ';
          BrandName.style.cssText='color:white;';
          hamburger.style.cssText='color:white;';
          background.style.cssText ='right:220px; top:-100px;z-index:-100;transform: scale(1);'
          nav=!nav;

     }
}





























/* Slide show for skills section*/
const slides = document.getElementsByClassName('carousel_item');
const totalSlides = slides.length;
let slideCount = 0;

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const button = document.querySelector('.button');



next.addEventListener("click",function(){

    if(slideCount === totalSlides-1)
    {
         slideCount=0;   
    }
    else
    {
         slideCount++;
    }
    manageSlide();
});

prev.addEventListener('click',function(){

    if(slideCount === 0)
    {
         slideCount=totalSlides-1;      
    }
    else
    {
         slideCount--;
    }
    manageSlide();
});

function manageSlide(){
for(let slide of slides)
{
    slide.classList.add('carousel_item_hidden');
    slide.classList.remove('carousel_item_visible');
}
console.log(slides);
  slides[slideCount].classList.add('carousel_item_visible');
};


/* Progress Bar  for Skills section*/

const skills = document.querySelectorAll('.skills');
skills.forEach(addProgress)

function addProgress(skill)
{
setTimeout(()=>
{
skill.style.width = skill.getAttribute('data-cover') +'%';
skill.style.opacity = '1';
skill.innerHTML= skill.getAttribute('data-cover') +'%';
}
,900);
};





 