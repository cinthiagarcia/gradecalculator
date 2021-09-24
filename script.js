function Mean() {
  
var firstTrimest = parseFloat(document.getElementById("value1").value)
var secondTrimest = parseFloat(document.getElementById("value2").value)
var thirdTrimest = parseFloat(document.getElementById("value3").value)
var fourthTrimest = parseFloat(document.getElementById("value4").value)

var finalGrade = (firstTrimest + secondTrimest + thirdTrimest + fourthTrimest) / 4
var finalGradeFix = finalGrade.toFixed(1)

var finalGradeElement = document.getElementById("finalGradeInsert");

let passedGrade = finalGradeElement.innerHTML = "Congratulations, you passed!" + " " + "Your final grade is " + finalGradeFix;
if (finalGradeFix >= 7) {
} else {
  finalGradeElement.innerHTML = "Your did not pass." + " " + "Your final grade is " + finalGradeFix;
}
}