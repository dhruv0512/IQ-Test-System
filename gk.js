const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress= document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// to  create our questions
let questions = [
    {
        question : " Q.1 In which year of First World War Germany declared war on Russia and France?",
        imgSrc : "gk.png",
        choiceA : "1914",
        choiceB : "1915",
        choiceC : "1916",
		choiceD : "1917",
        correct : "A"
    },{
        question : " Q.2 India has largest deposits of ____ in the world.",
        imgSrc : "gk.png",
        choiceA : "Gold",
        choiceB : "Copper",
        choiceC : "Mica",
		choiceD : "None of the above",
        correct : "C"
    },{
        
		question: "Q.3 How many Lok Sabha seats belong to Rajasthan?",
        imgSrc : "gk.png",
        choiceA : "32",
        choiceB : "25",
        choiceC : "30",
		choiceD : "17",
        correct : "B"
		
    },{
        
		question : " Q.4 India's first satellite is named after",
        imgSrc : "gk.png",
        choiceA : "Bhaskara II",
        choiceB : "Bhaskara I",
        choiceC : "Aryabhatta",
		choiceD : "Albert Einstein",
        correct : "C"
		
    },{
        
		question : " Q.5 India's first ocean wave's energy project was launched in",
        imgSrc : "gk.png",
        choiceA : "1981",
        choiceB : "1991",
        choiceC : "1995",
		choiceD : "2000",
        correct : "B"
		
    },{
        
		question : " Q.6 Logarithm tables were invented by",
        imgSrc : "gk.png",
        choiceA : "John Napier",
        choiceB : "John Doe",
        choiceC : "John Harrison",
		choiceD : "John Douglas",
        correct : "A"
		
    },{
        
		question : " Q.7 Joule is the unit of",
        imgSrc : "gk.png",
        choiceA : "temperature",
        choiceB : "pressure",
        choiceC : "energy",
		choiceD : "heat",
        correct : "C"
		
    },{
        
		question : "Q.8 Milkha Singh Stood ____ in 1960 Olympics, in Athletics.",
        imgSrc : "gk.png",
        choiceA : "fourth in 400m final",
        choiceB : "second in 400m final",
        choiceC : "eighth in 50km walk",
		choiceD : "seventh in 800m final",
        correct : "A"
		
    },{
        
		question :  " Q.9 Modern football is said to have evolved from",
        imgSrc : "gk.png",
        choiceA : "England",
        choiceB : "India",
        choiceC : "France",
		choiceD : "Spain",
        correct : "A"
		
    },{
        
		question : " Q.10 The 2006 World Cup Football Tournament held in",
        imgSrc : "gk.png",
        choiceA : "France",
        choiceB : "China",
        choiceC : "Germany",
		choiceD : "Brazil",
        correct : "C"
		
    },{
        
		question : " Q.11 Oscar Awards were instituted in",
        imgSrc : "gk.png",
        choiceA : "1968",
        choiceB : "1929",
        choiceC : "1901",
		choiceD : "1965",
        correct : "B"
		
    },{
        
		question : " Q.12 What is the language mostly used in Madhya Pradesh?",
        imgSrc : "gk.png",
        choiceA : "Hindi",
        choiceB : "Marathi",
        choiceC : "English",
		choiceD : "Malayalam",
        correct : "A"
		
    },{
        
		question : " Q.13 Zakir Hussain was",
        imgSrc : "gk.png",
        choiceA : "the third President of India",
        choiceB : "India's second vice President",
        choiceC : "both (a) and (b)",
		choiceD : "None of the above",
        correct : "C"
		
    },{
        
		question : "Q.14 When and where athletics introduced in the Olympics?",
        imgSrc : "gk.png",
        choiceA : "1896 at Athens",
        choiceB : "1900 at Paris",
        choiceC : "1992 at Barcelona",
		choiceD : "	1995 at Athens",
        correct : "A"
		
    },{
        
		question : "Q.15 Find the average of first 40 natural numbers.",
        imgSrc : "gk.png",
        choiceA : "40",
        choiceB : "35",
        choiceC : "30.6",
		choiceD : "20.5",
        correct : "D"
		
    },{
        
		question : "Q.16 Where did 2010 Commonwealth Games took place?",
        imgSrc : "gk.png",
        choiceA : "Beijing, China.",
        choiceB : "Kuala Lumpur, Malaysia",
        choiceC : "Victoria, Canada",
		choiceD : "New Delhi, India",
        correct : "D"
		
    },{
        
		question : "Q.17 Which is the language used in Bihar?",
        imgSrc : "gk.png",
        choiceA : "Hindi",
        choiceB : "Marathi and English",
        choiceC : "Urdu",
		choiceD : "Bangla",
        correct : "A"
		
    },{
        
		question : "Q.18 The Central Command of Army is located at",
        imgSrc : "gk.png",
        choiceA : "Pune",
        choiceB : "Udhampur",
        choiceC : "Lucknow",
		choiceD : "Mhow",
        correct : "C"
		
    },{
        
		question : "Q.19 The electron was first identified by",
        imgSrc : "gk.png",
        choiceA : "J. J. Thompson",
        choiceB : "J. Kepler",
        choiceC : "D. Rutherford",
		choiceD : "James Chadwick",
        correct : "A"
		
    },{
        
		question: "Q.20 The largest lake in India is",
        imgSrc : "gk.png",
        choiceA : "Luni lake",
        choiceB : "Sambhar lake",
        choiceC : "Wular lake",
		choiceD : "None of the above",
        correct : "C"
		
    },{
        
		question : "Q.21 The largest city of India is",
        imgSrc : "gk.png",
        choiceA : "New Delhi",
        choiceB : "Mumbai",
        choiceC : "Kolkata",
		choiceD : "Chennai",
        correct : "B"
		
    },{
        
		question : "Q.22 The last ruler of the Mughal dynasty was",
        imgSrc : "gk.png",
        choiceA : "Babur",
        choiceB : "Bahadurshah Zafar",
        choiceC : "Akbar",
		choiceD : "None of the above",
        correct : "B"
		
    },{
        
		question : "Q.23 The highest rank in Army is that of",
        imgSrc : "gk.png",
        choiceA : "Brigadier",
        choiceB : "General",
        choiceC : "Lieutenant General",
		choiceD : "Major General",
        correct : "B"
		
    }
        
		
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 30; // 30s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
	choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// for render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++;
    }else{
        count = 0;
        // to change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// for answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// for answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// for score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // to calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // to choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "download.png" :
              (scorePerCent >= 60) ? "download(1).png" :
              (scorePerCent >= 40) ? "download(2).png" :
              (scorePerCent >= 20) ? "download(3).png" :
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}
