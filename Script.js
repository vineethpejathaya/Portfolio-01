/* Slide show for skills section*/
const slides = document.getElementsByClassName('carousel_item');
const totalSlides = slides.length;
let slideCount = 0;

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

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

/* Circular Progress bar for skill section*/

let progressCircles = document.querySelectorAll('.progress');

const centreData = document.querySelectorAll('.data');

progressCircles.forEach(progress);

centreData.forEach(progressData);

 function progressData(a)
 {
    let p=a.previousElementSibling.getAttribute('data');
    a.innerHTML=p+"%";
 }

function progress(progressCircle)
{
let radius = progressCircle.r.baseVal.value;
let circumference = radius*2* Math.PI;

progressCircle.style.strokeDasharray = circumference;

setProgress(progressCircle.getAttribute('data'));

function setProgress(percent)
{
     progressCircle.style.strokeDashoffset = circumference - (percent/100)*circumference;
};

};


 