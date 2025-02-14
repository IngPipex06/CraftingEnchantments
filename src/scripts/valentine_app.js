hideEls(document.querySelector('.paraTi'), 0);
hideEls(document.querySelector('.buttons'), 0);
let message = document.querySelector('.message');
let firstMessages = 
[
"Hey! I just wanted to ask you something...",
"Yeees, I may be a little too late, but it's never late to love 💖.",
"Well, first I made this for you..."
]

let secondMessages = 
[
"Now the reason you are here is",
"Hey, but don't stress, let me take my time ",
"Do you want to be My Valentine?!! 🎆✨"
]


const button = document.getElementById("trickyButton");
const container = document.querySelector(".container");


//Botón chistoso
button.addEventListener("mouseover", () => {
  const maxX = 50/* container.clientWidth - button.clientWidth */;
  const maxY = container.clientHeight - button.clientHeight;


  let newX = Math.random() * maxX;
  let newY = Math.random() * maxY;

  button.style.left = `${newX}px`;
  button.style.top = `${newY}px`;
});
button.addEventListener("click", () => {

  const maxX =  container.clientWidth - button.clientWidth ;
  const maxY = container.clientHeight - button.clientHeight;


  let newX = Math.random() * maxX + 999999999999999;
  let newY = Math.random() * maxY + 999999999999999;

  button.style.left = `${newX}px`;
  button.style.top = `${newY}px`;
});


//Esconder Elemento
function hideEls(toHide, ms) {
  setTimeout(() => {
    toHide.style.display = 'none';
  }, ms); 
}
//Mostrar elemento
function showEls(toShow, ms) {
  setTimeout(() => {
    toShow.style.display = 'flex';
  }, ms);
}

function changeMessages(messages, interval) {
  messages.forEach((msg, index) => {
    setTimeout(() => {
      message.innerHTML = msg;
    }, index * interval);
  });
}

changeMessages(firstMessages, 5000);
showEls(document.querySelector('.paraTi'), 16000);
setTimeout(() => {
  message.innerHTML = '';
}, 26000);
hideEls(document.querySelector('.paraTi'), 26000);

setTimeout(() => {
  changeMessages(secondMessages, 5000);
  setTimeout(() => {
    message.style.fontSize = 'xx-large';
    message.style.fontWeight = 'bold';
    showEls(document.querySelector('.buttons'), 0);

  }, 10000);
}, 26000);

function teAmo() {
  message.innerHTML = '<video class="paraTi" poster="teAmo.jpg" controls><source src="gracias.mp4" type="video/mp4">Aysh, este dispositivo no permitió mostrar el video.</video>';
  hideEls(document.querySelector('.buttons'), 0);
}

