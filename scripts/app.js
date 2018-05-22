var cerrar = document.querySelector('.modal .close');
var modal = document.querySelector(".modal");
var imagenes = document.querySelectorAll('.strip li a');
var modalimg = document.querySelector('.modal img');

  cerrar.addEventListener("click",function(){
  modal.style.display="none";
})
  imagenes.forEach(imagen => {
  imagen.addEventListener("click",function(){
  modal.style.display="flex";
  modalimg.src= this.querySelector("img").src;
  })
})

