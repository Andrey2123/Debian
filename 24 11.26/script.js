let count=0;
let conclusion=1;
function pow(num,degree) {
    count++
    if(count<=degree) {
        conclusion=conclusion*num;
        pow(num,degree);
    }
    else {
        console.log(conclusion);
    }

}

pow(4,4);