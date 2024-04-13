function powrefulWord(input){
    let index = 0;
    let command = input[index];
    index++
    let maxpoints = 0;
    let maxValueWord = ""

    while (command !== "End of words") {
        let newWord = command;
        let newWordLength = newWord.length;
        let currPoints = 0;
        for(let i= 0; i < newWordLength; i++){
            let newValue = newWord.charCodeAt(i);
            currPoints += newValue;
        }
        switch (newWord.charAt(0)) {
            case "a":
            case "A":
            case "e":
            case "E":
            case "i":
            case "I":
            case "o":
            case "O":
            case "u":
            case "U":
            case "y":
            case "Y":
                currPoints *= newWordLength;
                break;
            default:
                currPoints = Math.floor(currPoints / newWordLength);
                break;
        }
        if (currPoints >= maxpoints) {
            maxValueWord = newWord;
            maxpoints = currPoints;
        }
        command = input[index];
            index++;            
    }
    console.log(`The most powerful word is ${maxValueWord} - ${maxpoints}`);
}
powrefulWord(["But",
"Some",
"People",
"Say",
"It's",
"LOVE",
"End of words"])

