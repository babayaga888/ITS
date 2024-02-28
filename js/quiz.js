//declaring variables and getting it from the html page
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
        questions:'When did the Bigbang exploded?',
        choice1: '13.7 billion years ago',
        choice2: '19.8 billion years ago',
        choice3: '7 trillion years ago',
        answer: 1,
    }, 
    {
        questions:'What was created during the Bigbang?',
        choice1: 'Matter, Energy, Scpace, Time',
        choice2: 'Water, Air, Land',
        choice3: 'Animal, Plants, Humans',
        answer: 1,
    },
    {
        questions:'What was the two era during the early stage of the Bigbang?',
        choice1: 'Light era and Star era',
        choice2: 'Radiation era and Matter era',
        choice3: 'Hadron epoch and Lepton epoch',
        answer: 3,
    },
    {
        questions:'What is the four forces of nature during the planch epoch?',
        choice1: 'Time, Gas, Blackhole, Stars',
        choice2: 'Gravity, Nuclear Storng force, Nuclear Weak force, Electromagnetic',
        choice3: 'Dark Matter, Dark Energy, Matter, Anti-Matter',
        answer: 2,
    },
    {
        questions:'Is Bigbang a?',
        choice1: 'Explosion',
        choice2: 'Deflation',
        choice3: 'Rapid expansion',
        answer: 3
    },
    {
        questions:'What was before the Bigbang?',
        choice1: 'Nothingness',
        choice2: 'Singularity',
        choice3: 'We dont know',
        answer: 2,
    },
    {
        questions:'A Belgian Cosmologist and Catholic Priest who first suggested Big Bang Theory?',
        choice1: 'Georges Lemaître',
        choice2: 'Boy Gerge',
        choice3: 'Jorge Lemaître',
        answer: 1,

    },
    {
        questions:'What year Big Bang Theory first suggested',
        choice1: '1931',
        choice2: '1920',
        choice3: '1918',
        answer: 1,

    },
    {
        questions:'There was not a single star in the Universe until',
        choice1: '180 Million Years',
        choice2: '141 Million Years',
        choice3: '169 Million Years',
        answer: 1,

    },
    {
        questions: 'In 2018 Australian team detected signs of',
        choice1: 'Cosmic Dawn',
        choice2: 'Galaxy',
        choice3: 'Milky Way',
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
        return window.location.assign('off.html')
 
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


