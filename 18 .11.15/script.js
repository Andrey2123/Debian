class Hamburger {
    constructor(type, flavoring) {
		this.Properties = {
            type: type,
            flavoring: flavoring, 
            addition: [],
            kkal:0,
            tugrik:0
        };
		switch (flavoring) {
                case 'cheese':
                    this.Properties.flavoring=flavoring;
                    this.Properties.kkal+=20;
                    this.Properties.tugrik+=10;
                    break;
                case 'salad':
                    this.Properties.flavoring=flavoring;
                    this.Properties.kkal+=5;
                    this.Properties.tugrik+=20;
                    break;
                case 'potato':
                    this.Properties.flavoring=flavoring;
                    this.Properties.kkal+=10;
                    this.Properties.tugrik+=15;
                    break;
                default:console.log('There is incorrect option.');
					this.Properties.flavoring=undefined;
            }
		switch (type) {
			case 'big':
				this.Properties.type=type;
				this.Properties.kkal+=40;
				this.Properties.tugrik+=100;
				break;
			case 'small':
				this.Properties.type=type;
				this.Properties.kkal+=20;
				this.Properties.tugrik+=50;
				break;
		}
    }
    moreFlavor(addition) {
		switch (addition) {
            case 'mayonnaise':
                this.Properties.addition.push(addition);
                this.Properties.kkal+=5;
                this.Properties.tugrik+=15;
                break;
            case 'seasoning':
				this.Properties.addition.push(addition);
                this.Properties.kkal+=5;
                this.Properties.tugrik+=20;
                break;
            default:console.log('There is incorrect option.');
        }
    }
    kkal() {
        console.log(this.Properties.kkal);
    }
    price() {
        console.log(this.Properties.tugrik);
    }
}

let order = new Hamburger('small', 'cheese');
console.log(order);
order.moreFlavor('seasoning');
order.moreFlavor('mayonnaise');
console.log(order);