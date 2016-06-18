# calculator
## freecodecamp calculator project

This is my calculator project done as part of the FreeCodeCamp Curriculum. 

### Functionality

The calculator has the following capabilities

#### Normal arithmetic

You should be able to enter numbers and operations like a normal calculator and get the result with '='. Unlike a normal calculator, it  follows order of operations so 10 + 6 * 6 = 46 rather than (10 + 6) * 6 = 96 which is the way a normal calculator would calculate.

Percentages should work as expect with 10%100 = 10

You can keep adding to the previous result like a calculator by doing for example '+ 5 ='

### TODOS

- Currently the CE key removes the last key entry rather than the last number so it operates more like a delete key than a CE key
- If you multiply large numbers for example you get a result in the exponent format, which is nice for output but currently isn't parsed to be reused
- 'ans' key seems to be malfunctioning. Need to fix that!!!
- currently follows order of operations which is counterintuitive in regards to normal calculator operation. Need to fix so that next operation is enacted on previous result.

### Error Replication

#### Adding 'ans' to end of expression

If a User enters and expression 1 + 1 and hits '='

When they enter another partial experession like '1 +' and hit 'ans'

Then they get the result '3' instead of '1 + 2'