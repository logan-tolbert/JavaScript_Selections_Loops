console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for(let i = 1; i <= 100; i++){
    if (i % 2 === 0) {
    }else{
        console.log(i);
    };
};
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let i = 1; i <= 100; i++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log('FIZZBUZZ');
  }else if (i % 3 === 0){
    console.log('FIZZ');
  }else if (i % 5 === 0) {
    console.log('BUZZ');
  }else {
    console.log(i);
  };
};

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
console.log("While (EX1):\n==========\n");
let a = 1;

while(a <= 100){
    if (a % 2 === 0) {
        a++;
    }else{
        console.log(a);
       a++;
    };
};

console.log("Do While (EX1):\n==========\n");
let b = 1;
do {
    if (b % 2 === 0) {
        b++;
    }else{
        console.log(b);
       b++;
    };
}while(b <= 100);

console.log("While (EX2):\n==========\n");
let c = 1;

while(c <= 100){
    if (c % 15 === 0) {
        console.log('FIZZBUZZ');
        c++;
      }else if (c % 3 === 0){
        console.log('FIZZ');
        c++;
      }else if (c % 5 === 0) {
        console.log('BUZZ');
        c++
      }else {
        console.log(c);
        c++
      };
};

console.log("Do While (EX2):\n==========\n");
let d = 1;
do {
    if (d % 15 === 0){
        console.log('FIZZBUZZ');
        d++;
      }else if (d % 3 === 0){
        console.log('FIZZ');
        d++;
      }else if (d % 5 === 0) {
        console.log('BUZZ');
        d++
      }else {
        console.log(d);
        d++;
      };
}while(d <= 100);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for(let i = 0; i <= n; i++){
    if (i == value){
        console.log(`Found Value! ${value}`);
        break;
    };

    if (i == n) {
        console.log(`${value} was not found`);
    };
};

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for(let i = start; i <= n; i++){
    if (i % fizzDivisor === 0 && i % buzzDivisor === 0){
      console.log('FIZZBUZZ');
    }else if (i % fizzDivisor === 0){
      console.log('FIZZ');
    }else if (i % buzzDivisor === 0) {
      console.log('BUZZ');
    }else {
      console.log(i);
    };
  };