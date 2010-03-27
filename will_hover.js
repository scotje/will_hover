/*****************************************************************************
* Are you tired of writing onmouseover= and onmouseout= for hover states?
* 
* How to use: Include Prototype or jQuery and this file. Add "will_hover" 
* class to any IMG tag that you want to have a hover state. Name hover state 
* graphics with "-hover" at the end of the file name. Like "about.png" and 
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

if ( typeof Prototype !== 'undefined' ) {
	document.observe("dom:loaded", function() {
		$$('.will_hover').each(function(el, index) {
			Event.observe(el, 'mouseover', function() {
				var ext = this.src.split('.').reverse().first();
				this.src = this.src.replace('.' + ext, '-hover.' + ext);
			});
			
			Event.observe(el, 'mouseout', function() {
				var ext = this.src.split('.').reverse().first();
				this.src = this.src.replace('-hover.' + ext, '.' + ext);
			});
		});
	
		$$('.will_hover_bg').each(function(el, index) {
			Event.observe(el, 'mouseover', function() {
				var ext = this.getStyle('background-image').replace(/^url\(/, '').replace(/\)$/, '').split('.').reverse().first();
				this.setStyle({
					backgroundImage: this.getStyle('background-image').replace('.' + ext, '-hover.' + ext)
				});
			});
			
			Event.observe(el, 'mouseout', function() {
				var ext = this.getStyle('background-image').replace(/^url\(/, '').replace(/\)$/, '').split('.').reverse().first();
				this.setStyle({
					backgroundImage: this.getStyle('background-image').replace('-hover.' + ext, '.' + ext)
				});
			});
		});
	});
} else if ( typeof jQuery !== 'undefined' ) {
	$(document).ready(function() {
		$('.will_hover').bind({
			mouseover: function() {
				var ext = this.src.split('.').reverse();
				ext = ext[0];
				this.src = this.src.replace('.' + ext, '-hover.' + ext);
			},
			
			mouseout: function() {
				var ext = this.src.split('.').reverse();
				ext = ext[0];
				this.src = this.src.replace('-hover.' + ext, '.' + ext);
			}
		});
		
		$('.will_hover_bg').bind({
			mouseover: function() {
				var ext = $(this).css('background-image').replace(/^url\(/, '').replace(/\)$/, '').split('.').reverse();
				ext = ext[0];

				$(this).css({
					'background-image': $(this).css('background-image').replace('.' + ext, '-hover.' + ext)
				});
			},
			
			mouseout: function() {
				var ext = $(this).css('background-image').replace(/^url\(/, '').replace(/\)$/, '').split('.').reverse();
				ext = ext[0];
				
				$(this).css({
					'background-image': $(this).css('background-image').replace('-hover.' + ext, '.' + ext)
				});
			}
		});
	});
} else {
	alert('will_hover.js requires Prototype or jQuery.');
}