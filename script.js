/* Fonts */
document.addEventListener('DOMContentLoaded', function () {
	const font = new FontFace('Walk The Moon 3D Italic');
	font
		.load()
		.then(function (loadedFont) {
			document.fonts.add(loadedFont);
			document.body.style.opacity = '1';
		})
		.catch(function (error) {
			console.error('Font loading failed:', error);
		});

	// Your existing rolling text code here
	const rollingTexts = document.querySelectorAll('.rolling-text');

	rollingTexts.forEach((text) => {
		const originalText = text.textContent;
		text.setAttribute('data-text', originalText);

		text.innerHTML = originalText
			.split('')
			.map((letter) => `<span>${letter}</span>`)
			.join('');
	});
});
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
	let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

	if (currentScroll > lastScrollTop) {
		// Scrolling down
		header.classList.add('hidden');
	} else {
		// Scrolling up
		header.classList.remove('hidden');
	}

	lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
document.addEventListener('DOMContentLoaded', () => {
	const menuIcon = document.querySelector('.menu-icon');
	const closeIcon = document.querySelector('.close-icon');
	const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');

	function toggleMobileMenu() {
		if (window.innerWidth <= 768) {
			mobileNavOverlay.classList.toggle('active');
		}
	}

	if (menuIcon) {
		menuIcon.addEventListener('click', toggleMobileMenu);
	}

	if (closeIcon) {
		closeIcon.addEventListener('click', toggleMobileMenu);
	}

	// Close menu when a nav item is clicked
	const mobileNavLinks = document.querySelectorAll('.mobile-nav-overlay a');
	mobileNavLinks.forEach((link) => {
		link.addEventListener('click', () => {
			if (window.innerWidth <= 768) {
				mobileNavOverlay.classList.remove('active');
			}
		});
	});

	// Handle resize events
	window.addEventListener('resize', () => {
		if (window.innerWidth > 768) {
			mobileNavOverlay.classList.remove('active');
		}
	});
});
