const top_menu = document.querySelectorAll('.gnb li a')
const title = document.querySelectorAll('main > section')
console.log(top_menu, title)


top_menu[0].classList.add('active')
top_menu.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault()
        window.scrollTo(0, title[i].offsetTop)
    })
})

let swiperContainer =document.querySelector('#projectContainer')
let swiper = new Swiper('#projectContainer', {
    // 한 번에 보여줄 슬라이드 수
    slidesPerView: 1,
    // 슬라이드 사이의 간격
    spaceBetween: 1000,
    // 한 번에 넘길 슬라이드 수
    slidesPerGroup: 1,
    centeredSlides : true,
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
})

let swiperContainer01 =document.querySelector('#workContainer1')
let swiper01 = new Swiper('#workContainer1', {
    // 한 번에 보여줄 슬라이드 수
    slidesPerView: 3,
    // 슬라이드 사이의 간격
    spaceBetween: 400,
    // 한 번에 넘길 슬라이드 수
    slidesPerGroup: 1,
    loop : true,
    autoplay :{delay:3000,},
    centeredSlides : true,
})

let swiperContainer02 =document.querySelector('#workContainer2')
let swiper02 = new Swiper('#workContainer2', {
    // 한 번에 보여줄 슬라이드 수
    slidesPerView: 3,
    // 슬라이드 사이의 간격
    spaceBetween: 30,
    // 한 번에 넘길 슬라이드 수
    loop : true,
    autoplay :{delay:2500,},
    slidesPerGroup: 1,
    centeredSlides : true,
})

let swiperContainer03 =document.querySelector('#workContainer3')
let swiper03 = new Swiper('#workContainer3', {
  // 한 번에 보여줄 슬라이드 수
  slidesPerView: 3,
  // 슬라이드 사이의 간격
  spaceBetween: 20,
  // 한 번에 넘길 슬라이드 수
  loop: true,
  autoplay: { delay: 3000, },
  slidesPerGroup: 1, 
  centeredSlides: true,
  });

let swiperContainer04 =document.querySelector('#workContainer4')
let swiper04 = new Swiper('#workContainer4', {
  // 한 번에 보여줄 슬라이드 수
  slidesPerView: 3,
  // 슬라이드 사이의 간격
  //spaceBetween: 150,
  // 한 번에 넘길 슬라이드 수
  loop: true,
  autoplay: { delay: 2500, },
  slidesPerGroup: 1, 
  centeredSlides: false,
  });

// 팝업 열기
const openButtons = document.querySelectorAll('.btn-open');
const layerPopup = document.querySelector('.layer-popup');
const modalDialogs = document.querySelectorAll('.modal-dialog');
console.log(openButtons, layerPopup, modalDialogs)

// openButtons[0].addEventListener('click', function(){
//   layerPopup.style.display = "block";
//   modalDialogs[0].style.display = "block";
// });

// openButtons[1].addEventListener('click', function(){
//   layerPopup.style.display = "block";
//   modalDialogs[1].style.display = "block";
// });

// openButtons[2].addEventListener('click', function(){
//   layerPopup.style.display = "block";
//   modalDialogs[2].style.display = "block";
// });

// layerPopup.addEventListener('click', function() {
//   layerPopup.style.display = "none"
// });

function closeAllModals() {
  modalDialogs.forEach(dialog => {
    dialog.style.display = 'none';
  });
}

openButtons[0].addEventListener('click', function(){
  closeAllModals();
  layerPopup.style.display = 'block';
  modalDialogs[0].style.display = 'block';
});

openButtons[1].addEventListener('click', function(){
  closeAllModals();
  layerPopup.style.display = 'block';
  modalDialogs[1].style.display = 'block';
});

openButtons[2].addEventListener('click', function(){
  closeAllModals();
  layerPopup.style.display = 'block';
  modalDialogs[2].style.display = 'block';
});

layerPopup.addEventListener('click', function() {
  layerPopup.style.display = 'none';
  closeAllModals();
});