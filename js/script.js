$(function(){

$("h1").click(function(){
  alert(finalSentence);
});
});

var sentence=prompt("Enter a sentence:");
console.log(sentence);

var firstLast=(sentence.charAt(0) + sentence.charAt(sentence.length-1));

firstLast=(firstLast.toUpperCase());

console.log(firstLast);

function reverseString(firstLast) {
    return firstLast.split("").reverse().join("");
}

console.log(reverseString(firstLast));

console.log(sentence + reverseString(firstLast))

var n = function(userinput){
  // var halfString = Math.floor(userinput.length/2);
  // var middleIndex = userinput.charAt(halfString);
  // return middleIndex;
  return userinput.charAt(Math.floor(userinput.length/2));
  }

console.log(n(sentence));

var bfirst = (n(sentence) + sentence + reverseString(firstLast))

function reversev(alt) {
    return alt.split("").reverse().join("");
}
var finalSentence = reversev(bfirst);



// function reverseString(str) {
//     // Step 1. Use the split() method to return a new array
//     var splitString = str.split(""); // var splitString = "hello".split("");
//     // ["h", "e", "l", "l", "o"]
//
//     // Step 2. Use the reverse() method to reverse the new created array
//     var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//     // ["o", "l", "l", "e", "h"]
//
//     // Step 3. Use the join() method to join all elements of the array into a string
//     var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
//     // "olleh"
//
//     //Step 4. Return the reversed string
//     return joinArray; // "olleh"
// }
//
// reverseString("hello");
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// reverseString("hello");
// var add = function (number1, number2){
// 	return number1+number2;
// };
// var subtract = function (number1, number2){
//   return number1-number2;
// }
// var multiply = function (number1, number2){
//   return number1*number2;
// }
// var divid = function(number1, number2){
//   return number1 / number2;
// }
//
// var number1=parseFloat(prompt("enter your weight in kilograms"));
// var number2=parseFloat(prompt("enter your height in meters"));
//
//
// var result = add(number1, number2)
// alert(result);

//var number3=parseFloat(prompt("enter degree of celcuis"))
//var bmi = function(number1, number2){
//  return (number1 / (number2*number2)).toFixed(2);
//alert(bmi(number1, number2));
//c to f *9/5+32
//var celToFah = function(number3){
//  return (number3*9/5+32);
//alert(celToFah(number3));
