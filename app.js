$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});

$(document).on('click', '.info-help', function(e) {
    e.preventDefault();
});

const currentYear = document.getElementsByClassName('current-year')[0];
currentYear.innerHTML = new Date().getFullYear();

const goToTopButton = document.getElementsByClassName('btn-go-to-top')[0];
goToTopButton.addEventListener('click', function() {
    scrollBackToTop();
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log('entry: ', entry);

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.body.onscroll = toggleBackToTopDisplay;

async function toggleBackToTopDisplay() {
    // REF: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollTop > 250) {
        goToTopButton.classList.remove('d-none');
        goToTopButton.classList.add('d-block');
    } else {
        goToTopButton.classList.remove('d-block');
        goToTopButton.classList.add('d-none');
    }
}

async function scrollBackToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}