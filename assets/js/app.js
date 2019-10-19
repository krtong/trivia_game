class TriviaQuestion {
    constructor(question, correct, incorrectArr, img ){
        Object.assign(this, {question, correct, incorrectArr, img})
    }
}

let questions = {
     questionOne : new TriviaQuestion (
        `Who wrote "crazy in love?"`,
        `Beyonce`,
        ["Rhianna", "Iggy Pop", "Foo Fighters"],
        "./assets/img/beyonce.webp"
    ),
    questionTwo : new TriviaQuestion (
        `Who wrote "Tub Thumper?"`,
        `Chumba Wumba`,
        ["Christina Agulara", "Beyonce", "Foo Fighters"],
        "./assets/img/beyonce.webp"
    ),
    questionThree : new TriviaQuestion (
        `Who wrote "Tub Thumper?"`,
        `Chumba Wumba`,
        ["Christina Agulara", "Beyonce", "Foo Fighters"],
        "./assets/img/beyonce.webp"
    ),
    
};


//functions
function initialize () {
    let keyArr = Object.keys(questions);
    let randomIdx = Math.floor(Math.random() * keyArr.length);

    
    console.log(randomIdx)
    console.log(Object.keys(questions));



};



//click handlers
    $("#start").click(initialize);