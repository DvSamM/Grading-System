function showResult(){
    var Score = input.value

    if (Score >= 70 && Score <= 100)  {
console.log("A Excellent");
result.innerHTML = "A Excellent ✔"
result.style.color = "green"
var audio5 = new Audio ("audio/clap.wav")
audio5.play();

} else if (Score >= 60 && Score <= 69){
console.log("B Very Good");
result.innerHTML = "B very good👍"
result.style.color = "blue"
var audio4 = new Audio ("audio/defend.mp3")
audio4.play();

} else if(Score >=50 && Score <=59){
console.log("C Good");
result.innerHTML = "C Good 🤔"
result.style.color = "yellow"
var audio3 = new Audio ("audio/play.mp3")
audio3.play();

} else if (Score >=45 && Score <=49 ){
console.log("D Fair");
result.innerHTML = "D Fair 😒"
result.style.color = "grey"
var audio2 = new Audio("audio/Shout.mp3")
audio2.play();

} else if(Score >=40 && Score <= 44){
console.log("Bad");
result.innerHTML = "E Bad 🤦‍♂️"
result.style.color = "red"
var audio1 = new Audio("audio/1000725352.mp3");
audio1.play();

} else if(Score >=0.1 && Score <=39){
console.log("Fail");
result.innerHTML = "F Fail🤣"
result.style.color = "red"
var audio = new Audio("audio/make.mp3");
audio.play();

} else{
console.log("invalid input");
result.innerHTML = "Invalid Input"
} 
}