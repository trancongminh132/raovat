var usercp = {
	checkall:false,
	deleteMessageDetail : function(id)
	{
		var boxy = Boxy.get($('.popup'));
		boxy.hide();
		
		$(this).myBoxy (Boxy,{
			title: 'Đang xử lý',
			type: 'loading',
			message: '<img src="'+Settings.imgurl+'/zoomloader.gif" alt="Đang thực hiện" style="margin-bottom:5px;margin-left:10px;" />'
		});
		
		$.ajax({
			url: Settings.baseurl + '/inbox/delete',
			type: 'POST',     
			data:{ids:id},
			dataType:'json',
			success: function(data) 
			{
				var boxy = Boxy.get($('.popup'));
				boxy.hide();
			
				if(data.error == 0)
				{
					var url = "";
					
					if(currentAction == "sent")
						url = Settings.baseurl+'/usercp/hop-thu-di.html';
					else 
						url = Settings.baseurl+'/usercp/hop-thu-den.html';
					
					$(this).myBoxy (Boxy,{
						type: 'success',
						message: data.message,
						afterHide:function(){window.location=url;}
					});
																	
				}
				else
				{
					$(this).myBoxy (Boxy,{
						type: 'alert',
						message: data.message
					});
				}
		   }
		});	 		           	
	},
	deleteMessage : function(id)
	{
		var boxy = Boxy.get($('.popup'));
		boxy.hide();
		
		$(this).myBoxy (Boxy,{
			title: 'Đang xử lý',
			type: 'loading',
			message: '<img src="'+Settings.imgurl+'/zoomloader.gif" alt="Đang thực hiện" style="margin-bottom:5px;margin-left:10px;" />'
		});
		
		$.ajax({
			url: Settings.baseurl + '/inbox/delete',
			type: 'POST',     
			data:{ids:id},
			dataType:'json',
			success: function(data) 
			{
				var boxy = Boxy.get($('.popup'));
				boxy.hide();
			
				if(data.error == 0)
				{
					$(this).myBoxy (Boxy,{
						type: 'success',
						message: data.message,
						afterHide:function(){window.location = window.location.href;}
					});																	
				}
				else
				{
					$(this).myBoxy (Boxy,{
						type: 'alert',
						message: data.message
					});
				}
		   }
		});	 		           	
	},
	cancelServicePost:function(id)
	{
		$(this).myBoxy (Boxy,{
		    type:'confirm',
		    message: "Bạn chắc chắn muốn hủy dịch vụ cho tin này?",
		    callback: function() 
			{ 
				var boxy = Boxy.get($('.popup'));
				boxy.hide();
				
				$(this).myBoxy (Boxy,{
					title: 'Đang xử lý',
					type: 'loading',
					message: '<img src="'+Settings.imgurl+'/zoomloader.gif" alt="Đang thực hiện" style="margin-bottom:5px;margin-left:10px;" />'
				});
				
				$.ajax({
					url: Settings.baseurl + '/service/cancel-service-post',
					type: 'POST',     
					data:{id:id},
					dataType:'json',
					success: function(data) 
					{
						var boxy = Boxy.get($('.popup'));
						boxy.hide();
					
						if(data.error == 0)
						{
							$(this).myBoxy (Boxy,{
								type: 'success',
								message: 'Thao tác thành công',
								afterHide:function(){window.location = window.location.href;}
							});																	
						}
						else
						{
							$(this).myBoxy (Boxy,{
								type: 'alert',
								message: 'Thao tác thất bại. Bạn vui lòng thử lại sau!'
							});
						}
				   }
				});	 
			}
		});	
	}
};

$(function()
{
	$(".check").removeAttr("checked");
	$('#checkAll').click(function(){
		if(usercp.checkall == false){
			$(this).text('Bỏ chọn tất cả');
			usercp.checkall = true;
		}else{
			$(this).text('Chọn tất cả');
			usercp.checkall = false;
		}
		$(".check").each(function() 
		{
			$(this).attr("checked", usercp.checkall);
		})
	});
	var validator = $("#frmCreate").validate({
		errorElement: "em",
		ignore: "",
		rules: {
			full_name: {required :true,maxlength : 100},
			mobile_number: {required :true, maxlength:12}
		},
		messages: {
			full_name: {required:"Bạn chưa nhập Họ và tên", maxlength : "Họ và tên tối đa 100 ký tự"},
			mobile_number: {required:"Bạn chưa nhập số điện thoại", maxlength : "Số điện thoại tối đa 12 ký tự"}
		},
		errorPlacement: function(error, element) 
		{
			 error.insertAfter(element);
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
	$('.delete_message_detail').click(function()
	{	
		var id = $(this).attr('rel');
		$(this).myBoxy (Boxy,{
			type:'confirm',
			message: "Bạn chắc chắn muốn xóa tin nhắn này?",
			callback: function() 
			{ 
				usercp.deleteMessageDetail(id);
			}
		});	
	});
	$('.delete_message').click(function()
	{	
		var id = $(this).attr('rel');
		$(this).myBoxy (Boxy,{
			type:'confirm',
			message: "Bạn chắc chắn muốn xóa tin nhắn này?",
			callback: function() 
			{ 
				usercp.deleteMessage(id);
			}
		});	
	});
	$('.delete_multi_message').click(function(){
		var Ids = [];
		$(".check").each( function() 
		{
			var status = $(this).is(':checked');
			if(status == true)
			{
				Ids.push($(this).val());
			}
		});
		if( Ids.length == 0 )
		{
			$(this).myBoxy (Boxy,{
				type: 'alert',
				message: 'Bạn chưa chọn tin nhắn nào.'
			});
			return;
		}		
		var string = Ids.join(',');
		$(this).myBoxy (Boxy,{
		    type:'confirm',
		    message: "Bạn chắc chắn muốn xóa các tin nhắn này?",
		    callback: function() 
			{ 
				usercp.deleteMessage(string);
			}
		});	
	});
	$('#reply').click(function()
	{	
		Message.options = {
			msgId	 : MSG_ID,
			titleReply: titleReply,
			sender_id:sender_id
		};
		Message.reply();
	});
	$('#update-info-profile').click(function(e)
	{
		e.preventDefault(); 
		if (!$(this).data('isClicked')) 
		{
			$('#frmCreate').submit(); 
		}
		else
		{
			return;
		}
	});
	$(".title-tip").simpletip({ fixed: false});
	$('.bs-search-btn').click(function(){ 
		$('.frmSearch').submit();
	});
	$('.cancel_post_service').live('click', function(){
		var id = $(this).attr('rel');
		usercp.cancelServicePost(id);
	});
});