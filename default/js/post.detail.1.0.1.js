var postDetail = 
{
	totalReason:6,
	callPopupSharelink : function(provider)
	{
		var linkToShare = window.location.href + '?sharelink=' + Account.UNAME;
		var titleToShare = document.title;
		var descToShare = document.description;
		var imgToShare = '';
		
		imgToShare = $('#slider img').attr('src');
		descToShare = $('.row-info .title').html();
		
		switch(provider)
		{
			case 'zingme':
				linkToShare += '&website=zingme';
				openZingme(linkToShare, titleToShare, descToShare, imgToShare);
				break;
			case 'facebook':
				linkToShare += '&website=facebook';
				openFacebook(linkToShare, titleToShare, descToShare, imgToShare);
				break;
			case 'google':
				linkToShare += '&website=google';
				openGoogle(linkToShare);
				break;
			case 'twitter':
				linkToShare += '&website=twitter';
				openTwitter(linkToShare);
				break;
			case 'linkedin':
				linkToShare += '&website=linkedin';
				openLinkedin(linkToShare);
				break;
			case 'linkhay':
				linkToShare += '&website=linkhay';
				openLinkhay(linkToShare);
				break;
			case 'digg':
				linkToShare += '&website=digg';
				openDigg(linkToShare);
				break;
			default:
				linkToShare += '&website=google';
				openGoogle(linkToShare);
				break;
		}	
	},
	savePost:function(obj, postId)
	{
		if (!postId)
		{
			return;
		}
		$.ajax({
			url: Settings.baseurl + '/ajax/save-post',
			type: 'POST',
			dataType : 'json',     
			data:{id:postId},
			success: function(data)
			{
				if(data.error == 0)
				{
					$(this).myBoxy (Boxy,{
						type:'success',
						message: data.msg
					});
				}
				else 
				{
					$(this).myBoxy (Boxy,{
						type:'alert',
						message: data.msg
					});
				}
				obj.attr('rel','Loại bỏ khỏi danh sách đã lưu');
				obj.removeClass('save_post').addClass('remove_post');
				obj.html('');
				obj.html('Hủy lưu');
			}
		});
	},
	overlayComplain:function()
	{
		var html = '<div class="popup" style="width:450px;margin:0 auto"><div class="title-popup">THÔNG BÁO TỚI BAN QUẢN TRỊ 123MUA<a title="Đóng lại" class="btn-close close"><img src="'+Settings.imgurl+'/boxy/close_boxy.png" width="18" height="17" alt="Đóng lại" /></a></div><div class="content-popup"><div class="complain"><em class="error" id="notifyError">error</em><h2 class="title">Bạn hãy cho chúng tôi biết lý do cảnh báo tin này!</h2>	<p class="row-check"><input id="reason1" type="checkbox" value="Tin đăng có dấu hiệu lừa đảo." /> <label for ="reason1">Tin đăng có dấu hiệu lừa đảo.</label></p><p class="row-check"><input id="reason2" type="checkbox" value="Sản phẩm này quá rẻ so với giá thị trường." /> <label for ="reason2">Sản phẩm này quá rẻ so với giá thị trường.</label></p><p class="row-check"><input id="reason3" type="checkbox" value="Không có thông tin sản phẩm cần bán." /> <label for ="reason3">Không có thông tin sản phẩm cần bán.</label></p><p class="row-check"><input id="reason4" type="checkbox" value="Không có địa chỉ hoặc số ĐT liên hệ cụ thể." /> <label for ="reason4">Không có địa chỉ hoặc số ĐT liên hệ cụ thể.</label></p><p class="row-check"><input id="reason5" type="checkbox" value="Tin đăng chứa nội dung xấu." /> <label for ="reason5">Tin đăng chưa nội dung xấu.</label></p><p class="row-check"><input id="reason6" type="checkbox" value="Tin đăng spam." /> <label for ="reason6">Tin đăng spam.</label></p><p class="other-reason clearfix"><label for="title" class="or-title">Lý do khác</label><textarea name="reason_other" id="reason_other" cols="" rows=""></textarea></p><h2 class="contact-title">Thông tin để BQT 123Mua liên hệ:</h2><p class="email clearfix"><label for="title" class="e-title">Email</label><input name="email_contact" id="email_contact" type="text" /></p><p class="mobile clearfix"><label for="title" class="m-title">Mobile</label><input name="mobile_contact" id="mobile_contact" type="text" /></p><p class="code clearfix"><label for="title" class="c-title">Mã bảo mật</label><input name="captcha" id="captcha" type="text" /><img src="'+Settings.imgurl+'/img_demo/code.png" width="60" height="23" alt="" /> <a href="javascript:void(0)" class="refresh">refresh</a></p><p class="loading"></p></div><div class="clear"></div></div><div class="footer-popup"><div class="btn-default complain-row-btn"><input class="btn-accept" name="accept" id="btn_accept" type="button" value="Gửi lý do" /><input class="btn-cancel close" name="" type="button" value="Hủy bỏ" /></div></div></div>';
		this.boxy = new Boxy(html, {modal:true, unloadOnHide: true});
	},
	sendComplain:function()
	{
		var str_checked = "";
		var charSplit = "_reasonC_";
		
		for(var i = 1; i <= postDetail.totalReason; i++)
		{		
			if(document.getElementById("reason"+i).checked == true)
			{			
				str_checked += (str_checked?charSplit:"")+document.getElementById("reason"+i).value;					
			}			
		}	
	
		var rpo = document.getElementById("reason_other").value;
		var email = document.getElementById("email_contact").value;
		var mobile = document.getElementById("mobile_contact").value;
	    var captcha = document.getElementById("captcha").value;
		
		if(!Account.UID)
		{
		  
		   if(captcha=="")
		   {
			   jQuery("#notifyError").show();
			   jQuery("#notifyError").html("<span style='color:red'>Bạn chưa nhập mã bảo mật!</span>");
			   return;
		   }
		}
		else captcha = "";
	   
		if(email && !Core123M.is_email(email))
		{
		   jQuery("#notifyError").show();
		   jQuery("#notifyError").html("<span style='color:red'>Email bạn nhập không chính xác!</span>");
		   return;
		}
	   
		if(rpo)
		{
			str_checked += (str_checked?charSplit:"")+rpo;
	   }
	   
	   if(str_checked=="")
	   {
		  jQuery("#notifyError").show();
		  jQuery("#notifyError").html("<span style='color:red'>Bạn hãy cho chúng tôi biết lý do cần cảnh báo tin này!</span>");
		  return;
	   }
	   else
	   {
		   $('.loading').show();
		   $.ajax({
				url: Settings.baseurl+'/ajax/report-complain',
				data: {'msg':str_checked,'email':email,'mobile':mobile,'captcha':captcha,post_id :POST_ID},
				type: 'POST',
				dataType:'json',
				success: function(data)
				{
					jQuery('.loading').hide();
					
					if(data.error == 2)
					{
						jQuery("#notifyError").show();
						jQuery("#notifyError").html("<span style='color:red'>Mã bảo mật không đúng. Mời bạn nhập lại!</span>");
					}
					else if(data.error == 0)
					{
						var boxy = Boxy.get($(".popup"));
							boxy.hide();
						$(this).myBoxy (Boxy,{
							type:'success',
							message: 'Rất cảm ơn bạn đã thông báo cho chúng tôi. Chúng tôi sẽ kiểm tra sau ít phút nữa.'
						});			
					}else
					{
						jQuery("#notifyError").show();
						jQuery("#notifyError").html("<span style='color:red'>Bạn hãy cho chúng tôi biết lý do cần cảnh báo tin này!</span>");
					}
				}
			});
	   }
	},
	removeSavePost : function(obj, Id)
	{
		$(this).myBoxy (Boxy,{
			type: 'confirm',
			message: 'Bạn có chắc chắn không muốn lưu tin này?',
			Id : Id,
			callback: function() 
			{
				var boxy = Boxy.get(this);
				var options = boxy.options;
				boxy.hide();
				Id = options.Id;
				if (!Id)
				{
					return;
				}

				$.ajax({
					type: "POST",
					url: Settings.baseurl + '/ajax/remove-post-save',
					data:{id:Id},
					dataType:'json',
					success: function(data)
					{                        
						if(data.error == 0)
						{
							$(this).myBoxy (Boxy,{
								type:'alert',
								message: data.msg
							});
						}
						else 
						{
							$(this).myBoxy (Boxy,{
								type:'alert',
								message: data.msg
							});
						}
						obj.attr('rel','Lưu lại tin này để xem khi cần');
						obj.removeClass('remove_post').addClass('save_post');
						obj.html('Lưu lại tin');
					}
				});
			}
		});
	},
	hidePost : function(obj, Id)
	{
		$(this).myBoxy (Boxy,{
			type: 'confirm',
			message: 'Bạn có chắc chắn muốn ẩn tin này?',
			Id : Id,
			callback: function() 
			{
				var boxy = Boxy.get(this);
				var options = boxy.options;
				boxy.hide();
				Id = options.Id;
				if (!Id)
				{
					return;
				}

				$.ajax({
					type: "POST",
					url: Settings.baseurl + '/ajax/disable-post',
					data:{id:Id},
					dataType:'json',
					success: function(data)
					{                        
						if(data.error == 0)
						{
							$(this).myBoxy (Boxy,{
								type:'alert',
								message: data.msg,
							});
							window.location = data.url;
						}
						else 
						{
							$(this).myBoxy (Boxy,{
								type:'alert',
								message: data.msg
							});
						}					
					}
				});
			}
		});
	},
	viewDirection: function()
	{
		 $.ajax({
			type: 'GET',
			url: Settings.baseurl+'/post/map-choose-address',
			success:function(html){
				$('.popup_map').html(html);
	 			GMap.showMaps();
				GMap.getAddress(new google.maps.LatLng(GMap.options.latitude, GMap.options.longitude));
			}
		});    
	},
	upPost:function(id)
	{
		if (!id)
		{
			return;
		}

		$(this).myBoxy (Boxy,{
			title: 'Đang xử lý',
			type: 'loading',
			message: '<img src="'+Settings.imgurl+'/zoomloader.gif" alt="Đang thực hiện" style="margin-bottom:5px;margin-left:10px;" />'
		});
		
		$.ajax({
			url: Settings.baseurl + '/post/up-post',
			type: 'POST',
			dataType : 'json',     
			data:{id:id},
			success: function(data){
				var boxy = Boxy.get($(".popup"));
				boxy.hide();
				if(data.error == 1)
				{
					// cap nhat so luot up
					var up_quantity = $('.up_quantity').html();
					postDetail.updateUp(up_quantity, 1);
					postDetail.upSuccess();
					$('.check').removeAttr('checked');
				}
				else if(data.error == 0 || data.error == -1)
				{
					$(this).myBoxy (Boxy,{
						type:'alert',
						message: 'Thao tác thất bại. Bạn vui lòng thử lại sau.'
					});
				}
				else if(data.error == -3)
				{
					$(this).myBoxy (Boxy,{
						type:'alert',
						message: 'Bạn đã sử dụng hết lượt Up.Vui lòng mua lượt up để sử dụng.'
					});
				}
			}
		});
	},
	updateUp:function(quantity, number)
	{
		quantity = quantity.replace(/[.]/g, "");
		$('.up_quantity').html(common.addDot(quantity - number));
	},
	upSuccess : function()
	{
		new Boxy('<div class="popup" style="width:400px;margin:0 auto"><div class="title-popup">Thông báo từ 123Mua.vn<a title="Đóng lại" class="btn-close close"><img src="'+ Settings.imgurl +'/boxy/close_boxy.png" width="18" height="17" alt="Đóng lại" /></a></div><div class="content-popup"><div class="bar-notice notice-sucess"><span class="ico"></span>Bạn đã UP sản phẩm thành công!</div><div class="clear"></div></div><div class="footer-popup"><div class="btn-default" style="width:218px"><input class="btn-accept" name="" type="button" value="Cài đặt Up tự động" onclick="post.registerAutoup(); Boxy.get(this).hide();" /><input class="btn-cancel close" name="" type="button" value="Đóng lại" onclick="Boxy.get(this).hide();"/></div></div></div>',{modal : true , unloadOnHide: true});
	}
};

