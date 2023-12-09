const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 14;
let includeNumbers = false;
let includeSymbols = false;
let numberToggle = document.getElementById("number-toggle");
let symbolToggle = document.getElementById("symbol-toggle");

numberToggle.addEventListener("change", function() {
    if (numberToggle.checked) {
        includeNumbers = true;
    } else {
        includeNumbers = false;
    }
});

symbolToggle.addEventListener("change", function() {
    if (symbolToggle.checked) {
        includeSymbols = true;
    } else {
        includeSymbols = false;
    }
});

function submitPwLength(){
    var newPasswordLength = Number(document.getElementById("length-input").value);
    passwordLength = newPasswordLength;
    alert("Password length set to " + passwordLength);
}

function generatePasswords(){
    console.log(includeNumbers, includeSymbols);
    var newCharacterSet = [];
    var passwordArray = [];
    
    if (!includeSymbols && !includeNumbers){
        newCharacterSet = characters.filter(function(character) {
            return (character >= "A" && character <= "Z") || (character >= "a" && character <= "z");
        });
    } else if (!includeSymbols){
        newCharacterSet = characters.filter(function(character) {
            return (character >= "A" && character <= "Z") || (character >= "a" && character <= "z") ||!isNaN(character);
        });
    } else if (!includeNumbers){
        newCharacterSet = characters.filter(function(character) {
            return isNaN(character);
        });
    } else{
        newCharacterSet = characters;
    }
    
    for (let i=0; i<3;i++){
        var password = "";
        for (let j=0; j<passwordLength; j++){
            password += newCharacterSet[Math.floor(Math.random() * newCharacterSet.length)];
        }
        passwordArray.push(password);
    }
    console.log(passwordArray);
    var pw1Button = document.getElementById("pw1");
    pw1Button.innerText = passwordArray[0];
    var pw2Button = document.getElementById("pw2");
    pw2Button.textContent = passwordArray[1];
    var pw3Button = document.getElementById("pw3");
    pw3Button.textContent = passwordArray[2];
}

function copyPW(button){
    var passwordText = button.innerText;
    var tempInput = document.createElement("input");
    tempInput.value = passwordText;
    console.log(tempInput);
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    alert("Password copied to clipboard!");
}
