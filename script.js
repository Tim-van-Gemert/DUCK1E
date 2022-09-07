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
    document.getElementById("question1").style.pointerEvents = "none";
};


function button_question_two() {
    document.getElementById('question3').style.display = 'none';
    document.getElementById('button-2').style.display = 'none';
    document.getElementById('question3-buttons').style.display = 'flex';
    document.getElementById('question-2-text').style.display = 'none';
    document.getElementById('question-3-text').style.display = 'flex';
    document.getElementById('question2').style.marginBottom = '5%';
    document.getElementById('formblock').style.paddingTop = '15%';
    document.getElementById('formblock').style.paddingBottom = '10%';
    document.getElementById('formblock').style.overflow = 'hidden';
    var audio = new Audio('duck-quacking-37392.mp3');
    audio.play();
    document.getElementById("question1").style.pointerEvents = "none";
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
    document.getElementById("question1").style.pointerEvents = "none";
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
    document.getElementById('question8-buttons').style.display = 'none';
    document.getElementById('question-8-text').style.display = 'none';
    document.getElementById('question8').style.display = 'none';
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

function button_question_four_one() {
    document.getElementById('question6-buttons').style.display = 'none';
    document.getElementById('question2').style.display = 'none';
    document.getElementById('question1').style.display = 'none';
    document.getElementById('question3').style.display = 'none';
    document.getElementById('formblock').style.overflow = 'hidden';

    document.getElementById('question-3-text').style.display = 'none';
    document.getElementById('question3-buttons').style.display = 'none';

      
    document.getElementById('question8-buttons').style.justifyContent = 'flex-start';

    document.getElementById('question8-buttons').style.display = 'flex';
    document.getElementById('question-8-text').style.display = 'flex';
    document.getElementById('question8').style.display = 'flex';


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

    buttoncolor = document.getElementsByClassName('button');
    for (var i = 0; i < buttoncolor.length; i++) {
        buttoncolor[i].style.backgroundColor="#3E3C3E";
        buttoncolor[i].style.color="white";
    }

    fieldcolor = document.getElementsByClassName('input-fields');
    for (var i = 0; i < fieldcolor.length; i++) {
        fieldcolor[i].style.backgroundColor="#3E3C3E";
        fieldcolor[i].style.color="white";
    };

    questionfields = document.getElementsByClassName('duck-text');
    for (var i = 0; i < questionfields.length; i++) {
        questionfields[i].style.backgroundColor="#2A282A";
        questionfields[i].style.color="white";
    };

    document.getElementById('textcite').style.backgroundColor = '#2A282A';
    document.getElementById('main-left').style.backgroundColor = '#2A282A';
    document.getElementById('main-right').style.backgroundColor = '#353231';
    document.getElementById('intro').style.color = 'white';

    document.getElementById("darkmode_button").style.innerHTML = "L1GHTMODE";

    
}