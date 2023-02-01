const restaurant = {
  name : "Raihan",
  city : "Jakarta",
  "favorite drink" : "Es Teh Manis",
  "favorite food" : "Nasi Goreng",
  isVegan : false,
}

const name = restaurant.name;
const favoriteDrink = restaurant["favorite drink"];
console.log(name, favoriteDrink);
module.exports = { restaurant, name, favoriteDrink };

