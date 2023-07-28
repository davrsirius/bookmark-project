const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsTabLink = document.querySelectorAll('.js-tab-link');
const elsTabPanels = document.querySelectorAll('.tabs__panel');

function deactivateTabItems() {
    elsTabsItem.forEach(function (elTabsItem) {
        elTabsItem.classList.remove('tabs__item--active');
    });
}

function deactivatePanels() {
    elsTabPanels.forEach(function (elTabPanel) {
        elTabPanel.classList.remove('tabs__panel--active');
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

        // remove active class from tabs__panels elements
        deactivatePanels();

        // show active tab panel 
        // eski kod
        //  const elTargetPanel = document.querySelector(`#${elTablink.href.split("#")[1]}`);

        const elTargetPanel = document.querySelector(elTablink.dataset.tabTarget);
        elTargetPanel.classList.add('tabs__panel--active')

        // console.log(elTablink.dataset.tabTarget);


        // console.log(elTablink.href.split("#")[1]);

    });

});
