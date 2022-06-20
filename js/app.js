const $compartir = document.querySelector('.compartir')
const $redes = document.querySelector('.redes')

$compartir.addEventListener('click', e => {
    $redes.classList.toggle('redes--active')
    e.target.classList.toggle('compartir--active')
})