'use script'


const buttonCollapse = document.getElementById('buttonCollapse')

buttonCollapse.addEventListener('click', function () {
    let nav = document.getElementById('navbar-sticky')
    if (nav.classList.contains('hidden')) {
        nav.classList.remove('hidden')

    }
    else {

        nav.classList.add('hidden')
    }
    console.log('cliquee')
})