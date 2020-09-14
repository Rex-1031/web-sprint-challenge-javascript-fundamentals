// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

console.log(`==== CLOSURES ====`)
const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: nestedFunction can access the variable internal because it is nested within the scope of myFunction. This puts nestedFunction inside myFunction's closure.  It can reach out for any variable oustide of itself and reach inside of myFunction for that variable, no matter how nested it is. 


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation (num){
  let counter = 1;
  for(let i = 0; i <= num; i++){
     counter++;
  };
  return num + counter;
 
}
console.log("Task 2:",summation(4), "<---- DID I DO THIS RIGHT???");