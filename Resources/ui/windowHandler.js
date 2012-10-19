var offCanvasContainer = Ti.UI.createWindow({
		modal:true,
		backgroundColor:'#333',
		borderRadius:5,
		fullscreen:true,
		navBarHidden:true
	});

//// CREATE

exports.create = function(_left,_middle){
	
	var leftWindow = _left;
	var middleWindow = _middle;
	var isOpen = false;
	
	/// Left/Navigation window
	leftWindow.setZIndex(1);
	leftWindow.offCanvasSide ='left';
	
	/// Middle window
	middleWindow = addEvents(middleWindow);		
	
	offCanvasContainer.add(leftWindow,middleWindow);
	
	return offCanvasContainer; 
};




///// OPEN 
exports.openWindow = function(_window){
	
	offCanvasContainer.children[1].animate({transform : -270,duration : 250},function(){
		offCanvasContainer.remove(offCanvasContainer.children[1]);
		//offCanvasContainer.children[1].close();
		
		_window = addEvents(_window);
		offCanvasContainer.add(_window);
	});
};




//// EVENTS
function addEvents(_window){
	
	var self = _window;
	var olt = Ti.UI.create3DMatrix(),curX;
	var startGlobal;
	
	self.setZIndex(2);
	self.offCanvasSide ='middle';
	/// Adding touchmove event listener to Middle window
	self.addEventListener('touchmove', function(e){
		if(e.globalPoint.x >=0 && e.globalPoint.x <=270)
		{
			olt = olt.translate(e.x,0, 0); 
	    	self.animate({transform : olt,duration : 50});
		}
	});

	/// When Touch event ends, well check the position of the middle window and se if it should
	/// be closed or open
	self.addEventListener('touchend', function(e){
		if(e.globalPoint.x <=140)
		{
			endPosition = ((320-e.globalPoint.x)-320);
			olt = olt.translate(endPosition,0, 0); 
	    	self.animate({transform : olt,duration : 150});
	    	
	    	isOpen = false;
		}
		
		if(e.globalPoint.x >=141)
		{
			endPosition = (270-e.globalPoint.x);
			olt = olt.translate(endPosition,0, 0); 
	    	self.animate({transform : olt,duration : 150});
	    	
	    	isOpen = true;
		}
	});
		
	return self;
}
