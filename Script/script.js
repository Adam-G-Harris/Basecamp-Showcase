window.onload = () => {

	// Used for positioning
	const spacing = 145;
	const sqrSize = spacing / 26;
	const lNeg = `-${spacing * 2}%`;
	const lPos = `${spacing * 2}%`;
	const sNeg = `-${spacing}%`;
	const sPos = `${spacing}%`;

	// Menu parts constructor
	const SQUARE = {
		shape: 'rect',
		left: '100vw',
		top: '0',
		radius: sqrSize,
		fill: 'none',
		stroke: 'white',
		strokeWidth: 0.5,
		isShowStart: true
	}

	let sqrTL = new mojs.Shape({
		...SQUARE,
		x: lNeg,
		y: sPos,
	});

	let sqrTR = new mojs.Shape({
		...SQUARE,
		x: sNeg,
		y: sPos,
	});

	let sqrBL = new mojs.Shape({
		...SQUARE,
		x: lNeg,
		y: lPos,
	});

	let sqrBR = new mojs.Shape({
		...SQUARE,
		x: sNeg,
		y: lPos
	});

}