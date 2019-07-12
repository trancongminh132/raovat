function login_callback(cbdata,acn,uin,obj){
	if(acn != '')
	{
		login.auto_check_login();

		// callback function if login success
		if(typeof window._fnCallbackAfterLogin == 'function') {
			_fnCallbackAfterLogin();
		}
	}
};

function pre_login_callback(cbdata){
	return true;
};

(function(d, s, id) {                            
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//static.me.zing.vn/openwidget/js/allc-123mua-1.07.js#tpl=default&consumer=123mua&callback=login_callback&precallback=pre_login_callback&cbdata1=1&cbdata2=2";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'zingme-jssdk'));

$(document).ready(function(){
	// check login
	if(Account.UNAME == '')
	{
		login.get_login();
	}
	$("#back-top").hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#back-top').fadeIn();
		} else {
			$('#back-top').fadeOut();
		}
	});
	// scroll body to 0px on click
	$('#back-top a').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
});

var initGlobal = function() 
{
	$('.loggedin').hover(function() {
		$('.dropdown-profile').show();
		$(".dropdown-caret").show();
	},function(){
		$(".dropdown-caret").hide();
		$('.dropdown-profile').hide();
	});
}

/* Login functions */
var login = {
	boxy: {},
	token: '',
	timeout: 0,
	options: {
				redirect_url: ''
	},

	build_login_template : function(uid, uname, shop, level) {
		var loginHtml = '';
		if(uname != '')
		{
			loginHtml = '<ul class="site-nav"><li><div class="loggedin"><a class="profile-links"><img src="'+ Settings.imgurl +'/no_avatar.1.0.1.png" width="20" height="20" alt="'+ uname +'"></a><span class="screen-name">'+ uname +'</span><div class="dropdown-profile" style="display:none"><div class="dropdown-caret" style="display:none"></div><ul class="user-dropdown">';			
			loginHtml += '<li class="title-user-dropdown">Quản lý cá nhân</li><li><a href="'+ Settings.baseurl +'/usercp/danh-sach-tin.html"><span class="ico-03"></span>Quản lý tin</a></li><li><a href="'+ Settings.baseurl +'/usercp/danh-sach-tin-da-luu.html"><span class="ico-09"></span>Danh sách tin đã lưu</a></li><li><a href="'+ Settings.baseurl +'/usercp/hop-thu-den.html"><span class="ico-08"></span>Danh sách tin nhắn</a></li><li><a href="'+ Settings.baseurl +'/usercp/lich-su-giao-dich.html"><span class="ico-05"></span>Thống kê giao dịch</a></li>'
			loginHtml += '<li class="end"><a href="'+ Settings.baseurl +'/user/logout"><span class="ico-10"></span>Thoát</a></li></ul></div></div></li>';
			loginHtml +='<li><div id="func-01" class="func-notify"><a class="icon-mail" href="'+Settings.baseurl+'/usercp/hop-thu-den.html"><span class="num"></span></a><div id="dropdown-01" class="dropdown-notify" style="display:none"><div class="dropdown-caret"></div><h3 class="title-user-dropdown">Tin nhắn mới</h3><div id="scroll-01" class="notify-scroll" style="height:200px"><div class="viewport"><div class="overview"><ul class="user-dropdown dropdown-message">';	
				loginHtml +='</ul></div></div></div><a class="view-more" href="'+Settings.baseurl+'/usercp/hop-thu-den.html">Xem tất cả</a></div></div></li>';
			loginHtml += '<li class="first helper"><a href="'+ Settings.baseurl +'/gioi-thieu-dich-vu-tin-dang.html">Bạn muốn rao vặt hiệu quả?</a></li>';
			loginHtml += '</ul>';
			$('#welcome_zone').html(loginHtml);
			$('.loggedin').hover(function() {
				$('.dropdown-profile').show();
				$(".dropdown-caret").show();
			},function(){
				$(".dropdown-caret").hide();
				$('.dropdown-profile').hide();
			});
			$('#func-01').hover(function() {
				if ($('#dropdown-01').is(":hidden")) {
					$('#dropdown-01').show();
				}
				else {
					$('#dropdown-01').hide();
				}
			});
		}
		else
		{
			login.auto_check_login();					
		}
		
		return false;
	},
	
	close_popup: function() {
		if(this.options.redirect_url != '')
		{
			window.location = this.options.redirect_url;
		}

		this.boxy.hide();
	},

	popup_login : function(options) {
		zmWgLogin.zmLogin()
	},
	
	get_login : function() {
		$.get(Settings.baseurl + "/ajax/getlogininfo?v="+ new Date().getTime(), {}, function(data){				
				if (data){					
					if (data.uname != '') {						
						Account.UID = data.uid;
						Account.UNAME = data.uname;						

						login.build_login_template(data.uid, data.uname);
						if(Account.UID == 0)
						{
							$('#zmesession').attr('src', Settings.baseurl +'/user/zmessionhandler');
						}
					}
					else
					{
						login.build_login_template(0, '', 0, 0);
					}

					if(typeof window._fnCallbackAfterLogin == 'function') {
						_fnCallbackAfterLogin();
					}
				}
			},
		"json");
		return false;
	},
	
	get_unread:function(){
		$.get(Settings.baseurl + "/ajax/unread-message", {}, function(data){				
				if (data)
				{		
					if (data.total != '') {						
						$('span.num').html(data.total);
						$('ul.dropdown-message').html(login.build_template_message(data.data));
					}else
					{
						$('span.num').html(0);
						$('.overview').html('<span style="margin-left:36px">Không có tin nhắn mới nào!</span>');
					}
				}
			},
		"json");
	},
	build_template_message:function(data){
		var ul = "";
		for(i = 0; i < data.length; i++)
		{
			var message = data[i];
			ul +='<li><a target="_blank" href="'+Settings.baseurl+'/usercp/chi-tiet-tin-nhan-'+message.msg_id+'.html"><span class="ico-13"></span><strong>'+message.sender_fullname+'</strong> vừa gửi tin nhắn cho bạn - <strong class="timer">'+message.time+'</strong></a></li>';
		}		
		return ul;
	},
	auto_check_login : function() {
		$.ajax({
			url: 'http://123.zing.vn/sso.php',
			dataType: 'jsonp',		  
			success: function(data) {
				if(data.isLogined && data.acn != '')
				{
					$.post(Settings.baseurl + "/ajax/setlogin/", { sid:data.vngauth, user_name: data.acn }, function(rs){
						if(rs.err == 0)
						{
							Account.UID = rs.uid;
							Account.UNAME = rs.uname;							
							login.build_login_template(rs.uid, rs.uname, rs.shop, rs.level);
							login.get_unread();
						}
					},'json');
				}
			}
		});
	}
};

