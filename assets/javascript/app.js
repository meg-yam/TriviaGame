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
    rOne= "<form><input type='radio' name='cat'>True<input type='radio' name='cat'>False</form>",
    rTwo="<form><input type='radio' name='fur'>True<input type='radio' name='fur'>False</form>",
    rFour="<form><input type='radio' name='stripe'>True<input type='radio' name='stripe'>False</form>",
    rFive="<form><input type='radio' name='swim'>True<input type='radio' name='swim'>False</form>",
    rSix="<form><input type='radio' name='hunt'>True<input type='radio' name='hunt'>False</form>",
    rSeven="<form><input type='radio' name='liger'>True<input type='radio' name='liger'>False</form>",
];


var time = 60;



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

        $("#instructions").append(questions[6]);
        $("#instructions").append(radio[6]);



        $("#bottom").html("<button id='btn'>SUBMIT</button>");

    });
});
