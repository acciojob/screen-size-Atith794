//your JS code here. If required.


// let isuzu = document.getELementById("sizeInfo");

// isuzu.innerHTML = `<h1>Width: ${width.textContent} and Height: ${height.textContent}</h1>`;
function updateSize() {
	let width = window.innerWidth;
	let height = window.innerHeight;
	document.getElementById("width").textContent=width;
	document.getElementById("height").textContent=height;
}

updateSize();

window.addEventListener("resize",updateSize);