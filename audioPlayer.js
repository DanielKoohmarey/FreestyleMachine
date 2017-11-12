class AudioPlayer {
	constructor(audioSource) {
		this.audioSource = audioSource;
		this.tracks = [{
				title: "Never Alone Instrumental",
				artist: "Knine",
				url: "/music/99 - Never Alone Instrumental.mp3"
			}, {
				title: "Passport (Instrumental)",
				artist: "Urban D.",
				url: "/music/99.959 Passport (Instrumental).mp3"
			}, {
				title: "Little Jesus (Instrumental)",
				artist: "Fla.vor Alliance",
				url: "/music/100.993 - Little Jesus (Instrumental).mp3"
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
				artist: "Knine",
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
				url: "/music/73.493 - Go Hard feat Wonderous & Pettidee (Instrumental).mp3"
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
