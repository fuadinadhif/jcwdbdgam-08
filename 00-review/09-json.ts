const todoList = [{ id: 1, description: "Lorem", isDone: true }]; // Object JS

const JSToJSON = JSON.stringify(todoList); // Object JS => JSON
const JSONToJS = JSON.parse(JSToJSON); // JSON => Object JS

console.log(JSToJSON);
console.log(JSONToJS);
