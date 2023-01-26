const initialFacts = [
	{
		id: 1,
		text: 'React is being developed by Meta (formerly facebook)',
		source: 'https://opensource.fb.com/',
		category: 'technology',
		votesInteresting: 24,
		votesMindblowing: 9,
		votesFalse: 4,
		createdIn: 2021
	},
	{
		id: 2,
		text: 'Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%',
		source:
			'https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids',
		category: 'society',
		votesInteresting: 11,
		votesMindblowing: 2,
		votesFalse: 0,
		createdIn: 2019
	},
	{
		id: 3,
		text: 'Lisbon is the capital of Portugal',
		source: 'https://en.wikipedia.org/wiki/Lisbon',
		category: 'society',
		votesInteresting: 8,
		votesMindblowing: 3,
		votesFalse: 1,
		createdIn: 2015
	}
];

const CATEGORIES = [
	{ name: 'technology', color: '#3b82f6' },
	{ name: 'science', color: '#16a34a' },
	{ name: 'finance', color: '#ef4444' },
	{ name: 'society', color: '#eab308' },
	{ name: 'entertainment', color: '#db2777' },
	{ name: 'health', color: '#14b8a6' },
	{ name: 'history', color: '#f97316' },
	{ name: 'news', color: '#8b5cf6' }
];

// console.log(CATEGORIES.find((cat) => cat.name === 'society').color);
//We get the category with the object of color back. {name: 'society', color: '#eab308'}
// with .color we get: #eab308

// Selecting DOM elements
const btn = document.querySelector('.btn-open');
const form = document.querySelector('.fact-form');
const factsList = document.querySelector('.facts-list');

// Create DOM elements: Render facts in list
factsList.innerHTML = ''; //Clears list. Runs immediately at beginning.

// Load data from Supabase
loadFacts();

async function loadFacts() {
	const res = await fetch(
		'https://gjvjdpmdfjmobqqajlyg.supabase.co/rest/v1/facts',
		{
			headers: {
				apikey:
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqdmpkcG1kZmptb2JxcWFqbHlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM2NTM3NjUsImV4cCI6MTk4OTIyOTc2NX0.07wW5tmXsdMYrQ2lvKlju486wl5IhEx6LRLChJuJKOI',
				authorization:
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqdmpkcG1kZmptb2JxcWFqbHlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM2NTM3NjUsImV4cCI6MTk4OTIyOTc2NX0.07wW5tmXsdMYrQ2lvKlju486wl5IhEx6LRLChJuJKOI'
			}
		}
	);
	const data = await res.json();
	// console.log(data);

	// const filteredData = data.filter((fact) => fact.category === 'technology');
	//console.log(filteredData);

	createFactsList(data);
}

// createFactsList(initialFacts);
function createFactsList(dataArray) {
	// factsList.insertAdjacentHTML('afterbegin', '<li>Susie</li>');

	// Loop over arrays
	const htmlArr = dataArray.map(
		(fact) => `<li class='fact'>
	<p>
	${fact.text}
			<a
				class="source"
				href="${fact.source}"
				target="_blank"
			>(Source)</a>
	</p>
	<span class="tag" style="background-color: ${
		CATEGORIES.find((cat) => cat.name === fact.category).color
	}">${fact.category}</span>
	</li>`
	);

	const html = htmlArr.join('');
	factsList.insertAdjacentHTML('afterbegin', html);
}

// Toggle form visibility
btn.addEventListener('click', function () {
	if (form.classList.contains('hidden')) {
		form.classList.remove('hidden');
		btn.textContent = 'Close';
	} else {
		form.classList.add('hidden');
		btn.textContent = 'Share a fact';
	}
});

// Filter function. Filter method like the map method loops over the array but in a different way. It checks if condition returns true or false. If true, included in final new array.
console.log([7, 64, 6, -23, 11].filter((el) => el > 10));

// Find method only returns a value. The 1st value where the condition is true. So here it's 64
console.log([7, 64, 6, -23, 11].find((el) => el > 10));

/*
let votesInteresting = 23;
let votesMindblowing = 5;
const text = 'Libson is the capital of Portugal';

votesInteresting = votesInteresting + 1;
votesInteresting++;
console.log(votesInteresting);

let totalUpvotes = votesInteresting + votesMindblowing;
console.log('Upvotes:', totalUpvotes);

let votesFalse = 4;
const isCorrect = votesFalse < totalUpvotes;
console.log(isCorrect);

console.log((parseInt)('24.533cc));
*/

/*
function calcFactAge(year) {
	const currentYear = new Date().getFullYear();
	//2022 - 2015
	const age = currentYear - year;

	if (age >= 0) return age;
	else
		return `Impossible year! Year needs to be less or equal to ${currentYear}`;
}
/*
const age1 = calcFactAge(2015);
console.log(age1);
console.log(calcFactAge(2020));
console.log(calcFactAge(2037));

// (year) is the input, then => then whatever value comes then (new Date().getFullYear() - year; will be returned from the function. Which is 8.
// const calcFactAge2 = (year) => new Date().getFullYear() - year;
// console.log(calcFactAge2(2015)); // 8
// console.log(calcFactAge2(2037)); // -14

// const calcFactAge2 = (year) => 2022 -year;
// Lets use a ternary operator on the above code like this:
const calcFactAge2 = (year) =>
	year <= new Date().getFullYear()
		? new Date().getFullYear() - year
		: `Impossible year! Year needs to be less or equal to ${new Date().getFullYear()}`;

console.log(calcFactAge2(2015));
console.log(calcFactAge2(2037));
*/

