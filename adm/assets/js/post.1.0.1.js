var post = 
{
	ID:0,
	type_service:0,
	overlayService:function()
	{
		var html = '<div class="popup" style="width:450px;margin:0 auto"><div class="title-popup">Đăng ký dịch vụ cho tin này<a title="Đóng lại" class="btn-close"><img src="'+imgurl+'/boxy/close_boxy.png" width="18" height="17" alt="Đóng lại" /></a></div><div class="content-popup"><div class="vip-buying"><div class="notice" style="display:none"></div><div class="info-details detail-service" style="display:none"></div><p class="row-info pad10 clearfix"><label for="title">Loại dịch vụ:</label><input class="type_service" name="type_service" type="radio" value="1" id="type_service_1" style="float:left"><label for="type_service_1" style="width:59px;margin-right:7px">Tin in đậm</label><input class="type_service" name="type_service" type="radio" value="2" id="type_service_2" style="float:left"><label for="type_service_2" style="width:58px;margin-right:7px">Tin nổi bật</label><input class="type_service" name="type_service" type="radio" value="4" id="type_service_4" style="float:left"><label for="type_service_4" style="width:40px">Tin VIP</label></p><p class="row-info clearfix"><label for="title">Icon kèm theo:</label><input class="type_icon" name="type_icon" type="radio" value="0" id="type_icon_0" style="float:left" checked><label for="type_icon_0" style="width:82px;margin-right:7px;line-height: 22px;">Không có icon</label><input class="type_icon" name="type_icon" type="radio" value="5" id="type_icon_5" style="float:left"><label for="type_icon_5" style="width:55px;margin-right:7px;line-height: 22px;">Icon New</label><input class="type_icon" name="type_icon" type="radio" value="6" id="type_icon_6" style="float:left"><label for="type_icon_6" style="width:52px;margin-right:7px;line-height: 22px;">Icon Hot</label></p><p class="row-info pad10 clearfix"><label for="title">ID tin:</label><input class="input-vb post_register" name="title" type="text" value="'+post.ID+'"></p><p class="row-info calendar clearfix"><label for="title">Ngày hiển thị:</label><input class="input-vb display_date" name="title" type="text" value=""></p><p class="row-info calendar clearfix"><label for="title">Ngày kết thúc:</label><input class="input-vb end_date" name="title" type="text" value=""></p><p class="row-info calendar clearfix"><label for="title">Thời gian hiển thị:</label> <span class="from_to" style="display:none;line-height:20px;font-weight:bold"> Từ <span class="from"></span> đến <span class="to"></span></span></p><p class="row-info clearfix"><p class="loading"></p><div class="clear"></div></div><div class="clear"></div></div><div class="footer-popup"><div class="btn-default vb-btn"b style="width:150px"><input class="btn-accept" onclick="post.doReg()" name="" type="button" value="Đăng ký" disabled="disabled"/><input class="btn-accept cancel_register" name="" type="button" value="Hủy bỏ" /></div></div></div>';
		this.boxy = new Boxy(html, {modal:true, unloadOnHide: true});
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
					if(data.error == 2)
					{
						$('.detail-service').show().html(data.msg);
						$('.notice').hide();
						$('.btn-accept').removeAttr('disabled');
					}else if(data.error == 3)
					{
						$('.notice').show().html(data.error_msg);
						$('.detail-service').show().html(data.msg);
						$('.btn-accept').removeAttr('disabled');
					}
					else
					{
						$('.detail-service').show().html(data.msg);
						$('.btn-accept').removeAttr('disabled');
					}
					post.time_display = data.time;
					$('.from_to').show();
					$('.display_date').val(data.display_date);
					$('.end_date').val(data.end_date);
					$('.from').text(post.time_display+" ngày "+data.display_date);
					$('.to').text(post.time_display+" ngày "+data.end_date);
				}
				$('.loading').hide();
			}
		});
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
			data:{id:post.ID, type:post.type_service, number_date:number_date, start_date:post.startDate, end_date:post.endDate, icon:post.type_icon},
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
	$('.type_service').live('click', function(){
		post.type_service = $(this).val();
		$('.loading').show();
		$(".display_date").datepicker({ dateFormat: 'dd-mm-yy' });
		$(".end_date").datepicker({ dateFormat: 'dd-mm-yy' });
		post.checkItem();
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
	$('.type_icon').live('click', function(){
		post.type_icon = $(this).val();
		$('.loading').show();
		$(".display_date").datepicker({ dateFormat: 'dd-mm-yy' });
		$(".end_date").datepicker({ dateFormat: 'dd-mm-yy' });
		post.checkItem();
	});
});