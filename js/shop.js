// Подключение JSON
const init = () => {
   $.getJSON("../json/products.json", getProducts);
};

// Получение товаров с JSON 
const getProducts = (data) => {
   let sets = data.sets;
   let rolls = data.rolls;
   let pizza = data.pizza;
   let newElement = "";

   for (let key in sets) {
      newElement += createElement(key, sets[key].name, sets[key].foodValue, sets[key].price, sets[key].image, sets[key].popular, sets[key].vegetarian, sets[key].new, sets[key].spicy);

      $(".sets-products").html(newElement);
   }

   newElement = "";
   for (let key in rolls) {
      newElement += createElement(key, rolls[key].name, rolls[key].foodValue, rolls[key].price, rolls[key].image, rolls[key].popular, rolls[key].vegetarian, rolls[key].new, rolls[key].spicy);

      $(".rolls-products").html(newElement);
   }

   newElement = "";
   for (let key in pizza) {
      newElement += createElement(key, pizza[key].name, pizza[key].foodValue, pizza[key].price, pizza[key].image, pizza[key].popular, pizza[key].vegetarian, pizza[key].new, pizza[key].spicy);

      $(".pizza-products").html(newElement);
   }
}

const btnClick = (e) => {
   e.preventDefault();
   console.log("hello");
};

const createElement = (productId, name, foodValue, price, image, popular, vegetarian, newDish, spicy) => {
   let elementModificator = "";
   if (newDish) {
      elementModificator += " new-dish";
   }
   if (popular) {
      elementModificator += " popular-dish";
   } else if (vegetarian) {
      elementModificator += " veg-dish";
   } else if (spicy) {
      elementModificator += " spicy-dish";
   }

   return `
   <div>
      <div class="carousel-item${elementModificator}">
         <div class="carousel-item__image">
            <img src="${image}" alt="set-1">
         </div>
         <div class="carousel-item__inner">
            <h3 class="carousel-item__name">${name}</h3>
            <p class="carousel-item__info">${foodValue}</p>
            <div class="carousel-item__wrap">
               <div class="carousel-item__price">${price} <sup>руб.</sup></div>
               <div class="carousel-item__count counter">
                  <div class="counter__btn counter__btn-minus">-</div>
                  <div class="counter__number">1</div>
                  <div class="counter__btn counter__btn-plus">+</div>
               </div>
            </div>
            <button class="btn carousel-item__btn" data-id="${productId}">В корзину</button>
         </div>
      </div>
   </div>
   `
};


$(document).ready(() => {
   init()
});