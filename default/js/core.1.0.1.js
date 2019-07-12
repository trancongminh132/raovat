var Core123M = {
    fn: {
        fill2: function (a) {
            return 10 > a ? "0" + a : a
        }
    },
    executeFunctionByName: function (a, b) {
        for (var c = Array.prototype.slice.call(arguments).splice(2), e = a.split("."), f = e.pop(), k = 0; k < e.length; k++) b = b[e[k]];
        return b[f].apply(this, c)
    },
    urlEncode: function () {},
    getCookie: function (a) {
        var b = document.cookie.indexOf(a + "="),
            c = b + a.length + 1;
        if (!b && a != document.cookie.substring(0, a.length) || -1 == b) return null;
        a = document.cookie.indexOf(";", c); - 1 == a && (a = document.cookie.length);
        return unescape(document.cookie.substring(c, a))
    },
    setCookie: function (a, b, c, e, f) {
        var c = 1,
            k = 0;
        if ("null" != typeof val && null != val) {
            var n = val.split(";");
            for (i = 0; i < n.length; i++) n[i] == b && (k = 1);
            if (1 == k) return $("#order_cart").myBoxy(Boxy, {
                type: "success",
                title: "Th\u00f4ng b\u00e1o t\u1eeb h\u1ec7 th\u1ed1ng",
                message: "S\u1ea3n ph\u1ea9m n\u00e0y \u0111\u00e3 t\u1ed3n t\u1ea1i trong gi\u1ecf h\u00e0ng c\u1ee7a b\u1ea1n!"
            }), 1;
            b = b + ";" + val
        }
        k = new Date;
        k.setTime(k.getTime());
        c && (c *= 864E5);
        k = new Date(k.getTime() + c);
        document.cookie = a + "=" + escape(b) + (c ? ";expires=" + k.toGMTString() : "") + (e ? ";path=" + e : "") + (f ? ";domain=" + f : "");
        return 0
    },
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
},
    GMap = {
        mapLoaded: !1,
        options: {
            src: "",
            elementId: "map_canvas",
            longitude: 0,
            latitude: 0,
            address: "",
            marker: {
                img: "",
                title: ""
            },
            shopInfo: "",
			markersArray : [],
            afterScriptLoaded: function () {}
        },
        initLoader: function (a) {
            $.extend(this.options, a);
            if ("" == this.options.src) return !1;
            if (GMap.mapLoaded) Core123M.executeFunctionByName(this.options.afterScriptLoaded, window, arguments);
            else {
                var b =
                document.createElement("script");
                b.src = this.options.src + "&callback=" + this.options.afterScriptLoaded;
                b.type = "text/javascript";
                document.body.appendChild(b);
                GMap.mapLoaded = !0
            }
        },
        showMaps: function () 
		{
            if (0 == GMap.options.latitude && 0 == GMap.options.longitude) {
                if ("" == GMap.options.address) return alert("Map is not enough info"), !1;
                GMap.getLatLng(GMap.options.address)
            } else GMap.loadMaps()
        },
        loadMaps: function () 
		{ 
            var a = {
                center: new google.maps.LatLng(GMap.options.latitude, GMap.options.longitude),
                zoom: 17,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
			var rendererOptions = {
				draggable: true
			};		
			directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);          
			google_map = new google.maps.Map(document.getElementById(GMap.options.elementId), a);
            geocoder = new google.maps.Geocoder;
            directionsDisplay.setMap(google_map);
            google.maps.event.addListener(directionsDisplay, "directions_changed", function () {
                GMap.computeTotalDistance(directionsDisplay.directions)
            });
            var a = new google.maps.LatLng(GMap.options.latitude, GMap.options.longitude),
                b = new google.maps.MarkerImage(this.options.marker.img, new google.maps.Size(48, 48), new google.maps.Point(0, 0), new google.maps.Point(0, 48)),
                c = new google.maps.Marker({
                    map: google_map,
                    icon: b,
                    animation: google.maps.Animation.DROP,
                    title: this.options.marker.title,
                    position: new google.maps.LatLng(this.options.latitude, this.options.longitude)
                });
            info_window = new google.maps.InfoWindow({
                content: ""
            });
            geocoder.geocode({
                latLng: a
            }, function(results, status) {
				if(status == google.maps.GeocoderStatus.OK) {
					if(results[0]) 
					{
						info_window.setContent('Vị trí tin rao : '+results[0].formatted_address.replace('Ho Chi Minh City, Vietnam', 'Tp Hồ Chí Minh'))
						info_window.open(google_map, c);
					}
					else {
						post.address = "No results";
					}
				}
				else {
					post.address = status;
				}
			});			
            google.maps.event.addListener(google_map, "click", function (a) {
                a = a.latLng;
                c.setMap(null);
                GMap.placeMarker(a);
				console.log(c);
            });
			c.setDraggable (true);
			GMap.options.markersArray.push(c);
			
            google.maps.event.addListener(c, "click", function (a) {
				var point = c.getPosition();
                geocoder.geocode({
                    latLng: a.latLng
                }, function () {
                    info_window.open(google_map, c)
                })
				latitude = point.lat().toFixed(5);
				longitude = point.lng().toFixed(5);
				$('#latitude').val(e.lat());
				$('#longitude').val(e.lng());
            });
			google.maps.event.addListener(c, "dragend", function(event) 
    	    {
	    	   var point = c.getPosition();
	    	   google_map.panTo(point);
	    	   geocoder.geocode({'latLng': point}, function(results, status)
	    	   {    
		    	   	var str = results[0].formatted_address ;
	    	    	info_window.setContent('Bạn đang ở : ' +str.replace('Ho Chi Minh City, Vietnam', 'Tp Hồ Chí Minh'));
	    	        info_window.open(google_map, c);       
	    	   });
	    	   	latitude = point.lat().toFixed(5);
				longitude = point.lng().toFixed(5);
				$('#longitude').val(longitude);
				$('#latitude').val(latitude);
    	    });
            this.mapLoaded = !0
        },
        getLatLng: function (a) {
            (new google.maps.Geocoder).geocode({
                address: a
            }, function (a, c) {
                if (c == google.maps.GeocoderStatus.OK) {
                    var e = a[0].geometry.location;
                    GMap.options.longitude = e.lng();
                    GMap.options.latitude = e.lat();
                    GMap.loadMaps()
                }
            })
        },
		getAddress : function(latLng) 
		{
			geocoder.geocode({'latLng': latLng},
			function(results, status) {
				if(status == google.maps.GeocoderStatus.OK) {
					if(results[0]) 
					{
						post.address  = results[0].formatted_address;
					}
					else {
						post.address = "No results";
					}
				}
				else {
					post.address = status;
				}
			});
		},
        direction: function (a, b, c) {
            1 == c ? a += " ,Tp H\u1ed3 Ch\u00ed Minh" : a += " ,Tp H\u00e0 N\u1ed9i";
            directionsService.route({
                origin: a,
                destination: b,
                travelMode: google.maps.DirectionsTravelMode.WALKING
            }, function (a, b) {
                if(b == google.maps.DirectionsStatus.OK)
					directionsDisplay.setDirections(a);
            })
        },
        placeMarker: function (a) 
		{
			var marker = new google.maps.Marker();
			
            new google.maps.LatLng(a);
            marker = new google.maps.Marker({
                position: a,
                map: google_map
            });
			
            google_map.panTo(a);
            geocoder.geocode({
                latLng: a
            }, function (a) {
				var  info_window = new google.maps.InfoWindow({content: "loading"});
                info_window.setContent("B\u1ea1n \u0111ang \u1edf : " + a[0].formatted_address.replace("Ho Chi Minh City, Vietnam", "TP H\u1ed3 Ch\u00ed Minh"));
                info_window.open(google_map, marker);
				    var e = a[0].geometry.location;
					$('#latitude').val(e.lat());
					$('#longitude').val(e.lng());
            });
            google_map.setCenter(a)
        },
        search: function (a) {
            (new google.maps.Geocoder).geocode({
                address: a
            }, function (a, c) {
                if (c == google.maps.GeocoderStatus.OK) {
                    var e = a[0].geometry.location;
					$('#latitude').val(e.lat());
					$('#longitude').val(e.lng());
                    GMap.options.longitude = e.lng();
                    GMap.options.latitude = e.lat();
                    GMap.placeMarker(e)
                }
            })
        },
        computeTotalDistance: function (a) {
            var b = 0,
                a = a.routes[0];
            for (i = 0; i < a.legs.length; i++) b += a.legs[i].distance.value;
            b /= 1E3;
            document.getElementById("total_distance").innerHTML = b + " km"
        },
		clearOverlay:function(){
			if (GMap.options.markersArray) {
				for (var i = 0; i < GMap.options.markersArray.length; i++ ) {
					GMap.options.markersArray[i].setMap(null);
				}
				GMap.options.markersArray = new Array();
			}
		}
    };
(function (a, b) {
    function c(a) {
        return a
    }
    function e(a) {
        return decodeURIComponent(a.replace(f, " "))
    }
    var f = /\+/g;
    a.cookie = function (f, n, q) {
        if (1 < arguments.length && (!/Object/.test(Object.prototype.toString.call(n)) || null == n)) {
            q = a.extend({}, a.cookie.defaults, q);
            null == n && (q.expires = -1);
            if ("number" === typeof q.expires) {
                var g = q.expires,
                    p = q.expires = new Date;
                p.setDate(p.getDate() + g)
            }
            n = String(n);
            return b.cookie = [encodeURIComponent(f), "=", q.raw ? n : encodeURIComponent(n), q.expires ? "; expires=" + q.expires.toUTCString() : "", q.path ? "; path=" + q.path : "", q.domain ? "; domain=" + q.domain : "", q.secure ? "; secure" : ""].join("")
        }
        for (var q = n || a.cookie.defaults || {}, g = q.raw ? c : e, p = b.cookie.split("; "), s = 0, r; r = p[s] && p[s].split("="); s++) if (g(r.shift()) === f) return g(r.join("="));
        return null
    };
    a.cookie.defaults = {}
})(jQuery, document);
(function (a) {
    a.fn.shuffle = function () {
        return this.each(function () {
            var b = a(this).children().clone(!0);
            return b.length ? a(this).html(a.shuffle(b)) : this
        })
    };
    a.shuffle = function (a) {
        for (var c, e, f = a.length; f; c = parseInt(Math.random() * f), e = a[--f], a[f] = a[c], a[c] = e);
        return a
    }
})(jQuery);
(function (a) {
    var b = {
        topSpacing: 5,
        bottomSpacing: 700,
        className: "is-sticky",
        wrapperClassName: "sticky-wrapper"
    },
        c = a(window),
        e = a(document),
        f = [],
        k = c.height(),
        n = function () {
            for (var a = c.scrollTop(), b = e.height(), n = b - k, n = a > n ? n - a : 0, q = 0; q < f.length; q++) {
                var g = f[q],
                    y = g.stickyWrapper.offset().top - g.topSpacing - n;
                a <= y ? null !== g.currentTop && (g.stickyElement.css("position", "").css("top", "").removeClass(g.className), g.stickyElement.parent().removeClass(g.className), g.currentTop = null) : (y = b - g.stickyElement.outerHeight() - g.topSpacing - g.bottomSpacing - a - n, y = 0 > y ? y + g.topSpacing : g.topSpacing, g.currentTop != y && (g.stickyElement.css("position", "fixed").css("top", y).addClass(g.className), g.stickyElement.parent().addClass(g.className), g.currentTop = y))
            }
        },
        q = function () {
            k = c.height()
        },
        g = {
            init: function (c) {
                var e = a.extend(b, c);
                return this.each(function () {
                    var b = a(this);
                    stickyId = b.attr("id");
                    var c = a("<div></div>").attr("id", stickyId + "-sticky-wrapper").addClass(e.wrapperClassName);
                    b.wrapAll(c);
                    c = b.parent();
                    c.css("height", b.outerHeight());
                    f.push({
                        topSpacing: e.topSpacing,
                        bottomSpacing: e.bottomSpacing,
                        stickyElement: b,
                        currentTop: null,
                        stickyWrapper: c,
                        className: e.className
                    })
                })
            },
            update: n
        };
    window.addEventListener ? (window.addEventListener("scroll", n, !1), window.addEventListener("resize", q, !1)) : window.attachEvent && (window.attachEvent("onscroll", n), window.attachEvent("onresize", q));
    a.fn.sticky = function (b) {
        if (g[b]) return g[b].apply(this, Array.prototype.slice.call(arguments, 1));
        if (typeof b === "object" || !b) return g.init.apply(this, arguments);
        a.error("Method " + b + " does not exist on jQuery.sticky")
    };
    a(function () {
        setTimeout(n, 0)
    })
})(jQuery);
$.fn.boxy = function (a) {
    a = a || {};
    return this.each(function () {
        var b = this.nodeName.toLowerCase(),
            c = this;
        "a" == b ? $(this).click(function () {
            var b = Boxy.linkedTo(this),
                f = this.getAttribute("href"),
                c = $.extend({
                    actuator: this,
                    title: this.title
                }, a);
            f.match(/(&|\?)boxy\.modal/) && (c.modal = !0);
            b ? b.show() : 0 <= f.indexOf("#") ? (b = $(f.substr(f.indexOf("#"))), f = b.clone(!0), b.remove(), c.unloadOnHide = !1, new Boxy(f, c)) : f.match(/\.(jpe?g|png|gif|bmp)($|\?)/i) ? (c.unloadOnHide = !0, Boxy.loadImage(this.href, c)) : (c.cache || (c.unloadOnHide = !0), Boxy.load(this.href, c));
            return !1
        }) : "form" == b && $(this).bind("submit.boxy", function () {
            Boxy.confirm(a.message || "Please confirm:", function () {
                $(c).unbind("submit.boxy").submit()
            });
            return !1
        })
    })
};

