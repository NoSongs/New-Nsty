var initialMarginTop;

$(function() {
	var myScroll = new IScroll('#iscroll-wrapper', { probeType: 3, mouseWheel: true });

	myScroll.on('scroll', updatePosition);
	myScroll.on('scrollEnd', updatePosition);

	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
});

function updatePosition () {
	var about_header = document.getElementById('god-wayne');
	about_header.style.opacity = 1 - (Math.abs(this.y) / 300);
	if (initialMarginTop === undefined) {
		initialMarginTop = $('#god-wayne').css("margin-top");
		initialMarginTop = initialMarginTop.substring(0, initialMarginTop.length - 2);
	}
	about_header.style.marginTop = (parseInt(initialMarginTop) + Math.abs(this.y)) + "px";
}

