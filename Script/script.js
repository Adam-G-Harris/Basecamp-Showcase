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
		fill: 'none', // MOVE MENU TO LEFT SIDE THEN HAVE BASECAMP TEXT GO OVER TO LEFT BUT VERTICAL
		stroke: 'white',
		strokeWidth: 0.5,
		isShowStart: true
	}

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

}