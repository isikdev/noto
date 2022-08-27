// let openAdd = $(".add")
// let addList = $(".add__list")

// openAdd.on('click', function(e) {
//     $('.add__todo').toggleClass("add__todo-active");
//     $('.add').toggleClass("add__active")
// });
// $('#task').change(function() {
//     let input = $(this).val();
//     $('ul').append('<li class="list__item">' + input + '<button class="done">Done</button>' + '<button class="delete">Delete</button>' + '</li>');
//     $(this).val('');
// });
// var lSLength = localStorage.length;
// var localValue;
// var newId = 0;

// // объявление функции вывода загрузки элементов из localStorage в DOM после обновления страницы
// function getValueAfterReload() {
//     if (lSLength > 0) {
//         for (i = 0; i < lSLength; i++) {
//             var key = localStorage.key(i);
//             $('.todo-list').append("<li class='item' data-item=" + localStorage.key(i).slice(7) + ">" + localStorage[key] + "</li>");
//         }
//     }
// }

// // вызов функции вывода элементов из localStorage в DOM
// getValueAfterReload();

// console.log('%cITEMS:', 'color: orange', storage_items);

// // Любое действие со storage, выполняет операции в объекте storage_items,
// // затем вызывает storage_update(), который записывает объект в localStorage

// function storage_update() {
//     //test_start
//     // Временный блок, чтобы поймать ошибки во время написания,
//     // если вдруг прилетит id-не число.
//     if (Object.keys(storage_items).some(isNaN)) {
//         console.error(storage_items);
//         throw new Error('NaN!');
//     }
//     //test_end

//     localStorage.setItem(storage_KEY, JSON.stringify(storage_items));
// }

// function storage_empty() {
//     localStorage.setItem(storage_KEY, null);
// }
var list = document.querySelector('ul');

var todos;

function toLocal() {
    todos = list.innerHTML;
    localStorage.setItem('todos', todos)
}

list.addEventListener('click', function(ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle('checked');
    } else if (ev.target.tagName === "SPAN") {
        var div = ev.target.parentNode;
        div.remove();
        toLocal();
    }
}, false);
document.getElementById("addBtn").addEventListener("click", newElement, false);

function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('toDoEl').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue == "") {
        alert("Empty!");
    } else {
        document.getElementById('list').appendChild(li);
    }
    document.getElementById('toDoEl').value = "";
    var span = document.createElement('SPAN');
    var txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    toLocal();
}
document.getElementById("clear_all").addEventListener("click", clearAll);

function clearAll() {
    var li = document.querySelector('li');
    li.parentNode.remove(li);
    toLocal();
}
document.getElementById("all_done").addEventListener("click", checkedAll);

function checkedAll() {
    var li = document.querySelectorAll('li');
    li.classList.add('checked');
    toLocal();
}

if (localStorage.getItem('todos')) {
    list.innerHTML = localStorage.getItem('todos');
}