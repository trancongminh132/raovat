var category = {
	showall:false
};
$(function()
{
	$('.view-more').live('click', function(){
		if(category.showall == false){
			$(this).text('» Xem danh sách thu gọn');
			category.showall = true;
		}else{
			$(this).text('» Xem tất cả tin nổi bật');
			category.showall = false;
		}
	});
});