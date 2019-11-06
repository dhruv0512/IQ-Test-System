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
        question : " Q.1 D,G,J,M,P,___",
        imgSrc : "img/cu.png",
        choiceA : "Q",
        choiceB : "R",
        choiceC : "S",
		choiceD : "T",
        correct : "C"
    },{
        question : " Q.2 KPD,LOE,MNF,NMG___",
        imgSrc : "img/clock.png",
        choiceA : "ONF",
        choiceB : "OLH",
        choiceC : "MLH",
		choiceD : "MNH",
        correct : "B"
    },{
        
		question: "Q.3 75,291,416,480,507___",
        imgSrc : "",
        choiceA : "515",
        choiceB : "532",
        choiceC : "511",
		choiceD : "521",
        correct : "A"
		
    },{
        
		question : " Q.4 132,182,306,380,552,870,___",
        imgSrc : "img/coin.png",
        choiceA : "930",
        choiceB : "1010",
        choiceC : "992",
		choiceD : "1142",
        correct : "C"
		
    },{
        
		question : " Q.5 Pen:Write :: Knife:___:",
        imgSrc : "img/ph.png",
        choiceA : "Vegetable",
        choiceB : "Cut",
        choiceC : "Sharp",
		choiceD : "Shoot",
        correct : "B"
		
    },{
        
		question : " Q.6 568:352 ::732:___",
        imgSrc : "",
        choiceA : "516",
        choiceB : "496",
        choiceC : "526",
		choiceD : "536",
        correct : "D"
		
    },{
        
		question : " Q.7 Find the odd one:",
        imgSrc : "img/ship.png",
        choiceA : "Mercury",
        choiceB : "Moon",
        choiceC : "Jupiter",
		choiceD : "Saturn",
        correct : "B"
		
    },{
        
		question : "Q.8 Find the odd one:",
        imgSrc : "img/radio.png",
        choiceA : "10",
        choiceB : "50",
        choiceC : "290",
		choiceD : "120",
        correct : "C"
		
    },{
        
		question :  " Q.9 In a certain code language, if the word 'REJECTION' is coded as 'SGMIHZPWW',then how is the word'MECHANIC' coded in that language?",
        imgSrc : "img/xy.png",
        choiceA : "NGFLFTPK",
        choiceB : "NGPLFTPK",
        choiceC : "NGFKFTPK",
		choiceD : "NGPTPKIL",
        correct : "A"
		
    },{
        
		question : " Q.10 In a certain code language,if CABINET=70 and BEAUTY=60, then PRODUCTION=",
        imgSrc : "img/nap.png",
        choiceA : "110",
        choiceB : "90",
        choiceC : "100",
		choiceD : "120",
        correct : "C"
		
    },{
        
		question : " Q.11 Y is the daughter of X's brother's wife father-in-law,Y is X's__",
        imgSrc : "img/vista.png",
        choiceA : "Niece",
        choiceB : "Daughter",
        choiceC : "Sister",
		choiceD : "Sister-in-Law",
        correct : "C"
		
    },{
        
		question : " Q.12 P,Q,R,S and T sit around a table. P sits two seats to the left of R and Q sits two seats to the right of R. Which of the following cannot be the correct seating arrangement of the five persons in either the clockwise direction or the anti-clockwise direction?",
        imgSrc : "img/sports.png",
        choiceA : "P,Q,R,S,T",
        choiceB : "P,S,R,T,Q",
        choiceC : "P,Q,S,R,T",
		choiceD : "P,T,R,S,Q",
        correct : "A"
		
    },{
        
		question : " Q.13 P,Q,R,S and T sit around a table. P sits two seats to the left of R and Q sits two seats to the right of R.If S is not sitting next to Q, who is sitting between Q and S?",
        imgSrc : "img/colors.png",
        choiceA : "R",
        choiceB : "P",
        choiceC : "T",
		choiceD : "Both R&P",
        correct : "B"
		
    },{
        
		question : "ATP stands for:",
        imgSrc : "img/atp.png",
        choiceA : "Adenine triphosphate",
        choiceB : "Adenosine triphosphate",
        choiceC : "Adenosine Diphosphate",
		choiceD : "Adenosine tetraphosphate",
        correct : "B"
		
    },{
        
		question : "Find the average of first 40 natural numbers.",
        imgSrc : "",
        choiceA : "40",
        choiceB : "35",
        choiceC : "30.6",
		choiceD : "20.5",
        correct : "D"
		
    },{
        
		question : "  Find what is the next letter. Please try to find. O,T,T,F,F,S,S,E,N,_ What is that letter?",
        imgSrc : "img/letter.png",
        choiceA : "B",
        choiceB : "S",
        choiceC : "Q",
		choiceD : "T",
        correct : "D"
		
    },{
        
		question : " A can have a piece of work done in 8 days, B can work three times faster than the A, C can work five times faster than A. How many days will they take to do the work together",
        imgSrc : "img/can.png",
        choiceA : "3 days",
        choiceB : "8/9 days",
        choiceC : "4 days",
		choiceD : "none of the above",
        correct : "B"
		
    },{
        
		question : " Which of the following statements is correct?",
        imgSrc : "img/",
        choiceA : "99/101 > 97/99 > 95/97",
        choiceB : "970/1012 > 972/992 > 952/972",
        choiceC : "99/101 > 97/99 > 99/97",
		choiceD : "99/101 > 99/99 > 99/97",
        correct : "A"
		
    },{
        
		question : "A farmer has a rectangular plot. He wants to do fencing along one of the side with the help of the posts. Two posts being on two corners. He brings 5 post less than what he has initially plan because of which the distance between two consecutive post became 8 m instead of 6 m.. What is the length of the side and no of post? ",
        imgSrc : "img/",
        choiceA : " 100,16",
        choiceB : "120 , 16",
        choiceC : "120,10",
		choiceD : "100,10",
        correct : "B"
		
    },{
        
		question: "Four horses are tethered at the four corners of a square of side 14cm such that two horses along the same side can just reach each other. They were able to graze the area in 11 days. How many days will they take in order to graze the left out area? ",
        imgSrc : "img/",
        choiceA : "1",
        choiceB : "2",
        choiceC : "5",
		choiceD : "3",
        correct : "D"
		
    },{
        
		question : " KPD,LOE,MNF,NMG___ ",
        imgSrc : "img/",
        choiceA : "ONF",
        choiceB : "OLH",
        choiceC : "MLH",
		choiceD : "MNH",
        correct : "B"
		
    },{
        
		question : " If a new person U joins the group such that the initial conditions for the seating arrangement should be observed /nand also a new condition that U does not sit next to P,S or T be satisfied,then who will be the neighbours of P?",
        imgSrc : "img/",
        choiceA : "S and T",
        choiceB : "S and Q",
        choiceC : "T and R",
		choiceD : "R and Q",
        correct : "C"
		
    },{
        
		question : " ",
        imgSrc : "img/",
        choiceA : "",
        choiceB : "",
        choiceC : "",
		choiceD : "",
        correct : ""
		
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
