// Q2
console.log("Question Number 2\n");
// Personal Message: Store a person’s name in a variable,
// and print a message to that person. Your message should be simple,
// such as, “Hello Eric, would you like to learn some Python today?”

let PersonName: string = "Eric";
console.log(`Hello ${PersonName}, would you like to learn some Python today?`);

// Q3
console.log("\nQuestion Number 3\n");
// Name Cases: Store a person’s name in a variable, and then
// print that person’s name in lowercase, uppercase, and titlecase.

let Name: string = "Umair Farooq";
let LoverCase: string = Name.toLowerCase();
let UpperCase: string = Name.toUpperCase();
console.log(
  `The Person Original name is "${Name}", and the Person Name in Uppercase is "${UpperCase}" and the Person Name in LowerCase is "${LoverCase}"`
);

// Q4
console.log("\nQuestion Number 4\n");
// Famous Quote: Find a quote from a famous person you admire.
// Print the quote and the name of its author.
// Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

console.log(
  "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
);

// Q5
console.log("\nQuestion Number 5\n");
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s
// name in a variable called famous_person. Then compose your message and
// store it in a new variable called message. Print your message.

let FamousPerson: string = "Albert Einstein";
let quote: string =
  "A person who never made a mistake never tried anything new.";
console.log(`${FamousPerson} once said,"${quote}"`);

// Q6
console.log("\nQuestion Number 6\n");
// Stripping Names: Store a person’s name, and include some whitespace
// characters at the beginning and end of the name. Make sure you use
// each character combination, "\t" and "\n", at least once.
// Print the name once, so the whitespace around the name is displayed.
// Then print the name after striping the white spaces.

let myName: string = "Mirza\n Umair\t Farooq";
console.log(myName);

// Q7
console.log("\nQuestion Number 7\n");
// Number Eight: Write addition, subtraction, multiplication,
// and division operations that each result in the number 8.
// Be sure to enclose your operations in print statements to see the results.

console.log("Addition", 5 + 3);
console.log("Subtraction", 10 - 2);
console.log("Multiplication", 4 * 2);
console.log("Divion", 16 / 2);

// Q8
console.log("\nQuestion Number 8\n");
// You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.

console.log("Addition", 5 + 3);
console.log("--------------------");
console.log("Subtraction", 10 - 2);
console.log("--------------------");
console.log("Multiplication", 4 * 2);
console.log("--------------------");
console.log("Divion", 16 / 2);

// Q9
console.log("\nQuestion Number 9\n");
// Favorite Number: Store your favorite number in a variable.
// Then, using that variable, create a message that
// reveals your favorite number. Print that message.

let favoriteNumber: number = 13;
console.log(`My favorite Number is ${favoriteNumber}`);

// Q10
console.log("\nQuestion Number 10\n");
// Adding Comments: Choose two of the programs you’ve written,
// and add at least one comment to each. If you don’t have
// anything specific to write because your programs are too
// simple at this point, just add your name and the current
// date at the top of each program file.
// Then write one sentence describing what the program does.

//Comment
//This Program shows my favorite Number that is 13.
console.log(`My favorite Number is ${favoriteNumber}`);

// Q11
console.log("\nQuestion Number 11\n");
// Names: Store the names of a few of your friends in
// a array called names. Print each person’s name by
// accessing each element in the list, one at a time.

let freindsArray = ["Ali", "Arslan", "Ahmed", "Umair", "Bilal"];
console.log(freindsArray[0]);
console.log(freindsArray[1]);
console.log(freindsArray[2]);
console.log(freindsArray[3]);
console.log(freindsArray[4]);

// Q12
console.log("\nQuestion Number 12\n");
// Greetings: Start with the array you used in Exercise 11,
// but instead of just printing each person’s name,
// print a message to them. The text of each message
// should be the same, but each message should be
// personalized with the person’s name.

console.log(`Hi ${freindsArray[0]},"How are Your"`);
console.log(`Hi ${freindsArray[1]},"How are Your"`);
console.log(`Hi ${freindsArray[2]},"How are Your"`);
console.log(`Hi ${freindsArray[3]},"How are Your"`);
console.log(`Hi ${freindsArray[4]},"How are Your"`);

// Q13
console.log("\nQuestion Number 13\n");
// Your Own Array: Think of your favorite mode of transportation,
// such as a motorcycle or a car, and make a list that stores
// several examples. Use your list to print a series of
// statements about these items, such as “I would like to own a Honda motorcycle.”

let fModeArray = ["Suzuki", "Honda", "Tesla"];
console.log(`Really, I don't like ${fModeArray[0]}`);
console.log(`Are You know my favorite car is ${fModeArray[1]}`);
console.log(`I have dream to own and drive ${fModeArray[2]}`);

// Q14
console.log("\nQuestion Number 14\n");
// Guest List: If you could invite anyone, living or deceased,
// to dinner, who would you invite? Make a list that includes
// at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.

let fDinnerPerson = ["Ali", "Arslan", "Ahmed"];
console.log(
  `Hi ${fDinnerPerson[0]},"If you would have an free time today I want to invite you today at dinner"`
);
console.log(
  `Hi ${fDinnerPerson[1]},"If you would have an free time today I want to invite you today at dinner"`
);
console.log(
  `Hi ${fDinnerPerson[2]},"If you would have an free time today I want to invite you today at dinner"`
);
console.log(`Welcome to my dinner party, ${fDinnerPerson}`);

// Q15
console.log("\nQuestion Number 15\n");
// Changing Guest List: You just heard that one of your guests
// can’t make the dinner, so you need to send out a new set of invitations.
// You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14.
// Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

console.log(`${fDinnerPerson[1]}, "can't make it to the party"`);
fDinnerPerson.splice(1, 1, "Umair");
console.log(`Welcome to my dinner party, ${fDinnerPerson}`);

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

// Q19
console.log("\nQuestion Number 19\n");
// Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.
console.log(
  `We are finally going to invite just ${fDinnerPerson.length} people as we haven't space.`
);

// Q20
console.log("\nQuestion Number 20\n");
/*Think of something you could store in a array. For example, 
you could make a list of mountains, rivers, countries, cities, 
languages, or anything else you’d like. Write a program that 
creates a list containing these items.*/
let popularCities = ["Lahore", "Islamabad", "Karachi", "Multan"];
for (const cities of popularCities) {
  console.log(`Pakistan Popular Cities is: ${cities}`);
}

// Q21
console.log("\nQuestion Number 21\n");
/*They think of something you could store in a TypeScript Object. 
Write a program that creates Objects containing these items.*/
interface myFavoriteCars {
  Model_Year: number;
  Company_Make: string;
  Engine: string;
}
const favoriteCars: myFavoriteCars[] = [
  { Model_Year: 2022, Company_Make: "Honda", Engine: "Auto" },
  { Model_Year: 2019, Company_Make: "Suzuki", Engine: "Manual" },
  { Model_Year: 2020, Company_Make: "BMW", Engine: "Auto" },
];
for (const cars of favoriteCars) {
  console.log(`Model Year: ${cars.Model_Year}`);
  console.log(`Company Make: ${cars.Company_Make}`);
  console.log(`Engine:${cars.Engine}`);
  console.log("!---------------------------!");
}