function Boxy(a, b) {
    this.boxy = $(Boxy.WRAPPER);
    $.data(this.boxy[0], "boxy", this);
    this.visible = !1;
    this.options = $.extend({}, Boxy.DEFAULTS, b || {});
    this.options.modal && (this.options = $.extend(this.options, {
        center: !0,
        draggable: !1
    }));
    this.options.actuator && $.data(this.options.actuator, "active.boxy", this);
    this.setContent(a || "<div></div>");
    this._setupTitleBar();
    this.boxy.css("display", "none").appendTo(document.body);
    this.toTop();
    this.options.fixed && (Boxy.IE6 ? this.options.fixed = !1 : this.boxy.addClass("fixed"));
    this.options.center && Boxy._u(this.options.x, this.options.y) ? this.center() : this.moveTo(Boxy._u(this.options.x) ? Boxy.DEFAULT_X : this.options.x, Boxy._u(this.options.y) ? Boxy.DEFAULT_Y : this.options.y);
    this.options.show && this.show()
}
Boxy.EF = function () {};
$.extend(Boxy, {
    WRAPPER: "<table cellspacing='0' cellpadding='0' border='0' class='boxy-wrapper'><tr><td class='boxy-left'></td><td class='boxy-inner'></td><td class='boxy-right'></td></tr></table>",
    DEFAULTS: {
        title: null,
        closeable: !0,
        draggable: !0,
        clone: !1,
        actuator: null,
        center: !0,
        show: !0,
        modal: !1,
        fixed: !0,
        closeText: "[close]",
        unloadOnHide: !1,
        clickToFront: !1,
        behaviours: Boxy.EF,
        afterDrop: Boxy.EF,
        afterShow: Boxy.EF,
        afterHide: Boxy.EF,
        beforeUnload: Boxy.EF,
        hideFade: !1,
        hideShrink: ""
    },
    IE6: $.browser.msie && 7 > $.browser.version,
    DEFAULT_X: 50,
    DEFAULT_Y: 50,
    MODAL_OPACITY: 0.85,
    zIndex: 1337,
    dragConfigured: !1,
    resizeConfigured: !1,
    dragging: null,
    load: function (a, b) {
        var b = b || {},
            c = {
                url: a,
                type: "GET",
                dataType: "html",
                cache: !1,
                success: function (a) {
                    a = $(a);
                    b.filter && (a = $(b.filter, a));
                    new Boxy(a, b)
                }
            };
        $.each(["type", "cache"], function () {
            this in b && (c[this] = b[this], delete b[this])
        });
        $.ajax(c)
    },
    loadImage: function (a, b) {
        var c = new Image;
        c.onload = function () {
            new Boxy($('<div class="boxy-image-wrapper"/>').append(this), b)
        };
        c.src = a
    },
    get: function (a) {
        a = $(a).parents(".boxy-wrapper");
        return a.length ? $.data(a[0], "boxy") : null
    },
    linkedTo: function (a) {
        return $.data(a, "active.boxy")
    },
    alert: function (a, b, c) {
        return Boxy.ask(a, ["OK"], b, c)
    },
    confirm: function (a, b, c) {
        return Boxy.ask(a, ["OK", "Cancel"], function (a) {
            "OK" == a && b()
        }, c)
    },
    ask: function (a, b, c, e) {
        var e = $.extend({
            modal: !0,
            closeable: !1
        }, e || {}, {
            show: !0,
            unloadOnHide: !0
        }),
            a = $("<div></div>").append($('<div class="question"></div>').html(a)),
            f = $('<form class="answers"></form>');
        f.html($.map(Boxy._values(b), function (a) {
            return "<input type='button' value='" + a + "' />"
        }).join(" "));
        $("input[type=button]", f).click(function () {
            var a = this;
            Boxy.get(this).hide(function () {
                c && $.each(b, function (f, e) {
                    if (e == a.value) return c(b instanceof Array ? e : f), !1
                })
            })
        });
        a.append(f);
        new Boxy(a, e)
    },
    isModalVisible: function () {
        return 0 < $(".boxy-modal-blackout").length
    },
    _u: function () {
        for (var a = 0; a < arguments.length; a++) if ("undefined" != typeof arguments[a]) return !1;
        return !0
    },
    _values: function (a) {
        if (a instanceof Array) return a;
        var b = [],
            c;
        for (c in a) b.push(a[c]);
        return b
    },
    _handleResize: function () {
        $(".boxy-modal-blackout").css("display", "none").css(Boxy._cssForOverlay()).css("display", "block")
    },
    _handleDrag: function (a) {
        var b;
        (b = Boxy.dragging) && b[0].boxy.css({
            left: a.pageX - b[1],
            top: a.pageY - b[2]
        })
    },
    _nextZ: function () {
        return Boxy.zIndex++
    },
    _viewport: function () {
        var a = document.documentElement,
            b = document.body,
            c = window;
        return $.extend($.browser.msie ? {
            left: b.scrollLeft || a.scrollLeft,
            top: b.scrollTop || a.scrollTop
        } : {
            left: c.pageXOffset,
            top: c.pageYOffset
        }, !Boxy._u(c.innerWidth) ? {
            width: c.innerWidth,
            height: c.innerHeight
        } : !Boxy._u(a) && !Boxy._u(a.clientWidth) && 0 != a.clientWidth ? {
            width: a.clientWidth,
            height: a.clientHeight
        } : {
            width: b.clientWidth,
            height: b.clientHeight
        })
    },
    _setupModalResizing: function () {
        if (!Boxy.resizeConfigured) {
            var a = $(window).resize(Boxy._handleResize);
            Boxy.IE6 && a.scroll(Boxy._handleResize);
            Boxy.resizeConfigured = !0
        }
    },
    _cssForOverlay: function () {
        return Boxy.IE6 ? Boxy._viewport() : {
            width: "100%",
            height: $(document).height()
        }
    }
});
Boxy.prototype = {
    estimateSize: function () {
        this.boxy.css({
            visibility: "hidden",
            display: "block"
        });
        var a = this.getSize();
        this.boxy.css("display", "none").css("visibility", "visible");
        return a
    },
    getSize: function () {
        return [this.boxy.width(), this.boxy.height()]
    },
    getContentSize: function () {
        var a = this.getContent();
        return [a.width(), a.height()]
    },
    getPosition: function () {
        var a = this.boxy[0];
        return [a.offsetLeft, a.offsetTop]
    },
    getCenter: function () {
        var a = this.getPosition(),
            b = this.getSize();
        return [Math.floor(a[0] + b[0] / 2), Math.floor(a[1] + b[1] / 2)]
    },
    getInner: function () {
        return $(".boxy-inner", this.boxy)
    },
    getContent: function () {
        return $(".boxy-content", this.boxy)
    },
    setContent: function (a) {
        a = $(a).css({
            display: "block"
        }).addClass("boxy-content");
        this.options.clone && (a = a.clone(!0));
        this.getContent().remove();
        this.getInner().append(a);
        this._setupDefaultBehaviours(a);
        this.options.behaviours.call(this, a);
        return this
    },
    moveTo: function (a, b) {
        this.moveToX(a).moveToY(b);
        return this
    },
    moveToX: function (a) {
        "number" == typeof a ? this.boxy.css({
            left: a
        }) : this.centerX();
        return this
    },
    moveToY: function (a) {
        "number" == typeof a ? this.boxy.css({
            top: a
        }) : this.centerY();
        return this
    },
    centerAt: function (a, b) {
        var c = this[this.visible ? "getSize" : "estimateSize"]();
        "number" == typeof a && this.moveToX(a - c[0] / 2);
        "number" == typeof b && this.moveToY(b - c[1] / 2);
        return this
    },
    centerAtX: function (a) {
        return this.centerAt(a, null)
    },
    centerAtY: function (a) {
        return this.centerAt(null, a)
    },
    center: function (a) {
        var b = Boxy._viewport(),
            c = this.options.fixed ? [0, 0] : [b.left, b.top];
        (!a || "x" == a) && this.centerAt(c[0] + b.width / 2, null);
        (!a || "y" == a) && this.centerAt(null, c[1] + b.height / 2);
        return this
    },
    centerX: function () {
        return this.center("x")
    },
    centerY: function () {
        return this.center("y")
    },
    resize: function (a, b, c) {
        if (this.visible) return a = this._getBoundsForResize(a, b), this.boxy.css({
            left: a[0],
            top: a[1]
        }), this.getContent().css({
            width: a[2],
            height: a[3]
        }), c && c(this), this
    },
    tween: function (a, b, c) {
        if (this.visible) {
            var a = this._getBoundsForResize(a, b),
                e = this;
            this.boxy.stop().animate({
                left: a[0],
                top: a[1]
            });
            this.getContent().stop().animate({
                width: a[2],
                height: a[3]
            }, function () {
                c && c(e)
            });
            return this
        }
    },
    isVisible: function () {
        return this.visible
    },
    show: function () {
        if (!this.visible) {
            if (this.options.modal) {
                var a = this;
                Boxy._setupModalResizing();
                this.modalBlackout = $('<div class="boxy-modal-blackout"></div>').css($.extend(Boxy._cssForOverlay(), {
                    zIndex: Boxy._nextZ(),
                    opacity: Boxy.MODAL_OPACITY
                })).appendTo(document.body);
                this.toTop();
                this.options.closeable && $(document.body).bind("keypress.boxy", function (b) {
                    if (27 == (b.which || b.keyCode)) a.hide(), $(document.body).unbind("keypress.boxy")
                })
            }
            this.getInner().stop().css({
                width: "",
                height: ""
            });
            this.boxy.stop().css({
                opacity: 1
            }).show();
            this.visible = !0;
            this.boxy.find(".close:first").focus();
            this._fire("afterShow");
            return this
        }
    },
    hide: function (a) {
        if (this.visible) {
            var b = this;
            this.options.modal && ($(document.body).unbind("keypress.boxy"), this.modalBlackout.animate({
                opacity: 0
            }, function () {
                $(this).remove()
            }));
            var c = {},
                e = {},
                f = 0,
                k = function () {
                    b.boxy.css({
                        display: "none"
                    });
                    b.visible = false;
                    b._fire("afterHide");
                    a && a(b);
                    b.options.unloadOnHide && b.unload()
                };
            if (this.options.hideShrink) {
                var n = this.getInner(),
                    q = this.options.hideShrink,
                    g = this.getPosition(),
                    f = f | 1;
                if (!0 === q || "vertical" == q) e.height = 0, c.top = g[1] + n.height() / 2;
                if (!0 === q || "horizontal" == q) e.width = 0, c.left = g[0] + n.width() / 2
            }
            this.options.hideFade && (f |= 2, c.opacity = 0);
            f ? (f & 1 && n.stop().animate(e, 300), this.boxy.stop().animate(c, 300, k)) : k();
            return this
        }
    },
    toggle: function () {
        this[this.visible ? "hide" : "show"]();
        return this
    },
    hideAndUnload: function (a) {
        this.options.unloadOnHide = !0;
        this.hide(a);
        return this
    },
    unload: function () {
        this._fire("beforeUnload");
        this.boxy.remove();
        this.options.actuator && $.data(this.options.actuator, "active.boxy", !1)
    },
    toTop: function () {
        this.boxy.css({
            zIndex: Boxy._nextZ()
        });
        return this
    },
    getTitle: function () {
        return $("> .title-bar h2", this.getInner()).html()
    },
    setTitle: function (a) {
        $("> .title-bar h2", this.getInner()).html(a);
        return this
    },
    _getBoundsForResize: function (a, b) {
        var c = this.getContentSize(),
            c = [a - c[0], b - c[1]],
            e = this.getPosition();
        return [Math.max(e[0] - c[0] / 2, 0), Math.max(e[1] - c[1] / 2, 0), a, b]
    },
    _setupTitleBar: function () {
        if (this.options.title) {
            var a =
            this,
                b = $("<div class='title-bar'></div>").html("<h2>" + this.options.title + "</h2>");
            this.options.closeable && b.append($("<a href='#' class='close'></a>").html(this.options.closeText));
            this.options.draggable && (b[0].onselectstart = function () {
                return !1
            }, b[0].unselectable = "on", b[0].style.MozUserSelect = "none", Boxy.dragConfigured || ($(document).mousemove(Boxy._handleDrag), Boxy.dragConfigured = !0), b.mousedown(function (b) {
                a.toTop();
                Boxy.dragging = [a, b.pageX - a.boxy[0].offsetLeft, b.pageY - a.boxy[0].offsetTop];
                $(this).addClass("dragging")
            }).mouseup(function () {
                $(this).removeClass("dragging");
                Boxy.dragging = null;
                a._fire("afterDrop")
            }));
            this.getInner().prepend(b);
            this._setupDefaultBehaviours(b)
        }
    },
    _setupDefaultBehaviours: function (a) {
        var b = this;
        this.options.clickToFront && a.click(function () {
            b.toTop()
        });
        $(".close", a).click(function () {
            b.hide();
            return !1
        }).mousedown(function (a) {
            a.stopPropagation()
        })
    },
    _fire: function (a) {
        this.options[a].call(this)
    }
};
/*
* myboxy.js
*/
$.fn.myBoxy = function (popup, options) {
    myoptions = jQuery.extend ({
        title: "Thông báo từ Raovat.123Mua.vn",
        message: "",
        type: "alert",
        refresh: false,
        modal: true,
		afterHide:function(){},
        callback: function(){},
		unloadOnHide:true
    }, options);
	
    var content ='<div class="popup" style="width:460px;margin:0 auto">'+
    '<div class="title-popup">'+
    '<span>'+myoptions.title+'</span>';
	
    if(myoptions.refresh==true)
    {	
    	content		+= '<a title="Đóng lại" class="btn-close close" onclick="Boxy.get(this).hide();location.reload();"><img src="'+Settings.imgurl+'/boxy/close_boxy.png" width="18" height="17" alt="Đóng lại" /></a>';
    }
    else
    {
    	content		+= '<a title="Đóng lại" class="btn-close close" onclick="Boxy.get(this).hide();"><img src="'+Settings.imgurl+'/boxy/close_boxy.png" width="18" height="17" alt="Đóng lại"/></a>';
    }
	
    content		+='</div>'+'<div class="content-popup">';

    
    if(myoptions.type=='alert')
    {
        content += '<div class="bar-notice notice-warning"><span class="ico"></span>'+myoptions.message+'</div><div class="clear"></div>';
    }
    if(myoptions.type=='success')
    {
        content += '<div class="bar-notice notice-sucess"><span class="ico"></span>'+myoptions.message+'</div><div class="clear"></div>';
    }
    else if(myoptions.type=='confirm')
    {
        content += '<div class="bar-notice notice-confirm"><span class="ico"></span>'+myoptions.message+'</div><div class="clear"></div>';
    }
	 else if(myoptions.type=='error')
    {
        content += '<div class="bar-notice notice-error"><span class="ico"></span>'+myoptions.message+'</div><div class="clear"></div>';
    }
	else if(myoptions.type=='message' || myoptions.type=='loading')
    {
        content += '<div>'+myoptions.message+'</div>';
    }				
    content += '</div>';
	

    if(myoptions.type=='alert' || myoptions.type=='success' || myoptions.type=='message')
    {
    	content +=	'<div class="footer-popup">'+'<div class="btn-default">';
	    if(myoptions.refresh==true)
	    {	
	    	content		+= '<input class="btn-cancel close" type="button" onclick="Boxy.get(this).hide();location.reload();" value="Đóng lại" />';
	    }
	    else
	    {
	    	content		+= '<input class="btn-cancel close" type="button" onclick="Boxy.get(this).hide();" value="Đóng lại" />';
	    }
	    content += '</div>';
    }
    else if(myoptions.type=='confirm')
    {
        content +=  '<div class="footer-popup">' +
		'<div class="btn-default btn-double"><input id="accept" class="btn-accept" name="" type="button" value="Đồng ý" />'+
		'<input id="reject" class="btn-cancel close" name="" onclick="Boxy.get(this).hide();" type="button" value="Hủy bỏ" /></div>'+
		'</div>';
    }
    else if(myoptions.type=='loading')
    {
    	content +=  '<div class="footer-popup">';
    }
    content += '</div>';
    new popup(content, myoptions);

    if(myoptions.type=='confirm')
    {
        $("#accept").click(myoptions.callback);
    }
        
    return false;
};
(function (a) {
    function b(b, e) {
        a("." + b).each(function () {
            var b = a(this).find(".styleSelect_item");
            a(this).find("span").each(function () {
                var b = a(this).attr("class");
                ("passiveSelect" == b || "activeSelect" == b) && a(this).remove()
            });
            var c = a(this).find(".selected");
            a("<span></span>").text(c.text()).attr("id", c.parent().attr("id")).addClass("passiveSelect").appendTo(a(this));
            0 === e && a(this).css({
                width: b.width()
            })
        });
        a("." + b + " span").each(function () {
            a(this).attr("id") && (a(this).removeClass(), a(this).addClass("activeSelect"))
        })
    }
    a.fn.styleSelect = function (c) {
        var e = a.extend({}, a.fn.styleSelect.defaults, c);
        return this.each(function () {
            mainSelect = a(this);
            var f = mainSelect.attr("name"),
                c = f.replace(/\[.*\]/, ""),
                n = mainSelect.attr("tabindex"),
                q = "selectbox_" + c + (new Date).getTime();
            mainSelect.hide();
            c = a('<div tabindex="' + n + '"></div>').css({
                position: "relative",
                "z-index": parseInt(1E3 - n)
            }).addClass(e.styleClass).attr("id", q).insertBefore(mainSelect);
            a('<div class="styleSelect_item"></div>').appendTo(c).css({
                position: "absolute",
                "z-index": "" + parseInt(500 - n) + "",
                top: e.optionsTop,
                left: e.optionsLeft
            }).hide();
            a('<div class="styleSelect_item_start"></div><div class="styleSelect_item_content"></div><div class="styleSelect_item_end">').appendTo(a("#" + q + " .styleSelect_item"));
            var n = a("<ul></ul>").appendTo(a("#" + q + " .styleSelect_item_content")),
                g = "";
            mainSelect.find("option").each(function () {
                g += '<li id="' + a(this).val() + '"';
                a(this).attr("class") && (g += ' class="' + a(this).attr("class") + '" ');
                g += ">";
                g += '<span style="display: block;"';
                a(this).attr("selected") && (g += ' class="selected" ');
                g += ">";
                g += a(this).text();
                g += "</span>";
                g += "</li>"
            });
            n.append(g);
            b(e.styleClass, e.optionsWidth);
            a("#" + q).click(function (b) {
                a(b.target).parents(".jspVerticalBar").attr("class") || a(this).find(".styleSelect_item").slideToggle(e.speed, function () {
                    if ("none" != a(this).css("display") && 1 == e.jScrollPane) {
                        a(this).find(".styleSelect_item_content").jScrollPane(e.jScrollPaneOptions);
                        var b = a(".styleSelect_item_content").data("jsp"),
                            f = a(".styleSelect_item_content").height(),
                            c = a(".styleSelect_item_content .selected").position();
                        c.top && null != b && c.top > f ? b.scrollTo(0, parseInt(c.top - f / 2)) : c.top && c.top < f ? b.scrollTo(0, parseInt(c.top - f)) : null != b && b.scrollTo(0, 0)
                    }
                })
            });
            a("#" + q + " li").click(function () {
                p(a(this))
            });
            a("#" + q).keydown(function (b) {
                var f = a(this).find(".selected").parent();
                if (1 == e.jScrollPane) var c = a(".styleSelect_item_content").data("jsp"),
                    k = a(".styleSelect_item_content").height();
                if (40 == b.keyCode || 39 == b.keyCode) {
                    var n = f.next();
                    if (0 < n.index() && null != c && "none" != a("#" + q).find(".styleSelect_item").css("display")) {
                        var g = n.position();
                        null != g.top && g.top > k && c.scrollTo(0, parseInt(g.top))
                    }
                    p(n)
                }
                if (37 == b.keyCode || 38 == b.keyCode) f = f.prev(), n = f.index(), null != c && (1 == e.jScrollPane && "none" != a("#" + q).find(".styleSelect_item").css("display")) && (0 < n ? (n = f.position(), n.top - k < k && c.scrollTo(0, parseInt(n.top))) : c.scrollTo(0, 0)), p(f);
                if (13 == b.keyCode || 0 == b.keyCode || 32 == b.keyCode) return a(this).find(".styleSelect_item").slideToggle(e.speed, function () {
                    !a(b.target).find(".jspContainer").attr("class") && 1 == e.jScrollPane && a(this).find(".styleSelect_item_content").jScrollPane(e.jScrollPaneOptions)
                }), !1;
                9 == b.keyCode && a(this).find(".styleSelect_item").hide(e.speed)
            });
            var p = function (c) {
                c.siblings().find("span").removeClass("selected");
                c.find("span").addClass("selected");
                var c = c.attr("id"),
                    k = a('select[name="' + f + '"]');
                k.siblings().selected = !1;
                k.find('option[value="' + c + '"]').attr("selected", "selected");
                k.trigger(e.selectTrigger);
                b(e.styleClass, e.optionsWidth)
            };
            a("#" + q).click(function (a) {
                a.stopPropagation()
            });
            a(document).click(function () {
                a("#" + q + " .styleSelect_item").hide()
            })
        })
    };
    a.fn.styleSelect.defaults = {
        optionsTop: "26px",
        optionsLeft: "0px",
        optionsWidth: 0,
        styleClass: "selectMenu",
        speed: 0,
        selectTrigger: "change",
        jScrollPane: 0,
        jScrollPaneOptions: ""
    }
})(jQuery);
(function (a, b, c) {
    a.fn.jScrollPane = function (e) {
        function f(f, e) {
            function q(e) {
                var n, Ca, ja, za, Aa, ka = !1,
                    la = !1;
                t = e;
                if (x === c) za = f.scrollTop(), Aa = f.scrollLeft(), f.css({
                    overflow: "hidden",
                    padding: 0
                }), o = f.innerWidth() + ga, A = f.innerHeight(), f.width(o), x = a('<div class="jspPane" />').css("padding", Da).append(f.children()), z = a('<div class="jspContainer" />').css({
                    width: o + "px",
                    height: A + "px"
                }).append(x).appendTo(f);
                else {
                    f.css("width", "");
                    if (ka = t.stickToBottom) ka = D - A, ka = 20 < ka && 10 > ka - N();
                    if (la = t.stickToRight) la = E - o, la = 20 < la && 10 > la - H();
                    if (ja = f.innerWidth() + ga != o || f.outerHeight() != A) o = f.innerWidth() + ga, A = f.innerHeight(), z.css({
                        width: o + "px",
                        height: A + "px"
                    });
                    if (!ja && Ea == E && x.outerHeight() == D) {
                        f.width(o);
                        return
                    }
                    Ea = E;
                    x.css("width", "");
                    f.width(o);
                    z.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                }
                x.css("overflow", "auto");
                E = e.contentWidth ? e.contentWidth : x[0].scrollWidth;
                D = x[0].scrollHeight;
                x.css("overflow", "");
                Z = E / o;
                V = D / A;
                B = 1 < V;
                L = 1 < Z;
                if (!L && !B) f.removeClass("jspScrollable"), x.css({
                    top: 0,
                    width: z.width() - ga
                }), z.unbind(Ba), x.find(":input,a").unbind("focus.jsp"), f.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp"), l();
                else {
                    f.addClass("jspScrollable");
                    if (e = t.maintainPosition && (K || F)) n = H(), Ca = N();
                    B && (z.append(a('<div class="jspVerticalBar" />').append(a('<div class="jspCap jspCapTop" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragTop" />'), a('<div class="jspDragBottom" />'))), a('<div class="jspCap jspCapBottom" />'))), T = z.find(">.jspVerticalBar"), W = T.find(">.jspTrack"), G = W.find(">.jspDrag"), t.showArrows && (qa = a('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", r(0, -1)).bind("click.jsp", S), ra = a('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", r(0, 1)).bind("click.jsp", S), t.arrowScrollOnHover && (qa.bind("mouseover.jsp", r(0, -1, qa)), ra.bind("mouseover.jsp", r(0, 1, ra))), s(W, t.verticalArrowPositions, qa, ra)), aa = A, z.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function () {
                        aa = aa - a(this).outerHeight()
                    }), G.hover(function () {
                        G.addClass("jspHover")
                    }, function () {
                        G.removeClass("jspHover")
                    }).bind("mousedown.jsp", function (b) {
                        a("html").bind("dragstart.jsp selectstart.jsp", S);
                        G.addClass("jspActive");
                        var f = b.pageY - G.position().top;
                        a("html").bind("mousemove.jsp", function (a) {
                            y(a.pageY - f, false)
                        }).bind("mouseup.jsp mouseleave.jsp", u);
                        return false
                    }), g());
                    L && (z.append(a('<div class="jspHorizontalBar" />').append(a('<div class="jspCap jspCapLeft" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragLeft" />'), a('<div class="jspDragRight" />'))), a('<div class="jspCap jspCapRight" />'))), va = z.find(">.jspHorizontalBar"), X = va.find(">.jspTrack"), O = X.find(">.jspDrag"), t.showArrows && (sa = a('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", r(-1, 0)).bind("click.jsp", S), ta = a('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", r(1, 0)).bind("click.jsp", S), t.arrowScrollOnHover && (sa.bind("mouseover.jsp", r(-1, 0, sa)), ta.bind("mouseover.jsp", r(1, 0, ta))), s(X, t.horizontalArrowPositions, sa, ta)), O.hover(function () {
                        O.addClass("jspHover")
                    }, function () {
                        O.removeClass("jspHover")
                    }).bind("mousedown.jsp", function (b) {
                        a("html").bind("dragstart.jsp selectstart.jsp", S);
                        O.addClass("jspActive");
                        var f = b.pageX - O.position().left;
                        a("html").bind("mousemove.jsp", function (a) {
                            P(a.pageX - f, false)
                        }).bind("mouseup.jsp mouseleave.jsp", u);
                        return false
                    }), U = z.innerWidth(), p());
                    if (L && B) {
                        ja = X.outerHeight();
                        var Fa = W.outerWidth();
                        aa -= ja;
                        a(va).find(">.jspCap:visible,>.jspArrow").each(function () {
                            U = U + a(this).outerWidth()
                        });
                        U -= Fa;
                        A -= Fa;
                        o -= ja;
                        X.parent().append(a('<div class="jspCorner" />').css("width", ja + "px"));
                        g();
                        p()
                    }
                    L && x.width(z.outerWidth() - ga + "px");
                    D = x.outerHeight();
                    V = D / A;
                    L && (ba = Math.ceil(1 / Z * U), ba > t.horizontalDragMaxWidth ? ba = t.horizontalDragMaxWidth : ba < t.horizontalDragMinWidth && (ba = t.horizontalDragMinWidth), O.width(ba + "px"), M = U - ba, Q(F));
                    B && (ca = Math.ceil(1 / V * aa), ca > t.verticalDragMaxHeight ? ca = t.verticalDragMaxHeight : ca < t.verticalDragMinHeight && (ca = t.verticalDragMinHeight), G.height(ca + "px"), Y = aa - ca, ia(K));
                    e && (I(la ? E - o : n, !1), J(ka ? D - A : Ca, !1));
                    x.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function (a) {
                        R(a.target, false)
                    });
                    z.unbind(Ba).bind(Ba, function (a, b, f, c) {
                        a = F;
                        b = K;
                        C.scrollBy(f * t.mouseWheelSpeed, -c * t.mouseWheelSpeed, false);
                        return a == F && b == K
                    });
                    var Ga, oa, da, ea, ua, fa = !1;
                    z.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function (a) {
                        a = a.originalEvent.touches[0];
                        Ga = H();
                        oa = N();
                        da = a.pageX;
                        ea = a.pageY;
                        ua = false;
                        fa = true
                    }).bind("touchmove.jsp", function (a) {
                        if (fa) {
                            var a = a.originalEvent.touches[0],
                                b = F,
                                f = K;
                            C.scrollTo(Ga + da - a.pageX, oa + ea - a.pageY);
                            ua = ua || Math.abs(da - a.pageX) > 5 || Math.abs(ea - a.pageY) > 5;
                            return b == F && f == K
                        }
                    }).bind("touchend.jsp", function () {
                        fa = false
                    }).bind("click.jsp-touchclick", function () {
                        if (ua) return ua = false
                    });
                    if (t.enableKeyboardNavigation) {
                        var ha = function () {
                            var a = F,
                                b = K;
                            switch (ma) {
                            case 40:
                                C.scrollByY(t.keyboardSpeed, false);
                                break;
                            case 38:
                                C.scrollByY(-t.keyboardSpeed, false);
                                break;
                            case 34:
                            case 32:
                                C.scrollByY(A * t.scrollPagePercent, false);
                                break;
                            case 33:
                                C.scrollByY(-A * t.scrollPagePercent, false);
                                break;
                            case 39:
                                C.scrollByX(t.keyboardSpeed, false);
                                break;
                            case 37:
                                C.scrollByX(-t.keyboardSpeed, false)
                            }
                            return wa = a != F || b != K
                        },
                            ma, wa, xa = [];
                        L && xa.push(va[0]);
                        B && xa.push(T[0]);
                        x.focus(function () {
                            f.focus()
                        });
                        f.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function (b) {
                            if (!(b.target !== this && (!xa.length || !a(b.target).closest(xa).length))) {
                                var f = F,
                                    c = K;
                                switch (b.keyCode) {
                                case 40:
                                case 38:
                                case 34:
                                case 32:
                                case 33:
                                case 39:
                                case 37:
                                    ma = b.keyCode;
                                    ha();
                                    break;
                                case 35:
                                    J(D - A);
                                    ma = null;
                                    break;
                                case 36:
                                    J(0);
                                    ma = null
                                }
                                wa = b.keyCode == ma && f != F || c != K;
                                return !wa
                            }
                        }).bind("keypress.jsp", function (a) {
                            a.keyCode == ma && ha();
                            return !wa
                        });
                        t.hideFocus ? (f.css("outline", "none"), "hideFocus" in z[0] && f.attr("hideFocus", !0)) : (f.css("outline", ""), "hideFocus" in z[0] && f.attr("hideFocus", !1))
                    }
                    t.clickOnTrack && (l(), B && W.bind("mousedown.jsp", function (b) {
                        if (b.originalTarget === c || b.originalTarget == b.currentTarget) {
                            var f = a(this),
                                e = f.offset(),
                                n = b.pageY - e.top - K,
                                k, g = true,
                                q = function () {
                                    var a = f.offset(),
                                        a = b.pageY - a.top - ca / 2,
                                        c = A * t.scrollPagePercent,
                                        e = Y * c / (D - A);
                                    if (n < 0) K - e > a ? C.scrollByY(-c) : y(a);
                                    else if (n > 0) K + e < a ? C.scrollByY(c) : y(a);
                                    else {
                                        l();
                                        return
                                    }
                                    k = setTimeout(q, g ? t.initialDelay : t.trackClickRepeatFreq);
                                    g = false
                                },
                                l = function () {
                                    k && clearTimeout(k);
                                    k = null;
                                    a(document).unbind("mouseup.jsp", l)
                                };
                            q();
                            a(document).bind("mouseup.jsp", l);
                            return false
                        }
                    }), L && X.bind("mousedown.jsp", function (b) {
                        if (b.originalTarget === c || b.originalTarget == b.currentTarget) {
                            var f = a(this),
                                e = f.offset(),
                                n = b.pageX - e.left - F,
                                k, g = true,
                                q = function () {
                                    var a = f.offset(),
                                        a = b.pageX - a.left - ba / 2,
                                        c = o * t.scrollPagePercent,
                                        e = M * c / (E - o);
                                    if (n < 0) F - e > a ? C.scrollByX(-c) : P(a);
                                    else if (n > 0) F + e < a ? C.scrollByX(c) : P(a);
                                    else {
                                        l();
                                        return
                                    }
                                    k = setTimeout(q, g ? t.initialDelay : t.trackClickRepeatFreq);
                                    g = false
                                },
                                l = function () {
                                    k && clearTimeout(k);
                                    k = null;
                                    a(document).unbind("mouseup.jsp", l)
                                };
                            q();
                            a(document).bind("mouseup.jsp", l);
                            return false
                        }
                    }));
                    a: if (location.hash && 1 < location.hash.length) {
                        var ya, pa;
                        n = escape(location.hash.substr(1));
                        try {
                            ya = a("#" + n + ', a[name="' + n + '"]')
                        } catch (Ha) {
                            break a
                        }
                        ya.length && x.find(n) && (0 === z.scrollTop() ? pa = setInterval(function () {
                            if (z.scrollTop() > 0) {
                                R(ya, true);
                                a(document).scrollTop(z.position().top);
                                clearInterval(pa)
                            }
                        }, 50) : (R(ya, !0), a(document).scrollTop(z.position().top)))
                    }
                    t.hijackInternalLinks && (a(document.body).data("jspHijack") || (a(document.body).data("jspHijack", !0), a(document.body).delegate("a[href*=#]", "click", function (f) {
                        var c = this.href.substr(0, this.href.indexOf("#")),
                            e = location.href,
                            n;
                        location.href.indexOf("#") !== -1 && (e = location.href.substr(0, location.href.indexOf("#")));
                        if (c === e) {
                            e = escape(this.href.substr(this.href.indexOf("#") + 1));
                            c = null;
                            try {
                                c = a("#" + e + ', a[name="' + e + '"]')
                            } catch (k) {
                                return
                            }
                            if (c.length) {
                                e =
                                c.closest(".jspScrollable");
                                n = e.data("jsp");
                                n.scrollToElement(c, true);
                                if (e[0].scrollIntoView) {
                                    n = a(b).scrollTop();
                                    c = c.offset().top;
                                    (c < n || c > n + a(b).height()) && e[0].scrollIntoView()
                                }
                                f.preventDefault()
                            }
                        }
                    })))
                }
                t.autoReinitialise && !na ? na = setInterval(function () {
                    q(t)
                }, t.autoReinitialiseDelay) : !t.autoReinitialise && na && clearInterval(na);
                za && f.scrollTop(0) && J(za, !1);
                Aa && f.scrollLeft(0) && I(Aa, !1);
                f.trigger("jsp-initialised", [L || B])
            }
            function g() {
                W.height(aa + "px");
                K = 0;
                oa = t.verticalGutter + W.outerWidth();
                x.width(o - oa - ga);
                try {
                    0 === T.position().left && x.css("margin-left", oa + "px")
                } catch (a) {}
            }
            function p() {
                z.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function () {
                    U -= a(this).outerWidth()
                });
                X.width(U + "px");
                F = 0
            }
            function s(a, b, f, c) {
                var e = "before",
                    n = "after";
                "os" == b && (b = /Mac/.test(navigator.platform) ? "after" : "split");
                b == e ? n = b : b == n && (e = b, b = f, f = c, c = b);
                a[e](f)[n](c)
            }
            function r(b, f, c) {
                return function () {
                    var e = this,
                        n = c,
                        e = a(e).addClass("jspActive"),
                        k, g, q = !0,
                        l = function () {
                            0 !== b && C.scrollByX(b * t.arrowButtonSpeed);
                            0 !== f && C.scrollByY(f * t.arrowButtonSpeed);
                            g = setTimeout(l, q ? t.initialDelay : t.arrowRepeatFreq);
                            q = !1
                        };
                    l();
                    k = n ? "mouseout.jsp" : "mouseup.jsp";
                    n = n || a("html");
                    n.bind(k, function () {
                        e.removeClass("jspActive");
                        g && clearTimeout(g);
                        g = null;
                        n.unbind(k)
                    });
                    this.blur();
                    return !1
                }
            }
            function l() {
                X && X.unbind("mousedown.jsp");
                W && W.unbind("mousedown.jsp")
            }
            function u() {
                a("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");
                G && G.removeClass("jspActive");
                O && O.removeClass("jspActive")
            }
            function y(a, b) {
                B && ((0 > a ? a = 0 : a > Y && (a = Y), b === c && (b = t.animateScroll), b) ? C.animate(G, "top", a, ia) : (G.css("top", a), ia(a)))
            }
            function ia(a) {
                a === c && (a = G.position().top);
                z.scrollTop(0);
                K = a;
                var b = 0 === K,
                    e = K == Y,
                    a = -(a / Y) * (D - A);
                if (da != b || ea != e) da = b, ea = e, f.trigger("jsp-arrow-change", [da, ea, fa, ha]);
                t.showArrows && (qa[b ? "addClass" : "removeClass"]("jspDisabled"), ra[e ? "addClass" : "removeClass"]("jspDisabled"));
                x.css("top", a);
                f.trigger("jsp-scroll-y", [-a, b, e]).trigger("scroll")
            }
            function P(a, b) {
                L && ((0 > a ? a = 0 : a > M && (a = M), b === c && (b = t.animateScroll), b) ? C.animate(O, "left", a, Q) : (O.css("left", a), Q(a)))
            }
            function Q(a) {
                a === c && (a = O.position().left);
                z.scrollTop(0);
                F = a;
                var b = 0 === F,
                    e = F == M,
                    a = -(a / M) * (E - o);
                if (fa != b || ha != e) fa = b, ha = e, f.trigger("jsp-arrow-change", [da, ea, fa, ha]);
                t.showArrows && (sa[b ? "addClass" : "removeClass"]("jspDisabled"), ta[e ? "addClass" : "removeClass"]("jspDisabled"));
                x.css("left", a);
                f.trigger("jsp-scroll-x", [-a, b, e]).trigger("scroll")
            }
            function J(a, b) {
                y(a / (D - A) * Y, b)
            }
            function I(a, b) {
                P(a / (E - o) * M, b)
            }
            function R(b, f, c) {
                var e, n, k = 0,
                    g = 0,
                    q, l, p;
                try {
                    e =
                    a(b)
                } catch (r) {
                    return
                }
                n = e.outerHeight();
                b = e.outerWidth();
                z.scrollTop(0);
                for (z.scrollLeft(0); !e.is(".jspPane");) if (k += e.position().top, g += e.position().left, e = e.offsetParent(), /^body|html$/i.test(e[0].nodeName)) return;
                e = N();
                q = e + A;
                k < e || f ? l = k - t.verticalGutter : k + n > q && (l = k - A + n + t.verticalGutter);
                l && J(l, c);
                k = H();
                l = k + o;
                g < k || f ? p = g - t.horizontalGutter : g + b > l && (p = g - o + b + t.horizontalGutter);
                p && I(p, c)
            }
            function H() {
                return -x.position().left
            }
            function N() {
                return -x.position().top
            }
            function S() {
                return !1
            }
            var t, C = this,
                x, o, A, z, E, D, Z, V, B, L, G, Y, K, O, M, F, T, W, oa, aa, ca, qa, ra, va, X, U, ba, sa, ta, na, Da, ga, Ea, da = !0,
                fa = !0,
                ea = !1,
                ha = !1,
                pa = f.clone(!1, !1).empty(),
                Ba = a.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
            Da = f.css("paddingTop") + " " + f.css("paddingRight") + " " + f.css("paddingBottom") + " " + f.css("paddingLeft");
            ga = (parseInt(f.css("paddingLeft"), 10) || 0) + (parseInt(f.css("paddingRight"), 10) || 0);
            a.extend(C, {
                reinitialise: function (b) {
                    b = a.extend({}, t, b);
                    q(b)
                },
                scrollToElement: function (a, b, f) {
                    R(a, b, f)
                },
                scrollTo: function (a, b, f) {
                    I(a, f);
                    J(b, f)
                },
                scrollToX: function (a, b) {
                    I(a, b)
                },
                scrollToY: function (a, b) {
                    J(a, b)
                },
                scrollToPercentX: function (a, b) {
                    I(a * (E - o), b)
                },
                scrollToPercentY: function (a, b) {
                    J(a * (D - A), b)
                },
                scrollBy: function (a, b, f) {
                    C.scrollByX(a, f);
                    C.scrollByY(b, f)
                },
                scrollByX: function (a, b) {
                    var f = (H() + Math[0 > a ? "floor" : "ceil"](a)) / (E - o);
                    P(f * M, b)
                },
                scrollByY: function (a, b) {
                    var f = (N() + Math[0 > a ? "floor" : "ceil"](a)) / (D - A);
                    y(f * Y, b)
                },
                positionDragX: function (a, b) {
                    P(a, b)
                },
                positionDragY: function (a, b) {
                    y(a, b)
                },
                animate: function (a, b, f, c) {
                    var e = {};
                    e[b] = f;
                    a.animate(e, {
                        duration: t.animateDuration,
                        easing: t.animateEase,
                        queue: !1,
                        step: c
                    })
                },
                getContentPositionX: function () {
                    return H()
                },
                getContentPositionY: function () {
                    return N()
                },
                getContentWidth: function () {
                    return E
                },
                getContentHeight: function () {
                    return D
                },
                getPercentScrolledX: function () {
                    return H() / (E - o)
                },
                getPercentScrolledY: function () {
                    return N() / (D - A)
                },
                getIsScrollableH: function () {
                    return L
                },
                getIsScrollableV: function () {
                    return B
                },
                getContentPane: function () {
                    return x
                },
                scrollToBottom: function (a) {
                    y(Y, a)
                },
                hijackInternalLinks: a.noop,
                destroy: function () {
                    var a = N(),
                        b = H();
                    f.removeClass("jspScrollable").unbind(".jsp");
                    f.replaceWith(pa.append(x.children()));
                    pa.scrollTop(a);
                    pa.scrollLeft(b);
                    na && clearInterval(na)
                }
            });
            q(e)
        }
        e = a.extend({}, a.fn.jScrollPane.defaults, e);
        a.each(["mouseWheelSpeed", "arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function () {
            e[this] = e[this] || e.speed
        });
        return this.each(function () {
            var b = a(this),
                c = b.data("jsp");
            c ? c.reinitialise(e) : (a("script", b).filter('[type="text/javascript"],not([type])').remove(), c = new f(b, e), b.data("jsp", c))
        })
    };
    a.fn.jScrollPane.defaults = {
        showArrows: !1,
        maintainPosition: !0,
        stickToBottom: !1,
        stickToRight: !1,
        clickOnTrack: !0,
        autoReinitialise: !1,
        autoReinitialiseDelay: 500,
        verticalDragMinHeight: 0,
        verticalDragMaxHeight: 99999,
        horizontalDragMinWidth: 0,
        horizontalDragMaxWidth: 99999,
        contentWidth: c,
        animateScroll: !1,
        animateDuration: 300,
        animateEase: "linear",
        hijackInternalLinks: !1,
        verticalGutter: 4,
        horizontalGutter: 4,
        mouseWheelSpeed: 0,
        arrowButtonSpeed: 0,
        arrowRepeatFreq: 50,
        arrowScrollOnHover: !1,
        trackClickSpeed: 0,
        trackClickRepeatFreq: 70,
        verticalArrowPositions: "split",
        horizontalArrowPositions: "split",
        enableKeyboardNavigation: !0,
        hideFocus: !1,
        keyboardSpeed: 0,
        initialDelay: 300,
        speed: 30,
        scrollPagePercent: 0.8
    }
})(jQuery, this);
(function (a) {
    a.fn.lazyload = function (b) {
        var c = {
            threshold: 0,
            failurelimit: 0,
            event: "scroll",
            effect: "show",
            container: window
        };
        b && a.extend(c, b);
        var e = this;
        "scroll" == c.event && a(c.container).bind("scroll", function () {
            var b = 0;
            e.each(function () {
                if (!a.abovethetop(this, c) && !a.leftofbegin(this, c)) if (!a.belowthefold(this, c) && !a.rightoffold(this, c)) a(this).trigger("appear");
                else if (b++ > c.failurelimit) return !1
            });
            var k = a.grep(e, function (a) {
                return !a.loaded
            });
            e = a(k)
        });
        this.each(function () {
            var b = this;
            void 0 == a(b).attr("original") && a(b).attr("original", a(b).attr("src"));
            "scroll" != c.event || void 0 == a(b).attr("src") || c.placeholder == a(b).attr("src") || a.abovethetop(b, c) || a.leftofbegin(b, c) || a.belowthefold(b, c) || a.rightoffold(b, c) ? (c.placeholder ? a(b).attr("src", c.placeholder) : a(b).removeAttr("src"), b.loaded = !1) : b.loaded = !0;
            a(b).one("appear", function () {
                this.loaded || a("<img />").bind("load", function () {
                    a(b).hide().attr("src", a(b).attr("original"))[c.effect](c.effectspeed);
                    b.loaded = true
                }).attr("src", a(b).attr("original"))
            });
            "scroll" != c.event && a(b).bind(c.event, function () {
                b.loaded || a(b).trigger("appear")
            })
        });
        a(c.container).trigger(c.event);
        return this
    };
    a.belowthefold = function (b, c) {
        return (void 0 === c.container || c.container === window ? a(window).height() + a(window).scrollTop() : a(c.container).offset().top + a(c.container).height()) <= a(b).offset().top - c.threshold
    };
    a.rightoffold = function (b, c) {
        return (void 0 === c.container || c.container === window ? a(window).width() + a(window).scrollLeft() : a(c.container).offset().left + a(c.container).width()) <= a(b).offset().left - c.threshold
    };
    a.abovethetop = function (b, c) {
        return (void 0 === c.container || c.container === window ? a(window).scrollTop() : a(c.container).offset().top) >= a(b).offset().top + c.threshold + a(b).height()
    };
    a.leftofbegin = function (b, c) {
        return (void 0 === c.container || c.container === window ? a(window).scrollLeft() : a(c.container).offset().left) >= a(b).offset().left + c.threshold + a(b).width()
    };
    a.extend(a.expr[":"], {
        "below-the-fold": "$.belowthefold(a, {threshold : 0, container: window})",
        "above-the-fold": "!$.belowthefold(a, {threshold : 0, container: window})",
        "right-of-fold": "$.rightoffold(a, {threshold : 0, container: window})",
        "left-of-fold": "!$.rightoffold(a, {threshold : 0, container: window})"
    })
})(jQuery);
(function (a) {
    function b(a, b, c) {
        c = "(" + c.replace(e, "\\$1") + ")";
        a = a.replace(RegExp(c, "gi"), "<strong>$1</strong>");
        a = "<div>" + a;
        void 0 != b && void 0 != b.name && (a += ' <em style="color:#d00;font-size:11px">trong</em> <strong style="color:#06c">' + b.name + "</strong>");
        return a + "</div>"
    }
    function c(f, c) {
        this.el = a(f);
        this.el.attr("autocomplete", "off");
        this.suggestions = [];
        this.categories = [];
        this.coreids = [];
        this.data = [];
        this.badQueries = [];
        this.selectedIndex = -1;
        this.currentValue = this.el.val();
        this.intervalId = 0;
        this.cachedResponse = [];
        this.onChangeInterval = null;
        this.ignoreValueChange = !1;
        this.serviceUrl = c.serviceUrl;
        this.isLocal = !1;
        this.options = {
            autoSubmit: !1,
            minChars: 1,
            maxHeight: 300,
            deferRequestBy: 0,
            width: 0,
            highlight: !0,
            params: {},
            fnFormatResult: b,
            delimiter: null,
            zIndex: 9999,
            noCache: !0
        };
        this.initialize();
        this.setOptions(c)
    }
    var e = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)", "g");
    a.fn.autocomplete = function (b) {
        return new c(this.get(0) || a("<input />"), b)
    };
    c.prototype = {
        killerFn: null,
        initialize: function () {
            var b, c, e;
            b = this;
            c = Math.floor(1048576 * Math.random()).toString(16);
            e = "Autocomplete_" + c;
            this.killerFn = function (c) {
                0 === a(c.target).parents(".autocomplete").size() && (b.killSuggestions(), b.disableKillerFn())
            };
            this.options.width || (this.options.width = this.el.width());
            this.mainContainerId = "AutocompleteContainter_" + c;
            a('<div id="' + this.mainContainerId + '" style="position:absolute;z-index:9999;"><div class="autocomplete-w1"><div class="ui-menu autocomplete" id="' + e + '" style="display:none; width:300px;"></div></div></div>').appendTo("body");
            this.container = a("#" + e);
            this.fixPosition();
            window.opera ? this.el.keypress(function (a) {
                b.onKeyPress(a)
            }) : this.el.keydown(function (a) {
                b.onKeyPress(a)
            });
            this.el.keyup(function (a) {
                b.onKeyUp(a)
            });
            this.el.blur(function () {
                b.enableKillerFn()
            });
            this.el.focus(function () {
                b.fixPosition()
            })
        },
        validateData: function (a) {
            0 < a.indexOf("|") && (a = a.split("|"), a = a[0]);
            return a
        },
        setOptions: function (b) {
            var c = this.options;
            a.extend(c, b);
            c.lookup && (this.isLocal = !0, a.isArray(c.lookup) && (c.lookup = {
                suggestions: c.lookup,
                data: []
            }));
            a("#" + this.mainContainerId).css({
                zIndex: c.zIndex
            });
            this.container.css({
                maxHeight: c.maxHeight + "px",
                width: c.width
            })
        },
        clearCache: function () {
            this.cachedResponse = [];
            this.badQueries = []
        },
        disable: function () {
            this.disabled = !0
        },
        enable: function () {
            this.disabled = !1
        },
        fixPosition: function () {
            var b = this.el.offset();
            a("#" + this.mainContainerId).css({
                top: b.top + this.el.innerHeight() + "px",
                left: b.left + "px"
            })
        },
        enableKillerFn: function () {
            a(document).bind("click", this.killerFn)
        },
        disableKillerFn: function () {
            a(document).unbind("click", this.killerFn)
        },
        killSuggestions: function () {
            var a = this;
            this.stopKillSuggestions();
            this.intervalId = window.setInterval(function () {
                a.hide();
                a.stopKillSuggestions()
            }, 300)
        },
        stopKillSuggestions: function () {
            window.clearInterval(this.intervalId)
        },
        onKeyPress: function (a) {
            if (!this.disabled && this.enabled) {
                switch (a.keyCode) {
                case 27:
                    this.el.val(this.currentValue);
                    this.hide();
                    break;
                case 9:
                case 13:
                    if (-1 === this.selectedIndex) {
                        this.hide();
                        return
                    }
                    this.select(this.selectedIndex);
                    if (9 === a.keyCode) return;
                    break;
                case 38:
                    this.moveUp();
                    break;
                case 40:
                    this.moveDown();
                    break;
                default:
                    return
                }
                a.stopImmediatePropagation();
                a.preventDefault()
            }
        },
        onKeyUp: function (a) {
            if (!this.disabled) {
                switch (a.keyCode) {
                case 38:
                case 40:
                    return
                }
                clearInterval(this.onChangeInterval);
                if (this.currentValue !== this.el.val()) if (0 < this.options.deferRequestBy) {
                    var b = this;
                    this.onChangeInterval = setInterval(function () {
                        b.onValueChange()
                    }, this.options.deferRequestBy)
                } else this.onValueChange()
            }
        },
        onValueChange: function () {
            clearInterval(this.onChangeInterval);
            this.currentValue =
            this.el.val();
            var a = this.getQuery(this.currentValue);
            this.selectedIndex = -1;
            this.ignoreValueChange ? this.ignoreValueChange = !1 : "" === a || a.length < this.options.minChars ? this.hide() : this.getSuggestions(a)
        },
        getQuery: function (b) {
            var c;
            c = this.options.delimiter;
            if (!c) return a.trim(b);
            b = b.split(c);
            return a.trim(b[b.length - 1])
        },
        getSuggestionsLocal: function (a) {
            var b, c, e, g, p;
            c = this.options.lookup;
            e = c.suggestions.length;
            b = {
                suggestions: [],
                data: []
            };
            a = a.toLowerCase();
            for (p = 0; p < e; p++) g = c.suggestions[p], 0 === g.toLowerCase().indexOf(a) && (b.suggestions.push(g), b.data.push(c.data[p]));
            return b
        },
        getSuggestions: function (b) {
            var c, e;
            (c = this.isLocal ? this.getSuggestionsLocal(b) : this.cachedResponse[b]) && a.isArray(c.suggestions) ? (this.suggestions = c.suggestions, this.data = c.data, this.suggest()) : this.isBadQuery(b) || (e = this, e.options.params.query = b, a.get(this.serviceUrl, e.options.params, function (a) {
                e.processResponse(a)
            }, "text"))
        },
        isBadQuery: function (a) {
            for (var b = this.badQueries.length; b--;) if (0 === a.indexOf(this.badQueries[b])) return !0;
            return !1
        },
        hide: function () {
            this.enabled = !1;
            this.selectedIndex = -1;
            this.container.hide()
        },
        suggest: function () {
            if (0 === this.suggestions.length) this.hide();
            else {
                var b, c, e, q, g, p, s, r;
                b = this;
                c = this.suggestions.length;
                q = this.options.fnFormatResult;
                g = this.getQuery(this.currentValue);
                s = function (a) {
                    return function () {
                        b.activate(a)
                    }
                };
                r = function (a) {
                    return function () {
                        b.select(a)
                    }
                };
                this.container.hide().empty();
                var l = "",
                    u;
                for (p = 0; p < c; p++) e = this.suggestions[p], u = [], void 0 != b.categories[p] && (0 < b.categories[p].id && "" != b.categories[p].name) && (u = b.categories[p]), l = 0 == p % 2 ? "" : 'style="background-color:#f8f8f8"', e = a((b.selectedIndex === p ? '<div class="clearfix ui-menu-item selected"' : '<div class="clearfix"') + ' title="' + e + '" ' + l + ">" + q(e, u, g) + "</div>"), e.mouseover(s(p)), e.click(r(p)), this.container.append(e);
                this.enabled = !0;
                this.container.show()
            }
        },
        processResponse: function (b) {
            var c;
            try {
                c = eval("(" + b + ")")
            } catch (e) {
                return
            }
            a.isArray(c.data) || (c.data = []);
            this.options.noCache || (this.cachedResponse[c.query] = c, 0 === c.suggestions.length && this.badQueries.push(c.query));
            if (c.query === this.getQuery(this.currentValue)) {
                var q = [],
                    g = [],
                    p = [];
                null != c.suggestions && a.each(c.suggestions, function (a, b) {
                    if (b.indexOf("|") > 0) {
                        data = b.split("|");
                        var c = {};
                        c.id = data[1];
                        c.name = data[2];
                        q[a] = data[0];
                        g[a] = c;
                        p[a] = data[3] != "undefined" ? data[3] : 0
                    } else q[a] = b
                });
                this.suggestions = q;
                this.categories = g;
                this.coreids = p;
                this.data = c.data;
                this.suggest()
            }
        },
        activate: function (b) {
            var c, e;
            c = this.container.children(); - 1 !== this.selectedIndex && c.length > this.selectedIndex && a(c.get(this.selectedIndex)).removeClass("ui-state-hover");
            this.selectedIndex = b; - 1 !== this.selectedIndex && c.length > this.selectedIndex && (e = c.get(this.selectedIndex), a(e).addClass("ui-state-hover"));
            return e
        },
        deactivate: function (a, b) {
            a.className = "";
            this.selectedIndex === b && (this.selectedIndex = -1)
        },
        select: function (a) {
            var b;
            if (b = this.suggestions[a]) this.el.val(b), this.options.autoSubmit && (b = this.el.parents("form"), 0 < b.length && b.get(0).submit()), this.ignoreValueChange = !0, this.hide(), this.onSelect(a)
        },
        moveUp: function () {
            -1 !== this.selectedIndex && (0 === this.selectedIndex ? (this.container.children().get(0).className = "", this.selectedIndex = -1, this.el.val(this.currentValue)) : this.adjustScroll(this.selectedIndex - 1))
        },
        moveDown: function () {
            this.selectedIndex !== this.suggestions.length - 1 && this.adjustScroll(this.selectedIndex + 1)
        },
        adjustScroll: function (a) {
            var b, c, e;
            b = this.activate(a).offsetTop;
            c = this.container.scrollTop();
            e = c + this.options.maxHeight - 25;
            b < c ? this.container.scrollTop(b) : b > e && this.container.scrollTop(b - this.options.maxHeight + 25);
            this.el.val(this.getValue(this.suggestions[a]))
        },
        onSelect: function (b) {
            var c, e, q;
            c = this.options.onSelect;
            e = this.suggestions[b];
            q = void 0 != this.categories[b] ? this.categories[b].id : 0;
            b = void 0 != this.coreids[b] ? this.coreids[b] : 0;
            this.el.val(this.getValue(e));
            a.isFunction(c) && c(e, q, b, this.el)
        },
        getValue: function (a) {
            var b, c;
            b = this.options.delimiter;
            if (!b) return a;
            c = this.currentValue;
            b = c.split(b);
            return 1 === b.length ? a : c.substr(0, c.length - b[b.length - 1].length) + a
        }
    }
})(jQuery);
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (a, b, c, e, f) {
        return jQuery.easing[jQuery.easing.def](a, b, c, e, f)
    },
    easeInQuad: function (a, b, c, e, f) {
        return e * (b /= f) * b + c
    },
    easeOutQuad: function (a, b, c, e, f) {
        return -e * (b /= f) * (b - 2) + c
    },
    easeInOutQuad: function (a, b, c, e, f) {
        return 1 > (b /= f / 2) ? e / 2 * b * b + c : -e / 2 * (--b * (b - 2) - 1) + c
    },
    easeInCubic: function (a, b, c, e, f) {
        return e * (b /= f) * b * b + c
    },
    easeOutCubic: function (a, b, c, e, f) {
        return e * ((b = b / f - 1) * b * b + 1) + c
    },
    easeInOutCubic: function (a, b, c, e, f) {
        return 1 > (b /= f / 2) ? e / 2 * b * b * b + c : e / 2 * ((b -= 2) * b * b + 2) + c
    },
    easeInQuart: function (a, b, c, e, f) {
        return e * (b /= f) * b * b * b + c
    },
    easeOutQuart: function (a, b, c, e, f) {
        return -e * ((b = b / f - 1) * b * b * b - 1) + c
    },
    easeInOutQuart: function (a, b, c, e, f) {
        return 1 > (b /= f / 2) ? e / 2 * b * b * b * b + c : -e / 2 * ((b -= 2) * b * b * b - 2) + c
    },
    easeInQuint: function (a, b, c, e, f) {
        return e * (b /= f) * b * b * b * b + c
    },
    easeOutQuint: function (a, b, c, e, f) {
        return e * ((b = b / f - 1) * b * b * b * b + 1) + c
    },
    easeInOutQuint: function (a, b, c, e, f) {
        return 1 > (b /= f / 2) ? e / 2 * b * b * b * b * b + c : e / 2 * ((b -= 2) * b * b * b * b + 2) + c
    },
    easeInSine: function (a, b, c, e, f) {
        return -e * Math.cos(b / f * (Math.PI / 2)) + e + c
    },
    easeOutSine: function (a, b, c, e, f) {
        return e * Math.sin(b / f * (Math.PI / 2)) + c
    },
    easeInOutSine: function (a, b, c, e, f) {
        return -e / 2 * (Math.cos(Math.PI * b / f) - 1) + c
    },
    easeInExpo: function (a, b, c, e, f) {
        return 0 == b ? c : e * Math.pow(2, 10 * (b / f - 1)) + c
    },
    easeOutExpo: function (a, b, c, e, f) {
        return b == f ? c + e : e * (-Math.pow(2, -10 * b / f) + 1) + c
    },
    easeInOutExpo: function (a, b, c, e, f) {
        return 0 == b ? c : b == f ? c + e : 1 > (b /= f / 2) ? e / 2 * Math.pow(2, 10 * (b - 1)) + c : e / 2 * (-Math.pow(2, -10 * --b) + 2) + c
    },
    easeInCirc: function (a, b, c, e, f) {
        return -e * (Math.sqrt(1 - (b /= f) * b) - 1) + c
    },
    easeOutCirc: function (a, b, c, e, f) {
        return e * Math.sqrt(1 - (b = b / f - 1) * b) + c
    },
    easeInOutCirc: function (a, b, c, e, f) {
        return 1 > (b /= f / 2) ? -e / 2 * (Math.sqrt(1 - b * b) - 1) + c : e / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
    },
    easeInElastic: function (a, b, c, e, f) {
        var a = 1.70158,
            k = 0,
            n = e;
        if (0 == b) return c;
        if (1 == (b /= f)) return c + e;
        k || (k = 0.3 * f);
        n < Math.abs(e) ? (n = e, a = k / 4) : a = k / (2 * Math.PI) * Math.asin(e / n);
        return -(n * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * f - a) * 2 * Math.PI / k)) + c
    },
    easeOutElastic: function (a, b, c, e, f) {
        var a = 1.70158,
            k = 0,
            n = e;
        if (0 == b) return c;
        if (1 == (b /= f)) return c + e;
        k || (k = 0.3 * f);
        n < Math.abs(e) ? (n = e, a = k / 4) : a = k / (2 * Math.PI) * Math.asin(e / n);
        return n * Math.pow(2, -10 * b) * Math.sin((b * f - a) * 2 * Math.PI / k) + e + c
    },
    easeInOutElastic: function (a, b, c, e, f) {
        var a = 1.70158,
            k = 0,
            n = e;
        if (0 == b) return c;
        if (2 == (b /= f / 2)) return c + e;
        k || (k = f * 0.3 * 1.5);
        n < Math.abs(e) ? (n = e, a = k / 4) : a = k / (2 * Math.PI) * Math.asin(e / n);
        return 1 > b ? -0.5 * n * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * f - a) * 2 * Math.PI / k) + c : 0.5 * n * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * f - a) * 2 * Math.PI / k) + e + c
    },
    easeInBack: function (a, b, c, e, f, k) {
        void 0 == k && (k = 1.70158);
        return e * (b /= f) * b * ((k + 1) * b - k) + c
    },
    easeOutBack: function (a, b, c, e, f, k) {
        void 0 == k && (k = 1.70158);
        return e * ((b = b / f - 1) * b * ((k + 1) * b + k) + 1) + c
    },
    easeInOutBack: function (a, b, c, e, f, k) {
        void 0 == k && (k = 1.70158);
        return 1 > (b /= f / 2) ? e / 2 * b * b * (((k *= 1.525) + 1) * b - k) + c : e / 2 * ((b -= 2) * b * (((k *= 1.525) + 1) * b + k) + 2) + c
    },
    easeInBounce: function (a, b, c, e, f) {
        return e - jQuery.easing.easeOutBounce(a, f - b, 0, e, f) + c
    },
    easeOutBounce: function (a, b, c, e, f) {
        return (b /= f) < 1 / 2.75 ? e * 7.5625 * b * b + c : b < 2 / 2.75 ? e * (7.5625 * (b -= 1.5 / 2.75) * b + 0.75) + c : b < 2.5 / 2.75 ? e * (7.5625 * (b -= 2.25 / 2.75) * b + 0.9375) + c : e * (7.5625 * (b -= 2.625 / 2.75) * b + 0.984375) + c
    },
    easeInOutBounce: function (a, b, c, e, f) {
        return b < f / 2 ? 0.5 * jQuery.easing.easeInBounce(a, 2 * b, 0, e, f) + c : 0.5 * jQuery.easing.easeOutBounce(a, 2 * b - f, 0, e, f) + 0.5 * e + c
    }
});
(function (a) {
    function b(b, c) {
        var e = a("#" + b).attr("alt"),
            f = "dp" + e.charAt(5);
        "" !== e && (c.aSign = "n" === e.charAt(0) ? "-" : "", "0" === e.charAt(1) ? c.mNum = 15 : "0" < e.charAt(1) && "9" >= e.charAt(1) ? c.mNum = 1 * e.charAt(1) : c.nNum = 9, c.aSep = "a" === e.charAt(2) ? "'" : "p" === e.charAt(2) ? "." : "s" === e.charAt(2) ? " " : "x" === e.charAt(2) ? "" : ",", c.dGroup = "2" === e.charAt(3) ? /(\d)((\d)(\d{2}?)+)$/ : "4" === e.charAt(3) ? /(\d)((\d{4}?)+)$/ : /(\d)((\d{3}?)+)$/, c.aDec = "c" == e.charAt(4) ? "," : ".", c.mDec = "9" >= e.charAt(5) ? 1 * e.charAt(5) : 1 * a("#" + f).val(), c.rMethod = "" !== e.charAt(6) ? e.charAt(6) : "S");
        return c
    }
    function c(a, b) {
        var c = "",
            e = 0;
        for (j = 0; j < b; j++) c = a.charAt(j), "0" <= c && "9" >= c && e++;
        return e
    }
    function e(a, b) {
        if ("" != b.aSep) {
            for (var a = a.split(b.aSep).join(""), c = a.split(b.aDec), e = c[0]; b.dGroup.test(e);) e = e.replace(b.dGroup, "$1" + b.aSep + "$2");
            a = 0 !== b.mDec && 1 < c.length ? e + b.aDec + c[1] : e
        }
        return a
    }
    function f(a, b, c) {
        var e = "",
            f = 0,
            k = "",
            a = a + "";
        "-" == a.charAt(0) && (k = 0 === 1 * a ? "" : "-", a = a.replace("-", ""));
        if (0 < 1 * a) for (;
        "0" == a.substr(0, 1) && 1 < a.length;) a = a.substr(1, 9999);
        var l = a.lastIndexOf(".");
        0 === l && (a = "0" + a, l = 1);
        if (-1 == l || l == a.length - 1) {
            if (0 < b) {
                e = -1 == l ? a + "." : a;
                for (f = 0; f < b; f++) e += "0";
                return k + e
            }
            return k + a
        }
        var u = a.length - 1 - l;
        if (u == b) return k + a;
        if (u < b) {
            e = a;
            for (f = u; f < b; f++) e += "0";
            return k + e
        }
        for (var l = l + b, u = 1 * a.charAt(l + 1), y = [], f = 0; f <= l; f++) y[f] = a.charAt(f);
        a = "." == a.charAt(l) ? a.charAt(l - 1) % 2 : a.charAt(l) % 2;
        if (4 < u && "S" === c || 4 < u && "A" === c && "" === k || 5 < u && "A" === c && "-" == k || 5 < u && "s" === c || 5 < u && "a" === c && "" === k || 4 < u && "a" === c && "-" == k || 5 < u && "B" === c || 5 == u && "B" === c && 1 == a || 0 < u && "C" === c && "" === k || 0 < u && "F" === c && "-" == k || 0 < u && "U" === c) for (f = y.length - 1; 0 <= f && !("." != y[f] && (y[f]++, 10 > y[f])); f--);
        for (f = 0; f <= l; f++) e = "." == y[f] || 10 > y[f] || 0 === f ? e + y[f] : e + "0";
        0 === b && (e = e.replace(".", ""));
        return k + e
    }
    function k(c, k, g) {
        c = c.val();
        if (25 < c.length) return a("#" + k).val(""), !0;
        a.extend(g, b(k, g));
        var p = "";
        "-" == g.aSign && (p = "\\-");
        var s = c.replace(RegExp("[^" + p + g.aNum + g.aDec + "]", "gi"), "");
        if (0 < s.lastIndexOf("-") || s.indexOf(g.aDec) != s.lastIndexOf(g.aDec)) s = "";
        for (var c = "", p = 0, r = "", l = 0, s = s.split(""), l = 0; l < s.length; l++) if (0 === l && "-" == s[l]) p = 1, r = "-";
        else {
            if (s[l] == g.aDec && s.length - 1 == l) break;
            0 === c.length && "0" == s[l] && (0 <= s[l + 1] || 9 >= s[l + 1]) || (c += s[l])
        }
        c = r + c; - 1 == c.indexOf(g.aDec) && c.length > g.mNum + p && (c = "");
        c.indexOf(g.aDec) > g.mNum + p && (c = ""); - 1 != c.indexOf(g.aDec) && "." != g.aDec && (c = c.replace(g.aDec, "."));
        c = f(c, g.mDec, g.rMethod);
        "." != g.aDec && (c = c.replace(".", g.aDec));
        "" !== c && "" !== g.aSep && (c = e(c, g));
        a("#" + k).val(c)
    }
    a.fn.autoNumeric = function () {
        return this.each(function () {
            var f = a.extend(a.fn.autoNumeric.defaults),
                q = a(this),
                g = this.id,
                p = "",
                s = 0,
                r = 0,
                l = 0,
                u = 0;
            a(this).focus(function () {
                a.extend(f, b(g, f))
            }).keydown(function (a) {
                a || (a = window.event);
                a.keyCode ? p = a.keyCode : a.which && (p = a.which);
                if (document.selection) this.focus(), a = document.selection.createRange(), s = document.selection.createRange().text.length, a.moveStart("character", -this.value.length), r = 1 * (a.text.length - s);
                else if (this.selectionStart || "0" == this.selectionStart) s = 1 * this.selectionEnd - 1 * this.selectionStart, r = 1 * this.selectionStart;
                l = this.value.length
            }).keypress(function (e) {
                a.extend(f, b(g, f));
                var k = f.aNum + f.aSign + f.aDec,
                    q = 0,
                    Q = 0,
                    q = l - (l - this.value.lastIndexOf(f.aDec)); - 1 == q && (q = l);
                Q = l - this.value.lastIndexOf(f.aDec) - 1; - 1 == this.value.lastIndexOf(f.aDec) && (Q = 0);
                u = c(this.value, q);
                e || (e = window.event);
                var J = "";
                e.keyCode ? J = e.keyCode : e.which && (J = e.which);
                var I = String.fromCharCode(J);
                if (e.ctrlKey && (67 == p || 86 == p || 88 == p) || 8 == p || 9 == p || 35 == p || 36 == p || 37 == p || 39 == p || 46 == p) return !0; - 1 == k.indexOf(I) && e.preventDefault();
                if (I == f.aDec) {
                    if (s == l && 0 < s) return;
                    (-1 != this.value.indexOf(f.aDec) || 0 >= f.mDec || r < this.value.length - f.mDec || 0 === r && "-" == this.value.charAt(0) || this.value.lastIndexOf(f.aSep) >= r && "" !== f.aSep) && e.preventDefault()
                }
                45 == J && (0 < r || -1 != this.value.indexOf("-") || "" === f.aSign) && e.preventDefault();
                if (48 <= J && 57 >= J) {
                    if (0 < s) return !0; - 1 != this.value.indexOf("-") && 0 === r && e.preventDefault();
                    u >= f.mNum && r <= q && e.preventDefault(); - 1 != this.value.indexOf(f.aDec) && (r >= this.value.length - Q && Q >= f.mDec) && e.preventDefault()
                }
            }).keyup(function (b) {
                if ("" === f.aSep || 9 == b.keyCode || 20 == b.keyCode || 35 == b.keyCode || 36 == b.keyCode || 37 == b.keyCode || 39 == b.keyCode || 9 == p || 13 == p || 20 == p || 35 == p || 36 == p || 37 == p || 39 == p) return !0;
                a("#" + this.id).val(e(this.value, f));
                var b = this.value.length,
                    k = b - (b - this.value.lastIndexOf(f.aDec)); - 1 == k && (k = b);
                u = c(this.value, k);
                u > f.mNum && a("#" + this.id).val("");
                k = 0;
                l < b && (k = r + (b - l));
                l > b && (k = 0 < s ? b - (l - (r + s)) : l - 2 == b ? 8 == p ? r - 2 : r - 1 : 8 == p ? r - 1 : r);
                l == b && (k = this.value.charAt(r - 1) == f.aSep && 8 == p ? r - 1 : this.value.charAt(r) == f.aSep && 46 == p ? r + 1 : 1 === b ? r + 1 : r);
                this.focus();
                document.selection ? (b = this.createTextRange(), b.collapse(!0), b.moveStart("character", k), b.moveEnd("character", 0), b.select()) : this.selectionStart && (this.selectionEnd = this.selectionStart = k)
            }).blur(function () {
                "" != a("#" + g).val() && k(q, g, f)
            });
            a(this).bind("paste", function () {
                setTimeout(function () {
                    k(q, g, f)
                }, 0)
            })
        })
    };
    a.fn.autoNumeric.defaults = {
        aNum: "0123456789",
        aSign: "",
        aSep: ".",
        aDec: ",",
        mNum: 12,
        mDec: 0,
        dGroup: /(\d)((\d{3}?)+)$/,
        rMethod: "S"
    };
    a.fn.autoNumeric.Strip = function (c) {
        var e = a("#" + c).val(),
            f = a.extend(a.fn.autoNumeric.defaults);
        a.extend(f, b(c, f));
        e = e.replace(RegExp("[^\\-" + f.aNum + f.aDec + "]", "gi"), "");
        c = "";
        "-" == e.charAt(0) && (c = 0 === 1 * e ? "" : "-", e = e.replace("-", ""));
        e = e.replace(f.aDec, ".");
        if (0 < 1 * e) for (;
        "0" == e.substr(0, 1) && 1 < e.length;) e = e.substr(1, 9999);
        e = 0 === e.lastIndexOf(".") ? "0" + e : e;
        return c + (0 === 1 * e ? "0" : e)
    };
    a.fn.autoNumeric.Format = function (c, k) {
        var g = a.extend(a.fn.autoNumeric.defaults);
        a.extend(g, b(c, g));
        var k = f(k, g.mDec, g.rMethod),
            p = 0; - 1 != k.indexOf("-") && "" === g.aSign ? k = "" : -1 != k.indexOf("-") && "-" == g.aSign && (p = 1); - 1 == k.indexOf(".") && k.length > g.mNum + p ? k = "" : k.indexOf(".") > g.mNum + p && (k = "");
        "." != g.aDec && (k = k.replace(".", g.aDec));
        return e(k, g)
    }
})(jQuery);
(function (a) {
    function b(b) {
        var c = b || window.event,
            e = [].slice.call(arguments, 1),
            q = 0,
            g = 0,
            p = 0;
        return b = a.event.fix(c), b.type = "mousewheel", c.wheelDelta && (q = c.wheelDelta / 120), c.detail && (q = -c.detail / 3), p = q, void 0 !== c.axis && c.axis === c.HORIZONTAL_AXIS && (p = 0, g = -1 * q), void 0 !== c.wheelDeltaY && (p = c.wheelDeltaY / 120), void 0 !== c.wheelDeltaX && (g = -1 * c.wheelDeltaX / 120), e.unshift(b, q, g, p), (a.event.dispatch || a.event.handle).apply(this, e)
    }
    var c = ["DOMMouseScroll", "mousewheel"];
    if (a.event.fixHooks) for (var e = c.length; e;) a.event.fixHooks[c[--e]] = a.event.mouseHooks;
    a.event.special.mousewheel = {
        setup: function () {
            if (this.addEventListener) for (var a = c.length; a;) this.addEventListener(c[--a], b, !1);
            else this.onmousewheel = b
        },
        teardown: function () {
            if (this.removeEventListener) for (var a = c.length; a;) this.removeEventListener(c[--a], b, !1);
            else this.onmousewheel = null
        }
    };
    a.fn.extend({
        mousewheel: function (a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function (a) {
            return this.unbind("mousewheel", a)
        }
    })
})(jQuery);
(function (a) {
    a.fn.bxSlider = function (b) {
        function c(b, c, e, f) {
            var k = [],
                g = e,
                l = !1;
            "backward" == f && (b = a.makeArray(b), b.reverse());
            for (; 0 < g;) a.each(b, function (b) {
                if (g > 0) if (l) {
                    k.push(a(this).clone());
                    g--
                } else {
                    if (b == c) {
                        l = true;
                        k.push(a(this).clone());
                        g--
                    }
                } else return false
            });
            return k
        }
        function e(b, c) {
            if ("left" == c) var e = a(".pager", u).eq(b).position().left;
            else "top" == c && (e = a(".pager", u).eq(b).position().top);
            return e
        }
        function f() {
            !b.infiniteLoop && b.hideControlOnEnd && (o == L ? a(".bx-prev", u).hide() : a(".bx-prev", u).show(), o == G ? a(".bx-next", u).hide() : a(".bx-next", u).show())
        }
        function k() {
            var c = a("img", l.eq(o)).attr("title");
            "" != c ? b.captionsSelector ? a(b.captionsSelector).html(c) : a(".bx-captions", u).html(c) : b.captionsSelector ? a(b.captionsSelector).html("\u00a0") : a(".bx-captions", u).html("\u00a0")
        }
        function n(c) {
            var e = l.length;
            1 < b.moveSlideQty && (e = 0 != l.length % b.moveSlideQty ? Math.ceil(l.length / b.moveSlideQty) : l.length / b.moveSlideQty);
            var f = "";
            if (b.buildPager) for (c = 0; c < e; c++) f += b.buildPager(c, l.eq(c * b.moveSlideQty));
            else if ("full" == c) for (c = 1; c <= e; c++) f += '<a href="" class="pager-link pager-' + c + '">' + c + "</a>";
            else "short" == c && (f = '<span class="bx-pager-current">' + (b.startingSlide + 1) + "</span> " + b.pagerShortSeparator + ' <span class="bx-pager-total">' + l.length + "</span>");
            b.pagerSelector ? (a(b.pagerSelector).append(f), I = a(b.pagerSelector)) : (e = a('<div class="bx-pager"></div>'), e.append(f), "top" == b.pagerLocation ? u.prepend(e) : "bottom" == b.pagerLocation && u.append(e), I = a(".bx-pager", u));
            I.children().click(function () {
                if (b.pagerType == "full") {
                    var a =
                    I.children().index(this);
                    b.moveSlideQty > 1 && (a = a * b.moveSlideQty);
                    s.goToSlide(a)
                }
                return false
            })
        }
        function q(c) {
            "full" == b.pagerType && b.pager ? (a("a", I).removeClass(b.pagerActiveClass), a("a", I).eq(c).addClass(b.pagerActiveClass)) : "short" == b.pagerType && b.pager && a(".bx-pager-current", I).html(o + 1)
        }
        function g() {
            l.not(":eq(" + o + ")").fadeTo(b.speed, 0).css("zIndex", 98);
            l.eq(o).css("zIndex", 99).fadeTo(b.speed, 1, function () {
                B = !1;
                jQuery.browser.msie && l.eq(o).get(0).style.removeAttribute("filter");
                b.onAfterSlide(o, l.length, l.eq(o))
            })
        }
        function p(a, c, e) {
            "horizontal" == b.mode ? "next" == b.tickerDirection ? r.animate({
                left: "-=" + c + "px"
            }, e, "linear", function () {
                r.css("left", a);
                p(a, E, b.tickerSpeed)
            }) : "prev" == b.tickerDirection && r.animate({
                left: "+=" + c + "px"
            }, e, "linear", function () {
                r.css("left", a);
                p(a, E, b.tickerSpeed)
            }) : "vertical" == b.mode && ("next" == b.tickerDirection ? r.animate({
                top: "-=" + c + "px"
            }, e, "linear", function () {
                r.css("top", a);
                p(a, D, b.tickerSpeed)
            }) : "prev" == b.tickerDirection && r.animate({
                top: "+=" + c + "px"
            }, e, "linear", function () {
                r.css("top", a);
                p(a, D, b.tickerSpeed)
            }))
        }
        var b = a.extend({
            mode: "horizontal",
            infiniteLoop: !0,
            hideControlOnEnd: !1,
            controls: !0,
            speed: 500,
            easing: "swing",
            pager: !1,
            pagerSelector: null,
            pagerType: "full",
            pagerLocation: "bottom",
            pagerShortSeparator: "/",
            pagerActiveClass: "pager-active",
            nextText: "next",
            nextImage: "",
            nextSelector: null,
            prevText: "prev",
            prevImage: "",
            prevSelector: null,
            captions: !1,
            captionsSelector: null,
            auto: !1,
            autoDirection: "next",
            autoControls: !1,
            autoControlsSelector: null,
            autoStart: !0,
            autoHover: !1,
            autoDelay: 0,
            pause: 3E3,
            startText: "start",
            startImage: "",
            stopText: "stop",
            stopImage: "",
            ticker: !1,
            tickerSpeed: 5E3,
            tickerDirection: "next",
            tickerHover: !1,
            wrapperClass: "bx-wrapper",
            startingSlide: 0,
            displaySlideQty: 1,
            moveSlideQty: 1,
            randomStart: !1,
            onBeforeSlide: function () {},
            onAfterSlide: function () {},
            onLastSlide: function () {},
            onFirstSlide: function () {},
            onNextSlide: function () {},
            onPrevSlide: function () {},
            buildPager: null
        }, b),
            s = this,
            r = "",
            l = "",
            u = "",
            y = "",
            ia = "",
            P = "",
            Q = "",
            J = "",
            I = "",
            R = "",
            H = "",
            N = "",
            S = "",
            t = !0,
            C = 0,
            x = 0,
            o = 0,
            A = 0,
            z = 0,
            E = 0,
            D = 0,
            Z = 0,
            V =
            0,
            B = !1,
            L = 0,
            G = l.length - 1;
        this.goToSlide = function (a, c) {
            if (!B) {
                B = !0;
                o = a;
                b.onBeforeSlide(o, l.length, l.eq(o));
                "undefined" == typeof c && (c = !0);
                c && b.auto && s.stopShow(!0);
                slide = a;
                if (slide == L) b.onFirstSlide(o, l.length, l.eq(o));
                if (slide == G) b.onLastSlide(o, l.length, l.eq(o));
                "horizontal" == b.mode ? r.animate({
                    left: "-" + e(slide, "left") + "px"
                }, b.speed, b.easing, function () {
                    B = !1;
                    b.onAfterSlide(o, l.length, l.eq(o))
                }) : "vertical" == b.mode ? r.animate({
                    top: "-" + e(slide, "top") + "px"
                }, b.speed, b.easing, function () {
                    B = !1;
                    b.onAfterSlide(o, l.length, l.eq(o))
                }) : "fade" == b.mode && g();
                f();
                1 < b.moveSlideQty && (a = Math.floor(a / b.moveSlideQty));
                q(a);
                k()
            }
        };
        this.goToNextSlide = function (a) {
            "undefined" == typeof a && (a = !0);
            a && b.auto && s.stopShow(!0);
            if (b.infiniteLoop) B || (B = !0, c = !1, o += b.moveSlideQty, o > G && (o %= l.length, c = !0), b.onNextSlide(o, l.length, l.eq(o)), b.onBeforeSlide(o, l.length, l.eq(o)), "horizontal" == b.mode ? r.animate({
                left: "-=" + b.moveSlideQty * P + "px"
            }, b.speed, b.easing, function () {
                B = false;
                c && r.css("left", "-" + e(o, "left") + "px");
                b.onAfterSlide(o, l.length, l.eq(o))
            }) : "vertical" == b.mode ? r.animate({
                top: "-=" + b.moveSlideQty * x + "px"
            }, b.speed, b.easing, function () {
                B = false;
                c && r.css("top", "-" + e(o, "top") + "px");
                b.onAfterSlide(o, l.length, l.eq(o))
            }) : "fade" == b.mode && g(), 1 < b.moveSlideQty ? q(Math.ceil(o / b.moveSlideQty)) : q(o), k());
            else if (!B) {
                var c = !1;
                o += b.moveSlideQty;
                o <= G ? (f(), b.onNextSlide(o, l.length, l.eq(o)), s.goToSlide(o)) : o -= b.moveSlideQty
            }
        };
        this.goToPreviousSlide = function (c) {
            "undefined" == typeof c && (c = !0);
            c && b.auto && s.stopShow(!0);
            if (b.infiniteLoop) B || (B = !0, n = !1, o -= b.moveSlideQty, 0 > o && (negativeOffset = o % l.length, o = 0 == negativeOffset ? 0 : l.length + negativeOffset, n = !0), b.onPrevSlide(o, l.length, l.eq(o)), b.onBeforeSlide(o, l.length, l.eq(o)), "horizontal" == b.mode ? r.animate({
                left: "+=" + b.moveSlideQty * P + "px"
            }, b.speed, b.easing, function () {
                B = false;
                n && r.css("left", "-" + e(o, "left") + "px");
                b.onAfterSlide(o, l.length, l.eq(o))
            }) : "vertical" == b.mode ? r.animate({
                top: "+=" + b.moveSlideQty * x + "px"
            }, b.speed, b.easing, function () {
                B = false;
                n && r.css("top", "-" + e(o, "top") + "px");
                b.onAfterSlide(o, l.length, l.eq(o))
            }) : "fade" == b.mode && g(), 1 < b.moveSlideQty ? q(Math.ceil(o / b.moveSlideQty)) : q(o), k());
            else if (!B) {
                var n = !1;
                o -= b.moveSlideQty;
                0 > o && (o = 0, b.hideControlOnEnd && a(".bx-prev", u).hide());
                f();
                b.onPrevSlide(o, l.length, l.eq(o));
                s.goToSlide(o)
            }
        };
        this.goToFirstSlide = function (a) {
            "undefined" == typeof a && (a = !0);
            s.goToSlide(L, a)
        };
        this.goToLastSlide = function () {
            if ("undefined" == typeof a) var a = !0;
            s.goToSlide(G, a)
        };
        this.getCurrentSlide = function () {
            return o
        };
        this.getSlideCount = function () {
            return l.length
        };
        this.stopShow =

        function (a) {
            clearInterval(R);
            "undefined" == typeof a && (a = !0);
            a && b.autoControls && (H.html(N).removeClass("stop").addClass("start"), t = !1)
        };
        this.startShow = function (c) {
            "undefined" == typeof c && (c = !0);
            b.auto ? b.infiniteLoop ? "next" == b.autoDirection ? R = setInterval(function () {
                s.goToNextSlide(!1)
            }, b.pause) : "prev" == b.autoDirection && (R = setInterval(function () {
                s.goToPreviousSlide(!1)
            }, b.pause)) : "next" == b.autoDirection ? R = setInterval(function () {
                o += b.moveSlideQty;
                o > G && (o %= l.length);
                s.goToSlide(o, !1)
            }, b.pause) : "prev" == b.autoDirection && (R = setInterval(function () {
                o -= b.moveSlideQty;
                0 > o && (negativeOffset = o % l.length, o = 0 == negativeOffset ? 0 : l.length + negativeOffset);
                s.goToSlide(o, !1)
            }, b.pause)) : b.ticker && (b.tickerSpeed *= 10, a(".pager", u).each(function () {
                E += a(this).width();
                D += a(this).height()
            }), "prev" == b.tickerDirection && "horizontal" == b.mode ? r.css("left", "-" + (E + A) + "px") : "prev" == b.tickerDirection && "vertical" == b.mode && r.css("top", "-" + (D + z) + "px"), "horizontal" == b.mode ? (Z = parseInt(r.css("left")), p(Z, E, b.tickerSpeed)) : "vertical" == b.mode && (V = parseInt(r.css("top")), p(V, D, b.tickerSpeed)), b.tickerHover && r.hover(function () {
                t && s.stopTicker(false)
            }, function () {
                t && s.startTicker(false)
            }));
            c && b.autoControls && (H.html(S).removeClass("start").addClass("stop"), t = !0)
        };
        this.stopTicker = function (a) {
            r.stop();
            "undefined" == typeof a && (a = !0);
            a && b.ticker && (H.html(N).removeClass("stop").addClass("start"), t = !1)
        };
        this.startTicker = function (a) {
            if ("horizontal" == b.mode) {
                if ("next" == b.tickerDirection) var a = parseInt(r.css("left")),
                    c = E + a + l.eq(0).width();
                else "prev" == b.tickerDirection && (a = -parseInt(r.css("left")), c = a - l.eq(0).width());
                var e = c * b.tickerSpeed / E;
                p(Z, c, e)
            } else if ("vertical" == b.mode && ("next" == b.tickerDirection ? (c = parseInt(r.css("top")), c = D + c + l.eq(0).height()) : "prev" == b.tickerDirection && (c = -parseInt(r.css("top")), c -= l.eq(0).height()), e = c * b.tickerSpeed / D, p(V, c, e), "undefined" == typeof a && (a = !0), a && b.ticker)) H.html(S).removeClass("start").addClass("stop"), t = !0
        };
        this.initShow = function () {
            r = a(this);
            r.clone();
            l = r.children();
            u = "";
            y = r.children(":first");
            ia = y.width();
            C = 0;
            P = y.outerWidth();
            x = 0;
            Q = y.outerWidth() * b.displaySlideQty;
            J = y.outerHeight() * b.displaySlideQty;
            B = !1;
            I = "";
            z = A = o = 0;
            S = N = H = R = "";
            t = !0;
            L = V = Z = D = E = 0;
            G = l.length - 1;
            l.each(function () {
                a(this).outerHeight() > x && (x = a(this).outerHeight());
                a(this).outerWidth() > C && (C = a(this).outerWidth())
            });
            if (b.randomStart) {
                var e = Math.floor(Math.random() * l.length);
                o = e;
                A = P * (b.moveSlideQty + e);
                z = x * (b.moveSlideQty + e)
            } else o = b.startingSlide, A = P * (b.moveSlideQty + b.startingSlide), z = x * (b.moveSlideQty + b.startingSlide);
            if ("horizontal" == b.mode || "vertical" == b.mode) e = c(l, 0, b.moveSlideQty, "backward"), a.each(e, function () {
                r.prepend(a(this))
            }), e = c(l, 0, l.length + b.moveSlideQty - 1 - (l.length - b.displaySlideQty), "forward"), b.infiniteLoop && a.each(e, function () {
                r.append(a(this))
            });
            "horizontal" == b.mode ? (r.wrap('<div class="' + b.wrapperClass + '" style="width:' + Q + 'px; position:relative;"></div>').wrap('<div class="bx-window" style="position:relative; overflow:hidden; width:' + Q + 'px;"></div>').css({
                width: "999999px",
                position: "relative",
                left: "-" + A + "px"
            }), r.children().css({
                width: ia,
                "float": "left",
                listStyle: "none"
            }), u = r.parent().parent(), l.addClass("pager")) : "vertical" == b.mode ? (r.wrap('<div class="' + b.wrapperClass + '" style="width:' + C + 'px; position:relative;"></div>').wrap('<div class="bx-window" style="width:' + C + "px; height:" + J + 'px; position:relative; overflow:hidden;"></div>').css({
                height: "999999px",
                position: "relative",
                top: "-" + z + "px"
            }), r.children().css({
                listStyle: "none",
                height: x
            }), u = r.parent().parent(), l.addClass("pager")) : "fade" == b.mode && (r.wrap('<div class="' + b.wrapperClass + '" style="width:' + C + 'px; position:relative;"></div>').wrap('<div class="bx-window" style="height:' + x + "px; width:" + C + 'px; position:relative; overflow:hidden;"></div>'), r.children().css({
                listStyle: "none",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 98
            }), u = r.parent().parent(), l.not(":eq(" + o + ")").fadeTo(0, 0), l.eq(o).css("zIndex", 99));
            b.captions && null == b.captionsSelector && u.append('<div class="bx-captions"></div>');
            b.pager && !b.ticker && ("full" == b.pagerType ? n("full") : "short" == b.pagerType && n("short"));
            if (b.controls && !b.ticker) {
                "" != b.nextImage ? (nextContent = b.nextImage, nextType = "image") : (nextContent = b.nextText, nextType = "text");
                "" != b.prevImage ? (prevContent = b.prevImage, prevType = "image") : (prevContent = b.prevText, prevType = "text");
                var e = nextType,
                    g = nextContent,
                    p = prevType,
                    M = prevContent,
                    F = a('<a href="" class="bx-next"></a>'),
                    T = a('<a href="" class="bx-prev"></a>');
                "text" == e ? F.html(g) : F.html('<img src="' + g + '" />');
                "text" == p ? T.html(M) : T.html('<img src="' + M + '" />');
                b.prevSelector ? a(b.prevSelector).append(T) : u.append(T);
                b.nextSelector ? a(b.nextSelector).append(F) : u.append(F);
                F.click(function () {
                    s.goToNextSlide();
                    return false
                });
                T.click(function () {
                    s.goToPreviousSlide();
                    return false
                })
            }
            if (b.auto || b.ticker) b.autoControls && ("" != b.startImage ? (startContent = b.startImage, startType = "image") : (startContent = b.startText, startType = "text"), "" != b.stopImage ? (stopContent = b.stopImage, stopType = "image") : (stopContent = b.stopText, stopType = "text"), e = startType, g = startContent, p = stopType, M = stopContent, H = a('<a href="" class="bx-start"></a>'), N = "text" == e ? g : '<img src="' + g + '" />', S = "text" == p ? M : '<img src="' + M + '" />', b.autoControlsSelector ? a(b.autoControlsSelector).append(H) : (u.append('<div class="bx-auto"></div>'), a(".bx-auto", u).html(H)), H.click(function () {
                b.ticker ? a(this).hasClass("stop") ? s.stopTicker() : a(this).hasClass("start") && s.startTicker() : a(this).hasClass("stop") ? s.stopShow(true) : a(this).hasClass("start") && s.startShow(true);
                return false
            })), b.autoStart ? setTimeout(function () {
                s.startShow(true)
            }, b.autoDelay) : s.stopShow(!0), b.autoHover && !b.ticker && u.find(".bx-window").hover(function () {
                t && s.stopShow(false)
            }, function () {
                t && s.startShow(false)
            });
            1 < b.moveSlideQty ? q(Math.ceil(o / b.moveSlideQty)) : q(o);
            f();
            b.captions && k();
            b.onAfterSlide(o, l.length, l.eq(o))
        };
        this.destroyShow = function () {
            clearInterval(R);
            a(".bx-next, .bx-prev, .bx-pager, .bx-auto", u).remove();
            r.unwrap().unwrap().removeAttr("style");
            r.children().removeAttr("style").not(".pager").remove();
            l.removeClass("pager")
        };
        this.reloadShow = function () {
            s.destroyShow();
            s.initShow()
        };
        this.each(function () {
            0 < a(this).children().length && s.initShow()
        });
        return this
    };
    jQuery.fx.prototype.cur = function () {
        return null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop]) ? this.elem[this.prop] : parseFloat(jQuery.css(this.elem, this.prop))
    }
})(jQuery);
jQuery.url = function () {
    var a = {},
        b = {},
        c = window.location,
        e = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),
        f = /(?:^|&)([^&=]*)=?([^&]*)/g,
        k = {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        },
        n =

        function () {
            str = decodeURI(c);
            for (var n = k.loose.exec(str), g = {}, p = 14; p--;) g[e[p]] = n[p] || "";
            g.queryKey = {};
            g[e[12]].replace(f, function (a, b, c) {
                b && (g.queryKey[b] = c)
            });
            b = g;
            n = b.path;
            a = [];
            a = 1 == b.path.length ? {} : ("/" == n.charAt(n.length - 1) ? n.substring(1, n.length - 1) : path = n.substring(1)).split("/")
        };
    return {
        setMode: function (a) {
            strictMode = "strict" == a ? !0 : !1;
            return this
        },
        setUrl: function (a) {
            c = void 0 === a ? window.location : a;
            n();
            return this
        },
        segment: function (c) {
            b.length || n();
            return void 0 === c ? a.length : "" === a[c] || void 0 === a[c] ? null : a[c]
        },
        attr: function (a) {
            b.length || n();
            return "base" == a ? null !== b.port && "" !== b.port ? b.protocol + "://" + b.host + ":" + b.port + "/" : b.protocol + "://" + b.host + "/" : "" === b[a] ? null : b[a]
        },
        param: function (a) {
            b.length || n();
            return null === b.queryKey[a] ? null : b.queryKey[a]
        }
    }
}();
var movingWithinSite = !1,
    codeToExecute = function () {};

