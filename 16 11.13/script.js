class Human {
	constructor(name, age){
		this._name=name;
		this._age=age;
	}
	info(){
		console.log(`There is a ${this._name}. He is ${this._age} y.o.`);
	}
}

class Car {
	constructor(brand, model, releaseDate, number) {
		this._brand = brand;
		this._model = model;
		this._releaseDate = releaseDate;
		this._number = number;
	}
	addOwner(owner) {
		if(owner._age>=18){
			this.carOwner = owner._name;
			}
		else { 
			console.log(`${owner._name} can not be a car owner.`);
		}
	}
	info(){
		if (this.carOwner!=''){
            console.log(`The car brand: ${this._brand}.\nThe car model: ${this._model}.\nThe car's release date: ${this._releaseDate}.\nThe car's number: ${this._number}.\nAlso the car's owner: ${this.carOwner}`);
        }
        else {
            console.log(`The car brand: ${this._brand}.\nThe car model: ${this._model}.\nThe car's release date: ${this._releaseDate}.\nThe car's number: ${this._number}.\n`);
        }
	}
}

let person1 = new Human('John', 31);
let person2 = new Human ('Kevin', 73);
let person3 = new Human ('Michael', 17);
let theirCar = new Car('Daewoo', 'Lanos', 1999, 'KXA1231');
theirCar.addOwner(person1);
theirCar.addOwner(person3);

person1.info();
person2.info();

theirCar.info();



