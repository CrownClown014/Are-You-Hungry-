//basic structure of the JS code
// 1. We need to generate the quiz
// 2. utilize a timer 
// 3. Show the questions
// 4. show the results
// 5. store the rusuls
// 6. submit button

//to represent a question the use of an object will allow us to store properties within a var. 
var questions = {
    question: 'What is the most expensive spice in the World?',
    multipleChoice:['Cumin', 'Pepper', 'Saffron'],//storing answers in an array to utilize in a for loop later in the code.  The aswer is 2 and not 3 as in an array counting begins with 0
    answer: 2 //Storing the answer
};

//Step 1.  We need to interact with HTML using DOM.  basically we are interacting withthe dom element 'questions' from our html file so we can manipulate it. 

// To interact with the element you can use document.getElementById('questions') but for this project i will use document.querySelector('#question')
    //experiment to see if the querySelector can be utilized since it bypasses the issue of having to select a class or id by it having the property of being fluid?

// Interact with the DOM element by storing in a variable

var hotSpice = document.querySelector('#question');

//now that the question is 'interactive' we can now change it.  We will use the text.content 

hotSpice.textContent = questions.question; 