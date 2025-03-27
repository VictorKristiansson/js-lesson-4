function generateRandomArray(length) {
    const randomArray = [];

    for(let i = 0; i < length; i++) {
        randomArray.push(Math.floor(Math.random() * 100) + 1);
    }
    
    return randomArray;
}

const length = parseFloat(prompt("Skriv in längden på din array."));

generateRandomArray()

if (length > 0) {
    console.log(generateRandomArray(length));
}
else {
    alert("Skriv in ett giltigt nummer!")
    const length = parseFloat(prompt("Skriv in längden på din array."));
    console.log(generateRandomArray(length));
}

