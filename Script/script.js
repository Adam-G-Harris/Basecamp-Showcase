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
		fill: 'white',
		fillOpacity: 0.1,
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

	// Main animation timeline
	basecampText

		//- Initial draw
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
			duration: 1500
		})
		.add({
			targets: '#heroSvg .baseGroup',
			translateX: -5,
			easing: 'easeOutQuint',
			duration: 1500,
			offset: '-=1500'
		})
		.add({
			targets: '#heroSvg .campGroup',
			translateX: 5,
			easing: 'easeOutQuint',
			duration: 1500,
			offset: '-=1500',
			complete: () => {
				changeMargin();
			}
		})
		.add({
			targets: '#heroSvg',
			scale: 1,
		});

	function changeMargin() {
		document.getElementById('heroSvg').style.padding = '90vh 40vw 0 40vw';
	}


	/* End Basecamp text */


	/* End all */


};