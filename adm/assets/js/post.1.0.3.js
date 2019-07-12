var post = 
{
	ID:0,
	type_post:[],
	type_zone:[],
	overlayService:function()
	{
		var html = '<div class="popup" style="width:536px;margin:0 auto"><div class="title-popup">Mua dịch vụ tin Rao Vặt<a title="Đóng lại" class="btn-close"><img src="'+imgurl+'/boxy/close_boxy.png" width="18" height="17" alt="Đóng lại" /></a></div><div class="content-popup"><div class="loading" style="display:none"><span></span>Đang tải...</div><div class="vip-buying"><div class="notice" style="display:none"></div><div class="info-details detail-service" style="display:none"></div><div class="service-box"><div class="service-box-inside"><div class="row-service"><span class="labelpopup helps">Loại tin:<a class="tips-helps" href="#" rel="Loại tin được hiển thị trên raovat 123mua"><img class="img" src="'+imgurl+'/icon_help.png" width="16" height="16" alt="Tìm hiểu thêm"></a></span><div class="row-inside"><span class="obj"><input id="n1" class="type_post" name="type_post" type="checkbox" value="1" style="margin-right:4px"><label for="n1">Tin in đậm</label></span><span class="obj"><input id="n2" class="type_post" name="type_post" type="checkbox" value="2" style="margin-right:4px"><label for="n2">Dán nhãn sao</label></span></div></div><div class="row-service"><span class="labelpopup helps">Khu vực hiển thị:<a class="tips-helps" href="#" rel="Khu vực hiển thị trên trang raovat"><img class="img" src="'+imgurl+'/icon_help.png" width="16" height="16" alt="Tìm hiểu thêm"></a></span><div class="row-inside"><span class="obj"><input id="n3" class="type_zone" name="type_zone" type="checkbox" value="3" style="margin-right:4px"><label for="n3">Nổi bật</label></span><span class="obj"><input id="n4" class="type_zone" name="type_zone" type="checkbox" value="4" style="margin-right:4px"><label for="n4">Vip</label></span><span class="obj"><input id="n5" class="type_zone" name="type_zone" type="checkbox" value="5" style="margin-right:4px"><label for="n5">Đặc biệt</label></span></div></div><div class="row-service"><span class="labelpopup">ID tin:</span><div class="row-inside"><input class="post_id" name="post_id" type="text"></div></div><div class="row-service"><span class="labelpopup">Thời gian:</span><div class="row-inside"><span class="obj calendar"><input class="input-date display_date" name="" value="Ngày bắt đầu" type="text" style="background-color:#D7D7D7" disabled></span><span class="obj calendar"><input class="input-date end_date" name="" type="text" value="Ngày kết thúc"></span></div></div><div class="row-service"><span class="labelpopup">Số ngày đăng ký:</span><div class="row-inside"><span class="obj"><strong><span class="number-date">1</span> ngày</strong></span></div></div><div class="row-service"><span class="labelpopup">Thời gian hiển thị:</span><div class="row-inside"><span class="obj from_date"></span></div></div><div class="row-service price_service_type" style="display:none"><span class="labelpopup">Giá từng loại dịch vụ:</span><div class="row-inside price_service_type"></div></div><div class="row-service row-service-end"><div class="row-inside"></div><a href="javascript:void(0)" class="btn-yes" onclick="post.doReg()">Đồng ý</a><a href="javascript:void(0)" class="btn-no">Bỏ qua</a></div></div></div></div><div class="clear"></div></div></div>';
		this.boxy = new Boxy(html, {modal:true, unloadOnHide: true});
		$('.post_id').val(post.ID);
	},
	checkItem:function()
	{
		$.ajax({
			type: "POST",
			url: baseurl + '/adm/ajax/check-item',
			data:{id:post.ID, type:post.type_service,icon:post.type_icon},
			dataType:'json',
			success: function(data)
			{                  
				if(data.error == 1)
				{
					$('.notice').show().html(data.error_msg);
					$('.detail-service').hide();
				}else
				{
					post.error = 0;
					$('.notice').hide();
					$('.detail-service').show().html(data.msg);
					$('.btn-accept').removeAttr('disabled');
					$('.number-date').html(1);
					post.price_service = data.price_service;
					post.time_display = data.time;
					$('.display_date').val(data.display_date);
					$('.end_date').val(data.end_date);
					$('.from_date').html("Từ <strong> "+post.time_display+" ngày "+data.display_date+" </strong> đến <strong><span class='to'>"+post.time_display+" ngày "+data.end_date+" </span></strong>");
					$('.total_price').html(common.addDot(post.price_service));
					if(data.error_msg != ""){
						$('.price_service_type').show();
						$('.price_service_type .row-inside').html(data.error_msg);
					}
				}
				$('.loading').hide();
			}
		});
	},
	toggleChecked : function(status) 
	{
		$(".checkboxes").each( function() 
		{
			$(this).attr("checked", status);
			if(status == true){
				$(this).parent().addClass('checked');
				$('.multi-function').show();
			}
			else{
				$(this).parent().removeClass('checked');
				$('.multi-function').hide();
			}
		});
	},
	removeAllCheck : function()
	{
		$('#check-all').attr('checked', false);
		$(".checkboxes").each( function() 
		{
			$(this).attr("checked", false);
		})
	},
	checkAll:function()
	{
		$(".checkboxes").each( function() 
		{
			$(this).parent().addClass('checked');
			$(this).attr("checked", true);
		})
	},
	doReg:function()
	{
		post.startDate = post.time_display+" "+ $('.display_date').val();
		post.endDate = post.time_display+" "+ $('.end_date').val();
		
		var number_date = $('.number_date').val();
		$('p.loading').show();
		$.ajax({
			type: "POST",
			url: baseurl + '/adm/ajax/register-service',
			data:{id:post.ID, type_post:post.type_post, number_date:number_date, start_date:post.startDate, end_date:post.endDate, type_zone:post.type_zone},
			dataType:'json',
			success: function(data)
			{   
				var boxy = Boxy.get($(".popup"));
				boxy.hide();
				if(data.error == 0)
				{
					$(this).myBoxy (Boxy,{
						type: 'success',
						message: 'Bạn đã đăng ký dịch vụ thành công.'
					});    
				}
				else
				{
					$(this).myBoxy (Boxy,{
						type:'alert',
						message: data.error_msg
					});
				}
				$('p.loading').hide();
				post.type_icon = 0;
			}
		});
	},
	registerMultiPost: function()
	{
		var arrayIds = [];
		$(".checkboxes").each( function() 
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
				message: 'Bạn chưa chọn tin đăng nào!'
			});
			return false;
		}else
		{
			window.location = baseurl+'/adm/service/register-multi-post?ids='+arrayIds.join(',');
		}
	}
}

