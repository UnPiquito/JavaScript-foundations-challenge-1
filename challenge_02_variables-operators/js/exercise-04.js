/*
    What would each of these lines of code do:

    1. true && console.log("moo");
    2. false && console.log("moo moo?")
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    Once you see the results, write in a comment why it works that way
*/

//1. true && console.log("moo");
//This will print moo, beacuse the variable its true
//2. false && console.log("moo moo?")
//This will not print moo, because the variable its false
//3. true || console.log("hello friend");
//This will not print anything, because the operator OR since the variable it's true, there is no need to evaluate the second operand
//4. false || console.log("bye friend");
//This will print bye friend, bacause with an OR operator in wich the first option be false, javascript returns the second option
