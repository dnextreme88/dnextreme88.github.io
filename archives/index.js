import { items } from "./archives_items.js";

var currentPage = 1;
var recordsPerPage = 18;
var allItems = [];
var filteredItems = [];
var isFiltering = false;

$(document).ready(function() {
    allItems = items;

    changePage(1, allItems);

    var nextButton = document.getElementById('btn-next');
    var prevButton = document.getElementById('btn-prev');

    prevButton.addEventListener('click', e => {
        e.preventDefault();

        prevPage();
    });

    nextButton.addEventListener('click', e => {
        e.preventDefault();

        nextPage();
    });

    console.log('Archives script initialized.');
});

const currentYear = document.getElementsByClassName('current-year')[0];
currentYear.innerHTML = new Date().getFullYear();

const goToTopButton = document.getElementsByClassName('btn-go-to-top')[0];
goToTopButton.addEventListener('click', function() {
    scrollBackToTop();
});

document.body.onscroll = toggleBackToTopDisplay;

document.getElementById('search-archives-input').addEventListener('keyup', e => {
    searchAndFilter();
});

document.getElementById('clear-search-input').addEventListener('click', e => {
    resetData();
});

function searchAndFilter() {
    const startTime = performance.now();

    isFiltering = true;
    const searchValue = document.getElementById('search-archives-input').value.toLowerCase();
    const alert = document.getElementsByClassName('no-results-found')[0];

    const alertHasResults = document.getElementsByClassName('has-results-found')[0];
    const filterElapsedTime = document.getElementsByClassName('filter-elapsed-time')[0];

    toggleElementDisplay(alert, 'hide');
    toggleElementDisplay(alertHasResults, 'hide');

    const archivesList = document.getElementById('archives-list');
    archivesList.innerHTML = '';

    filteredItems = allItems.filter(object => Object.values(object).some(i => String(i).toLowerCase().includes(searchValue)));

    changePage(1, filteredItems);

    const endTime = performance.now();

    const hasResults = archivesList.querySelectorAll('figure');
    if (hasResults.length == 0) {
        toggleElementDisplay(alert, 'show');
    } else {
        toggleElementDisplay(alertHasResults, 'show');
        filterElapsedTime.innerHTML = (endTime - startTime).toFixed(2);
    }
}

function resetData() {
    isFiltering = false;
    filteredItems = [];

    const alert = document.getElementsByClassName('no-results-found')[0];
    toggleElementDisplay(alert, 'hide');

    currentPage = 1;
    changePage(currentPage, allItems);
}

function toggleElementDisplay(element, type) {
    if (type == 'show') {
        element.classList.remove('d-none');
    } else if (type == 'hide') {
        element.classList.add('d-none');
    }
}

function generateMarkup(items) {
    const itemsMarkup = [];

    for (let index = 0; index < items.length; index++) {
        itemsMarkup.push(`
            <figure class="d-block">
                <figcaption class="item-title">${items[index]['name']}
                    ${items[index].hasOwnProperty('notes') ?
                    `<sup><a href="#" class="archives-help" data-bs-title="Notes Help" data-bs-content="${items[index]['notes']}" data-toggle="popover"><i class="fa fa-info-circle" title="Notes"></i></a></sup>` :
                    ''
                }
                </figcaption>

                <div class="mb-2 mx-auto img-container" data-img-location="assets/images/${items[index]['imageLocation']}">
                    <div class="mx-auto loader"></div>
                    <span class="position-relative loader-text">Loading</span>
                </div>

                <table class="table table-striped">
                    <tr class="price">
                        <td>Price</td>
                        <td>${items[index]['price']}</td>
                    </tr>
                    <tr>
                        <td>Condition</td>
                        <td>${items[index]['condition']}</td>
                    </tr>
                    <tr>
                        <td>Size</td>
                        <td>${items[index]['size']}</td>
                    </tr>
                    <tr>
                        <td>Sold on</td>
                        <td>${items[index]['dateSold']}</td>
                    </tr>
                </table>
            </figure>
        `);
    }

    return itemsMarkup;
}

function prevPage() {
    $('[data-toggle="popover"]').popover('hide');

    const arrayToUse = !isFiltering ? allItems : filteredItems;

    if (currentPage > 1) {
        currentPage--;

        changePage(currentPage, arrayToUse);
    }
}

function nextPage() {
    $('[data-toggle="popover"]').popover('hide');

    const arrayToUse = !isFiltering ? allItems : filteredItems;

    if (currentPage < numPages(arrayToUse)) {
        currentPage++;

        changePage(currentPage, arrayToUse);
    }
}

function changePage(page, itemsArray) {
    console.log('page:', page);

    const itemsInPage = [];
    var itemsInPageMarkup = [];

    const elementToPopulate = document.getElementById('archives-list');
    const numberOfPages = numPages(itemsArray);

    // Validate page
    if (page < 1) page = 1;
    if (page > numberOfPages) page = numberOfPages;

    const startingIndex = (page - 1) * recordsPerPage;
    elementToPopulate.innerHTML = '';

    if (itemsArray.length > 0) {
        for (let i = startingIndex; i < (page * recordsPerPage) && i < itemsArray.length; i++) {
            itemsInPage.push(itemsArray[i]);
        }
    }

    const filterNumResults = document.getElementsByClassName('filter-num-results')[0];
    filterNumResults.innerHTML = `${itemsArray.length < recordsPerPage ? itemsArray.length : startingIndex + itemsInPage.length} of ${itemsArray.length} results.`;

    itemsInPageMarkup = generateMarkup(itemsInPage);
    elementToPopulate.innerHTML = itemsInPageMarkup.join('');

    const itemImages = Object.values(document.getElementsByClassName('img-container'));
    itemImages.forEach(image => {
        const url = image.getAttribute('data-img-location');

        const img = document.createElement('img');
        img.setAttribute('src', image.getAttribute('data-img-location'));
        img.setAttribute('class', 'mb-2 border border-4 rounded-circle lazyloading');
        img.setAttribute('width', 240);
        img.setAttribute('height', 240);
        img.setAttribute('loading', 'lazy');
        image.appendChild(img);

        img.addEventListener('load', function() {
            image.getElementsByClassName('loader')[0].remove();
            image.getElementsByClassName('loader-text')[0].remove();

            img.classList.remove('lazyloading');
            img.classList.add('lazyloaded');
            console.log('Loaded:', url);
        });
    });

    const nextButton = document.getElementById('btn-next');
    const prevButton = document.getElementById('btn-prev');
    const pageNav = document.getElementById('page');
    pageNav.innerHTML = `${page}/${numberOfPages}`;

    if (page == 1) {
        toggleElementDisplay(prevButton, 'hide');
    } else {
        toggleElementDisplay(prevButton, 'show');
    }

    if (page == numberOfPages) {
        toggleElementDisplay(nextButton, 'hide');
    } else {
        toggleElementDisplay(nextButton, 'show');
    }

    $('[data-toggle="popover"]').popover();

    const archivesHelp = Object.values(document.getElementsByClassName('archives-help'));
    archivesHelp.forEach(popover => {
        popover.addEventListener('click', e => {
            e.preventDefault();
        });
    });
}

function numPages(itemsArray) {
    return Math.ceil(itemsArray.length / recordsPerPage);
}

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
