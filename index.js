import { getUsers } from "./request.js";
import { User } from "./user.js";

var users = [];
var tableHeaders = [  //which columns should be displayed 
    { name: "id", visible: true },
    { name: "name", visible: true },
    { name: "email", visible: true },
    { name: "phone", visible: true },
    { name: "website", visible: true },
    { name: "username", visible: false },
    { name: "address", visible: true },
]

tableInit()
getTableData()

function createHtmlElement(tagName, innerHTML, id, className) {
    var element = document.createElement(tagName)
    element.innerHTML = innerHTML;
    if (id) {
        element.id = id;
    }
    if (className) {
        element.className = className;
    }
    return element
}

function tableInit() {
    var mainTable = document.getElementById('my-table');
    var tableRow = createHtmlElement('tr', null, null, null)

    tableHeaders.filter(a => a.visible).map(function (a) {
        var cell = createHtmlElement('td', a.name, null, null)
        tableRow.appendChild(cell)
    })
    mainTable.appendChild(tableRow)
}


function getTableData() {
    getUsers()
        .then(a => (JSON.parse(a)))
        .then(a => a.map(b => new User(b)))
        .then(a => { a.forEach(b => addRow(b)); return a })
        .then(function (a) { users = a })
}

function addRow(user) {
    var mainTable = document.getElementById('my-table');
    var tableRow = createHtmlElement('tr', null, user['id'], null);
    tableHeaders.filter(a => a.visible).map(function (a) {
        var cell = createHtmlElement('td', user[a.name], null, null);
        tableRow.appendChild(cell)
    })
    var cell = createHtmlElement('td', 'X', user.id, 'deleteUser');
    cell.addEventListener("click", function () {
        tableRow.parentNode.removeChild(tableRow)
        deleteUser(user)
    })
    tableRow.appendChild(cell)
    mainTable.appendChild(tableRow)
}

function deleteUser(user) {
    users = users.filter(a => a.id != user.id)
}




