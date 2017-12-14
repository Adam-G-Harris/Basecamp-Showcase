window.onload = () => {


	/* Start loading page */


	; (function () {

		const loadingPage = document.getElementById('loaderContent');

		loadingPage.classList.add('noOpacity');

		const leftSide = anime({
			targets: '#loaderContainer #loaderAudio #leftSide',
			delay: 2000,
			duration: 2500,
			translateX: [-10, 0],
			opacity: [0, 1],
			easing: 'easeOutQuint'
		});

		const rightSide = anime({
			targets: '#loaderContainer #loaderAudio #rightSide',
			delay: 2000,
			duration: 2500,
			translateX: [10, 0],
			opacity: [0, 1],
			easing: 'easeOutQuint'
		});

		setTimeout(() => {
			basecampTextAnimation();
		}, 8000);

	})()


	/* End loading page */


	/* Start Basecamp text */


	function basecampTextAnimation() {

		const load = document.getElementById('loaderContainer');

		load.classList.add('noOpacity');

		setTimeout(() => {
			load.style.display = 'none';
		}, 4000);

		// Calling other elements to enter
		mainPage();

		// Main animation timeline
		const basecampText = anime.timeline();
		const durationTime = 1500;

		basecampText

			// Initial draw
			.add({
				targets: '#heroSvg .gSvg path',
				strokeDashoffset: [anime.setDashoffset, 0],
				easing: 'easeInOutQuart',
				strokeWidth: .4,
				duration: durationTime,
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
				offset: `-=${durationTime}`
			})
			.add({
				targets: '#heroSvg .campGroup',
				translateX: 5,
				easing: 'easeOutQuint',
				duration: durationTime,
				offset: `-=${durationTime}`
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


		const circleLines = document.querySelectorAll('.audioLines');
		const circle = document.querySelector('#audioIcon');
		const mainVideo = document.getElementById('vid');
		const mainAudio = document.getElementById('aud');
		mainAudio.volume = .1;
		mainVideo.play();
		mainAudio.play();

		circle.addEventListener('click', audioToggle);

		function audioToggle() {

			mainAudio.volume === .1 ?
				mainAudio.volume = 0 :
				mainAudio.volume = .1;

			for (let i = 0; i < circleLines.length; i++) {

				circleLines[i].classList.toggle('volumeChanges');
			}
		}


		/* End audio controller */


		/* Start entrance animations */


		const menuEntrance = new mojs.Html({
			el: '#menu',
			x: { '3vw': 0 },
			opacity: { 0: 1 },
			delay: 2000,
			duration: 4000,
			easing: 'quart.out'
		});

		// Entrance animation timeline
		const menuAnimation = new mojs.Timeline();

		menuAnimation.add(
			menuEntrance
		).play();


		/* End entrance animations */


	}/* End main page */


}/* End all */