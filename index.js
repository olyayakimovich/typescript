"use strict";
exports.__esModule = true;
var node_fetch_1 = require("node-fetch");
node_fetch_1["default"]('https://jsonplaceholder.typicode.com/todos/1', { method: 'GET' })
    .then(function (response) { return response.json(); })
    .then(function (todo) {
    var _a = todo, id = _a.id, title = _a.title, completed = _a.completed;
    logTodo(id, title, completed);
});
var logTodo = function (id, title, completed) {
    console.log("User with id=" + id + " and name=" + title + " is completed=" + completed);
};
var numbers = [-10, -1, -4];
var aboveZero = false;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        aboveZero = numbers[i];
    }
}
console.log(aboveZero);
