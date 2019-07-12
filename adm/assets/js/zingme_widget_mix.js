var widget_root_domain = "http://widget.me.zing.vn";

var wg_is_id = 0;
function fA(holder, value) {
	var obj = document.getElementById(holder);
	if (obj != null) {
		var _class = obj.getAttribute("a_class");
		var _width = obj.getAttribute("a_width");
		var _height = obj.getAttribute("a_height");
		if (_class != "") _class = "class='" + _class + "'";
		if (_width != "-1") _width = "width='" + _width + "'";
		if (_height != "-1") _class = "height='" + _height + "'";
		var ava = "<img " + _class + " " + _width + " src='" + value + "' onerror='this.src=\"" + widget_root_domain + "/images/160.gif\";' />";
		obj.innerHTML = ava;
	}
}

function fD(holder, value, v) {

	var obj = document.getElementById(holder);
	if (obj != null) {
		if(v == null || v == undefined)
			obj.innerHTML = value;
		else if(v == 1)
			obj.innerHTML = "<img src='http://img.me.zdn.vn/images/zme_iconsao_small.png'>" + value;
		else if(v == 2)
			obj.innerHTML = "<img src='http://img.me.zdn.vn/images/zme_iconbiz_small.png'>" + value;
		else
			obj.innerHTML = value;
	}
}

var _ZME_avatars_ = 0;

function writeLog(content) {
	if (window.console != undefined && window.console != null)
	{
		window.console.log(content);
	}
}

function ZME_pass(a,d,ai,di)
{
	var size = "160";
	if (window.zme_avatar_size != null && window.zme_avatar_size != undefined)
	{
		size = window.zme_avatar_size;
	}
	var url = widget_root_domain + "/api/widget?method=getMix&size=" + size + "&ava_list=" + a + "&display_list=" + d + "&ava_list_id=" + ai + "&display_list_id=" + di ;
	var script = document.createElement("script");
	script.setAttribute("src",url);
	script.setAttribute("type", "text/javascript");
	script.setAttribute("charset", "utf-8");
	var body_element = document.getElementsByTagName("body");
	body_element[0].appendChild(script);
}

var zme_avatar = function (path,width,height)
{
	this.Path = path;
	this.Width = width;
	this.Height = height;
}

function ZME_getParam(input,name)
{
	var arr = input.split("?");
	if(arr[1] != null)
	{
		var arr2 = arr[1].split("&");
		for(i=0;i<arr2.length;i++)
		{
			var arr3 = arr2[i].split("=");
			if(arr3[0] != null && arr3[0] == name) {
				return arr3[1];
			}
		}
	}
	return null;
}

function ZME_createDisplayNameObj(k,i,input)
{
	var _span = document.createElement('span');
	var _class = "";
	var _pos = input.indexOf("?");
	if(_pos != -1)
	{
		var temp;
		temp = ZME_getParam(input,"class");
		if(temp) _class=temp;

		temp = ZME_getParam(input, "id");
		if(temp && temp != 0) _is_id = 1;
		else _is_id = 0;
		input = input.substr(0,_pos);
	}
	else
		_is_id = 0;

	_span.setAttribute("class",_class);
	_span.id = "ZMED" + i;
	k[i].appendChild(_span);
	wg_is_id = _is_id;
	return input;
}

function ZME_createAvatar(k, i, input) {
	var _span = document.createElement('span');

	var _width = -1;
	var _height = -1;
	var _class = "";
	var _pos = input.indexOf("?");

	if (window.zme_avatar_width != null && window.zme_avatar_width != undefined) {
		_width = zme_avatar_width;
	}
	if (window.zme_avatar_heigth != null && window.zme_avatar_heigth != undefined) {
		_height = zme_avatar_heigth;
	}

	if (_pos != -1) {
		var temp;
		temp = ZME_getParam(input, "width");
		if (temp) _width = temp;
		temp = ZME_getParam(input, "height");
		if (temp) _height = temp;
		temp = ZME_getParam(input, "class");
		if (temp) _class = temp;

		temp = ZME_getParam(input, "id");
		if(temp && temp != 0) _is_id = 1;
		else _is_id = 0;

		input = input.substr(0, _pos);
	}
	else
		_is_id = 0;

	_span.setAttribute("a_class", _class);
	_span.setAttribute("a_width", _width);
	_span.setAttribute("a_height", _height);

	_span.id = "ZMEA" + i;
	k[i].appendChild(_span);
	wg_is_id = _is_id;
	return input;
}

function ZME_strip(input)
{
	var _pos = input.indexOf("#");
	if(_pos != -1) return input.substr(0,_pos);
	else return input;
}

function ZME_widget_mix()
{
	var t = "a";
	if(window.zme_avatar_tag != null && window.zme_avatar_tag != undefined)
	{
		t = window.zme_avatar_tag;
	}

	var k = document.getElementsByTagName(t);
	var avatars_holder = new Array();
	var avatars_holder_id = new Array();
	var display_holder = new Array();
	var display_holder_id = new Array();
	var temp;
	var j = 0;
	var j_d = 0;
	for (var i=0; i<k.length; i++)
	{
		var att =  k[i].getAttribute("rel");
		var att_f = k[i].getAttribute("rel_f");
		if (att && (att_f == null))
		{
			var Me = att.substr(0,5).toUpperCase();
			var Usn =  att.substr(5) ;
			if (Me=="ZMEA_")
			{
				temp = ZME_createAvatar(k, i, Usn);
				k[i].setAttribute("rel_f", "1");
				if(wg_is_id == 1)
				{
					if (checkHolder(avatars_holder_id, temp))
					{
						avatars_holder_id[temp] += "ZMEA" + i + "|";
					}
					else
					{
						avatars_holder_id[temp] = "ZMEA" + i + "|";
					}
				}
				else
				{
					if (checkHolder(avatars_holder, temp))
					{
						avatars_holder[temp] += "ZMEA" + i + "|";
					}
					else
					{
						avatars_holder[temp] = "ZMEA" + i + "|";
					}
				}
			}
			else if(Me == "ZMED_") {
				temp = ZME_createDisplayNameObj(k,i,Usn);
				k[i].setAttribute("rel_f","1");
				if(wg_is_id == 1)
				{
					if (checkHolder(display_holder_id, temp)) {
						display_holder_id[temp] += "ZMED" + i + "|";
					}
					else {
						display_holder_id[temp] = "ZMED" + i + "|";
					}
				}
				else
				{
					if (checkHolder(display_holder, temp)) {
						display_holder[temp] += "ZMED" + i + "|";
					}
					else {
						display_holder[temp] = "ZMED" + i + "|";
					}
				}
			}
		}
	}

	var a_l = "";
	var a_i = "";
	var d_l = "";
	var d_i = "";
	var i = 0;
	var key;
	for(key in avatars_holder)
		a_l += key + "?" + avatars_holder[key] + ",";
	for(key in avatars_holder_id)
		a_i += key + "?" + avatars_holder_id[key] + ",";
	for (key in display_holder)
		d_l += key + "?" + display_holder[key] + ",";
	for (key in display_holder_id)
		d_i += key + "?" + display_holder_id[key] + ",";
	ZME_pass(a_l,d_l,a_i,d_i);
}

function checkHolder(arr, acc)
{
	for (var a in arr)
	{
		if (a == acc) {
			return true;
		}
	}
	return false;
}

if(window.zme_avatar_auto != null && window.zme_avatar_auto != undefined && window.zme_avatar_auto == "off")
{
}
else
{
	window.onload = ZME_widget_mix;
}
///////