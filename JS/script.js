// hamburger menu toggle
$(function () {
	const menu_btn = document.querySelector(".hamburger");
	const mobile_nav = document.querySelector("#mobile-nav");
	let nav_link = document.querySelectorAll(".nav-link");

	nav_link.forEach((link) => {
		link.addEventListener("click", function () {
			menu_btn.classList.toggle("is-active");
			mobile_nav.classList.toggle("is-active");
		});
	});
	// nav_link.addEventListener("click", function () {
	// 	menu_btn.classList.toggle("is-active");
	// 	mobile_nav.classList.toggle("is-active");
	// });

	menu_btn.addEventListener("click", function () {
		menu_btn.classList.toggle("is-active");
		mobile_nav.classList.toggle("is-active");
	});
});

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

// Typewriter effect
var TxtType = function (el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = "";
	this.tick();
	this.isDeleting = false;
};

TxtType.prototype.tick = function () {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

	var that = this;
	var delta = 200 - Math.random() * 100;

	if (this.isDeleting) {
		delta /= 2;
	}

	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === "") {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;
	}

	setTimeout(function () {
		that.tick();
	}, delta);
};

window.onload = function () {
	var elements = document.getElementsByClassName("typewrite");
	for (var i = 0; i < elements.length; i++) {
		var toRotate = elements[i].getAttribute("data-type");
		var period = elements[i].getAttribute("data-period");
		if (toRotate) {
			new TxtType(elements[i], JSON.parse(toRotate), period);
		}
	}
	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #ffffff)}";
	document.body.appendChild(css);
};

// "Good Morning/Day/Afternoon/Evening" based on local machine time
let timeText = document.getElementById("timeText");
let now = new Date().getHours();

if (now >= 0 && now <= 8) {
	$(timeText).text("Good morning!");
} else if (now >= 9 && now <= 11) {
	$(timeText).text("Good day!");
} else if (now >= 12 && now <= 15) {
	$(timeText).text("Good afternoon!");
} else if (now >= 16 && now <= 24) {
	$(timeText).text("Good evening!");
} else {
	$(timeText).text("Greetings, Earthling!");
}
