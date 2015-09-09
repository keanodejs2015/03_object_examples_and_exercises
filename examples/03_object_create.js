// Object.create is mostly used when inheriting from an object.
// so you need an object to start with like this:

var machine = {
	make : 'BMW',
	model : 'i8' 
}

// then you, with this object as a base object, can create a new one:
var vihecle = Object.creta(machine);

// and in vihecle you now have 
console.log(vihecle.make);