function userMovingWithinSite() {
    movingWithinSite = !0
}
var ctrlKeyIsDown = !1;

function interceptKeyUp(a) {
    if (!a) if (window.event) a = window.event;
    else return;
    keyCode = a.keyCode;
    17 == keyCode && (ctrlKeyIsDown = !1)
}
function interceptKeyDown(a) {
    if (!a) if (window.event) a = window.event;
    else return;
    keyCode = a.keyCode;
    116 == keyCode && userMovingWithinSite();
    17 == keyCode && (ctrlKeyIsDown = !0);
    ctrlKeyIsDown && 82 == keyCode && userMovingWithinSite()
}

function interceptKeyPress(a) {
    if (!a) if (window.event) a = window.event;
    else return;
    var b = a.keyCode ? a.keyCode : a.which ? a.which : void 0;
    (null == a.charCode || 0 == a.charCode) && 116 == b && userMovingWithinSite()
}
function attachEventListener(a, b, c, e) {
    window.addEventListener ? a.addEventListener(b, c, e) : a.attachEvent("on" + b, c)
}(function (a) {
    a.fn.onUserExit = function (b) {
        b = a.extend({
            execute: "",
            internalURLs: ""
        }, b);
        codeToExecute = b.execute;
        a("a").each(function () {
            var c = a(this),
                e = !1,
                f = b.internalURLs.split("|");
            for (i = 0; i < f.length; i++) void 0 != c.attr("href") && (-1 !== c.attr("href").indexOf(f[i]) && (e = !0), -1 == c.attr("href").indexOf("http://") && (e = !0));
            !0 == e && c.bind("click", function () {
                userMovingWithinSite()
            })
        });
        a("form").each(function () {
            var b = a(this);
            currentonSubmit = b.attr("onSubmit");
            void 0 === currentonSubmit && (currentonSubmit = "");
            b.attr("onSubmit", currentonSubmit + " userMovingWithinSite();")
        });
        attachEventListener(document, "keydown", interceptKeyDown, !0);
        attachEventListener(document, "keyup", interceptKeyUp, !0);
        attachEventListener(document, "keypress", interceptKeyPress, !0)
    };
    a(window).unload(function () {
        !1 == movingWithinSite && codeToExecute()
    })
})(jQuery);