/*
let votesInteresting = 20;
let votesMindblowing = 5;

if (votesInteresting === votesMindblowing) {
	alert('This fact is equally interesting and mindblowing!');
} else if (votesInteresting > votesMindblowing) {
	console.log('Interesting fact! 👍');
} else if (votesInteresting < votesMindblowing) {
	console.log('Mindblowing fact! 🤯');
}

// falsy values: 0, '', null, undefined
// truthy value: everything else...
if (votesMindblowing) {
	console.log('MINDBLOWING FACT!!!');
} else {
	console.log('Not so special...');
}

// Ternary Operator ? :  It has 3 parts (condition which is const message, 2nd part will become result of operator ? incase the operation is true ("The fact is true")) or : if condition is false you get "Might be false, check more sources"
let votesFalse = 77;
const totalUpvotes = votesInteresting + votesMindblowing;

const message =
	totalUpvotes > votesFalse
		? 'The fact is true'
		: 'Might be false, check more sources....';
// alert(message);
// ~~~ Ternary Operator use when JS expects a value.
// Running if else does not produce a value. Can't do something like this: const message = if(totalUpvotes > votesFalse) "A" else "B"
// if else simply runs the code but it doesn't return anything. There's no result of a value produced of an if else statement.
//That's why if else is called a statement and not an expression.

//Whenever JS expects a value and you want to define that value conditionally then use a ternary operator.
// This will be extremely important in React.

// ~~~~~ STRINGS
// A method called on something: text.toUpperCase()
//A function being called on a string.
const text = 'Libson is the capital of Portugal';
const upperText = text.toUpperCase();
console.log(upperText);

// Template strings AKA Template Literal: Where we create a template then we insert values into that template. Can place values inside the ${} can put any value in there but usually put a variable in there. Here we put text so now it holds the text value of 'Libson is the capital of Portugal'
const str = `The current fact is "${text}". It is ${calcFactAge(
	2015
)} years old. It is probably ${
	totalUpvotes > votesFalse ? 'correct' : 'not true'
}`;
console.log(str);
*/

// ~~~~~ ARRAYS~~~~~~~

/*
const fact = ['Lisbon is the capital of Portugal', 2015, true];

console.log(fact[2]);
console.log(fact.length);
console.log(fact[fact.length - 1]);

// const [text, createdIn, isCorrect] = fact;
// console.log(createdIn);

// ... spread operator, places original array then adds the new element society then adds to those values.
const newFact = [...fact, 'society'];
console.log(newFact);

//Or add society to the beginning of array like this:
// const newFact = ['society', ...fact];
// console.log(newFact);

// ~~~~~~ OBJECTS ~~~~~~~
//Object similar to Arrays, they allow us to aggregate different values into one big value. Example:
// ['Lisbon is the capital of Portugal', 2015, true];
//Where we had those 3 values and we aggregated them into 1 array.
//However in an array, each of the values doesn't really have a name or designation. They're just ordered one after another in the array.

// BUT in an OBJECT that's different. In an object we can give each of the object elements a name.
// Example: Key Value Pair
// text: is the KEY, 'Libson is the ...' is the VALUE.
// text: is also the property of the fact object of factObj
// const factObj = {
// 	text: 'Libson is the capital of Portugal',
// 	category: 'society',
// 	createdIn: 2015,
// 	isCorrect: true,
// 	createSummary: function () {
// 		return `The fact "${
// 			this.text
// 		}" is from the category ${this.category.toUpperCase()}`;
// 	}
// };
// console.log(factObj.text); // usually used this way.
// console.log(factObj['text']);

// const { category, isCorrect } = factObj;
// console.log(category);
// console.log(factObj.createSummary());

// Looping
// [2, 4, 6, 8].forEach(function (el) {
// 	console.log(el);
// });

//Map method

// const times10 = [2, 4, 6, 8].map(function (el) {
// 	return el * 10;
// });
const times10 = [2, 4, 6, 8].map((el) => el * 10);
console.log(times10); // 4) [20, 40, 60, 80]

const CATEGORIES = [
	{ name: 'technology', color: '#3b82f6' },
	{ name: 'science', color: '#16a34a' },
	{ name: 'finance', color: '#ef4444' },
	{ name: 'society', color: '#eab308' },
	{ name: 'entertainment', color: '#db2777' },
	{ name: 'health', color: '#14b8a6' },
	{ name: 'history', color: '#f97316' },
	{ name: 'news', color: '#8b5cf6' }
];

const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);
// (8) ['technology', 'science', 'finance', 'society', 'entertainment', 'health', 'history', 'news']

const initialFacts = [
	{
		id: 1,
		text: 'React is being developed by Meta (formerly facebook)',
		source: 'https://opensource.fb.com/',
		category: 'technology',
		votesInteresting: 24,
		votesMindblowing: 9,
		votesFalse: 4,
		createdIn: 2021
	},
	{
		id: 2,
		text: 'Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%',
		source:
			'https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids',
		category: 'society',
		votesInteresting: 11,
		votesMindblowing: 2,
		votesFalse: 0,
		createdIn: 2019
	},
	{
		id: 3,
		text: 'Lisbon is the capital of Portugal',
		source: 'https://en.wikipedia.org/wiki/Lisbon',
		category: 'society',
		votesInteresting: 8,
		votesMindblowing: 3,
		votesFalse: 1,
		createdIn: 2015
	}
];

function calcFactAge(year) {
	const currentYear = new Date().getFullYear();
	//2022 - 2015
	const age = currentYear - year;

	if (age >= 0) return age;
	else
		return `Impossible year! Year needs to be less or equal to ${currentYear}`;
}

const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
console.log(factAges);
console.log(factAges.join(' - '));
*/
