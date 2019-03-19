// creating a connection to the websock server from browser
let connection = new WebSocket('ws://localhost:8080');

connection.onopen = () => {
  console.log('connected from the frotend');
   connection.send('hello');
};

connection.onerror = () => {
  console.log('failed to connect from the frontend');
};

 //pushing information down to the client
connection.onmessage = (event) => {
  console.log('received message', event.data);
};

document.getElementById('editor').addEventListener('input', (event)=>{
  let text = document.getElementById('editor').innerText;
  connection.send(text);
})
