class WordGenerator {
	constructor() {
		this.words = ['Accident', 'Agree', 'Arrive', 'Astronomy', 'Atlas', 'Attention', 'Award', 'Aware', 'Balance', 'Banner', 'Bare', 'Base', 'Beach', 'Besides', 'Blast', 'Board', 'Bounce', 'Brain', 'Branch', 'Brave', 'Bright', 'Cage', 'Calf', 'Calm', 'Career', 'Center', 'Cheer', 'Chew', 'Claw', 'Clear', 'Cliff', 'Club', 'Collect', 'Connect', 'Core', 'Corner', 'Couple', 'Crowd', 'Curious', 'Damp', 'Dangerous', 'Dash', 'Dawn', 'Deep', 'Demolish', 'Design', 'Discard', 'Dive', 'Dome', 'Doubt', 'Dozen', 'Earth', 'Enemy', 'Evening', 'Exactly', 'Excess', 'Factory', 'Fair', 'Famous', 'Feast', 'Field', 'Finally', 'Flap', 'Float', 'Flood', 'Fold', 'Fresh', 'Frighten', 'Fuel', 'Gap', 'Gaze', 'Gift', 'Gravity', 'Greedy', 'Harm', 'Herd', 'Idea', 'Insect', 'Instrument', 'Invent', 'Island', 'Leader', 'Leap', 'Lizard', 'Local', 'Lonely', 'Luxury', 'March', 'Mention', 'Motor', 'Nervous', 'Net', 'Nibble', 'Notice', 'Ocean', 'Pack', 'Pale', 'Parade', 'Past', 'Peak', 'Planet', 'Present', 'Proof', 'Reflect', 'Rumor', 'Safe', 'Scholar', 'Seal', 'Search', 'Settle', 'Share', 'Shelter', 'Shiver', 'Shy', 'Skill', 'Slight', 'Smooth', 'Soil', 'Stack', 'Steady', 'Strand', 'Stream', 'Support', 'Team', 'Telescope', 'Tiny', 'Tower', 'Travel', 'Tremble', 'Universe', 'Village', 'Warn', 'Weak', 'Wealthy', 'Whisper', 'Wise', 'Wonder', 'Worry', 'Yard', 'Zigzag', 'Ache', 'Adjust', 'Affordable', 'Alarm', 'Alone', 'Apologize', 'Appetite', 'Applause', 'Artistic', 'Atmosphere', 'Attach', 'Bashful', 'Basket', 'Batch', 'Behave', 'Belong', 'Bend', 'Blink', 'Blush', 'Blush', 'Bolt', 'Bolts', 'Borrow', 'Bundle', 'Cabin', 'Caterpillar', 'Caution', 'Cave', 'Celebrate', 'Centaur', 'Champion', 'Chat', 'Cheat', 'Chimney', 'Compass', 'Complain', 'Conductor', 'Construct', 'Costume', 'Cozy', 'Cranky', 'Crash', 'Creak', 'Croak', 'Crowded', 'Cue', 'Curved', 'Daily', 'Dainty', 'Dart', 'Decorate', 'Delighted', 'Denied', 'Deserve', 'Divide', 'Dodge', 'Drenched', 'Drowsy', 'Enormous', 'Equal', 'Exclaim', 'Exhausted', 'Expensive', 'Fancy', 'Fasten', 'Filthy', 'Flat', 'Flee', 'Fog', 'Footprint', 'Forest', 'Freezing', 'Gather', 'Giant', 'Glad', 'Gleaming', 'Glum', 'Grab', 'Grateful', 'Grin', 'Grip', 'Groan', 'Hatch', 'Heap', 'Hide', 'Hobby', 'Honest', 'Howl', 'Illustrator', 'Injury', 'Jealous', 'Knob', 'Lively', 'Loosen', 'Mask', 'Misty', 'Modern', 'Mountain', 'Narrow', 'Obey', 'Pain', 'Passenger', 'Pattern', 'Pest', 'Polish', 'Pretend', 'Promise', 'Rapid', 'Remove', 'Repeat', 'Rescue', 'Restart', 'Return', 'Ripe', 'Rise', 'Roar', 'Rough', 'Rusty', 'Scold', 'Scratch', 'Seed', 'Selfish', 'Serious', 'Shell', 'Shovel', 'Shriek', 'Sibling', 'Silent', 'Simple', 'Slippery', 'Sly', 'Sneaky', 'Sob', 'Spiral', 'Splendid', 'Sprinkle', 'Squirm', 'Startle', 'Steep', 'Stormy', 'Striped', 'Surround', 'Switch', 'Terrified', 'Thick', 'Thunder', 'Ticket', 'Timid', 'Transportation', 'Travel', 'Trust', 'Upset', 'Weed', 'Whimper', 'Whirl', 'Wicked', 'Wicked', 'Yank', 'Accurate', 'Address', 'Afford', 'Alert', 'Analyze', 'Ancestor', 'Annual', 'Apparent', 'Appropriate', 'Arena', 'Arrest', 'Ascend', 'Assist', 'Attempt', 'Attentive', 'Attractive', 'Awkward', 'Baggage', 'Basic', 'Benefit', 'Blend', 'Blossom', 'Burrow', 'Calculate', 'Capable', 'Captivity', 'Carefree', 'Century', 'Chamber', 'Circular', 'Coax', 'Column', 'Communicate', 'Competition', 'Complete', 'Concentrate', 'Concern', 'Conclude', 'Confuse', 'Congratulate', 'Considerable', 'Content', 'Contribute', 'Crafty', 'Create', 'Demonstrate', 'Descend', 'Desire', 'Destructive', 'Develop', 'Disaster', 'Disclose', 'Distract', 'Distress', 'Dusk', 'Eager', 'Ease', 'Entertain', 'Entire', 'Entrance', 'Envy', 'Essential', 'Extraordinary', 'Flexible', 'Focus', 'Fragile', 'Frantic', 'Frequent', 'Frontier', 'Furious', 'Generosity', 'Hail', 'Hardship', 'Heroic', 'Host', 'Humble', 'Impact', 'Increase', 'Indicate', 'Inspire', 'Instant', 'Invisible', 'Jagged', 'Lack', 'Limb', 'Limp', 'Manufacture', 'Master', 'Mature', 'Meadow', 'Mistrust', 'Mock', 'Modest', 'Noble', 'Orchard', 'Outstanding', 'Peculiar', 'Peer', 'Permit', 'Plead', 'Plentiful', 'Pointless', 'Portion', 'Practice', 'Precious', 'Prefer', 'Prepare', 'Proceed', 'Queasy', 'Recent', 'Recognize', 'Reduce', 'Release', 'Represent', 'Request', 'Resist', 'Response', 'Reveal', 'Routine', 'Severe', 'Shabby', 'Shallow', 'Sole', 'Source', 'Sturdy', 'Surface', 'Survive', 'Terror', 'Threat', 'Tidy', 'Tour', 'Tradition', 'Tragic', 'Typical', 'Vacant', 'Valiant', 'Variety', 'Vast', 'Venture', 'Weary'];
		this.currentWord = 0;
		this.cycleTime = 15;
		this.shuffle(this.words);
		this.generatorCycle = undefined;
	}

