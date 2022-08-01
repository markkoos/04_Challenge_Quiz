// global variables
var startButton = document.querySelector(`.start`);
var timerCount = document.querySelector(`.timecount`);
var quizText = document.querySelector(`.quiz-space`);
var rulesText = document.querySelector(`.rules`);
var answers = document.querySelector(`.answer-teller`);
var textBox = document.querySelector(`.initialbox`);
var submitBtn = document.createElement(`button`);
var addText = document.querySelector(`.added-text`);
var scoreBtn = document.querySelector(`.scorebutton`);

    // used when creating the choices for each question

var choices = document.createElement(`ul`);
var liOne = document.createElement(`li`);
var liTwo = document.createElement(`li`);
var liThree = document.createElement(`li`);

    // all the options during the quiz

var option1A = document.createElement(`button`);
var option1B = document.createElement(`button`);
var option1C = document.createElement(`button`);
var option2A = document.createElement(`button`);
var option2B = document.createElement(`button`);
var option2C = document.createElement(`button`);
var option3A = document.createElement(`button`);
var option3B = document.createElement(`button`);
var option3C = document.createElement(`button`);
var option4A = document.createElement(`button`);
var option4B = document.createElement(`button`);
var option4C = document.createElement(`button`);
var option5A = document.createElement(`button`);
var option5B = document.createElement(`button`);
var option5C = document.createElement(`button`);
var option6A = document.createElement(`button`);
var option6B = document.createElement(`button`);
var option6C = document.createElement(`button`);


// viewing scores button

scoreBtn.addEventListener(`click`, function() {
    var storedInput = localStorage.getItem(`input`);
    var storedTime = localStorage.getItem(`timeScore`);
    quizText.textContent = `${storedInput} - ${storedTime}`
})


// function that hides the rules once the start button is pressed 

function hideRules() {
    rulesText.textContent = ``
}

// function to disable button once the quiz starts 

function disableStart() {
    startButton.disabled = true;
}

// creates the listed quiz choice elements for each individual quiz question

function createChoicesQ1() {
    quizText.appendChild(choices);
    choices.appendChild(liOne);
    choices.appendChild(liTwo);
    choices.appendChild(liThree);
    liOne.appendChild(option1A);
    liTwo.appendChild(option1B);
    liThree.appendChild(option1C);
}

function createChoicesQ2() {
    quizText.appendChild(choices);
    choices.appendChild(liOne);
    choices.appendChild(liTwo);
    choices.appendChild(liThree);
    option1A.remove();
    option1B.remove();
    option1C.remove();
    liOne.appendChild(option2A);
    liTwo.appendChild(option2B);
    liThree.appendChild(option2C);
}

function createChoicesQ3() {
    quizText.appendChild(choices);
    choices.appendChild(liOne);
    choices.appendChild(liTwo);
    choices.appendChild(liThree);
    option2A.remove();
    option2B.remove();
    option2C.remove();
    liOne.appendChild(option3A);
    liTwo.appendChild(option3B);
    liThree.appendChild(option3C);
}

function createChoicesQ4() {
    quizText.appendChild(choices);
    choices.appendChild(liOne);
    choices.appendChild(liTwo);
    choices.appendChild(liThree);
    option3A.remove();
    option3B.remove();
    option3C.remove();
    liOne.appendChild(option4A);
    liTwo.appendChild(option4B);
    liThree.appendChild(option4C);
}

function createChoicesQ5() {
    quizText.appendChild(choices);
    choices.appendChild(liOne);
    choices.appendChild(liTwo);
    choices.appendChild(liThree);
    option4A.remove();
    option4B.remove();
    option4C.remove();
    liOne.appendChild(option5A);
    liTwo.appendChild(option5B);
    liThree.appendChild(option5C);
}

function createChoicesQ6() {
    quizText.appendChild(choices);
    choices.appendChild(liOne);
    choices.appendChild(liTwo);
    choices.appendChild(liThree);
    option5A.remove();
    option5B.remove();
    option5C.remove();
    liOne.appendChild(option6A);
    liTwo.appendChild(option6B);
    liThree.appendChild(option6C);
}

function clearChoices() {
    option6A.remove();
    option6B.remove();
    option6C.remove();
}

// function for starting the quiz (assigned to the button)

