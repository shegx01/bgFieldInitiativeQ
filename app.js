// Nav Section
const mainNav = document.querySelector('#mainNav')
const stickyNav = document.querySelector('#stickyNav')
const learnMoreBtnOne = document.querySelector('#learnMoreOne')
const learnMoreBtnTwo = document.querySelector('#learnMoreTwo')
const tooltip = document.querySelector('.tooltip-one')

// hooks for mobile menu
const mobileBtnOne = document.querySelector('#mobileBtnOne')
const mobileBtnTwo = document.querySelector('#mobileBtnTwo')
const mobileMenu = document.querySelector('#mobileMenu')
const mobileMenuClose = document.querySelector('#mobileClose')

const changePos = () => {
    if (window.pageYOffset > 70) {
        stickyNav.classList.add('sticky')
        stickyNav.style.opacity = '1'
        stickyNav.style.pointerEvents = 'auto'
        mainNav.style.pointerEvents = 'none'
        mainNav.style.opacity = '0'
    } else {
        stickyNav.classList.remove('sticky')
        stickyNav.style.opacity = '0'
        stickyNav.style.pointerEvents = 'none'
        mainNav.style.opacity = '1'
        mainNav.style.pointerEvents = 'auto'
    }
}

const eventListeners = () => {
    window.onscroll = changePos;

    learnMoreBtnOne.addEventListener('click', () => {
        tooltip.classList.toggle('showModal')
    })
    learnMoreBtnTwo.addEventListener('click', () => {
        const tooltip = document.querySelector('.tooltip-two')
        tooltip.classList.toggle('showModal')
    })
    mobileBtnOne.addEventListener('click', () => {
        mobileMenu.classList.add('show-mobile')
    })
    mobileBtnTwo.addEventListener('click', () => {
        mobileMenu.classList.add('show-mobile')
    })
    mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('show-mobile')
    })



}


eventListeners()