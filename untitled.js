let myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u292b");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var elem = document.querySelector('LI');
	elem.parentNode.removeChild(elem);
  }
}

let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You have to write at least something");
  } else {
    document.getElementById("myUl").appendChild(li);
  }
  document.getElementById("myInput").value = " ";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u292b");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var elem = document.querySelector('LI');
	elem.parentNode.removeChild(elem);
    }
  }
}
let input = document.getElementById("myInput");
input.addEventListener("keyup", function(event){
	if(event.keyCode === 13) {
		event.preventDefault();
		document.getElementById("btn1").click();
	}
	});