$.fn.resizeIMG = function (a) {
    m = Math.ceil;
    "undefined" == a && (a = 700);
    h = w = a;
    $(this).each(function () {
        image_h = $(this).height();
        image_w = $(this).width();
        if (image_w > a) {
            var b = a / image_w;
            w = a;
            h = m(image_h * b);
            $(this).css({
                //height: h
                width: w
            })
        }
    })
};
/**
 * jQuery Validation Plugin 1.9.0
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2011 Jörn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(c){
		c.extend(c.fn,{validate:function(a){
			if(this.length){var b=c.data(this[0],"validator");
			if(b)return b;this.attr("novalidate","novalidate");
				b=new c.validator(a,this[0]);c.data(this[0],"validator",b);
			if(b.settings.onsubmit){a=this.find("input, button");a.filter(".cancel").click(function(){b.cancelSubmit=true});
				b.settings.submitHandler&&a.filter(":submit").click(function(){b.submitButton=this});
				this.submit(function(d){
					function e(){if(b.settings.submitHandler){if(
						b.submitButton)var f=c("<input type='hidden'/>").attr("name",b.submitButton.name).val(b.submitButton.value).appendTo(b.currentForm);
						b.settings.submitHandler.call(b,b.currentForm);
						b.submitButton&&f.remove();return false}return true}
						b.settings.debug&&d.preventDefault();if(b.cancelSubmit){
						b.cancelSubmit=false;return e()}if(b.form()){if(b.pendingRequest){
						b.formSubmitted=true;return false}return e()}else{
						b.focusInvalid();return false}})}return b}
							else a&&a.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing")},valid:function(){
						if(c(this[0]).is("form"))return this.validate().form();
						else{var a=true,b=c(this[0].form).validate();this.each(function(){
							a&=b.element(this)});return a}},
						removeAttrs:function(a){var b={},d=this;c.each(a.split(/\s/),function(e,f){b[f]=d.attr(f);
						d.removeAttr(f)});return b},rules:function(a,b){var d=this[0];
						if(a){var e=c.data(d.form,"validator").settings,f=e.rules,g=c.validator.staticRules(d);
						switch(a){case "add":
									c.extend(g,c.validator.normalizeRule(b));
									[d.name]=g;if(b.messages)e.messages[d.name]=c.extend(e.messages[d.name],b.messages);break;
								case "remove":if(!b){delete f[d.name];
									return g}var h={};c.each(b.split(/\s/),function(j,i){h[i]=g[i];
									delete g[i]});return h}}d=c.validator.normalizeRules(c.extend({},c.validator.metadataRules(d),
										c.validator.classRules(d),c.validator.attributeRules(d),c.validator.staticRules(d)),d);
									if(d.required){e=d.required;delete d.required;d=c.extend({required:e},d)}
										return d}});c.extend(c.expr[":"],{blank:function(a){return!c.trim(""+a.value)},
										filled:function(a){return!!c.trim(""+a.value)},unchecked:function(a){return!a.checked}});c.validator=function(a,
b){this.settings=c.extend(true,{},c.validator.defaults,a);this.currentForm=b;this.init()};c.validator.format=function(a,b){if(arguments.length==1)return function(){var d=c.makeArray(arguments);d.unshift(a);return c.validator.format.apply(this,d)};if(arguments.length>2&&b.constructor!=Array)b=c.makeArray(arguments).slice(1);if(b.constructor!=Array)b=[b];c.each(b,function(d,e){a=a.replace(RegExp("\\{"+d+"\\}","g"),e)});return a};c.extend(c.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",
validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:c([]),errorLabelContainer:c([]),onsubmit:true,ignore:":hidden",ignoreTitle:false,onfocusin:function(a){this.lastActive=a;if(this.settings.focusCleanup&&!this.blockFocusCleanup){this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass);this.addWrapper(this.errorsFor(a)).hide()}},onfocusout:function(a){if(!this.checkable(a)&&(a.name in this.submitted||!this.optional(a)))this.element(a)},
onkeyup:function(a){if(a.name in this.submitted||a==this.lastElement)this.element(a)},
										onclick:function(a){if(a.name in this.submitted)this.element(a);
											else a.parentNode.name in this.submitted&&this.element(a.parentNode)},
										highlight:function(a,b,d){a.type==="radio"?this.findByName(a.name).addClass(b).removeClass(d):c(a).addClass(b).removeClass(d)},
										unhighlight:function(a,b,d){a.type==="radio"?this.findByName(a.name).removeClass(b).addClass(d):c(a).removeClass(b).addClass(d)}},
										setDefaults:function(a){c.extend(c.validator.defaults,a)},
											messages:{	required:"Bạn chưa nhập giá cho sản phẩm.",
														remote:"Please fix this field.",
														email:"Please enter a valid email address.",
														url:"Please enter a valid URL.",
														date:"Please enter a valid date.",
														dateISO:"Please enter a valid date (ISO).",
														number:"Please enter a valid number.",
														digits:"Please enter only digits.",
														creditcard:"Please enter a valid credit card number.",
														equalTo:"Please enter the same value again.",
														accept:"Please enter a value with a valid extension.",
														maxlength:c.validator.format("Please enter no more than {0} characters."),
														minlength:c.validator.format("Please enter at least {0} characters."),
														rangelength:c.validator.format("Please enter a value between {0} and {1} characters long."),
														range:c.validator.format("Please enter a value between {0} and {1}."),
														max:c.validator.format("Please enter a value less than or equal to {0}."),
														min:c.validator.format("Please enter a value greater than or equal to {0}.")},
														autoCreateRanges:false,prototype:{init:function(){
															function a(e){var f=c.data(this[0].form,"validator"),g="on"+e.type.replace(/^validate/,"");
																f.settings[g]&&f.settings[g].call(f,this[0],e)}this.labelContainer=c(this.settings.errorLabelContainer);
																this.errorContext=this.labelContainer.length&&this.labelContainer||c(this.currentForm);
																this.containers=c(this.settings.errorContainer).add(this.settings.errorLabelContainer);
																this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};
																this.invalid={};this.reset();var b=this.groups={};c.each(
																	this.settings.groups,function(e,f){c.each(f.split(/\s/),function(g,h){b[h]=e})});
																	var d=this.settings.rules;c.each(d,function(e,f){d[e]=c.validator.normalizeRule(f)});
																	c(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",a).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",
a);
																this.settings.invalidHandler&&c(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)},
																	form:function(){this.checkForm();c.extend(this.submitted,this.errorMap);
																		this.invalid=c.extend({},this.errorMap);this.valid()||c(this.currentForm).triggerHandler("invalid-form",[this]);
																		this.showErrors();return this.valid()},checkForm:function(){this.prepareForm();
																		for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);
																			return this.valid()},element:function(a){this.lastElement=a=this.validationTargetFor(this.clean(a));
																			this.prepareElement(a);this.currentElements=c(a);var b=this.check(a);
																				if(b)delete this.invalid[a.name];else this.invalid[a.name]=true;
																				if(!this.numberOfInvalids())this.toHide=this.toHide.add(this.containers);
																					this.showErrors();return b},showErrors:function(a){if(a){c.extend(this.errorMap,a);
																					this.errorList=[];for(var b in a)this.errorList.push({message:a[b],
																						element:this.findByName(b)[0]});this.successList=c.grep(this.successList,function(d){return!(d.name in a)})}this.settings.showErrors?
this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){c.fn.resetForm&&c(this.currentForm).resetForm();
									this.submitted={};this.lastElement=null;this.prepareForm();
									this.hideErrors();this.elements().removeClass(this.settings.errorClass)},
										numberOfInvalids:function(){return this.objectLength(this.invalid)},
										objectLength:function(a){var b=0,d;for(d in a)b++;return b},
										hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return this.size()==
0},size:function(){return this.errorList.length},focusInvalid:function(){
							if(this.settings.focusInvalid)try{c(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(a){}},findLastActive:function(){var a=this.lastActive;return a&&c.grep(this.errorList,function(b){return b.element.name==a.name}).length==1&&a},elements:function(){var a=this,b={};return c(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){!this.name&&
a.settings.debug&&window.console&&console.error("%o has no name assigned",this);
							if(this.name in b||!a.objectLength(c(this).rules()))return false;return b[this.name]=true})},
							clean:function(a){return c(a)[0]},
								errors:function(){return c(this.settings.errorElement+"."+this.settings.errorClass,this.errorContext)},
								reset:function(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=c([]);this.toHide=c([]);this.currentElements=c([])},
								prepareForm:function(){this.reset();this.toHide=this.errors().add(this.containers)},
								prepareElement:function(a){this.reset();this.toHide=this.errorsFor(a)},
								check:function(a){a=this.validationTargetFor(this.clean(a));var b=c(a).rules(),d=false,e;for(e in b){var f={method:e,parameters:b[e]};try{var g=c.validator.methods[e].call(this,a.value.replace(/\r/g,""),a,f.parameters);if(g=="dependency-mismatch")d=true;else{d=false;if(g=="pending"){this.toHide=this.toHide.not(this.errorsFor(a));return}if(!g){this.formatAndAdd(a,f);return false}}}catch(h){this.settings.debug&&window.console&&console.log("exception occured when checking element "+
a.id+", check the '"+f.method+"' method",h);throw h;}}if(!d){this.objectLength(b)&&this.successList.push(a);return true}},
								customMetaMessage:function(a,b){if(c.metadata){
										var d=this.settings.meta?c(a).metadata()[this.settings.meta]:c(a).metadata();
											return d&&d.messages&&d.messages[b]}},customMessage:function(a,b){
										var d=this.settings.messages[a];return d&&(d.constructor==String?d:d[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(arguments[a]!==undefined)return arguments[a]},defaultMessage:function(a,
b){return this.findDefined(this.customMessage(a.name,b),this.customMetaMessage(a,b),!this.settings.ignoreTitle&&a.title||undefined,c.validator.messages[b],"<strong>Warning: No message defined for "+a.name+"</strong>")},formatAndAdd:function(a,b){var d=this.defaultMessage(a,b.method),e=/\$?\{(\d+)\}/g;if(typeof d=="function")d=d.call(this,b.parameters,a);else if(e.test(d))d=jQuery.format(d.replace(e,"{$1}"),b.parameters);this.errorList.push({message:d,element:a});this.errorMap[a.name]=d;this.submitted[a.name]=
d},addWrapper:function(a){if(this.settings.wrapper)a=a.add(a.parent(this.settings.wrapper));return a},defaultShowErrors:function(){for(var a=0;this.errorList[a];a++){var b=this.errorList[a];this.settings.highlight&&this.settings.highlight.call(this,b.element,this.settings.errorClass,this.settings.validClass);this.showLabel(b.element,b.message)}if(this.errorList.length)this.toShow=this.toShow.add(this.containers);if(this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);
if(this.settings.unhighlight){a=0;for(b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass)}this.toHide=this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return c(this.errorList).map(function(){return this.element})},showLabel:function(a,b){var d=this.errorsFor(a);if(d.length){d.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
d.attr("generated")&&d.html(b)}else{d=c("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(a),generated:true}).addClass(this.settings.errorClass).html(b||"");if(this.settings.wrapper)d=d.hide().show().wrap("<"+this.settings.wrapper+"/>").parent();this.labelContainer.append(d).length||(this.settings.errorPlacement?this.settings.errorPlacement(d,c(a)):d.insertAfter(a))}if(!b&&this.settings.success){d.text("");typeof this.settings.success=="string"?d.addClass(this.settings.success):this.settings.success(d)}this.toShow=
this.toShow.add(d)},errorsFor:function(a){var b=this.idOrName(a);return this.errors().filter(function(){return c(this).attr("for")==b})},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(a){if(this.checkable(a))a=this.findByName(a.name).not(this.settings.ignore)[0];return a},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(a){var b=this.currentForm;return c(document.getElementsByName(a)).map(function(d,
e){return e.form==b&&e.name==a&&e||null})},getLength:function(a,b){switch(b.nodeName.toLowerCase()){case "select":return c("option:selected",b).length;case "input":if(this.checkable(b))return this.findByName(b.name).filter(":checked").length}return a.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):true},dependTypes:{"boolean":function(a){return a},string:function(a,b){return!!c(a,b.form).length},"function":function(a,b){return a(b)}},optional:function(a){return!c.validator.methods.required.call(this,
c.trim(a.value),a)&&"dependency-mismatch"},startRequest:function(a){if(!this.pending[a.name]){this.pendingRequest++;this.pending[a.name]=true}},stopRequest:function(a,b){this.pendingRequest--;if(this.pendingRequest<0)this.pendingRequest=0;delete this.pending[a.name];if(b&&this.pendingRequest==0&&this.formSubmitted&&this.form()){c(this.currentForm).submit();this.formSubmitted=false}else if(!b&&this.pendingRequest==0&&this.formSubmitted){c(this.currentForm).triggerHandler("invalid-form",[this]);this.formSubmitted=
false}},previousValue:function(a){return c.data(a,"previousValue")||c.data(a,"previousValue",{old:null,valid:true,message:this.defaultMessage(a,"remote")})}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},dateDE:{dateDE:true},number:{number:true},numberDE:{numberDE:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(a,b){a.constructor==String?this.classRuleSettings[a]=b:c.extend(this.classRuleSettings,
a)},classRules:function(a){var b={};(a=c(a).attr("class"))&&c.each(a.split(" "),function(){this in c.validator.classRuleSettings&&c.extend(b,c.validator.classRuleSettings[this])});return b},attributeRules:function(a){var b={};a=c(a);for(var d in c.validator.methods){var e;if(e=d==="required"&&typeof c.fn.prop==="function"?a.prop(d):a.attr(d))b[d]=e;else if(a[0].getAttribute("type")===d)b[d]=true}b.maxlength&&/-1|2147483647|524288/.test(b.maxlength)&&delete b.maxlength;return b},metadataRules:function(a){if(!c.metadata)return{};
var b=c.data(a.form,"validator").settings.meta;return b?c(a).metadata()[b]:c(a).metadata()},staticRules:function(a){var b={},d=c.data(a.form,"validator");if(d.settings.rules)b=c.validator.normalizeRule(d.settings.rules[a.name])||{};return b},normalizeRules:function(a,b){c.each(a,function(d,e){if(e===false)delete a[d];else if(e.param||e.depends){var f=true;switch(typeof e.depends){case "string":f=!!c(e.depends,b.form).length;break;case "function":f=e.depends.call(b,b)}if(f)a[d]=e.param!==undefined?
e.param:true;else delete a[d]}});c.each(a,function(d,e){a[d]=c.isFunction(e)?e(b):e});c.each(["minlength","maxlength","min","max"],function(){if(a[this])a[this]=Number(a[this])});c.each(["rangelength","range"],function(){if(a[this])a[this]=[Number(a[this][0]),Number(a[this][1])]});if(c.validator.autoCreateRanges){if(a.min&&a.max){a.range=[a.min,a.max];delete a.min;delete a.max}if(a.minlength&&a.maxlength){a.rangelength=[a.minlength,a.maxlength];delete a.minlength;delete a.maxlength}}a.messages&&delete a.messages;
return a},normalizeRule:function(a){if(typeof a=="string"){var b={};c.each(a.split(/\s/),function(){b[this]=true});a=b}return a},addMethod:function(a,b,d){c.validator.methods[a]=b;c.validator.messages[a]=d!=undefined?d:c.validator.messages[a];b.length<3&&c.validator.addClassRules(a,c.validator.normalizeRule(a))},methods:{required:function(a,b,d){if(!this.depend(d,b))return"dependency-mismatch";switch(b.nodeName.toLowerCase()){case "select":return(a=c(b).val())&&a.length>0;case "input":if(this.checkable(b))return this.getLength(a,
b)>0;default:return c.trim(a).length>0}},remote:function(a,b,d){if(this.optional(b))return"dependency-mismatch";var e=this.previousValue(b);this.settings.messages[b.name]||(this.settings.messages[b.name]={});e.originalMessage=this.settings.messages[b.name].remote;this.settings.messages[b.name].remote=e.message;d=typeof d=="string"&&{url:d}||d;if(this.pending[b.name])return"pending";if(e.old===a)return e.valid;e.old=a;var f=this;this.startRequest(b);var g={};g[b.name]=a;c.ajax(c.extend(true,{url:d,
mode:"abort",port:"validate"+b.name,dataType:"json",data:g,success:function(h){f.settings.messages[b.name].remote=e.originalMessage;var j=h===true;if(j){var i=f.formSubmitted;f.prepareElement(b);f.formSubmitted=i;f.successList.push(b);f.showErrors()}else{i={};h=h||f.defaultMessage(b,"remote");i[b.name]=e.message=c.isFunction(h)?h(a):h;f.showErrors(i)}e.valid=j;f.stopRequest(b,j)}},d));return"pending"},minlength:function(a,b,d){return this.optional(b)||this.getLength(c.trim(a),b)>=d},maxlength:function(a,
b,d){return this.optional(b)||this.getLength(c.trim(a),b)<=d},rangelength:function(a,b,d){a=this.getLength(c.trim(a),b);return this.optional(b)||a>=d[0]&&a<=d[1]},min:function(a,b,d){return this.optional(b)||a>=d},max:function(a,b,d){return this.optional(b)||a<=d},range:function(a,b,d){return this.optional(b)||a>=d[0]&&a<=d[1]},email:function(a,b){return this.optional(b)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)},
url:function(a,b){return this.optional(b)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},
date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a))},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 -]+/.test(a))return false;var d=0,e=0,f=false;a=a.replace(/\D/g,"");for(var g=a.length-1;g>=
0;g--){e=a.charAt(g);e=parseInt(e,10);if(f)if((e*=2)>9)e-=9;d+=e;f=!f}return d%10==0},accept:function(a,b,d){d=typeof d=="string"?d.replace(/,/g,"|"):"png|jpe?g|gif";return this.optional(b)||a.match(RegExp(".("+d+")$","i"))},equalTo:function(a,b,d){d=c(d).unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){c(b).valid()});return a==d.val()}}});c.format=c.validator.format})(jQuery);
(function(c){var a={};if(c.ajaxPrefilter)c.ajaxPrefilter(function(d,e,f){e=d.port;if(d.mode=="abort"){a[e]&&a[e].abort();a[e]=f}});else{var b=c.ajax;c.ajax=function(d){var e=("port"in d?d:c.ajaxSettings).port;if(("mode"in d?d:c.ajaxSettings).mode=="abort"){a[e]&&a[e].abort();return a[e]=b.apply(this,arguments)}return b.apply(this,arguments)}}})(jQuery);
(function(c){!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(e){e=c.event.fix(e);e.type=b;return c.event.handle.call(this,e)}c.event.special[b]={setup:function(){this.addEventListener(a,d,true)},teardown:function(){this.removeEventListener(a,d,true)},handler:function(e){arguments[0]=c.event.fix(e);arguments[0].type=b;return c.event.handle.apply(this,arguments)}}});c.extend(c.fn,{validateDelegate:function(a,
b,d){return this.bind(b,function(e){var f=c(e.target);if(f.is(a))return d.apply(f,arguments)})}})})(jQuery);

/*
* jquery.tiny_mce.js
*/
(function(c){var b,e,a=[],d=window;c.fn.tinymce=function(j){var p=this,g,k,h,m,i,l="",n="";if(!p.length){return p}if(!j){return tinyMCE.get(p[0].id)}p.css("visibility","hidden");function o(){var r=[],q=0;if(f){f();f=null}p.each(function(t,u){var s,w=u.id,v=j.oninit;if(!w){u.id=w=tinymce.DOM.uniqueId()}s=new tinymce.Editor(w,j);r.push(s);s.onInit.add(function(){var x,y=v;p.css("visibility","");if(v){if(++q==r.length){if(tinymce.is(y,"string")){x=(y.indexOf(".")===-1)?null:tinymce.resolve(y.replace(/\.\w+$/,""));y=tinymce.resolve(y)}y.apply(x||tinymce,r)}}})});c.each(r,function(t,s){s.render()})}if(!d.tinymce&&!e&&(g=j.script_url)){e=1;h=g.substring(0,g.lastIndexOf("/"));if(/_(src|dev)\.js/g.test(g)){n="_src"}m=g.lastIndexOf("?");if(m!=-1){l=g.substring(m+1)}d.tinyMCEPreInit=d.tinyMCEPreInit||{base:h,suffix:n,query:l};if(g.indexOf("gzip")!=-1){i=j.language||"en";g=g+(/\?/.test(g)?"&":"?")+"js=true&core=true&suffix="+escape(n)+"&themes="+escape(j.theme)+"&plugins="+escape(j.plugins)+"&languages="+i;if(!d.tinyMCE_GZ){tinyMCE_GZ={start:function(){tinymce.suffix=n;function q(r){tinymce.ScriptLoader.markDone(tinyMCE.baseURI.toAbsolute(r))}q("langs/"+i+".js");q("themes/"+j.theme+"/editor_template"+n+".js");q("themes/"+j.theme+"/langs/"+i+".js");c.each(j.plugins.split(","),function(s,r){if(r){q("plugins/"+r+"/editor_plugin"+n+".js");q("plugins/"+r+"/langs/"+i+".js")}})},end:function(){}}}}c.ajax({type:"GET",url:g,dataType:"script",cache:true,success:function(){tinymce.dom.Event.domLoaded=1;e=2;if(j.script_loaded){j.script_loaded()}o();c.each(a,function(q,r){r()})}})}else{if(e===1){a.push(o)}else{o()}}return p};c.extend(c.expr[":"],{tinymce:function(g){return !!(g.id&&tinyMCE.get(g.id))}});function f(){function i(l){if(l==="remove"){this.each(function(n,o){var m=h(o);if(m){m.remove()}})}this.find("span.mceEditor,div.mceEditor").each(function(n,o){var m=tinyMCE.get(o.id.replace(/_parent$/,""));if(m){m.remove()}})}function k(n){var m=this,l;if(n!==b){i.call(m);m.each(function(p,q){var o;if(o=tinyMCE.get(q.id)){o.setContent(n)}})}else{if(m.length>0){if(l=tinyMCE.get(m[0].id)){return l.getContent()}}}}function h(m){var l=null;(m)&&(m.id)&&(d.tinymce)&&(l=tinyMCE.get(m.id));return l}function g(l){return !!((l)&&(l.length)&&(d.tinymce)&&(l.is(":tinymce")))}var j={};c.each(["text","html","val"],function(n,l){var o=j[l]=c.fn[l],m=(l==="text");c.fn[l]=function(s){var p=this;if(!g(p)){return o.apply(p,arguments)}if(s!==b){k.call(p.filter(":tinymce"),s);o.apply(p.not(":tinymce"),arguments);return p}else{var r="";var q=arguments;(m?p:p.eq(0)).each(function(u,v){var t=h(v);r+=t?(m?t.getContent().replace(/<(?:"[^"]*"|'[^']*'|[^'">])*>/g,""):t.getContent()):o.apply(c(v),q)});return r}}});c.each(["append","prepend"],function(n,m){var o=j[m]=c.fn[m],l=(m==="prepend");c.fn[m]=function(q){var p=this;if(!g(p)){return o.apply(p,arguments)}if(q!==b){p.filter(":tinymce").each(function(s,t){var r=h(t);r&&r.setContent(l?q+r.getContent():r.getContent()+q)});o.apply(p.not(":tinymce"),arguments);return p}}});c.each(["remove","replaceWith","replaceAll","empty"],function(m,l){var n=j[l]=c.fn[l];c.fn[l]=function(){i.call(this,l);return n.apply(this,arguments)}});j.attr=c.fn.attr;c.fn.attr=function(n,p){var m=this;if((!n)||(n!=="value")||(!g(m))){if(p!==b){return j.attr.call(m,n,p)}else{return j.attr.call(m,n)}}if(p!==b){k.call(m.filter(":tinymce"),p);j.attr.call(m.not(":tinymce"),n,p);return m}else{var o=m[0],l=h(o);return l?l.getContent():j.attr.call(c(o),n,p)}}}})(jQuery);

