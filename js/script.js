$(function(){

$("h1").click(function(){
  alert("BAM!");
});
});
var add = function (number1, number2){
	return number1+number2;
};
var subtract = function (number1, number2){
  return number1-number2;
}
var multiply = function (number1, number2){
  return number1*number2;
}
var divid = function(number1, number2){
  return number1 / number2;
}

var number1=parseFloat(prompt("enter your weight in kilograms"));
var number2=parseFloat(prompt("enter your height in meters"));


var result = add(number1, number2)
alert(result);









//var number3=parseFloat(prompt("enter degree of celcuis"))
//var bmi = function(number1, number2){
//  return (number1 / (number2*number2)).toFixed(2);
//alert(bmi(number1, number2));
//c to f *9/5+32
//var celToFah = function(number3){
//  return (number3*9/5+32);
//alert(celToFah(number3));
