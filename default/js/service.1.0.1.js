﻿var service  = 
{
	postVip:4,
	ID:0,
	error:false,
	type_service:0,
	priceIcon:5000,
	type_icon:0,
	overlayService:function()
	{
		$('.type_service').removeAttr('checked');
		$('#type_icon_' + service.type_icon).prop('checked', true);
		if(typeof service.ID == "undefined")
			service.ID = "";
		var html = '<div class="popup" style="width:450px;margin:0 auto"><div class="title-popup">Đăng ký dịch vụ<a title="Đóng lại" class="btn-close"><img src="'+Settings.imgurl+'/boxy/close_boxy.png" width="18" height="17" alt="Đóng lại" /></a></div><div class="content-popup"><div class="vip-buying"><div class="notice" style="display:none"></div><div class="info-details detail-service" style="display:none"></div><p class="row-info pad10 clearfix"><label for="title">Loại dịch vụ:</label><input class="type_service" name="type_service" type="radio" value="1" id="type_service_1" style="float:left"><label for="type_service_1" style="width:59px;margin-right:7px;line-height: 17px;">Tin in đậm</label><input class="type_service" name="type_service" type="radio" value="2" id="type_service_2" style="float:left"><label for="type_service_2" style="width:62px;margin-right:7px;line-height: 17px;">Tin nổi bật</label><input class="type_service" name="type_service" type="radio" value="4" id="type_service_4" style="float:left"><label for="type_service_4" style="width:42px;line-height: 17px;">Tin VIP</label></p><p class="row-info clearfix"><label for="title">Icon kèm theo:</label><input class="type_icon" name="type_icon" type="radio" value="0" id="type_icon_0" style="float:left" checked><label for="type_icon_0" style="width:82px;margin-right:7px;line-height: 17px;">Không có icon</label><input class="type_icon" name="type_icon" type="radio" value="5" id="type_icon_5" style="float:left"><label for="type_icon_5" style="width:55px;margin-right:7px;line-height: 17px;">Icon New</label><input class="type_icon" name="type_icon" type="radio" value="6" id="type_icon_6" style="float:left"><label for="type_icon_6" style="width:52px;margin-right:7px;line-height: 17px;">Icon Hot</label></p><p class="row-info pad10 clearfix"><label for="title">ID tin:</label><input class="input-vb post_register" name="title" type="text" value="'+service.ID+'"></p><p class="row-info calendar clearfix"><label for="title">Ngày hiển thị:</label><input class="input-vb display_date" name="title" type="text" value="" disabled="disabled" style="background-color:grey;color:#fff"></p><p class="row-info calendar clearfix"><label for="title">Ngày kết thúc:</label><input class="input-vb end_date" name="title" type="text" value=""></p><p class="row-info calendar clearfix"><label for="title">Thời gian hiển thị:</label> <span class="from_to" style="display:none;line-height:20px;font-weight:bold"> Từ <span class="from"></span> đến <span class="to"></span></span></p><p class="note">Ghi chú: Bạn có thể chỉnh sửa ngày kết thúc để mua dịch vụ cho tin đăng hiển thị nhiều hơn 1 ngày.</p><p class="loading"></p><div class="clear"></div></div><div class="clear"></div></div><div class="footer-popup"><div class="btn-default vb-btn" style="width:255px"><input class="btn-accept" onclick="service.doReg()" name="" type="button" value="Đăng ký" disabled="disabled"/><input class="btn-accept cancel_register" name="" type="button" value="Hủy bỏ" /><a class="price-refer" target="_blank" href="'+Settings.baseurl+'/chinh-sach-dich-vu.html">Tham khảo giá</a></div></div></div>';
		this.boxy = new Boxy(html, {modal:true, unloadOnHide: true});
		//$('#type_service_' + service.type_service).prop('checked', true);
	},
	updateMoney:function(number)
	{
		var money = $('.price').html();
		money = money.replace(/[.]/g, "");
		$('.price').html(common.addDot(money - number));
	},
	checkItem:function(type)
	{
		$('p.loading').show();
		$.ajax({
			type: "POST",
			url: Settings.baseurl + '/ajax/check-item',
			data:{id:service.ID, type:service.type_service, icon:service.type_icon},
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
					}else if(data.error == 3)
					{
						$('.notice').show().html(data.error_msg);
						$('.detail-service').show().html(data.msg);					
					}
					else
					{
						$('.detail-service').show().html(data.msg);					
					}
					$('.btn-accept').removeAttr('disabled');
					service.price_service = data.price_service;
					service.time_display = data.time;
					$('.from_to').show();
					$('.display_date').val(data.display_date);
					$('.end_date').val(data.end_date);
					$('.from').text(service.time_display+" ngày "+data.display_date);
					$('.to').text(service.time_display+" ngày "+data.end_date);
				}
				$('p.loading').hide();
			}
		});
	},
	doReg:function()
	{
		$(this).myBoxy(Boxy,{
			type: 'confirm',
			message: 'Bạn chắc chắn muốn đăng ký dịch vụ cho tin đăng này?',
			callback: function() 
			{
				var boxy = Boxy.get($(".popup"));
					boxy.hide();
				$('p.loading').show();
				var startDate = service.time_display+" "+$('.display_date').val();
				var endDate = service.time_display+" "+$('.end_date').val();
				$.ajax({
					type: "POST",
					url: Settings.baseurl + '/service/register-service',
					data:{id:service.ID, type:service.type_service, number_date:service.numDate,start_date:startDate,end_date:endDate,icon:service.type_icon},
					dataType:'json',
					success: function(data)
					{   
						var boxy = Boxy.get($(".popup"));
						boxy.hide();
						if(data.error == 0)
						{
							$(this).myBoxy (Boxy,{
								type: 'success',
								message: 'Thao tác thành công.'
							});    
							service.updateMoney(data.price);
						}
						else
						{
							$(this).myBoxy (Boxy,{
								type:'alert',
								message: data.msg
							});
						}
						$('p.loading').hide();
						service.type_icon = 0;
					}
				});
			}
		});
	},
	registerAutoup : function(post_id)
	{
		// check current up number
		var up_quantity = $('.up_quantity').html();   
	     	up_quantity = parseInt(up_quantity.replace(/[.]/g, ""));
		if(up_quantity < 50)
		{			
			$(this).myBoxy (Boxy,{
				type:'alert',
				message: 'Bạn cần phải có ít nhất 50 lượt UP trong tài khoản để đăng ký UP tự động.'
			});					   
			return false;
		}
	
		// Load Boxy
		Boxy.load(Settings.baseurl+'/service/register-autoup/', 
		{
			modal:true, 
			unloadOnHide: true,
			afterShow : function(){
				$(".popup .btn-accept").click(function()
				{
					var times = [];
					var days = [];
					var up_number = $('#up_number').val();
					// Get times
					for(var i = 1; i <= 20; i++) {
						var hour = $('select[name=hour_' + i + ']').val();
						var minute = $('select[name=minute_' + i + ']').val();
						
						if(hour.length > 0 && minute.length > 0) 
						{
							//alert(hour + '.' + minute);
							times.push(hour + ':' + minute);
						}
					}
					
					// Get days
					$('div.row-up').find('input[type=checkbox]:checked').each(function(){
						if($(this).val() > 0)
						{
							days.push($(this).val());
						}
					});  
					
					if(times.length == 0) {
						$('div.warning').css('display', 'none');
						$('div.times').css('display', 'block');
					} else if (days.length == 0) {
						$('div.warning').css('display', 'none');
						$('div.days').css('display', 'block');
					} else {
						// OK
						$.post(Settings.baseurl + '/service/register-autoup/', {
							post_id: post_id,
							times: times,
							days: days,
							up_number: up_number
						}, function(data){
							if(data == 0) 
							{
								$(this).myBoxy (Boxy,{
									type:'alert',
									message: 'Thao tác thất bại.Bạn vui lòng thử lại sau.'
								});
							} 
							else if(data == 4) 
							{
								$(this).myBoxy (Boxy,{
									type:'alert',
									message: 'Tin đăng chưa được duyệt'
								});
							}
							else if(data == 2) 
							{
								$(this).myBoxy (Boxy,{
									type:'alert',
									message: 'Bạn không đủ lượt UP để thực hiện thao tác này.'
								});
							} 
							else 
							{
								var boxy = Boxy.get($(".popup"));
								boxy.hide();
								new Boxy(data, {modal: true, afterShow: function(){
									$('.popup .btn-accept').live('click', function()
									{
										var encrypt = $('#encrypt').val();
										var boxy = Boxy.get($(".popup"));
										
										var confirm1 = $('input[name=confirm1]:checked').val();
										var confirm2 = $('input[name=confirm2]:checked').val();
										
										if(confirm1 != 1 || confirm2 != 1) {
											$('div.warning').css('display', 'block');
											return false;
										}
										// Hide boxy
										boxy.hide();
										
										$(this).myBoxy (Boxy,{
											title: 'Đang xử lý',
											type: 'loading',
											message: '<img src="'+Settings.imgurl+'/zoomloader.gif" alt="Đang thực hiện" style="margin-bottom:5px;margin-left:10px;" />'
										});
										$.post(Settings.baseurl + '/service/confirm-autoup/', {
											encrypt: encrypt
										}, function(data)
										{
											var boxy = Boxy.get($(".popup"));
											boxy.hide();
											if(data == 1) 
											{
												$(this).myBoxy (Boxy,{
													type: 'success',
													message: 'Bạn đã đăng ký thành công.'
												});
												var up_quantity = $('.up_quantity').html();
												service.updateUp(up_quantity, up_number);
												$(".autoup").click();
											} 
											else if(data == 2) 
											{
												$(this).myBoxy (Boxy,{
													type:'alert',
													message: 'Bạn không đủ lượt UP để thực hiện thao tác này.'
												});
											} 
											else 
											{
												$(this).myBoxy (Boxy,{
													type:'alert',
													message: 'Thao tác thất bại. Bạn vui lòng thử lại sau.'
												});
											}
										});
									});    
								}});
							}
						});
					}
				});
			}
		});
	},
	cancelAutoup : function(auto_id, obj)
	{			
		$(this).myBoxy (Boxy,{
			type: 'confirm',
			message: 'Số lượt UP còn lại sẽ không được hoàn trả và tác vụ này không có khả năng khôi phục. Bạn có muốn tiếp tục ?',
			auto_id : auto_id,
			callback: function() 
			{
				var boxy = Boxy.get(this);
				var options = boxy.options;
				boxy.hide();
				auto_id = options.auto_id;
				
				if (!auto_id) 
				{
					return;
				}

				$(this).myBoxy (Boxy,{
					title: 'Đang xử lý',
					type: 'loading',
					message: '<img src="'+Settings.imgurl+'/zoomloader.gif" alt="Đang thực hiện" style="margin-bottom:5px;margin-left:10px;" />'
				});

				$.ajax({
					type: 'POST',
					url: Settings.baseurl + '/service/cancel-autoup',
					data: 'auto_id=' + auto_id,
					success: function(data)
					{
						var boxy = Boxy.get($(".popup"));
						boxy.hide();
						if(data == 1) 
						{
							$(this).myBoxy (Boxy,{
								type: 'success',
								message: 'Bạn đã hủy lịch UP tự động thành công!'
							});						
							obj.remove();
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
	deleteAutoUp : function(obj, id)
	{
    	$(this).myBoxy (Boxy,{
			type: 'confirm',
			message: 'Bạn chắc chắn muốn xóa UP tự động của tin đăng này?',
			Id : id,
			callback: function() {
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
				
				$.post(Settings.baseurl + '/service/delete-auto-up', {auto_id:id},
					function(data){
						var boxy = Boxy.get($(".popup"));
						boxy.hide();
						if(data.status ==1 ){
							$(this).myBoxy (Boxy,{
								type: 'success',
								message: 'Thao tác thành công.'
							});
							$('#autoup_' + id).remove();
						}else if(data.status == 2 || data.status == 3){
							$(this).myBoxy (Boxy,{
								type:'alert',
								message: 'Bạn không thể xóa lượt UP tự động này!'
							});
						}else{
							$(this).myBoxy (Boxy,{
								type:'alert',
								message: "Thao tác thất bại. Bạn vui lòng thử lại sau!"
							});
						}
					}, 'json'
				);
			}
		});
    },
	editAutoUp:function(auto_id)
	{
		// Load Boxy
		Boxy.load(Settings.baseurl+'/service/edit-auto-up/auto_id/' + auto_id, {
			modal:true,
			unloadOnHide:true,
			afterShow : function(){
				$(".popup .btn-accept").click(function(){
					var times = [];
					var days = [];
					var up_number = $('#up_number').val();
					var auto_id = $('#auto_id').val();
					// Get times
					for(var i = 1; i <= 20; i++) 
					{
						var hour = $('select[name=hour_' + i + ']').val();
						var minute = $('select[name=minute_' + i + ']').val();
						
						if(hour.length > 0 && minute.length > 0) 
						{
							times.push(hour + ':' + minute);
						}
					}
					
					// Get days
					$('div.row-up').find('input[type=checkbox]:checked').each(function(){
						days.push($(this).val());
					});  
					
					if(times.length == 0) 
					{
						$('div.warning').css('display', 'none');
						$('div.times').css('display', 'block');
					} 
					else if (days.length == 0) 
					{
						$('div.warning').css('display', 'none');
						$('div.days').css('display', 'block');
					} 
					else
					{
						// OK
						$.post(Settings.baseurl + '/service/edit-auto-up/', {
							auto_id: auto_id,
							times: times,
							days: days,
							up_number: up_number
						}, function(data){
							if(data == 0) 
							{
								$(this).myBoxy (Boxy,{
									type:'alert',
									message: 'Thao tác thất bại. Bạn vui lòng thử lại sau'
								});
							} 
							else
							{
								var boxy = Boxy.get($(".popup"));
								
								boxy.hide();
								
								new Boxy(data, {modal: true, afterShow: function(){
									$('.popup .btn-accept').click(function(){
										var encrypt = $('#encrypt').val();
										var boxy = Boxy.get($(".popup"));
										// Hide boxy
										boxy.hide();
										$.post(Settings.baseurl + '/service/confirm-edit-auto-up/', {
											encrypt: encrypt
										}, function(data){
											if(data == 1) 
											{
												$(this).myBoxy (Boxy,{
													type: 'success',
													message: 'Thao tác thành công!'
												});
												window.location = window.location.href;
											} 
											else 
											{
												$(this).myBoxy (Boxy,{
													type:'alert',
													message: 'Thao tác thất bại. Bạn vui lòng thử lại sau!'
												});
											}
										});
									});    
								}});
							}
						});
					}
				});
			}
		});
	},
	updateUp:function(quantity, number)
	{
		quantity = quantity.replace(/[.]/g, "");
		$('.up_quantity').html(common.addDot(quantity - number));
	},
	getallcheck:function()
	{
		var multi = 0;
		service.error = false;
		$('.check').each(function(){
			if($(this).is(':checked') == true)
			{
				multi++;
			}
		});
		if(multi > 1){
			$(this).myBoxy (Boxy,{
				type:'alert',
				message: 'Bạn chỉ được mua dịch vụ cho 1 tin đăng trong cùng 1 thời điểm.'
			});
			service.error = true;
			return false;
		}
		service.ID = $('input[name=checkId]:checked').val();
	},
	updatePriceTotal:function(level){
		$('.price_total').html(common.addDot(service.price_service*level)+" / "+ level+" ngày");
	},
	confirmDoBuyUp:function(obj, packageId)
	{			
		$(this).myBoxy (Boxy,{
			type: 'confirm',
			message: 'Bạn chắc chắn muốn mua gói UP này?',
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
					type: 'POST',
					dataType:'json',
					url: Settings.baseurl + '/service/do-charge-up',
					data: 'package_id=' + packageId,
					success: function(data)
					{
						var boxy = Boxy.get($(".popup"));
						boxy.hide();
						if(data.status == 1) 
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
								type:'alert',
								message: data.message
							});
						}
					}
				});
			}
		});
	},
	upPostService:function(id)
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
			url: Settings.baseurl + '/post/up-post-service',
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
					service.updateUp(up_quantity, 1);						
					service.upSuccessNoAuto();
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
	upSuccessNoAuto : function()
	{
		new Boxy('<div class="popup" style="width:400px;margin:0 auto"><div class="title-popup">Thông báo từ Raovat.123Mua.vn<a title="Đóng lại" class="btn-close close"><img src="'+ Settings.imgurl +'/boxy/close_boxy.png" width="18" height="17" alt="Đóng lại" /></a></div><div class="content-popup"><div class="bar-notice notice-sucess"><span class="ico"></span>Bạn đã UP sản phẩm thành công!</div><div class="clear"></div></div><div class="footer-popup"><div class="btn-default" style="width:218px"><input style="margin-left:75px" class="btn-cancel close" name="" type="button" value="Đóng lại" onclick="Boxy.get(this).hide();"/></div></div></div>',{modal : true , unloadOnHide: true});
	}
};

$(document).ready(function()
{	
	$('.service-pack-btn').live('click', function()
	{
		service.type_service = $(this).attr('data-id');
		service.getallcheck();
		if(service.error == false){
			service.overlayService();
			$(".end_date").datepicker({ dateFormat: 'dd-mm-yy' });
		}
		if(service.ID != "" || typeof service.ID == "undefined"){
			service.checkItem(service.type_service);
		}
	});
	$('.cancel_register').live('click', function(){
		var boxy = Boxy.get($(".popup"));
			boxy.hide();
	});
	$('a.buy_service_col').click(function (){
		service.ID = $(this).attr('rel');
		service.overlayService();
	});
	$('.post_register').live('change', function()
	{
		service.ID = $(this).val();
		if(!common.is_numeric(service.ID)){
			$('.notice').show().html('ID tin không hợp lệ!');
		}else{
			$('.notice').hide();
			service.checkItem(service.type_service);
		}
	});
	//up tin tu dong
	$('.auto_up').live('click', function (e)
	{
		e.preventDefault(); 
		if (!$(this).data('isClicked')) 
		{
			var id = $(this).attr('rel');
			service.registerAutoup(id);
		}else
		{
			return;
		}
	});
	$("#cancel_autoup").live('click', function() 
	{	
		var auto_id = $(this).attr('rel');
		var obj = $(this).parent().parent().parent().parent();
		service.cancelAutoup(auto_id, obj);
	});
	$('a.btn-close').live('click', function(){
		var boxy = Boxy.get($(".popup"));
			boxy.hide();
	});
	$('.end_date').live('change', function(){
		service.startDate = common.strtotime($('.display_date').val());
		service.endDate = common.strtotime($(this).val());
		if(service.startDate > service.endDate){
			$('.notice').show().html('Ngày tháng bạn chọn không hợp lệ!');
			return false;
		}else{
			$('.notice').hide();
		}
		var numberDate = ((service.endDate-service.startDate)/86400);
		if(service.type_icon != 0)
			$('.price_total').html(common.addDot((service.price_service*numberDate)));
		else
			$('.price_total').html(common.addDot(service.price_service*numberDate));
		$('.to').html(service.time_display+" ngày "+$(this).val());
	});
	$('.do_buy_up').click(function(e)
	{
		e.preventDefault(); 
		if (!$(this).data('isClicked')) 
		{
			service.confirmDoBuyUp($(this), $(this).attr('rel'));
		}
		else
		{
			return;
		}
	});
	$('.type_service').live('click', function(){
		service.type_service = $(this).val();
		$('.loading').show();
		$(".end_date").datepicker({ dateFormat: 'dd-mm-yy' });
		service.checkItem();
	});
	$('.type_icon').live('click', function(){
		service.type_icon = $(this).val();
		$('.loading').show();
		$(".end_date").datepicker({ dateFormat: 'dd-mm-yy' });
		service.checkItem();
	});
	//up post
	$('.up_post_service').live('click', function ()
	{
		var id = $(this).attr('rel');
		service.upPostService(id);
	});
});