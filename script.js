function button_question_one() {
    document.getElementById('question2').style.display = 'flex';
    document.getElementById('question1').style.marginBottom = '5%';
    document.getElementById('button-1').style.display = 'none';
    document.getElementById('button-2').style.display = 'flex';
    document.getElementById('question-1-text').style.display = 'none';
    document.getElementById('question-2-text').style.display = 'flex';
    document.getElementById('summary').style.display = 'none';
    var audio = new Audio('duck-quacking-37392.mp3');
    audio.play();
};


function button_question_two() {
    document.getElementById('question3').style.display = 'none';
    document.getElementById('button-2').style.display = 'none';
    document.getElementById('question3-buttons').style.display = 'flex';
    document.getElementById('question-2-text').style.display = 'none';
    document.getElementById('question-3-text').style.display = 'flex';
    document.getElementById('question2').style.marginBottom = '5%';
    document.getElementById('formblock').style.paddingTop = '25%';
    document.getElementById('formblock').style.paddingBottom = '10%';
    document.getElementById('formblock').style.overflow = 'scroll';
    var audio = new Audio('duck-quacking-37392.mp3');
    audio.play();
};



function button_question_three() {
    document.getElementById('formblock').style.overflow = 'hidden';
    document.getElementById('question2').style.display = 'none';
    document.getElementById('question1').style.display = 'none';
    document.getElementById('question3').style.display = 'none';
    document.getElementById('question-3-text').style.display = 'none';
    document.getElementById('question-4-text').style.display = 'flex';
    document.getElementById('question5-buttons').style.display = 'none';
    document.getElementById('question3-buttons').style.display = 'none';
    document.getElementById('question6-buttons').style.display = 'flex';
    document.getElementById('question-5-text').style.display = 'none';
    var audio = new Audio('duck-quacking-37392.mp3');
    audio.play();
};


function button_question_three_one() {
    document.getElementById('formblock').style.overflow = 'hidden';
    document.getElementById('question-4-text').style.display = 'none';
    document.getElementById('question-6-text').style.display = 'flex';
    document.getElementById('question-5-text').style.display = 'none';
    document.getElementById('question5-buttons').style.display = 'none';
    document.getElementById('question4-buttons').style.display = 'none';
    document.getElementById('question6-buttons').style.display = 'none';
    var audio = new Audio('duck-quacking-37392.mp3');
    audio.play();
};



function button_question_four() {
    document.getElementById('question6-buttons').style.display = 'none';
    document.getElementById('question2').style.display = 'none';
    document.getElementById('question1').style.display = 'none';
    document.getElementById('question3').style.display = 'none';
    document.getElementById('formblock').style.overflow = 'hidden';
    document.getElementById('question5-buttons').style.display = 'flex';
    document.getElementById('question3-buttons').style.display = 'none';
    document.getElementById('question-4-text').style.display = 'none';
    document.getElementById('question-3-text').style.display = 'none';
    document.getElementById('question-4-text').style.display = 'none';
    document.getElementById('question-5-text').style.display = 'flex';
     document.getElementById('question5-buttons').style.display = 'flex';
     var audio = new Audio('duck-quacking-37392.mp3');
     audio.play();
};


function button_question_five() {
    document.getElementById('question6').style.display = 'flex';
    document.getElementById('question6-buttons').style.display = 'flex';
    document.getElementById('button-5').style.display = 'none';
    document.getElementById('question-5-text').style.display = 'none';
    document.getElementById('question-6-text').style.display = 'flex';
    var audio = new Audio('duck-quacking-37392.mp3');
    audio.play();
};

function reset_animation() {
    var el = document.getElementById('duck');
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null; 
}

function Darkmode(){
    const ButtonCollection = document.getElementsByClassName("button");
    ButtonCollection[0].style.backgroundColor = "#3E3C3E";
    ButtonCollection[0].style.color = "white";
    ButtonCollection[1].style.backgroundColor = "#3E3C3E";
    ButtonCollection[1].style.color = "white";
    const QuestionCollection = document.getElementsByClassName("duck-text");
    QuestionCollection[0].style.backgroundColor = "#3E3C3E";
    QuestionCollection[0].style.color = "white";
    const FieldCollection = document.getElementsByClassName("input-fields");
    FieldCollection[0].style.backgroundColor = "#3E3C3E";
    FieldCollection[0].style.color = "white";
    document.getElementById('textcite').style.backgroundColor = '#3E3C3E';
    document.getElementById('main-left').style.backgroundColor = '#2A282A';
    document.getElementById('intro').style.color = 'white';


}
