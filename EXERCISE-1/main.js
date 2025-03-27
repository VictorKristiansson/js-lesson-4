function guessNumberGame(){
    const randomNumber = Math.floor(Math.random() * 10) + 1
    let guess = null;

    while(guess !== randomNumber){
        guess = parseFloat(prompt("Gissa ett nummer mellan 1 och 10!"));

        if (guess > randomNumber) {
            alert("För högt, Försök igen!");
        }

        if (guess < randomNumber) {
            alert("För lågt, Försök igen!");
        }

        if (guess === randomNumber) {
            alert("Rätt nummer");
        }
    }
    
    alert("Bra jobbat! Du har vunnit! Det rätta numret var " + randomNumber + "!")
}

guessNumberGame()