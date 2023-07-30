const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsTabLink = document.querySelectorAll('.js-tab-link');
const elsTabPanels = document.querySelectorAll('.tabpanels__item');

const elsAccordionItem = document.querySelectorAll('.accordion__item');
const elsAccordionItemToggler = document.querySelectorAll('.accordion__item-toggler');


function deactivateAccordions () {
    elsAccordionItem.forEach(function (elAccordionItem){
        elAccordionItem.classList.remove('accordion__item--open')
    });
}

function deactivateTabItems() {
    elsTabsItem.forEach(function (elTabsItem) {
        elTabsItem.classList.remove('tabs__item--active');
    });
}

function deactivatePanels() {
    elsTabPanels.forEach(function (elTabPanel) {
        elTabPanel.classList.remove('tabpanels__item--active');
    });
}



elsTabLink.forEach(function (elTablink) {
    elTablink.addEventListener('click', function (evt) {
        // prevent page move
        evt.preventDefault();

        // remove active class from tabs__item elements
        deactivateTabItems();

        // add active class to current tabs__item
        elTablink.parentElement.classList.add('tabs__item--active');

        // remove active class from tabpanels__item elements
        deactivatePanels();

        // show active tab panel 
        // eski kod
        //  const elTargetPanel = document.querySelector(`#${elTablink.href.split("#")[1]}`);

        const elTargetPanel = document.querySelector(elTablink.dataset.tabTarget);
        elTargetPanel.classList.add('tabpanels__item--active')

        // console.log(elTablink.dataset.tabTarget);


        // console.log(elTablink.href.split("#")[1]);

    });

});


// Accordionga tegishli
elsAccordionItemToggler.forEach(function (elAccordionItemToggler) {
    elAccordionItemToggler.addEventListener('click', function () {
        
        deactivateAccordions();

        elAccordionItemToggler.closest('.accordion__item').classList.add('accordion__item--open');
        // elsAccordionItem.classList.add('accordion__item--open');
    });
}); 