/*
* upload.js
*/

var maxNumID = 6;
(function($) {
    $.fn.extend({
        photoUpload: function(options) {    		
            var opt = $.extend({}, $.uploadSetUp.defaults, options);
            if (opt.file_types.match('jpg') && !opt.file_types.match('jpeg')) {
                opt.file_types += ',jpeg';
            }
            $this = $(this);
            new $.uploadSetUp(opt);
        },
        photoDel: function(id)
        {
            //$('#li_'+id).remove();
            submitID--;
        }
    });

    $.uploadSetUp = function(opt) 
	{
        var elm_input;        
        opt.maxNumID = parseInt(opt.maxNumID);       
                
        /*Add global variable*/       
        maxNumID = opt.maxNumID;
                
        $('body').append($('<div style="display: none;"></div>').append($('<iframe width="0" height="0" src="about:blank" id="'+ opt.prefix +'myFrame" name="'+ opt.prefix +'myFrame"></iframe>')));
        elm_input = createElmInput(opt);
        $this.append(elm_input);
        $("#"+ opt.prefix +"myFrame").after($('<form target="'+ opt.prefix +'myFrame" enctype="multipart/form-data" action="' + opt.ajaxFile + '" method="POST" name="'+ opt.prefix +'myUploadForm" id="'+ opt.prefix +'myUploadForm" style="display:none"></form>'));
						
		//$("input.file").attr('readonly','readonly');
		
        //Init load file
        initFile(opt);
        init(opt);
    };

    $.uploadSetUp.defaults = {
        // image types allowed
        file_types: "jpg,gif,png",
        // php script
        ajaxFile: "",
        maxNumID: 40,
        prefix: "",
		seckey: "",
		time: 0,
		width: 250,
		height: 250,
        callback: null
    };

    function createElmInput(opt)
    {
		var input = '<input type="hidden" id="width" name="width" value="'+ opt.width +'" /><input type="hidden" id="height" name="height" value="'+ opt.height +'" /><input type="hidden" id="time" name="time" value="'+ opt.time +'" /><input type="hidden" id="signkey" name="signkey" value="'+ opt.seckey +'" /><input type="file" name="files" rel="1" id="'+ opt.prefix  +'Filedata_1" class="file" />';
		return input;
    };
	
    //Init load file
    function initFile(opt)
    {
        //Bind
        $('#'+ opt.prefix +'Filedata_1').bind('change', function(e)
        {
			$('.pic-preview ').addClass('loading');
            if(submitID >= maxImage)
            {
                alert('Bạn chỉ được upload tối đa '+maxImage+' hình');
            }
            else
            {
                if (checkFileType(opt, this.value))
                {
                    var oldElement = this;
                    var newElement = $(oldElement).clone();
                    $(oldElement).attr('id', opt.prefix +'Filedata');
                    $(oldElement).attr('name', 'files');
                    $(oldElement).attr('class', 'clone');
                    $(oldElement).before(newElement);
					var newSignElement = $('#signkey').clone();
					var newTimeElement = $('#time').clone();
					var newWidthElement = $('#width').clone();
					var newHeightElement = $('#height').clone();
				    $('#'+ opt.prefix +'myUploadForm').empty();
                    $(oldElement).appendTo('#'+ opt.prefix +'myUploadForm');
					$(newSignElement).appendTo('#'+ opt.prefix +'myUploadForm');
					$(newTimeElement).appendTo('#'+ opt.prefix +'myUploadForm');
					$(newWidthElement).appendTo('#'+ opt.prefix +'myUploadForm');
					$(newHeightElement).appendTo('#'+ opt.prefix +'myUploadForm');
                    $('#'+ opt.prefix +'myUploadForm').submit();
                    submitID++;
                }
            }
        });
    }
			
    //check if file extension is allowed
    function checkFileType(opt, file_) {
        var ext_ = file_.toLowerCase().substr(file_.toLowerCase().lastIndexOf('.') + 1);
        if (!opt.file_types.match(ext_)) {
            alert('File ảnh không hợp lệ');
            return false;
        } 
        else return true;
    };
    
    function init(opt) {
        // execute event.submit when form is submitted
        $('#'+ opt.prefix +'myUploadForm').submit(function(){
            var bool = event.submit(this);
            initFile(opt);
            return bool;
        });        
                
        // function to handle form submission using iframe
        var event = {
            // setup iframe
            frame: function(_form) {
                $("#"+ opt.prefix +"myFrame")
                .empty()
                .one('load',  function() {
                    event.loaded(this, _form)
                });
            },
            // call event.submit after submit
            submit: function(_form) {
                event.frame(_form);
            },
            // display results from submit after loades into iframe
            loaded: function(id, _form) {            	
                var d = frametype(id);
                var data = d.body.innerHTML.replace(/^\s+|\s+$/g, '');                
                try
                {
                    try
                    {
                        var resp = eval('(' + data + ')');
						
                        if (opt.callback != null)
                        {
                            opt.callback(resp);
                        }
                    //callbackUpload(resp);
                    }
                    catch (ex){
                        alert(ex);
                    }
                    if(typeof rs == 'undefined')
                    {
                        var rs = null;
                    }
                }
                catch(ex)
                {
                    alert("Có lỗi xảy ra trong quá trình đăng ảnh. \nVui lòng thử lại lần nữa.");
                }
            },
            onerror: function(){
                try
                {
                }
                catch(ex)
                {
                    alert(ex);
                }
            }
        };		
        
        // check type of iframe
        function frametype(fid) {
            return (fid.contentDocument) ? fid.contentDocument: (fid.contentWindow) ? fid.contentWindow.document: window.frames[fid].document;
        };       
    };	
})(jQuery);

