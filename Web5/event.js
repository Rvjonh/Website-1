window.onload = beggining;

function beggining(){
    handlEventImageExample();
    hadnlEventChangedImage();
}

function handlEventImageExample(){
    let arr = document.getElementsByClassName("secs");
    for(let i=0 ; i<arr.length ; i++){
        arr[i].addEventListener("click", changeImage);
    }
}

function changeImage(event){
    let img = document.getElementById("main-image");
    let description = document.getElementById("main-image-description");
    let frame = document.getElementById("image-frame");

    img.src = event.target.parentNode.children[0].src;
    description.textContent = event.target.parentNode.children[1].textContent;
    frame.classList.toggle("lighting-effect");

    let cleanAnimation = setTimeout(() => {
        /* frame.classList.toggle("lighting-effect"); */
        frame.classList.remove("lighting-effect");
        clearInterval(cleanAnimation);
    }, 200);
}

function hadnlEventChangedImage(){
    let img = document.getElementById("main-image");

    img.addEventListener("change", (e)=>{
        console.log("image changed");
    })
}