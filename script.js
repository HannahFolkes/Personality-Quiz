//variables//
var restartButton = document.getElementById ("restartQuiz");
var result= document.getElementById ("finalResult");

var introvertScore = 0; //stores the introvert score//
var extrovertScore = 0; //stores the extrovert score//
var questionCount = 0; // stores the number of answers clicked on//


// storing HTML elements using DOM//
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

//calling functions//
q1a1.addEventListener("click", extrovert);
q1a2.addEventListener("click", introvert);

q2a1.addEventListener("click", introvert);
q2a2.addEventListener("click", extrovert);

q3a1.addEventListener("click", introvert);
q3a2.addEventListener("click", extrovert);

restartQuizbutton.addEventListener("click", restartQuiz);

//functions//
function introvert(){ //tracking introvert score//
   introvertScore += 1;
   questionCount += 1;

   console.log("questionCount = " + questionCount + "introvertScore = " + introvertScore);

  if (questionCount == 3) {
     console.log("The quiz is done!")
     updateResult();
    }
}
function extrovert(){ //tracking extrovert score//
   extrovertScore += 1;
   questionCount += 1; 
   
   console.log("questionCount = " + questionCount + "extrovertScore = " + extrovertScore);
   
    if (questionCount == 3){
      console.log ("The quiz is done")
      updateResult();
    }
    
  }
function updateResult() { //final answer (You are a introvert! or You are a extrovert!)//
   if (introvertScore >= 2) {
     result.innerHTML = "You are a introvert!";
     console.log("You are a introvert!")
  } else if (extrovertScore >= 2) {
      result.innerHTML = "You are a extrovert!";
      console.log("You are an extrovert!")
    }
  }

function restartQuiz() { //reseting the quiz//

  introvertScore = 0; //stores the introvert score//
  extrovertScore = 0; //stores the extrovert score//
  questionCount = 0; // stores the number of answers clicked on//
 result.innerHTML= "You are a...";


}

  

  



  


  