/**
 * jquery.simpletip 1.3.1. A simple tooltip plugin
 * 
 * Copyright (c) 2009 Craig Thompson
 * http://craigsworks.com
 *
 * Licensed under GPLv3
 * http://www.opensource.org/licenses/gpl-3.0.html
 *
 * Launch  : February 2009
 * Version : 1.3.1
 * Released: February 5, 2009 - 11:04am
 */
(function(){function e(e,t){var n=this;e=jQuery(e);t.content='<img src="'+Settings.imgurl+'/arrow_bubble.png">'+e.attr("rel");var r=jQuery(document.createElement("div")).addClass(t.baseClass).addClass(t.fixed?t.fixedClass:"").addClass(t.persistent?t.persistentClass:"").html(t.content).appendTo(e);t.hidden?r.hide():r.show();t.persistent?(e.click(function(t){t.target===e.get(0)&&("none"!==r.css("display")?n.hide():n.show())}),jQuery(window).mousedown(function(e){"none"!==r.css("display")&&0===(t.focus?jQuery(e.target).parents(".tooltip").andSelf().filter(function(){return this===r.get(0)}).length:0)&&n.hide()})):(e.hover(function(t){if(e.attr("rel")!="")n.show(t)},function(){n.hide()}),t.fixed||e.mousemove(function(e){"none"!==r.css("display")&&n.updatePos(e)}));jQuery.extend(n,{getVersion:function(){return[1,2,0]},getParent:function(){return e},getTooltip:function(){return r},getPos:function(){return r.offset()},setPos:function(t,i){var s=e.offset();"string"==typeof t&&(t=parseInt(t)+s.left);"string"==typeof i&&(i=parseInt(i)+s.top);r.css({left:t,top:i,"word-wrap":"break-word"});return n},show:function(e){t.onBeforeShow.call(n);n.updatePos(t.fixed?null:e);switch(t.showEffect){case"fade":r.fadeIn(t.showTime);break;case"slide":r.slideDown(t.showTime,n.updatePos);break;case"custom":t.showCustom.call(r,t.showTime);break;default:case"none":r.show()}r.addClass(t.activeClass);t.onShow.call(n);return n},hide:function(){t.onBeforeHide.call(n);switch(t.hideEffect){case"fade":r.fadeOut(t.hideTime);break;case"slide":r.slideUp(t.hideTime);break;case"custom":t.hideCustom.call(r,t.hideTime);break;default:case"none":r.hide()}r.removeClass(t.activeClass);t.onHide.call(n);return n},update:function(e){r.html(e);t.content=e;return n},load:function(e,i){t.beforeContentLoad.call(n);r.load(e,i,function(){t.onContentLoad.call(n)});return n},boundryCheck:function(e,t){var n=e+r.outerWidth(),i=t+r.outerHeight(),s=jQuery(window).width()+jQuery(window).scrollLeft(),o=jQuery(window).height()+jQuery(window).scrollTop();return[n>=s,i>=o]},updatePos:function(i){var s=r.outerWidth(),o=r.outerHeight();if(!i&&t.fixed)if(t.position.constructor==Array)u=parseInt(t.position[0]),i=parseInt(t.position[1]);else if(1===jQuery(t.position).attr("nodeType"))i=jQuery(t.position).offset(),u=i.left,i=i.top;else{i=e.offset();var u=e.outerWidth(),l=e.outerHeight();switch(t.position){case"top":var u=i.left-s/2+u/2;i=i.top-o;break;case"bottom":u=i.left-s/2+u/2;i=i.top+l;break;case"left":u=i.left-s;i=i.top-o/2+l/2;break;case"right":u=i.left+u;i=i.top-o/2+l/2;break;default:case"default":u=u/2+i.left+20,i=i.top}}else u=i.pageX,i=i.pageY;"object"!=typeof t.position?(u+=t.offset[0],i+=t.offset[1],t.boundryCheck&&(l=n.boundryCheck(u,i),l[0]&&(u=u-s/2-2*t.offset[0]),l[1]&&(i=i-o/2-2*t.offset[1]))):("string"==typeof t.position[0]&&(u=String(u)),"string"==typeof t.position[1]&&(i=String(i)));n.setPos(u,i);return n}})}jQuery.fn.simpletip=function(t){var n=jQuery(this).eq("number"==typeof t?t:0).data("simpletip");if(n)return n;var r={content:"A simple tooltip",persistent:!1,focus:!1,hidden:!0,position:"default",offset:[0,0],boundryCheck:!0,fixed:!0,showEffect:"none",showTime:150,showCustom:null,hideEffect:"none",hideTime:150,hideCustom:null,baseClass:"tooltip",activeClass:"active",fixedClass:"fixed",persistentClass:"persistent",focusClass:"focus",onBeforeShow:function(){},onShow:function(){},onBeforeHide:function(){},onHide:function(){},beforeContentLoad:function(){},onContentLoad:function(){}};jQuery.extend(r,t);this.each(function(){var t=new e(jQuery(this),r);jQuery(this).data("simpletip",t)});return this}})(jQuery)
/**
 *
 *
 * block promote
 *
 **/
 var blockPromote={totalpage:2,currentpage:[0,0],totalReason:6,init:function(a){this.pageData=a;this._randrighttab();this._attach();this._startRunRoll()},_attach:function(){$(".btn .next").click(function(){blockPromote.currentpage[blockPromote.currenttabright-1]++;blockPromote.currentpage[blockPromote.currenttabright-1]>blockPromote.totalpage&&(blockPromote.currentpage[blockPromote.currenttabright-1]=1);blockPromote._builtrightitem()});$(".btn .prev").click(function(){blockPromote.currentpage[blockPromote.currenttabright-
1]--;0==blockPromote.currentpage[blockPromote.currenttabright-1]&&(blockPromote.currentpage[blockPromote.currenttabright-1]=blockPromote.totalpage);blockPromote._builtrightitem()})},_randrighttab:function(){var a=Math.floor(2*Math.random()+1);$('.lbptab li[tab-id$="'+a+'"] a').addClass("active");$(".lbptab li").click(function(){var a=$(this).attr("tab-id");blockPromote._changerighttab(a)});$(".postPromote").hide();$(".list-content-"+a).show();blockPromote.currenttabright=a},_changerighttab:function(a){$(".lbptab li a").removeClass("active");
$(".postPromote").hide();blockPromote.currenttabright=a;0<$(".list-content-"+a+" li ").length?$(".list-content-"+a).show():($(".list-content-"+a).show(),blockPromote.currentpage[blockPromote.currenttabright-1]++,this._builtrightitem());$('.lbptab li[tab-id$="'+a+'"] a').addClass("active")},_builtrightitem:function(){var a=this.pageData[blockPromote.currenttabright-1].item,c="<li><ul>",b=0;end=0;switch(blockPromote.currentpage[blockPromote.currenttabright-1]){case 0:case 1:b=0;end=5;break;case 2:b=
5,end=10}for(;b<end;b++)var d=a[b],c=c+blockPromote._templaterightitem(d.link,d.title,d.summary,d.picture,blockPromote.pageData[blockPromote.currenttabright-1].code);$(".list-content-"+blockPromote.currenttabright).fadeIn("slow").html(c+"</ul></li>")},_templaterightitem:function(a,c,b,d,e){b=""+('<li><a class="title _trackLink" href="'+a+'" target="_blank" title="'+c+'" class="_trackLink" tracking_category="homepage_raovat" tracking="homepage_raovat_'+e+'">'+c+"</a>")+('<p class="summary">'+b+"</p>");
return b+='<div class="pic"><a href="'+a+'" target="_blank" title="'+c+'"><img src="'+d+'"></a></div></li>'},_startRunRoll:function(){try{roll=window.setTimeout("blockPromote._startRunRoll()",1E4),blockPromote.currentpage[blockPromote.currenttabright-1]++,blockPromote.currentpage[blockPromote.currenttabright-1]>blockPromote.totalpage&&(blockPromote.currentpage[blockPromote.currenttabright-1]=1),blockPromote._builtrightitem()}catch(a){console.log(a.message)}}};

