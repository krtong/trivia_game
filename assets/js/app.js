class TriviaQuestion {
    constructor(question, correct, incorrectArr, img) {
        Object.assign(this, {
            question,
            correct,
            incorrectArr,
            img
        })
    }
}

let questions = {
    questionOne: new TriviaQuestion(
        `Who wrote "crazy in love?"`,
        `4`,
        ["1", "2", "3"],
        "beyonce.webp"
    ),
    questionTwo: new TriviaQuestion(
        `Who wrote "Tub Thumper?"`,
        `9`,
        ["6", "7", "8"],
        "beyonce.webp"
    ),
    questionThree: new TriviaQuestion(
        `Who wrote "I like big butts and i cannot lie?"`,
        `13`,
        ["10", "11", "12"],
        "beyonce.webp"
    ),

};

//functions
function random(value) {
    return Math.floor(Math.random() * value)
};

function initialize() {
    let objArr = Object.values(questions); //randomizes the question
    let randomIdx = random(objArr.length);
    let [question, correct, incorrectArr, img] = Object.values(objArr[randomIdx]);

    incorrectArr.push(correct);
    
    for (let i = 0; i < 3; i++) { //randomizes the order of  multiple choice answers.
        if (random(100) < 50) {
            let temp = incorrectArr[i + 1]
            incorrectArr[i + 1] = incorrectArr[i];
            incorrectArr[i] = temp;
        }
    };

    let html = `<ul>`;
    incorrectArr.map(choice => html += `<li class="choice">${choice}</li>`);

    function isCorrect() {
        let message = $(this).html() === correct ? "Correct!" : `Incorrect! The answer was ${correct}.`;
        let html = `<div>
                        <div><h1>${message}</h1></div>
                        <img src="./assets/img/${img}" alt="">
                    </div> `;

        $("#multiple-choice").empty()
        $("#question").html(html);
    };

    $("#question").html(question);
    $("#multiple-choice").html(html + "</ul>")
    $(".choice").click(isCorrect)
};



//click handlers
$("#start").click(initialize);