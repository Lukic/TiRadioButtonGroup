function WindowNav(){
	
	var	navigation = require('ui/navigation');
	
	var self = Ti.UI.createWindow({
		modal:true,
		borderRadius:5,
		tabBarHidden:true,
		backgroundImage:'/iphone/bg_navi.jpg'
	});

	self.add(navigation());
	return self; 
}
module.exports = WindowNav;