/*
 * jQuery UI Datepicker 1.8.18
 * Depends:
 *	jquery.ui.core.js
 */(function($,undefined){function isArray(a){return a&&($.browser.safari&&typeof a=="object"&&a.length||a.constructor&&a.constructor.toString().match(/\Array\(\)/))}function extendRemove(a,b){$.extend(a,b);for(var c in b)if(b[c]==null||b[c]==undefined)a[c]=b[c];return a}function bindHover(a){var b="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return a.bind("mouseout",function(a){var c=$(a.target).closest(b);!c.length||c.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")}).bind("mouseover",function(c){var d=$(c.target).closest(b);!$.datepicker._isDisabledDatepicker(instActive.inline?a.parent()[0]:instActive.input[0])&&!!d.length&&(d.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),d.addClass("ui-state-hover"),d.hasClass("ui-datepicker-prev")&&d.addClass("ui-datepicker-prev-hover"),d.hasClass("ui-datepicker-next")&&d.addClass("ui-datepicker-next-hover"))})}function Datepicker(){this.debug=!1,this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},$.extend(this._defaults,this.regional[""]),this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}$.extend($.ui,{datepicker:{version:"1.8.18"}});var PROP_NAME="datepicker",dpuuid=(new Date).getTime(),instActive;$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){extendRemove(this._defaults,a||{});return this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase(),inline=nodeName=="div"||nodeName=="span";target.id||(this.uuid+=1,target.id="dp"+this.uuid);var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{}),nodeName=="input"?this._connectDatepicker(target,inst):inline&&this._inlineDatepicker(target,inst)},_newInst:function(a,b){var c=a[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:c,input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:b?bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')):this.dpDiv}},_connectDatepicker:function(a,b){var c=$(a);b.append=$([]),b.trigger=$([]);c.hasClass(this.markerClassName)||(this._attachments(c,b),c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),this._autoSize(b),$.data(a,PROP_NAME,b),b.settings.disabled&&this._disableDatepicker(a))},_attachments:function(a,b){var c=this._get(b,"appendText"),d=this._get(b,"isRTL");b.append&&b.append.remove(),c&&(b.append=$('<span class="'+this._appendClass+'">'+c+"</span>"),a[d?"before":"after"](b.append)),a.unbind("focus",this._showDatepicker),b.trigger&&b.trigger.remove();var e=this._get(b,"showOn");(e=="focus"||e=="both")&&a.focus(this._showDatepicker);if(e=="button"||e=="both"){var f=this._get(b,"buttonText"),g=this._get(b,"buttonImage");b.trigger=$(this._get(b,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:g,alt:f,title:f}):$('<button type="button"></button>').addClass(this._triggerClass).html(g==""?f:$("<img/>").attr({src:g,alt:f,title:f}))),a[d?"before":"after"](b.trigger),b.trigger.click(function(){$.datepicker._datepickerShowing&&$.datepicker._lastInput==a[0]?$.datepicker._hideDatepicker():$.datepicker._datepickerShowing&&$.datepicker._lastInput!=a[0]?($.datepicker._hideDatepicker(),$.datepicker._showDatepicker(a[0])):$.datepicker._showDatepicker(a[0]);return!1})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var d=function(a){var b=0,c=0;for(var d=0;d<a.length;d++)a[d].length>b&&(b=a[d].length,c=d);return c};b.setMonth(d(this._get(a,c.match(/MM/)?"monthNames":"monthNamesShort"))),b.setDate(d(this._get(a,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())}a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,b){var c=$(a);c.hasClass(this.markerClassName)||(c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),$.data(a,PROP_NAME,b),this._setDate(b,this._getDefaultDate(b),!0),this._updateDatepicker(b),this._updateAlternate(b),b.settings.disabled&&this._disableDatepicker(a),b.dpDiv.css("display","block"))},_dialogDatepicker:function(a,b,c,d,e){var f=this._dialogInst;if(!f){this.uuid+=1;var g="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+g+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'),this._dialogInput.keydown(this._doKeyDown),$("body").append(this._dialogInput),f=this._dialogInst=this._newInst(this._dialogInput,!1),f.settings={},$.data(this._dialogInput[0],PROP_NAME,f)}extendRemove(f.settings,d||{}),b=b&&b.constructor==Date?this._formatDate(f,b):b,this._dialogInput.val(b),this._pos=e?e.length?e:[e.pageX,e.pageY]:null;if(!this._pos){var h=document.documentElement.clientWidth,i=document.documentElement.clientHeight,j=document.documentElement.scrollLeft||document.body.scrollLeft,k=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[h/2-100+j,i/2-150+k]}this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),f.settings.onSelect=c,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),$.blockUI&&$.blockUI(this.dpDiv),$.data(this._dialogInput[0],PROP_NAME,f);return this},_destroyDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!!b.hasClass(this.markerClassName)){var d=a.nodeName.toLowerCase();$.removeData(a,PROP_NAME),d=="input"?(c.append.remove(),c.trigger.remove(),b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):(d=="div"||d=="span")&&b.removeClass(this.markerClassName).empty()}},_enableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!!b.hasClass(this.markerClassName)){var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!1,c.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().removeClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b})}},_disableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!!b.hasClass(this.markerClassName)){var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!0,c.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().addClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b}),this._disabledInputs[this._disabledInputs.length]=a}},_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return!0;return!1},_getInst:function(a){try{return $.data(a,PROP_NAME)}catch(b){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(a,b,c){var d=this._getInst(a);if(arguments.length==2&&typeof b=="string")return b=="defaults"?$.extend({},$.datepicker._defaults):d?b=="all"?$.extend({},d.settings):this._get(d,b):null;var e=b||{};typeof b=="string"&&(e={},e[b]=c);if(d){this._curInst==d&&this._hideDatepicker();var f=this._getDateDatepicker(a,!0),g=this._getMinMaxDate(d,"min"),h=this._getMinMaxDate(d,"max");extendRemove(d.settings,e),g!==null&&e.dateFormat!==undefined&&e.minDate===undefined&&(d.settings.minDate=this._formatDate(d,g)),h!==null&&e.dateFormat!==undefined&&e.maxDate===undefined&&(d.settings.maxDate=this._formatDate(d,h)),this._attachments($(a),d),this._autoSize(d),this._setDate(d,f),this._updateAlternate(d),this._updateDatepicker(d)}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){var b=this._getInst(a);b&&this._updateDatepicker(b)},_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},_getDateDatepicker:function(a,b){var c=this._getInst(a);c&&!c.inline&&this._setDateFromField(c,b);return c?this._getDate(c):null},_doKeyDown:function(a){var b=$.datepicker._getInst(a.target),c=!0,d=b.dpDiv.is(".ui-datepicker-rtl");b._keyEvent=!0;if($.datepicker._datepickerShowing)switch(a.keyCode){case 9:$.datepicker._hideDatepicker(),c=!1;break;case 13:var e=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",b.dpDiv);e[0]&&$.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,e[0]);var f=$.datepicker._get(b,"onSelect");if(f){var g=$.datepicker._formatDate(b);f.apply(b.input?b.input[0]:null,[g,b])}else $.datepicker._hideDatepicker();return!1;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 34:$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 35:(a.ctrlKey||a.metaKey)&&$.datepicker._clearDate(a.target),c=a.ctrlKey||a.metaKey;break;case 36:(a.ctrlKey||a.metaKey)&&$.datepicker._gotoToday(a.target),c=a.ctrlKey||a.metaKey;break;case 37:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?1:-1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 38:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,-7,"D"),c=a.ctrlKey||a.metaKey;break;case 39:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?-1:1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 40:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,7,"D"),c=a.ctrlKey||a.metaKey;break;default:c=!1}else a.keyCode==36&&a.ctrlKey?$.datepicker._showDatepicker(this):c=!1;c&&(a.preventDefault(),a.stopPropagation())},_doKeyPress:function(a){var b=$.datepicker._getInst(a.target);if($.datepicker._get(b,"constrainInput")){var c=$.datepicker._possibleChars($.datepicker._get(b,"dateFormat")),d=String.fromCharCode(a.charCode==undefined?a.keyCode:a.charCode);return a.ctrlKey||a.metaKey||d<" "||!c||c.indexOf(d)>-1}},_doKeyUp:function(a){var b=$.datepicker._getInst(a.target);if(b.input.val()!=b.lastVal)try{var c=$.datepicker.parseDate($.datepicker._get(b,"dateFormat"),b.input?b.input.val():null,$.datepicker._getFormatConfig(b));c&&($.datepicker._setDateFromField(b),$.datepicker._updateAlternate(b),$.datepicker._updateDatepicker(b))}catch(a){$.datepicker.log(a)}return!0},_showDatepicker:function(a){a=a.target||a,a.nodeName.toLowerCase()!="input"&&(a=$("input",a.parentNode)[0]);if(!$.datepicker._isDisabledDatepicker(a)&&$.datepicker._lastInput!=a){var b=$.datepicker._getInst(a);$.datepicker._curInst&&$.datepicker._curInst!=b&&($.datepicker._curInst.dpDiv.stop(!0,!0),b&&$.datepicker._datepickerShowing&&$.datepicker._hideDatepicker($.datepicker._curInst.input[0]));var c=$.datepicker._get(b,"beforeShow"),d=c?c.apply(a,[a,b]):{};if(d===!1)return;extendRemove(b.settings,d),b.lastVal=null,$.datepicker._lastInput=a,$.datepicker._setDateFromField(b),$.datepicker._inDialog&&(a.value=""),$.datepicker._pos||($.datepicker._pos=$.datepicker._findPos(a),$.datepicker._pos[1]+=a.offsetHeight);var e=!1;$(a).parents().each(function(){e|=$(this).css("position")=="fixed";return!e}),e&&$.browser.opera&&($.datepicker._pos[0]-=document.documentElement.scrollLeft,$.datepicker._pos[1]-=document.documentElement.scrollTop);var f={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null,b.dpDiv.empty(),b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),$.datepicker._updateDatepicker(b),f=$.datepicker._checkOffset(b,f,e),b.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":e?"fixed":"absolute",display:"none",left:f.left+"px",top:f.top+"px"});if(!b.inline){var g=$.datepicker._get(b,"showAnim"),h=$.datepicker._get(b,"duration"),i=function(){var a=b.dpDiv.find("iframe.ui-datepicker-cover");if(!!a.length){var c=$.datepicker._getBorders(b.dpDiv);a.css({left:-c[0],top:-c[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})}};b.dpDiv.zIndex($(a).zIndex()+1),$.datepicker._datepickerShowing=!0,$.effects&&$.effects[g]?b.dpDiv.show(g,$.datepicker._get(b,"showOptions"),h,i):b.dpDiv[g||"show"](g?h:null,i),(!g||!h)&&i(),b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus(),$.datepicker._curInst=b}}},_updateDatepicker:function(a){var b=this;b.maxRows=4;var c=$.datepicker._getBorders(a.dpDiv);instActive=a,a.dpDiv.empty().append(this._generateHTML(a));var d=a.dpDiv.find("iframe.ui-datepicker-cover");!d.length||d.css({left:-c[0],top:-c[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()}),a.dpDiv.find("."+this._dayOverClass+" a").mouseover();var e=this._getNumberOfMonths(a),f=e[1],g=17;a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),f>1&&a.dpDiv.addClass("ui-datepicker-multi-"+f).css("width",g*f+"em"),a.dpDiv[(e[0]!=1||e[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi"),a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),a==$.datepicker._curInst&&$.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&a.input[0]!=document.activeElement&&a.input.focus();if(a.yearshtml){var h=a.yearshtml;setTimeout(function(){h===a.yearshtml&&a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml),h=a.yearshtml=null},0)}},_getBorders:function(a){var b=function(a){return{thin:1,medium:2,thick:3}[a]||a};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},_checkOffset:function(a,b,c){var d=a.dpDiv.outerWidth(),e=a.dpDiv.outerHeight(),f=a.input?a.input.outerWidth():0,g=a.input?a.input.outerHeight():0,h=document.documentElement.clientWidth+$(document).scrollLeft(),i=document.documentElement.clientHeight+$(document).scrollTop();b.left-=this._get(a,"isRTL")?d-f:0,b.left-=c&&b.left==a.input.offset().left?$(document).scrollLeft():0,b.top-=c&&b.top==a.input.offset().top+g?$(document).scrollTop():0,b.left-=Math.min(b.left,b.left+d>h&&h>d?Math.abs(b.left+d-h):0),b.top-=Math.min(b.top,b.top+e>i&&i>e?Math.abs(e+g):0);return b},_findPos:function(a){var b=this._getInst(a),c=this._get(b,"isRTL");while(a&&(a.type=="hidden"||a.nodeType!=1||$.expr.filters.hidden(a)))a=a[c?"previousSibling":"nextSibling"];var d=$(a).offset();return[d.left,d.top]},_hideDatepicker:function(a){var b=this._curInst;if(!(!b||a&&b!=$.data(a,PROP_NAME))&&this._datepickerShowing){var c=this._get(b,"showAnim"),d=this._get(b,"duration"),e=this,f=function(){$.datepicker._tidyDialog(b),e._curInst=null};$.effects&&$.effects[c]?b.dpDiv.hide(c,$.datepicker._get(b,"showOptions"),d,f):b.dpDiv[c=="slideDown"?"slideUp":c=="fadeIn"?"fadeOut":"hide"](c?d:null,f),c||f(),this._datepickerShowing=!1;var g=this._get(b,"onClose");g&&g.apply(b.input?b.input[0]:null,[b.input?b.input.val():"",b]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),$.blockUI&&($.unblockUI(),$("body").append(this.dpDiv))),this._inDialog=!1}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(a){if(!!$.datepicker._curInst){var b=$(a.target),c=$.datepicker._getInst(b[0]);(b[0].id!=$.datepicker._mainDivId&&b.parents("#"+$.datepicker._mainDivId).length==0&&!b.hasClass($.datepicker.markerClassName)&&!b.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&(!$.datepicker._inDialog||!$.blockUI)||b.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=c)&&$.datepicker._hideDatepicker()}},_adjustDate:function(a,b,c){var d=$(a),e=this._getInst(d[0]);this._isDisabledDatepicker(d[0])||(this._adjustInstDate(e,b+(c=="M"?this._get(e,"showCurrentAtPos"):0),c),this._updateDatepicker(e))},_gotoToday:function(a){var b=$(a),c=this._getInst(b[0]);if(this._get(c,"gotoCurrent")&&c.currentDay)c.selectedDay=c.currentDay,c.drawMonth=c.selectedMonth=c.currentMonth,c.drawYear=c.selectedYear=c.currentYear;else{var d=new Date;c.selectedDay=d.getDate(),c.drawMonth=c.selectedMonth=d.getMonth(),c.drawYear=c.selectedYear=d.getFullYear()}this._notifyChange(c),this._adjustDate(b)},_selectMonthYear:function(a,b,c){var d=$(a),e=this._getInst(d[0]);e["selected"+(c=="M"?"Month":"Year")]=e["draw"+(c=="M"?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10),this._notifyChange(e),this._adjustDate(d)},_selectDay:function(a,b,c,d){var e=$(a);if(!$(d).hasClass(this._unselectableClass)&&!this._isDisabledDatepicker(e[0])){var f=this._getInst(e[0]);f.selectedDay=f.currentDay=$("a",d).html(),f.selectedMonth=f.currentMonth=b,f.selectedYear=f.currentYear=c,this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))}},_clearDate:function(a){var b=$(a),c=this._getInst(b[0]);this._selectDate(b,"")},_selectDate:function(a,b){var c=$(a),d=this._getInst(c[0]);b=b!=null?b:this._formatDate(d),d.input&&d.input.val(b),this._updateAlternate(d);var e=this._get(d,"onSelect");e?e.apply(d.input?d.input[0]:null,[b,d]):d.input&&d.input.trigger("change"),d.inline?this._updateDatepicker(d):(this._hideDatepicker(),this._lastInput=d.input[0],typeof d.input[0]!="object"&&d.input.focus(),this._lastInput=null)},_updateAlternate:function(a){var b=this._get(a,"altField");if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),d=this._getDate(a),e=this.formatDate(c,d,this._getFormatConfig(a));$(b).each(function(){$(this).val(e)})}},noWeekends:function(a){var b=a.getDay();return[b>0&&b<6,""]},iso8601Week:function(a){var b=new Date(a.getTime());b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();b.setMonth(0),b.setDate(1);return Math.floor(Math.round((c-b)/864e5)/7)+1},parseDate:function(a,b,c){if(a==null||b==null)throw"Invalid arguments";b=typeof b=="object"?b.toString():b+"";if(b=="")return null;var d=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff;d=typeof d!="string"?d:(new Date).getFullYear()%100+parseInt(d,10);var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,g=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,h=(c?c.monthNames:null)||this._defaults.monthNames,i=-1,j=-1,k=-1,l=-1,m=!1,n=function(b){var c=s+1<a.length&&a.charAt(s+1)==b;c&&s++;return c},o=function(a){var c=n(a),d=a=="@"?14:a=="!"?20:a=="y"&&c?4:a=="o"?3:2,e=new RegExp("^\\d{1,"+d+"}"),f=b.substring(r).match(e);if(!f)throw"Missing number at position "+r;r+=f[0].length;return parseInt(f[0],10)},p=function(a,c,d){var e=$.map(n(a)?d:c,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)}),f=-1;$.each(e,function(a,c){var d=c[1];if(b.substr(r,d.length).toLowerCase()==d.toLowerCase()){f=c[0],r+=d.length;return!1}});if(f!=-1)return f+1;throw"Unknown name at position "+r},q=function(){if(b.charAt(r)!=a.charAt(s))throw"Unexpected literal at position "+r;r++},r=0;for(var s=0;s<a.length;s++)if(m)a.charAt(s)=="'"&&!n("'")?m=!1:q();else switch(a.charAt(s)){case"d":k=o("d");break;case"D":p("D",e,f);break;case"o":l=o("o");break;case"m":j=o("m");break;case"M":j=p("M",g,h);break;case"y":i=o("y");break;case"@":var t=new Date(o("@"));i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"!":var t=new Date((o("!")-this._ticksTo1970)/1e4);i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"'":n("'")?q():m=!0;break;default:q()}if(r<b.length)throw"Extra/unparsed characters found in date: "+b.substring(r);i==-1?i=(new Date).getFullYear():i<100&&(i+=(new Date).getFullYear()-(new Date).getFullYear()%100+(i<=d?0:-100));if(l>-1){j=1,k=l;for(;;){var u=this._getDaysInMonth(i,j-1);if(k<=u)break;j++,k-=u}}var t=this._daylightSavingAdjust(new Date(i,j-1,k));if(t.getFullYear()!=i||t.getMonth()+1!=j||t.getDate()!=k)throw"Invalid date";return t},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1e7,formatDate:function(a,b,c){if(!b)return"";var d=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,e=(c?c.dayNames:null)||this._defaults.dayNames,f=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?c.monthNames:null)||this._defaults.monthNames,h=function(b){var c=m+1<a.length&&a.charAt(m+1)==b;c&&m++;return c},i=function(a,b,c){var d=""+b;if(h(a))while(d.length<c)d="0"+d;return d},j=function(a,b,c,d){return h(a)?d[b]:c[b]},k="",l=!1;if(b)for(var m=0;m<a.length;m++)if(l)a.charAt(m)=="'"&&!h("'")?l=!1:k+=a.charAt(m);else switch(a.charAt(m)){case"d":k+=i("d",b.getDate(),2);break;case"D":k+=j("D",b.getDay(),d,e);break;case"o":k+=i("o",Math.round(((new Date(b.getFullYear(),b.getMonth(),b.getDate())).getTime()-(new Date(b.getFullYear(),0,0)).getTime())/864e5),3);break;case"m":k+=i("m",b.getMonth()+1,2);break;case"M":k+=j("M",b.getMonth(),f,g);break;case"y":k+=h("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case"@":k+=b.getTime();break;case"!":k+=b.getTime()*1e4+this._ticksTo1970;break;case"'":h("'")?k+="'":l=!0;break;default:k+=a.charAt(m)}return k},_possibleChars:function(a){var b="",c=!1,d=function(b){var c=e+1<a.length&&a.charAt(e+1)==b;c&&e++;return c};for(var e=0;e<a.length;e++)if(c)a.charAt(e)=="'"&&!d("'")?c=!1:b+=a.charAt(e);else switch(a.charAt(e)){case"d":case"m":case"y":case"@":b+="0123456789";break;case"D":case"M":return null;case"'":d("'")?b+="'":c=!0;break;default:b+=a.charAt(e)}return b},_get:function(a,b){return a.settings[b]!==undefined?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()!=a.lastVal){var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,e,f;e=f=this._getDefaultDate(a);var g=this._getFormatConfig(a);try{e=this.parseDate(c,d,g)||f}catch(h){this.log(h),d=b?"":d}a.selectedDay=e.getDate(),a.drawMonth=a.selectedMonth=e.getMonth(),a.drawYear=a.selectedYear=e.getFullYear(),a.currentDay=d?e.getDate():0,a.currentMonth=d?e.getMonth():0,a.currentYear=d?e.getFullYear():0,this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){var d=function(a){var b=new Date;b.setDate(b.getDate()+a);return b},e=function(b){try{return $.datepicker.parseDate($.datepicker._get(a,"dateFormat"),b,$.datepicker._getFormatConfig(a))}catch(c){}var d=(b.toLowerCase().match(/^c/)?$.datepicker._getDate(a):null)||new Date,e=d.getFullYear(),f=d.getMonth(),g=d.getDate(),h=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,i=h.exec(b);while(i){switch(i[2]||"d"){case"d":case"D":g+=parseInt(i[1],10);break;case"w":case"W":g+=parseInt(i[1],10)*7;break;case"m":case"M":f+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f));break;case"y":case"Y":e+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f))}i=h.exec(b)}return new Date(e,f,g)},f=b==null||b===""?c:typeof b=="string"?e(b):typeof b=="number"?isNaN(b)?c:d(b):new Date(b.getTime());f=f&&f.toString()=="Invalid Date"?c:f,f&&(f.setHours(0),f.setMinutes(0),f.setSeconds(0),f.setMilliseconds(0));return this._daylightSavingAdjust(f)},_daylightSavingAdjust:function(a){if(!a)return null;a.setHours(a.getHours()>12?a.getHours()+2:0);return a},_setDate:function(a,b,c){var d=!b,e=a.selectedMonth,f=a.selectedYear,g=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=g.getDate(),a.drawMonth=a.selectedMonth=a.currentMonth=g.getMonth(),a.drawYear=a.selectedYear=a.currentYear=g.getFullYear(),(e!=a.selectedMonth||f!=a.selectedYear)&&!c&&this._notifyChange(a),this._adjustInstDate(a),a.input&&a.input.val(d?"":this._formatDate(a))},_getDate:function(a){var b=!a.currentYear||a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return b},_generateHTML:function(a){var b=new Date;b=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate()));var c=this._get(a,"isRTL"),d=this._get(a,"showButtonPanel"),e=this._get(a,"hideIfNoPrevNext"),f=this._get(a,"navigationAsDateFormat"),g=this._getNumberOfMonths(a),h=this._get(a,"showCurrentAtPos"),i=this._get(a,"stepMonths"),j=g[0]!=1||g[1]!=1,k=this._daylightSavingAdjust(a.currentDay?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(9999,9,9)),l=this._getMinMaxDate(a,"min"),m=this._getMinMaxDate(a,"max"),n=a.drawMonth-h,o=a.drawYear;n<0&&(n+=12,o--);if(m){var p=this._daylightSavingAdjust(new Date(m.getFullYear(),m.getMonth()-g[0]*g[1]+1,m.getDate()));p=l&&p<l?l:p;while(this._daylightSavingAdjust(new Date(o,n,1))>p)n--,n<0&&(n=11,o--)}a.drawMonth=n,a.drawYear=o;var q=this._get(a,"prevText");q=f?this.formatDate(q,this._daylightSavingAdjust(new Date(o,n-i,1)),this._getFormatConfig(a)):q;var r=this._canAdjustMonth(a,-1,o,n)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._adjustDate('#"+a.id+"', -"+i+", 'M');\""+' title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>":e?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>",s=this._get(a,"nextText");s=f?this.formatDate(s,this._daylightSavingAdjust(new Date(o,n+i,1)),this._getFormatConfig(a)):s;var t=this._canAdjustMonth(a,1,o,n)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._adjustDate('#"+a.id+"', +"+i+", 'M');\""+' title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>":e?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>",u=this._get(a,"currentText"),v=this._get(a,"gotoCurrent")&&a.currentDay?k:b;u=f?this.formatDate(u,v,this._getFormatConfig(a)):u;var w=a.inline?"":'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+dpuuid+'.datepicker._hideDatepicker();">'+this._get(a,"closeText")+"</button>",x=d?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?w:"")+(this._isInRange(a,v)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._gotoToday('#"+a.id+"');\""+">"+u+"</button>":"")+(c?"":w)+"</div>":"",y=parseInt(this._get(a,"firstDay"),10);y=isNaN(y)?0:y;var z=this._get(a,"showWeek"),A=this._get(a,"dayNames"),B=this._get(a,"dayNamesShort"),C=this._get(a,"dayNamesMin"),D=this._get(a,"monthNames"),E=this._get(a,"monthNamesShort"),F=this._get(a,"beforeShowDay"),G=this._get(a,"showOtherMonths"),H=this._get(a,"selectOtherMonths"),I=this._get(a,"calculateWeek")||this.iso8601Week,J=this._getDefaultDate(a),K="";for(var L=0;L<g[0];L++){var M="";this.maxRows=4;for(var N=0;N<g[1];N++){var O=this._daylightSavingAdjust(new Date(o,n,a.selectedDay)),P=" ui-corner-all",Q="";if(j){Q+='<div class="ui-datepicker-group';if(g[1]>1)switch(N){case 0:Q+=" ui-datepicker-group-first",P=" ui-corner-"+(c?"right":"left");break;case g[1]-1:Q+=" ui-datepicker-group-last",P=" ui-corner-"+(c?"left":"right");break;default:Q+=" ui-datepicker-group-middle",P=""}Q+='">'}Q+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+P+'">'+(/all|left/.test(P)&&L==0?c?t:r:"")+(/all|right/.test(P)&&L==0?c?r:t:"")+this._generateMonthYearHeader(a,n,o,l,m,L>0||N>0,D,E)+'</div><table class="ui-datepicker-calendar"><thead>'+"<tr>";var R=z?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";for(var S=0;S<7;S++){var T=(S+y)%7;R+="<th"+((S+y+6)%7>=5?' class="ui-datepicker-week-end"':"")+">"+'<span title="'+A[T]+'">'+C[T]+"</span></th>"}Q+=R+"</tr></thead><tbody>";var U=this._getDaysInMonth(o,n);o==a.selectedYear&&n==a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,U));var V=(this._getFirstDayOfMonth(o,n)-y+7)%7,W=Math.ceil((V+U)/7),X=j?this.maxRows>W?this.maxRows:W:W;this.maxRows=X;var Y=this._daylightSavingAdjust(new Date(o,n,1-V));for(var Z=0;Z<X;Z++){Q+="<tr>";var _=z?'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(Y)+"</td>":"";for(var S=0;S<7;S++){var ba=F?F.apply(a.input?a.input[0]:null,[Y]):[!0,""],bb=Y.getMonth()!=n,bc=bb&&!H||!ba[0]||l&&Y<l||m&&Y>m;_+='<td class="'+((S+y+6)%7>=5?" ui-datepicker-week-end":"")+(bb?" ui-datepicker-other-month":"")+(Y.getTime()==O.getTime()&&n==a.selectedMonth&&a._keyEvent||J.getTime()==Y.getTime()&&J.getTime()==O.getTime()?" "+this._dayOverClass:"")+(bc?" "+this._unselectableClass+" ui-state-disabled":"")+(bb&&!G?"":" "+ba[1]+(Y.getTime()==k.getTime()?" "+this._currentClass:"")+(Y.getTime()==b.getTime()?" ui-datepicker-today":""))+'"'+((!bb||G)&&ba[2]?' title="'+ba[2]+'"':"")+(bc?"":' onclick="DP_jQuery_'+dpuuid+".datepicker._selectDay('#"+a.id+"',"+Y.getMonth()+","+Y.getFullYear()+', this);return false;"')+">"+(bb&&!G?"&#xa0;":bc?'<span class="ui-state-default">'+Y.getDate()+"</span>":'<a class="ui-state-default'+(Y.getTime()==b.getTime()?" ui-state-highlight":"")+(Y.getTime()==k.getTime()?" ui-state-active":"")+(bb?" ui-priority-secondary":"")+'" href="#">'+Y.getDate()+"</a>")+"</td>",Y.setDate(Y.getDate()+1),Y=this._daylightSavingAdjust(Y)}Q+=_+"</tr>"}n++,n>11&&(n=0,o++),Q+="</tbody></table>"+(j?"</div>"+(g[0]>0&&N==g[1]-1?'<div class="ui-datepicker-row-break"></div>':""):""),M+=Q}K+=M}K+=x+($.browser.msie&&parseInt($.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':""),
a._keyEvent=!1;return K},_generateMonthYearHeader:function(a,b,c,d,e,f,g,h){var i=this._get(a,"changeMonth"),j=this._get(a,"changeYear"),k=this._get(a,"showMonthAfterYear"),l='<div class="ui-datepicker-title">',m="";if(f||!i)m+='<span class="ui-datepicker-month">'+g[b]+"</span>";else{var n=d&&d.getFullYear()==c,o=e&&e.getFullYear()==c;m+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+dpuuid+".datepicker._selectMonthYear('#"+a.id+"', this, 'M');\" "+">";for(var p=0;p<12;p++)(!n||p>=d.getMonth())&&(!o||p<=e.getMonth())&&(m+='<option value="'+p+'"'+(p==b?' selected="selected"':"")+">"+h[p]+"</option>");m+="</select>"}k||(l+=m+(f||!i||!j?"&#xa0;":""));if(!a.yearshtml){a.yearshtml="";if(f||!j)l+='<span class="ui-datepicker-year">'+c+"</span>";else{var q=this._get(a,"yearRange").split(":"),r=(new Date).getFullYear(),s=function(a){var b=a.match(/c[+-].*/)?c+parseInt(a.substring(1),10):a.match(/[+-].*/)?r+parseInt(a,10):parseInt(a,10);return isNaN(b)?r:b},t=s(q[0]),u=Math.max(t,s(q[1]||""));t=d?Math.max(t,d.getFullYear()):t,u=e?Math.min(u,e.getFullYear()):u,a.yearshtml+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+dpuuid+".datepicker._selectMonthYear('#"+a.id+"', this, 'Y');\" "+">";for(;t<=u;t++)a.yearshtml+='<option value="'+t+'"'+(t==c?' selected="selected"':"")+">"+t+"</option>";a.yearshtml+="</select>",l+=a.yearshtml,a.yearshtml=null}}l+=this._get(a,"yearSuffix"),k&&(l+=(f||!i||!j?"&#xa0;":"")+m),l+="</div>";return l},_adjustInstDate:function(a,b,c){var d=a.drawYear+(c=="Y"?b:0),e=a.drawMonth+(c=="M"?b:0),f=Math.min(a.selectedDay,this._getDaysInMonth(d,e))+(c=="D"?b:0),g=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(d,e,f)));a.selectedDay=g.getDate(),a.drawMonth=a.selectedMonth=g.getMonth(),a.drawYear=a.selectedYear=g.getFullYear(),(c=="M"||c=="Y")&&this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),e=c&&b<c?c:b;e=d&&e>d?d:e;return e},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");return b==null?[1,1]:typeof b=="number"?[1,b]:b},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,d){var e=this._getNumberOfMonths(a),f=this._daylightSavingAdjust(new Date(c,d+(b<0?b:e[0]*e[1]),1));b<0&&f.setDate(this._getDaysInMonth(f.getFullYear(),f.getMonth()));return this._isInRange(a,f)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!d||b.getTime()<=d.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");b=typeof b!="string"?b:(new Date).getFullYear()%100+parseInt(b,10);return{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);var e=b?typeof b=="object"?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),e,this._getFormatConfig(a))}}),$.fn.datepicker=function(a){if(!this.length)return this;$.datepicker.initialized||($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv),$.datepicker.initialized=!0);var b=Array.prototype.slice.call(arguments,1);if(typeof a=="string"&&(a=="isDisabled"||a=="getDate"||a=="widget"))return $.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b));if(a=="option"&&arguments.length==2&&typeof arguments[1]=="string")return $.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b));return this.each(function(){typeof a=="string"?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this].concat(b)):$.datepicker._attachDatepicker(this,a)})},$.datepicker=new Datepicker,$.datepicker.initialized=!1,$.datepicker.uuid=(new Date).getTime(),$.datepicker.version="1.8.18",window["DP_jQuery_"+dpuuid]=$})(jQuery)

/**
 * ver slider v1
 */
/**
 * ver slider v1
 */
var verSlider = {
    max_items: 12,
    init: function (e) {
        verSlider.element = $("#top_product_123mua");
        verSlider.data = e.slice(-1);
        verSlider.queue = e.slice(0, e.length - 1);
        this.run()
    },
    run: function () {
        clearTimeout(verSlider.process_run);
        if (verSlider.queue.length >= 1) 
		{
            var e = verSlider.queue.pop();
			if(typeof e.product_name != "undefined")
				$("#top_product_123mua").prepend(templateleftproduct("sticky_up_product", e.product_name, e.product_url, e.product_image, e.product_price));
            var t = verSlider.element.find("li.sticky");
            verSlider.element.css("top", -1 * 110);
            verSlider.element.animate({
                top: 0
            }, {
                duration: 1e3,
                specialEasing: {
                    height: "easeInOutQuart"
                },
                complete: function () {
                    verSlider.process_run = setTimeout(function () {
                        verSlider.run()
                    }, 5e5)
                }
            });
            if (t.length > verSlider.max_items) {
                $(t[t.length - 1]).remove()
            }
        } else {
			if(verSlider.queue.length == 0)
				return;
            _loadleftproduct();
        }
    }
}