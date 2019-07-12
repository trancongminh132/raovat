$.fn.myBoxy = function (popup, options) {
    myoptions = jQuery.extend ({
        title: "Thông báo từ Raovat.123Mua.vn",
        message: "",
        type: "alert",
        refresh: false,
        modal: true,
		afterHide:function(){},
        callback: function(){},
		unloadOnHide:true
    }, options);
	
    var content ='<div class="popup" style="width:460px;margin:0 auto">'+
    '<div class="title-popup">'+
    '<span>'+myoptions.title+'</span>';
	
    if(myoptions.refresh==true)
    {	
    	content		+= '<a title="Đóng lại" class="btn-close" onclick="Boxy.get(this).hide();location.reload();"><img src="'+imgurl+'/boxy/close_boxy.png" width="18" height="17" alt="Đóng lại" /></a>';
    }
    else
    {
    	content		+= '<a title="Đóng lại" class="btn-close" onclick="Boxy.get(this).hide();"><img src="'+imgurl+'/boxy/close_boxy.png" width="18" height="17" alt="Đóng lại"/></a>';
    }
	
    content		+='</div>'+'<div class="content-popup">';

    
    if(myoptions.type=='alert')
    {
        content += '<div class="bar-notice notice-warning"><span class="ico"></span>'+myoptions.message+'</div><div class="clear"></div>';
    }
    if(myoptions.type=='success')
    {
        content += '<div class="bar-notice notice-sucess"><span class="ico"></span>'+myoptions.message+'</div><div class="clear"></div>';
    }
    else if(myoptions.type=='confirm')
    {
        content += '<div class="bar-notice notice-confirm"><span class="ico"></span>'+myoptions.message+'</div><div class="clear"></div>';
    }
	 else if(myoptions.type=='error')
    {
        content += '<div class="bar-notice notice-error"><span class="ico"></span>'+myoptions.message+'</div><div class="clear"></div>';
    }
	else if(myoptions.type=='message' || myoptions.type=='loading')
    {
        content += '<div>'+myoptions.message+'</div>';
    }				
    content += '</div>';
	

    if(myoptions.type=='alert' || myoptions.type=='success' || myoptions.type=='message')
    {
    	content +=	'<div class="footer-popup">'+'<div class="btn-default">';
	    if(myoptions.refresh==true)
	    {	
	    	content		+= '<input class="btn-cancel" type="button" onclick="Boxy.get(this).hide();location.reload();" value="Đóng lại" />';
	    }
	    else
	    {
	    	content		+= '<input class="btn-cancel" type="button" onclick="Boxy.get(this).hide();" value="Đóng lại" />';
	    }
	    content += '</div>';
    }
    else if(myoptions.type=='confirm')
    {
        content +=  '<div class="footer-popup">' +
		'<div class="btn-default btn-double"><input id="accept" class="btn-accept" name="" type="button" value="Đồng ý" />'+
		'<input id="reject" class="btn-cancel close" name="" onclick="Boxy.get(this).hide();" type="button" value="Hủy bỏ" /></div>'+
		'</div>';
    }
    else if(myoptions.type=='loading')
    {
    	content +=  '<div class="footer-popup">';
    }
    content += '</div>';
    new popup(content, myoptions);

    if(myoptions.type=='confirm')
    {
        $("#accept").click(myoptions.callback);
    }
        
    return false;
};
