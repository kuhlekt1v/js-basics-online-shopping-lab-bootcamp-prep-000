var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var addItem = new Object({ itemName: item, itemPrice: Math.floor(Math.random() * 101) });
  cart.push(addItem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var message = "In your cart, you have ";
  message = `${message}`;
  switch(cart.length) {
    case 0:
      message = "Your cart is empty.";
      break;
    case 1:
      message = `${message}${cart[0].itemName} at $${cart[0].itemPrice}.`;
      break;
    case 2:
      message = `${message}${cart[0].itemName} at $${cart[0].itemPrice}.`;
      break;
    case 3:
      message = `${message}${cart[2].itemName} at $${cart[2].itemPrice}.`;
      break;
  }
  return message;
}
  
  if ( cart.length == 0 ) {
    return "Your shopping cart is empty."
  } else {
    return message;
  }
}

function removeFromCart(itemName) {
  var itemToRemove = searchCartForItemToRemove(itemName)
  return itemToRemove ? removeItemFromCart(itemToRemove) : notifyUserThereIsNoItemToRemove()
}

function placeOrder(cardNumber) {
  if (arguments[0] == undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var sumToCharge = total()
    setCart([])
    return `Your total cost is $${sumToCharge}, which will be charged to the card ${cardNumber}.`
  }
}

