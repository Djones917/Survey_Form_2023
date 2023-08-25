alert("Connected!");

const message = document.getElementById('messageSent');
message.addEventListener('click', messageSent);
const p = document.createElement('p');
const textNode = document.createTextNode('Message sent!');
p.appendChild(textNode);
message.appendChild(textNode);
          

function messageSent() {
      alert('Message sent!');
}

      
messageSent();
/*console.log(message);*/