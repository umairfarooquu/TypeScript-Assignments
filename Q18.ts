// Q18
console.log("\nQuestion Number 18\n");
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// 1- Store the locations in a array. Make sure the array is not in alphabetical order.
let favoritePlaces = ["Spain", "China", "Maldiv", "Dubai", "Saudi Arabia"];
// 2- Print your array in its original order.
console.log("\nOriginal order:");
console.log(favoritePlaces);
// 3- Print your array in alphabetical order without modifying the actual list.
console.log("\nAlphabetical order:");
console.log([...favoritePlaces].sort());
// 4- Show that your array is still in its original order by printing it again.
console.log("\nStill Original order:");
console.log(favoritePlaces);
// 5- Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\nReverse order list:");
console.log(favoritePlaces.reverse());
// 6- Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\nReverse order list again:");
console.log(favoritePlaces.reverse());
// 7- Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\nAlphabetical order again:");
console.log(favoritePlaces.sort());
// 8- Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\nReverse alphabetical order:");
console.log(favoritePlaces.reverse());
