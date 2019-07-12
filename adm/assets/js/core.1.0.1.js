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
		if(time != "")
		{
			var tmp = time.split('-');	
			var humDate = new Date(Date.UTC(tmp[2],(this.stripLeadingZeroes(tmp[1])-1),this.stripLeadingZeroes(tmp[0])));  
			return (humDate.getTime()/1000.0);
		}
		else
		{
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
	}
}