jQuery(document).ready(function($) {
	console.log("test");

	var calcKeys = [
	"percent", "divide",
	"seven", "eight", "nine", "multiply",
	"four", "five", "six", "minus",
	"one", "two", "three", "plus",
	"period", "zero"
	]
	var calcValues = [
	"/100*", "/",
	"7", "8", "9", "*",
	"4", "5", "6", "-",
	"1", "2", "3", "+",
	".", "0"
	] 
	var current = []
	var ans = 0
	calcKeys.forEach( function(element, index) {

		$( "#" + element.toString() ).click(function() {
			console.log(calcValues[index]);
	  		//console.log(element);
	  		current.push(calcValues[index]);
	  		$(".result-output").html(current)
		});
	});

	$( "#ac" ).click(function() {
			
			ans = eval(current.join(""));
			current = [];
			console.log(current + ": value");
	  		$(".result-output").html(0);
	});

	$( "#ce" ).click(function() {
	  		current.pop();
	  		$(".result-output").html(current);
	});

	$( "#equal" ).click(function() {
	  		$(".result-output").html(eval(current.join("")));
	});

	$( "#ans" ).click(function() {
			current.push(ans);
	  		$(".result-output").html(eval(current.join("")));
	});
	
});