	//https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
	shuffle(a) {
		var j,
		x,
		i;
		for (i = a.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			x = a[i];
			a[i] = a[j];
			a[j] = x;
		}
	}

	setCycleTime(time) {
		this.cycleTime = time;
		if (this.generatorCycle != undefined) {
			window.clearInterval(this.generatorCycle);
			this.generatorCycle = setInterval(this.generateWord.bind(this), 1000 * this.cycleTime);
		}
	}

	startCycle() {
		this.generateWord();
		this.stopCycle();
		this.generatorCycle = setInterval(this.generateWord.bind(this), 1000 * this.cycleTime);
	}

	stopCycle() {
		if (this.generatorCycle != undefined) {
			window.clearInterval(this.generatorCycle);
			this.generatorCycle = undefined;
		}
	}

	generateWord() {
		var word = document.getElementById("generatedWord");
		word.innerHTML = this.words[this.currentWord];
		this.currentWord = (this.currentWord + 1) % this.words.length;
	}
}

var generator = new WordGenerator();

window.addEventListener('load', function (e) {
	// Show generated word section
	var generatedWordSection = document.getElementById("generatedWord");
	generatedWordSection.style.display = "inline-block";

	// Setup the slider
	var slider = document.getElementById('slider');
	noUiSlider.create(slider, {
		start: 20,
		step: 1,
		range: {
			'min': 5,
			'max': 30
		},
		pips: {
			mode: 'values',
			values: [5, 10, 15, 20, 25, 30],
			density: 4
		}
	});
	
	var cycle = document.getElementById("cycleTime");
	
	slider.noUiSlider.on('update', function (values, handle) {
		cycle.innerHTML = Math.trunc(values[handle]);
		generator.setCycleTime(Math.trunc(values[handle]));
	});
});
