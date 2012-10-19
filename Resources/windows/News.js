function WindowNews(){
	
	var self = Ti.UI.createWindow({
		modal:true,
		backgroundColor:'#ddd',
		borderRadius:5,
		tabBarHidden:true
	});
	
var lable = Ti.UI.createLabel({
		text:'News'
	});
	self.add(lable);
	
	return self; 
}
module.exports = WindowNews;