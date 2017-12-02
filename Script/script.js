window.onload = () => {


	/* Start menu icon */


	// Used for positioning
	const spacing = 150;
	const sqrSize = spacing / 26;
	const lPos = `${spacing * 2}%`;
	const sPos = `${spacing}%`;

	// Menu parts constructor
	const SQUARE = {
		shape: 'rect',
		left: '0',
		top: '0',
		radius: sqrSize,
		fill: 'white',
		fillOpacity: 0.05,
		stroke: 'white',
		strokeWidth: 0.4,
		isShowStart: true
	};

	// Menu parts
	let sqrTL = new mojs.Shape({
		...SQUARE,
		x: lPos,
		y: sPos,
	});

	let sqrTR = new mojs.Shape({
		...SQUARE,
		x: sPos,
		y: sPos,
	});

	let sqrBL = new mojs.Shape({
		...SQUARE,
		x: lPos,
		y: lPos,
	});

	let sqrBR = new mojs.Shape({
		...SQUARE,
		x: sPos,
		y: lPos
	});


	/* End menu icon */


	/* Start Basecamp text */


	const basecampText = anime.timeline();

	// Main animation timeline
	basecampText

		// Initial draw
		.add({
			targets: '#heroSvg .gSvg path',
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'easeInOutSine',
			strokeWidth: 0.4,
			duration: 1500,
			delay: (el, i) => { return i * 200 }
		})
		.add({
			targets: '#heroSvg #gPoly polyline',
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'easeOutQuint',
			duration: 1600
		})
		.add({
			targets: '#heroSvg .baseGroup',
			translateX: -5,
			easing: 'easeOutQuint',
			duration: 1600,
			offset: '-=1600'
		})
		.add({
			targets: '#heroSvg .campGroup',
			translateX: 5,
			easing: 'easeOutQuint',
			duration: 1600,
			offset: '-=1600',
			complete: () => {
				document.getElementById('heroSvg').style.padding = '89vh 38vw 0 38vw';
			}
		})
		.add({
			targets: '#heroSvg',
			scale: 1,
		});


	/* End Basecamp text */


	/* Start audio mute */


	const muteToggle = document.getElementById('audioSvg');

	muteToggle.addEventListener('click', changeVolume);

	function changeVolume() {

		const muteAffected = document.getElementById('aud');
		const unmuted = document.getElementById('unmuted');
		const muted = document.getElementById('muted');

		muted.classList.toggle('dontShow');
		unmuted.classList.toggle('dontShow');

		muteAffected.volume === 1 ? muteAffected.volume = 0 : muteAffected.volume = 1;
	}


	/* End audio mute */


	/* Start entrance animations */


	// Animation constructor
	const TITLES = {
		opacity: { 0: 1 },
		duration: 4000,
		y: { '-6vh': 0 }
	};

	const menuEntrance1 = new mojs.Html({
		...TITLES,
		el: '#menu1'
	});

	const menuEntrance2 = new mojs.Html({
		...TITLES,
		el: '#menu2'
	});

	const menuEntrance3 = new mojs.Html({
		...TITLES,
		el: '#menu3'
	});

	const menuEntrance4 = new mojs.Html({
		...TITLES,
		el: '#menu4'
	});


	/* End entrance animations */


	/* End all */


};