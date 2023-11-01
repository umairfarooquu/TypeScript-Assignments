// Q16
console.log("\nQuestion Number 16\n");
// More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15.
// Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

console.log(
  `Hello friends ${fDinnerPerson}, I want to inform you that we invite more friends into our dinner party as we have much large space than before.`
);
fDinnerPerson.unshift("Zain");
fDinnerPerson.splice(3, 0, "Hassan");
fDinnerPerson.push("Asad");
console.log(`Welcome to my dinner party, "${fDinnerPerson}".`);
