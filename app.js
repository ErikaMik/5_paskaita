function generate(qty) {
	var right =document.getElementById('right'); //pointeris
	right.innerHTML = ''; //clear 'right'
for (var i = 1; i < qty; i++) {
	var r = Math.round(Math.random() * 255);
	var g = Math.round(Math.random() * 255);
	var b = Math.round(Math.random() * 255);
	right.innerHTML += '<div class="square" style="background-color: rgb('+r+','+g+','+b+')">' + i + '</div>';
}
}

function show_items() {
	console.log
}
