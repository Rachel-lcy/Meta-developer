// Given variables
const dishData = [
  {
      name: "Italian pasta",
      price: 9.55
  },
  {
      name: "Rice with veggies",
      price: 8.65
  },
  {
      name: "Chicken with potatoes",
      price: 15.55
  },
  {
      name: "Vegetarian Pizza",
      price: 6.45
  }
];

const tax = 1.20;

// Step 1 - Implement getPrices()
function getPrices(taxBoolean) {
  for (let i = 0; i < dishData.length; i++) {
      let finalPrice;

      // Step 4: If taxBoolean is true, calculate price with tax
      if (taxBoolean === true) {
          finalPrice = dishData[i].price * tax;
      }
      // Step 5: If taxBoolean is false, use the base price
      else if (taxBoolean === false) {
          finalPrice = dishData[i].price;
      }
      // Step 6: If taxBoolean is not a boolean, show error message
      else {
          console.log("You need to pass a boolean to the getPrices call!");
          return;
      }

      // Step 7: Log the dish name and final price
      console.log("Dish: " + dishData[i].name + " Price: $" + finalPrice.toFixed(2));
  }
}

// Step 8 - Implement getDiscount()
function getDiscount(taxBoolean, guests) {
  // Step 9: Call getPrices with taxBoolean
  getPrices(taxBoolean);

  // Step 10: Check if guests is a valid number between 0 and 30
  if (typeof guests === 'number' && guests > 0 && guests < 30) {
      let discount = 0;

      // Step 11: Apply discount based on number of guests
      if (guests < 5) {
          discount = 5;
      } else if (guests >= 5) {
          discount = 10;
      }
      console.log('Discount is: $' + discount);
  } else {
      // Step 12: Handle invalid guests argument
      console.log('The second argument must be a number between 0 and 30');
  }
}

// Step 13: Call getDiscount() with various arguments
getDiscount(true, 2); // Example call
getDiscount(false, 10); // Example call
getDiscount(true, 'invalid'); // Example with invalid argument
var result = 0;

for(var i = 0; i < 5; i++) {
    result += 2;
}

console.log(result);