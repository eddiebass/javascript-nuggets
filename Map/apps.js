// Facts about MAP method
/* 
- Always return a new array
- Does not change the size of original array (unlike filter)
- Uses values from original array when making new one
 */

const people = [
	{
		name: "bob",
		age: 20,
		position: "developer",
	},
	{
		name: "anna",
		age: 25,
		position: "designer",
	},
	{
		name: "susy",
		age: 30,
		position: "the boss",
	},
];
//setting up a function
const getAges = (person) => person.age * 2;

// Referencing the function
const ages = people.map(getAges);

console.log(ages);

//To return an object
const newPeople = people.map((person) => {
	return { firstName: person.name.toUpperCase(), newAge: person.age + 10 };
});

console.log(newPeople);

//To return a map method in html
const names = people.map((person) => {
	return `<h2>${person.name}</h2>`;
});

const result = document.querySelector("#result");
result.innerHTML = names.join("");
