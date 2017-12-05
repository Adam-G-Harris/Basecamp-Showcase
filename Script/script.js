window.onload = () => {


	/* Start loading animation */


	; (function () {

		const loaderLine = document.getElementById('loaderLine');
		loaderLine.style.width = '29vw';
		loaderLine.style.backgroundColor = '#2A1315';

		let loader = anime({
			targets: '#loader input',
			round: 1,
			easing: 'linear',
			value: 100,
			duration: 5000,
			complete: () => {
				basecampTextAnimation();
			}
		});

	})()


	/* End loading animation */


	/* Start Basecamp text */


	function basecampTextAnimation() {

		setTimeout(() => {
			loader.style.display = 'none';
		}, 3000);

		const loader = document.getElementById('loader');
		loader.style.transform = 'translateY(20vh)';
		loader.style.opacity = 0;

		// Main animation timeline
		const basecampText = anime.timeline();

		basecampText

			// Initial draw
			.add({
				targets: '#heroSvg',
				translateY: ['-20vh', 0],
				easing: 'linear',
				duration: 5000,
				offset: 0
			})
			.add({
				targets: '#heroSvg .gSvg path',
				strokeDashoffset: [anime.setDashoffset, 0],
				easing: 'easeInOutSine',
				strokeWidth: 0.4,
				duration: 1500,
				delay: (el, i) => { return i * 200 },
				offset: 0
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

		setTimeout(() => {
			document.getElementById('loadingPage').style.display = 'none';
		}, 3000);

		document.getElementById('loadingPage').style.opacity = 0;
		document.getElementById('vid').play();
		document.getElementById('aud').play();


		/* Start audio mute */


		const muteToggle = document.getElementById('audioSvg');

		muteToggle.addEventListener('click', changeVolume);

		function changeVolume() {

			console.log('yup');

			const muteAffected = document.getElementById('aud');
			const unmuted = document.getElementById('unmuted');
			const muted = document.getElementById('muted');

			muted.classList.toggle('dontShow');
			unmuted.classList.toggle('dontShow');

			muteAffected.volume === 1 ? muteAffected.volume = 0 : muteAffected.volume = 1;
		}


		/* End audio mute */


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


		/* Start entrance animations */


		// Entrance parts constructor
		const TITLE = {
			opacity: { 0: 1 },
			duration: 4000,
			easing: 'quint.out',
			y: { '-8vh': 0 },
			letterSpacing: '2px'
		};

		const menuEntrance1 = new mojs.Html({
			...TITLE,
			el: '#svg1'
		});

		const menuEntrance2 = new mojs.Html({
			...TITLE,
			el: '#svg2',
			delay: 300
		});

		const menuEntrance3 = new mojs.Html({
			...TITLE,
			el: '#svg3',
			delay: 600
		});

		const menuEntrance4 = new mojs.Html({
			...TITLE,
			el: '#svg4',
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

		const basecampEntrance = new mojs.Html({
			el: '#rightBaseText',
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
			audioLabelEntrance,
			basecampEntrance).play();


		/* End entrance animations */


	}/* End main page */


}/* End all */