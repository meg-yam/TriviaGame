var questions = [
    one = "<div>Tigers are the largest species of wild cat.</div>",
    two = "<div>Tigers only have stripes on their fur, not their skin.</div>",
    three = "<div>No two tigers have the same stripes.</div>",
    four = "<div>Tigers are terrible swimmers and drown all the time.</div>",
    five = "<div>There are six species of tigers still alive today.</div>",
    six = "<div>Tigers prefer to hunt at night.</div>",
    seven = "<div>Ligers are actually real.</div>",
];

var radio = [
    rOne= "<form><input type='radio' name='tiger' id='large'>True<input type='radio' name='tiger' id='cat'>False</form>",
    rTwo="<form><input type='radio' name='tiger' id='fur'>True<input type='radio' name='tiger' id='skin'>False</form>",
    rThree="<form><input type='radio' name='tiger' id='same'>True<input type='radio' name='tiger' id='stripe'>False</form>",
    rFour="<form><input type='radio' name='tiger' id='swim'>True<input type='radio' name='tiger' id='drown'>False</form>",
    rFive="<form><input type='radio' name='tiger' id='six'>True<input type='radio' name='tiger' id='species'>False</form>",
    rSix="<form><input type='radio' name='tiger' id='hunt'>True<input type='radio' name='tiger' id='night'>False</form>",
    rSeven="<form><input type='radio' name='tiger' id='liger'>True<input type='radio' name='tiger' id='real'>False</form>",
];


var time = 60;
var isCounting = false;
var intervalId;

function run() {
//fill
}


var correct = 0;
var wrong = 0;






$(document).ready(function() {
    $("#btn").click(function() {

        $("#clock").html("<div>" + time + "</div>");


        
        $("#instructions").html(questions[0]);
        $("#instructions").append(radio[0]);

        $("#instructions").append(questions[1]);
        $("#instructions").append(radio[1]);


        $("#instructions").append(questions[2]);
        $("#instructions").append(radio[2]);


        $("#instructions").append(questions[3]);
        $("#instructions").append(radio[3]);


        $("#instructions").append(questions[4]);
        $("#instructions").append(radio[4]);


        $("#instructions").append(questions[5]);
        $("#instructions").append(radio[5]);


        $("#instructions").append(questions[6]);
        $("#instructions").append(radio[6]);



        $("#bottom").html("<button id='btn2'>SUBMIT</button>");

    
    });


});

