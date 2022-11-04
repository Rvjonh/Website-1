function inicio(){
    document.getElementById("singin").addEventListener("click",cerrarLogin);
    document.getElementById("Cancelador").addEventListener("click",cerrarLogin);
    
    var modal = document.getElementById('LoginFrame');
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    let spans=document.getElementsByClassName("NumberRandom");
    for(let i=0 ; i<spans.length; i++){
        spans[i].innerHTML = Math.floor(Math.random()*1000);
    }

    //Get the button:
    let mybutton = document.getElementById("myBtn");
    mybutton.addEventListener("click",topFunction);

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    //funcion de MenuParaMovil
    let boton= document.getElementById("MenuMovilBoton");
    let botonCerrar = document.getElementById("botonCerrarMenuMovil");

    boton.addEventListener("click",desplegarCuadroMovil);
    botonCerrar.addEventListener("click",desplegarCuadroMovil);

    function desplegarCuadroMovil(){
        let menu = document.getElementById("MenuParaMovil");
        if(menu.style.display=="flex"){
            menu.style.display="none";
        }else{
            menu.style.display="flex";
        }
    }
}
function cerrarLogin(){
    if(document.getElementById('LoginFrame').style.display==='block'){
        document.getElementById('LoginFrame').style.display='none';
    }else{
        document.getElementById('LoginFrame').style.display='block';
    }
}
window.onload = inicio;