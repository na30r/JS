var containter = document.getElementById('container')
var studentLocalStorage = new LocalStorageProvider('students')

function LocalStorageProvider(localStorageName) {
    this.localStorageItemName = localStorageName
    this.set = function (studentList) {
        localStorage.setItem(localStorageName, JSON.stringify(studentList))
    }
    this.get = function () {
        return JSON.parse(localStorage.getItem(localStorageName));
    }
}

function getStudentList() {
    students = studentLocalStorage.get()
    if (!students) { return }
    return students
}

var submitBtn = document.getElementById('submit-button')
submitBtn.addEventListener("click", function (e) {
    var input = e.target.parentElement.children[0]
    addStudent(input.value);
    input.value = '';
})

function refreshTable(students) {
    containter.replaceChildren();
    students.forEach(function (value, index) {
        console.log(value, index)
        var row = document.createElement('div');
        var stdDiv = document.createElement('span')
        var x = document.createElement('span');
        x.style.marginLeft = '30px';
        x.addEventListener("click", function (e) {
            deleteStudent(e.target.parentElement.children[0].textContent)
        });
        x.className = 'x'
        x.textContent = 'x'
        stdDiv.textContent = value;
        row.append(stdDiv)
        row.append(x)
        containter.append(row)
    })
}

function saveStudentList(studentList) {
    studentLocalStorage.set(studentList);
    refreshTable(studentList);
}

function addStudent(studentName) {
    var studentList = getStudentList();
    studentList.push(studentName);
    saveStudentList(studentList);
}

function deleteStudent(studentName) {
    var studentList = getStudentList();
    studentList = studentList.filter(a => a != studentName);
    saveStudentList(studentList)
}

var students = getStudentList()
refreshTable(students);

