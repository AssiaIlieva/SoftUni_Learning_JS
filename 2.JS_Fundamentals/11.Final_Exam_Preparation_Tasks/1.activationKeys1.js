    function activationKeys(input) {
    let activationKey = input.shift();

    let command = input.shift();

    while (command !== "Generate") {
        let [action, ...tokens] = command.split(">>>");
        if (action === "Contains") {
        let substring = tokens[0];
        if (activationKey.includes(`${substring}`)) {
            console.log(`${activationKey} contains ${substring}`);
        } else {
            console.log(`Substring not found!`);
        }
        } else if (action === "Flip") {
        let [toCase, startInx, endInx] = tokens;
        startInx = Number(startInx);
        endInx = Number(endInx);
        let substring = activationKey.substring(startInx, endInx);
        if (toCase === "Upper") {
            let substringToUpperCase = substring.toUpperCase();
            activationKey = activationKey.replace(substring, substringToUpperCase);
            console.log(activationKey);
        } else if (toCase === "Lower") {
            let substringToLowerCase = substring.toLowerCase();
            activationKey = activationKey.replace(substring, substringToLowerCase);
            console.log(activationKey);
        }
        } else if (action === "Slice") {
        let startInx = Number(tokens[0]);
        let endInx = Number(tokens[1]);
        let substring = activationKey.substring(startInx, endInx);
        activationKey = activationKey.split(`${substring}`).join("");
        console.log(activationKey);
        }
        command = input.shift();
    }
    console.log(`Your activation key is: ${activationKey}`);
    }
activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>134",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])
