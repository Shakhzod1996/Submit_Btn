let divs = document.querySelectorAll(".div");
let btns = document.querySelectorAll(".btn");
let pS = document.querySelectorAll(".pp");
let rightSides = document.querySelectorAll(".right-side");

// ?Events
divs[0].addEventListener('click', () => {
  btns[0].classList.add('btn-active');
  pS[0].classList.add('p-active')

  btns[1].classList.remove('btn-active');
  btns[2].classList.remove('btn-active');
  pS[1].classList.remove('p-active')
  pS[2].classList.remove('p-active')
  rightSides[2].classList.remove('confirm-data-show')
  rightSides[1].classList.remove('choose-description-show')
  rightSides[0].classList.remove('choose-title-hide')
  rightSides[3].classList.remove('done-show')



})

divs[1].addEventListener('click', () => {
  btns[1].classList.add('btn-active');
  pS[1].classList.add('p-active')
  rightSides[0].classList.add('choose-title-hide')
  rightSides[1].classList.add('choose-description-show')

  btns[2].classList.remove('btn-active');
  pS[2].classList.remove('p-active')
  rightSides[2].classList.remove('confirm-data-show')
  rightSides[3].classList.remove('done-show')
})

divs[2].addEventListener('click', () => {
  btns[2].classList.add('btn-active');
  pS[2].classList.add('p-active')
  rightSides[0].classList.add('choose-title-hide')
  rightSides[2].classList.add('confirm-data-show')

  rightSides[3].classList.remove('done-show')
  rightSides[1].classList.remove('choose-description-show')
})



// !Onclick Functions
// ?Submit Title
function submitTitle() {
  btns[1].classList.add('btn-active');
  pS[1].classList.add('p-active')

  rightSides[2].classList.remove('confirm-data-show')
  rightSides[1].classList.add('choose-description-show')
  rightSides[0].classList.add('choose-title-hide')
}

// ?Back Description
function backDesc() {
  btns[1].classList.remove('btn-active');
  pS[1].classList.remove('p-active')

  rightSides[2].classList.remove('confirm-data-show')
  rightSides[1].classList.remove('choose-description-show')
  rightSides[0].classList.remove('choose-title-hide')
}

// ?Confirm Description
function confirmDesc() {
  btns[2].classList.add('btn-active');
  rightSides[2].classList.add('confirm-data-show')
  pS[2].classList.add('p-active')
  
  rightSides[1].classList.remove('choose-description-show')
}

// ?Confirm Back
function confirmBack() {
  rightSides[0].classList.add('choose-title-hide')
  rightSides[1].classList.add('choose-description-show')

  rightSides[2].classList.remove('confirm-data-show')
  btns[2].classList.remove('btn-active');
  pS[2].classList.remove('p-active')
}

// ?Go Ahead 
function goAhead() {
  rightSides[3].classList.add('done-show')

  rightSides[2].classList.remove('confirm-data-show')

}
