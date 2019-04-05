var questions = [
    one = true,
    two = false,
    three = true,
    four = false,
    five = false,
    six = true,
    seven = true,
]

var time;

$(".butn").on("click", function() {
    time = setTimeout(function() {
        alert("Time's up!");
    }, 3 * 1000);

});
  