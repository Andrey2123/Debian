class SuperMath {
    check(obj) {
        if(obj.hasOwnProperty('X','Y','znak')) {
            let answer = prompt(`Are you sure you want to do operation ${obj.X} ${obj.znak} ${obj.Y}?(Y/N)`);
            if(answer.toUpperCase()=='Y') {
            switch(obj.znak) {
                case '+':
                    console.log(obj.X+obj.Y);
                    break;
                case '-':
                    console.log(obj.X-obj.Y);
                    break;
                case '*':
                    console.log(obj.X*obj.Y);
                    break;
                case '/':
                    console.log(obj.X/obj.Y);
                    break;
                case '%':
                    console.log(obj.X%obj.Y);
                    break;
                default:
                    console.log('Error. The invalid operator choosed');
                    break;
            } }
            else if(answer.toUpperCase()=='N') {
                this.input();
            }
        }
        else {
            console.log('An Error!');
        }
    }
    /*input() {
        let operators = prompt('Type here X,Y and operator. For example: 20,10,/');      // 1 варіант.
        let secondObj = {X:'',Y:'',znak:''};
        for (let i=0; i<operators.length-2; i++) {
            if(!isNaN(parseInt(operators[i])) && operators[i]!=',') {
                secondObj.X+=operators[i];
            }
            else {
                for(let f=i+1; f<operators.length-2; f++) {
                    if(!isNaN(parseInt(operators[f])) && operators[f]!=',') {
                        secondObj.Y+=operators[f];
                    }
                };
                break;
            }
        };
        secondObj.znak=operators[operators.length-1];
        secondObj.X=parseInt(secondObj.X);
        secondObj.Y=parseInt(secondObj.Y);
        this.check(secondObj); 
    }*/
    input() {                                                                           // 2 варіант
        let secondObj = {X:'',Y:'',znak:''};
        secondObj.X = parseInt(prompt('Type here the number X:'));
        secondObj.Y = parseInt(prompt('Type here the number Y:'));
        secondObj.znak = prompt('Type here an operator:');
        this.check(secondObj);
    }
}

let obj = {X:10, Y:20, znak:'/'};
let p = new SuperMath();
p.check(obj); // --> no p.input() -> 3 prompt -> раху
