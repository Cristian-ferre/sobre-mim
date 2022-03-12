//scroll suave

const linksinternos = document.querySelectorAll('.headerprincipal a[href^="#"]');

function scrolltosection (event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView ({
        behavior: 'smooth',
        block: 'start'
    });
}

linksinternos.forEach((link) => {
    link.addEventListener('click', scrolltosection);
});
