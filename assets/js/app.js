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
    let timesUp = false;
    let objArr = Object.values(questions); //randomizes the question
    let randomIdx = Math.floor(Math.random() * objArr.length);
    let [question, correct, arr, img] = Object.values(objArr[randomIdx]);
    let intervalId;
    let html = `<ul>`;

    //this section is for populating the page with multiple choice answers. 
    arr = arr.sort((a, b) => Math.random() > 0.5 ? 1 : -1);
    arr.map(choice => html += `<li class="choice">${choice}</li>`);

    function isCorrect() {
        let message;
        if (timesUp) message = [`Time's up.`, `The answer was ${correct}.`]
        else if ($(this).html() === correct) message = [`Correct!`, ``]
        else message = [`Incorrect!`, `The answer was ${correct}.`];
        let html = `<div>
                        <div><h1>${message[0]}</h1></div>
                        <div>${message[1]}</div>
                        <img src="./assets/img/${img}">
                    </div> `;
        $("#multiple-choice").empty()
        $("#timer").empty();
        $("#question").html(html);
        clearInterval(intervalId)
        setTimeout(initialize, 5000);
    };

    //this section is for creating the timer. 
    function run(number) {
        clearInterval(intervalId);
        $("#timer").html("<h2>" + number + "</h2>");
        intervalId = setInterval(function () {
            number--;
            $("#timer").html(`<h5>${number}</h5>`);
            if (number === 0) {
                timesUp = true;
                clearInterval(intervalId);
                isCorrect();
            }
        }, 1000);
    };
    
    run(10);
    $("#question").html(question);
    $("#multiple-choice").html(`${html}</ul>`)
    $(".choice").click(isCorrect)
};

$("#start").click(initialize);