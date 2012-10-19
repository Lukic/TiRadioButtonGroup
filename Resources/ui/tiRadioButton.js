exports.createGroup = function(arg) {
	
	//// Main object that will be returned when createGroup is called.
	var self = Ti.UI.createView({
		width:arg.width,
		height:arg.height,
		groupId: arg.groupId,
		layout:'horizontal',
		top:20
	});

	//// Looping through radio buttons that will be created inside the radioGroup. 
	for(var i = 0, count = arg.radioItemsValue.length; i<count; i++){
		var radioItem = Ti.UI.createImageView({
			width:arg.radioItemsWidth,
			height:arg.radioItemsHeight,
			image:arg.radioItemsBackgroundImage,
			top:0,
			left:0,
			id:i
		});	
	
		//// Adding left padding/margin/spacing radio items. Ofc. not the first one ;) 
		if(i!=0 && arg.layout ==='horizontal')
		{
			radioItem.setLeft(arg.radioItemsPadding);
		}
		if(i!=0 && arg.layout ==='vertical')
		{
			radioItem.setTop(arg.radioItemsPadding);
		}
		
		//// Adding singletap event that will chnage background image on the selected radio item.
		radioItem.addEventListener('singletap', function(e) {
    		var _parent = this.getParent();
    	
    		for(var i = 0, count = _parent.children.length; i<count; i++){
    			if(i === e.source.id)
    			{
    				_parent.children[i].setImage(arg.radioItemsBackgroundSelectedImage);
    			}
    			else{
    				_parent.children[i].setImage(arg.radioItemsBackgroundImage);	
    			}
			}		
		});
	
		//// Adding radio button to our main object/container/holder
		self.add(radioItem);
	}
	
	

	//// Returning the main object that contains radio buttons. 
	return self;
};
