import fetch from 'node-fetch';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

fetch('https://jsonplaceholder.typicode.com/todos/1', { method: 'GET' })
  .then(response => response.json())
  .then(todo => {
    const { id, title, completed } = todo as Todo;
    logTodo(id, title, completed);
  });

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`User with id=${id} and name=${title} is completed=${completed}`);
};

const numbers = [-10, -1, -4];
let aboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    aboveZero = numbers[i];
  }
}
console.log(aboveZero);
