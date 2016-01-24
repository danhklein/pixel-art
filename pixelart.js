// 1) Divs (HTML CSS)
// 2) Div (When I click the color changes)
// 3) Colors (When I click) paint color div background
// 5 Loop and create divs

//global variable\\
 var divs = document.getElementsByTagName('div');

$(document).ready(function () {
  console.log('sanity check');

createCanvas();
addRed();

function addRed () {
  for (var i = 0; i < divs.length; i++){
  divs[i].addEventListener("click", function (){
    this.style.backgroundColor="red";
    });
  }
}


//Helper Function\\
function createDiv () {

   $('body').append('<div class="canvas"></div>');
 }
 function createMoreDivs () {
for (var i=0; i < 100; i++) {
  if (i < 100) {
    createDiv();
    }
  if (i%11===0 && !!(i)){
    $('body').append('<br>');
    }
  }
}
  function styleDiv () {
    for (var i = 0; i < divs.length; i++) {
      divs[i].style.width="15px";
      divs[i].style.height="15px";
      divs[i].style.border="1px solid black";
      divs[i].style.display="inline-block";
      }
    }

    function createCanvas (){
        createMoreDivs();
        styleDiv();
    }

});





