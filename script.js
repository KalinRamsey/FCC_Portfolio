// mgGlitch data
$(function () {
	$(".glitch-img").mgGlitch({
		destroy: false,
		glitch: true,
		scale: false,
		blend: true,
		blendModeType: "hue",
		glitch1TimeMin: 200,
		glitch1TimeMax: 400,
		glitch2TimeMin: 10,
		glitch2TimeMax: 100,
	});
});

// static/scratch glitches
let bg = document.getElementById("glitch-img");
let count = Math.random() * 50;
for (let i = 0; i < count; i++) {
	let glitchBox = document.createElement("div");
	glitchBox.className = "box";
	bg.appendChild(glitchBox);
}
setInterval(function () {
	let glitch = document.getElementsByClassName("box");
	for (let i = 0; i < glitch.length; i++) {
		glitch[i].style.left = Math.floor(Math.random() * 100) + "vw";
		glitch[i].style.top = Math.floor(Math.random() * 100) + "vh";
		glitch[i].style.width =
			Math.floor(Math.random() * (Math.random() * 500)) + "px";
		glitch[i].style.height =
			Math.floor(Math.random() * (Math.random() * 5)) + "px";
		glitch[i].style.backgroundPosition = Math.floor(Math.random() * 100) + "px";
	}
}, Math.random() * 200);
