// mgGlitch data
$(function () {
	$(".glitch-img").mgGlitch({
		destroy: false,
		glitch: true,
		scale: true,
		blend: true,
		blendModeType: "hue",
		glitch1TimeMin: 10,
		glitch1TimeMax: 100,
		glitch2TimeMin: 100,
		glitch2TimeMax: 1000,
	});
});

// static/scratch glitches
let bg = document.getElementById("glitch-img");
let count = Math.random() * 1;
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

// "Good Morning/Day/Afternoon/Evening" based on local machine time
let timeText = document.getElementById("timeText");
let now = new Date().getHours();

if (now >= 0 && now <= 5) {
	$(timeText).text("Thanks for stopping by so early!");
} else if (now >= 6 && now <= 8) {
	$(timeText).text("Good Morning!");
} else if (now >= 9 && now <= 11) {
	$(timeText).text("Good Day!");
} else if (now >= 12 && now <= 15) {
	$(timeText).text("Good Afternoon!");
} else if (now >= 16 && now <= 18) {
	$(timeText).text("Good Evening!");
} else if (now >= 19 && now <= 24) {
	$(timeText).text("Thanks for stopping by so late!");
}
