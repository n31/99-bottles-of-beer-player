let text = document.getElementById('text');

let i = 99;
let count = 1;

text.innerHTML = "<button class='play' style='width: 240px; height: 40px; border: none; border-radius: 20px; font-size: 20px; background-color: orange; color: white'>Play</button>";

let play = document.querySelector('.play');
play.addEventListener('click', function() {
   text.innerHTML = "";
   myLoop();
});

function myLoop () {
   setTimeout(function () {
      if (count == 1) text.innerHTML = i + " bottles of beer on the wall";
      if (count == 2) text.innerHTML = i + " bottles of beer!";
      if (count == 3) text.innerHTML = "Take one down, pass it around";
      if (count == 4) {
          text.innerHTML = (i-1) + " bottles of beer on the wall!";
          count = 1;
          i--;
          if (i == 0) i = 99;
      }
      count++;  
      myLoop();
   }, 2000)
}