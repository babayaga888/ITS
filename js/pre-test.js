const question = document.querySelector('#question1');
const choices = Array.from(document.querySelectorAll('.question-choices'));
const scoreText = document.querySelector('.score');
//const hint = document.querySelecto

//declaring variables
let currentQuestions = {};
let score = 0;
let acceptingAnswer = true;
let counter = 0;
let questionsAvailable = [];

//declaring variables and setting up arrays of questions
let questions = [
    {
        questions:'What is the boundary of a blackhole?',
        choice1: 'Circumference',
        choice2: 'Eventhorizon',
        choice3: 'Black circle',
        answer: 2,
        topic:"Blackhole"
    }, 
    {
        questions:'How can we spot Blackholes?',
        choice1: 'Through quasars and accretion disk',
        choice2: 'By using our telescopes',
        choice3: 'Observing galaxies that has supermassive blackholes',
        answer: 1,
        topic: "Blackhole"
    },
    {
        questions:'When did the Bigbang exploded?',
        choice1: '13.7 billion years ago',
        choice2: '19.8 billion years ago',
        choice3: '7 trillion years ago',
        answer: 1,
        topic: "Bigbang"
    },
    {
        questions:'What is the four forces of nature during the planch epoch?',
        choice1: 'Time, Gas, Blackhole, Stars',
        choice2: 'Gravity, Nuclear Storng force, Nuclear Weak force, Electromagnetic',
        choice3: 'Dark Matter, Dark Energy, Matter, Anti-Matter',
        answer: 2,
        topic: "Bigbang"
    },
    {
        questions:'How does a blackhole created?',
        choice1: 'It came from the bigbang',
        choice2: 'Divine Intervention',
        choice3: 'Exploding stars',
        answer: 3,
        topic: "Blackhole"
    },
    {
        questions:'What was before the Bigbang?',
        choice1: 'Nothingness',
        choice2: 'Singularity',
        choice3: 'We dont know',
        answer: 2,
        topic: "Bigbang"
    },
    {
        questions:'What force that can be found inside a blackhole?',
        choice1: 'Electromagnetism',
        choice2: 'Radiation',
        choice3: 'Gravity',
        answer: 3,
        topic:"Blackhole"
    },
    {
        questions:'Points in space that are dense to create deep gravity sinks',
        choice1: 'Gravitational Pull',
        choice2: 'Black Hole',
        choice3: 'Mass',
        answer: 2,
        topic: "Blackhole"
    },
    {
        questions:'Which of these are part of Black Hole?',
        choice1: 'Instellar',
        choice2: 'Super Dense',
        choice3: 'Stellar',
        answer: 3,
        topic: "Blackhole"

    },
    {
        questions:'What was the two era during the early stage of the Bigbang?',
        choice1: 'Light era and Star era',
        choice2: 'Radiation era and Matter era',
        choice3: 'Hadron epoch and Lepton epoch',
        answer: 3,
        topic: "Bigbang"
    },
    {
        questions:'Black Hole are also',
        choice1: 'Messy Eaters',
        choice2: 'Superheat',
        choice3: 'Emit Radiations',
        answer: 1,
        topic: "Blackhole"
    },
]



//declaring variables for points and maximmum questions
const TOTAL_POINTS = 1;
const MAX_QUESTIONS = 10;

//function for starting a quiz
startQuiz = () => {
    counter = 0 // counting for questions set to 0
    score = 0 // score set to 0
    questionsAvailable = [...questions] // available questions getting it from the questions we declared earlier
    newQuestions() //functions for newquestions looping through every questions in the array
    stop()
    checkAnswer()
}

//the questions fucntion
newQuestions = () => {
    //if else statement to set the score to previous score
    if(questionsAvailable.length === 0 || counter > MAX_QUESTIONS){
        localStorage.setItem('previousScore', score)
        showResults()
        return window.location.assign('pick_page.html')
 
    }
    counter++ //add everytime we loop to the question and count it

    //question Index and some math stuff to calculate available questions
    const questionIndex = Math.floor(Math.random() * questionsAvailable.length)
    currentQuestions = questionsAvailable[questionIndex]
    question.innerText = currentQuestions.questions

    //forEach loop and setting up choice looping through answers in index.html
    choices.forEach(choice =>{
         const number = choice.dataset['number'] //creating constant variable number and setting it up to datasets of choices via array number
         choice.innerText = currentQuestions['choice'+ number] // answer variable added to choices dataset
    })

    questionsAvailable.splice(questionIndex,1)

    acceptingAnswer = true

   

}

// show the results and suggest topics for the student to focus on
function showResults() {
  // display the results
  //alert(`You scored ${score} out of ${MAX_QUESTIONS}`);

  // suggest topics for the student to focus on
  for (let topic in answersByTopic) {
    if (answersByTopic[topic] < 3) {
      alert(` It seems that you dont have enough knowledge to a particular topic, our system requires that you focus on ${topic} topic.`);
    }
  }
}

/*
//choices set to clickable
choices.forEach(choice => {
 choice.addEventListener('click', e => {
    if(!acceptingAnswer) 
    return
    acceptingAnswer = false
    const selectedChoices = e.target
    const selectedAnswer = selectedChoices.dataset['number']

  

    let apply = selectedAnswer == currentQuestions.answer ? 'correct' : 'incorrect'

    
    if(apply === 'correct'){
        incrementScore(TOTAL_POINTS)
        }
    selectedChoices.parentElement.classList.add(apply)

    setTimeout(() =>{
         selectedChoices.parentElement.classList.remove(apply)
         newQuestions()
    }, 500)
   
 })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}
*/

stop = () =>{
    let wrong = false
    if(apply === wrong){
        startQuiz.stop();
    }
    
}

$(document).ready(function(){
    $('#button').click(function(){
            $('#hintText').toggle()
    })
})





let answersByTopic = {
    Blackhole: 0,
    Bigbang: 0
  };
  
  choices.forEach(choice => {
    choice.addEventListener("click", e => {
      checkAnswer(e); // call the checkAnswer function when the user clicks on a choice
    });
  });


  // check if the user's answer is correct
  // check if the user's answer is correct
function checkAnswer(e) {
    if (!acceptingAnswer) return; // if the question has already been answered, do nothing
  
    acceptingAnswer = false; // prevent the user from answering again
    const selectedChoice = e.target; // the selected choice element
    const selectedAnswer = parseInt(selectedChoice.dataset["number"]); // the selected answer as a number
    const classToApply =
      selectedAnswer == currentQuestions.answer ? "correct" : "incorrect"; // determine if the answer is correct or not
  
    // update the score
    if (classToApply === "correct") {
      score++;
      scoreText.textContent = score;
      // update the number of correct answers for the question's topic
      answersByTopic[currentQuestions.topic]++;
    }
  
    // display the value of the answersByTopic object
    console.log(answersByTopic);
  
    selectedChoice.parentElement.classList.add(classToApply); // apply the correct or incorrect class
  
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply); // remove the correct or incorrect class after a delay
      newQuestions(); // get a new question
    }, 500);
  
}

incrementScore = num => {
    score += num
    scoreText.innerText = score
}












startQuiz()
