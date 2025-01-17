const navMenu = documen.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close")

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classlist.add("show-menu")
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classlist.remove("show-menu")
    })
}

const navLinks = document.querySelector(".nav-link")

function linkAction() {
    const navMenu = document.getElementById(".nav-menu")

    navMenu.classList(n => n.addEventListener('click', linkAction))
}

function scrollheader() {
    const header = document.getElementById("header")

    if (this.scrollY >= 80) header.classList.add("scroll-header"); else header.classList.remove('scroll-header')
}
window.addEventListener("scroll", scrollheader)

const theme = document.querySelector("#theme-button");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
const colorPalette = document.querySelectorAll(".choose-color span");
var root = document.querySelector(":root");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

const closeThemeModal = (e) => {
    if(e.target.classlist.contains('customize-theme'))
    {
        themeModal.style.display = 'none';
    }
}
theme.addEventListener("click", openThemeModal);
themeModal.addEventListener("click", closeThemeModal);

const addEventListener = () => {
    fontSizes.forEach(size => {
        size.classList.remove("active");
    })
}
fontSizes.forEach(size => {
    size.addEventListener('click', () => {

        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if(size.classlist.contains('font-size-1'))
        {
            fontSize = '12px';
        }

        else if(size.classlist.contains('font-size-2'))
        {
            fontSize = '14px';
        }

        else if(size.classlist.contains('font-size-3'))
        {
            fontSize = '16px';
        }

        else if(size.classlist.contains('font-size-4'))
        {
            fontSize = '18px';
        }

        document.querySelector('html').style.fontSize = fontSize;
    } )
})

const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classlist.remove('active');
    })
}

colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }

        else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }

        else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }

        else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }

        else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add("active");
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

Bg1.addEventListener('click', () => {
    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');

    window.location.reload();
})

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    Bg3.classList.add('active');
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})

