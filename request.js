export async function getUsers() {
    var prom = new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        const url = 'https://jsonplaceholder.typicode.com/users'
        req.open("GET", url)
        req.send();
        req.onload = () => {
            resolve(req.responseText) // readyState will be 4
        };
        req.onerror = (e) => {
            reject(e)
        }
    }
    )
    return prom
}


// getUsers("")
//     .then(a => (JSON.parse(a)))
//     .then(a => a.map(b => b.name))
//     .then(a => console.log(a))
