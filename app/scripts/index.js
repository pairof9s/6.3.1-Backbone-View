var Backbone = require('backbone');
var $ = require('jquery');
var views = require('./views/todo');
var TodoCollection = require('./models/todo').TodoCollection;

var todoTaskCollection = new TodoCollection();


var instructions = new views.TodoInstructionView();
$('.app').append(instructions.render().el);

var todoList = new views.TodoListView({'collection': todoTaskCollection});
$('.app').append(todoList.render().el);

todoTaskCollection.add([
  {'title': 'Learn some backbone views'},
  {'title': 'Drive home'},
  {'title': 'Work on assignment'}
]);

console.log(instructions);
