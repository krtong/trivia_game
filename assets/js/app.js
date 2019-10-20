class TriviaQuestion {
    constructor(question, correct, incorrectArr, img ){
        Object.assign(this, {question, correct, incorrectArr, img})
    }
}

let questions = {
     questionOne : new TriviaQuestion (
        `Who wrote "crazy in love?"`,
        `4`,
        ["1", "2", "3"],
        "./assets/img/beyonce.webp"
    ),
    questionTwo : new TriviaQuestion (
        `Who wrote "Tub Thumper?"`,
        `9`,
        ["6", "7", "8"],
        "./assets/img/beyonce.webp"
    ),
    questionThree : new TriviaQuestion (
        `Who wrote "I like big butts and i cannot lie?"`,
        `13`,
        ["10", "11", "12"],
        "./assets/img/beyonce.webp"
    ),
    
};


//functions
function random (value) { 
    return Math.floor(Math.random() * value)
};

function initialize () {
    let objArr = Object.values(questions);
    let randomIdx = random(objArr.length);
    let [question, correct, incorrectArr, img] = Object.values(objArr[randomIdx]);

    incorrectArr.push(correct);

    for (let i = 0; i < 3; i++) {
        if (random(100) < 50)  {
            let temp = incorrectArr[i+1]
            incorrectArr[i+1] = incorrectArr[i];
            incorrectArr[i] = temp;
        }
    }
    

    let html = `<ul>`;
    incorrectArr.map(function(choice) {
        html += `<li>${choice}</li>`
    });

    $("#question").html(question);
    $("#multiple-choice").html(html + "</ul>")
};



//click handlers
    $("#start").click(initialize);