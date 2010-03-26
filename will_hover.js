/*****************************************************************************
* Are you tried of writing onmouseover= and onmouseout= for hover states?
* 
* How to use: Include Prototype and this file. Add "will_hover" class to any
* img tag that you want to have a hover state. Name hover state graphics with
* "-hover" at the end of the file name. Like "about.png" and 
* "about-hover.png".
* 
* New bonus feature! Add "will_hover_bg" class to any element with a CSS
* background image that you want to have a hover state. Name the graphics
* following the convention shown above.
*
* Created By: Jesse C Scott (jesse.c.scott AT gmail.com)
* Released into the public domain, no copyright is claimed on this work.
* 
*****************************************************************************/

document.observe("dom:loaded", function() {
	$$('.will_hover').each(function(el, index) {
		Event.observe(el, 'mouseover', wh_over);
		Event.observe(el, 'mouseout', wh_out);
	});
	
	$$('.will_hover_bg').each(function(el, index) {
		Event.observe(el, 'mouseover', wh_bg_over);
		Event.observe(el, 'mouseout', wh_bg_out);
	});
});

function wh_over(event) {
	var ext = this.src.split('.').reverse().first();
	this.src = this.src.replace('.' + ext, '-hover.' + ext);
}

function wh_bg_over(event) {
	var ext = this.getStyle('background-image').replace(/^url\(/, '').replace(/\)$/, '').split('.').reverse().first();
	this.setStyle({
		backgroundImage: this.getStyle('background-image').replace('.' + ext, '-hover.' + ext)
	});
}

function wh_out(event) {
	var ext = this.src.split('.').reverse().first();
	this.src = this.src.replace('-hover.' + ext, '.' + ext);
}

function wh_bg_out(event) {
	var ext = this.getStyle('background-image').replace(/^url\(/, '').replace(/\)$/, '').split('.').reverse().first();
	this.setStyle({
		backgroundImage: this.getStyle('background-image').replace('-hover.' + ext, '.' + ext)
	});
}