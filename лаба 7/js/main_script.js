function registracion(){
    prompt("Укажите свой номер");
    alert("Спасибо, скоро вам позвонят!")
}
$(window).scroll(function (event) {
    let button = document.getElementById('scrollTop')
    let top = $(window).scrollTop();
     if(top >= 70){
        button.style.display = "";
     } 
     else {
        button.style.display = "none";
     }
});