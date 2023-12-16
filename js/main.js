// show menu
const navMenu = document.getElementById('nav-menu');
    navToggle = document.getElementById('nav-toggle');
    navClose = document.getElementById('nav-close');

// menu show
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

// menu hidden
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

// change background header
function scrollHeader(){
    const header = document.getElementById('header');
    if(this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

const items = document.querySelectorAll('.questions_item')

items.forEach((item) => {
    const header = item.querySelector('.questions_header')
    header.addEventListener('click', () => {
        const open = document.querySelector('.accordion-open')
        toggle(item)
        if(open && open!== item){
            toggle(open)
        }
    })
})

const toggle = (item) => {
    const content = item.querySelector('.questions_content')
    if(item.classList.contains('accordion-open')){
        content.removeAttribute(('style'))
        item.classList.remove('accordion-open')
    } else{
        content.style.height = content.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home_data`)
sr.reveal(`.home_img`, {delay: 500})
sr.reveal(`.home_social`, {delay: 600})
sr.reveal(`.about_img, .contact_box`,{origin: 'left'})
sr.reveal(`.about_data, .contact_form`,{origin: 'right'})
sr.reveal(`.steps_card, .product_card, .questions_group, .footer`,{interval: 100})