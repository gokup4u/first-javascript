//Naira to Pound
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

//Image Generator
function genImage() {
  let image = document.createElement('img');
  let div = document.getElementById('image-generated');
  image.src = 'https://picsum.photos/200/180';
  div.appendChild(image);
}