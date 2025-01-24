// navbar-fixed

// window.onscroll = function ( ) {
//     const header = document.querySelector('header');
//     const fixedNav = header.offsetTop;

//     if (window.scrollY > fixedNav) {
//         header.classList.add('navbar-fixed');
//     } else {
//         header.classList.remove('navbar-fixed');
//     }
// };

// // hamburger


// const humberger = document.getElementById('humberger');
// const navMenu = document.getElementById('nav-menu');

// humberger.addEventListener('click', function() {
//     humberger.classList.toggle('humberger-active');
//     navMenu.classList.toggle('hidden');
// });

//animation

function delay (ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function loadUI () {
    window.onload = async  () => {
        const title = document.querySelector('.title');
        const statement = document.querySelector('.statement');
        const profil_image = document.querySelector('.profil-image');
        const profil_component = document.querySelector('.profil-component');
        const button_contact = document.querySelector('.contact-button');

        const transfomTitle = !title.classList.contains('transform-right-title') ? (title.classList.add('transform-right-title')) : title.classList.remove('transform-right-title');
        await delay(1000);
        const transformStatement = !statement.classList.contains('transform-right-title') ? (statement.classList.add('transform-right-title')) : statement.classList.remove('transform-right-title');
        await delay(500);
        const transformProfil_component = !profil_component.classList.contains('transform-left') ? (profil_component.classList.add('transform-left')) : profil_component.classList.remove('transform-left');
        await delay(500);
        const transformProfil_image = !profil_image.classList.contains('tranform-profil') ? (profil_image.classList.add('tranform-profil')) : profil_image.classList.remove('tranform-profil');
        await delay(500);
        const tranformButton_contact = !button_contact.classList.contains('contact-button-transform') ? (button_contact.classList.add('contact-button-transform')) : button_contact.classList.remove('contact-button-transform');

    }
}

function contactButtonOnClick() {
    const button_contact = document.querySelector('.contact-button');
    const linkA = document.getElementById('contact-link');
    const link_Social_Media = document.getElementById('social-media-wa');
    const link_Social_Media2 = document.getElementById('social-media-instagram');

    
        button_contact.addEventListener('click', async (e) => {
        
            button_contact.classList.toggle('active');
            linkA.classList.toggle('anu');
            link_Social_Media.classList.toggle('active');
            link_Social_Media2.classList.toggle('active');
           
        });
   
}





contactButtonOnClick();
loadUI();
