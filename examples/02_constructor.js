// Constructor functions
// You create a constructor like any other function
function Animal () {
	// body...
}

// or 
var Car = function () {
	// body...
}

// You make a new object like this.
var animal = new Animal();

// you can put parameters of the constructor
function House (windows, doors) {
	this.windows = windows;
	this.doors = doors;
	this.winAndDoors = function () {
		return windows + doors;
	}
}

var house = new House(4, 2);

console.log(house.windows);
console.log(house.doors);
console.log(house.winAndDoors());

// you can make variables private by:
function Person (name, age) {
	var name = name;
	var age = age;
	this.info = function () {
		return name + ' ' + age;
	}
}

var claus = new Person('Claus', 44);
var anna = new Person('Anna', '23');
console.log(anna.info());
console.log(claus.info());

