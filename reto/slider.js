let btnMenu = document.getElementById('btn-menu');
let mainNav = document.getElementById('main-nav');
btnMenu.addEventListener('click', function(){
  mainNav.classList.toggle('mostrar');
});

const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
}

function Prev() {
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length -1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
}

btnRight.addEventListener('click', function(){
  Next();
});

btnLeft.addEventListener('click', function(){
  Prev();
});

setInterval(function(){
  Next();
}, 5000);
// Obtener elementos del carrito
const cartItems = document.querySelectorAll('.cart__item');
const cartTotal = document.querySelector('.cart__total');

// Calcular el total del carrito
function calculateTotal() {
  let total = 0;
  cartItems.forEach(item => {
    const price = parseFloat(item.querySelector('.cart__item-price').textContent.slice(1));
    const quantity = parseInt(item.querySelector('.cart__item-quantity').value);
    total += price * quantity;
  });
  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Actualizar total al cambiar la cantidad de un producto
cartItems.forEach(item => {
  const quantityInput = item.querySelector('.cart__item-quantity');
  quantityInput.addEventListener('change', () => {
    calculateTotal();
  });
});

// Eliminar un producto del carrito
cartItems.forEach(item => {
  const removeButton = item.querySelector('.cart__item-remove');
  removeButton.addEventListener('click', () => {
    item.remove();
    calculateTotal();
  });
});
