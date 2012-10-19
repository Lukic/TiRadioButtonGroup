function Navigation(){
	
	//// Windows
	var windowNews 		= require('windows/News'),
		windowBlog 		= require('windows/Blog'),
		windowSettings 	= require('windows/Settings'),
		windowAbout 	= require('windows/About'),
		offCanvas		= require('ui/windowHandler');
	//// Creating tableview for menulinks	
	var navigationTable = Ti.UI.createTableView({
		backgroundColor:'transparent',
	    borderColor:'transparent',
		borderWidth:0,
		separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.NONE,
		separatorColor: 'transparent',
		scrollable:false
	});
	var navigationLinks = [ 
							{title: 'News', win:windowNews()}, 
							{title: 'Blog', win:windowBlog()}, 
							{title: 'About', win:windowAbout()}, 
							{title: 'Settings', win:windowSettings()}
							];
	
	
	var data=[];
	for (var i=0;i<navigationLinks.length;i++) {
		var row = Ti.UI.createTableViewRow({
			title:navigationLinks[i].title,
			openWindow:navigationLinks[i].win
		});
		
		
		
		row.addEventListener('click',function(e){
			offCanvas.openWindow(this.openWindow);
		});

		data.push(row);
	}
	navigationTable.setData(data);
	
	return navigationTable; 
}
module.exports = Navigation;