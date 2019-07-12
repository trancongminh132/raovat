var pagedefault = 
{
	processScroll : true,
    sensitivity : 10,
	offsetTop:0,
	windowWidth:0,
	windowHeight:0,
	current:0,
	statuspopup:'collapse',
	statusblock:'collapse',
	dataloadmore:[],
	init:function(pageData)
	{
		this.pageData = pageData;
		this.windowWidth = $(window).width();
		this.windowHeight = $(window).height();
		this.initbuiltemplatePage();
		$(".tips a").simpletip({ fixed: false});
	},
	overlayPopupCity:function()
	{
		var html = '<div class="province popup"><h1 class="title"><span class="icon"></span>Chọn tỉnh/ thành phố </h1><div class="content-pop"><ul class="collapse"><li><a href="'+Settings.baseurl+'/TP-HCM" title="Rao vặt tại Tp. Hồ Chí Minh">Tp. Hồ Chí Minh</a></li><li><a href="'+Settings.baseurl+'/Ha-Noi" title="Rao vặt tại Hà Nội">Hà Nội</a></li><li><a href="'+Settings.baseurl+'/Hai-Phong" title="Rao vặt tại Hải Phòng">Hải Phòng</a></li><li><a href="'+Settings.baseurl+'/Da-Nang" title="Rao vặt tại Đà Nẵng">Đà Nẵng</a></li><li><a href="'+Settings.baseurl+'/Binh-Duong" title="Rao vặt tại Bình Dương">Bình Dương</a></li><li><a href="'+Settings.baseurl+'/Can-Tho" title="Rao vặt tại Cần Thơ">Cần Thơ</a></li><li><a href="Bac-Can" title="Rao vặt tại Bắc Cạn  ">Bắc Cạn  </a></li><li><a href="Bac-Giang" title="Rao vặt tại Bắc Giang  ">Bắc Giang  </a></li><li><a href="Bac-Ninh" title="Rao vặt tại Bắc Ninh">Bắc Ninh</a></li><li><a href="Cao-Bang" title="Rao vặt tại Cao Bằng">Cao Bằng</a></li><li><a href="Dien-Bien" title="Rao vặt tại Điện Biên">Điện Biên</a></li><li><a href="Ha-Giang" title="Rao vặt tại Hà Giang  ">Hà Giang  </a></li><li><a href="Ha-Nam" title="Rao vặt tại Hà Nam ">Hà Nam </a></li><li><a href="Hai-Duong" title="Rao vặt tại Hải Dương">Hải Dương</a></li><li><a href="Hoa-Binh" title="Rao vặt tại Hoà Bình">Hoà Bình</a></li><li><a href="Hung-Yen" title="Rao vặt tại Hưng Yên">Hưng Yên</a></li><li><a href="Lai-Chau" title="Rao vặt tại Lai Châu ">Lai Châu </a></li><li><a href="Lang-Son" title="Rao vặt tại Lạng Sơn ">Lạng Sơn </a></li><li><a href="Lao-Cai" title="Rao vặt tại Lào Cai ">Lào Cai </a></li><li><a href="Nam-Dinh" title="Rao vặt tại Nam Định">Nam Định</a></li><li><a href="Ninh-Binh" title="Rao vặt tại Ninh Bình  ">Ninh Bình  </a></li><li><a href="Phu-Tho" title="Rao vặt tại Phú Thọ  ">Phú Thọ  </a></li><li><a href="Quang-Ninh" title="Rao vặt tại Quảng Ninh ">Quảng Ninh </a></li><li><a href="Son-La" title="Rao vặt tại Sơn La ">Sơn La </a></li><li><a href="Thai-Binh" title="Rao vặt tại Thái Bình">Thái Bình</a></li><li><a href="Thai-Nguyen" title="Rao vặt tại Thái Nguyên ">Thái Nguyên </a></li><li><a href="Thanh-Hoa" title="Rao vặt tại Thanh Hoá">Thanh Hoá</a></li><li><a href="Tuyen-Quang" title="Rao vặt tại Tuyên Quang  ">Tuyên Quang  </a></li><li><a href="Vinh-Phuc" title="Rao vặt tại Vĩnh Phúc  ">Vĩnh Phúc  </a></li><li><a href="Yen-Bai" title="Rao vặt tại Yên Bái ">Yên Bái </a></li><li><a href="Binh-Dinh" title="Rao vặt tại Bình Định">Bình Định</a></li><li><a href="Binh-Phuoc" title="Rao vặt tại Bình Phước">Bình Phước</a></li><li><a href="Binh-Thuan" title="Rao vặt tại Bình Thuận">Bình Thuận</a></li><li><a href="Dak-Lak" title="Rao vặt tại Đắk Lắk ">Đắk Lắk </a></li><li><a href="Dak-Nong" title="Rao vặt tại Đắk Nông ">Đắk Nông </a></li><li><a href="Gia-Lai" title="Rao vặt tại Gia Lai">Gia Lai</a></li><li><a href="Ha-Tinh" title="Rao vặt tại Hà Tĩnh ">Hà Tĩnh </a></li><li><a href="Khanh-Hoa" title="Rao vặt tại Khánh Hoà ">Khánh Hoà </a></li><li><a href="Kontum" title="Rao vặt tại Kontum">Kontum</a></li><li><a href="Lam-Dong" title="Rao vặt tại Lâm Đồng ">Lâm Đồng </a></li><li><a href="Nghe-An" title="Rao vặt tại Nghệ An">Nghệ An</a></li><li><a href="Ninh-Thuan" title="Rao vặt tại Ninh Thuận">Ninh Thuận</a></li><li><a href="Phu-Yen" title="Rao vặt tại Phú Yên ">Phú Yên </a></li><li><a href="Quang-Binh" title="Rao vặt tại Quảng Bình  ">Quảng Bình  </a></li><li><a href="Quang-Nam" title="Rao vặt tại Quảng Nam ">Quảng Nam </a></li><li><a href="Quang-Ngai" title="Rao vặt tại Quảng Ngãi  ">Quảng Ngãi  </a></li><li><a href="Quang-Tri" title="Rao vặt tại Quảng Trị  ">Quảng Trị  </a></li><li><a href="Thua-Thien-Hue" title="Rao vặt tại Thừa Thiên Huế">Thừa Thiên Huế</a></li><li><a href="TP-Vinh" title="Rao vặt tại TP Vinh">TP Vinh</a></li><li><a href="An-Giang" title="Rao vặt tại An Giang">An Giang</a></li><li><a href="Ba-Ria-Vung-Tau" title="Rao vặt tại Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu</a></li><li><a href="Bac-Lieu" title="Rao vặt tại Bạc Liêu  ">Bạc Liêu  </a></li><li><a href="Ben-Tre" title="Rao vặt tại Bến Tre">Bến Tre</a></li><li><a href="Ca-Mau" title="Rao vặt tại Cà Mau  ">Cà Mau  </a></li><li><a href="Dong-Nai" title="Rao vặt tại Đồng Nai">Đồng Nai</a></li><li><a href="Dong-Thap" title="Rao vặt tại Đồng Tháp">Đồng Tháp</a></li><li><a href="Hau-Giang" title="Rao vặt tại Hậu Giang">Hậu Giang</a></li><li><a href="Kien-Giang" title="Rao vặt tại Kiên Giang ">Kiên Giang </a></li><li><a href="Long-An" title="Rao vặt tại Long An">Long An</a></li><li><a href="Soc-Trang" title="Rao vặt tại Sóc Trăng ">Sóc Trăng </a></li><li><a href="Tay-Ninh" title="Rao vặt tại Tây Ninh ">Tây Ninh </a></li><li><a href="Tien-Giang" title="Rao vặt tại Tiền Giang ">Tiền Giang </a></li><li><a href="Tra-Vinh" title="Rao vặt tại Trà Vinh">Trà Vinh</a></li><li><a href="Vinh-Long" title="Rao vặt tại Vĩnh Long">Vĩnh Long</a></li></ul><a href="javascript:void(0)" class="other-province-btn" style="font-size:17px">Tỉnh khác</a></div></div>';
		this.boxy = new Boxy(html, {modal:true});
	},
    handleScroll:function()
	{
		if (this.processScroll){
			this.processScroll = false;
			this.offsetTop = $(window).scrollTop();
			//neu keo 100px thi load 2 box ke tiep
			if(parseInt(this.offsetTop) % 100 >= 0 && parseInt(this.offsetTop) % 100 < 10){
				if(this.current == 20) return;
				if(this.current < 10){
					this.buildcontinueTemplate();
				}else{
					if($('.cl-view-more').length == 0)
						$('.left-frame').append('<a class="cl-view-more" href="javascript:void(0)">Xem tất cả danh mục</a>');
				}
				$('.boxy-modal-blackout').height(3600);
			}
		}
		this.processScroll = true;
	},
	template:function()
	{
		
	},
	buildULtempalate:function(posts)
	{
		var html = [];
		for(var i = 0; i < posts.length; i++)
		{
			var post = posts[i];
			html.push('<li')
			if(i == posts.length -1)
				html.push(' class="end"');
			html.push('>');
			html.push('<div class="line tips"><span class="pic ');
			if(post.post_image == "" || post.post_image == null)
				html.push("pic-default");
			html.push('"');
			html.push('>');
			if(post.post_image != null)
				html.push('<img alt="" src="'+post.post_image+'">');
			html.push('</span><a class="detail" target="_blank" rel="'+post.summary+'" href="'+post.url+'">');
			if(typeof post.star != "undefined" && post.star == 1)
				html.push('<img src="'+Settings.imgurl+'/star.gif" alt="" class="img-star" width="14" height="14">');
			html.push(post.title+'</a></div></li>');
		}
		return html.join("");
	},
	buildtemplateBox:function(category, post)
	{
		var html = [];
			html.push('<li class="category-box"><a href="'+category.url+'" title="'+category.category_name+'" tracking="homepage_block_category_'+category.category_alias+'" tracking_category="homepage" class="title _trackLink"><span class="icon-'+category.category_icon+'"></span>'+category.category_name+'</a>');
			html.push('<ul class="list-content">'+this.buildULtempalate(post)+'</ul>');
			html.push('<div class="see-all"><span class="icon"></span><a href="'+category.url+'">Xem tất cả</a></div></li>');
		return html.join("");
	},
	initbuiltemplatePage:function()
	{
		this.blockBuild = 0;
		if(this.windowHeight > 720)
			this.blockBuild = 6;
		else this.blockBuild = 4;
		var html = [];
		for(var i = 0; i < this.blockBuild; i++)
		{
			var data = this.pageData[i];
			this.current++;
			html.push(this.buildtemplateBox(data.category, data.item));
		}
		$('.category-list').append(html.join(""));
	},
	buildcontinueTemplate:function()
	{
		var html = [];
		var next = this.current;
		if(this.current < this.pageData.length-1)
		{
			for(var i = this.current; i < next+2; i++)
			{
				var data = this.pageData[i];
				this.current++;
				html.push(this.buildtemplateBox(data.category, data.item));
			}
		}
		$('.category-list').append(html.join(""));
		$(".detail").simpletip({ fixed: true});
	},
	buildmoreTemplate:function(obj)
	{
		if(pagedefault.dataloadmore.length == 0)
		{
			$.ajax({
				url: Settings.baseurl+'/ajax/loadmore',
				type: 'GET',
				dataType:'json',
				success: function(data)
				{
					pagedefault.dataloadmore = data;
					pagedefault.buildSuccessData(obj, pagedefault.dataloadmore);		
				}
			});
		}else
		{
			pagedefault.buildSuccessData(obj, pagedefault.dataloadmore);		
		}
		$(".detail").simpletip({ fixed: true});
	},
	buildSuccessData:function(obj, data){
		$.unblockUI();
		obj.removeClass('cl-view-more-loading');
		var html = [];
		for(var i = 0; i < data.length; i++)
		{
			var dataItem = data[i];
			html.push(pagedefault.buildtemplateBox(dataItem.category, dataItem.item));
		}
		$('.cl-view-more').prev().append("<ul class='category-list category-list-more'>"+html.join("")+"</ul>");
		
		obj.text('Thu gọn lại');
	}
};

$(function()
{
	$(window).scroll(function()
	{
		pagedefault.handleScroll();
	});
	$('.other-province-btn').click(function(){
		if(pagedefault.statuspopup == "collapse"){
			$('.province ul').removeClass('collapse');
			$('.province ul').addClass('expand');
			$(this).html('Thu gọn');
			pagedefault.statuspopup = "expand";			
		}else{
			$('.province ul').removeClass('expand');
			$('.province ul').addClass('collapse');
			$(this).html('Tỉnh khác');
			pagedefault.statuspopup = "collapse";	
		}
	});
	$('.cl-view-more').live('click', function(){
		$(this).addClass('cl-view-more-loading');		
		if(pagedefault.statusblock == "collapse")
		{
			$.blockUI();
			$(this).text('');
			pagedefault.statusblock = 'expand';
			pagedefault.buildmoreTemplate($(this));
		}else
		{
			$(this).text('');
			pagedefault.statusblock = 'collapse';
			$('.category-list-more').remove();
			$(this).removeClass('cl-view-more-loading');
			$(this).text('Xem tất cả danh mục');
			pagedefault.current = 10;
		}
	});
});