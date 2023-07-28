/* variables */
const hamburgerOpen = document.querySelector(".hamburger-open")
const hamburgerClose = document.querySelector(".hamburger-close")
const hamburgerMenu = document.querySelector(".hamberger-menu")
const greyBackground = document.querySelector(".grey-background")
const hamburgerSection = document.querySelector(".hamburger-section")
const body = document.querySelector("body")

/* hamburger menu */
hamburgerOpen.addEventListener ( "click" , openHamburger)
hamburgerClose.addEventListener ( "click" , closeHamburger)

function openHamburger (e) {
    if (e.target.classList == "svg") {
        hamburgerMenu.classList.remove("hidden")
        hamburgerClose.classList.remove("hidden")
        hamburgerOpen.classList.add("hidden")
        body.style.backgroundColor = ("rgba(128, 128, 128, 0.5)")
        hamburgerSection.style.backgroundColor = ("white")
    }
}

function closeHamburger (e) {
    if (e.target.classList == "svg") {
    hamburgerMenu.classList.add("hidden")
    hamburgerClose.classList.add("hidden")
    hamburgerOpen.classList.remove("hidden")
    body.style.backgroundColor = ("white")
    hamburgerSection.style.backgroundColor = ("transparent")
    }
}

/* showing menu in desktop mode */
window.addEventListener('load', removeHiddenClass)
window.addEventListener('resize', removeHiddenClass);

function removeHiddenClass (){
    if (window.innerWidth > 600 ) {
        hamburgerMenu.classList.remove("hidden")
    }
}

window.addEventListener('load', addHiddenClass)
window.addEventListener('resize', addHiddenClass);

function addHiddenClass (){
    if (window.innerWidth < 599 ) {
        hamburgerMenu.classList.add("hidden")
    }
}
