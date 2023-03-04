const botaoMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('#menu');

botaoMenu.addEventListener('click', () => {
    if(menu.style.display == "none"){
        menu.style.display = "flex";
    }else{
        menu.style.display = "none";
    }
});