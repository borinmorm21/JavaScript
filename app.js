var x = document.getElementById('myBtn')
x.addEventListener('mouseover', helloWorld)
x.addEventListener('click', helloJavaScript)
x.addEventListener('mouseout', learning)

function helloWorld(){
  document.getElementById('output').innerHTML += `I'm learning JavaScript<br>`
}
function helloJavaScript(){
  document.getElementById('output').innerHTML += `I love JavaScript<br>`
}

function learning() {
  document.getElementById('output').innerHTML += `JavaScript is fun<br>`
}