$(function(){
	$('a.approve_post').click(function (){			
		var Id = $(this).attr('rel');
		if (!Id)
		{
			return;
		}
		$.getJSON(baseurl+'/adm/post/postapprove', {
			id: Id
		}, function(data){
			if (data.status == 1)
			{		
				$(this).myBoxy (Boxy,{
					type: 'success',
					message: 'Sản phẩm bạn chọn đã được duyệt thành công!',
					refresh:true
				});                    
			}
			else
			{
				$(this).myBoxy (Boxy,{
					type: 'alert',
					message: 'Có lỗi khi duyệt sản phẩm!'
				});
			}
		});
	});
	$('a.register_service').click(function (){
		post.ID = $(this).attr('rel');
		post.overlayService();
	});
	$('a.btn-close').live('click', function(){
		var boxy = Boxy.get($(".popup"));
			boxy.hide();
	});
	$('.cancel_register').live('click', function(){
		var boxy = Boxy.get($(".popup"));
			boxy.hide();
	});
	$('.post_register').live('change', function(){
		post.ID = $(this).val();
		post.checkItem(post.type_service);
	});
	$('.end_date').live('change', function(){
		post.startDate = common.strtotime($('.display_date').val());
		post.endDate = common.strtotime($(this).val());
		if(post.startDate > post.endDate){
			$('.notice').show().html('Ngày tháng bạn chọn không hợp lệ!');
			return false;
		}else{
			$('.notice').hide();
		}
		var numberDate = ((post.endDate-post.startDate)/86400);
		if(post.type_icon != 0)
			$('.price_total').html(common.addDot((post.price_service*numberDate)));
		else
			$('.price_total').html(common.addDot(post.price_service*numberDate));
		$('.to').html(post.time_display+" ngày "+$(this).val());
	});
	$('.display_date').live('change', function()
	{
		post.startDate = common.strtotime($(this).val());
		post.endDate = common.strtotime($('.end_date').val());
		if(post.startDate > post.endDate){
			$('.notice').show().html('Ngày tháng bạn chọn không hợp lệ!');
			return false;
		}else{
			$('.notice').hide();
		}
		$('.number_date').val(((post.endDate-post.startDate)/86400)+1);
	});
	$('.register-service-multi').live('click', function(){
		post.registerMultiPost();
	});
	$('.remove-register').live('click', function(){
		var obj = $(this);
		
		$(obj).parent().parent().fadeOut('slow', function(){
			$(this).remove();
		});
		post.total--;
		if(post.total == 0)
		{
			window.location = baseurl+"/adm/post";
		}		
	});
	$('.type_post').live('click', function()
	{
		post.type_post = [];
		$(".type_post").each( function() 
		{
			if($(this).is(':checked') == true)
			{
				post.type_post.push($(this).val());
			}
		});
		$(".end_date").datepicker({ dateFormat: 'dd-mm-yy' });
		post.checkItem();
	});
	$('.type_zone').live('click', function()
	{
		post.type_zone = [];
		$(".type_zone").each( function() 
		{
			if($(this).is(':checked') == true)
			{
				post.type_zone.push($(this).val());
			}
		});
		$(".end_date").datepicker({ dateFormat: 'dd-mm-yy' });
		post.checkItem();
	});
	$('.register-multi').click(function()
	{
		$(".type_post_multi").each( function() 
		{
			if($(this).is(':checked') == true)
			{
				post.type_post.push($(this).val());
			}
		});
		$(".type_zone_multi").each( function() 
		{
			if($(this).is(':checked') == true)
			{
				post.type_zone.push($(this).val());
			}
		});
	
		post.startDate = common.strtotime($('.display_date').val());
		post.endDate = common.strtotime($('.end_date').val());
		
		if(post.startDate > post.endDate){
			$('.notice').show().html('Ngày tháng bạn chọn không hợp lệ!');
			return;
		}else{
			$('.notice').hide();
		}
		if(post.type_post.length == 0 && post.type_zone.length == 0){
			$('.notice').show().html('Bạn chưa chọn dịch vụ nào để đăng ký!');
			return;
		}else{
			$('.notice').hide();
		}
		
		post.startDate = post.time_display+" "+$('.display_date').val();
		post.endDate = post.time_display+" "+$('.end_date').val();
		
		post.Ids = [];
		
		$('.checkboxes').each(function()
		{
			var status = $(this).is(':checked');
			if(status == true)
			{
				post.Ids.push($(this).val());
			}
		});
		
		$.ajax({
			type: "POST",
			url: baseurl + '/adm/ajax/register-service-multi',
			data:{ids:post.Ids, type_post:post.type_post, start_date:post.startDate, end_date:post.endDate, type_zone:post.type_zone},
			dataType:'json',
			success: function(data)
			{   
				var boxy = Boxy.get($(".popup"));
				boxy.hide();
				if(data.error == 0)
				{
					$(this).myBoxy (Boxy,{
						type: 'success',
						message: 'Bạn đã đăng ký dịch vụ thành công.'
					});    
				}
				else
				{
					$(this).myBoxy (Boxy,{
						type:'alert',
						message: data.error_msg
					});
				}
				$('p.loading').hide();
				post.type_icon = 0;
			}
		});
	});
	$('.delete-multi').click(function()
	{
		post.Ids = [];
		
		$(this).myBoxy (Boxy,{
			type: 'confirm',
			message: 'Bạn có chắc chắn muốn xóa các tin này?',
			callback: function() 
			{
				$('.checkboxes').each(function()
				{
					var status = $(this).is(':checked');
					if(status == true)
					{
						post.Ids.push($(this).val());
					}
				});
				
				$.ajax({
					type: "POST",
					url: baseurl + '/adm/post/delete-multi',
					data:{ids:post.Ids},
					dataType:'json',
					success: function(data)
					{   
						var boxy = Boxy.get($(".popup"));
						boxy.hide();
						if(data.error == 0)
						{
							$(this).myBoxy (Boxy,{
								type: 'success',
								message: 'Bạn đã xóa thành công.'
							});    
						}
						else
						{
							$(this).myBoxy (Boxy,{
								type:'alert',
								message: data.error_msg
							});
						}
						$('p.loading').hide();
						post.type_icon = 0;
					}
				});
			}
		});
	});
	$('.cancel-register').click(function(){
		window.location = baseurl+'/adm/post';
	});
	$('.btn-no').live('click', function(){
		var boxy = Boxy.get($(".popup"));
			boxy.hide();
	});
});