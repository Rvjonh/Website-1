window.addEventListener('load', start);

function start(){
    
    menu_modal_manament();
}

function menu_modal_manament(){
    let button_modal = document.getElementById("button-modal");
    let menu_modal = document.getElementById("menu-modal");
    let button_close_menu = document.getElementById("button-close-menu");

    button_modal.addEventListener("click", (e)=>{
        e.preventDefault();
        menu_modal.classList.toggle("menu-actived");
    });
    
    button_close_menu.addEventListener("click", (e)=>{
        e.preventDefault();
        menu_modal.classList.toggle("menu-actived");
    })
}