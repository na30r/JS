import { getUsers } from "./request.js";
import { User } from "./user.js";

var root = document.getElementById('root')

var p = document.createElement('p');
p.innerHTML = "s"
root.appendChild(p);

var users = [];

getUsers("")
    .then(a => (JSON.parse(a)))
    .then(a => a.map(b => new User(b)))
    .then(a => console.log(a))
    .then(users = a)
    .then(console.log(users))

