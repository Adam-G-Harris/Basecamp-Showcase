window.onload = () => {


	/* Start loading animation */


	; (function () {

		const loaderLine = document.getElementById('loaderLine');

		loaderLine.style.width = '29vw';

		let loader = anime({
			targets: '#loader #loaderContainer input',
			round: 1,
			easing: 'linear',
			value: 100,
			duration: 2500,
			complete: () => {
				basecampTextAnimation();
			}
		});

	})()


	/* End loading animation */


	/* Start Basecamp text */


	function basecampTextAnimation() {

		// Loading animation transition
		const loader = document.getElementById('loader');
		const loaderContainer = document.getElementById('loaderContainer');

		setTimeout(() => {
			loader.style.display = 'none';
		}, 2500);

		loaderContainer.style.transform = 'translateY(30vh)';
		loader.style.opacity = 0;

		// Calling other elements to enter
		mainPage();

		/*// Main animation timeline
		const basecampText = anime.timeline();

		basecampText

			// Initial draw
			.add({
				targets: '#heroSvg .gSvg path',
				strokeDashoffset: [anime.setDashoffset, 0],
				easing: 'easeInOutSine',
				strokeWidth: .8,
				duration: 1500,
				delay: (el, i) => { return i * 200 + 2000 },
				offset: 0
			})
			.add({
				targets: '#heroSvg #gPoly polyline',
				strokeDashoffset: [anime.setDashoffset, 0],
				easing: 'easeOutQuint',
				duration: 2000
			})
			.add({
				targets: '#heroSvg .baseGroup',
				translateX: -5,
				easing: 'easeOutQuint',
				duration: 2000,
				offset: '-=2000'
			})
			.add({
				targets: '#heroSvg .campGroup',
				translateX: 5,
				easing: 'easeOutQuint',
				duration: 2000,
				offset: '-=2000'
			})
			.add({
				targets: '#heroSvg',
				scale: 1
			});*/
	}


	/* End Basecamp text */


	/* Start main page */


	function mainPage() {


		/* Start audio mute */


		//document.getElementById('vid').play();
		//document.getElementById('aud').play();

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
			fillOpacity: .1,
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
			duration: 2000,
			easing: 'quint.out',
			y: { '-2vh': 0 },
			letterSpacing: '2px'
		};

		const menuEntrance1 = new mojs.Html({
			...TITLE,
			el: '#svg1'
		});

		const menuEntrance2 = new mojs.Html({
			...TITLE,
			el: '#svg2',
			delay: 500
		});

		const menuEntrance3 = new mojs.Html({
			...TITLE,
			el: '#svg3',
			delay: 1000
		});

		const menuEntrance4 = new mojs.Html({
			...TITLE,
			el: '#svg4',
			delay: 1500
		});

		const audioEntrance = new mojs.Html({
			el: '#audio',
			x: { '-3vw': 0 },
			opacity: { 0: 1 },
			delay: 2500,
			duration: 2000,
			easing: 'quart.out'
		});

		const audioLabelEntrance = new mojs.Html({
			el: '#audioSvg',
			y: { '3vh': 0 },
			opacity: { 0: 1 },
			delay: 2500,
			duration: 2000,
			easing: 'quart.out'
		});

		const logoEntrance = new mojs.Html({
			el: '#logoSvgContainer',
			y: { '3vh': 0 },
			opacity: { 0: 1 },
			delay: 2500,
			duration: 2000,
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
			logoEntrance).play();


		/* End entrance animations */


	}/* End main page */


}/* End all */