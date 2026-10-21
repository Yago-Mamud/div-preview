const modded = document.querySelector("#toBeModded");
const borders = document.querySelectorAll(".borderSlider");
borders.forEach((slider) => {
	slider.addEventListener("input", () => {
		let input = slider.value;
		let a = "border"+slider.id+"Radius"
		modded.style[a] = input + "px";
	});
});

const colorSliders = document.querySelectorAll(".colorSlider");
colorSliders.forEach((current) => {
	current.addEventListener("input", () => {
		let red = document.getElementById("red").value;
		let green = document.getElementById("green").value;
		let blue = document.getElementById("blue").value;
		modded.style.borderColor = `rgb(${red},${green},${blue})`;
	});
});

const thick = document.getElementById("thickness");
thick.addEventListener("input", () => {
	let thickness = thick.value;
	modded.style.borderWidth = thickness + "px";
});