const myQuiz = [
    { question: 'Who played Batman in the 1966 television series Batman' , answer: 'Adam West' },
    { question: 'Who played Catwoman in the 1966 television series Batman?' , answer: 'Julie Newmar' },
    { question: 'Who played Robin in the 1966 television series Batman?' , answer: 'Burt Ward' },
    { question: 'Who played the Penguin in the 1966 television series Batman?' , answer: 'Burgess Meredith' },
    { question: 'Who played the Joker in the 1966 television series Batman?' , answer: 'Cesar Romero' },
    { question: 'Who played the Riddler in the 1966 television series Batman?' , answer: 'Frank Gorshin' },
];
const randomQuestion = Math.round(Math.random() * myQuiz.length - 1);
console.log(randomQuestion);
let userAnswer = prompt(myQuiz[randomQuestion].question);
console.log(userAnswer);
alert('You answered ' + userAnswer + ' . The correct answer is: ' + myQuiz[randomQuestion].answer + '. (To play again, refresh your browser window.)');