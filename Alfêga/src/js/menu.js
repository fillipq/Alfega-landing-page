const closeMenu = document.getElementById('close-menu');

function menuShow (){
    let menumobile = document.querySelector('.mobile-menu');

    if (menumobile.classList.contains('open')){
        menumobile.classList.remove('open')
    } else {
        menumobile.classList.add('open')
    }

    closeMenu.addEventListener('click', function() {
        menumobile.classList.remove('open');
      });
}

