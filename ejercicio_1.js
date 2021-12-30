/* ------------------ PRACTICA CLASE JS-DOM,Eventos y Window API. SUMMER TRAINING 2022 - SNAPPLER ---------------------- 

 1 ). Ver detalle de carrito.

    - Abrir el 'detalle de carrito' (Ya implementado) al presionar dos veces sobre el icono del mismo, del mismo modo cerrarlo al tocar en "X cerrar".
     
    TIP: Probar qué sucede agregando la clase 'visible' en el nodo del detalle, utilizando DevTools del navegador (Ctrl+Shift+I). Replicarlo utilizando selectors y event handlers.


 ---------------------------------------------------------------------------------------------- */
//Implementar...
const cart = document.querySelector("#cartDetail");
const cartBtn = document.querySelector("#openCart");
const closeCartBtn = document.querySelector("#closeCart");

function toggleCartDetail() {
  cart.classList.toggle("visible");
}

if (cartBtn) cartBtn.addEventListener("click", toggleCartDetail);
if (closeCartBtn) closeCartBtn.addEventListener("click", toggleCartDetail);
