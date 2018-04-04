// Doubles numbers with for loop
var arr = [1,2,3,4,5,6];
function double(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i] * 2);
  }
}
double(arr);
// ------------------------------------------------
// Doing the same with a forEach
var arr = [1,2,3,4,5,6];
forEach(arr, function(number) {
  console.log(number * 2);
});
// ------------------------------------------------
var strings = ["my", "forEach", "example"];

var result = "";
forEach(strings, function(str, index, array) {
  if (array.length -1 !== index) {
    result += str + " ";
  } else {
    result += str + "!!!";
  }
});
// -------------------------------------------------

function countdown(seconds){
  var intervalId = setInterval(function() {
    seconds--;
    if (seconds > 0){
      console.log("Timer: " + seconds);
    }
    else {
      console.log("Ring Ring Ring!!!");
      clearInterval(intervalId);
    }
  }, 1000);
}