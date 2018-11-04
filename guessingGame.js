const randomNumber = Math.floor(Math.random () *7 + 2);
console.log(randomNumber);

var promptValue = prompt(`Guess a Number between 1-10`);
var num = parseFloat(promptValue);

for (Attempt = 0; Attempt < 10; Attempt++) {
  if (Attempt == 9) {
    alert(`You had 10 tries. GAMEOVER!`);
    break;
  }
	if (num == randomNumber) {
  	alert(`Congratulations, you are a mind reader!`);
    break;
  }
  if (num > randomNumber) {
  	promptValue = prompt(`Your guess is higher. Guess a lower number.`); 
  }
  if(num < randomNumber) {
  	promptValue = prompt(`Your guess is lower. Guess a higher number.`);
  }
  num = parseFloat(promptValue)
}
