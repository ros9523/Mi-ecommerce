

// //ARREGLO DE OBJETOS/////////////////
const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'img/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'img/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'img/featured3.png',
      category: 'sweatshirts',
      quantity: 20
    }
  ]
 
const order={}; 

const areaDeImpresion= document.querySelector(".cart");

/***********************************************/
const totalAmount= document.querySelector(".shoppingTotal");
cart.addEventListener("click", (event) => {
  if (event.target.classList.contains("restar")) {
      const idProduct = parseInt(event.target.id);

      if (order[idProduct].amount === 1) {
          const res = confirm("Creo que te equivocastes");

          if (res) {
              delete order[idProduct];
          }
      } else {
          order[idProduct].amount--;
      }
  }

  if (event.target.classList.contains("sumar")) {
      const idProduct = parseInt(event.target.id);

      if (order[idProduct].quantity > order[idProduct].amount) { order[idProduct].amount++;
      } 
      
      else {
        alert("No hay :)");
      }
     
  }

  if (event.target.classList.contains("eliminar")) {
      const idProduct = parseInt(event.target.parentElement.id);

      const res = confirm("seguro quieres eliminar esto?");

      if (res) {
          delete order[idProduct];
      }

    }

      agregarAlcart();
      printShoppingCart()
      printTotalPrice()

    });

  
/************EVENTO DE CLICK AGREGAR Y PINTAR**********/

document.addEventListener('click', function(event){
if(event.target.classList.contains("button_products")) {  
const idProduct=parseInt(event.target.parentElement.dataset.id);

const [productoActual]=items.filter((n) => n.id===idProduct);

if(order[idProduct]){

  if (order[idProduct].quantity > order[idProduct].amount)
  {order[idProduct].amount++;}
  else{
  alert("No hay,ni modo, se acabo haha")}
    
}else {
  order[idProduct] = productoActual;
  order[idProduct].amount = 1;
}

  agregarAlcart();
  printShoppingCart();
  printTotalPrice();

}  
})


function agregarAlcart () {

  const myProducts= document.querySelector("#cart_counter");
  myProducts.textContent=Object.values(order).length;

}

function printShoppingCart()
 {
const shoppingArray = Object.values(order); 
 let html = "";
  
shoppingArray.forEach(({amount, id, name, price, image, category, quantity }) => 

{
      html += `

      <article class="cart__card">
          <div class="cart__box">
            <img src="${image}" alt="${name}" class="cart__img">
          </div>
  
          <div class="cart__details">

            <h3 class="cart__title">${name}</h3>
          
            <span class="cart__stock">Stock: ${quantity} |<span class="cart__price">${(price)}</span></span>
          
            <span class="cart__subtotal">
            Subtotal: ${amount*price}
            </span>
  
            <div class="cart__amount">

              <div class="cart__amount-content"> 

                <span class="sumar" id="${id}">+
                </span>

                <span class="cart__amount-number">${amount} units</span>

                <span class="restar"id="${id}">-
                </span>

              </div>

              <div class="cart_prices">
                <span id="cart_prices-item">
                  <span id="items-count">${amount}</span>Items</span>

                  <p>precio total:<span class="shoppingTotal"></span>
                  </p>
            </div>

          </div>
        </div>
      </article>`
    });
  
areaDeImpresion.innerHTML = html;
}

function printTotalPrice() {
  
  const shoppingArray = Object.values(order);

  let suma = 0;

  shoppingArray.forEach((n) => {
      suma += n.amount * n.price;
  });

totalAmount.textContent = suma;
}





//******FUNCIONALIDADES*********//
            
            //SHOW-CART//
const mycart=document.querySelector(".cart");
 bag.addEventListener("click", function(){
 mycart.classList.toggle("show-cart");
 });
    
              //LOAD//

window.addEventListener('load', function () {
const load=document.getElementById('load');

if (load) {
  setTimeout(() => {
    load.style.display = 'none'
  }, 3000)
}
})
        //DARK THEME MODE//


  const mainArea=document.querySelector("#identify");
  const image=document.querySelector(".home_image");
        
 dark_option.addEventListener('click', function(){
 mainArea.classList.toggle("apply_dark_theme");
        
dark_option.classList.toggle("remove");
sun_button.classList.toggle("appear");
        
});
           
sun_button.addEventListener('click', function(){
        
mainArea.classList.remove("apply_dark_theme");
        
dark_option.classList.toggle("appear");
sun_button.classList.toggle("remove");
        
});
        
   //SHOW HOME AND PRODUCTS AREA//
        
const locate=document.querySelector(".nav__menu");
        
nav_display.addEventListener('click',function(){
locate.classList.add("show_menu")
})
        
cancel.addEventListener('click',function(){
locate.classList.remove("show_menu")
});


        

        