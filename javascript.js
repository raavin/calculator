jQuery(document).ready(function($) {

	var calcKeys = [ // ID names for keys
	"percent", "divide",
	"seven", "eight", "nine", "multiply",
	"four", "five", "six", "minus",
	"one", "two", "three", "plus",
	"period", "zero"
	];
	var calcValues = [ // Values for eval()
	"/100*", "/",
	"7", "8", "9", "*",
	"4", "5", "6", "-",
	"1", "2", "3", "+",
	".", "0"
	]; 
	var calcDisplay = [ // Values for eval()
	"%", "/",
	"7", "8", "9", "*",
	"4", "5", "6", "-",
	"1", "2", "3", "+",
	".", "0"
	]; 

	var current = [0]; // Holds the array for eval
	var display = []; // Holds Array for display
	var ans = 0

	calcKeys.forEach( function(element, index) { //iterate through ID names 

		$( "#" + element.toString() ).click(function() { // create click for IDs
					console.log(calcValues[index] +": calcValues[index]");
					console.log("last element is a number is " + $.isNumeric(current[current.length - 1]));
					console.log("current element is a number is " + $.isNumeric(calcValues[index]));

			if ( !(/^[0-9]*$/).test(current[current.length - 1].toString()) && !(/^[0-9]*$/).test(calcValues[index])){//if key is number and last in current array is number
					
			} else {
			//		display = [0];
					console.log("I'm here!!!!");
				current.push(calcValues[index]);
				display.push(calcDisplay[index]);
				$(".result-output").html(display);	
			}
			  		console.log(current + ":curr");
					console.log(display + ":disp");
		});
	});

	$( "#ac" ).click(function() {
			current = [0];						// clear array
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
	  		current = [0,ans];												// put previous result in current array 
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
	
	function floatCompensate(expressionString){
		//console.log(newnum + ": num");
		return (Math.floor((eval(expressionString.slice(1,expressionString.length))) * Math.pow(10, 13))) / Math.pow(10, 13)
	};

});