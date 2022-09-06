
function button_question_one() {
    document.getElementById('question1').style.display = 'none';
    document.getElementById('question2').style.display = 'flex';

    document.getElementById('button-1').style.display = 'none';
    document.getElementById('button-2').style.display = 'flex';

    document.getElementById('question-1-text').style.display = 'none';
    document.getElementById('question-2-text').style.display = 'flex';

    document.getElementById('summary').style.display = 'none';
    

};


function button_question_two() {
    document.getElementById('question2').style.display = 'none';
    document.getElementById('question3').style.display = 'flex';

    document.getElementById('button-2').style.display = 'none';
    document.getElementById('button-3').style.display = 'flex';

    document.getElementById('question-2-text').style.display = 'none';
    document.getElementById('question-3-text').style.display = 'flex';

};


function button_question_three() {
    document.getElementById('question3').style.display = 'none';
    document.getElementById('question4').style.display = 'flex';

    document.getElementById('button-3').style.display = 'none';
    document.getElementById('button-4').style.display = 'flex';

    document.getElementById('question-3-text').style.display = 'none';
    document.getElementById('question-4-text').style.display = 'flex';

};


function button_question_four() {
    document.getElementById('question4').style.display = 'none';
    document.getElementById('question5').style.display = 'flex';

    document.getElementById('button-4').style.display = 'none';
    document.getElementById('button-5').style.display = 'flex';

    document.getElementById('question-4-text').style.display = 'none';
    document.getElementById('question-5-text').style.display = 'flex';
};


function button_question_five() {
    document.getElementById('question5').style.display = 'none';
    document.getElementById('question6').style.display = 'flex';

    document.getElementById('button-5').style.display = 'none';
    document.getElementById('button-6').style.display = 'flex';

    document.getElementById('question-5-text').style.display = 'none';
    document.getElementById('question-6-text').style.display = 'flex';

};




function reset_animation() {
    var el = document.getElementById('duck');
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null; 
}


