var randomNum = Math.floor(Math.random()*6)+1;

var randomImage = "images/dice" + randomNum + '.png ';

document.querySelectorAll('img')[0].setAttribute('src',randomImage);


var randomNumone = Math.floor(Math.random()*6)+1;

var randomImageone = "images/dice" + randomNumone + '.png ';

document.querySelectorAll('img')[1].setAttribute('src',randomImageone);

if(randomNum > randomNumone) 
{
    document.querySelector('h1').innerHTML='The winner is Player 1';
}

else if(randomNum < randomNumone) 
{
    document.querySelector('h1').innerHTML='The winner is Player 2';
}

else{
    document.querySelector('h1').innerHTML='Its a Draw';
}