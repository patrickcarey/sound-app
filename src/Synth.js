let context;

export function synthInit() {
	context = new (window.AudioContext || window.webkitAudioContext)();
}

export function OSC(controls) {
		const carFreq = [146.83, 164.81, 174.61 , 220, 98.00];
		const oscillators = ['sine', 'square', 'sawtooth', 'triangle'];

    	const osc1 = context.createOscillator();
    
    	let now = context.currentTime;

	    let attackTime = controls.attackTime ? controls.attackTime : 0.1;
	    let releaseTime = controls.releaseTime ? controls.releaseTime :  0.2;
	    
	    let freq = controls.freq ? controls.freq : 220;
	    let oscType = controls.type ? controls.type : 'sine';


	    if(controls.randFreq){
	    	freq = carFreq[Math.floor(Math.random() * carFreq.length)];
		}

		if(controls.freqMult) {
			freq = freq * Math.floor(Math.random() * controls.freqMult);
		}
	    
	    osc1.frequency.value = freq;


	    if(controls.randType) {
	    	oscType = oscillators[Math.floor(Math.random() * oscillators.length)];
	    }

	    osc1.type = oscType;

	
	    let osc1Gain = context.createGain();
	    osc1Gain.gain.value = 0;
	    
	    osc1.frequency.linearRampToValueAtTime(freq * .33, context.currentTime + 1);


	    osc1Gain.gain.linearRampToValueAtTime(1, now + attackTime);
	    osc1Gain.gain.linearRampToValueAtTime(0, now + attackTime + releaseTime);
	    
	    osc1.connect(osc1Gain);
	    osc1Gain.connect(context.destination);

	    if(controls.play === 1) {
	    	osc1.start(0);
		}

}



