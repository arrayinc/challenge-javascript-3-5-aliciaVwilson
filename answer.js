// *** YOUR ANSWER BELOW ***

"use strict;"

function Create(){
  let rawWidthNum = document.getElementById('width').value;
  let num = parseInt(rawWidthNum, 10);
  let rawHeightNum = document.getElementById('height').value;
  let num2 = parseInt(rawHeightNum, 10);
  let result = drawBox(num, num2);
  document.getElementById('jsOutlet').innerHTML = result;
}

function reset(){
  document.getElementById('width').value = "";
  document.getElementById('height').value = "";
  document.getElementById('jsOutlet').innerHTML = "";
}


function drawBox(width, height){
  let line = "";
  for(let i = 1; i <= height; i++){
    let row = i;
    switch (row) {
      case 1:
        line += "+";
        for(let j = 1; j <= width - 2; j++){
          line += "-";
        }
        line += "+";
        break;

      case height:
        line += "+";
        for(let j = 1; j <= width - 2; j++){
          line += "-";
        }
        line += "+";
        break;

      default:
        line += "|";
        for(let j = 1; j <= width - 2; j++){
          line += "&nbsp";
        }
        line += "|";
        break;
    }
    line += "\n"
  }
  return line;
}




// if (i = 1) {
//   line += "+";
//   for(let j = 1; j <= width - 2; j++){
//     line += "-";
//   }
//   line += "+";
// } else if (i = height) {
//   line += "+";
//   for(let j = 1; j <= width - 2; j++){
//     line += "-";
//   }
//   line += "+";
// } else {
//   line += "|"
//   for(let j = 1; j <= width - 2; j++){
//     line += " ";
//   }
//   line += "|";
// }


// line += "|"
// for(let j = 1; j <= width - 2; j++){
//   line += " ";
// }
// line += "|";





//
