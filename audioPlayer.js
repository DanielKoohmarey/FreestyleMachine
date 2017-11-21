class AudioPlayer {
	constructor(audioSource, wordGenerator) {
		this.audioSource = audioSource;
		this.wordGenerator = wordGenerator;
		this.tracks = [{
				title: "Little Jesus (Instrumental)",
				artist: "Fla.vor Alliance",
				url: "/music/100.993 - Little Jesus (Instrumental).mp3"
			}, {
				title: "Passport (Instrumental)",
				artist: "Urban D.",
				url: "/music/99.959 - Passport (Instrumental).mp3"
			}, {
				title: "Never Alone Instrumental",
				artist: "Knine",
				url: "/music/99 - Never Alone Instrumental.mp3"
			}, {
				title: "Born Again Beat",
				artist: "Tunnel Rats",
				url: "/music/98.564 - Born Again Beat.mp3"
			}, {
				title: "Party (Instrumental)",
				artist: "Pee Wee Callins",
				url: "/music/125.012 - Party (Instrumental).mp3"
			}, {
				title: "Bang Instrumental",
				artist: "Ras",
				url: "/music/93.002 -Bang Instrumental.mp3"
			}, {
				title: "Jump Off - One Shot EP (Instrumental)",
				artist: "Bobby Bishop",
				url: "/music/93.006 - Jump Off - One Shot EP (Instrumental).mp3"
			}, {
				title: "Peter Instrumental",
				artist: "Urban D.",
				url: "/music/91.501 - Peter Instrumental.mp3"
			}, {
				title: "Say Good Bye (Instrumental)",
				artist: "beyond skillz",
				url: "/music/91.801 - Say Good Bye (Instrumental).mp3"
			}, {
				title: "Help Me (Instrumental)",
				artist: "Willie Will",
				url: "/music/83.004 - Help Me (Instrumental).mp3"
			}, {
				title: "Bob Yo Head feat Shei Atkins & S.O.M (Instrumental)",
				artist: "Urban D.",
				url: "/music/78.7 - Bob Yo Head feat Shei Atkins & S.O.M (Instrumental).mp3"
			}, {
				title: "Go Hard feat Wonderous & Pettidee (Instrumental)",
				artist: "Tre9",
				url: "/music/73.493 - Go Hard feat Wonderous & Pettidee  (Instrumental).mp3"
			}, {
				title: "Dear Holy Hip Hop (Instrumental)",
				artist: "R Swift",
				url: "/music/83.692 - R Swift - Dear Holy Hip Hop (Instrumental).mp3"
			}, {
				title: "The Founder",
				artist: "Beat Rabbi & Deepspace5",
				url: "/music/84.999 - The Founder (2).mp3"
			}, {
				title: "Better Place Instrumental",
				artist: "Knine",
				url: "/music/85 - Better Place Instrumental.mp3"
			}, {
				title: "Gone Away Instrumental",
				artist: "SGR Gladiators",
				url: "/music/85.954 - SGR Gladiators  - Gone Away Instrumental.mp3"
			}, {
				title: "Suburbs (Remix) feat Lil KeKe & Big Pokey (Instrumental)",
				artist: "Tre9",
				url: "/music/77 - Suburbs (Remix) feat Lil KeKe & Big Pokey (Instrumental).mp3"
			}, {
				title: "Fire (Instrumental)",
				artist: "Pee Wee Callins",
				url: "/music/90.000 - Fire (Instrumental).mp3"
			}, {
				title: "Thank You (Remix) Instrumental",
				artist: "Alkendria",
				url: "/music/93.061 - Alkendria - Thank You (Remix) Instrumental.mp3"
			}, {
				title: "These Eyes Instrumental",
				artist: "Knine",
				url: "/music/74 - These Eyes Instrumental.mp3"
			}
		];
		shuffle(this.tracks);
		this.currentTrack = 0;

		// Set initial track info
		this.updateTrack();
	}

	updateTrack() {
		this.audioSource.audio.src = this.tracks[this.currentTrack].url;
		this.audioSource.audio.load();
		var title = document.getElementById("title");
		title.innerText = this.tracks[this.currentTrack].title;
		var artist = document.getElementById("artist");
		artist.innerText = this.tracks[this.currentTrack].artist;
	}

	play() {
		var playButton = document.getElementsByClassName("et_pb_button_1")[0];
		if (this.audioSource.audio.paused) {
			var loadWheel = document.getElementById("loadWheel");
			// Ensure the audio source has buffered data
			if (this.audioSource.audio.readyState < 2) {
				if (loadWheel.style.display != "block") {
					loadWheel.style.display = "block";
				}
				setTimeout(this.play.bind(this), 100);
				return;
			}
			else
			{
				loadWheel.style.display = "none";
			}
			this.audioSource.audio.play();
			playButton.setAttribute('data-icon', '_');
			playButton.text = "Pause";
			this.wordGenerator.startCycle();
		} else {
			this.audioSource.audio.pause();
			playButton.setAttribute('data-icon', 'I');
			playButton.text = "Play";
			this.wordGenerator.stopCycle();
		}
	}

	next() {
		var paused = this.audioSource.audio.paused;
		this.currentTrack = (this.currentTrack + 1) % this.tracks.length;
		this.updateTrack();
		if (!paused) {
			this.play();
		}
	}

	prev() {
		var paused = this.audioSource.audio.paused;
		if (this.currentTrack == 0) {
			this.currentTrack = this.tracks.length - 1;
		} else {
			this.currentTrack--;
		}
		this.updateTrack();
		if (!paused) {
			this.play();
		}
	}
}

// Assume audio has been created from audioVisualizer.js
// Assume generator has been created from wordGenerator.js
var player = new AudioPlayer(audio, generator);

// Setup click handlers
var prevHandler = function (e) {
	e.preventDefault();
	e.stopPropagation();
	player.prev();
};
var prevButton = document.getElementsByClassName("et_pb_button_0")[0];
prevButton.setAttribute("href", "javascript:void(0)");
prevButton.addEventListener('click', prevHandler);
prevButton.addEventListener('touchstart', prevHandler);

var playHandler = function (e) {
	e.preventDefault();
	e.stopPropagation();
	player.play();
};
var playButton = document.getElementsByClassName("et_pb_button_1")[0];
playButton.setAttribute("href", "javascript:void(0)");
playButton.addEventListener('click', playHandler);
playButton.addEventListener('touchstart', playHandler);

var nextHandler = function (e) {
	e.preventDefault();
	e.stopPropagation();
	player.next();
};
var nextButton = document.getElementsByClassName("et_pb_button_2")[0];
nextButton.setAttribute("href", "javascript:void(0)");
nextButton.addEventListener('click', nextHandler);
nextButton.addEventListener('touchstart', nextHandler);
