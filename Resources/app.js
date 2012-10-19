Titanium.UI.setBackgroundColor('#000');

var offCanvas = {};

(function() {
		var offCanvas	= require('ui/windowHandler'),
		windowMain		= require('windows/Main'),
		windowNav		= require('windows/Navigation');
		
		
		
		offCanvas.create(windowNav(),windowMain()).open();



})();
