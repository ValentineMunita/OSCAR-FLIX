$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function Info(){
    var texto = document.getElementById("INFO");
    var btn = document.getElementById("btnInfo");
    var ini = document.getElementById("inicio");

    if(texto.style.display === "none"){
    texto.style.display="flex";
    ini.style.display="none";
    
}else{
    texto.style.display="none";
    ini.style.display="inline";
}
}

function salvaid(ID)
{
  sessionStorage.setItem('1', ID );
}

