import { getUsers } from "./request.js";
import { User } from "./user.js";

var root = document.getElementById('root')

var p = document.createElement('p');
p.innerHTML = "s"
root.appendChild(p);

var users = [];

var tableHeaders = ["id", 'name', 'email', 'phone']

function tableInit() {
    var mainTable = document.getElementById('my-table');
    var tableRow = document.createElement('tr')
    tableHeaders.map(function (a) {
        var cell = document.createElement('td')
        cell.innerHTML = a
        tableRow.appendChild(cell)
    })
    mainTable.appendChild(tableRow)
}

function tableData() {
    getUsers("")
        .then(a => (JSON.parse(a)))
        .then(a => a.map(b => new User(b)))
        .then(a => a.forEach(b => addRow(b)))
}

function addRow(user) {
    var mainTable = document.getElementById('my-table');
    var tableRow = document.createElement('tr')
    tableRow.id = user['id']
    tableHeaders.map(function (a) {
        var cell = document.createElement('td')
        cell.innerHTML = user[a]

        tableRow.appendChild(cell)
    })
    var cell = document.createElement('td')
    cell.innerHTML = 'X'
    cell.id = user.id;
    cell.className = 'deleteUser';
    cell.addEventListener("click", function () {
        deleteCell(id)
    })
    tableRow.appendChild(cell)
    mainTable.appendChild(tableRow)
}


tableInit()
tableData()


