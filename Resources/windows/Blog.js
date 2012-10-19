function WindowBlog(){
	
	var self = Ti.UI.createWindow({
		modal:true,
		backgroundColor:'#ddd',
		borderRadius:5,
		tabBarHidden:true
	});
	
var lable = Ti.UI.createLabel({
		text:'Blog'
	});
	self.add(lable);
	
	return self; 
}
module.exports = WindowBlog;