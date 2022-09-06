// question1 = document.getElementById('question1');
// question2 = document.getElementById('question2');
// question3 = document.getElementById('question3');
// question4 = document.getElementById('question4');
// question5 = document.getElementById('question5');
// question6 = document.getElementById('question6');



function button_question_one() {
    document.getElementById('question1').style.display = 'none';
    document.getElementById('question2').style.display = 'flex';

    document.getElementById('button-1').style.display = 'none';
    document.getElementById('button-1-1').style.display = 'none';
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

    document.getElementById('question1').style.marginBottom = '5%';
    document.getElementById('question1').style.pointerEvents = "none";


    document.getElementById('question3').style.display = 'flex';
    document.getElementById('question1').style.display = 'flex';
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
    // document.getElementById('main-right').style.backgroundColor = 'rgb(22, 40, 42)';



    document.getElementById('main-left').style.backgroundColor = '#2A282A';
    document.getElementById('intro').style.color = 'white';


}
