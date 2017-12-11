window.onload = () => {


	/* Start loading page */


	; (function () {

		let temp = anime({
			targets: '.loaderLetter',
			duration: 2500,
			delay: function (el, i) { return 250 * i },
			easing: 'linear',
			filter: ['blur(6px)', 'blur(3px)', 'blur(0px)'],
			loop: 4,
			direction: 'alternate'
		});

	})()


	/* End loading page */


	/* Start Basecamp text */


	function basecampTextAnimation() {

		// Calling other elements to enter
		mainPage();

		// Main animation timeline
		const basecampText = anime.timeline();
		let durationTime = 1500;

		basecampText

			// Initial draw
			.add({
				targets: '#heroSvg .gSvg path',
				strokeDashoffset: [anime.setDashoffset, 0],
				easing: 'easeInOutSine',
				strokeWidth: .6,
				duration: durationTime - 500,
				delay: (el, i) => { return i * 200 + 2000 },
				offset: 0
			})
			.add({
				targets: '#heroSvg #gPoly polyline',
				strokeDashoffset: [anime.setDashoffset, 0],
				easing: 'easeOutQuint',
				duration: durationTime
			})
			.add({
				targets: '#heroSvg .baseGroup',
				translateX: -5,
				easing: 'easeOutQuint',
				duration: durationTime,
				offset: '-=1500'
			})
			.add({
				targets: '#heroSvg .campGroup',
				translateX: 5,
				easing: 'easeOutQuint',
				duration: durationTime,
				offset: '-=1500'
			})
			.add({
				targets: '#heroSvg',
				scale: 1
			});
	}


	/* End Basecamp text */


	/* Start main page */


	function mainPage() {


		/* Start audio controller */


		const mainVideo = document.getElementById('vid');
		const mainAudio = document.getElementById('aud');
		const volumeRange = document.getElementById('volumeControl');

		volumeRange.addEventListener('input', changeVolume);
		mainAudio.volume = volumeRange.value;
		//mainVideo.play();
		//mainAudio.play();

		function changeVolume() {
			mainAudio.volume = volumeRange.value;
		}


		/* End audio controller */


		/* Start box menu */


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

		const sqrTL = new mojs.Shape({
			...SQUARE,
			x: lPos,
			y: sPos,
		});

		const sqrTR = new mojs.Shape({
			...SQUARE,
			x: sPos,
			y: sPos,
		});

		const sqrBL = new mojs.Shape({
			...SQUARE,
			x: lPos,
			y: lPos,
		});

		const sqrBR = new mojs.Shape({
			...SQUARE,
			x: sPos,
			y: lPos
		});


		/* End box menu  */


		/* Start entrance animations */


		const menuEntrance = new mojs.Html({
			el: '#menu',
			x: { '1vw': 0 },
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

		menuAnimation.add(
			menuEntrance,
			logoEntrance
		).play();


		/* End entrance animations */


	}/* End main page */


}/* End all */