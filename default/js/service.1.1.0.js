var service  = 
{
	ID:0,
	minMoney:1,//5000
	progress:false,
	type_post:[],
	type_zone:[],
	updateMoney:function(number)
	{
		var money = $('.price').html();
		if(money != null)
		{
			money = money.replace(/[.]/g, "");
			$('.price').html(common.addDot(money - number));
		}
	},
	registerServicePost : function()
	{
		// check current money
		var money = $('.money_account').html(); 
		if(money != null)
		{
	     	money = money.replace(/[.]/g, "");
			if(money < service.minMoney)
			{			
				$(this).myBoxy (Boxy,{
					type:'alert',
					message: 'Số tiền trong tài khoản của bạn không đủ để đăng ký dịch vụ. Vui lòng nạp thêm tiền vào tài khoản <a href="'+Settings.baseurl+'/usercp/nap-tien.html" target="_blank">tại đây</a>'
				});		
				$.unblockUI();				
				return false;
			}
		}
		// Load Boxy
		Boxy.load(Settings.baseurl+'/service/register-service-post/', 
		{
			modal: true,
			unloadOnHide: true,
			afterShow : function()
			{
				$('.post_id').val(service.ID);
				$.unblockUI();
				$(".popup .btn-accept").click(function()
				{
					service.doReg();
				});
			}
		});
	},
	checkItem:function(type)
	{
		service.progress = true;
		$('.loading').show();
		$.blockUI();
		$.ajax({
			type: "POST",
			url: Settings.baseurl + '/ajax/check-item',
			data:{id:service.ID, type_post:service.type_post, type_zone:service.type_zone},
			dataType:'json',
			success: function(data)
			{            
				$('.notice').hide();
				if(data.error != 0)
				{
					if($('.post_register').val() != "")
					{
						$('.notice').show().html(data.error_msg);
						$('.detail-service').hide();
						service.error = 1;
					}
					service.error = 1;
					$('.loading').hide();
					$.unblockUI();
					$('.number-date').html(1);
					return false;
				}else 
				{
					service.error = 0;
					$('.notice').hide();
					$('.detail-service').show().html(data.msg);
					$('.btn-accept').removeAttr('disabled');
					$('.number-date').html(1);
					service.price_service = data.price_service;
					service.time_display = data.time;
					service.numberFree = data.number_free;
					$('.display_date').val(data.display_date);
					$('.end_date').val(data.end_date);
					$('.from_date').html("Từ <strong> "+service.time_display+" ngày "+data.display_date+" </strong> đến <strong><span class='to'>"+service.time_display+" ngày "+data.end_date+" </span></strong>");
					$('.total_price').html(common.addDot(service.price_service));
					if(data.error_msg != ""){
						$('.price_service_type').show();
						$('.price_service_type .row-inside').html(data.error_msg);
					}
				}
				$('.loading').hide();
				service.progress = false;
				$.unblockUI();
			}
		});
	},
	doReg:function()
	{
		if(service.error != 0)
			return;
		if(service.progress)
			return;
		service.startDate = common.strtotime($('.display_date').val());
		service.endDate = common.strtotime($('.end_date').val());
		
		if(service.startDate > service.endDate){
			$('.notice').show().html('Ngày tháng bạn chọn không hợp lệ!');
			return;
		}else{
			$('.notice').hide();
		}
		if(service.type_post.length == 0 && service.type_zone.length == 0){
			$('.notice').show().html('Bạn chưa chọn dịch vụ nào để đăng ký!');
			return;
		}else{
			$('.notice').hide();
		}
		if(service.ID == 0){
			$('.notice').show().html('Bạn chưa nhập ID tin!');
			return;
		}else{
			$('.notice').hide();
		}
		$('.loading').show();
		service.startDate = service.time_display+" "+$('.display_date').val();
		service.endDate = service.time_display+" "+$('.end_date').val();
		
		var priceTotal = $('.total_price').html().replace(/[.]/g, "");
		
		$.ajax({
			type: "POST",
			url: Settings.baseurl + '/service/register-service-post',
			data:{id:service.ID, type_post:service.type_post, number_date:service.numDate,start_date:service.startDate,end_date:service.endDate,type_zone:service.type_zone, price_total:priceTotal},
			success: function(data)
			{
				if(data == 1)
				{
					$('.notice').show().html('Số tiền trong tài khoản không đủ để đăng ký dịch vụ. Bạn vui lòng nạp thêm tiền vào tài khoản!');
					return false;
				}else
				{
					var boxy = Boxy.get($(".popup"));
						boxy.hide();
					new Boxy(data, {modal: true, unloadOnHide: true});
				}
			}
		});	
	},
	registerAutoup : function(post_id)
	{
		// check current up number
		var up_quantity = $('.up_quantity').html(); 
		if(up_quantity != null)
		{
	     	up_quantity = parseInt(up_quantity.replace(/[.]/g, ""));
			if(up_quantity < 50)
			{			
				$(this).myBoxy (Boxy,{
					type:'alert',
					message: 'Bạn cần phải có ít nhất 50 lượt UP trong tài khoản để đăng ký UP tự động.'
				});					   
				return false;
			}
		}
		
		var confirm = 0;
		
		// Load Boxy
		Boxy.load(Settings.baseurl+'/service/register-autoup/', 
		{
			modal:true, 
			unloadOnHide: true,
			afterShow : function(){
				$("#popUpRegister .btn-accept").click(function()
				{
					$('.loading').show();
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
								$('.loading').hide();
							} 
							else if(data == 4) 
							{
								$(this).myBoxy (Boxy,{
									type:'alert',
									message: 'Tin đăng chưa được duyệt'
								});
								$('.loading').hide();
							}
							else if(data == 2) 
							{
								$(this).myBoxy (Boxy,{
									type:'alert',
									message: 'Bạn không đủ lượt UP để thực hiện thao tác này.'
								});
								$('.loading').hide();
							} 
							else 
							{
								var boxy = Boxy.get($(".popup"));
								boxy.hide();
								new Boxy(data, {modal: true, unloadOnHide: true, afterShow: function(){
									$('#popUpConfirm .btn-accept').live('click', function()
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
										
										if(confirm == 0)
										{
											confirm = 1;
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
													if(up_quantity != null)
													{
														service.updateUp(up_quantity, up_number);
													}
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
												confirm = 0;
											});
										}else{
											return;
										}
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
													message: 'Thao tác thành công!',
													afterHide:function(){window.location = window.location.href}
												});
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
	reloadAutoup : function(auto_id, up_number)
	{
		$(this).myBoxy (Boxy,{
            type: 'confirm',
            message: 'Bạn có muốn chạy lại lịch UP tự động này? Tài khoản của bạn sẽ bị trừ <strong>' + up_number + '</strong> lượt UP sau khi kích hoạt.',
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
                     url: Settings.baseurl +'/service/reload-autoup',
                     data: 'auto_id=' + auto_id,
                     success: function(data){
                         var boxy = Boxy.get($(".popup"));
                         
                         boxy.hide();
                       
                         if(data == 1) 
                         {
                             $(this).myBoxy (Boxy,{
                                 type: 'success',
                                 message: 'Bạn đã khôi phục lịch UP tự động thành công.'  ,
								afterHide:function(){window.location = window.location.href}
                             });
                         } 
                         else if(data == 2) 
                         {
							 $(this).myBoxy (Boxy,{
								type:'alert',
								message: 'Bạn không có đủ lượt UP để khôi phục lịch UP tự động này. Mua thêm lượt UP để tiếp tục!'
							 });
                         } 
                         else 
                         {
                             $(this).myBoxy (Boxy,{
								type:'alert',
                                message: 'Thao tác thất bại. Bạn vui lòng thử lại sau!'
                             });
                         }
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
	upSuccessNoAuto : function()
	{
		new Boxy('<div class="popup" style="width:400px;margin:0 auto"><div class="title-popup">Thông báo từ Raovat.123Mua.vn<a title="Đóng lại" class="btn-close close"><img src="'+ Settings.imgurl +'/boxy/close_boxy.png" width="18" height="17" alt="Đóng lại" /></a></div><div class="content-popup"><div class="bar-notice notice-sucess"><span class="ico"></span>Bạn đã UP sản phẩm thành công!</div><div class="clear"></div></div><div class="footer-popup"><div class="btn-default" style="width:218px"><input style="margin-left:75px" class="btn-cancel close" name="" type="button" value="Đóng lại" onclick="Boxy.get(this).hide();"/></div></div></div>',{modal : true , unloadOnHide: true});
	},
	redirect:function(){
		return;
	}
};

$(document).ready(function()
{	
	$('.buy_service_post').live('click', function()
	{
		$.blockUI();
		service.ID = 0;
		service.registerServicePost();
	});
	$('.cancel_register').live('click', function(){
		service.type_icon = 0;
		service.type_service = 0;
		var boxy = Boxy.get($(".popup"));
			boxy.hide();
	});
	$('a.buy_service_col').click(function ()
	{
		$.blockUI();
		service.ID = $(this).attr('rel');
		service.registerServicePost();
	});
	$('a.buy_service_detail').click(function (){
		if(Account.UNAME == '')
		{
			login.popup_login();
			return false;
		}
		service.ID = $(this).attr('rel');
		$.blockUI();
		service.registerServicePost();
	});
	$('.post_id').live('change', function()
	{
		service.ID = $(this).val();
		if(!common.is_numeric(service.ID)){
			$('.notice').show().html('ID tin không hợp lệ!');
		}else{
			$('.notice').hide();
			service.checkItem();
		}
	});
	//up tin tu dong
	$('.auto_up').live('click', function (e)
	{
		e.preventDefault();
		if (!$(this).data('isClicked')) 
		{
			var link = $(this);
			link.data('isClicked', true);
			setTimeout(function() {link.removeData('isClicked')}, 1000);
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
	
	$(".reload_autoup").live('click', function() 
	{
        var auto_id = $(this).attr('rel');
        var up_number = $(this).attr('up_number');
        service.reloadAutoup(auto_id, up_number);
	});
	$('a.btn-close').live('click', function(){
		var boxy = Boxy.get($(".popup"));
			boxy.hide();
		service.type_post = [];
		service.type_zone = [];
	});
	$('.end_date').live('change', function(){
		service.startDate = common.strtotime($('.display_date').val());
		service.endDate = common.strtotime($(this).val());
		if(service.startDate > service.endDate){
			$('.notice').show().html('Ngày tháng bạn chọn không hợp lệ!');
			return;
		}else
		{
			$('.notice').hide();
		}
		var numberDate = ((service.endDate-service.startDate)/86400);
		$('.total_price').html(common.addDot(service.price_service*numberDate));
		if($('.price_type_post').html() != null){
			$('.price_type_post').html((parseInt($('.price_type_post').html().replace(/[.]/g, ""))*numberDate)+" ");
		}
		if($('.price_type_zone').html() != null)
		{
			$('.price_type_zone').html((parseInt($('.price_type_zone').html().replace(/[.]/g, ""))*numberDate)+" ");
		}
		$('.to').html(service.time_display+" ngày "+$(this).val());
		$('.number-date').html(numberDate);
		$('.bold_number').html(parseInt(service.numberFree - numberDate));
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
	$('.type_post').live('click', function()
	{
		service.type_post = [];
		$(".type_post").each( function() 
		{
			if($(this).is(':checked') == true)
			{
				service.type_post.push($(this).val());
			}
		});
		$(".end_date").datepicker({ dateFormat: 'dd-mm-yy' });
		service.checkItem();
	});
	$('.type_zone').live('click', function()
	{
		service.type_zone = [];
		$(".type_zone").each( function() 
		{
			if($(this).is(':checked') == true)
			{
				service.type_zone.push($(this).val());
			}
		});
		$(".end_date").datepicker({ dateFormat: 'dd-mm-yy' });
		service.checkItem();
	});
	$('.btn-no').live('click', function(){
		var boxy = Boxy.get($(".popup"));
			boxy.hide();
		service.type_post = [];
		service.type_zone = [];
	});
});