var editor_tiny_url = Settings.jsurl+'/tiny_mce/tiny_mce.js';
var post = 
{
	items : {},
	ic:0,
	checkall:false,
	pageType:"",
	arrayCategoryMap : [49,50,51,52,53,54,55,56,57,58,59,60,61],
	totalReason:6,
	arrayPostId:[],
	showdetail:false,
	rechooseCategory : function()
	{	
		$(this).myBoxy (Boxy,{
			type:'confirm',
			message: "Bạn chắc chắn muốn chọn lại ngành hàng cho tin đăng này?",
			callback: function() { 
				var boxy = Boxy.get(this);				
					boxy.hide();
					window.location = Settings.baseurl+'/dang-rao-vat-buoc-1.html';
			}
		});
	},
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
	changeCity : function(cityId)
	{
		$.get(Settings.baseurl + '/ajax/getdistrict/city_id/'+ cityId, function(data){
			var district = $('#district_id');
			if(district.prop) {
				var options = district.prop('options');
			}
			else {
				var options = district.attr('options');
			}
			
			$('option', district).remove();
			$.each(data, function(val, text) {
				options[options.length] = new Option(text.district_name, val);
			});
			
		}, 'json');
	},
	three:function()
	{			
		$("#selected_cat_name").show(); 
		if($('#threeSelect select :selected').text() != "")
		{
			var name_final = $('#oneSelect select :selected').text() + ' » ' +$('#twoSelect select :selected').text() +' » '+$('#threeSelect select :selected').text();
		}else{
			var name_final = $('#oneSelect select :selected').text() +' » '+$('#twoSelect select :selected').text();
		}
		$("#selected_cat_name #select_name").text(name_final);
		$('#category_id_final').val($('#threeSelect select').val());
		$('#next_step').show().removeAttr('disabled');
	},
	init : function(pageData){
		this.items = pageData;
	},
	g:function(b)
	{
		var d = "";
		for (var c = 0; c < b.length; c++)
			d += '<option value="'+b[c].id+'">'+b[c].name+'</option>';
		return d;
	},
	deleteMultiPost:function(listIds)
	{
		$(this).myBoxy (Boxy,{
			type: 'confirm',
			message: 'Bạn có chắc chắn muốn xóa các tin đăng này?',
			callback: function() 
			{
				var boxy = Boxy.get($(".popup"));
					boxy.hide();
			
				$(this).myBoxy (Boxy,{
					title: 'Đang xử lý',
					type: 'loading',
					message: '<img src="'+Settings.imgurl+'/zoomloader.gif" alt="Đang thực hiện" style="margin-bottom:5px;margin-left:10px;" />'
				});
			
				$.ajax({
					url: Settings.baseurl + '/post/delete-multi-post',
					type: 'GET',
					dataType : 'json',     
					data:{ids:listIds},
					success: function(data)
					{
						var boxy = Boxy.get($(".popup"));
						boxy.hide();	
					
						if(data.error == 1)
						{
							$('.check').removeAttr('checked');
							window.location = window.location.href;
						}
						else if(data.error == 0 || data.error == -1)
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
								message: 'Tin rao đang sử dụng dịch vụ. Bạn vui lòng Hủy dịch vụ trước khi xóa tin này!'
							});
						}
						else if(data == "-2")
						{
							$(this).myBoxy (Boxy,{
								type:'alert',
								message: 'Tin đang được đăng ký UP tự động bởi hệ thống. Vui lòng hủy đăng ký ở phần "UP tự động" trước khi xóa tin này'
							});
						}else if(data == "-3")
						{
							$(this).myBoxy (Boxy,{
								type:'alert',
								message: 'Thông tin không hợp lệ!'
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
	restorePost : function(Id)
	{
		$(this).myBoxy (Boxy,{
			type: 'confirm',
			message: 'Bạn có chắc chắn muốn khôi phục lại tin này?',//'Bạn phải mất 1000 VNĐ cho lần khôi phục này. Bạn chắc chắn muốn khôi phục?',
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
				
				$(this).myBoxy (Boxy,{
					title: 'Đang xử lý',
					type: 'loading',
					message: '<img src="'+Settings.imgurl+'/zoomloader.gif" alt="Đang thực hiện" style="margin-bottom:5px;margin-left:10px;" />'
				});
				
				$.ajax({
					type: "POST",
					url: Settings.baseurl + '/post/undeletecharge',
					data:{id:Id},
					dataType:'json',
					success: function(data)
					{          
						var boxy = Boxy.get($(".popup"));
						boxy.hide();
					
						if(data.status == 1)
						{
							$(this).myBoxy (Boxy,{
								type:'success',
								message: 'Thao tác thành công!',
								afterHide:function(){window.location = window.location.href;}
							});
						}
						else if(data.status == 2)
						{
							$(this).myBoxy (Boxy,{
								type:'error',
								message: 'Bạn không đủ tiền để sử dụng tính năng này!'
							});
						}
						else
						{
							$(this).myBoxy (Boxy,{
								type:'error',
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
		
		var up_quantity = $('.up_quantity').html();
		
		if(up_quantity < 1)
		{
			$(this).myBoxy (Boxy,{
				type:'alert',
				message: 'Bạn đã sử dụng hết lượt Up.Vui lòng mua lượt up để sử dụng.'
			});
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
	updateUp:function(quantity, number)
	{
		if(quantity != null){
			quantity = quantity.replace(/[.]/g, "");
			$('.up_quantity').html(common.addDot(quantity - number));
		}
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
	$('input.auto_numberic').autoNumeric();
	$("#city_id").change(function()
	{
		post.changeCity($(this).val());
	});
	if(post.pageType == "create" || post.pageType == "edit")
	{
		$('textarea.box_html').tinymce({
			/*General options*/
			script_url  : editor_tiny_url,
			language 	: "vi",
			theme 		: "muaadvanced",
			skin		: 'mua123',  
			plugins 	: "paste,preview,fullscreen,lists,inlinepopups",
			width: "100%",
			height: "400",
			/*Theme options*/
			theme_advanced_buttons1 : "code,preview,bold,italic,underline,forecolor,backcolor,|,fontselect,fontsizeselect,|,image_custom,|,outdent,indent,|,undo,redo,|,justifyleft,justifycenter,justifyright,justifyfull,|,link,unlink, fullscreen",
			theme_advanced_buttons2 : "",
			theme_advanced_buttons3 : "",
			theme_advanced_toolbar_location : "top",
			theme_advanced_toolbar_align : "left",
			theme_advanced_statusbar_location : "bottom",
			paste_auto_cleanup_on_paste : false,
			//paste
			convert_fonts_to_spans : true,
			paste_retain_style_properties:'font,font-family,font-style,color,background,width,height',
			forced_root_block : false,
			force_br_newlines : true,
			force_p_newlines : false,
			theme_advanced_resize_horizontal : false,
			theme_advanced_resizing_max_width : 700,
			theme_advanced_resizing_min_width : 700,
			theme_advanced_resizing_min_height : 500,
			theme_advanced_path : false,
			theme_advanced_fonts:"Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Calibri=Calibri,zapf dingbats;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats",
			theme_advanced_font_sizes: "10=10px;12=12px;14=14px;16=16px;18=18px;24=24px;32=32px;48=48px",
			theme_advanced_default_font:'Arial',
			theme_advanced_default_fontsize:'12',				
			entity_encoding : "raw",
			setup : function(ed) {
				ed.addButton('image_custom', {
					title : 'Đăng ảnh',
					image : Settings.imgurl+'/mce_danganh.jpg',
					onclick : ImageUpload.showPopup
				});
			}
		});	
		
		var ImageUpload = {
			boxy: undefined,
			textareaid: ''
		};

		ImageUpload.showPopup = function()
		{			
			var html = '<div class="popup" style="width:400px;margin:0 auto">' +
			'<div class="title-popup">Chèn ảnh' +
			'<a class="btn-close close"><img src="'+ Settings.imgurl +'/boxy/close_boxy.png" width="18" height="17" alt="Đóng lại" /></a>' +
			'</div>' +
			'<ul class="tab-upload-image clearfix">' +
			'<li><a tab-id="1" class="mtab selected">Upload mới</a></li>' +
			'<li><a tab-id="2" class="mtab">Chèn URL</a></li>' +
			'</ul>' +
			'<form style="clear:both;"><div class="wrap-upload-image">' +
			'<div id="up1" class="row-up"><label class="label-up">Chọn hình ảnh</label>' +
			'<div id="tinyMceUploadImage"></div>' +
			'</div>' +
			'<div id="up2" style="display:none" class="row-up"><label class="label-up">Nhập liên kết</label>' +
			'<input type="text" id="tinyMceUrlImage" class="field">' +
			'</div></div><div class="clear"></div>' +
			'</form>' +
			'<div class="footer-popup">' +
			'<div class="btn-default btn-double"><input class="btn-accept" type="button" value="Đồng ý" style="display:none"/><input class="btn-cancel close" name="" type="button" value="Hủy bỏ" /></div>' +
			'</div>' +
			'</div>';

			ImageUpload.boxy = new Boxy(html, {
				modal: true,
				unloadOnHide:true,
				afterShow: function()
				{
					$(".mtab").live('click', function()
					{		
						$('.mtab').removeClass('selected');
						$(this).addClass('selected');
						var tabid = $(this).attr('tab-id');						
						if(tabid == 2)
						{
							$('.boxy-wrapper input.btn-accept').show();
							$('#up1').hide();
							$('#up2').show();
						}
						else
						{
							$('.boxy-wrapper input.btn-accept').hide();
							$('#up2').hide();
							$('#up1').show();
						}
					})
					
					$('#tinyMceUploadImage').photoUpload(
					{
						prefix: 'quick_',
						maxNumID: 1,
						time: time,
						ajaxFile: urlUpload,
						file_types: "jpg,gif,png",
						callback: ImageUpload.callback,
						seckey: seckey
					});
					
					$(".boxy-wrapper .btn-accept").click(function(){
						var photoSrc = $('.boxy-wrapper #tinyMceUrlImage').val().trim();
						if (photoSrc)
						{					
							if(ImageUpload.textareaid != '')
								$('textarea#'+ImageUpload.textareaid).tinymce().execCommand('mceInsertContent',false, '<img style="display:block;margin-left: auto; margin-right: auto" src="'+ photoSrc  +'" />');
							else
								$('textarea.box_html').tinymce().execCommand('mceInsertContent',false, '<img style="display:block;margin-left: auto; margin-right: auto; max-width:700px" src="'+ photoSrc  +'"/>');
						}
						Boxy.get($(".popup")).hide();
					});
				}
			});		
		};

		ImageUpload.callback = function(resp)
		{
			switch(resp.error_code){
				case 0:
					currentID++;
					var photoSrc = resp.data.photo_src;			
					if(ImageUpload.textareaid != '')
						$('textarea#'+ImageUpload.textareaid).tinymce().execCommand('mceInsertContent',false, '<img src="'+ photoSrc  +'" />');
					else
						$('textarea.box_html').tinymce().execCommand('mceInsertContent',false, '<img style="display:block;margin-left: auto; margin-right: auto; max-width:700px" src="'+ photoSrc  +'" />');
					if(Boxy.get($(".popup")) != null)
					{
						Boxy.get($(".popup")).hide();
					}
					break;
			}
		};
	}
	var validator = $("#frmPost").validate({
		errorElement: "em",
		ignore: "",
		rules: {
			title: {required :true, minlength : 10, maxlength : 160},
			phone: {required :true, maxlength:12},
			email: {required:true, email:true},
			description:{required:true, minlength:150},
			city_id:{required:true},
			district_id:{required:true},
			need_id:{required:true}
		},
		messages: {
			title: {required:"Bạn chưa nhập tiêu đề cho tin đăng", minlength: "Tiêu đề tin tối thiểu 10 ký tự", maxlength : "Tiêu đề tin tối đa 160 ký tự"},
			phone: {required:"Bạn chưa nhập số điện thoại", maxlength : "Số điện thoại tối đa 12 ký tự"},
			email:{required:"Bạn chưa nhập địa chỉ Email", email:'Email không đúng định dạng'},
			description:{required:"Bạn chưa nhập nội dung của tin đăng", minlength:"Nội dung tin đăng tối thiểu 150 ký tự"},
			city_id:{required:"Bạn chưa chọn nơi rao cho tin đăng"},
			district_id:{required:"Bạn chưa chọn quận/huyện cho tin đăng"},
			need_id:{required:"Bạn chưa chọn nhu cầu cho tin đăng"}
		},
		errorPlacement: function(error, element) 
		{
			error.appendTo(element.parent().next().show());
		},
		success: function(em) 
		{
			em.html('').addClass("valid");       
        },
        submitHandler: function(form) 
        {
        	form.submit();
        }
	});
	$("#submit").click(function(e)
	{
		e.preventDefault(); 
		if (!$(this).data('isClicked')) 
		{
			$("#description").val($('#post_content').html());	
			$('#frmPost').submit(); 
		}
		else
		{
			return;
		}
	});
	$(".allow_custom_info").live('change', function(){
		var obj = $(this);
		if($(this).val() == "11111111")
		{
			$("input.custom_info", obj.parent().next()).show();
		}
		else
		{
			$("input.custom_info", obj.parent().next()).hide();
		}
	});
	$("#title").mouseenter(function() { 
		$(this).parent().next().show();
	}).mouseleave(function() { 
		$(this).parent().next().hide();
	});
	$(".frm-category").mouseover(function() {
		$('.frm-note-box').show();
	}).mouseout(function() {
		$('.frm-note-box').hide();
	});
	$("#phone").mouseover(function() {
		$('.frm-note-box', $(this).parent().next()).show();
	}).mouseout(function() {
		$('.frm-note-box', $(this).parent().next()).hide();
	});
	$("#email").mouseover(function() {
		$('.frm-note-box', $(this).parent().next()).show();
	}).mouseout(function() {
		$('.frm-note-box', $(this).parent().next()).hide();
	});
	$("#oneSelect").live("change", function()
	{
		var value = $('.oneSelect').val();
		$("#plus_two").hide();
		$("#twoSelect select").html('');
		$("#selected_cat_name #select_name").text('');
		$("#selected_cat_name").hide();
		$("#twoSelect").show();
		$("#twoSelect select").append($('#select'+value).html()).show();
		$("#plus_one").show();
		$("#threeSelect").hide();
		$('#next_step').hide().attr('disabled', 'disabled');
	});
	$("#twoSelect").live("change", function()
	{	
		$("#threeSelect select").html('');
		var lastcat = $("option[value="+$(".twoSelect").val()+"]").attr('class');
		var lastcat_title = $("option[value="+$(".twoSelect").val()+"]").attr('title');			
		if(lastcat == 'lastcat')
		{
			$("#plus_two").hide();
			$("#selected_cat_name #select_name").text('');
			$("#selected_cat_name").show();
			$("#threeSelect select").html('').hide();
			$("#selected_cat_name #select_name").text(lastcat_title);
			$('.category_id').val($('.twoSelect').val());
			$('#next_step').show().removeAttr('disabled');
		}else{
			$("#plus_two").show();
			$("#threeSelect").show();
			$("#threeSelect select").show();
			$("#threeSelect select").append($('#select' + $(".twoSelect").val()).html());
			$("#selected_cat_name").hide();
			$("#selected_cat_name #full_name").text('');
			$("#next_step").hide();
		}
	});
	$("#threeSelect").live("change", function()
	{	
		if(post.pageType =='edit')
			return false;
		post.three($(".threeSelect").val());
		$('.category_id').val($(".threeSelect").val());
	});
	$('a.active_pic').live('click',function()
	{
		$('.pic-focus').removeClass('pic-focus');
		var main = $(this).attr("rel");
		$(this).parent().addClass('pic-focus');
		$("#avatar_post").val(main);
	});
	$('a.add-pic').live('click',function()
	{
		var photo_src = $(this).attr("rel");
		var insertTemplate = '';     
		insertTemplate = '<br/><p data-src="marker'+ getFilename(photo_src) +'" style="text-align:center"><img style="display:block;margin-left: auto; margin-right: auto" src="'+ photo_src +'" /></p><br/>';	
		var editor = tinymce.get('post_content');
		$(editor.getBody()).append(insertTemplate);
	});
	$('a.remove-pic').live('click',function()
	{
		submitID--;
		var editor = tinymce.get('post_content'); console.log($(this).prev().attr('rel'));
		$(editor.getBody()).find("[data-src='marker"+getFilename($(this).prev().attr('rel'))+"']").remove();
		$(this).parent().remove();
		if($(this).prev().attr('rel') == $('#avatar_post').val())   
		{
			$('#avatar_post').val('');
		}
	});
	$('#checkAll').click(function(){
		if(post.checkall == false){
			$(this).text('Bỏ chọn tất cả');
			post.checkall = true;
		}else{
			$(this).text('Chọn tất cả');
			post.checkall = false;
		}
		$(".check").each(function() 
		{
			$(this).attr("checked", post.checkall);
		})
	});
	//delete multi post
	$('#delete_multi').live('click', function()
	{
		var arrayIds = [];
		$(".check").each( function() 
		{
			var status = $(this).is(':checked');
			if(status == true)
			{
				arrayIds.push($(this).val());
			}
		});
		if(arrayIds.length == 0)
		{
			$(this).myBoxy (Boxy,{
				type:'alert',
				message: 'Bạn chưa chọn tin để xóa.'
			});
			return false;
		}
		if(arrayIds.length > 10)
		{
			$(this).myBoxy (Boxy,{
				type:'alert',
				message: 'Bạn chỉ được chọn tối đa 10 tin để xóa.'
			});
			return false;
		}
		post.deleteMultiPost(arrayIds);	
	});
	//delete post
	$("#dataTable .delete_post").live('click', function()
	{
		var postId = $(this).attr('rel');
		post.deletePost($(this), postId);
	});
	//restore post
	$(".restore_post").live('click', function()
	{
		var postId = $(this).attr('rel');
		post.restorePost(postId);
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
		if(Account.UNAME == '')
		{
			login.popup_login();
			return false;
		}
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