const question =[
    {
        question: "Which is Food does like the most?",
        answer:[
            {text:"Pizza", correct:false},
            {text:"Momos", correct:true},
            {text:"Burgar", correct:false},
            {text:"Biriyani", correct:false},
        ]
    },
    {
        question: "Which Movie like the most?",
        answer:[
            {text:"Horror", correct:true},
            {text:"Comady", correct:false},
            {text:"Action", correct:false},
            {text:"Romantic", correct:false},
        ]
    },
    {
        question: "Which Hero like?",
        answer:[
            {text:"Varun Dhawan", correct:false},
            {text:"Siddharth", correct:true},
            {text:"Sharukh Khan", correct:false},
            {text:"Tiger Sheroff", correct:false},
        ]
    },
    {
        question: "Which Footwear like to wear?",
        answer:[
            {text:"Flip Flop", correct:false},
            {text:"Snakers", correct:false},
            {text:"High Heels", correct:false},
            {text:"Sanddle", correct:true},
        ]
    },
    {
        question: "Which IceCream like the most to eat?",
        answer:[
            {text:"Vanilla", correct:true},
            {text:"Chocolate", correct:false},
            {text:"Strawberry", correct:false},
            {text:"Butter Pecan", correct:false},
        ]
    },
    {
        question: "Which type of girl is?",
        answer:[
            {text:"Cute", correct:false},
            {text:"Innocent", correct:false},
            {text:"Simple", correct:false},
            {text:"Simple Sweet Cute", correct:true},
        ]
    },
    {
        question: "Which Hairstyle like the most?",
        answer:[
            {text:"Butterfly Hair", correct:true},
            {text:"Long Curle Hair", correct:false},
            {text:"Side Swept Bangs Hair", correct:false},
            {text:"Layers with Curtain Bangs Hair", correct:false},
        ]
    },
    {
        question: "Which Color like the most?",
        answer:[
            {text:"Red", correct:false},
            {text:"Black", correct:true},
            {text:"Blue", correct:false},
            {text:"Pink", correct:false},
        ]
    },
    {
        question: "Which Car like the most?",
        answer:[
            {text:"Thar", correct:false},
            {text:"Range Rover", correct:false},
            {text:"Audi", correct:false},
            {text:"BMW", correct:true},
        ]
    },
    {
        question: "Which family Member the most Akshu in her Home?",
        answer:[
            {text:"Gurdiya Didi", correct:false},
            {text:"Nishu Didi", correct:false},
            {text:"Anshika Babu", correct:true},
            {text:"Yuvraj", correct:false},
        ]
    },
    {
        question: "Which Clothes like most to wear?",
        answer:[
            {text: "Suits" , correct:false},
            {text: "Saree" , correct:false},
            {text: "Top Jeans", correct:false},
            {text: "Barbie Frocks", correct:true},
        ]
    }
    
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const next = document.getElementById("next");
const appp = document.getElementsByClassName("app");
const bbox = document.getElementsByClassName("box");
let btn4 = document.getElementsByClassName("btn1");

function change(){
document.getElementsByClassName("app").style.backgroundColor ="black";
}

let currentquestionindex = 0;
let score = 0;
 function startquiz(){
    currentquestionindex = 0;
    score = 0;
    next.innerHTML ="Next";

    showquestion();
 }
  function showquestion(){
    restate();
    let currentQuestion = question[currentquestionindex];
    let questionNo = currentquestionindex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question ;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function restate(){
next.style.display ="none";
while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
}
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect  =selectedBtn.dataset.correct =="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect"); 
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    next.style.display ="block";    
}
 
function showscore(){
    restate();
    questionElement.innerHTML= `you scored ${score} out of ${question.length}!`;
    next.innerHTML="Play Again";
    next.style.display ="block";
}
function handlenext(){
    currentquestionindex++;
    if(currentquestionindex < question.length){
        showquestion();
    }
    else{
        showscore();
    }
}
next.addEventListener("click",()=>{
    if(currentquestionindex < question.length){
        handlenext();
    }
    else{
        startquiz();
    }
})
 startquiz();