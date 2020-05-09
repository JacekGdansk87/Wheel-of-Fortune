const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
                  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const randomPrices = [100, 200, 500, 1000, 1250, 1500, 1750, 2000, 2250, 2500, -1500, -1000, -500, -200, -100];

let passwordArray = ['Stranger things', 'Game of thrones', 'Greys anatomy','Lucifer','Money heist'];

let letterCounter = 0;
let chanceLeft = 6;
let goodChoose = 0;
let price = 0;
let idD = '';
let points = 0;
let turnPoints = 0;

passwordArray = passwordArray.map(function(e){return e.toUpperCase()});
//get random password
let randomPass = Math.floor(Math.random()*passwordArray.length);
let pass = passwordArray[randomPass];

//create password
for(i=0; i<pass.length; ++i){
    var letterP = document.createElement('div');
    letterP.setAttribute("id", 'id' + i);
    letterP.innerHTML = pass[i];
    if(pass[i] == " "){
           letterP.setAttribute("class", 'hiddenSpace');
    }else{ letterP.setAttribute("class", 'hiddenLetter');
          ++letterCounter;
    }

    document.querySelector('.password').appendChild(letterP);
}

//create alphabet
alphabet.forEach(element => {
    var letterA = document.createElement('div');
    letterA.innerHTML = element;
    letterA.setAttribute("class", 'activeLetter');
    letterA.setAttribute("id", element);
    letterA.addEventListener("click", ()=> { checkLetter(element)});
    document.querySelector('.letters').appendChild(letterA);
});

//create random price
randomPrices.forEach(element => {
    var randomP = document.createElement('div');
    randomP.innerHTML = element;
    randomP.setAttribute("class", 'price');
    randomP.setAttribute("id", 'id' + element);
    document.querySelector('.prices').appendChild(randomP);
});

//random draw
function drawPrice(){
    if(price != 0){
            alert("Choose letter.");
        }else{
        let randomPrice = Math.floor(Math.random()*randomPrices.length);
        price = randomPrices[randomPrice];
        idD = document.getElementById('id' + price);
        if(price > 0){
            idD.classList.add("goodPrice");    
        }else{
            idD.classList.add("badPrice");     
        }
    }
    document.querySelector('.messages').innerHTML='<h4>Choose a letter by clicking active letter.</h4>';
}

//game checking mechanism
function checkLetter(element){ 
    if(price == 0){
        document.querySelector('.messages').innerHTML='<h4>Choose the price by clicking Draw</h4>';
    }else{
            let el = document.getElementById(element);
            if(el == null)return;
            el.classList.add("deactiveLetter");
            
            for(i=0; i<pass.length; ++i){
                if(element == pass[i]){
                    document.getElementById('id'+i).classList.add("showLetter");
                    --letterCounter;
                    goodChoose=1;
                    points += price;
                    turnPoints += price;
                }
            }
            el.removeAttribute("id", element);
            price = 0;
            console.log(idD);
            idD.classList.remove("goodPrice");  
            idD.classList.remove("badPrice"); 
            idD = '';
            console.log(pass);

            document.querySelector('.lettersLeft').innerHTML='Letters left:' + letterCounter;
            document.querySelector('.turnPoints').innerHTML='Turn points:' + turnPoints;
            document.querySelector('.leftChances').innerHTML='Left chances:' + chanceLeft;
            document.querySelector('.points').innerHTML='Points:' + points;
            turnPoints = 0;
            document.querySelector('.messages').innerHTML='<h4>Choose the price by clicking Draw</h4>';
            
            if(goodChoose == 0 ){--chanceLeft;} goodChoose=0;
            if(letterCounter==0)document.querySelector('.letters').innerHTML='<h1>YOU WIN</h1><h2>Your score:' + points + '</h2><button onclick="location.reload()">One more?</button>';
            if(letterCounter==0)document.querySelector('.options').innerHTML='<h3>1.Jack 20 000 points</h3><h3>2.My dog 15 000 points</h3><h3>3.Blind chicken 12 000 points</h3>';
            if(letterCounter==0)document.querySelector('.letters').classList.remove("letters");
            if(chanceLeft==0)document.querySelector('.letters').innerHTML='<h1>YOU LOSE</h1><h1>The password was:' + pass  + '</h1><h2>Your score:' + points + '</h2><button onclick="location.reload()">One more?</button>';
            if(chanceLeft==0)document.querySelector('.options').innerHTML='<h3>1.Jack 20 000 points</h3><h3>2. My dog 15 000 points</h3><h3>3.Blind chicken 12 000 points</h3></h3></h3>. . .</h3><h3>201. And you:' + points +' points</h3>';
            if(chanceLeft==0)document.querySelector('.letters').classList.remove("letters");
            document.querySelector('.messages').innerHTML='';
        }
}
