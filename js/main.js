const modifiers = {
    tabsItemActive: 'tabs__item--active',
    accordionItem: '.accordion__item',
    tabpanelsItemActive: 'tabpanels__item--active',
    accordionItemOpen: 'accordion__item--open'
}

const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsTabLink = document.querySelectorAll('.js-tab-link');
const elsTabPanels = document.querySelectorAll('.tabpanels__item');

const elsAccordionItem = document.querySelectorAll(modifiers.accordionItem);
const elsAccordionItemToggler = document.querySelectorAll('.accordion__item-toggler');


function deactivateAccordions () {
    elsAccordionItem.forEach(function (elAccordionItem){
        elAccordionItem.classList.remove(modifiers.accordionItemOpen);
    });
}

function deactivateTabItems() {
    elsTabsItem.forEach(function (elTabsItem) {
        elTabsItem.classList.remove(modifiers.tabsItemActive);
    });
}

function deactivatePanels() {
    elsTabPanels.forEach(function (elTabPanel) {
        elTabPanel.classList.remove(modifiers.tabpanelsItemActive);
    });
}



elsTabLink.forEach(function (elTablink) {
    elTablink.addEventListener('click', function (evt) {
        // prevent page move
        evt.preventDefault();

        // remove active class from tabs__item elements
        deactivateTabItems();

        // add active class to current tabs__item
        elTablink.parentElement.classList.add(modifiers.tabsItemActive);

        // remove active class from tabpanels__item elements
        deactivatePanels();

        // show active tab panel 
        // eski kod
        //  const elTargetPanel = document.querySelector(`#${elTablink.href.split("#")[1]}`);

        const elTargetPanel = document.querySelector(elTablink.dataset.tabTarget);
        elTargetPanel.classList.add(modifiers.tabpanelsItemActive)

        // console.log(elTablink.dataset.tabTarget);


        // console.log(elTablink.href.split("#")[1]);

    });

});


// Accordionga tegishli
elsAccordionItemToggler.forEach(function (elAccordionItemToggler) {
    elAccordionItemToggler.addEventListener('click', function () {
        
        deactivateAccordions();

        elAccordionItemToggler.closest(modifiers.accordionItem).classList.add(modifiers.accordionItemOpen);
        // elsAccordionItem.classList.add(modifiers.accordionItemOpen);
    });
}); 