const final = document.querySelector('.score')
const previous = localStorage.getItem('previousScore')


const scoreArray = previous.split('').map(char => parseInt(char)).filter(num => !isNaN(num));
final.innerText = previous;


const svm = require('svm');


function classifyStudents(scores) {
  // Define the training data for the SVM
  const trainingData = [
    { input: [10], output: 'high-performing' },
    { input: [9], output: 'high-performing' },
    { input: [8], output: 'high-performing' },
    { input: [7], output: 'high-performing' },
    { input: [6], output: 'low-performing' },
    { input: [5], output: 'low-performing' },
    { input: [4], output: 'low-performing' },
    { input: [3], output: 'low-performing' },
    { input: [2], output: 'low-performing' },
    { input: [1], output: 'low-performing' }
  ];

  // Train the SVM
  const model = svm.train(trainingData);

  // Use the trained SVM to classify the input scores
  const predictions = scores.map(score => model.predict([score]));

  return predictions;
}

var score = scoreArray[0];
const predictions = classifyStudents(score);

console.log(predictions);


if (predictions[0] === 'high-performing') {
    console.log('The student does not need to retake the quiz.');
  } else {
    console.log('The student should retake the quiz.');
  }

 