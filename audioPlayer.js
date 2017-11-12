class AudioPlayer {
	constructor(audioSource) {
		this.audioSource = audioSource;
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
		this.currentTrack = 0;
		this.audioSource.audio.src = this.tracks[this.currentTrack].url;
		this.updateTrackInfo();
	}

	updateTrackInfo() {
		var title = document.getElementById("title");
		title.innerText = this.tracks[this.currentTrack].title;
		var artist = document.getElementById("artist");
		artist.innerText = this.tracks[this.currentTrack].artist;
	}

	play() {
		var playButton = document.getElementsByClassName("et_pb_button_1")[0];
		if (this.audioSource.audio.paused) {
			this.audioSource.audio.play();
			playButton.setAttribute('data-icon', '_');
			playButton.text = "Pause";
		} else {
			this.audioSource.audio.pause();
			playButton.setAttribute('data-icon', 'I');
			playButton.text = "Play";
		}
	}

	next() {
		this.currentTrack = (this.currentTrack + 1) % this.tracks.length;
		this.audioSource.audio.src = this.tracks[this.currentTrack].url;
		this.updateTrackInfo();
		this.play();
	}

	prev() {
		if (this.currentTrack == 0) {
			this.currentTrack = this.tracks.length - 1;
		} else {
			this.currentTrack--;
		}
		this.audioSource.audio.src = this.tracks[this.currentTrack].url;
		this.updateTrackInfo();
		this.play();
	}
}

window.onload = function (e) {
	// Assume audio has been created from audioVisualizer.js
	var player = new AudioPlayer(audio);

	// Setup click handlers
	var prevButton = document.getElementsByClassName("et_pb_button_0")[0];
	prevButton.addEventListener('click', function (e) {
		e.preventDefault();
		player.prev();
	});

	var playButton = document.getElementsByClassName("et_pb_button_1")[0];
	playButton.addEventListener('click', function (e) {
		e.preventDefault();
		player.play();
	});

	var nextButton = document.getElementsByClassName("et_pb_button_2")[0];
	nextButton.addEventListener('click', function (e) {
		e.preventDefault();
		player.next();
	});
}
