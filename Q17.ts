// Q17
console.log("\nQuestion Number 17\n");
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a
// message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list.
// Each time you pop a name from your list, print a message to that person letting
// them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list.
//  Print your list to make sure you actually have an empty list at the end of your program.

console.log(
  "Sorry, friends we have space only for 2 people as I got information from Restuarent\n"
);
console.log(
  `Sorry to inform ${fDinnerPerson[5]} I not going to invite you today\n`
);
fDinnerPerson.pop();

console.log(
  `Sorry to inform ${fDinnerPerson[4]} I not going to invite you today\n`
);
fDinnerPerson.pop();

console.log(
  `Sorry to inform ${fDinnerPerson[3]} I not going to invite you today\n`
);
fDinnerPerson.pop();

console.log(
  `Sorry to inform ${fDinnerPerson[2]} I not going to invite you today\n`
);
fDinnerPerson.pop();

console.log(`Hello ${fDinnerPerson}, You are still invited`);

fDinnerPerson.length = 0; //making length empty

console.log(fDinnerPerson);
