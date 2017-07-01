/**
 * Created by aayusharora on 6/22/17.
 */
var todoList = localStorage.getItem('todo');
    if(!todoList) {
        todoList = [];
        localStorage.setItem('todo', JSON.stringify(todoList));
    }

 window.onload = function () {


    var todo = document.getElementById('todo'); //input
    var add = document.getElementById('add'); // button
    var output = document.getElementById('output'); //div

    refreshList();


    add.onclick = function () {

        // creating an input box;
        var task = todo.value;
        var wtodo = {
            "task": task,
            "done": "false"
        };

        todoList.push(wtodo);
        localStorage.setItem('todo', JSON.stringify(todoList));
        refreshList();
    };



        function refreshList () {

            todoList = JSON.parse(localStorage.getItem('todo'));
            var cont = '';

            for( var i=0; i< todoList.length; i++) {
                var todo = '<input  class="checkstyle" type="text"' + ' value= ' + todoList[i] + '/>' ;
                cont = cont + '<input ' +
                        (todoList[i].done? "checked": "" )  +
                     ' onchange="setDone(this)" '+  ' id=' + i  + ' type="checkbox"/>' + '<input type="text"' + ' value= ' +
                       todoList[i].task + '>' + '</br>';
            }
            output.innerHTML = cont;

        }

    };

    function setDone(el) {
        todoList[el.id].done = el.checked;
        localStorage.setItem('todo',JSON.stringify(todoList));
    }
