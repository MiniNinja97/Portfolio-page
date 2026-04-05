const portrait = document.querySelector(".portrait");
const img = document.getElementById("portrait-img");

portrait.addEventListener("mouseenter", () => {
    img.src = "img/Profilbild.jpg";
});

portrait.addEventListener("mouseleave", () => {
    img.src = "img/mig1.jpg";
});

const fadeElements = document.querySelectorAll('section, h1, h2, h3, p, ul, li, img, .portrait, .menu, .splitscreen');

window.addEventListener('scroll', () => {
  const windowHeight = window.innerHeight;
  const fadeStart = windowHeight;

  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top >= windowHeight / 2) {
      let distance = rect.top - windowHeight / 2;
      let opacity = 1 - distance / (windowHeight / 2);
      opacity = Math.max(0.2, Math.min(1, opacity));
      el.style.opacity = opacity;
    } else {
      el.style.opacity = 1;
    }
  });
});


const modal = document.getElementById('case-modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const caseStudies = {
  projectAlpha: [
    'ux_img/Group 259.jpg','ux_img/Group 260.jpg','ux_img/Group 262.jpg',
    'ux_img/Group 263.jpg','ux_img/Group 264.jpg','ux_img/Group 265.jpg',
    'ux_img/Group 266.jpg','ux_img/Group 267.jpg','ux_img/Group 268.jpg',
    'ux_img/Group 269.jpg','ux_img/Group 270.jpg','ux_img/Group 271.jpg',
    'ux_img/Group 272.jpg','ux_img/Group 273.jpg','ux_img/Group 274.jpg',
    'ux_img/Group 275.jpg','ux_img/Group 276.jpg','ux_img/Group 277.jpg',
    'ux_img/Group 278.jpg','ux_img/Group 279.jpg','ux_img/Group 280.jpg'
  ],
  projectBeta: [
    'travel_img/Group 13914.jpg','travel_img/one.jpg','travel_img/two.jpg',
    'travel_img/three.jpg','travel_img/four.jpg','travel_img/five.jpg',
    'travel_img/six.jpg','travel_img/seven.jpg','travel_img/eight.jpg',
    'travel_img/nine.jpg','travel_img/ten.jpg','travel_img/eleven.jpg',
    'travel_img/twelve.jpg','travel_img/thirteen.jpg','travel_img/fourtheen.jpg',
    'travel_img/fifteen.jpg','travel_img/sixteen.jpg','travel_img/seventheen.jpg',
    'travel_img/last.jpg'
  ],
  projectGamma: [
    'grow_img/Group 25.jpg','grow_img/Group 26.jpg','grow_img/Group 27.jpg',
    'grow_img/Group 28.jpg','grow_img/Group 29.jpg','grow_img/Group 30.jpg',
    'grow_img/Group 31.jpg','grow_img/Group 32.jpg'
  ],

  projectDelta: [
    "frontend_img/summercasestudy/Group 8.png",
    "frontend_img/summercasestudy/Group 9.png",
    "frontend_img/summercasestudy/Group 10.png",
    "frontend_img/summercasestudy/Group 11.png",
    "frontend_img/summercasestudy/Group 12.png",
    "frontend_img/summercasestudy/Group 13.png",
    "frontend_img/summercasestudy/Group 14.png",
    "frontend_img/summercasestudy/Group 15.png",
    "frontend_img/summercasestudy/Group 16.png",
    "frontend_img/summercasestudy/Group 17.png" ],
};

