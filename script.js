function checkResume(){

let keywords = [

"python",

"sql",

"communication",

"leadership",

"javascript",

"html",

"css"

];


let resume = document
.getElementById("resume")
.value
.toLowerCase();


let matched = [];

let missing = [];


for(let word of keywords){

if(resume.includes(word)){

matched.push(word);

}

else{

missing.push(word);

}

}


let percentage =
(Math.round(
matched.length /
keywords.length * 100
));


document.getElementById("matched")
.innerHTML =

" Matched Skills : "

+ matched.join(", ");



document.getElementById("missing")
.innerHTML =

" Missing Skills : "

+ missing.join(", ");



document.getElementById("bar")
.value = percentage;



document.getElementById("score")
.innerHTML =

" Match Percentage : "

+ percentage + "%";



let message = "";


if(percentage >= 80){

message =
" Excellent Match!";

}


else if(percentage >= 50){

message =
" Moderate Match";

}


else{

message =
" Needs Improvement";

}


document.getElementById("message")
.innerHTML = message;

}