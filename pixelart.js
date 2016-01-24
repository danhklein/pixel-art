// 1) Divs (HTML CSS)
// 2) Div (When I click the color changes)
// 3) Colors (When I click) paint color div background
// 5 Loop and create divs
$(document).ready(function () {
  console.log('sanity check');


function createDiv () {

   $('body').append('<div>test</div>');
 }
for (var i=0; i < 10; i++) {
  if (i < 10) {
createDiv();
  }
}


});