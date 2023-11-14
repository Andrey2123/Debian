class Student {
    constructor(name, dateOfBirth) {
        this._name = name;
        this._dateOfBirth = dateOfBirth;
        this._marks = [100,90,95];
        this.presence = []; // <=25
    }
    age(){
        console.log(`The student's age: ${2023-this._dateOfBirth}`);
    }
    present() {
        this.presence.length<=25 ? this.presence.push(true) : console.log('The list of presence is full!');
    }
    absent() {
        this.presence.length<=25 ? this.presence.push(false) : console.log('The list of presence is full!');
    }
    summary() {
        let theSumOfMarks = 0;
        let trueCount = 0;
        for(let i=0; i<this._marks.length; i++) {
            theSumOfMarks += this._marks[i];
        }
        theSumOfMarks = theSumOfMarks/this._marks.length;
        for(let a=0; a<this.presence.length; a++) {
            if(this.presence[a]===true) {
                trueCount+=1;
            }
        }

        let theAveragePresence = trueCount > 0 ? trueCount / this.presence.length : 0;
        if(theAveragePresence>0.9 && theSumOfMarks>90) {console.log('Молодець!');} 
        else if(theAveragePresence>0.9||theSumOfMarks>90) {console.log(`${this._name}, добре, але можно краще!`);}
        else {console.log('Редиска!');}
        console.log(`The presence: ${theAveragePresence}\nThe average mark: ${theSumOfMarks}`);
    }
}

let student = new Student('Michal', 2006);
student.present();
student.present();
student.present();
student.present();
student.summary();
student.age();

let student1 = new Student('Andrii', 2000);
student1.absent();student1.absent();student1.absent();student1.absent();
student1.present();
student1.summary();
