const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
                  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let passwordArray = ['stranger things', 'game of thrones', 'greys anatomy'];

let letterCounter = 0;
let chanceLeft = 6;
let yes = false;

passwordArray = passwordArray.map(function(e){return e.toUpperCase()}); 
let pass = passwordArray[0];

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

function checkLetter(element){ 
    let el = document.getElementById(element);
    if(el == null)return;

    el.classList.add("deactiveLetter");
    
    for(i=0; i<pass.length; ++i){
        if(element == pass[i]){
            document.getElementById('id'+i).classList.add("showLetter");
            --letterCounter;yes=true;
        }
    }
    el.removeAttribute("id", element);

    if(yes == false ){--chanceLeft;} yes=false;
    if(letterCounter==0)document.querySelector('.wheel').innerHTML='YOU WIN';
    if(chanceLeft==0)document.querySelector('.wheel').innerHTML='<h1>YOU LOSE</h1><button>One more?</button>';
    console.log(chanceLeft);
    console.log(letterCounter);
    
}
//26 liter
//document.querySelector('.cards').style.opacity='1';
//document.querySelector('.playOption').innerHTML=('Level: '+level+'<button class="reset off" >Reset</button>'+'<br>Size : '+size);
