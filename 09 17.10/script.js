function removeElement(array, item) {
    array.pop(item);
    console.log(array);
}

const TheTestArray = [1, 2, 3, 4, 5, 6, 7, '8'];

(removeElement(TheTestArray, '8'));
(removeElement(TheTestArray, 5));