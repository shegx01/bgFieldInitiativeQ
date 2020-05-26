// Nav Section
const mainNav = document.querySelector('#mainNav')
const stickyNav = document.querySelector('#stickyNav')
const learnMoreBtnOne = document.querySelector('#learnMoreOne')
const learnMoreBtnTwo = document.querySelector('#learnMoreTwo')

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
       const tooltip = document.querySelector('.tooltip-one')
       tooltip.classList.toggle('showModal')
    })
    learnMoreBtnTwo.addEventListener('click', () => {
       const tooltip = document.querySelector('.tooltip-two')
       tooltip.classList.toggle('showModal')
    })
}

eventListeners()