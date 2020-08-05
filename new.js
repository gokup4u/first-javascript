/*let seun = 'Hello World';
console.log(seun);
//alert(seun);
let array = "";
let i;
for (let i = 0; i < 6; i++) {
  array += `orange ${i} is rotten \n `;
  }
console.log(array);

const val1 = 32;
let newVal = val1 * 4 + 58;
function topMath(){
  let finalAnswer = newVal/val1;
  if (finalAnswer !== 6) {
    return finalAnswer;
  } else {
    return false;
  } 
}
console.log(topMath());
document.createElement('h2');*/

function nairaToPounds() {
  let naira = prompt('How much do you want to change, chap?')
  let pounds = naira / 450;
  pounds = pounds.toFixed(2);
  let conversionToPound = document.createTextNode('You are ' + pounds + ' pounds rich.');
  let h1 = document.createElement('h1');
  h1.setAttribute('id', 'my-pound')
  h1.appendChild(conversionToPound);
  document.getElementById('final-result').appendChild(h1); 
}
function reset() {
  document.getElementById('my-pound').remove();
}