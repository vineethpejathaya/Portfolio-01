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


/* Project slides*/

const pro_slide = document.getElementsByClassName('card');
const total_pro = pro_slide.length;
let ProCount = 0;
console.log(pro_slide);
console.log(total_pro);

const next_btn = document.querySelector('#next');
const prev_btn= document.querySelector('#prev');

next_btn.addEventListener("click",function(){

     if(ProCount === total_pro-1)
     {
          ProCount=0;  
          console.log(ProCount);
     }
     else
     {
          ProCount++;
          console.log(ProCount);
     }
     ProjectSlide();
 });
 
 prev_btn.addEventListener('click',function(){
 
     if(ProCount === 0)
     {
          ProCount=total_pro-1;      
     }
     else
     {
          ProCount--;
     }
     ProjectSlide();
 });
 
 function ProjectSlide(){
 for(let pro of pro_slide)
 {
     pro.classList.add('hidden');
     pro.classList.remove('visible');
 }
 console.log(pro_slide);
 pro_slide[ProCount].classList.add('visible');
 };
 


 