/******************************
Class Message
******************************/

var Message = 
{
	options: {
		receiver: 0,
		sender_id: 0,
		msgId: 0,
		email:"",
		titleReply: "",
		postId:0
	},
	compose: function () {
		var html = '<div class="popup" style="width:450px;margin:0 auto"><div class="title-popup">G\u1eedi tin nh\u1eafn<a title="\u0110\u00f3ng l\u1ea1i" class="btn-close close"><img src="' + Settings.imgurl + '/boxy/close_boxy.png" width="18" height="17" alt="\u0110\u00f3ng l\u1ea1i" /></a></div><div class="content-popup"><div class="loading" style="display:none"><span></span>Đang tải...</div><div class="msg-form"><p class="notice-error" style="display:none">Xin vui l\u00f2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\u00f4ng tin</p><p class="row-info clearfix"><label for="name">Ng\u01b0\u1eddi nh\u1eadn:</label><span class="txt">' + Message.options.userName + '</span></p><p class="row-info clearfix"><label for="title">Ti\u00eau \u0111\u1ec1 <span style="color:red">(*)</span>:</label>\t<input id="title_msg" class="input-msg" name="title" type="text" maxlength="100"></p><p class="row-info clearfix"><label for="content">N\u1ed9i dung tin nh\u1eafn <span style="color:red">(*)</span> (Tối đa 200 ký tự):</label>\t<textarea id="content_msg" class="ctn-content" maxlength="200"></textarea></p><h2 class="contact-title">Thông tin người gửi <span style="color:red">(*)</span>:</h2><p class="row-info clearfix"><label for="title" class="e-title">Email <span style="color:red">(*)</span>:</label><input class="input-msg" name="email_sender" id="email_sender" type="text" value="'+Message.options.email+'"/></p><div class="clear"></div></div><div class="clear"></div></div><div class="footer-popup"><div class="btn-default btn-double"><input class="btn-accept" name="" type="button" value="G\u1eedi \u0111i" onclick="Message.sendMessage()"/><input class="btn-cancel close" name="" type="button" value="H\u1ee7y b\u1ecf" /></div></div></div>';
		this.boxy = new Boxy(html, {modal:true, unloadOnHide: true});
	},
	sendMessage: function () 
	{		
		$('.btn-accept').attr('disabled', 'disabled');
		var title = $("#title_msg").val();
		var content = $("#content_msg").val();
		var email = $("#email_sender").val();
		if(title == "" || content == "" || email == "")
		{
			var msgError = "Xin vui l\u00f2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\u00f4ng tin!";
			$(".notice-error").text(msgError);
			$(".notice-error").css("display", "block");
			$('.btn-accept').removeAttr('disabled');
			return false;
		}
		if(!Core123M.is_email(email))
		{
			var msgError = "Địa chỉ email không đúng. Vui lòng nhập lại!";
			$(".notice-error").text(msgError);
			$(".notice-error").css("display", "block");
			$('.btn-accept').removeAttr('disabled');
			return false;
		}
		$('.loading').show();
		$.ajax({
			type: "POST",
			dataType: "json",
			url: Settings.baseurl + "/inbox/sendmessage/",
			data: {
				receiver_id: Message.options.receiver,
				msg_subject: title,
				msg_content: content,
				email:email,
				post_id : Message.options.postId
			},
			success: function (data) 
			{
				var boxy = Boxy.get($(".popup"));
					boxy.hide();
				if(data.error == 1){
					$(this).myBoxy(Boxy, {
						type: "alert",
						message: data.message
					});
				}else
				{
					$(this).myBoxy(Boxy, {
						type: "success",
						message: data.message
					});
				}
				$('.loading').hide();
			}
		});
	},
	reply: function () {
		this.boxy = new Boxy('<div class="popup" style="width:450px;margin:0 auto"><div class="title-popup">Trả lời tin nh\u1eafn<a title="\u0110\u00f3ng l\u1ea1i" class="btn-close close"><img src="' + Settings.imgurl + '/boxy/close_boxy.png" width="18" height="17" alt="\u0110\u00f3ng l\u1ea1i" /></a></div><div class="content-popup"><div class="loading" style="display:none"><span></span>Đang tải...</div><div class="msg-form"><p class="notice-error" style="display:none">Xin vui l\u00f2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\u00f4ng tin</p><p class="row-info clearfix"><label for="name">Người nhận <span style="color:red">(*)</span>:</label><span class="txt"><input class="input-msg disable-input" disabled="disabled" name="receiver_id" value="'+Message.options.sender_id+'" type="text"></span></p><p class="row-info clearfix"><label for="title">Ti\u00eau \u0111\u1ec1 <span style="color:red">(*)</span>:</label><input class="input-msg" name="title" id="title_msg" type="text" value="' + Message.options.titleReply + '"></p><p class="row-info clearfix"><label for="content">N\u1ed9i dung tin nh\u1eafn <span style="color:red">(*)</span> (Tối đa 200 ký tự):</label><textarea id="content_reply" class="ctn-content" maxlength="200"></textarea></p><div class="clear"></div></div><div class="clear"></div></div><div class="footer-popup"><div class="btn-default btn-double"><input class="btn-accept" name="" onclick="Message.sendReply()" type="button" value="G\u1eedi \u0111i" /><input class="btn-cancel close" name="" type="button" value="H\u1ee7y b\u1ecf" /></div></div></div>', {
			modal: true, unloadOnHide: true});
	},
	sendReply: function ()
	{
		var title = $("#title_msg").val();
		var content = $("#content_reply").val();
		var receiver = $("#receiver_id").val();
		if(title == "" || content == "")
		{
			var msgError = "Xin vui l\u00f2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\u00f4ng tin!";
			$(".notice-error").text(msgError);
			$(".notice-error").css("display", "block");
			return false;
		}
		$('.loading').show();
		$.ajax({
			type: "POST",
			dataType: "json",
			url: Settings.baseurl + "/inbox/sendmessagereply/",
			data: {
				msg_id: Message.options.msgId,                 
				msg_content: content,
				msg_subject:title
			},
			success: function (data) 
			{
				var boxy = Boxy.get($(".popup"));
					boxy.hide();
				if(data.error == 1)
				{
					$(this).myBoxy(Boxy, {
						type: "alert",
						message: data.message
					})
				}else
				{
					$(this).myBoxy(Boxy, {
						type: "success",
						message: data.message
					})
				}
				$('.loading').hide();
			}
		});
	}
};

