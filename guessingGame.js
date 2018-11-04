const randomNumber = Math.floor(Math.random () *7 + 2);
console.log(randomNumber);

var promptValue = prompt(`Guess a Number between 1 and 10`);
var num = parseFloat(promptValue);

for (Attempt = 0; Attempt < 10; Attempt++) {
  if (Attempt == 9) {
    return alert(`You had 10 tries. GAMEOVER!`);
  }
	if (num == randomNumber) {
  	return alert(`Congratulations, you are a mind reader!`);
  }
  if (num > randomNumber) {
  	promptValue = prompt(`Your guess is higher. Guess a lower number.`); 
  }
  if(num < randomNumber) {
  	promptValue = prompt(`Your guess is lower. Guess a higher number.`);
  }
  num = parseFloat(promptValue)
}
