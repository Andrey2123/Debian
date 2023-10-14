let TheLength = +prompt('Write an array length here.');


if (isNaN(TheLength) || TheLength==null || TheLength<=0) {
    console.log('There is incorrect syntax.');
}
else {
    let AnElements = prompt('Write the elements for array.');
        if (AnElements==null||isNaN(AnElements)||AnElements.trim()==''){
            console.log('There is incorrect syntax.');
        }
        else {
            let AnArray = [];
            AnElements = AnElements.toString();
            for (let i = 0; i<=TheLength; i++) {
                if (AnElements[i] == '4' || AnElements[i] == '3' || AnElements[i] == '2') {
                    console.log('The numbers 2,3,4 have been removed');
                }
                else {
                    AnArray.push(AnElements[i]);
                    console.log(AnArray);
                }
            }
            AnArray.sort();
            console.log('The final result: ' + AnArray);
        }
}


