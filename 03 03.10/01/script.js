let InputYearOfBirth = prompt('When is your birthday? (Only year)');
let InputLivingPlace = prompt('Where are you from?');
let InputFavouriteSport = prompt('Whcih type of sport do you prefere?(Box, Swimming, Skiing):');
let OutputLivingPlace;
let OutputAge;
let OutputFavouriteSport; 
const Age = 2023-InputYearOfBirth;

function CheckPlace(Place) {
    if (Place == InputLivingPlace) {
        if (Place != '') {
            OutputLivingPlace = 'Ти живеш у місті ' + InputLivingPlace + '.';
        }


        else {
            OutputLivingPlace = 'Шкода, що Ви не захотіли ввести своє місто.'
        }
    }
    else if (Place == InputFavouriteSport) {
            switch (true) {
                case InputFavouriteSport == "Box":
                    OutputFavouriteSport = 'Круто! Хочеш стати like a Mike Tyson?';
                break;
            
                case InputFavouriteSport == "Swimming":
                    OutputFavouriteSport = 'Круто! Хочеш стати like a Tom Jager?';
                break;
            
                case InputFavouriteSport == "Skiing":
                    OutputFavouriteSport = 'Круто! Хочеш стати like a Mikaela Shiffrin?';
                break;

                case InputFavouriteSport === null:
                case InputFavouriteSport.trim() === '':
                    OutputFavouriteSport = 'Шкода, що Ви не захотіли обрати улюбленний вид спорту';
                break;

                default: OutputFavouriteSport = 'Ти займаєшся ' + InputFavouriteSport + '.';
            }
        }
    else if (Place == InputYearOfBirth) {
        /*parseInt(InputYearOfBirth);
        if (InputYearOfBirth != Number || InputYearOfBirth == NaN) {
            OutputAge = 'Ви ввели неправильний параметр';
        }
        else if (InputYearOfBirth == Number) {
            OutputAge = 'Твій возраст: ' + Age;
        } 
        else {
           OutputAge = "Шкода, що Ви не захотіли ввести свою дату народження.";
        }*/
        switch (true) {
            case isNaN(+InputYearOfBirth): 
            OutputAge = 'Ви ввели неправильний параметр';
            break;

            case InputYearOfBirth === null:
            OutputAge = "Шкода, що Ви не захотіли ввести свою дату народження.";
            break;

            case  InputYearOfBirth.trim() ==='':
            OutputAge = "Шкода, що Ви не захотіли ввести свою дату народження.";
            break;    

            case InputYearOfBirth === undefined: 
            OutputAge = "Шкода, що Ви не захотіли ввести свою дату народження.";
            break; 

            default: OutputAge = 'Твій возраст: ' + Age; 
        }
    }

}

InputLivingPlace == "Київ" ? OutputLivingPlace = 'Ти живеш у столиці України.' : 
InputLivingPlace == "Вашингтон" ? OutputLivingPlace = 'Ти живеш у столиці Сполучених Штатів Америки.' :
InputLivingPlace == "Лондон"? OutputLivingPlace = 'Ти живеш у столиці ВеликоБритані.' : CheckPlace(InputLivingPlace),

CheckPlace(InputYearOfBirth), CheckPlace(InputYearOfBirth), CheckPlace(InputFavouriteSport);


alert(OutputAge + '\n' + OutputLivingPlace + '\n' + OutputFavouriteSport);
console.log(OutputAge + '\n' + OutputLivingPlace + '\n' + OutputFavouriteSport);



