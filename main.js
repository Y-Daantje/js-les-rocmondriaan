//opdr 1
const grade = 8;
if (grade > 5.4) {
    console.log("je heb een voldoende");
    console.log("Einde programma");
}

//opdr 2
const grade2 = 3;
if (grade2 > 5.5) {
    console.log("je heb onvoldoende");
    console.log("Einde programma");
}

//opdr 3
const grade3 = 5;
if (grade3 == 5) {
    console.log("je moet herkansen!");
    console.log("Einde programma");
}

//opdr 4
const grade4 = 6;
if (grade4 > 5.4) {
    console.log("je hebt vondoende");
} else {
    console.log("je hebt onvoldune");
}

//opdr5
//ask the user to enter there password
const enterPassword = prompt("please enter Password");

//the password that the user has stored on the computer.
const correctPassword = "12345678";

//Compare the entered password with the correct password
if (enterPassword === correctPassword) {
    console.log("U bent ingelogd");
} else {
    console.log("acces not granted. please try again.");
}

//opdr6
const passworden = prompt("vul je password in.");
if (passworden === "Yannick") {
    alert("je bent ingelogd!");
} else ("je bent niet ingelogd")
//opdr7
const user = prompt("Vull je naam in");
if (user === "Docent") {
    console.log("jij bent Docent");

}
else if (user == "student") {
    console.log("jij bent student");

}
else if (user == "directuer") {
    console.log("jij bent directuer");

} else {
    console.log("jij bent gek")
}
//opdr 8
const amount = prompt("vull een bedragt in");
const euro = Number(amount);
const country = prompt ("welke land")

if(country == "MA") {
    let result = euro * 10.66;
    console.log ("berdrag in DH is:" , result);
     
} else if (country == "US") {
 result = euro *  1.14;
    console.log ("berdrag in USD is:" , result);

} else if ( country =="GB") {
     result = euro *  0.84;
    console.log ("bedrag in GBP:" , result);

} else if ( country == "TRk") {
     result = euro * 15.55;
    console.log ("bedrag in TRY:" , result);

} else if (county == "ANG" ) {        
     result = euro *  2.06;
    console.log ("bedrag in FL:" , result);                               
}
//opdr9

const kleur = prompt ('vul je kleur in');
let message = "case";
switch (kleur ) {
    case 'blauw':
      message = "je kleur is blauw";
      break;

    case 'rood':
      message = "je kleur is rood";
      break;

    case 'groen':
      message = "je kleur is groen";
      break;

    case 'geel':
      message = 'je kleur is geel';
        break;

    case 'zwart':
      message = 'je kleur is zwart';
      break;

      default:
        message = "Deze kleur ken ik niet.";
}
console.log(message);