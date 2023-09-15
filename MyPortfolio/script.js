'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});


/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}


//  Google-sheets


const scriptURL = 'https://script.google.com/macros/s/AKfycby0H5Vx5s3vKPCZg9JaMRiyVo_0ID_JCbObQeE1aKBZc6ZK9wWh2pGs9KiDfRkw8Am5/exec'
const form = document.forms['google-sheet']
const starform =document.querySelector('#star-form');

starform.addEventListener('submit', (e) => {
  let zz=new FormData(starform);
  let sucessfull =document.getElementById('sucessfully');
  e.target.submit.innerHTML="sending....";
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body:zz})
    .then(response =>response.text())
    .then((finalRes)=>{
      e.target.submit.innerHTML="Send";
      sucessfull.innerHTML="Thanks For rating!!"

      setTimeout(function(){
      sucessfull.innerHTML=""
      },5000)

      starform.reset();

      setTimeout(function(){
        let hidestarbox = document.querySelector('.star-box')
        hidestarbox.style.display="none";
      },5000)

      setTimeout(function(){
        let hidestar = document.getElementById('star')
        hidestar.style.opacity=0;
      },8000)

    })
})

form.addEventListener('submit', (e) => {
  e.target.submit.innerHTML="sending....";
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
      e.target.submit.innerHTML="send";
      completed.innerHTML="Thank you for Contacting Us!!"

      setTimeout(function(){
        completed.innerHTML=""
        },5000)
        form.reset();
    })
})



// animation 

var tl = gsap.timeline();

tl.from('.navitem', {
    stagger: .3,
    duration: 1.5,
    y: 20,
    delay: 4.6,
    ease: 'Expo.easeInOut',
    opacity: 0
})
.from('.leftitem', {
    stagger: .3,
    duration: 2,
    y: 20,
    ease: 'Expo.easeInOut',
    opacity: 0
}, '-=2')
.from('#right', {
    duration: 2,
    scale: 1.05,
    ease: 'Expo.easeInOut',
    opacity: 0
}, '-=2')



// Typed Js 

var typed = new Typed('#element', {
  strings:['Frontend Developer', 'Web Developer','Web Designer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay:1000,
  loop:true
});


// qual

const tabs =document.querySelectorAll('[data-target]'),
      tabsContents = document.querySelectorAll('[data-content]') 

tabs.forEach(tab =>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target)

        tabsContents.forEach(tabContent=>{
          tabContent.classList.remove('qual-active')
        })
        target.classList.add('qual-active')

        tabs.forEach(tab=>{
          tab.classList.remove('qual-active')
        })
        tab.classList.add('qual-active')
    })  
})



// Animation 

var tl = gsap.timeline();

tl.from('.navitem', {
    stagger: .3,
    duration: 2,
    y: 20,
    ease: 'Expo.easeInOut',
    opacity: 0
})
.from('#smline', {
    width: 0,
    duration: 1,
    ease: 'Expo.easeInOut',
}, '-=2')
.from('.leftitem', {
    stagger: .3,
    duration: 2,
    y: 20,
    ease: 'Expo.easeInOut',
    opacity: 0
}, '-=2')
.from('#right', {
    duration: 2,
    scale: 1.05,
    ease: 'Expo.easeInOut',
    opacity: 0
}, '-=2')



// Animation 


const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
  if(entry.isIntersecting){
        entry.target.classList.add("show-items");
  }else{
        entry.target.classList.remove("show-items");
  }
 });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));

const scrollRight = document.querySelectorAll(".scroll-right");
scrollRight.forEach((el)=>observer.observe(el));

const scrollLeft = document.querySelectorAll(".scroll-left");
scrollLeft.forEach((el)=>observer.observe(el));

// feedback star


var star = document.getElementById("star");
var starbox = document.querySelector(".star-box");

star.onclick =()=>{
  if(starbox.style.display === "none"){
    starbox.style.display = "block";
  }
  else{
    starbox.style.display = "none";
  }
}

let starshow = setTimeout(show,20000);

function show(){
  let showstar =document.getElementById('star');
  showstar.style.opacity=1;
}