window.onload = () => {


	/* Start menu icon */


	// Used for positioning
	const spacing = 145;
	const sqrSize = spacing / 26;
	const lPos = `${spacing * 2}%`;
	const sPos = `${spacing}%`;

	// Menu parts constructor
	const SQUARE = {
		shape: 'rect',
		left: '0',
		top: '0',
		radius: sqrSize,
		fill: 'none',
		stroke: 'white',
		strokeWidth: 0.5,
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

	basecampText
		.add({
			targets: '#heroSvg #gSvg path',
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'easeInOutSine',
			duration: 1500,
			delay: function (el, i) { return i * 200 },
		})
		.add({
			targets: '#heroSvg #gPoly polygon',
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'easeInOutSine',
			offset: '-=500'
		});

	/*const baseText = anime({
		targets: '#heroSvg #gSvg path',
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutSine',
		duration: 1500,
		delay: function (el, i) { return i * 200 },
	});*/

	/*const baseLine = () => {
		let newLine = anime({
			targets: '#heroSvg #gPoly polygon',
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'easeInOutSine'
		})
	}*/
};
// End