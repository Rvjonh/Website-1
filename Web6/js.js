window.onload = inicio;

function inicio(){

    loadEventMenuInformation();
    loadEventMenu();
}

function loadEventMenuInformation(){
    let button = document.getElementById("button-information");
    let menu = document.getElementById("menu-information");

    button.addEventListener("click", (e)=>{
        e.preventDefault();
        menu.classList.toggle("open-menu");
    })
}

function loadEventMenu(){
    let button = document.getElementById("menu-button");
    let list = document.getElementById("list-menu");


    button.addEventListener("click", (e)=>{
        e.preventDefault();
        let i = list.classList.toggle("open-menu");
    })

}