function quizStart() {

    // time given at start of the quiz

    var timeLeft = 45
    timerCount.textContent = `Time Left: ${timeLeft} seconds`;


    // timer function for the quiz

    function startTime() {
        timeCountdown = setInterval(function() {
            timeLeft--;
            timerCount.textContent = `Time Left: ${timeLeft} seconds`;

            // changes "seconds" to singular with 1 second left

            if (timeLeft === 1) {
                timerCount.textContent = `Time Left: ${timeLeft} second`;
            }
            
            // losing screen when timer hits 0

            if (timeLeft < 1) {

                // renables the start button after the quiz is finished

                startButton.removeAttribute(`disabled`)
                timerCount.textContent = ``
                quizText.textContent = `you lose loser haha`;
                clearInterval(timeCountdown);
        
            }
        }, 1000 );
    }

    // for when you get an answer incorrect

    function wrong() {
        timeLeft = timeLeft - 5;
    }
    
    
    // series of the quiz questions with event listeners for the choices

    function quizQuestions() {
        
        var questionOne = quizText.textContent = `What does "DOM" stand for?`;
        option1A.textContent = `Deez Outstanding Muscles`;
        option1B.textContent = `Document Object Model`;
        option1C.textContent = `Digital Observation Model`;
        
        // incorrect answers remove 5 from timer and change font color to red
        option1A.addEventListener(`click`, function() {
            wrong();
            option1A.style.color = `red`;
            answers.textContent = `WRONG LOL`;
        })
            
        option1B.addEventListener(`click`, function() {
            answers.textContent = `YOU RIGHT`;

            // new question and options

            var questionTwo = quizText.textContent = `What is the file extension for a README?`;
            option2A.textContent = `.md`;
            option2B.textContent = `.txt`;
            option2C.textContent = `.html`;
            
            createChoicesQ2();
        
            option2A.addEventListener(`click`, function() {
                answers.textContent = `YOU RIGHT`;
                
                var questionThree = quizText.textContent = `What do you use to program a working button in Javascript?`;
                option3A.textContent = `.addEventListener`;
                option3B.textContent = `.buttonMaker`;
                option3C.textContent = `.createEvent`;

                createChoicesQ3();

                option3A.addEventListener(`click`, function() {
                    answers.textContent = `YOU RIGHT`;
                    
                    var questionFour = quizText.textContent = `What is typically at the bottom of a HTML webpage?`;
                    option4A.textContent = `Link to the CSS stylesheet`;
                    option4B.textContent = `<meta charset = "UTF-8">`;
                    option4C.textContent = `<footer>`;

                    createChoicesQ4();

                    option4A.addEventListener(`click`, function() {
                        wrong();
                        option4A.style.color = `red`;
                        answers.textContent = `WRONG LOL`;
                    }) 

                    option4B.addEventListener(`click`, function() {
                        wrong();
                        option4B.style.color = `red`;
                        answers.textContent = `WRONG LOL`;
                    }) 

                    option4C.addEventListener(`click`, function() {
                        answers.textContent = `YOU RIGHT`;

                        var questionFive = quizText.textContent = `What is used in CSS to style every element in the HTML?`;
                        option5A.textContent = `*`;
                        option5B.textContent = `~`;
                        option5C.textContent = `$`;
    
                        createChoicesQ5();

                        option5A.addEventListener(`click`, function() {
                            answers.textContent = `YOU RIGHT`;

                            var questionSix = quizText.textContent = `What does "CSS" stand for?`;
                            option6A.textContent = `Cool Super Soakers`;
                            option6B.textContent = `Canada's Slappin' Salami`;
                            option6C.textContent = `Cascading Style Sheets`;
        
                            createChoicesQ6();

                            option6A.addEventListener(`click`, function() {
                                wrong();
                                option6A.style.color = `red`;
                                answers.textContent = `WRONG LOL`;
                            }) 

                            option6B.addEventListener(`click`, function() {
                                wrong();
                                option6B.style.color = `red`;
                                answers.textContent = `WRONG LOL`;
                            }) 

                            option6C.addEventListener(`click`, function() {

                                // stops the timer and creates text for winning the game

                                answers.textContent = ``;
                                timerCount.textContent = timeLeft;
                                startButton.removeAttribute(`disabled`)
                                clearInterval(timeCountdown);
                                quizText.textContent = `you're a big winner baby! your score is ${timeLeft}! Please input your initials to save your score.`
                                clearChoices();
                                
                                // creates textbox, submit button, and saves the input to local storage

                                var input = document.createElement(`input`); 
                                input.setAttribute(`type`, `text`);
                                quizText.appendChild(input);
                                submitBtn.textContent = `Submit`
                                quizText.appendChild(submitBtn);
                                submitBtn.addEventListener(`click`, function() {
                                    localStorage.setItem(`input`, input.value);
                                    localStorage.setItem(`timeScore`, timeLeft);
                                    addText.textContent = `Thank you! click below to see the scoreboard`;
                                })
                            })
                        })

                        option5B.addEventListener(`click`, function() {
                            wrong();
                            option5B.style.color = `red`;
                            answers.textContent = `WRONG LOL`;
                        }) 

                        option5C.addEventListener(`click`, function() {
                            wrong();
                            option5C.style.color = `red`;
                            answers.textContent = `WRONG LOL`;
                        })  

            
                }) 

                option3B.addEventListener(`click`, function() {
                    wrong();
                    option3B.style.color = `red`;
                    answers.textContent = `WRONG LOL`;
                }) 

                option3C.addEventListener(`click`, function() {
                    wrong();
                    option3C.style.color = `red`;
                    answers.textContent = `WRONG LOL`;
                }) 

            
            })

            option2B.addEventListener(`click`, function() {
                wrong();
                option2B.style.color = `red`;
                answers.textContent = `WRONG LOL`;
            }) 

            option2C.addEventListener(`click`, function() {
                wrong();
                option2C.style.color = `red`;
                answers.textContent = `WRONG LOL`;
            }) 

        })

    })

        option1C.addEventListener(`click`, function() {
            wrong();
            option1C.style.color = `red`;
            answers.textContent = `WRONG LOL`;
        })
    }


    // calling upon functions that help the quiz questions display without issues with other elements

    startTime();
    hideRules();
    disableStart();
    quizQuestions();
    createChoicesQ1();
}

// event listener for the start button

startButton.addEventListener(`click`, quizStart);