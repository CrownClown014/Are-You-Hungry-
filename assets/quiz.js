var foodQuestions = [{
    questions: 'What is the spiceist pepper in the World?',
    questionAnswers: ['Scorpion', 'Carolina Reaper', 'Birds Eye Chili'],
    correctAnswer: 'Carolina Reaper'
},
{
    questions: 'What is the most expensive spice in the World?',
    questionAnswers: ['saffron', 'Cayenne', 'Cumin'],
    correctAnswer: 'saffron'
},
{
    questions: 'What is the most popular drink in the World?',
    questionAnswers: ['Coffee', 'Coca-Cola', 'Dr. Pepper'],
    correctAnswer: 'Coca-Cola'
}]
var showQuestions= document.querySelector('#question');

var choice1=document.querySelector('#choice1')
var choice2=document.querySelector('#choice2')
var choice3=document.querySelector('#choice3')
choice1.addEventListener('click', nextquestion);
choice2.addEventListener('click', nextquestion);
choice3.addEventListener('click', nextquestion);
var questionCounter=0
var score=0
function nextquestion(event){
    console.log (event.target);
    if (event.target.textContent==foodQuestions[questionCounter].correctAnswer){
        alert('correct')
        score++
        
    }
    else {
        alert('incorrect')
    }
    
    questionCounter++
showQuestions.innerText= foodQuestions[questionCounter].questions;


choice1.innerText=foodQuestions[questionCounter].questionAnswers[0];
choice2.innerText=foodQuestions[questionCounter].questionAnswers[1];
choice3.innerText=foodQuestions[questionCounter].questionAnswers[2];
}


showQuestions.innerText= foodQuestions[0].questions;


choice1.innerText=foodQuestions[0].questionAnswers[0];
choice2.innerText=foodQuestions[0].questionAnswers[1];
choice3.innerText=foodQuestions[0].questionAnswers[2];

