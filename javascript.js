jQuery(document).ready(function($) {

	var calcKeys = [ // ID names for keys
	"percent", "divide",
	"seven", "eight", "nine", "multiply",
	"four", "five", "six", "minus",
	"one", "two", "three", "plus",
	"period", "zero"
	];
	var calcValues = [ // Values for eval()
	"/10*", "/",
	"7", "8", "9", "*",
	"4", "5", "6", "-",
	"1", "2", "3", "+",
	".", "0"
	]; 

	var current = [0]; // Holds the array for eval
	var display = [0]; // Holds Array for display
	var ans = 0

	calcKeys.forEach( function(element, index) { //iterate through ID names 

		$( "#" + element.toString() ).click(function() { // create click for IDs
			console.log(calcValues[index]);

			if ($.isNumeric(calcValues[index] && $.isNumeric(current[current.length]))){
					current.push(calcValues[index]);
					display.push(calcValues[index]);
					$(".result-output").html(display);
			} else {
					display = [0];
			}
	  		//$.isNumeric(calcValues[index]) ? current.push(calcValues[index]) : ; //if clicked, push value to array
	  		//$.isNumeric(calcValues[index]) ? display.push(calcValues[index]) : display = []; // if entry is a number push value display array
	  		//$.isNumeric(calcValues[index]) ? $(".result-output").html(display) : ""; // if entry is a number display it, else clear display
	  		console.log(current + ":curr");
			console.log(display + ":disp");
		});
	});

	$( "#ac" ).click(function() {
			current = [];						// clear array
			display = [];						// clear array
			console.log(current + ": value");
			console.log(current + ":curr");
			console.log(display + ":disp");
	  		$(".result-output").html(0);		// Set display to zero
	});

	$( "#ce" ).click(function() {				
	  		current.pop();						// pop last character off the end of the array when ce is pressed
	  		$(".result-output").html(0);		// set output to zero
	});

	$( "#equal" ).click(function() {
		try{
			ans = floatCompensate(current.join(""));						//					
	  		$(".result-output").html(floatCompensate(current.join("")));
	  		display = [];													// clear display array
	  		current = [ans];												// put previous result in current array 
	  		console.log(current + ":curr");
			console.log(display + ":disp");
		}
		catch(err){

		}
			
	});

	$( "#ans" ).click(function() {
			current.push(ans);
	  		$(".result-output").html(eval(current.join("")));
	});
	
	function floatCompensate(num){
		return (Math.floor((eval(num)) * Math.pow(10, 13))) / Math.pow(10, 13)
	};

});