const frontendProjects = {

  "aGameObviously-code":[
    "frontend_img/game/1.png",
    "frontend_img/game/2.png",
    "frontend_img/game/3.png",
    "frontend_img/game/4.png",
    "frontend_img/game/5.png",
    "frontend_img/game/6.png",
    "frontend_img/game/7.png",
    "frontend_img/game/8.png",
    "frontend_img/game/9.png",
    "frontend_img/game/10.png",
    "frontend_img/game/11.png",
    "frontend_img/game/12.png",
    "frontend_img/game/13.png",
    "frontend_img/game/14.png",
    "frontend_img/game/15.png",
    
  ],

  "aGameObviously-final":[
    "frontend_img/game/pic1.png",
    "frontend_img/game/pic2.png",
    "frontend_img/game/pic3.png",
    "frontend_img/game/pic4.png",
    "frontend_img/game/pic5.png",
    "frontend_img/game/pic6.png",
    
  ],

  "chappy-code":[
    "frontend_img/chappy/1.png",
    "frontend_img/chappy/2.png",
    "frontend_img/chappy/3.png",
    "frontend_img/chappy/4.png",
    "frontend_img/chappy/5.png",
    "frontend_img/chappy/6.png",
    "frontend_img/chappy/7.png",
    "frontend_img/chappy/8.png",
    "frontend_img/chappy/9.png",
    "frontend_img/chappy/10.png",
    
  ],

  "chappy-final":[
    "frontend_img/chappy/11.png",
    "frontend_img/chappy/12.png",
    "frontend_img/chappy/13.png",
  ],
  "summertoy-code":[
    "frontend_img/summertoys/pic_one.png",
    "frontend_img/summertoys/pic_two.png",
    "frontend_img/summertoys/pic_three.png",
    "frontend_img/summertoys/pic_four.png",
    "frontend_img/summertoys/pic_five.png",
  ],
  "summertoy-final":[
    "frontend_img/summertoys/startpage.png",
    "frontend_img/summertoys/productpage.png",
    "frontend_img/summertoys/cart.png",
    "frontend_img/summertoys/adminlogin.png",
    "frontend_img/summertoys/edit.png",
    "frontend_img/summertoys/newproduct.png"
    
  ],
  "stopwatch-code":[
    "frontend_img/stopwatch/stop_one.png",
    "frontend_img/stopwatch/stop_two.png",
    "frontend_img/stopwatch/stop_three.png",
    "frontend_img/stopwatch/stop_four.png",
    "frontend_img/stopwatch/stop_five.png",
  ],

  "stopwatch-final":[
    "frontend_img/stopwatch/stop_six.png",
    "frontend_img/stopwatch/stop_seven.png",
    
  ],

    "foodTruck-code":[
      "frontend_img/foodtruck/1.png",
      "frontend_img/foodtruck/2.png",
      "frontend_img/foodtruck/3.png",
      "frontend_img/foodtruck/4.png",
      "frontend_img/foodtruck/5.png",
      "frontend_img/foodtruck/6.png",
      "frontend_img/foodtruck/7.png",
    
    ],
    "foodTruck-final":[
      "frontend_img/foodtruck/foodone.png",
      "frontend_img/foodtruck/foodtwo.png",
      "frontend_img/foodtruck/foodthree.png",
      "frontend_img/foodtruck/foodfour.png",
      "frontend_img/foodtruck/foodfive.png",
    ],

};

let currentImages = [];
let currentIndex = 0;


function disableScroll() { document.body.style.overflow = 'hidden'; }
function enableScroll() { document.body.style.overflow = ''; }


document.querySelectorAll('.case-link').forEach(link => {
  link.addEventListener('click', () => {
    const caseId = link.dataset.case;
    currentImages = caseStudies[caseId];
    currentIndex = 0;
    modalImg.src = currentImages[currentIndex];
    modal.style.display = 'block';
    disableScroll();

    
    if(currentImages.length > 1) {
      prevBtn.style.display = 'block';
      nextBtn.style.display = 'block';
    } else {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
    }
  });
});


nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= currentImages.length) currentIndex = 0;
  modalImg.src = currentImages[currentIndex];
});


prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = currentImages.length - 1;
  modalImg.src = currentImages[currentIndex];
});


closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  enableScroll();
});


window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    enableScroll();
  }
});

document.querySelectorAll('.frontend-link').forEach(button => {

button.addEventListener('click', () => {

const projectId = button.dataset.project;

currentImages = frontendProjects[projectId];

currentIndex = 0;

modalImg.src = currentImages[currentIndex];

modal.style.display = 'block';

disableScroll();


if(currentImages.length > 1){
prevBtn.style.display = 'block';
nextBtn.style.display = 'block';
}else{
prevBtn.style.display = 'none';
nextBtn.style.display = 'none';
}

});

});


document.querySelectorAll('.diploma-link').forEach(button => {
  button.addEventListener('click', () => {
    const diplomaSrc = button.dataset.diploma;
    modalImg.src = diplomaSrc;
    modal.style.display = 'block';
    disableScroll();

   
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
  });
});


const videoModal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeVideoBtn = videoModal.querySelector(".close");

document.querySelectorAll('.video-link').forEach(button => {
  button.addEventListener('click', () => {
    const videoSrc = button.dataset.video;
    modalVideo.src = videoSrc;
    videoModal.style.display = "flex";
    modalVideo.play();
    disableScroll();
  });
});

closeVideoBtn.addEventListener('click', () => {
  videoModal.style.display = "none";
  modalVideo.pause();
  modalVideo.currentTime = 0;
  enableScroll();
});

videoModal.addEventListener('click', (e) => {
  if (e.target === videoModal) {
    videoModal.style.display = "none";
    modalVideo.pause();
    modalVideo.currentTime = 0;
    enableScroll();
  }
});



