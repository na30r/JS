export async function getUsers(): Promise<string> {
  var prom = new Promise<string>((resolve, reject) => {
    let req = new XMLHttpRequest();
    const url = "https://jsonplaceholder.typicode.com/users";
    req.open("GET", url);
    req.send();
    req.onload = () => {
      resolve(req.responseText);
    };
    req.onerror = (e) => {
      reject(e);
    };
  });
  return prom;
}
