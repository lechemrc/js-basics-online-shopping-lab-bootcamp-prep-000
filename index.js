var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor((Math.random() * 100) + 1);
 var newPrice = {itemPrice: `${price}`};
 item = {itemName: `${item}`, itemPrice: `${price}`};
 cart.push(item);
 
 return (`${item} has been added to your cart.`);
}

function viewCart(cart) {
  let i = 0;
  while (i < cart.length){
    return (`In your cart, you have ${cart[i]} at ${price[i]}, ${cart[i+1]} at ${price[i+1]}, ${cart[i+2]} at ${price[i+2]}`);
  }
  return ("Your shopping cart is empty.");
}

function total() {
  let i = 0;
  var addPrice = [];
  while (i < cart.length){
    i++;
  }
  return (cart);
}

function removeFromCart(item) {
  let i = 0;
  while (i < cart.length){
    cart.pop();
  }
  return ("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  
}