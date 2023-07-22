import { getUsers } from "./request.js";
import { User } from "./user.js";

var users: User[] = [];
interface tableHeaderItem {
  name: keyof User;
  visible: boolean;
}
var tableHeaders: tableHeaderItem[] = [
  { name: "id", visible: true },
  { name: "name", visible: true },
  { name: "email", visible: true },
  { name: "phone", visible: true },
  { name: "website", visible: true },
  { name: "username", visible: true },
  { name: "address", visible: true },
];

tableInit();
getTableData();

function createHtmlElement(
  tagName: string,
  innerHTML?: string | number | null,
  id?: string | number | null,
  className?: string | null
): Element {
  var element: Element = document.createElement(tagName);
  if (innerHTML) {
    element.innerHTML = innerHTML.toString();
  }
  if (id) {
    element.id = id.toString();
  }
  if (className) {
    element.className = className;
  }
  return element;
}

function tableInit() {
  var mainTable = document.getElementById("my-table");
  var tableRow = createHtmlElement("tr");

  tableHeaders
    .filter((a) => a.visible)
    .map(function (a) {
      var cell = createHtmlElement("td", a.name);
      tableRow.appendChild(cell);
    });
  mainTable!.appendChild(tableRow);
}

function getTableData() {
  getUsers()
    .then((a: string) => JSON.parse(a))
    .then((a: any[]) => a.map((b: any) => new User(b)))
    .then((a: User[]) => {
      a.forEach((b: User) => addRow(b));
      return a;
    })
    .then(function (a) {
      users = a;
    });
}

function addRow(user: User) {
  var mainTable = document.getElementById("my-table");
  var tableRow = createHtmlElement("tr", null, user["id"], null);
  tableHeaders
    .filter((a) => a.visible)
    .map(function (a) {
      var cell = createHtmlElement("td", user[a.name], null, null);
      tableRow.appendChild(cell);
    });
  var cell = createHtmlElement("td", "X", user.id, "deleteUser");
  cell.addEventListener("click", function () {
    tableRow.parentNode?.removeChild(tableRow);
    deleteUser(user);
  });
  tableRow.appendChild(cell);
  mainTable!.appendChild(tableRow);
}

function deleteUser(user: User) {
  users = users.filter((a) => a.id != user.id);
}
