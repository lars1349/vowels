function printLetters(){
    for(let index=0; index<=inputString.length; index++){
        let thisLetter=inputString.charAt(index)
        if (thisLetter ==='a') {
            counterA++;
        }
        else if (thisLetter ==='e') {
            counterE++;
        }
        else if (thisLetter ==='i') {
            counterI++;
        }
        else if (thisLetter ==='o') {
            counterO++;
        }
        else if (thisLetter ==='u') {
            counterU++;
        }
        else if (thisLetter ==='y') {
            counterY++;
        }
    }
    updateView()
}

function textInput(inputValue){
    inputString=inputValue.toLowerCase()
}

function resetLetters(){
    counterA = 0;
    counterE = 0;
    counterI = 0;
    counterO = 0;
    counterU = 0;
    counterY = 0;
    updateView()
}
