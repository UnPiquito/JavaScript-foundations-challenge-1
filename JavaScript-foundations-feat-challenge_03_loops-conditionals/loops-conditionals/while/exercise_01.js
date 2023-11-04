/*
    1. Create a while loop that will print out all the even numbers between 10 and 40.

    2. Create a while loop that will print out all the odd numbers between 10 and 40.
*/

let evenNum = 10;
while (evenNum <= 40) {
  if (evenNum % 2 === 0) {
    console.log(evenNum);
  }
  evenNum++;
}

let oddNum = 10;
while (oddNum <= 40) {
  if (oddNum % 2 !== 0) {
    console.log(oddNum);
  }
  oddNum++;
}
