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
    }, 
    {
        questions:'How can we spot Blackholes?',
        choice1: 'Through quasars and accretion disk',
        choice2: 'By using our telescopes',
        choice3: 'Observing galaxies that has supermassive blackholes',
        answer: 1,
    },
    {
        questions:'what is the stellar blackholes mass?',
        choice1: '30 times the mass of dwarf stars',
        choice2: '10 to 20 times the mass of our sun',
        choice3: '15 times the mass of our solar system',
        answer: 2,
    },
    {
        questions:'What is the four forces of nature during the planch epoch?',
        choice1: 'Time, Gas, Blackhole, Stars',
        choice2: 'Gravity, Nuclear Storng force, Nuclear Weak force, Electromagnetic',
        choice3: 'Dark Matter, Dark Energy, Matter, Anti-Matter',
        answer: 2,
    },
    {
        questions:'How does a blackhole created?',
        choice1: 'It came from the bigbang',
        choice2: 'Divine Intervention',
        choice3: 'Exploding stars',
        answer: 3
    },
    {
        questions:'What happens if a matter enters a blackhole?',
        choice1: 'Spaghettigication',
        choice2: 'Compress',
        choice3: 'Evaporates',
        answer: 1,
    },
    {
        questions:'What force that can be found inside a blackhole?',
        choice1: 'Electromagnetism',
        choice2: 'Radiation',
        choice3: 'Gravity',
        answer: 3,
    },
    {
        questions:'Points in space that are dense to create deep gravity sinks',
        choice1: 'Gravitational Pull',
        choice2: 'Black Hole',
        choice3: 'Mass',
        answer: 2,
    },
    {
        questions:'Which of these are part of Black Hole?',
        choice1: 'Instellar',
        choice2: 'Super Dense',
        choice3: 'Stellar',
        answer: 3,

    },
    {
        questions:'Which part of Black Hole predicted by Albert Einstein',
        choice1: 'Instellar',
        choice2: 'Supermassive',
        choice3: 'Super Dense',
        answer: 2,
    },
    {
        questions:'Black Hole are also',
        choice1: 'Messy Eaters',
        choice2: 'Superheat',
        choice3: 'Emit Radiations',
        answer: 1,
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
}

//the questions fucntion
newQuestions = () => {
    //if else statement to set the score to previous score
    if(questionsAvailable.length === 0 || counter > MAX_QUESTIONS){
        localStorage.setItem('previousScore', score)
        return window.location.assign('off(2).html')
 
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

    stop()

}

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



startQuiz()
