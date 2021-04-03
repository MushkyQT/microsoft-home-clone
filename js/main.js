// Listen for click on menu btn to toggle 'show' class on mobile menu
document.querySelector('.menu-btn').addEventListener('click', function () {
    document.querySelector('.main-menu').classList.toggle('show')
    document.querySelector('#menu-toggle').classList.toggle('fa-times')
})
