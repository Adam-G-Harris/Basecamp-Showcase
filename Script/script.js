window.onload = () => {


	/* Start loading animation */


	; (function () {

		const curveEditor = new MojsCurveEditor({ name: 'yOffset' });

		const XcurveEditor = new MojsCurveEditor({ name: 'xScale' });

		const rotateEditor = new MojsCurveEditor({ name: 'rotate' });

		const loadingAnimation = new mojs.Html({
			el: '#loadingAnimation',
			y: { [-300]: -300, curve: curveEditor.getEasing() },
			scaleX: { [1]: 1, curve: XcurveEditor.getEasing() },
			angleZ: { [0]: 360, curve: rotateEditor.getEasing() },
			duration: 1000
		});

		new MojsPlayer({ add: loadingAnimation });

	})()


	/* End loading animation */


	/* Start Basecamp text */


	function basecampTextAnimation() {

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
				offset: '-=1600'
			})
			.add({
				targets: '#heroSvg',
				scale: 1,
				complete: () => {
					mainPage();
				}
			});

	}


	/* End Basecamp text */


	/* Start main page */


	function mainPage() {


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


		// Entrance parts constructor
		const TITLE = {
			opacity: { 0: 1 },
			duration: 4000,
			easing: 'quint.out',
			y: { '-8vh': 0 },
			fontWeight: '100',
			letterSpacing: '2px',
			margin: '1.5vw 2.5vw'
		};

		const menuEntrance1 = new mojs.Html({
			...TITLE,
			el: '#menu1'
		});

		const menuEntrance2 = new mojs.Html({
			...TITLE,
			el: '#menu2',
			delay: 300
		});

		const menuEntrance3 = new mojs.Html({
			...TITLE,
			el: '#menu3',
			delay: 600
		});

		const menuEntrance4 = new mojs.Html({
			...TITLE,
			el: '#menu4',
			delay: 900
		});

		const audioEntrance = new mojs.Html({
			el: '#audio',
			x: { '-3vw': 0 },
			opacity: { 0: 1 },
			delay: 1500,
			duration: 4000,
			easing: 'quart.out'
		});

		const audioLabelEntrance = new mojs.Html({
			el: '#audioSvg',
			y: { '3vh': 0 },
			opacity: { 0: 1 },
			delay: 1500,
			duration: 4000,
			easing: 'quart.out'
		});

		// Entrance animation timeline
		const menuAnimation = new mojs.Timeline();

		menuAnimation.add(menuEntrance1,
			menuEntrance2,
			menuEntrance3,
			menuEntrance4,
			audioEntrance,
			audioLabelEntrance).play();


		/* End entrance animations */


	}/* End main page */


}/* End all */