signs = ["Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn"];
images = ["Aquarius.png","Pisces.png","Aries.png","Taurus.png","Gemini.png","Cancer.png","Leo.png","Virgo.png","Libra.png","Scorpio.png","Sagittarius.png","Capricorn.png"];
//console.log(signs[7])
function checkName(x) {
    if (x == "") {
        alert("Please Enter Your Name");
        return false;
    }
    return true;
}

function findNum(month, day){
    if(month == 1 && day >= 20 || month == 2 && day <= 18){
        return 1;
    }
    if(month == 2 && day >= 19 || month == 3 && day <= 20){
        return 2;
    }
    if(month == 3 && day >= 21 || month == 4 && day <= 19){
        return 3;
    }
    if(month == 4 && day >= 20 || month == 5 && day <= 20){
        return 4;
    }
    if(month == 5 && day >= 21 || month == 6 && day <= 20){
        return 5;
    }
    if(month == 6 && day >= 21 || month == 7 && day <= 22){
        return 6;
    }
    if(month == 7 && day >= 23 || month == 8 && day <= 22){
        return 7;
    }
    if(month == 8 && day >= 23 || month == 9 && day <= 22){
        return 8;
    }
    if(month == 9 && day >= 23 || month == 10 && day <= 22){
        return 9;
    }
    if(month == 10 && day >= 23 || month == 11 && day <= 21){
        return 10;
    }
    if(month == 11 && day >= 22 || month == 12 && day <= 21){
        return 11;
    }
    if(month == 12 && day >= 22 || month == 1 && day <= 19){
        return 12;
    }
}

function happyBirthday(x, y){
    var res = "";
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    //console.log(x)
    //console.log(y)
    if(x == dd && y == mm){
        res = "Happy Birthday! ";
    }
    return res;
}
function fakeDate(day, month) {
    if (day == "" || month == "") {
        alert("Invalid Date");
        return false;
    }
    if (month == 2 && (day == 31 || day == 30 || day == 29)) {
        alert("Invalid Date");
        return false;
    }
    if (day == 31 && (month == 9 || day == 4 || day == 6 || day == 11)) {
        alert("Invalid Date");
        return false;
    }
    if (day >= 32 || month >= 13) {
        alert("Invalid Date");
        return false;
    }
    // ALTHOUGH THEY ARE NOT GIVEN THESE OPTIONS, YOU CAN NEVER TOO SAFE!(TALKING ABOUT THE IF STATEMENT ON TOP).

}
function submitButton() {
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var name = document.getElementById("name").value;
    var sign = findNum(month,day) - 1;
    //use find num to grab number and print
    //out signs[number] instead of the findSign function

    //do the same thing for messages
    if(fakeDate(day,month) == false) {
          return false;
     }

    if(checkName(name) == false){
        return false;
    }

    //if (name(x)  == ""){
     //       return false;
    //}
    console.log(sign);
    document.getElementById("images").src = "images/" + images[sign];
    document.getElementById("messages").innerHTML = messages[sign];
    // document.getElementById("signs").innerHTML = signs[sign];
    document.getElementById("sign").innerHTML = "Hi " + name + ". " + happyBirthday(day, month) + "Your sign is: " + signs[sign];
}

messages = ["This is a time of great potential and personal growth. Hard work and success are there, too, but your greatest progress may be made internally rather than externally.", "This is a year of pure magic! Take the time to distinguish between what's real and what's illusion and you'll safely navigate any and all situations.",
    "You've got charm, smarts, and the element of surprise going for you all year long! Now what do you want to do with all these cosmic gifts?", "This year, focus on your own well-being above all else. You can increase your material wealth and health this way, and also structure a more stable future.",
    "Make the most of your people skills, make the big changes you want and need, and advance your goals for the future. You\'ll have endless ideas and insights.", "This can be a highwater year full of major achievements, crucial decisions and changes for you. Great things are possible with so much transformative energy aimed your way.", "This is a year on fire, pouring energy into your work, career, and creativity sectors. Keep your ambition and work ethic sky high.", "This year will blast off into an adventure of work and career possibilities for Virgos. Thoughts and ideas to move you ahead will be abundant and achievable all year.", "You can do endless good things. Strong allies, partners, and friends are there with you. Have a persistent vision, help and be helpful, and you should have a magnificent year!", "You may not recognize just how lucky you are going to be this year! You will be wired, intense, and focused on your chosen work. Keep an eye out for lucky opportunities and be ready to pounce.", "This is a year wide open with opportunities. There is plenty of energy that will prompt you to dig in and make tremendous progress.", "It\'s your year to charge ahead, make bold changes for progress, success, and achieve greater respect in the world. You will be empowered and emboldened all year long."];
