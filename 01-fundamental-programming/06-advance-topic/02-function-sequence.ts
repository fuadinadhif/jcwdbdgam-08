let result: string;

function greet(str: string) {
  result = str;
}

function hello() {
  greet("hello");
}

function arigatou() {
  greet("arigatou!");
}

arigatou();
hello();
console.log(result);
