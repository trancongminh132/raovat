var editor_tiny_url = Settings.jsurl+'/tiny_mce/tiny_mce.js';
var post = 
{
	items : {},
	ic:0,
	checkall:false,
	pageType:"",
	totalReason:6,
	arrayPostId:[],
	showdetail:false,
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
	overlayComplain:function()
	{
		var html = '<div class="popup" style="width:450px;margin:0 auto"><div class="title-popup">THÔNG BÁO TỚI BAN QUẢN TRỊ 123MUA<a title="Đóng lại" class="btn-close close"><img src="'+Settings.imgurl+'/boxy/close_boxy.png" width="18" height="17" alt="Đóng lại" /></a></div><div class="content-popup"><div class="complain"><em class="error" id="notifyError">error</em><h2 class="title">Bạn hãy cho chúng tôi biết lý do cảnh báo tin này!</h2>	<p class="row-check"><input id="reason1" type="checkbox" value="Tin đăng có dấu hiệu lừa đảo." /> <label for ="reason1">Tin đăng có dấu hiệu lừa đảo.</label></p><p class="row-check"><input id="reason2" type="checkbox" value="Sản phẩm này quá rẻ so với giá thị trường." /> <label for ="reason2">Sản phẩm này quá rẻ so với giá thị trường.</label></p><p class="row-check"><input id="reason3" type="checkbox" value="Không có thông tin sản phẩm cần bán." /> <label for ="reason3">Không có thông tin sản phẩm cần bán.</label></p><p class="row-check"><input id="reason4" type="checkbox" value="Không có địa chỉ hoặc số ĐT liên hệ cụ thể." /> <label for ="reason4">Không có địa chỉ hoặc số ĐT liên hệ cụ thể.</label></p><p class="row-check"><input id="reason5" type="checkbox" value="Tin đăng chứa nội dung xấu." /> <label for ="reason5">Tin đăng chưa nội dung xấu.</label></p><p class="row-check"><input id="reason6" type="checkbox" value="Tin đăng spam." /> <label for ="reason6">Tin đăng spam.</label></p><p class="other-reason clearfix"><label for="title" class="or-title">Lý do khác</label><textarea name="reason_other" id="reason_other" cols="" rows=""></textarea></p><h2 class="contact-title">Thông tin để BQT 123Mua liên hệ:</h2><p class="email clearfix"><label for="title" class="e-title">Email</label><input name="email_contact" id="email_contact" type="text" /></p><p class="mobile clearfix"><label for="title" class="m-title">Mobile</label><input name="mobile_contact" id="mobile_contact" type="text" /></p><p class="loading"></p></div><div class="clear"></div></div><div class="footer-popup"><div class="btn-default complain-row-btn"><input class="btn-accept" name="accept" id="btn_accept" type="button" value="Gửi lý do" /><input class="btn-cancel close" name="" type="button" value="Hủy bỏ" /></div></div></div>';
		this.boxy = new Boxy(html, {modal:true, unloadOnHide: true});
	},
	overlaySyntaxSms:function()
	{
		var html = '<div class="popup" style="width:500px;margin:0 auto"><div class="title-popup">Cú pháp SMS<a title="Đóng lại" class="btn-close close"><img src="'+Settings.imgurl+'/boxy/close_boxy.png" alt="Đóng lại" /></a></div><div class="content-popup"><div class="cp-sms"><p>* Soạn tin <strong class="spec">123M</strong> gửi <strong class="spec">8001/8501/8701</strong> để nhận mã OTP kích hoạt tin đăng <a href="#"><img src="'+Settings.imgurl+'/ico_help.png" width="12" height="12" alt="Trợ giúp thêm" /></a></p><p>* Soạn tin <strong class="spec">123M</strong> gửi <strong class="spec">8001/8501/8701</strong> để nhận mã OTP kích hoạt tin đăng <a href="#"><img src="'+Settings.imgurl+'/ico_help.png" width="12" height="12" alt="Trợ giúp thêm" /></a></p><p>* Soạn tin <strong class="spec">123M</strong> gửi <strong class="spec">8001/8501/8701</strong> để nhận mã OTP kích hoạt tin đăng <a href="#"><img src="'+Settings.imgurl+'/ico_help.png" width="12" height="12" alt="Trợ giúp thêm" /></a></p><p>* Soạn tin <strong class="spec">123M</strong> gửi <strong class="spec">8001/8501/8701</strong> để nhận mã OTP kích hoạt tin đăng <a href="#"><img src="'+Settings.imgurl+'/ico_help.png" width="12" height="12" alt="Trợ giúp thêm" /></a></p><p>* Soạn tin <strong class="spec">123M</strong> gửi <strong class="spec">8001/8501/8701</strong> để nhận mã OTP kích hoạt tin đăng <a href="#"><img src="'+Settings.imgurl+'/ico_help.png" width="12" height="12" alt="Trợ giúp thêm" /></a></p><p>* Soạn tin <strong class="spec">123M</strong> gửi <strong class="spec">8001/8501/8701</strong> để nhận mã OTP kích hoạt tin đăng <a href="#"><img src="'+Settings.imgurl+'/ico_help.png" width="12" height="12" alt="Trợ giúp thêm" /></a></p><p>* Soạn tin <strong class="spec">123M</strong> gửi <strong class="spec">8001/8501/8701</strong> để nhận mã OTP kích hoạt tin đăng <a href="#"><img src="'+Settings.imgurl+'/ico_help.png" width="12" height="12" alt="Trợ giúp thêm" /></a></p><p>* Soạn tin <strong class="spec">123M</strong> gửi <strong class="spec">8001/8501/8701</strong> để nhận mã OTP kích hoạt tin đăng <a href="#"><img src="'+Settings.imgurl+'/ico_help.png" width="12" height="12" alt="Trợ giúp thêm" /></a></p></div></div><div class="footer-popup"><div class="btn-default" style="width:100px"><input class="btn-cancel close" name="" type="button" value="Đóng lại" /></div></div></div>';
		this.boxy = new Boxy(html, {modal:true, unloadOnHide: true});
	},
	sendComplain:function()
	{
		var str_checked = "";
		var charSplit = "_reasonC_";
		
		for(var i = 1; i <= post.totalReason; i++)
		{		
			if(document.getElementById("reason"+i).checked == true)
			{			
				str_checked += (str_checked?charSplit:"")+document.getElementById("reason"+i).value;					
			}			
		}	
	
		var rpo = document.getElementById("reason_other").value;
		var email = document.getElementById("email_contact").value;
		var mobile = document.getElementById("mobile_contact").value;
	    /*var captcha = document.getElementById("captcha").value;
		
		if(!Account.UID)
		{
		  
		   if(captcha=="")
		   {
			   jQuery("#notifyError").show();
			   jQuery("#notifyError").html("<span style='color:red'>Bạn chưa nhập mã bảo mật!</span>");
			   return;
		   }
		}
		else captcha = "";*/
	   
		if(email && !common.is_email(email))
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
				data: {'msg':str_checked,'email':email,'mobile':mobile,post_id :POST_ID},
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
								type:'success',
								message: data.msg
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
	deletePost : function(obj, Id)
	{
		$(this).myBoxy (Boxy,{
			type: 'confirm',
			message: 'Bạn có chắc chắn muốn xóa tin đăng này?',
			Id : Id,
			callback: function() 
			{
				var boxy = Boxy.get(this);			
				boxy.hide();		
				if (!Id)
				{
					return;
				}				
				$(this).myBoxy (Boxy,{
					title: 'Đang xử lý',
					type: 'loading',
					message: '<img src="'+Settings.imgurl+'/zoomloader.gif" alt="Đang thực hiện" style="margin-bottom:5px;margin-left:10px;" />'
				});
				
				$.ajax({
					type: "POST",
					url: Settings.baseurl + '/post/delete-post',
					data:{id:Id},
					success: function(data)
					{              
						var boxy = Boxy.get($(".popup"));
						boxy.hide();
						if(data==1)
						{
							$(this).myBoxy (Boxy,{
								type: 'success',
								message: 'Thao tác thành công.'
							});                               
							obj.parent().parent().parent().remove();
						}
						else if(data == "-1")
						{
							$(this).myBoxy (Boxy,{
								type:'alert',
								message: 'Tin đang được đăng ký UP tự động bởi hệ thống. Vui lòng hủy đăng ký ở phần "UP tự động" trước khi xóa tin này'
							});
						}
						else
						{
							$(this).myBoxy (Boxy,{
								type:'alert',
								message: 'Thao tác thất bại. Bạn vui lòng thử lại sau.'
							});
						}
					}
				});
			}
		});
	},
	upPost:function(id, type)
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
					if(type == 1)
					{
						var up_quantity = $('.up_quantity').html();
						post.updateUp(up_quantity, 1);
						post.upSuccess();
						$('.check').removeAttr('checked');
					}else{
						post.upSuccessNoAuto();
					}
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
	upSuccess : function()
	{
		new Boxy('<div class="popup" style="width:400px;margin:0 auto"><div class="title-popup">Thông báo từ Raovat.123Mua.vn<a title="Đóng lại" class="btn-close close"><img src="'+ Settings.imgurl +'/boxy/close_boxy.png" width="18" height="17" alt="Đóng lại" /></a></div><div class="content-popup"><div class="bar-notice notice-sucess"><span class="ico"></span>Bạn đã UP sản phẩm thành công!</div><div class="clear"></div></div><div class="footer-popup"><div class="btn-default" style="width:218px"><input class="btn-accept" name="" type="button" value="Cài đặt Up tự động" onclick="service.registerAutoup(); Boxy.get(this).hide();" /><input class="btn-cancel close" name="" type="button" value="Đóng lại" onclick="Boxy.get(this).hide();"/></div></div></div>',{modal : true , unloadOnHide: true});
	},
	upSuccessNoAuto : function()
	{
		new Boxy('<div class="popup" style="width:400px;margin:0 auto"><div class="title-popup">Thông báo từ Raovat.123Mua.vn<a title="Đóng lại" class="btn-close close"><img src="'+ Settings.imgurl +'/boxy/close_boxy.png" width="18" height="17" alt="Đóng lại" /></a></div><div class="content-popup"><div class="bar-notice notice-sucess"><span class="ico"></span>Bạn đã UP sản phẩm thành công!</div><div class="clear"></div></div><div class="footer-popup"><div class="btn-default" style="width:218px"><input style="margin-left:75px" class="btn-cancel close" name="" type="button" value="Đóng lại" onclick="Boxy.get(this).hide();"/></div></div></div>',{modal : true , unloadOnHide: true});
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
				obj.attr('title','Loại bỏ khỏi danh sách đã lưu');
				obj.removeClass('save_post').addClass('remove_post');
				obj.html('');
				obj.html('Hủy lưu');
			}
		});
	},
	removeSavePost : function(obj, Id)
	{
		$(this).myBoxy (Boxy,{
			type: 'confirm',
			message: 'Bạn có chắc chắn muốn loại tin này khỏi danh sách tin đã lưu?',
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
								type: 'success',
								message: data.msg
							});             
							if(post.pageType != "detail")
							{
								obj.parent().parent().parent().remove();
							}else{
								obj.attr('title','Lưu lại tin này');
								obj.removeClass('remove_post').addClass('save_post');
								obj.html('');
								obj.html('Lưu lại tin');
							}
							$('.sum-saved-item strong').html(parseInt($('.sum-saved-item strong').html())-1);
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
	showMaps: function () 
	{
		GMap.getLatLng("182 Lê Đại Hành, Q10, Tp Hồ Chí Minh");
    },
	showAddress : function() 
	{		
	   	var address = document.getElementById('search_address').value;	 
	   	if(address == "")
		{
			$(this).myBoxy (Boxy,{
				type: 'alert',			
				message: 'Bạn chưa nhập từ khóa tìm kiếm.'
			});
			return false;
		}
	   	GMap.search(address);    
	   	google.maps.event.addListener(google_map, 'click', function(event) 
	 	{
	 	    var point = event.latLng;
			$('#latitude').val(point.lat().toFixed(5));
			$('#longitude').val(point.lng().toFixed(5));
	 	    GMap.placeMarker(point);    			
	 	});   
		$('#latitude').val(GMap.options.latitude);
		$('#longitude').val(GMap.options.longitude);
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
	}
};
$(function()
{
	//delete post
	$(".delete_post").live('click', function()
	{
		var postId = $(this).attr('rel');
		post.deletePost($(this), postId);
	});
	
	//up post
	$('.up_post').live('click', function ()
	{
		var id = $(this).attr('rel');
		post.upPost(id, 1);
	});
	//up post no auto
	$('.up_post_no_auto').live('click', function ()
	{
		var id = $(this).attr('rel');
		post.upPost(id, 2);
	});
	//remove save post
	$("a.remove_save_post").click(function()
	{
		var postId = $(this).attr('rel');
		post.removeSavePost($(this), postId);
	});	
	$( "#search_address" ).live('keypress', function (e) 
	{
		address = document.getElementById('search_address').value;
		if(e.keyCode == 13)
		{
			if(address == "")
			{
				$(this).myBoxy (Boxy,{
					type: 'alert',
					message: 'Bạn chưa nhập từ khóa tìm kiếm.'
				});
				return false;
			}
			post.showAddress();
	 	}
	});
	$( "#btn_search" ).live('click', function (e) 
	{
		address = document.getElementById('search_address').value;		
		if(address == "")
		{
			$(this).myBoxy (Boxy,{
				type: 'alert',
				message: 'Bạn chưa nhập từ khóa tìm kiếm.'
			});
			return false;
		}
		post.showAddress();
	});
	$('.refresh').click(function(){
		$(this).addClass('loading-captcha');
		$.ajax({
			type: "POST",
			url: Settings.baseurl + '/ajax/reloadcaptcha',
			dataType:'json',
			success: function(data)
			{                        
				$('#captcha_image').attr('src', data.image);
				$('#cid').val(data.cid);
				$('.refresh').removeClass('loading-captcha');
			}
		});
	});
	if(post.pageType == "create" || post.pageType == "edit")
	{
		if(jQuery.inArray(parseInt(post.categoryId),post.arrayCategoryMap) > -1) 
		{
			var mapOptions = {
    			elementId: 'map_canvas',
    			src: 'http://maps.googleapis.com/maps/api/js?libraries=places&sensor=false',
    			address: '182 Lê Đại Hành, Q10, Tp Hồ Chí Minh',
    			marker: {img: Settings.imgurl+ '/shop.png'},
    			shopInfo: '',
    			afterScriptLoaded: 'GMap.showMaps'
			};
			GMap.initLoader(mapOptions); 
		}
	}
	$('.save_post').live('click', function()
	{
		if(Account.UNAME == '')
		{
			login.popup_login();
			return false;
		}
		post.savePost($(this), POST_ID);
	});
	//remove save post
	$(".remove_post").live('click', function()
	{
		if(Account.UNAME == '')
		{
			login.popup_login();
			return false;
		}
		post.removeSavePost($(this), POST_ID);
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
	$("#hide_post_user").live('click', function()
	{
		if(Account.UNAME == '')
		{
			login.popup_login();
			return false;
		}
		post.hidePost($(this), POST_ID);
	});
	
	$('#user_complain').live('click', function()
	{
		post.overlayComplain();
	});
	$('#btn_accept').live('click', function(){
		post.sendComplain();
	});
	$('#send_msg').live('click', function()
	{	
		Message.options = {
			receiver : post.userId,
			userName : post.userName,
			email	 : post.email,
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
    			longitude: parseFloat(post.longitude),
    			latitude: parseFloat(post.latitude),
    			address: "",
    			marker: {img: Settings.imgurl+ '/shop.png'},
    			shopInfo: '',
    			afterScriptLoaded: 'post.viewDirection'
    	};
  		GMap.initLoader(mapOptions); 	 
	});
	$("#login_post_register").live('click', function()
	{
		login.popup_login();
		return false;
	});
	$("#raovat_not_price").click(function(){
		if($(this).attr("checked")){
			post.post_price = $('#post_price').val().replace(/[.]/g, "");
			$("#post_price").val("");
		}
		else{
			$("#post_price").val(common.addDot(post.post_price));
		}
	});
	$('#post_price').live('change', function(){
		$('#raovat_not_price').removeAttr('checked');
	});
	$('.add-more').live('click', function(){
		if(post.showdetail == false){
			$(this).text('Ẩn thông tin mở rộng');
			$('.post-attribute').show();
			post.showdetail = true;
		}else{
			$(this).text('Nhập thông tin mở rộng');
			$('.post-attribute').hide();
			post.showdetail = false;
		}
	});
	$('#save_info').live('click', function(e){
		e.preventDefault(); 
		if (!$(this).data('isClicked')) 
		{
			$('.frmDetail').submit();
		}else
		{
			return;
		}
	});
	$('.syntax_sms').live('click', function()
	{
		post.overlaySyntaxSms();
	});
});