/******************************
Class Common
******************************/

var common = 
{
    formatCurrency: function (a) {
        a = a.toString().replace(/\$|\,/g, "");
        isNaN(a) && (a = "0");
        sign = a == (a = Math.abs(a));
        a = Math.floor(100 * a + 0.50000000001);
        cents = a % 100;
        a = Math.floor(a / 100).toString();
        10 > cents && (cents = "0" + cents);
        for (var b = 0; b < Math.floor((a.length - (1 + b)) / 3); b++) a = a.substring(0, a.length - (4 * b + 3)) + "." + a.substring(a.length - (4 * b + 3));
        return (sign ? "" : "-") + a
    },
    categoryUrl: function (a) {
        return Settings.baseurl + "/c" + a.category_id + "/" + a.category_alias + ".html"
    },
    productUrl: function (a) {
        return Settings.baseurl + "/" + a.user_id + "/" + a.product_id + "/" + a.product_alias + ".html"
    },
    shopUrl: function (a) {
        return null == a ? "" : 0 < a.vip_level ? Settings.baseurl + "/" + a.shop_alias : Settings.baseurl + "/store/" + a.shop_alias
    },
    formatDateTime: function (a) {
        var b = [
            [11, "s\u00e1ng"],
            [14, "tr\u01b0a"],
            [19, "chi\u1ec1u"]
        ],
            c = "Ch\u1ee7 Nh\u1eadt;Th\u1ee9 Hai;Th\u1ee9 Ba;Th\u1ee9 T\u01b0;Th\u1ee9 N\u0103m;Th\u1ee9 S\u00e1u;Th\u1ee9 B\u1ea3y".split(";"),
            e = new Date,
            f = new Date(1E3 * a),
            k = Math.floor(e.getTime() / 1E3) - a;
        if (60 > k) return (0 > k ? 0 : k).toString() + " gi\u00e2y tr\u01b0\u1edbc";
        if (3600 > k) return Math.floor(k / 60) + " ph\u00fat tr\u01b0\u1edbc";
        if (43200 > k) return Math.floor(k / 3600) + " ti\u1ebfng tr\u01b0\u1edbc";
        var a = f.getHours(),
            n = Core123M.fn.fill2(f.getMinutes());
        if (518400 > k) {
            for (var q = "t\u1ed1i", k = 0; 3 > k; k++) if (a < b[k][0]) {
                q = b[k][1];
                break
            }
            k = (e.getDay() + 7 - f.getDay()) % 7;
            b = "";
            b = 0 == k ? "h\u00f4m nay" : 1 == k ? "h\u00f4m qua" : c[f.getDay()];
            return (a % 12).toString() + ":" + n + " " + q + " " + b
        }
        a = Core123M.fn.fill2(a);
        return a + ":" + n + " " + Core123M.fn.fill2(f.getDate()) + "/" + Core123M.fn.fill2(f.getMonth() + 1) + "/" + f.getFullYear()
    },
    getUrlVars: function (a) {
        for (var b = {}, c = a.slice(a.indexOf("?") + 1).split("&"), e = 0; e < c.length; e++) a = c[e].split("="), b[a[0]] = a[1];
        return b
    },
    httpBuildQueryString: function (a) {
        return $.param(a)
    },
	is_email:function(str)
	{ 
		return (/^[a-z][a-z-_0-9\.]+@[a-z-_=>0-9\.]+\.[a-z]{2,3}$/i).test(str);
	},
	is_numeric:function(n) 
	{
		return !isNaN(parseFloat(n)) && isFinite(n);
	},
	strtotime : function (time){
		if(time != ""){
			var tmp = time.split('-');	
			var humDate = new Date(Date.UTC(tmp[2],(this.stripLeadingZeroes(tmp[1])-1),this.stripLeadingZeroes(tmp[0])));  
			return (humDate.getTime()/1000.0);
		}
		else{
			return  0;
		}
	},
	stripLeadingZeroes : function(input){
		if(input != undefined){
			if((input.length > 1) && (input.substr(0,1) == "0"))
				return input.substr(1);
			else
				return input;
		}
	},
	addDot : function (str){
		var amount = new String(str);
		amount = amount.split("").reverse();
		var output = "";
		for ( var i = 0; i <= amount.length-1; i++ ){
			output = amount[i] + output;
			if ((i+1) % 3 == 0 && (amount.length-1) !== i)output = '.' + output;
		}
		return output;
	},
	overlayfeedback:function()
	{
		var html = '<div class="popup" style="width:450px;margin:0 auto"><div class="title-popup">Góp ý/ Báo lỗi phiên bản Beta raovat.123mua.vn<a title="Đóng lại" class="btn-close close"><img src="'+Settings.imgurl+'/boxy/close_boxy.png" alt="Đóng lại" /></a></div><div class="content-popup"><div class="msg-form" style="margin:10px 0"><p class="notice-error" style="display:none">Xin vui lòng nhập đầy đủ thông tin</p><p class="row-info clearfix"><label for="name">Chủ đề góp ý:</label><select class="input-msg" id="type_feedback" style="width:290px"><option value="0">Vui lòng chọn loại phản hồi</option><option value="1">Báo lỗi</option><option value="2">Góp ý nội dung</option><option value="3">Yêu cầu chức năng</option><option value="4">Khác</option></select></p><p class="row-info clearfix"><label for="title">Góp ý về liên kết:</label><input class="input-msg" id="link_feedback" name="title" type="text" value="'+$(location).attr('href')+'"></p><p class="row-info clearfix"><label for="email">Email của bạn:</label><input type="text" name="email_feedback" value="" class="input-msg" id="email_msg"></p><p class="row-info clearfix"><label for="content">Mô tả nội dung:</label><textarea class="ctn-content" id="content_feedback"></textarea></p><div class="clear"></div></div><div class="clear"></div></div><div class="footer-popup"><div class="btn-default btn-double"><input class="btn-accept" name="" type="button" value="Gửi đi" onclick="common.sendFeedback()"/><input class="btn-cancel close" name="" type="button" value="Hủy bỏ" /></div></div></div>';
		this.boxy = new Boxy(html, {modal:true, unloadOnHide: true});
	},
	sendFeedback: function () 
	{		
		$('.loading').show();
		$('.btn-accept').attr('disabled', 'disabled');
		var type_feedback = $("#type_feedback").val();
		var content = $("#content_feedback").val();
		var link = $("#link_feedback").val();
		var email = $("#email_msg").val();
		if(type_feedback == 0 || content == "" || link == "")
		{
			var msgError = "Xin vui l\u00f2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\u00f4ng tin!";
			$(".notice-error").text(msgError);
			$(".notice-error").css("display", "block");
			$('.btn-accept').removeAttr('disabled');
			return false;
		}
		if(!common.is_email(email))
		{
			var msgError = "Địa chỉ email không đúng. Vui lòng nhập lại!";
			$(".notice-error").text(msgError);
			$(".notice-error").css("display", "block");
			$('.btn-accept').removeAttr('disabled');
			return false;
		}
		
		var boxy = Boxy.get($(".popup"));
			boxy.hide();
			
		$(this).myBoxy (Boxy,{
			title: 'Đang xử lý',
			type: 'loading',
			message: '<img src="'+Settings.imgurl+'/zoomloader.gif" alt="Đang thực hiện" style="margin-bottom:5px;margin-left:10px;" />'
		});
		
		$.ajax({
			type: "POST",
			dataType: "json",
			url: Settings.baseurl + "/ajax/sendfeedback/",
			data: {
				type_feedback: type_feedback,
				content: content,
				link:link,
				email:email
			},
			success: function (data) 
			{
				var boxy = Boxy.get($(".popup"));
					boxy.hide();
				if(data.error == 1){
					$(this).myBoxy(Boxy, {
						type: "alert",
						message: data.message
					});
				}else
				{
					$(this).myBoxy(Boxy, {
						type: "success",
						message: 'Cám ơn bạn đã tham gia đóng góp ý kiến cho phiên bản beta của raovat.123mua.vn!'
					});
				}
				$('.loading').hide();
			}
		});
	}
}