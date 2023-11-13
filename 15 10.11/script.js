class Human {
	constructor(age,sex){
		this._age=age;
		this._sex=sex;
	}
}

class Apartment { 
	constructor() {
		this._residents=[];
	}
	addResident(resident) {
		if(resident instanceof Human){
			this._residents.push(resident);
		}
		else { return 'The resident isn`t a human.';};
	}
}

class House {
	constructor(maxApartments){
		this._maxApartments = maxApartments;
		this.Apartments=[];
	}
	addApartment(apartment){
		if(apartment instanceof Apartment && this.Apartments.length<this._maxApartments) {
			this.Apartments.push(apartment);
		}
		else {return 'An Error!';}
	}
}

let person = new Human(19, 'men');
let person1 = new Human(20, 'woman');
let apartment = new Apartment;
apartment.addResident(person);
apartment.addResident(person1);
let house = new House(10);
house.addApartment(apartment);

console.log(house);
