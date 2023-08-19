alert("Connected!");

const message = document.getElementById('messageSent');
const p = document.createElement('p');
const textNode = document.createTextNode('Message sent!');
p.appendChild(textNode);
message.appendChild(textNode);
      /*const para = document.createElement("p");
      const node = document.createTextNode("The end.");
      para.appendChild(node);
      const element = document.getElementById("div1");
      const child = document.getElementById("p2");
      element.appendChild(para,child);*/      

      
console.log(message);