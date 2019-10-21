class TriviaQuestion {
    constructor(question, correctAnswer, multipleChoices, img) {
        Object.assign(this, {question, correctAnswer, multipleChoices, img})
    }
}

const questions = {
    questionOne: new TriviaQuestion(
        `Who wrote "crazy in love?"`,
        `Beyonce`,
        ["Beyonce", "Jay-Z", "Desinty's Child", "Rhianna"],
        "beyonce.webp"
    ),
    questionTwo: new TriviaQuestion(
        `Who wrote "Tub Thumper?"`,
        `Chumbawumba`,
        ["Chumbawumba", "Red Hot Chili Peppers", "Blackfish", "Beck"],
        "beyonce.webp"
    ),
    questionThree: new TriviaQuestion(
        `Who wrote "I like big butts and i cannot lie?"`,
        `Sir Mix a lot`,
        [`Sir Mix a lot`, "Redman", "Ghostface Killah", "Africa Bambataa"],
        "beyonce.webp"
    ),
};

//functions
function initialize() {
    const objArr = Object.values(questions); //randomizes the question
    const randomIdx = Math.floor(Math.random() * objArr.length);
    const [question, correct, arr, img] = Object.values(objArr[randomIdx]);
    let intervalId;
    let timesUp = false;

    function populateMultiChoice() {
        const randomizedArr = arr.sort(() => Math.random() > 0.5 ? 1 : -1);
        let html = `<ul>`;
        randomizedArr.map(choice => html += `<li class="choice">${choice}</li>`);
        html += `</ul>`
        return html;
    };
    
    function isCorrect() {
        let message;
        if (timesUp) message = [`Time's up.`, `The correct answer was ${correct}.`]
        else if ($(this).html() === correct) message = [`Correct!`, ``]
        else message = [`Incorrect!`, `The correct answer was ${correct}.`];
        const [h1, correctAnswer] = message;
        const html = () => `<div>
                        <div><h1>${h1}</h1></div>
                        <div>${correctAnswer}</div>
                        <img src="./assets/img/${img}">
                    </div> `;
        $("#multiple-choice").empty()
        $("#timer").empty();
        $("#question").html(html);
        clearInterval(intervalId)
        setTimeout(initialize, 3000);
    };
    //this section is for creating the timer. 
    function run(timer) {
        const html = () => `<h5>${timer}</h5>`;
        clearInterval(intervalId);
        $("#timer").html(html);
        intervalId = setInterval(function () {
            timer--;
            $("#timer").html(html);
            if (timer === 0) {
                timesUp = true;
                clearInterval(intervalId);
                isCorrect();
            }
        }, 1000);
    };
    run(10);
    $("#question").html(question);
    $("#multiple-choice").html(populateMultiChoice)
    $(".choice").click(isCorrect)
};

$("#start").click(initialize);