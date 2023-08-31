/*alert("Connected!");*/

const message = document.getElementById('messageSent');
const p = document.createElement('p');
/*p.style.display = none;*/
const textNode = document.createTextNode('Message sent!');
p.appendChild(textNode);
message.appendChild(textNode);
      


message.addEventListener('click', messageSent);

function messageSent() {
      alert('Message sent!');
}

      
messageSent();
/*console.log(message);*/