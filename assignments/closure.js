// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

// Why was 6 afraid of 7? Because 7 8 9!

const joke = [];

function dadJoke() {
  joke.push("Why was 6 afraid of 7?");
  let setup = [6, 7, 8]
  const punchline = setup.map(x => x + 1);
  joke.push("Because", punchline);
};

dadJoke();
console.log(joke);

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

var currentCount = 0
// ==== Challenge 2: Create a counter function ====
const counter = () => currentCount += 1;
  // Return a function that when invoked increments and returns a counter variable.

  counter();
  counter();
  counter();
  console.log(currentCount);

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  const methodCalcs = {
    "increment": function(){
      currentCount + 1;
    },
    "decrement": function(){
      currentCount - 1;
    }
  }
};

