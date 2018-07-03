
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let price = Math.floor(Math.random() * 100) + 1;
 var newItem = {itemName: item, itemPrice: price};
 cart.push(newItem);
 console.log(cart);
 return (`${item} has been added to your cart.`);
}


function viewCart() {
  let i = 0;
  let price = Math.floor(Math.random() * 100) + 1;
  if (cart.length == 1){
    return ("In your cart, you have " + cart[0].itemName + " at " + "$" + cart[0].itemPrice + ".");
  }
  
  else if (cart.length > 1) {
    let cartString = 'In your cart, you have ';
     for (i = 0; i < cart.length - 1; i++){
       cart[i].itemName;
       cartString += cart[i].itemName + " at " + "$" + cart[i].itemPrice + ", ";
     }
      cartString += "and " + cart[cart.length - 1].itemName + " at " + "$" + cart[cart.length - 1].itemPrice + ".";
     return (cartString); 
  }
  
  else{
  return ("Your shopping cart is empty.");
  }
}

function total() {
  let i = 0;
  let addPrice = 0;
  for (i =0; i < cart.length; i++){
    addPrice += cart[i].itemPrice;
  }
  return (addPrice);
}

<<<<<<< HEAD
function removeFromCart(item) {
  console.log(item);
  for (let i = 0; i < cart.length; i++){  
    if (cart[i].itemName === item) {
      cart.prototype.splice(i, 1);
    }
    else {
    return ("That item is not in your cart.");
    }
  }
  return cart;
=======
function removeFromCart(itemName) {
  
  return ("That item is not in your cart.");
>>>>>>> 26b131791ab628ff88abeecbe5595c1eecd7ff76
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return ("Sorry, we don't have a credit card on file for you.");
  }
  else {
<<<<<<< HEAD
    let addPrice = total();
    cart = [];
    return (`Your total cost is $${addPrice}, which will be charged to the card ${cardNumber}.`);
=======
    total();
    cart = [];
    return (`your total cost is ${total()}, which will be charged to the card ${cardNumber}.`);
>>>>>>> 26b131791ab628ff88abeecbe5595c1eecd7ff76
  }

}

