//Forked from https://codepen.io/pat_hg/pen/zvMrRJ

class AudioW {
	constructor(sepValue) {
		let self = this;

		this.audio = new Audio();
		this.audio.crossOrigin = "anonymous";
		this.audio.controls = false;
		this.audio.loop = true;
		this.audio.autoplay = false;
		
		try
		{
			this.ctx = new AudioContext();
			this.audioSrc = this.ctx.createMediaElementSource(this.audio);
			this.analyser = this.ctx.createAnalyser();
			this.audioData = [];
			this.sepValue = sepValue;

			// Connect the MediaElementSource with the analyser
			this.audioSrc.connect(this.analyser);
			this.audioSrc.connect(this.ctx.destination);

			// FrequencyBinCount tells how many values are receive from the analyser
			this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount);
		}
		catch(e)
		{
			// AudioContext is not supported by certain browsers e.g (iOS Safari)
			// We do not display the visualizer on mobile
		}
	};

	getAudioData() {
		this.analyser.getByteFrequencyData(this.frequencyData);

		// Split array into 3
		let frequencyArray = this.splitFrenquencyArray(this.frequencyData,
				this.sepValue);

		// Make average of frenquency array entries
		for (let i = 0; i < frequencyArray.length; i++) {
			let average = 0;

			for (let j = 0; j < frequencyArray[i].length; j++) {
				average += frequencyArray[i][j];
			}
			this.audioData[i] = (average / frequencyArray[i].length) / 255;
		}
		return this.audioData;
	}

	splitFrenquencyArray(arr, n) {
		let tab = Object.keys(arr).map(function (key) {
				return arr[key]
			});
		let len = tab.length,
		result = [],
		i = 0;
		while (i < len) {
			let size = Math.ceil((len - i) / n--);
			result.push(tab.slice(i, i + size));
			i += size;
		}

		return result;
	}
};

class Cube extends THREE.Object3D {
	constructor(size, visible) {
		super();

		this.visible = visible;
		this.geom = new THREE.BoxGeometry(size, size, size);
		this.mat = new THREE.MeshLambertMaterial({
				color: 0x252525,
				overdraw: 0.5
			});
		this.mesh = new THREE.Mesh(this.geom, this.mat);
		this.add(this.mesh);
		this.tl = new TimelineMax({
				paused: true
			});
		this.tl
		.from(this.scale, 1, {
			x: 0.3,
			y: 0.3,
			z: 0.3,
			ease: Back.easeOut
		}, 0)
		.to(this.rotation, 1, {
			x: Math.PI,
			z: Math.PI,
			ease: Back.easeOut
		}, 0);
	}

	update(audioData) {
		this.tl.progress(audioData);
	}
}

class Webgl {
	constructor(width, height, audio) {
		this.audio = audio;

		this.scene = new THREE.Scene();

		this.camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 1000)
			this.camera.position.set(0, 0, 100);

		this.renderer = new THREE.WebGLRenderer({
				alpha: true
			});
		this.renderer.setSize(width, height);

		this.cubes = [];

		this.cubesRow = 5;
		this.cubesCol = 11;
		this.cubeSize = 15;
		this.cubeOffset = 30;
		this.cubesTotalWidth = this.cubesCol * this.cubeSize;
		this.cubesTotalHeight = this.cubesRow * this.cubeSize;

		// This defines where cubes will appear, this must be of dimension cubesRow * cubesCol
		this.keyElements = [
			[true, false, false, false, true, true, true, false, true, true, false],
			[true, false, false, false, true, false, true, false, true, false, true],
			[true, false, false, false, true, true, false, false, true, true, false],
			[true, false, false, false, true, false, true, false, true, false, true],
			[true, true, true, false, true, false, true, false, true, true, false],
		];

		for (let i = 0; i < this.cubesRow; i++) {
			for (let j = 0; j < this.cubesCol; j++) {
				var visible = false;

				if (this.keyElements[this.cubesRow - 1 - i][j]) {
					visible = true;
				}

				const newCube = new Cube(this.cubeSize, visible);
				const index = this.cubes.length;
				this.cubes.push(newCube);
				this.cubes[index].position.set(j * (this.cubeSize + this.cubeOffset) - this.cubesTotalWidth,
					i * (this.cubeSize + this.cubeOffset) - this.cubesTotalHeight,
					0);
				this.scene.add(newCube);
			}
		}

		this.ambientLight = new THREE.AmbientLight(0xffffff);
		this.scene.add(this.ambientLight);

		this.directionalLight_1 = new THREE.DirectionalLight(0xffffff);
		this.directionalLight_1.position.x = Math.random() - 0.5;
		this.directionalLight_1.position.y = Math.random() - 0.5;
		this.directionalLight_1.position.z = Math.random() - 0.5;
		this.directionalLight_1.position.normalize();
		this.scene.add(this.directionalLight_1);

		this.directionalLight_2 = new THREE.DirectionalLight(0xffffff);
		this.directionalLight_2.position.x = Math.random() - 0.5;
		this.directionalLight_2.position.y = Math.random() - 0.5;
		this.directionalLight_2.position.z = Math.random() - 0.5;
		this.directionalLight_2.position.normalize();
		this.scene.add(this.directionalLight_2);

	}

	/*resize(width, height) {
		this.camera.left = width / -2;
		this.camera.right = width / 2;
		this.camera.top = height / 2;
		this.camera.bottom = height / -2;

		this.camera.updateProjectionMatrix();

		this.renderer.setSize(width, height);
	};*/

	render() {

		this.renderer.autoClear = false;
		this.renderer.clear();
		this.renderer.render(this.scene, this.camera);

		const audioData = this.audio.getAudioData();

		for (let i = 0; i < this.cubes.length; i++) {
			this.cubes[i].update(audioData[4 + i]);
		}
	}
}

let webgl;
let audio; // avoid global namespace with var

audio = new AudioW(70);
webgl = new Webgl(500, 250, audio);

var visualizer = document.getElementById("visualizer");

// Visualizer does not exist on mobile
if(visualizer != null)
{
	visualizer.appendChild(webgl.renderer.domElement);

	//window.onresize = resizeHandler;

	animate();

	//function resizeHandler() {
	//	webgl.resize(visualizer.offsetWidth, visualizer.offsetHeight);
	//}

	function animate() {
		requestAnimationFrame(animate);
		webgl.render();
	}
}