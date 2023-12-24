const userData = {
	USD: 1000,
	EUR: 900,
	UAH: 15000,
	BIF: 20000,
	AOA: 100
};

const bankData = {
    USD: {
        max: 3000,
        min: 100,
        img: '💵'
    },
    EUR: {
        max: 1000,
        min: 50,
        img: '💶'
    },
    UAH: {
        max: 0,
        min: 0,
        img: '💴'
    },
    GBP: {
        max: 10000,
        min: 100,
        img: '💷'
    }
}



function getMoney() {
    const bankAccount = new Promise ((resolve,reject)=>{
        const checkAccount = prompt('Do you want to check your account?');
        switch(checkAccount.toLowerCase()) {
            case 'y': 
            resolve();
            break;
            case 'n':
            reject();
            break;
            default:
                getMoney()
                break;
        }
    }); 
    bankAccount.then(function amount(){
        const currency = prompt('Type here a currency:');
        if(userData.hasOwnProperty(currency.toUpperCase())==true) {
            console.log(`There are ${userData[currency.toUpperCase()]}${currency.toUpperCase()} in your bank account.`);
        }
        else {
            amount();
        }
    })
    .catch(function cashWithdrawal(){
        let withdrawalCurrency = prompt('Type here a type of currency for cash withdrawal:');
        let currencies = [
            'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD',
            'NOK', 'MXN', 'SGD', 'HKD', 'KRW', 'TRY', 'INR', 'BRL', 'ZAR', 'UAH',
            'BIF', 'AOA'
          ];
        let availableCurrency = [];
        for(let i=0;i<=currencies.length;i++) {
            if(userData.hasOwnProperty(currencies[i])==true && bankData.hasOwnProperty(currencies[i])==true && bankData[currencies[i]].max!=0) {
                availableCurrency.push(currencies[i]);
            }
        }
        if (availableCurrency.includes(withdrawalCurrency.toUpperCase())) {
            const withdrawalValue = prompt(`Type here withdrawal value for this operation (You choosed ${withdrawalCurrency.toUpperCase()}):`);
                if(withdrawalValue>bankData[withdrawalCurrency.toUpperCase()].max) {
                    console.log(`Your withdrawal value maximum is ${bankData[withdrawalCurrency.toUpperCase()].max}${withdrawalCurrency.toUpperCase()}`);
                }
                else if (withdrawalValue<bankData[withdrawalCurrency.toUpperCase()].min) {
                    console.log(`Your withdrawal value minimum is ${bankData[withdrawalCurrency.toUpperCase()].min}${withdrawalCurrency.toUpperCase()}`);
                }
                else {
                    console.log(`There is your ${withdrawalValue}${withdrawalCurrency.toUpperCase()}. Have a nice day!😊`);
                }
        }
        else {
            cashWithdrawal();
        }
        })
}

getMoney();