(function($) 
{
	$('.save_post').live('click', function()
	{
		/*if(Account.UNAME == '')
		{
			login.popup_login();
			return false;
		}*/
		postDetail.savePost($(this), POST_ID);
	});
	//remove save post
	$(".remove_post").live('click', function()
	{
		/*if(Account.UNAME == '')
		{
			login.popup_login();
			return false;
		}*/
		postDetail.removeSavePost($(this), POST_ID);
	});
	//buy vip news
	$(".buy_vip").live('click', function()
	{
		if(Account.UNAME == '')
		{
			login.popup_login();
			return false;
		}
		window.location = Settings.baseurl+'/usercp/thong-ke-mua-dich-vu.html';
	});
	//hide post
	$("#hide_post").live('click', function()
	{
		/*if(Account.UNAME == '')
		{
			login.popup_login();
			return false;
		}*/
		postDetail.hidePost($(this), POST_ID);
	});
	
	$('#user_complain').live('click', function()
	{
		postDetail.overlayComplain();
	});
	$('#btn_accept').live('click', function(){
		postDetail.sendComplain();
	});
	$('#send_msg').live('click', function()
	{	
		Message.options = {
			receiver : postDetail.userId,
			userName : postDetail.userName,
			email	 : postDetail.email,
			postId	 : POST_ID
		};
		Message.compose();
	});
	
	$('#view_map').live('click', function()
	{
		new Boxy('<div class="popup" style="width:802px;height:630px;margin:auto"><div class="title-popup">Địa chỉ tin rao<a title="Đóng lại" class="btn-close close"><img src="'+Settings.imgurl+'/boxy/close_boxy.png" alt="Đóng lại" /></a></div><div class="popup_map" style="margin-bottom:10px;"><img style="margin: 280px 0 0 380px" src="'+Settings.imgurl+'/loading.gif"></div></div>',{modal : true , unloadOnHide: true});
		var mapOptions = {
    			elementId: 'map_canvas',
    			src: 'http://maps.googleapis.com/maps/api/js?libraries=places&sensor=false',
    			longitude: parseFloat(postDetail.longitude),
    			latitude: parseFloat(postDetail.latitude),
    			address: "",
    			marker: {img: Settings.imgurl+ '/shop.png'},
    			shopInfo: '',
    			afterScriptLoaded: 'postDetail.viewDirection'
    	};
  		GMap.initLoader(mapOptions); 	 
	});
	//up tin
	$('.up_post').live('click', function ()
	{
		var id = $(this).attr('rel');
		postDetail.upPost(id);
	});
})(jQuery);