
var oneBtn = document.getElementById('one');
var twoBtn = document.getElementById('two');
var threeBtn = document.getElementById('three');
var fourBtn = document.getElementById('four');
var fiveBtn = document.getElementById('five');
var sixBtn = document.getElementById('six');
var sevenBtn = document.getElementById('seven');
var eightBtn = document.getElementById('eight');
var nineBtn = document.getElementById('nine');
var zeroBtn = document.getElementById('zero');

var decimalBtn = document.getElementById('decimal');
var clearBtn = document.getElementById('AC');
var backspaceBtn = document.getElementById('CE');
var displayValElement = document.getElementById('display');

var displayVal = '0';     // number or symbol displayed
var pendingVal;           // values pending
var evalStringArray = []; // ques previous typed numbers and symbols

var numberBtns = document.getElementsByClassName('btn number');
var symbolBtns = document.getElementsByClassName('btn symbol');

var updateDisplayVal = (clickObj) => {
  var btnText = clickObj.target.innerText;

  if (displayVal === '0')
    displayVal = '';

    displayVal += btnText;
    displayValElement.innerText = displayVal;
}

for (let i = 0; i < numberBtns.length; i++) {
  numberBtns[i].addEventListener('click', updateDisplayVal, false);
}

var performOperation = (clickObj) => {
  var symbol = clickObj.target.innerText;

switch (symbol) {
  case '+':
    pendingVal = displayVal;
    displayVal = '0';
    displayValElement.innerText = displayVal;
    evalStringArray.push(pendingVal);
    evalStringArray.push('+');
    break;

  case '-':
    pendingVal = displayVal;
    displayVal = '0';
    displayValElement.innerText = displayVal;
    evalStringArray.push(pendingVal);
    evalStringArray.push('-');
    break;
    
  case '*':
    pendingVal = displayVal;
    displayVal = '0';
    displayValElement.innerText = displayVal;
    evalStringArray.push(pendingVal);
    evalStringArray.push('*');
    break;

  case '÷':
    pendingVal = displayVal;
    displayVal = '0';
    displayValElement.innerText = displayVal;
    evalStringArray.push(pendingVal);
    evalStringArray.push('/');
    break;

  case '=':
    evalStringArray.push(display);
    var evaluation = eval(evalStringArray.join(' '));
    displayVal = evaluation + '';
    displayValElemnet.innerText = displayVal;
    evalStringArray = [];
  break;
default:
  break;

  }
}
for (let i = 0; i < symbolBtns.length; i++) {
  symbolBtns[i].addEventListener('click', performOperation, false);
}

// create function when you click clear button 
// reset and return 0
// update displayVal

clearBtn.onclick = () => {
  displayVal = '0';
  pendingVal = undefined;
  evalStringArray = [];
  displayValElement.innerHTML = displayVal;
}

// create function when you click backspace button
// take displayVal and slice last object off the array (use length of array -1)
// display new value

backspaceBtn.onclick = () => {
  let lengthOfDisplayVal = displayVal.length;
  displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);
  displayValElement.innerText = displayVal;

  // if display val is = to an empty string display 0

  if (displayVal === '')
    displayVal = '0';

    displayValElement.innerText = displayVal;
}
decimalBtn.onclick = () => {
  if(!displayVal.includes('.'))
  displayVal += '.';
  displayValElement.innerText = displayVal;
}







// // create a varible = to an array for the users inputs
// // create a varible = 0
// // create a varible to temporarily que numbers and symbols
// // create varible for value of input
// var entries = [];
// var total = 0;

// var temp = '';
// $("button").on('click', function() {
//  	var val = $(this).text();

//   // Got a number, add to temp
//   if (!isNaN(val) || val === '.') {
//     temp += val;
//     $("#answer").val(temp.substring(0,10));
    
//   // Got some symbol other than equals, add temp to our entries
//   // then add our current symbol and clear temp
//   } else if (val === 'AC') {
//     entries = [];
//     temp = '';
//     total = 0;
//     $("#answer").val('')

//   // Clear last entry
//   } else if (val === 'CE') {
//     temp = '';
//     $("#answer").val('')
    
//   // Change multiply symbol to work with eval
//   } else if (val === 'x') {
//     entries.push(temp);
//     entries.push('*');
//     temp = '';
    
//   // Change divide symbol to work with eval
//   } else if (val === '÷') {
//     entries.push(temp);
//     entries.push('/');
//     temp = '';

//   // Got the equals sign, perform calculation
//   } else if (val === '=') {
//   	entries.push(temp);

//     var nt = Number(entries[0]);
//     for (var i = 1; i < entries.length; i++) {
//       var nextNum = Number(entries[i+1])
//       var symbol = entries[i];
      
//       if (symbol === '+') { nt += nextNum; } 
//       else if (symbol === '-') { nt -= nextNum; } 
//       else if (symbol === '*') { nt *= nextNum; } 
//       else if (symbol === '/') { nt /= nextNum; }
      
//       i++;
//     }
    
//     // Swap the '-' symbol so text input handles it correctly
//     if (nt < 0) {
//       nt = Math.abs(nt) + '-';
//     }
    
//     $("#answer").val(nt);
// 		entries = [];
//     temp = '';
    
//   // Push number
//   } else {
//     entries.push(temp);
//     entries.push(val);
//     temp = '';
//   }
// });