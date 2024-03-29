var Core123M = {
        fn: {
            fill2: function (a) {
                return 10 > a ? "0" + a : a
            }
        },
        executeFunctionByName: function (a, b) {
            for (var c = Array.prototype.slice.call(arguments).splice(2), d = a.split("."), f = d.pop(), k = 0; k < d.length; k++) b = b[d[k]];
            return b[f].apply(this, c)
        },
        urlEncode: function () {},
        getCookie: function (a) {
            var b = document.cookie.indexOf(a + "="),
                c = b + a.length + 1;
            if (!b && a != document.cookie.substring(0, a.length) || -1 == b) return null;
            a = document.cookie.indexOf(";", c); - 1 == a && (a = document.cookie.length);
            return unescape(document.cookie.substring(c,
                a))
        },
        setCookie: function (a, b, c, d, f) {
            c = 1;
            var k = 0;
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
            document.cookie = a + "=" + escape(b) + (c ? ";expires=" +
                k.toGMTString() : "") + (d ? ";path=" + d : "") + (f ? ";domain=" + f : "");
            return 0
        },
        formatCurrency: function (a) {
            a = a.toString().replace(/\$|\,/g, "");
            isNaN(a) && (a = "0");
            sign = a == (a = Math.abs(a));
            a = Math.floor(100 * a + .50000000001);
            cents = a % 100;
            a = Math.floor(a / 100).toString();
            10 > cents && (cents = "0" + cents);
            for (var b = 0; b < Math.floor((a.length - (1 + b)) / 3); b++) a = a.substring(0, a.length - (4 * b + 3)) + "." + a.substring(a.length - (4 * b + 3));
            return (sign ? "" : "-") + a
        },
        categoryUrl: function (a) {
            return Settings.baseurl + "/c" + a.category_id + "/" + a.category_alias +
                ".html"
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
                d = new Date,
                f = new Date(1E3 * a),
                k = Math.floor(d.getTime() /
                    1E3) - a;
            if (60 > k) return (0 > k ? 0 : k).toString() + " gi\u00e2y tr\u01b0\u1edbc";
            if (3600 > k) return Math.floor(k / 60) + " ph\u00fat tr\u01b0\u1edbc";
            if (43200 > k) return Math.floor(k / 3600) + " ti\u1ebfng tr\u01b0\u1edbc";
            a = f.getHours();
            var n = Core123M.fn.fill2(f.getMinutes());
            if (518400 > k) {
                for (var g = "t\u1ed1i", k = 0; 3 > k; k++)
                    if (a < b[k][0]) {
                        g = b[k][1];
                        break
                    }
                k = (d.getDay() + 7 - f.getDay()) % 7;
                b = 0 == k ? "h\u00f4m nay" : 1 == k ? "h\u00f4m qua" : c[f.getDay()];
                return (a % 12).toString() + ":" + n + " " + g + " " + b
            }
            a = Core123M.fn.fill2(a);
            return a + ":" + n + " " +
                Core123M.fn.fill2(f.getDate()) + "/" + Core123M.fn.fill2(f.getMonth() + 1) + "/" + f.getFullYear()
        },
        getUrlVars: function (a) {
            for (var b = {}, c = a.slice(a.indexOf("?") + 1).split("&"), d = 0; d < c.length; d++) a = c[d].split("="), b[a[0]] = a[1];
            return b
        },
        httpBuildQueryString: function (a) {
            return $.param(a)
        },
        is_email: function (a) {
            return /^[a-z][a-z-_0-9\.]+@[a-z-_=>0-9\.]+\.[a-z]{2,3}$/i.test(a)
        },
        is_numeric: function (a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        strtotime: function (a) {
            return "" != a ? (a = a.split("-"), (new Date(Date.UTC(a[2],
                this.stripLeadingZeroes(a[1]) - 1, this.stripLeadingZeroes(a[0])))).getTime() / 1E3) : 0
        },
        stripLeadingZeroes: function (a) {
            if (void 0 != a) return 1 < a.length && "0" == a.substr(0, 1) ? a.substr(1) : a
        },
        addDot: function (a) {
            a = new String(a);
            a = a.split("").reverse();
            for (var b = "", c = 0; c <= a.length - 1; c++) b = a[c] + b, 0 == (c + 1) % 3 && a.length - 1 !== c && (b = "." + b);
            return b
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
            markersArray: [],
            afterScriptLoaded: function () {}
        },
        initLoader: function (a) {
            $.extend(this.options, a);
            if ("" == this.options.src) return !1;
            if (GMap.mapLoaded) Core123M.executeFunctionByName(this.options.afterScriptLoaded, window, arguments);
            else {
                var b = document.createElement("script");
                b.src = this.options.src + "&callback=" + this.options.afterScriptLoaded;
                b.type = "text/javascript";
                document.body.appendChild(b);
                GMap.mapLoaded = !0
            }
        },
        showMaps: function () {
            if (0 == GMap.options.latitude && 0 == GMap.options.longitude) {
                if ("" == GMap.options.address) return alert("Map is not enough info"), !1;
                GMap.getLatLng(GMap.options.address)
            } else GMap.loadMaps()
        },
        loadMaps: function () {
            var a = {
                center: new google.maps.LatLng(GMap.options.latitude, GMap.options.longitude),
                zoom: 17,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            directionsDisplay = new google.maps.DirectionsRenderer({
                draggable: !0
            });
            google_map = new google.maps.Map(document.getElementById(GMap.options.elementId), a);
            geocoder = new google.maps.Geocoder;
            directionsDisplay.setMap(google_map);
            google.maps.event.addListener(directionsDisplay, "directions_changed",
                function () {
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
            }, function (a, b) {
                b == google.maps.GeocoderStatus.OK ? a[0] ? (info_window.setContent("V\u1ecb tr\u00ed tin rao : " + a[0].formatted_address.replace("Ho Chi Minh City, Vietnam", "Tp H\u1ed3 Ch\u00ed Minh")), info_window.open(google_map, c)) : post.address = "No results" : post.address = b
            });
            google.maps.event.addListener(google_map, "click", function (a) {
                a = a.latLng;
                c.setMap(null);
                GMap.placeMarker(a);
                console.log(c)
            });
            c.setDraggable(!0);
            GMap.options.markersArray.push(c);
            google.maps.event.addListener(c,
                "click", function (a) {
                    var b = c.getPosition();
                    geocoder.geocode({
                        latLng: a.latLng
                    }, function () {
                        info_window.open(google_map, c)
                    });
                    latitude = b.lat().toFixed(5);
                    longitude = b.lng().toFixed(5);
                    $("#latitude").val(e.lat());
                    $("#longitude").val(e.lng())
                });
            google.maps.event.addListener(c, "dragend", function () {
                var a = c.getPosition();
                google_map.panTo(a);
                geocoder.geocode({
                    latLng: a
                }, function (a) {
                    info_window.setContent("B\u1ea1n \u0111ang \u1edf : " + a[0].formatted_address.replace("Ho Chi Minh City, Vietnam", "Tp H\u1ed3 Ch\u00ed Minh"));
                    info_window.open(google_map, c)
                });
                latitude = a.lat().toFixed(5);
                longitude = a.lng().toFixed(5);
                $("#longitude").val(longitude);
                $("#latitude").val(latitude)
            });
            this.mapLoaded = !0
        },
        getLatLng: function (a) {
            (new google.maps.Geocoder).geocode({
                address: a
            }, function (a, c) {
                if (c == google.maps.GeocoderStatus.OK) {
                    var d = a[0].geometry.location;
                    GMap.options.longitude = d.lng();
                    GMap.options.latitude = d.lat();
                    GMap.loadMaps()
                }
            })
        },
        getAddress: function (a) {
            geocoder.geocode({
                latLng: a
            }, function (a, c) {
                post.address = c == google.maps.GeocoderStatus.OK ?
                    a[0] ? a[0].formatted_address : "No results" : c
            })
        },
        direction: function (a, b, c) {
            1 == c ? a += " ,Tp H\u1ed3 Ch\u00ed Minh" : a += " ,Tp H\u00e0 N\u1ed9i";
            directionsService.route({
                origin: a,
                destination: b,
                travelMode: google.maps.DirectionsTravelMode.WALKING
            }, function (a, b) {
                b == google.maps.DirectionsStatus.OK && directionsDisplay.setDirections(a)
            })
        },
        placeMarker: function (a) {
            var b = new google.maps.Marker;
            new google.maps.LatLng(a);
            b = new google.maps.Marker({
                position: a,
                map: google_map
            });
            google_map.panTo(a);
            geocoder.geocode({
                    latLng: a
                },
                function (a) {
                    var d = new google.maps.InfoWindow({
                        content: "loading"
                    });
                    d.setContent("B\u1ea1n \u0111ang \u1edf : " + a[0].formatted_address.replace("Ho Chi Minh City, Vietnam", "TP H\u1ed3 Ch\u00ed Minh"));
                    d.open(google_map, b);
                    a = a[0].geometry.location;
                    $("#latitude").val(a.lat());
                    $("#longitude").val(a.lng())
                });
            google_map.setCenter(a)
        },
        search: function (a) {
            (new google.maps.Geocoder).geocode({
                address: a
            }, function (a, c) {
                if (c == google.maps.GeocoderStatus.OK) {
                    var d = a[0].geometry.location;
                    $("#latitude").val(d.lat());
                    $("#longitude").val(d.lng());
                    GMap.options.longitude = d.lng();
                    GMap.options.latitude = d.lat();
                    GMap.placeMarker(d)
                }
            })
        },
        computeTotalDistance: function (a) {
            var b = 0;
            a = a.routes[0];
            for (i = 0; i < a.legs.length; i++) b += a.legs[i].distance.value;
            b /= 1E3;
            document.getElementById("total_distance").innerHTML = b + " km"
        },
        clearOverlay: function () {
            if (GMap.options.markersArray) {
                for (var a = 0; a < GMap.options.markersArray.length; a++) GMap.options.markersArray[a].setMap(null);
                GMap.options.markersArray = []
            }
        }
    };
(function (a, b) {
    function c(a) {
        return a
    }

    function d(a) {
        return decodeURIComponent(a.replace(f, " "))
    }
    var f = /\+/g;
    a.cookie = function (f, n, g) {
        if (1 < arguments.length && (!/Object/.test(Object.prototype.toString.call(n)) || null == n)) {
            g = a.extend({}, a.cookie.defaults, g);
            null == n && (g.expires = -1);
            if ("number" === typeof g.expires) {
                var l = g.expires,
                    q = g.expires = new Date;
                q.setDate(q.getDate() + l)
            }
            n = String(n);
            return b.cookie = [encodeURIComponent(f), "=", g.raw ? n : encodeURIComponent(n), g.expires ? "; expires=" + g.expires.toUTCString() :
                "", g.path ? "; path=" + g.path : "", g.domain ? "; domain=" + g.domain : "", g.secure ? "; secure" : ""
            ].join("")
        }
        g = n || a.cookie.defaults || {};
        for (var l = g.raw ? c : d, q = b.cookie.split("; "), B = 0, s; s = q[B] && q[B].split("="); B++)
            if (l(s.shift()) === f) return l(s.join("="));
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
        for (var c, d, f = a.length; f; c = parseInt(Math.random() * f), d = a[--f], a[f] = a[c], a[c] = d);
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
        d = a(document),
        f = [],
        k = c.height(),
        n = function () {
            for (var a = c.scrollTop(), b = d.height(), g = b - k, g = a > g ? g - a : 0, l = 0; l < f.length; l++) {
                var n = f[l],
                    t = n.stickyWrapper.offset().top - n.topSpacing - g;
                a <= t ? null !== n.currentTop && (n.stickyElement.css("position", "").css("top", "").removeClass(n.className), n.stickyElement.parent().removeClass(n.className), n.currentTop = null) : (t = b - n.stickyElement.outerHeight() -
                    n.topSpacing - n.bottomSpacing - a - g, t = 0 > t ? t + n.topSpacing : n.topSpacing, n.currentTop != t && (n.stickyElement.css("position", "fixed").css("top", t).addClass(n.className), n.stickyElement.parent().addClass(n.className), n.currentTop = t))
            }
        },
        g = function () {
            k = c.height()
        },
        l = {
            init: function (g) {
                var c = a.extend(b, g);
                return this.each(function () {
                    var b = a(this);
                    stickyId = b.attr("id");
                    var g = a("<div></div>").attr("id", stickyId + "-sticky-wrapper").addClass(c.wrapperClassName);
                    b.wrapAll(g);
                    g = b.parent();
                    g.css("height", b.outerHeight());
                    f.push({
                        topSpacing: c.topSpacing,
                        bottomSpacing: c.bottomSpacing,
                        stickyElement: b,
                        currentTop: null,
                        stickyWrapper: g,
                        className: c.className
                    })
                })
            },
            update: n
        };
    window.addEventListener ? (window.addEventListener("scroll", n, !1), window.addEventListener("resize", g, !1)) : window.attachEvent && (window.attachEvent("onscroll", n), window.attachEvent("onresize", g));
    a.fn.sticky = function (b) {
        if (l[b]) return l[b].apply(this, Array.prototype.slice.call(arguments, 1));
        if ("object" === typeof b || !b) return l.init.apply(this, arguments);
        a.error("Method " +
            b + " does not exist on jQuery.sticky")
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
                c = this.getAttribute("href"),
                k = $.extend({
                    actuator: this,
                    title: this.title
                }, a);
            c.match(/(&|\?)boxy\.modal/) && (k.modal = !0);
            b ? b.show() : 0 <= c.indexOf("#") ? (b = $(c.substr(c.indexOf("#"))), c = b.clone(!0), b.remove(), k.unloadOnHide = !1, new Boxy(c, k)) : c.match(/\.(jpe?g|png|gif|bmp)($|\?)/i) ? (k.unloadOnHide = !0, Boxy.loadImage(this.href, k)) : (k.cache || (k.unloadOnHide = !0), Boxy.load(this.href, k));
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
    MODAL_OPACITY: .85,
    zIndex: 1337,
    dragConfigured: !1,
    resizeConfigured: !1,
    dragging: null,
    load: function (a, b) {
        b = b || {};
        var c = {
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
    ask: function (a, b, c, d) {
        d = $.extend({
            modal: !0,
            closeable: !1
        }, d || {}, {
            show: !0,
            unloadOnHide: !0
        });
        a = $("<div></div>").append($('<div class="question"></div>').html(a));
        var f = $('<form class="answers"></form>');
        f.html($.map(Boxy._values(b), function (a) {
            return "<input type='button' value='" +
                a + "' />"
        }).join(" "));
        $("input[type=button]", f).click(function () {
            var a = this;
            Boxy.get(this).hide(function () {
                c && $.each(b, function (d, g) {
                    if (g == a.value) return c(b instanceof Array ? g : d), !1
                })
            })
        });
        a.append(f);
        new Boxy(a, d)
    },
    isModalVisible: function () {
        return 0 < $(".boxy-modal-blackout").length
    },
    _u: function () {
        for (var a = 0; a < arguments.length; a++)
            if ("undefined" != typeof arguments[a]) return !1;
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
        $(".boxy-modal-blackout").css("display",
            "none").css(Boxy._cssForOverlay()).css("display", "block")
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
        }, Boxy._u(c.innerWidth) ? Boxy._u(a) || Boxy._u(a.clientWidth) || 0 == a.clientWidth ? {
            width: b.clientWidth,
            height: b.clientHeight
        } : {
            width: a.clientWidth,
            height: a.clientHeight
        } : {
            width: c.innerWidth,
            height: c.innerHeight
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
        return [Math.floor(a[0] + b[0] / 2), Math.floor(a[1] +
            b[1] / 2)]
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
        a && "x" != a || this.centerAt(c[0] + b.width /
            2, null);
        a && "y" != a || this.centerAt(null, c[1] + b.height / 2);
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
            a = this._getBoundsForResize(a, b);
            var d = this;
            this.boxy.stop().animate({
                left: a[0],
                top: a[1]
            });
            this.getContent().stop().animate({
                width: a[2],
                height: a[3]
            }, function () {
                c && c(d)
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
                    27 == (b.which || b.keyCode) && (a.hide(), $(document.body).unbind("keypress.boxy"))
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
                d = {},
                f = 0,
                k = function () {
                    b.boxy.css({
                        display: "none"
                    });
                    b.visible = !1;
                    b._fire("afterHide");
                    a && a(b);
                    b.options.unloadOnHide && b.unload()
                };
            if (this.options.hideShrink) {
                var n = this.getInner(),
                    g = this.options.hideShrink,
                    l = this.getPosition(),
                    f = f | 1;
                if (!0 === g || "vertical" == g) d.height = 0, c.top = l[1] + n.height() / 2;
                if (!0 === g || "horizontal" == g) d.width = 0, c.left = l[0] + n.width() / 2
            }
            this.options.hideFade && (f |= 2, c.opacity = 0);
            f ? (f & 1 && n.stop().animate(d, 300), this.boxy.stop().animate(c, 300, k)) : k();
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
            d = this.getPosition();
        return [Math.max(d[0] - c[0] / 2, 0), Math.max(d[1] - c[1] / 2, 0), a, b]
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
$.fn.myBoxy = function (a, b) {
    myoptions = jQuery.extend({
        title: "Th\u00f4ng b\u00e1o t\u1eeb Raovat.123Mua.vn",
        message: "",
        type: "alert",
        refresh: !1,
        modal: !0,
        afterHide: function () {},
        callback: function () {},
        unloadOnHide: !0
    }, b);
    var c = '<div class="popup" style="width:460px;margin:0 auto"><div class="title-popup"><span>' + myoptions.title + "</span>",
        c = !0 == myoptions.refresh ? c + ('<a title="\u0110\u00f3ng l\u1ea1i" class="btn-close close" onclick="Boxy.get(this).hide();location.reload();"><img src="' + Settings.imgurl + '/boxy/close_boxy.png" width="18" height="17" alt="\u0110\u00f3ng l\u1ea1i" /></a>') :
        c + ('<a title="\u0110\u00f3ng l\u1ea1i" class="btn-close close" onclick="Boxy.get(this).hide();"><img src="' + Settings.imgurl + '/boxy/close_boxy.png" width="18" height="17" alt="\u0110\u00f3ng l\u1ea1i"/></a>'),
        c = c + '</div><div class="content-popup">';
    "alert" == myoptions.type && (c += '<div class="bar-notice notice-warning"><span class="ico"></span>' + myoptions.message + '</div><div class="clear"></div>');
    if ("success" == myoptions.type) c += '<div class="bar-notice notice-sucess"><span class="ico"></span>' + myoptions.message +
        '</div><div class="clear"></div>';
    else if ("confirm" == myoptions.type) c += '<div class="bar-notice notice-confirm"><span class="ico"></span>' + myoptions.message + '</div><div class="clear"></div>';
    else if ("error" == myoptions.type) c += '<div class="bar-notice notice-error"><span class="ico"></span>' + myoptions.message + '</div><div class="clear"></div>';
    else if ("message" == myoptions.type || "loading" == myoptions.type) c += "<div>" + myoptions.message + "</div>";
    c += "</div>";
    "alert" == myoptions.type || "success" == myoptions.type ||
        "message" == myoptions.type ? (c += '<div class="footer-popup"><div class="btn-default">', c = !0 == myoptions.refresh ? c + '<input class="btn-cancel close" type="button" onclick="Boxy.get(this).hide();location.reload();" value="\u0110\u00f3ng l\u1ea1i" />' : c + '<input class="btn-cancel close" type="button" onclick="Boxy.get(this).hide();" value="\u0110\u00f3ng l\u1ea1i" />', c += "</div>") : "confirm" == myoptions.type ? c += '<div class="footer-popup"><div class="btn-default btn-double"><input id="accept" class="btn-accept" name="" type="button" value="\u0110\u1ed3ng \u00fd" /><input id="reject" class="btn-cancel close" name="" onclick="Boxy.get(this).hide();" type="button" value="H\u1ee7y b\u1ecf" /></div></div>' :
        "loading" == myoptions.type && (c += '<div class="footer-popup">');
    new a(c + "</div>", myoptions);
    "confirm" == myoptions.type && $("#accept").click(myoptions.callback);
    return !1
};
(function (a) {
    function b(b, d) {
        a("." + b).each(function () {
            var b = a(this).find(".styleSelect_item");
            a(this).find("span").each(function () {
                var b = a(this).attr("class");
                "passiveSelect" != b && "activeSelect" != b || a(this).remove()
            });
            var c = a(this).find(".selected");
            a("<span></span>").text(c.text()).attr("id", c.parent().attr("id")).addClass("passiveSelect").appendTo(a(this));
            0 === d && a(this).css({
                width: b.width()
            })
        });
        a("." + b + " span").each(function () {
            a(this).attr("id") && (a(this).removeClass(), a(this).addClass("activeSelect"))
        })
    }
    a.fn.styleSelect = function (c) {
        var d = a.extend({}, a.fn.styleSelect.defaults, c);
        return this.each(function () {
            mainSelect = a(this);
            var c = mainSelect.attr("name"),
                k = c.replace(/\[.*\]/, ""),
                n = mainSelect.attr("tabindex"),
                g = "selectbox_" + k + (new Date).getTime();
            mainSelect.hide();
            k = a('<div tabindex="' + n + '"></div>').css({
                position: "relative",
                "z-index": parseInt(1E3 - n)
            }).addClass(d.styleClass).attr("id", g).insertBefore(mainSelect);
            a('<div class="styleSelect_item"></div>').appendTo(k).css({
                position: "absolute",
                "z-index": "" +
                    parseInt(500 - n) + "",
                top: d.optionsTop,
                left: d.optionsLeft
            }).hide();
            a('<div class="styleSelect_item_start"></div><div class="styleSelect_item_content"></div><div class="styleSelect_item_end">').appendTo(a("#" + g + " .styleSelect_item"));
            var n = a("<ul></ul>").appendTo(a("#" + g + " .styleSelect_item_content")),
                l = "";
            mainSelect.find("option").each(function () {
                l += '<li id="' + a(this).val() + '"';
                a(this).attr("class") && (l += ' class="' + a(this).attr("class") + '" ');
                l += ">";
                l += '<span style="display: block;"';
                a(this).attr("selected") &&
                    (l += ' class="selected" ');
                l += ">";
                l += a(this).text();
                l += "</span>";
                l += "</li>"
            });
            n.append(l);
            b(d.styleClass, d.optionsWidth);
            a("#" + g).click(function (b) {
                a(b.target).parents(".jspVerticalBar").attr("class") || a(this).find(".styleSelect_item").slideToggle(d.speed, function () {
                    if ("none" != a(this).css("display") && 1 == d.jScrollPane) {
                        a(this).find(".styleSelect_item_content").jScrollPane(d.jScrollPaneOptions);
                        var b = a(".styleSelect_item_content").data("jsp"),
                            g = a(".styleSelect_item_content").height(),
                            c = a(".styleSelect_item_content .selected").position();
                        c.top && null != b && c.top > g ? b.scrollTo(0, parseInt(c.top - g / 2)) : c.top && c.top < g ? b.scrollTo(0, parseInt(c.top - g)) : null != b && b.scrollTo(0, 0)
                    }
                })
            });
            a("#" + g + " li").click(function () {
                q(a(this))
            });
            a("#" + g).keydown(function (b) {
                var c = a(this).find(".selected").parent();
                if (1 == d.jScrollPane) var l = a(".styleSelect_item_content").data("jsp"),
                    f = a(".styleSelect_item_content").height();
                if (40 == b.keyCode || 39 == b.keyCode) {
                    var k = c.next();
                    if (0 < k.index() && null != l && "none" != a("#" + g).find(".styleSelect_item").css("display")) {
                        var n = k.position();
                        null != n.top && n.top > f && l.scrollTo(0, parseInt(n.top))
                    }
                    q(k)
                }
                if (37 == b.keyCode || 38 == b.keyCode) c = c.prev(), k = c.index(), null != l && 1 == d.jScrollPane && "none" != a("#" + g).find(".styleSelect_item").css("display") && (0 < k ? (k = c.position(), k.top - f < f && l.scrollTo(0, parseInt(k.top))) : l.scrollTo(0, 0)), q(c);
                if (13 == b.keyCode || 0 == b.keyCode || 32 == b.keyCode) return a(this).find(".styleSelect_item").slideToggle(d.speed, function () {
                    !a(b.target).find(".jspContainer").attr("class") && 1 == d.jScrollPane && a(this).find(".styleSelect_item_content").jScrollPane(d.jScrollPaneOptions)
                }), !1;
                9 == b.keyCode && a(this).find(".styleSelect_item").hide(d.speed)
            });
            var q = function (g) {
                g.siblings().find("span").removeClass("selected");
                g.find("span").addClass("selected");
                g = g.attr("id");
                var l = a('select[name="' + c + '"]');
                l.siblings().selected = !1;
                l.find('option[value="' + g + '"]').attr("selected", "selected");
                l.trigger(d.selectTrigger);
                b(d.styleClass, d.optionsWidth)
            };
            a("#" + g).click(function (a) {
                a.stopPropagation()
            });
            a(document).click(function () {
                a("#" + g + " .styleSelect_item").hide()
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
    a.fn.jScrollPane = function (d) {
        function f(d, f) {
            function g(f) {
                var n, Ca, ja, za, Aa, ka = !1,
                    la = !1;
                x = f;
                if (I === c) za = d.scrollTop(), Aa = d.scrollLeft(), d.css({
                    overflow: "hidden",
                    padding: 0
                }), r = d.innerWidth() + ha, M = d.innerHeight(), d.width(r), I = a('<div class="jspPane" />').css("padding", Da).append(d.children()), J = a('<div class="jspContainer" />').css({
                    width: r + "px",
                    height: M + "px"
                }).append(I).appendTo(d);
                else {
                    d.css("width", "");
                    if (ka = x.stickToBottom) ka = N - M, ka = 20 < ka && 10 > ka - F();
                    if (la = x.stickToRight) la = P - r,
                        la = 20 < la && 10 > la - u();
                    if (ja = d.innerWidth() + ha != r || d.outerHeight() != M) r = d.innerWidth() + ha, M = d.innerHeight(), J.css({
                        width: r + "px",
                        height: M + "px"
                    });
                    if (!ja && Ea == P && I.outerHeight() == N) {
                        d.width(r);
                        return
                    }
                    Ea = P;
                    I.css("width", "");
                    d.width(r);
                    J.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                }
                I.css("overflow", "auto");
                P = f.contentWidth ? f.contentWidth : I[0].scrollWidth;
                N = I[0].scrollHeight;
                I.css("overflow", "");
                Y = P / r;
                V = N / M;
                O = 1 < V;
                if ((K = 1 < Y) || O) {
                    d.addClass("jspScrollable");
                    if (f = x.maintainPosition && (H || R)) n = u(),
                        Ca = F();
                    O && (J.append(a('<div class="jspVerticalBar" />').append(a('<div class="jspCap jspCapTop" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragTop" />'), a('<div class="jspDragBottom" />'))), a('<div class="jspCap jspCapBottom" />'))), U = J.find(">.jspVerticalBar"), X = U.find(">.jspTrack"), G = X.find(">.jspDrag"), x.showArrows && (qa = a('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", s(0, -1)).bind("click.jsp", Q), ra = a('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",
                        s(0, 1)).bind("click.jsp", Q), x.arrowScrollOnHover && (qa.bind("mouseover.jsp", s(0, -1, qa)), ra.bind("mouseover.jsp", s(0, 1, ra))), B(X, x.verticalArrowPositions, qa, ra)), ba = M, J.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function () {
                        ba -= a(this).outerHeight()
                    }), G.hover(function () {
                        G.addClass("jspHover")
                    }, function () {
                        G.removeClass("jspHover")
                    }).bind("mousedown.jsp", function (b) {
                        a("html").bind("dragstart.jsp selectstart.jsp", Q);
                        G.addClass("jspActive");
                        var g = b.pageY - G.position().top;
                        a("html").bind("mousemove.jsp",
                            function (a) {
                                t(a.pageY - g, !1)
                            }).bind("mouseup.jsp mouseleave.jsp", v);
                        return !1
                    }), l());
                    K && (J.append(a('<div class="jspHorizontalBar" />').append(a('<div class="jspCap jspCapLeft" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragLeft" />'), a('<div class="jspDragRight" />'))), a('<div class="jspCap jspCapRight" />'))), va = J.find(">.jspHorizontalBar"), aa = va.find(">.jspTrack"), W = aa.find(">.jspDrag"), x.showArrows && (sa = a('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",
                        s(-1, 0)).bind("click.jsp", Q), ta = a('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", s(1, 0)).bind("click.jsp", Q), x.arrowScrollOnHover && (sa.bind("mouseover.jsp", s(-1, 0, sa)), ta.bind("mouseover.jsp", s(1, 0, ta))), B(aa, x.horizontalArrowPositions, sa, ta)), W.hover(function () {
                        W.addClass("jspHover")
                    }, function () {
                        W.removeClass("jspHover")
                    }).bind("mousedown.jsp", function (b) {
                        a("html").bind("dragstart.jsp selectstart.jsp", Q);
                        W.addClass("jspActive");
                        var g = b.pageX - W.position().left;
                        a("html").bind("mousemove.jsp",
                            function (a) {
                                L(a.pageX - g, !1)
                            }).bind("mouseup.jsp mouseleave.jsp", v);
                        return !1
                    }), Z = J.innerWidth(), q());
                    if (K && O) {
                        ja = aa.outerHeight();
                        var Fa = X.outerWidth();
                        ba -= ja;
                        a(va).find(">.jspCap:visible,>.jspArrow").each(function () {
                            Z += a(this).outerWidth()
                        });
                        Z -= Fa;
                        M -= Fa;
                        r -= ja;
                        aa.parent().append(a('<div class="jspCorner" />').css("width", ja + "px"));
                        l();
                        q()
                    }
                    K && I.width(J.outerWidth() - ha + "px");
                    N = I.outerHeight();
                    V = N / M;
                    K && (ca = Math.ceil(1 / Y * Z), ca > x.horizontalDragMaxWidth ? ca = x.horizontalDragMaxWidth : ca < x.horizontalDragMinWidth &&
                        (ca = x.horizontalDragMinWidth), W.width(ca + "px"), T = Z - ca, C(R));
                    O && (da = Math.ceil(1 / V * ba), da > x.verticalDragMaxHeight ? da = x.verticalDragMaxHeight : da < x.verticalDragMinHeight && (da = x.verticalDragMinHeight), G.height(da + "px"), S = ba - da, A(H));
                    f && (z(la ? P - r : n, !1), y(ka ? N - M : Ca, !1));
                    I.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function (a) {
                        D(a.target, !1)
                    });
                    J.unbind(Ba).bind(Ba, function (a, b, g, c) {
                        a = R;
                        b = H;
                        E.scrollBy(g * x.mouseWheelSpeed, -c * x.mouseWheelSpeed, !1);
                        return a == R && b == H
                    });
                    var Ga, oa, ea, fa, ua, ga = !1;
                    J.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",
                        function (a) {
                            a = a.originalEvent.touches[0];
                            Ga = u();
                            oa = F();
                            ea = a.pageX;
                            fa = a.pageY;
                            ua = !1;
                            ga = !0
                        }).bind("touchmove.jsp", function (a) {
                        if (ga) {
                            a = a.originalEvent.touches[0];
                            var b = R,
                                g = H;
                            E.scrollTo(Ga + ea - a.pageX, oa + fa - a.pageY);
                            ua = ua || 5 < Math.abs(ea - a.pageX) || 5 < Math.abs(fa - a.pageY);
                            return b == R && g == H
                        }
                    }).bind("touchend.jsp", function () {
                        ga = !1
                    }).bind("click.jsp-touchclick", function () {
                        if (ua) return ua = !1
                    });
                    if (x.enableKeyboardNavigation) {
                        var ia = function () {
                                var a = R,
                                    b = H;
                                switch (ma) {
                                case 40:
                                    E.scrollByY(x.keyboardSpeed, !1);
                                    break;
                                case 38:
                                    E.scrollByY(-x.keyboardSpeed, !1);
                                    break;
                                case 34:
                                case 32:
                                    E.scrollByY(M * x.scrollPagePercent, !1);
                                    break;
                                case 33:
                                    E.scrollByY(-M * x.scrollPagePercent, !1);
                                    break;
                                case 39:
                                    E.scrollByX(x.keyboardSpeed, !1);
                                    break;
                                case 37:
                                    E.scrollByX(-x.keyboardSpeed, !1)
                                }
                                return wa = a != R || b != H
                            },
                            ma, wa, xa = [];
                        K && xa.push(va[0]);
                        O && xa.push(U[0]);
                        I.focus(function () {
                            d.focus()
                        });
                        d.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function (b) {
                            if (b.target === this || xa.length && a(b.target).closest(xa).length) {
                                var g =
                                    R,
                                    c = H;
                                switch (b.keyCode) {
                                case 40:
                                case 38:
                                case 34:
                                case 32:
                                case 33:
                                case 39:
                                case 37:
                                    ma = b.keyCode;
                                    ia();
                                    break;
                                case 35:
                                    y(N - M);
                                    ma = null;
                                    break;
                                case 36:
                                    y(0), ma = null
                                }
                                wa = b.keyCode == ma && g != R || c != H;
                                return !wa
                            }
                        }).bind("keypress.jsp", function (a) {
                            a.keyCode == ma && ia();
                            return !wa
                        });
                        x.hideFocus ? (d.css("outline", "none"), "hideFocus" in J[0] && d.attr("hideFocus", !0)) : (d.css("outline", ""), "hideFocus" in J[0] && d.attr("hideFocus", !1))
                    }
                    x.clickOnTrack && (p(), O && X.bind("mousedown.jsp", function (b) {
                        if (b.originalTarget === c || b.originalTarget ==
                            b.currentTarget) {
                            var g = a(this),
                                l = g.offset(),
                                d = b.pageY - l.top - H,
                                f, q = !0,
                                k = function () {
                                    var a = g.offset(),
                                        a = b.pageY - a.top - da / 2,
                                        c = M * x.scrollPagePercent,
                                        l = S * c / (N - M);
                                    if (0 > d) H - l > a ? E.scrollByY(-c) : t(a);
                                    else if (0 < d) H + l < a ? E.scrollByY(c) : t(a);
                                    else {
                                        n();
                                        return
                                    }
                                    f = setTimeout(k, q ? x.initialDelay : x.trackClickRepeatFreq);
                                    q = !1
                                },
                                n = function () {
                                    f && clearTimeout(f);
                                    f = null;
                                    a(document).unbind("mouseup.jsp", n)
                                };
                            k();
                            a(document).bind("mouseup.jsp", n);
                            return !1
                        }
                    }), K && aa.bind("mousedown.jsp", function (b) {
                        if (b.originalTarget === c || b.originalTarget ==
                            b.currentTarget) {
                            var g = a(this),
                                l = g.offset(),
                                d = b.pageX - l.left - R,
                                f, q = !0,
                                k = function () {
                                    var a = g.offset(),
                                        a = b.pageX - a.left - ca / 2,
                                        c = r * x.scrollPagePercent,
                                        l = T * c / (P - r);
                                    if (0 > d) R - l > a ? E.scrollByX(-c) : L(a);
                                    else if (0 < d) R + l < a ? E.scrollByX(c) : L(a);
                                    else {
                                        n();
                                        return
                                    }
                                    f = setTimeout(k, q ? x.initialDelay : x.trackClickRepeatFreq);
                                    q = !1
                                },
                                n = function () {
                                    f && clearTimeout(f);
                                    f = null;
                                    a(document).unbind("mouseup.jsp", n)
                                };
                            k();
                            a(document).bind("mouseup.jsp", n);
                            return !1
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
                        ya.length && I.find(n) && (0 === J.scrollTop() ? pa = setInterval(function () {
                            0 < J.scrollTop() && (D(ya, !0), a(document).scrollTop(J.position().top), clearInterval(pa))
                        }, 50) : (D(ya, !0), a(document).scrollTop(J.position().top)))
                    }
                    x.hijackInternalLinks && (a(document.body).data("jspHijack") || (a(document.body).data("jspHijack", !0), a(document.body).delegate("a[href*=#]", "click", function (g) {
                        var c = this.href.substr(0, this.href.indexOf("#")),
                            l = location.href,
                            d; - 1 !== location.href.indexOf("#") &&
                            (l = location.href.substr(0, location.href.indexOf("#")));
                        if (c === l) {
                            l = escape(this.href.substr(this.href.indexOf("#") + 1));
                            c = null;
                            try {
                                c = a("#" + l + ', a[name="' + l + '"]')
                            } catch (f) {
                                return
                            }
                            c.length && (l = c.closest(".jspScrollable"), d = l.data("jsp"), d.scrollToElement(c, !0), l[0].scrollIntoView && (d = a(b).scrollTop(), c = c.offset().top, (c < d || c > d + a(b).height()) && l[0].scrollIntoView()), g.preventDefault())
                        }
                    })))
                } else d.removeClass("jspScrollable"), I.css({
                        top: 0,
                        width: J.width() - ha
                    }), J.unbind(Ba), I.find(":input,a").unbind("focus.jsp"),
                    d.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp"), p();
                x.autoReinitialise && !na ? na = setInterval(function () {
                    g(x)
                }, x.autoReinitialiseDelay) : !x.autoReinitialise && na && clearInterval(na);
                za && d.scrollTop(0) && y(za, !1);
                Aa && d.scrollLeft(0) && z(Aa, !1);
                d.trigger("jsp-initialised", [K || O])
            }

            function l() {
                X.height(ba + "px");
                H = 0;
                oa = x.verticalGutter + X.outerWidth();
                I.width(r - oa - ha);
                try {
                    0 === U.position().left && I.css("margin-left", oa + "px")
                } catch (a) {}
            }

            function q() {
                J.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function () {
                    Z -=
                        a(this).outerWidth()
                });
                aa.width(Z + "px");
                R = 0
            }

            function B(a, b, g, c) {
                var l = "before",
                    d = "after";
                "os" == b && (b = /Mac/.test(navigator.platform) ? "after" : "split");
                b == l ? d = b : b == d && (l = b, b = g, g = c, c = b);
                a[l](g)[d](c)
            }

            function s(b, g, c) {
                return function () {
                    var l = this,
                        d = c,
                        l = a(l).addClass("jspActive"),
                        f, q, k = !0,
                        n = function () {
                            0 !== b && E.scrollByX(b * x.arrowButtonSpeed);
                            0 !== g && E.scrollByY(g * x.arrowButtonSpeed);
                            q = setTimeout(n, k ? x.initialDelay : x.arrowRepeatFreq);
                            k = !1
                        };
                    n();
                    f = d ? "mouseout.jsp" : "mouseup.jsp";
                    d = d || a("html");
                    d.bind(f, function () {
                        l.removeClass("jspActive");
                        q && clearTimeout(q);
                        q = null;
                        d.unbind(f)
                    });
                    this.blur();
                    return !1
                }
            }

            function p() {
                aa && aa.unbind("mousedown.jsp");
                X && X.unbind("mousedown.jsp")
            }

            function v() {
                a("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");
                G && G.removeClass("jspActive");
                W && W.removeClass("jspActive")
            }

            function t(a, b) {
                O && ((0 > a ? a = 0 : a > S && (a = S), b === c && (b = x.animateScroll), b) ? E.animate(G, "top", a, A) : (G.css("top", a), A(a)))
            }

            function A(a) {
                a === c && (a = G.position().top);
                J.scrollTop(0);
                H = a;
                var b = 0 === H,
                    g = H == S;
                a = -(a /
                    S) * (N - M);
                if (ea != b || fa != g) ea = b, fa = g, d.trigger("jsp-arrow-change", [ea, fa, ga, ia]);
                x.showArrows && (qa[b ? "addClass" : "removeClass"]("jspDisabled"), ra[g ? "addClass" : "removeClass"]("jspDisabled"));
                I.css("top", a);
                d.trigger("jsp-scroll-y", [-a, b, g]).trigger("scroll")
            }

            function L(a, b) {
                K && ((0 > a ? a = 0 : a > T && (a = T), b === c && (b = x.animateScroll), b) ? E.animate(W, "left", a, C) : (W.css("left", a), C(a)))
            }

            function C(a) {
                a === c && (a = W.position().left);
                J.scrollTop(0);
                R = a;
                var b = 0 === R,
                    g = R == T;
                a = -(a / T) * (P - r);
                if (ga != b || ia != g) ga = b, ia = g, d.trigger("jsp-arrow-change", [ea, fa, ga, ia]);
                x.showArrows && (sa[b ? "addClass" : "removeClass"]("jspDisabled"), ta[g ? "addClass" : "removeClass"]("jspDisabled"));
                I.css("left", a);
                d.trigger("jsp-scroll-x", [-a, b, g]).trigger("scroll")
            }

            function y(a, b) {
                t(a / (N - M) * S, b)
            }

            function z(a, b) {
                L(a / (P - r) * T, b)
            }

            function D(b, g, c) {
                var l, d, f = 0,
                    q = 0,
                    k, n, B;
                try {
                    l = a(b)
                } catch (s) {
                    return
                }
                d = l.outerHeight();
                b = l.outerWidth();
                J.scrollTop(0);
                for (J.scrollLeft(0); !l.is(".jspPane");)
                    if (f += l.position().top, q += l.position().left, l = l.offsetParent(), /^body|html$/i.test(l[0].nodeName)) return;
                l = F();
                k = l + M;
                f < l || g ? n = f - x.verticalGutter : f + d > k && (n = f - M + d + x.verticalGutter);
                n && y(n, c);
                f = u();
                n = f + r;
                q < f || g ? B = q - x.horizontalGutter : q + b > n && (B = q - r + b + x.horizontalGutter);
                B && z(B, c)
            }

            function u() {
                return -I.position().left
            }

            function F() {
                return -I.position().top
            }

            function Q() {
                return !1
            }
            var x, E = this,
                I, r, M, J, P, N, Y, V, O, K, G, S, H, W, T, R, U, X, oa, ba, da, qa, ra, va, aa, Z, ca, sa, ta, na, Da, ha, Ea, ea = !0,
                ga = !0,
                fa = !1,
                ia = !1,
                pa = d.clone(!1, !1).empty(),
                Ba = a.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
            Da = d.css("paddingTop") + " " + d.css("paddingRight") +
                " " + d.css("paddingBottom") + " " + d.css("paddingLeft");
            ha = (parseInt(d.css("paddingLeft"), 10) || 0) + (parseInt(d.css("paddingRight"), 10) || 0);
            a.extend(E, {
                reinitialise: function (b) {
                    b = a.extend({}, x, b);
                    g(b)
                },
                scrollToElement: function (a, b, g) {
                    D(a, b, g)
                },
                scrollTo: function (a, b, g) {
                    z(a, g);
                    y(b, g)
                },
                scrollToX: function (a, b) {
                    z(a, b)
                },
                scrollToY: function (a, b) {
                    y(a, b)
                },
                scrollToPercentX: function (a, b) {
                    z(a * (P - r), b)
                },
                scrollToPercentY: function (a, b) {
                    y(a * (N - M), b)
                },
                scrollBy: function (a, b, g) {
                    E.scrollByX(a, g);
                    E.scrollByY(b, g)
                },
                scrollByX: function (a,
                    b) {
                    var g = (u() + Math[0 > a ? "floor" : "ceil"](a)) / (P - r);
                    L(g * T, b)
                },
                scrollByY: function (a, b) {
                    var g = (F() + Math[0 > a ? "floor" : "ceil"](a)) / (N - M);
                    t(g * S, b)
                },
                positionDragX: function (a, b) {
                    L(a, b)
                },
                positionDragY: function (a, b) {
                    t(a, b)
                },
                animate: function (a, b, g, c) {
                    var l = {};
                    l[b] = g;
                    a.animate(l, {
                        duration: x.animateDuration,
                        easing: x.animateEase,
                        queue: !1,
                        step: c
                    })
                },
                getContentPositionX: function () {
                    return u()
                },
                getContentPositionY: function () {
                    return F()
                },
                getContentWidth: function () {
                    return P
                },
                getContentHeight: function () {
                    return N
                },
                getPercentScrolledX: function () {
                    return u() /
                        (P - r)
                },
                getPercentScrolledY: function () {
                    return F() / (N - M)
                },
                getIsScrollableH: function () {
                    return K
                },
                getIsScrollableV: function () {
                    return O
                },
                getContentPane: function () {
                    return I
                },
                scrollToBottom: function (a) {
                    t(S, a)
                },
                hijackInternalLinks: a.noop,
                destroy: function () {
                    var a = F(),
                        b = u();
                    d.removeClass("jspScrollable").unbind(".jsp");
                    d.replaceWith(pa.append(I.children()));
                    pa.scrollTop(a);
                    pa.scrollLeft(b);
                    na && clearInterval(na)
                }
            });
            g(f)
        }
        d = a.extend({}, a.fn.jScrollPane.defaults, d);
        a.each(["mouseWheelSpeed", "arrowButtonSpeed",
            "trackClickSpeed", "keyboardSpeed"
        ], function () {
            d[this] = d[this] || d.speed
        });
        return this.each(function () {
            var b = a(this),
                c = b.data("jsp");
            c ? c.reinitialise(d) : (a("script", b).filter('[type="text/javascript"],not([type])').remove(), c = new f(b, d), b.data("jsp", c))
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
        scrollPagePercent: .8
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
        var d = this;
        "scroll" == c.event && a(c.container).bind("scroll", function () {
            var b = 0;
            d.each(function () {
                if (!a.abovethetop(this, c) && !a.leftofbegin(this, c))
                    if (!a.belowthefold(this, c) && !a.rightoffold(this, c)) a(this).trigger("appear");
                    else if (b++ > c.failurelimit) return !1
            });
            var k = a.grep(d, function (a) {
                return !a.loaded
            });
            d = a(k)
        });
        this.each(function () {
            var b = this;
            void 0 == a(b).attr("original") &&
                a(b).attr("original", a(b).attr("src"));
            "scroll" != c.event || void 0 == a(b).attr("src") || c.placeholder == a(b).attr("src") || a.abovethetop(b, c) || a.leftofbegin(b, c) || a.belowthefold(b, c) || a.rightoffold(b, c) ? (c.placeholder ? a(b).attr("src", c.placeholder) : a(b).removeAttr("src"), b.loaded = !1) : b.loaded = !0;
            a(b).one("appear", function () {
                this.loaded || a("<img />").bind("load", function () {
                    a(b).hide().attr("src", a(b).attr("original"))[c.effect](c.effectspeed);
                    b.loaded = !0
                }).attr("src", a(b).attr("original"))
            });
            "scroll" != c.event &&
                a(b).bind(c.event, function () {
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
        return (void 0 === c.container || c.container === window ? a(window).width() + a(window).scrollLeft() : a(c.container).offset().left + a(c.container).width()) <= a(b).offset().left -
            c.threshold
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
        c = "(" + c.replace(d, "\\$1") + ")";
        a = a.replace(RegExp(c, "gi"), "<strong>$1</strong>");
        a = "<div>" + a;
        void 0 != b && void 0 != b.name && (a += ' <em style="color:#d00;font-size:11px">trong</em> <strong style="color:#06c">' + b.name + "</strong>");
        return a + "</div>"
    }

    function c(c, d) {
        this.el = a(c);
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
        this.serviceUrl = d.serviceUrl;
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
        this.setOptions(d)
    }
    var d = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)", "g");
    a.fn.autocomplete = function (b) {
        return new c(this.get(0) || a("<input />"), b)
    };
    c.prototype = {
        killerFn: null,
        initialize: function () {
            var b, c,
                d;
            b = this;
            c = Math.floor(1048576 * Math.random()).toString(16);
            d = "Autocomplete_" + c;
            this.killerFn = function (g) {
                0 === a(g.target).parents(".autocomplete").size() && (b.killSuggestions(), b.disableKillerFn())
            };
            this.options.width || (this.options.width = this.el.width());
            this.mainContainerId = "AutocompleteContainter_" + c;
            a('<div id="' + this.mainContainerId + '" style="position:absolute;z-index:9999;"><div class="autocomplete-w1"><div class="ui-menu autocomplete" id="' + d + '" style="display:none; width:300px;"></div></div></div>').appendTo("body");
            this.container = a("#" + d);
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
            a(document).unbind("click",
                this.killerFn)
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
                if (this.currentValue !== this.el.val())
                    if (0 < this.options.deferRequestBy) {
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
            var b, c, g, l, d;
            c = this.options.lookup;
            g = c.suggestions.length;
            b = {
                suggestions: [],
                data: []
            };
            a = a.toLowerCase();
            for (d = 0; d < g; d++) l = c.suggestions[d], 0 === l.toLowerCase().indexOf(a) &&
                (b.suggestions.push(l), b.data.push(c.data[d]));
            return b
        },
        getSuggestions: function (b) {
            var c, d;
            (c = this.isLocal ? this.getSuggestionsLocal(b) : this.cachedResponse[b]) && a.isArray(c.suggestions) ? (this.suggestions = c.suggestions, this.data = c.data, this.suggest()) : this.isBadQuery(b) || (d = this, d.options.params.query = b, a.get(this.serviceUrl, d.options.params, function (a) {
                d.processResponse(a)
            }, "text"))
        },
        isBadQuery: function (a) {
            for (var b = this.badQueries.length; b--;)
                if (0 === a.indexOf(this.badQueries[b])) return !0;
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
                var b, c, d, g, l, q, B, s;
                b = this;
                c = this.suggestions.length;
                g = this.options.fnFormatResult;
                l = this.getQuery(this.currentValue);
                B = function (a) {
                    return function () {
                        b.activate(a)
                    }
                };
                s = function (a) {
                    return function () {
                        b.select(a)
                    }
                };
                this.container.hide().empty();
                var p = "",
                    v;
                for (q = 0; q < c; q++) d = this.suggestions[q], v = [], void 0 != b.categories[q] && 0 < b.categories[q].id && "" != b.categories[q].name &&
                    (v = b.categories[q]), p = 0 == q % 2 ? "" : 'style="background-color:#f8f8f8"', d = a((b.selectedIndex === q ? '<div class="clearfix ui-menu-item selected"' : '<div class="clearfix"') + ' title="' + d + '" ' + p + ">" + g(d, v, l) + "</div>"), d.mouseover(B(q)), d.click(s(q)), this.container.append(d);
                this.enabled = !0;
                this.container.show()
            }
        },
        processResponse: function (b) {
            var c;
            try {
                c = eval("(" + b + ")")
            } catch (d) {
                return
            }
            a.isArray(c.data) || (c.data = []);
            this.options.noCache || (this.cachedResponse[c.query] = c, 0 === c.suggestions.length && this.badQueries.push(c.query));
            if (c.query === this.getQuery(this.currentValue)) {
                var g = [],
                    l = [],
                    q = [];
                null != c.suggestions && a.each(c.suggestions, function (a, b) {
                    if (0 < b.indexOf("|")) {
                        data = b.split("|");
                        var c = {};
                        c.id = data[1];
                        c.name = data[2];
                        g[a] = data[0];
                        l[a] = c;
                        q[a] = "undefined" != data[3] ? data[3] : 0
                    } else g[a] = b
                });
                this.suggestions = g;
                this.categories = l;
                this.coreids = q;
                this.data = c.data;
                this.suggest()
            }
        },
        activate: function (b) {
            var c, d;
            c = this.container.children(); - 1 !== this.selectedIndex && c.length > this.selectedIndex && a(c.get(this.selectedIndex)).removeClass("ui-state-hover");
            this.selectedIndex = b; - 1 !== this.selectedIndex && c.length > this.selectedIndex && (d = c.get(this.selectedIndex), a(d).addClass("ui-state-hover"));
            return d
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
            -1 !== this.selectedIndex && (0 === this.selectedIndex ?
                (this.container.children().get(0).className = "", this.selectedIndex = -1, this.el.val(this.currentValue)) : this.adjustScroll(this.selectedIndex - 1))
        },
        moveDown: function () {
            this.selectedIndex !== this.suggestions.length - 1 && this.adjustScroll(this.selectedIndex + 1)
        },
        adjustScroll: function (a) {
            var b, c, g;
            b = this.activate(a).offsetTop;
            c = this.container.scrollTop();
            g = c + this.options.maxHeight - 25;
            b < c ? this.container.scrollTop(b) : b > g && this.container.scrollTop(b - this.options.maxHeight + 25);
            this.el.val(this.getValue(this.suggestions[a]))
        },
        onSelect: function (b) {
            var c, d, g;
            c = this.options.onSelect;
            d = this.suggestions[b];
            g = void 0 != this.categories[b] ? this.categories[b].id : 0;
            b = void 0 != this.coreids[b] ? this.coreids[b] : 0;
            this.el.val(this.getValue(d));
            a.isFunction(c) && c(d, g, b, this.el)
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
    swing: function (a, b, c, d, f) {
        return jQuery.easing[jQuery.easing.def](a, b, c, d, f)
    },
    easeInQuad: function (a, b, c, d, f) {
        return d * (b /= f) * b + c
    },
    easeOutQuad: function (a, b, c, d, f) {
        return -d * (b /= f) * (b - 2) + c
    },
    easeInOutQuad: function (a, b, c, d, f) {
        return 1 > (b /= f / 2) ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
    },
    easeInCubic: function (a, b, c, d, f) {
        return d * (b /= f) * b * b + c
    },
    easeOutCubic: function (a, b, c, d, f) {
        return d * ((b = b / f - 1) * b * b + 1) + c
    },
    easeInOutCubic: function (a, b, c, d, f) {
        return 1 > (b /= f / 2) ? d / 2 * b * b * b + c :
            d / 2 * ((b -= 2) * b * b + 2) + c
    },
    easeInQuart: function (a, b, c, d, f) {
        return d * (b /= f) * b * b * b + c
    },
    easeOutQuart: function (a, b, c, d, f) {
        return -d * ((b = b / f - 1) * b * b * b - 1) + c
    },
    easeInOutQuart: function (a, b, c, d, f) {
        return 1 > (b /= f / 2) ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
    },
    easeInQuint: function (a, b, c, d, f) {
        return d * (b /= f) * b * b * b * b + c
    },
    easeOutQuint: function (a, b, c, d, f) {
        return d * ((b = b / f - 1) * b * b * b * b + 1) + c
    },
    easeInOutQuint: function (a, b, c, d, f) {
        return 1 > (b /= f / 2) ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
    },
    easeInSine: function (a, b, c, d, f) {
        return -d * Math.cos(b /
            f * (Math.PI / 2)) + d + c
    },
    easeOutSine: function (a, b, c, d, f) {
        return d * Math.sin(b / f * (Math.PI / 2)) + c
    },
    easeInOutSine: function (a, b, c, d, f) {
        return -d / 2 * (Math.cos(Math.PI * b / f) - 1) + c
    },
    easeInExpo: function (a, b, c, d, f) {
        return 0 == b ? c : d * Math.pow(2, 10 * (b / f - 1)) + c
    },
    easeOutExpo: function (a, b, c, d, f) {
        return b == f ? c + d : d * (-Math.pow(2, -10 * b / f) + 1) + c
    },
    easeInOutExpo: function (a, b, c, d, f) {
        return 0 == b ? c : b == f ? c + d : 1 > (b /= f / 2) ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
    },
    easeInCirc: function (a, b, c, d, f) {
        return -d * (Math.sqrt(1 - (b /= f) *
            b) - 1) + c
    },
    easeOutCirc: function (a, b, c, d, f) {
        return d * Math.sqrt(1 - (b = b / f - 1) * b) + c
    },
    easeInOutCirc: function (a, b, c, d, f) {
        return 1 > (b /= f / 2) ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
    },
    easeInElastic: function (a, b, c, d, f) {
        a = 1.70158;
        var k = 0,
            n = d;
        if (0 == b) return c;
        if (1 == (b /= f)) return c + d;
        k || (k = .3 * f);
        n < Math.abs(d) ? (n = d, a = k / 4) : a = k / (2 * Math.PI) * Math.asin(d / n);
        return -(n * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * f - a) * Math.PI / k)) + c
    },
    easeOutElastic: function (a, b, c, d, f) {
        a = 1.70158;
        var k = 0,
            n = d;
        if (0 == b) return c;
        if (1 ==
            (b /= f)) return c + d;
        k || (k = .3 * f);
        n < Math.abs(d) ? (n = d, a = k / 4) : a = k / (2 * Math.PI) * Math.asin(d / n);
        return n * Math.pow(2, -10 * b) * Math.sin(2 * (b * f - a) * Math.PI / k) + d + c
    },
    easeInOutElastic: function (a, b, c, d, f) {
        a = 1.70158;
        var k = 0,
            n = d;
        if (0 == b) return c;
        if (2 == (b /= f / 2)) return c + d;
        k || (k = 1.5 * .3 * f);
        n < Math.abs(d) ? (n = d, a = k / 4) : a = k / (2 * Math.PI) * Math.asin(d / n);
        return 1 > b ? -.5 * n * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * f - a) * Math.PI / k) + c : .5 * n * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b * f - a) * Math.PI / k) + d + c
    },
    easeInBack: function (a, b, c, d, f, k) {
        void 0 == k &&
            (k = 1.70158);
        return d * (b /= f) * b * ((k + 1) * b - k) + c
    },
    easeOutBack: function (a, b, c, d, f, k) {
        void 0 == k && (k = 1.70158);
        return d * ((b = b / f - 1) * b * ((k + 1) * b + k) + 1) + c
    },
    easeInOutBack: function (a, b, c, d, f, k) {
        void 0 == k && (k = 1.70158);
        return 1 > (b /= f / 2) ? d / 2 * b * b * (((k *= 1.525) + 1) * b - k) + c : d / 2 * ((b -= 2) * b * (((k *= 1.525) + 1) * b + k) + 2) + c
    },
    easeInBounce: function (a, b, c, d, f) {
        return d - jQuery.easing.easeOutBounce(a, f - b, 0, d, f) + c
    },
    easeOutBounce: function (a, b, c, d, f) {
        return (b /= f) < 1 / 2.75 ? 7.5625 * d * b * b + c : b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : b < 2.5 / 2.75 ? d *
            (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
    },
    easeInOutBounce: function (a, b, c, d, f) {
        return b < f / 2 ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, f) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - f, 0, d, f) + .5 * d + c
    }
});
(function (a) {
    function b(b, g) {
        var c = a("#" + b).attr("alt"),
            d = "dp" + c.charAt(5);
        "" !== c && (g.aSign = "n" === c.charAt(0) ? "-" : "", "0" === c.charAt(1) ? g.mNum = 15 : "0" < c.charAt(1) && "9" >= c.charAt(1) ? g.mNum = 1 * c.charAt(1) : g.nNum = 9, g.aSep = "a" === c.charAt(2) ? "'" : "p" === c.charAt(2) ? "." : "s" === c.charAt(2) ? " " : "x" === c.charAt(2) ? "" : ",", g.dGroup = "2" === c.charAt(3) ? /(\d)((\d)(\d{2}?)+)$/ : "4" === c.charAt(3) ? /(\d)((\d{4}?)+)$/ : /(\d)((\d{3}?)+)$/, g.aDec = "c" == c.charAt(4) ? "," : ".", g.mDec = "9" >= c.charAt(5) ? 1 * c.charAt(5) : 1 * a("#" + d).val(), g.rMethod =
            "" !== c.charAt(6) ? c.charAt(6) : "S");
        return g
    }

    function c(a, b) {
        var c = "",
            d = 0;
        for (j = 0; j < b; j++) c = a.charAt(j), "0" <= c && "9" >= c && d++;
        return d
    }

    function d(a, b) {
        if ("" != b.aSep) {
            a = a.split(b.aSep).join("");
            for (var c = a.split(b.aDec), d = c[0]; b.dGroup.test(d);) d = d.replace(b.dGroup, "$1" + b.aSep + "$2");
            a = 0 !== b.mDec && 1 < c.length ? d + b.aDec + c[1] : d
        }
        return a
    }

    function f(a, b, c) {
        var d = "",
            f = 0,
            k = "";
        a += "";
        "-" == a.charAt(0) && (k = 0 === 1 * a ? "" : "-", a = a.replace("-", ""));
        if (0 < 1 * a)
            for (;
                "0" == a.substr(0, 1) && 1 < a.length;) a = a.substr(1, 9999);
        var p = a.lastIndexOf(".");
        0 === p && (a = "0" + a, p = 1);
        if (-1 == p || p == a.length - 1) {
            if (0 < b) {
                d = -1 == p ? a + "." : a;
                for (f = 0; f < b; f++) d += "0";
                return k + d
            }
            return k + a
        }
        var v = a.length - 1 - p;
        if (v == b) return k + a;
        if (v < b) {
            d = a;
            for (f = v; f < b; f++) d += "0";
            return k + d
        }
        for (var p = p + b, v = 1 * a.charAt(p + 1), t = [], f = 0; f <= p; f++) t[f] = a.charAt(f);
        a = "." == a.charAt(p) ? a.charAt(p - 1) % 2 : a.charAt(p) % 2;
        if (4 < v && "S" === c || 4 < v && "A" === c && "" === k || 5 < v && "A" === c && "-" == k || 5 < v && "s" === c || 5 < v && "a" === c && "" === k || 4 < v && "a" === c && "-" == k || 5 < v && "B" === c || 5 == v && "B" === c && 1 == a || 0 < v && "C" === c && "" === k || 0 < v && "F" ===
            c && "-" == k || 0 < v && "U" === c)
            for (f = t.length - 1; 0 <= f && !("." != t[f] && (t[f]++, 10 > t[f])); f--);
        for (f = 0; f <= p; f++) d = "." == t[f] || 10 > t[f] || 0 === f ? d + t[f] : d + "0";
        0 === b && (d = d.replace(".", ""));
        return k + d
    }

    function k(c, g, l) {
        c = c.val();
        if (25 < c.length) return a("#" + g).val(""), !0;
        a.extend(l, b(g, l));
        var q = "";
        "-" == l.aSign && (q = "\\-");
        var k = c.replace(RegExp("[^" + q + l.aNum + l.aDec + "]", "gi"), "");
        if (0 < k.lastIndexOf("-") || k.indexOf(l.aDec) != k.lastIndexOf(l.aDec)) k = "";
        c = "";
        for (var q = 0, s = "", p = 0, k = k.split(""), p = 0; p < k.length; p++)
            if (0 === p &&
                "-" == k[p]) q = 1, s = "-";
            else {
                if (k[p] == l.aDec && k.length - 1 == p) break;
                0 === c.length && "0" == k[p] && (0 <= k[p + 1] || 9 >= k[p + 1]) || (c += k[p])
            }
        c = s + c; - 1 == c.indexOf(l.aDec) && c.length > l.mNum + q && (c = "");
        c.indexOf(l.aDec) > l.mNum + q && (c = ""); - 1 != c.indexOf(l.aDec) && "." != l.aDec && (c = c.replace(l.aDec, "."));
        c = f(c, l.mDec, l.rMethod);
        "." != l.aDec && (c = c.replace(".", l.aDec));
        "" !== c && "" !== l.aSep && (c = d(c, l));
        a("#" + g).val(c)
    }
    a.fn.autoNumeric = function () {
        return this.each(function () {
            var f = a.extend(a.fn.autoNumeric.defaults),
                g = a(this),
                l = this.id,
                q = "",
                B = 0,
                s = 0,
                p = 0,
                v = 0;
            a(this).focus(function () {
                a.extend(f, b(l, f))
            }).keydown(function (a) {
                a || (a = window.event);
                a.keyCode ? q = a.keyCode : a.which && (q = a.which);
                if (document.selection) this.focus(), a = document.selection.createRange(), B = document.selection.createRange().text.length, a.moveStart("character", -this.value.length), s = 1 * (a.text.length - B);
                else if (this.selectionStart || "0" == this.selectionStart) B = 1 * this.selectionEnd - 1 * this.selectionStart, s = 1 * this.selectionStart;
                p = this.value.length
            }).keypress(function (g) {
                a.extend(f,
                    b(l, f));
                var d = f.aNum + f.aSign + f.aDec,
                    k = 0,
                    C = 0,
                    k = p - (p - this.value.lastIndexOf(f.aDec)); - 1 == k && (k = p);
                C = p - this.value.lastIndexOf(f.aDec) - 1; - 1 == this.value.lastIndexOf(f.aDec) && (C = 0);
                v = c(this.value, k);
                g || (g = window.event);
                var y = "";
                g.keyCode ? y = g.keyCode : g.which && (y = g.which);
                var z = String.fromCharCode(y);
                if (g.ctrlKey && (67 == q || 86 == q || 88 == q) || 8 == q || 9 == q || 35 == q || 36 == q || 37 == q || 39 == q || 46 == q) return !0; - 1 == d.indexOf(z) && g.preventDefault();
                if (z == f.aDec) {
                    if (B == p && 0 < B) return;
                    (-1 != this.value.indexOf(f.aDec) || 0 >= f.mDec ||
                        s < this.value.length - f.mDec || 0 === s && "-" == this.value.charAt(0) || this.value.lastIndexOf(f.aSep) >= s && "" !== f.aSep) && g.preventDefault()
                }
                45 == y && (0 < s || -1 != this.value.indexOf("-") || "" === f.aSign) && g.preventDefault();
                if (48 <= y && 57 >= y) {
                    if (0 < B) return !0; - 1 != this.value.indexOf("-") && 0 === s && g.preventDefault();
                    v >= f.mNum && s <= k && g.preventDefault(); - 1 != this.value.indexOf(f.aDec) && s >= this.value.length - C && C >= f.mDec && g.preventDefault()
                }
            }).keyup(function (b) {
                if ("" === f.aSep || 9 == b.keyCode || 20 == b.keyCode || 35 == b.keyCode || 36 ==
                    b.keyCode || 37 == b.keyCode || 39 == b.keyCode || 9 == q || 13 == q || 20 == q || 35 == q || 36 == q || 37 == q || 39 == q) return !0;
                a("#" + this.id).val(d(this.value, f));
                b = this.value.length;
                var g = b - (b - this.value.lastIndexOf(f.aDec)); - 1 == g && (g = b);
                v = c(this.value, g);
                v > f.mNum && a("#" + this.id).val("");
                g = 0;
                p < b && (g = s + (b - p));
                p > b && (g = 0 < B ? b - (p - (s + B)) : p - 2 == b ? 8 == q ? s - 2 : s - 1 : 8 == q ? s - 1 : s);
                p == b && (g = this.value.charAt(s - 1) == f.aSep && 8 == q ? s - 1 : this.value.charAt(s) == f.aSep && 46 == q ? s + 1 : 1 === b ? s + 1 : s);
                this.focus();
                document.selection ? (b = this.createTextRange(), b.collapse(!0),
                    b.moveStart("character", g), b.moveEnd("character", 0), b.select()) : this.selectionStart && (this.selectionEnd = this.selectionStart = g)
            }).blur(function () {
                "" != a("#" + l).val() && k(g, l, f)
            });
            a(this).bind("paste", function () {
                setTimeout(function () {
                    k(g, l, f)
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
        var g = a("#" + c).val(),
            l = a.extend(a.fn.autoNumeric.defaults);
        a.extend(l, b(c, l));
        g = g.replace(RegExp("[^\\-" +
            l.aNum + l.aDec + "]", "gi"), "");
        c = "";
        "-" == g.charAt(0) && (c = 0 === 1 * g ? "" : "-", g = g.replace("-", ""));
        g = g.replace(l.aDec, ".");
        if (0 < 1 * g)
            for (;
                "0" == g.substr(0, 1) && 1 < g.length;) g = g.substr(1, 9999);
        g = 0 === g.lastIndexOf(".") ? "0" + g : g;
        return c + (0 === 1 * g ? "0" : g)
    };
    a.fn.autoNumeric.Format = function (c, g) {
        var l = a.extend(a.fn.autoNumeric.defaults);
        a.extend(l, b(c, l));
        g = f(g, l.mDec, l.rMethod);
        var q = 0; - 1 != g.indexOf("-") && "" === l.aSign ? g = "" : -1 != g.indexOf("-") && "-" == l.aSign && (q = 1); - 1 == g.indexOf(".") && g.length > l.mNum + q ? g = "" : g.indexOf(".") >
            l.mNum + q && (g = "");
        "." != l.aDec && (g = g.replace(".", l.aDec));
        return d(g, l)
    }
})(jQuery);
(function (a) {
    function b(b) {
        var c = b || window.event,
            d = [].slice.call(arguments, 1),
            g = 0,
            l = 0,
            q = 0;
        return b = a.event.fix(c), b.type = "mousewheel", c.wheelDelta && (g = c.wheelDelta / 120), c.detail && (g = -c.detail / 3), q = g, void 0 !== c.axis && c.axis === c.HORIZONTAL_AXIS && (q = 0, l = -1 * g), void 0 !== c.wheelDeltaY && (q = c.wheelDeltaY / 120), void 0 !== c.wheelDeltaX && (l = -1 * c.wheelDeltaX / 120), d.unshift(b, g, l, q), (a.event.dispatch || a.event.handle).apply(this, d)
    }
    var c = ["DOMMouseScroll", "mousewheel"];
    if (a.event.fixHooks)
        for (var d = c.length; d;) a.event.fixHooks[c[--d]] =
            a.event.mouseHooks;
    a.event.special.mousewheel = {
        setup: function () {
            if (this.addEventListener)
                for (var a = c.length; a;) this.addEventListener(c[--a], b, !1);
            else this.onmousewheel = b
        },
        teardown: function () {
            if (this.removeEventListener)
                for (var a = c.length; a;) this.removeEventListener(c[--a], b, !1);
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
        function c(b, c, g, l) {
            var d = [],
                q = g,
                f = !1;
            for ("backward" == l && (b = a.makeArray(b), b.reverse()); 0 < q;) a.each(b, function (b) {
                if (0 < q) f ? (d.push(a(this).clone()), q--) : b == c && (f = !0, d.push(a(this).clone()), q--);
                else return !1
            });
            return d
        }

        function d(b, c) {
            if ("left" == c) var g = a(".pager", v).eq(b).position().left;
            else "top" == c && (g = a(".pager", v).eq(b).position().top);
            return g
        }

        function f() {
            !b.infiniteLoop && b.hideControlOnEnd && (r == K ? a(".bx-prev", v).hide() : a(".bx-prev", v).show(), r == G ? a(".bx-next",
                v).hide() : a(".bx-next", v).show())
        }

        function k() {
            var c = a("img", p.eq(r)).attr("title");
            "" != c ? b.captionsSelector ? a(b.captionsSelector).html(c) : a(".bx-captions", v).html(c) : b.captionsSelector ? a(b.captionsSelector).html("\u00a0") : a(".bx-captions", v).html("\u00a0")
        }

        function n(c) {
            var g = p.length;
            1 < b.moveSlideQty && (g = 0 != p.length % b.moveSlideQty ? Math.ceil(p.length / b.moveSlideQty) : p.length / b.moveSlideQty);
            var l = "";
            if (b.buildPager)
                for (c = 0; c < g; c++) l += b.buildPager(c, p.eq(c * b.moveSlideQty));
            else if ("full" == c)
                for (c =
                    1; c <= g; c++) l += '<a href="" class="pager-link pager-' + c + '">' + c + "</a>";
            else "short" == c && (l = '<span class="bx-pager-current">' + (b.startingSlide + 1) + "</span> " + b.pagerShortSeparator + ' <span class="bx-pager-total">' + p.length + "</span>");
            b.pagerSelector ? (a(b.pagerSelector).append(l), z = a(b.pagerSelector)) : (g = a('<div class="bx-pager"></div>'), g.append(l), "top" == b.pagerLocation ? v.prepend(g) : "bottom" == b.pagerLocation && v.append(g), z = a(".bx-pager", v));
            z.children().click(function () {
                if ("full" == b.pagerType) {
                    var a = z.children().index(this);
                    1 < b.moveSlideQty && (a *= b.moveSlideQty);
                    B.goToSlide(a)
                }
                return !1
            })
        }

        function g(c) {
            "full" == b.pagerType && b.pager ? (a("a", z).removeClass(b.pagerActiveClass), a("a", z).eq(c).addClass(b.pagerActiveClass)) : "short" == b.pagerType && b.pager && a(".bx-pager-current", z).html(r + 1)
        }

        function l() {
            p.not(":eq(" + r + ")").fadeTo(b.speed, 0).css("zIndex", 98);
            p.eq(r).css("zIndex", 99).fadeTo(b.speed, 1, function () {
                O = !1;
                jQuery.browser.msie && p.eq(r).get(0).style.removeAttribute("filter");
                b.onAfterSlide(r, p.length, p.eq(r))
            })
        }

        function q(a,
            c, g) {
            "horizontal" == b.mode ? "next" == b.tickerDirection ? s.animate({
                left: "-=" + c + "px"
            }, g, "linear", function () {
                s.css("left", a);
                q(a, P, b.tickerSpeed)
            }) : "prev" == b.tickerDirection && s.animate({
                left: "+=" + c + "px"
            }, g, "linear", function () {
                s.css("left", a);
                q(a, P, b.tickerSpeed)
            }) : "vertical" == b.mode && ("next" == b.tickerDirection ? s.animate({
                top: "-=" + c + "px"
            }, g, "linear", function () {
                s.css("top", a);
                q(a, N, b.tickerSpeed)
            }) : "prev" == b.tickerDirection && s.animate({
                top: "+=" + c + "px"
            }, g, "linear", function () {
                s.css("top", a);
                q(a, N, b.tickerSpeed)
            }))
        }
        b = a.extend({
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
        }, b);
        var B = this,
            s = "",
            p = "",
            v = "",
            t = "",
            A = "",
            L = "",
            C = "",
            y = "",
            z = "",
            D = "",
            u = "",
            F = "",
            Q = "",
            x = !0,
            E = 0,
            I = 0,
            r = 0,
            M = 0,
            J = 0,
            P = 0,
            N = 0,
            Y = 0,
            V = 0,
            O = !1,
            K = 0,
            G = p.length - 1;
        this.goToSlide =
            function (a, c) {
                if (!O) {
                    O = !0;
                    r = a;
                    b.onBeforeSlide(r, p.length, p.eq(r));
                    "undefined" == typeof c && (c = !0);
                    c && b.auto && B.stopShow(!0);
                    slide = a;
                    if (slide == K) b.onFirstSlide(r, p.length, p.eq(r));
                    if (slide == G) b.onLastSlide(r, p.length, p.eq(r));
                    "horizontal" == b.mode ? s.animate({
                        left: "-" + d(slide, "left") + "px"
                    }, b.speed, b.easing, function () {
                        O = !1;
                        b.onAfterSlide(r, p.length, p.eq(r))
                    }) : "vertical" == b.mode ? s.animate({
                        top: "-" + d(slide, "top") + "px"
                    }, b.speed, b.easing, function () {
                        O = !1;
                        b.onAfterSlide(r, p.length, p.eq(r))
                    }) : "fade" == b.mode &&
                        l();
                    f();
                    1 < b.moveSlideQty && (a = Math.floor(a / b.moveSlideQty));
                    g(a);
                    k()
                }
        };
        this.goToNextSlide = function (a) {
            "undefined" == typeof a && (a = !0);
            a && b.auto && B.stopShow(!0);
            if (b.infiniteLoop) O || (O = !0, c = !1, r += b.moveSlideQty, r > G && (r %= p.length, c = !0), b.onNextSlide(r, p.length, p.eq(r)), b.onBeforeSlide(r, p.length, p.eq(r)), "horizontal" == b.mode ? s.animate({
                left: "-=" + b.moveSlideQty * L + "px"
            }, b.speed, b.easing, function () {
                O = !1;
                c && s.css("left", "-" + d(r, "left") + "px");
                b.onAfterSlide(r, p.length, p.eq(r))
            }) : "vertical" == b.mode ? s.animate({
                top: "-=" +
                    b.moveSlideQty * I + "px"
            }, b.speed, b.easing, function () {
                O = !1;
                c && s.css("top", "-" + d(r, "top") + "px");
                b.onAfterSlide(r, p.length, p.eq(r))
            }) : "fade" == b.mode && l(), 1 < b.moveSlideQty ? g(Math.ceil(r / b.moveSlideQty)) : g(r), k());
            else if (!O) {
                var c = !1;
                r += b.moveSlideQty;
                r <= G ? (f(), b.onNextSlide(r, p.length, p.eq(r)), B.goToSlide(r)) : r -= b.moveSlideQty
            }
        };
        this.goToPreviousSlide = function (c) {
            "undefined" == typeof c && (c = !0);
            c && b.auto && B.stopShow(!0);
            if (b.infiniteLoop) O || (O = !0, q = !1, r -= b.moveSlideQty, 0 > r && (negativeOffset = r % p.length, r =
                0 == negativeOffset ? 0 : p.length + negativeOffset, q = !0), b.onPrevSlide(r, p.length, p.eq(r)), b.onBeforeSlide(r, p.length, p.eq(r)), "horizontal" == b.mode ? s.animate({
                left: "+=" + b.moveSlideQty * L + "px"
            }, b.speed, b.easing, function () {
                O = !1;
                q && s.css("left", "-" + d(r, "left") + "px");
                b.onAfterSlide(r, p.length, p.eq(r))
            }) : "vertical" == b.mode ? s.animate({
                top: "+=" + b.moveSlideQty * I + "px"
            }, b.speed, b.easing, function () {
                O = !1;
                q && s.css("top", "-" + d(r, "top") + "px");
                b.onAfterSlide(r, p.length, p.eq(r))
            }) : "fade" == b.mode && l(), 1 < b.moveSlideQty ? g(Math.ceil(r /
                b.moveSlideQty)) : g(r), k());
            else if (!O) {
                var q = !1;
                r -= b.moveSlideQty;
                0 > r && (r = 0, b.hideControlOnEnd && a(".bx-prev", v).hide());
                f();
                b.onPrevSlide(r, p.length, p.eq(r));
                B.goToSlide(r)
            }
        };
        this.goToFirstSlide = function (a) {
            "undefined" == typeof a && (a = !0);
            B.goToSlide(K, a)
        };
        this.goToLastSlide = function () {
            if ("undefined" == typeof a) var a = !0;
            B.goToSlide(G, a)
        };
        this.getCurrentSlide = function () {
            return r
        };
        this.getSlideCount = function () {
            return p.length
        };
        this.stopShow = function (a) {
            clearInterval(D);
            "undefined" == typeof a && (a = !0);
            a &&
                b.autoControls && (u.html(F).removeClass("stop").addClass("start"), x = !1)
        };
        this.startShow = function (c) {
            "undefined" == typeof c && (c = !0);
            b.auto ? b.infiniteLoop ? "next" == b.autoDirection ? D = setInterval(function () {
                B.goToNextSlide(!1)
            }, b.pause) : "prev" == b.autoDirection && (D = setInterval(function () {
                B.goToPreviousSlide(!1)
            }, b.pause)) : "next" == b.autoDirection ? D = setInterval(function () {
                r += b.moveSlideQty;
                r > G && (r %= p.length);
                B.goToSlide(r, !1)
            }, b.pause) : "prev" == b.autoDirection && (D = setInterval(function () {
                r -= b.moveSlideQty;
                0 >
                    r && (negativeOffset = r % p.length, r = 0 == negativeOffset ? 0 : p.length + negativeOffset);
                B.goToSlide(r, !1)
            }, b.pause)) : b.ticker && (b.tickerSpeed *= 10, a(".pager", v).each(function () {
                    P += a(this).width();
                    N += a(this).height()
                }), "prev" == b.tickerDirection && "horizontal" == b.mode ? s.css("left", "-" + (P + M) + "px") : "prev" == b.tickerDirection && "vertical" == b.mode && s.css("top", "-" + (N + J) + "px"), "horizontal" == b.mode ? (Y = parseInt(s.css("left")), q(Y, P, b.tickerSpeed)) : "vertical" == b.mode && (V = parseInt(s.css("top")), q(V, N, b.tickerSpeed)), b.tickerHover &&
                s.hover(function () {
                    x && B.stopTicker(!1)
                }, function () {
                    x && B.startTicker(!1)
                }));
            c && b.autoControls && (u.html(Q).removeClass("start").addClass("stop"), x = !0)
        };
        this.stopTicker = function (a) {
            s.stop();
            "undefined" == typeof a && (a = !0);
            a && b.ticker && (u.html(F).removeClass("stop").addClass("start"), x = !1)
        };
        this.startTicker = function (a) {
            if ("horizontal" == b.mode) {
                if ("next" == b.tickerDirection) {
                    a = parseInt(s.css("left"));
                    var c = P + a + p.eq(0).width()
                } else "prev" == b.tickerDirection && (a = -parseInt(s.css("left")), c = a - p.eq(0).width());
                var g = c * b.tickerSpeed / P;
                q(Y, c, g)
            } else "vertical" == b.mode && ("next" == b.tickerDirection ? (c = parseInt(s.css("top")), c = N + c + p.eq(0).height()) : "prev" == b.tickerDirection && (c = -parseInt(s.css("top")), c -= p.eq(0).height()), g = c * b.tickerSpeed / N, q(V, c, g), "undefined" == typeof a && (a = !0), a && b.ticker) && (u.html(Q).removeClass("start").addClass("stop"), x = !0)
        };
        this.initShow = function () {
            s = a(this);
            s.clone();
            p = s.children();
            v = "";
            t = s.children(":first");
            A = t.width();
            E = 0;
            L = t.outerWidth();
            I = 0;
            C = t.outerWidth() * b.displaySlideQty;
            y = t.outerHeight() *
                b.displaySlideQty;
            O = !1;
            z = "";
            J = M = r = 0;
            Q = F = u = D = "";
            x = !0;
            K = V = Y = N = P = 0;
            G = p.length - 1;
            p.each(function () {
                a(this).outerHeight() > I && (I = a(this).outerHeight());
                a(this).outerWidth() > E && (E = a(this).outerWidth())
            });
            if (b.randomStart) {
                var l = Math.floor(Math.random() * p.length);
                r = l;
                M = L * (b.moveSlideQty + l);
                J = I * (b.moveSlideQty + l)
            } else r = b.startingSlide, M = L * (b.moveSlideQty + b.startingSlide), J = I * (b.moveSlideQty + b.startingSlide); if ("horizontal" == b.mode || "vertical" == b.mode) l = c(p, 0, b.moveSlideQty, "backward"), a.each(l, function () {
                    s.prepend(a(this))
                }),
                l = c(p, 0, p.length + b.moveSlideQty - 1 - (p.length - b.displaySlideQty), "forward"), b.infiniteLoop && a.each(l, function () {
                    s.append(a(this))
                });
            "horizontal" == b.mode ? (s.wrap('<div class="' + b.wrapperClass + '" style="width:' + C + 'px; position:relative;"></div>').wrap('<div class="bx-window" style="position:relative; overflow:hidden; width:' + C + 'px;"></div>').css({
                width: "999999px",
                position: "relative",
                left: "-" + M + "px"
            }), s.children().css({
                width: A,
                "float": "left",
                listStyle: "none"
            }), v = s.parent().parent(), p.addClass("pager")) :
                "vertical" == b.mode ? (s.wrap('<div class="' + b.wrapperClass + '" style="width:' + E + 'px; position:relative;"></div>').wrap('<div class="bx-window" style="width:' + E + "px; height:" + y + 'px; position:relative; overflow:hidden;"></div>').css({
                    height: "999999px",
                    position: "relative",
                    top: "-" + J + "px"
                }), s.children().css({
                    listStyle: "none",
                    height: I
                }), v = s.parent().parent(), p.addClass("pager")) : "fade" == b.mode && (s.wrap('<div class="' + b.wrapperClass + '" style="width:' + E + 'px; position:relative;"></div>').wrap('<div class="bx-window" style="height:' +
                    I + "px; width:" + E + 'px; position:relative; overflow:hidden;"></div>'), s.children().css({
                    listStyle: "none",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 98
                }), v = s.parent().parent(), p.not(":eq(" + r + ")").fadeTo(0, 0), p.eq(r).css("zIndex", 99));
            b.captions && null == b.captionsSelector && v.append('<div class="bx-captions"></div>');
            b.pager && !b.ticker && ("full" == b.pagerType ? n("full") : "short" == b.pagerType && n("short"));
            if (b.controls && !b.ticker) {
                "" != b.nextImage ? (nextContent = b.nextImage, nextType = "image") : (nextContent = b.nextText,
                    nextType = "text");
                "" != b.prevImage ? (prevContent = b.prevImage, prevType = "image") : (prevContent = b.prevText, prevType = "text");
                var l = nextType,
                    d = nextContent,
                    q = prevType,
                    T = prevContent,
                    R = a('<a href="" class="bx-next"></a>'),
                    U = a('<a href="" class="bx-prev"></a>');
                "text" == l ? R.html(d) : R.html('<img src="' + d + '" />');
                "text" == q ? U.html(T) : U.html('<img src="' + T + '" />');
                b.prevSelector ? a(b.prevSelector).append(U) : v.append(U);
                b.nextSelector ? a(b.nextSelector).append(R) : v.append(R);
                R.click(function () {
                    B.goToNextSlide();
                    return !1
                });
                U.click(function () {
                    B.goToPreviousSlide();
                    return !1
                })
            }
            if (b.auto || b.ticker) b.autoControls && ("" != b.startImage ? (startContent = b.startImage, startType = "image") : (startContent = b.startText, startType = "text"), "" != b.stopImage ? (stopContent = b.stopImage, stopType = "image") : (stopContent = b.stopText, stopType = "text"), l = startType, d = startContent, q = stopType, T = stopContent, u = a('<a href="" class="bx-start"></a>'), F = "text" == l ? d : '<img src="' + d + '" />', Q = "text" == q ? T : '<img src="' + T + '" />', b.autoControlsSelector ? a(b.autoControlsSelector).append(u) :
                (v.append('<div class="bx-auto"></div>'), a(".bx-auto", v).html(u)), u.click(function () {
                    b.ticker ? a(this).hasClass("stop") ? B.stopTicker() : a(this).hasClass("start") && B.startTicker() : a(this).hasClass("stop") ? B.stopShow(!0) : a(this).hasClass("start") && B.startShow(!0);
                    return !1
                })), b.autoStart ? setTimeout(function () {
                B.startShow(!0)
            }, b.autoDelay) : B.stopShow(!0), b.autoHover && !b.ticker && v.find(".bx-window").hover(function () {
                x && B.stopShow(!1)
            }, function () {
                x && B.startShow(!1)
            });
            1 < b.moveSlideQty ? g(Math.ceil(r / b.moveSlideQty)) :
                g(r);
            f();
            b.captions && k();
            b.onAfterSlide(r, p.length, p.eq(r))
        };
        this.destroyShow = function () {
            clearInterval(D);
            a(".bx-next, .bx-prev, .bx-pager, .bx-auto", v).remove();
            s.unwrap().unwrap().removeAttr("style");
            s.children().removeAttr("style").not(".pager").remove();
            p.removeClass("pager")
        };
        this.reloadShow = function () {
            B.destroyShow();
            B.initShow()
        };
        this.each(function () {
            0 < a(this).children().length && B.initShow()
        });
        return this
    };
    jQuery.fx.prototype.cur = function () {
        return null == this.elem[this.prop] || this.elem.style &&
            null != this.elem.style[this.prop] ? parseFloat(jQuery.css(this.elem, this.prop)) : this.elem[this.prop]
    }
})(jQuery);
jQuery.url = function () {
    var a = {},
        b = {},
        c = window.location,
        d = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),
        f = /(?:^|&)([^&=]*)=?([^&]*)/g,
        k = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        n = function () {
            str = decodeURI(c);
            for (var g = k.exec(str), l = {}, q = 14; q--;) l[d[q]] = g[q] || "";
            l.queryKey = {};
            l[d[12]].replace(f,
                function (a, b, c) {
                    b && (l.queryKey[b] = c)
                });
            b = l;
            g = b.path;
            a = [];
            a = 1 == b.path.length ? {} : ("/" == g.charAt(g.length - 1) ? g.substring(1, g.length - 1) : path = g.substring(1)).split("/")
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
            return "base" == a ? null !== b.port && "" !== b.port ? b.protocol + "://" + b.host + ":" + b.port +
                "/" : b.protocol + "://" + b.host + "/" : "" === b[a] ? null : b[a]
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
    if (!a)
        if (window.event) a = window.event;
        else return;
    keyCode = a.keyCode;
    17 == keyCode && (ctrlKeyIsDown = !1)
}

function interceptKeyDown(a) {
    if (!a)
        if (window.event) a = window.event;
        else return;
    keyCode = a.keyCode;
    116 == keyCode && userMovingWithinSite();
    17 == keyCode && (ctrlKeyIsDown = !0);
    ctrlKeyIsDown && 82 == keyCode && userMovingWithinSite()
}

function interceptKeyPress(a) {
    if (!a)
        if (window.event) a = window.event;
        else return;
    var b = a.keyCode ? a.keyCode : a.which ? a.which : void 0;
    null != a.charCode && 0 != a.charCode || 116 != b || userMovingWithinSite()
}

function attachEventListener(a, b, c, d) {
    window.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent("on" + b, c)
}
(function (a) {
    a.fn.onUserExit = function (b) {
        b = a.extend({
            execute: "",
            internalURLs: ""
        }, b);
        codeToExecute = b.execute;
        a("a").each(function () {
            var c = a(this),
                d = !1,
                f = b.internalURLs.split("|");
            for (i = 0; i < f.length; i++) void 0 != c.attr("href") && (-1 !== c.attr("href").indexOf(f[i]) && (d = !0), -1 == c.attr("href").indexOf("http://") && (d = !0));
            !0 == d && c.bind("click", function () {
                userMovingWithinSite()
            })
        });
        a("form").each(function () {
            var b = a(this);
            currentonSubmit = b.attr("onSubmit");
            void 0 === currentonSubmit && (currentonSubmit = "");
            b.attr("onSubmit",
                currentonSubmit + " userMovingWithinSite();")
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
                width: w
            })
        }
    })
};
(function (a) {
    a.extend(a.fn, {
        validate: function (b) {
            if (this.length) {
                var c = a.data(this[0], "validator");
                if (c) return c;
                this.attr("novalidate", "novalidate");
                c = new a.validator(b, this[0]);
                a.data(this[0], "validator", c);
                c.settings.onsubmit && (b = this.find("input, button"), b.filter(".cancel").click(function () {
                    c.cancelSubmit = !0
                }), c.settings.submitHandler && b.filter(":submit").click(function () {
                    c.submitButton = this
                }), this.submit(function (b) {
                    function f() {
                        if (c.settings.submitHandler) {
                            if (c.submitButton) var b = a("<input type='hidden'/>").attr("name",
                                c.submitButton.name).val(c.submitButton.value).appendTo(c.currentForm);
                            c.settings.submitHandler.call(c, c.currentForm);
                            c.submitButton && b.remove();
                            return !1
                        }
                        return !0
                    }
                    c.settings.debug && b.preventDefault();
                    if (c.cancelSubmit) return c.cancelSubmit = !1, f();
                    if (c.form()) return c.pendingRequest ? (c.formSubmitted = !0, !1) : f();
                    c.focusInvalid();
                    return !1
                }));
                return c
            }
            b && b.debug && window.console && console.warn("nothing selected, can't validate, returning nothing")
        },
        valid: function () {
            if (a(this[0]).is("form")) return this.validate().form();
            var b = !0,
                c = a(this[0].form).validate();
            this.each(function () {
                b &= c.element(this)
            });
            return b
        },
        removeAttrs: function (b) {
            var c = {},
                d = this;
            a.each(b.split(/\s/), function (a, b) {
                c[b] = d.attr(b);
                d.removeAttr(b)
            });
            return c
        },
        rules: function (b, c) {
            var d = this[0];
            if (b) {
                var f = a.data(d.form, "validator").settings,
                    k = f.rules,
                    n = a.validator.staticRules(d);
                switch (b) {
                case "add":
                    a.extend(n, a.validator.normalizeRule(c));
                    c.messages && (f.messages[d.name] = a.extend(f.messages[d.name], c.messages));
                    break;
                case "remove":
                    if (!c) return delete k[d.name],
                        n;
                    var g = {};
                    a.each(c.split(/\s/), function (a, b) {
                        g[b] = n[b];
                        delete n[b]
                    });
                    return g
                }
            }
            d = a.validator.normalizeRules(a.extend({}, a.validator.metadataRules(d), a.validator.classRules(d), a.validator.attributeRules(d), a.validator.staticRules(d)), d);
            d.required && (f = d.required, delete d.required, d = a.extend({
                required: f
            }, d));
            return d
        }
    });
    a.extend(a.expr[":"], {
        blank: function (b) {
            return !a.trim("" + b.value)
        },
        filled: function (b) {
            return !!a.trim("" + b.value)
        },
        unchecked: function (a) {
            return !a.checked
        }
    });
    a.validator = function (b, c) {
        this.settings =
            a.extend(!0, {}, a.validator.defaults, b);
        this.currentForm = c;
        this.init()
    };
    a.validator.format = function (b, c) {
        if (1 == arguments.length) return function () {
            var c = a.makeArray(arguments);
            c.unshift(b);
            return a.validator.format.apply(this, c)
        };
        2 < arguments.length && c.constructor != Array && (c = a.makeArray(arguments).slice(1));
        c.constructor != Array && (c = [c]);
        a.each(c, function (a, c) {
            b = b.replace(RegExp("\\{" + a + "\\}", "g"), c)
        });
        return b
    };
    a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (a) {
                this.lastActive = a;
                this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(a)).hide())
            },
            onfocusout: function (a) {
                !this.checkable(a) && (a.name in this.submitted || !this.optional(a)) && this.element(a)
            },
            onkeyup: function (a) {
                (a.name in
                    this.submitted || a == this.lastElement) && this.element(a)
            },
            onclick: function (a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function (b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },
            unhighlight: function (b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }
        },
        setDefaults: function (b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "B\u1ea1n ch\u01b0a nh\u1eadp gi\u00e1 cho s\u1ea3n ph\u1ea9m.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            accept: "Please enter a value with a valid extension.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                function b(b) {
                    var c = a.data(this[0].form, "validator"),
                        d = "on" + b.type.replace(/^validate/, "");
                    c.settings[d] && c.settings[d].call(c, this[0], b)
                }
                this.labelContainer =
                    a(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm);
                this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var c = this.groups = {};
                a.each(this.settings.groups, function (b, d) {
                    a.each(d.split(/\s/), function (a, g) {
                        c[g] = b
                    })
                });
                var d = this.settings.rules;
                a.each(d, function (b, c) {
                    d[b] = a.validator.normalizeRule(c)
                });
                a(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", b).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", b);
                this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate",
                    this.settings.invalidHandler)
            },
            form: function () {
                this.checkForm();
                a.extend(this.submitted, this.errorMap);
                this.invalid = a.extend({}, this.errorMap);
                this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]);
                this.showErrors();
                return this.valid()
            },
            checkForm: function () {
                this.prepareForm();
                for (var a = 0, c = this.currentElements = this.elements(); c[a]; a++) this.check(c[a]);
                return this.valid()
            },
            element: function (b) {
                this.lastElement = b = this.validationTargetFor(this.clean(b));
                this.prepareElement(b);
                this.currentElements =
                    a(b);
                var c = this.check(b);
                c ? delete this.invalid[b.name] : this.invalid[b.name] = !0;
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers));
                this.showErrors();
                return c
            },
            showErrors: function (b) {
                if (b) {
                    a.extend(this.errorMap, b);
                    this.errorList = [];
                    for (var c in b) this.errorList.push({
                        message: b[c],
                        element: this.findByName(c)[0]
                    });
                    this.successList = a.grep(this.successList, function (a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function () {
                a.fn.resetForm && a(this.currentForm).resetForm();
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass)
            },
            numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            },
            objectLength: function (a) {
                var c = 0,
                    d;
                for (d in a) c++;
                return c
            },
            hideErrors: function () {
                this.addWrapper(this.toHide).hide()
            },
            valid: function () {
                return 0 == this.size()
            },
            size: function () {
                return this.errorList.length
            },
            focusInvalid: function () {
                if (this.settings.focusInvalid) try {
                    a(this.findLastActive() ||
                        this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (b) {}
            },
            findLastActive: function () {
                var b = this.lastActive;
                return b && 1 == a.grep(this.errorList, function (a) {
                    return a.element.name == b.name
                }).length && b
            },
            elements: function () {
                var b = this,
                    c = {};
                return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
                    !this.name && b.settings.debug && window.console && console.error("%o has no name assigned",
                        this);
                    return this.name in c || !b.objectLength(a(this).rules()) ? !1 : c[this.name] = !0
                })
            },
            clean: function (b) {
                return a(b)[0]
            },
            errors: function () {
                return a(this.settings.errorElement + "." + this.settings.errorClass, this.errorContext)
            },
            reset: function () {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = a([]);
                this.toHide = a([]);
                this.currentElements = a([])
            },
            prepareForm: function () {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function (a) {
                this.reset();
                this.toHide = this.errorsFor(a)
            },
            check: function (b) {
                b = this.validationTargetFor(this.clean(b));
                var c = a(b).rules(),
                    d = !1,
                    f;
                for (f in c) {
                    var k = {
                        method: f,
                        parameters: c[f]
                    };
                    try {
                        var n = a.validator.methods[f].call(this, b.value.replace(/\r/g, ""), b, k.parameters);
                        if ("dependency-mismatch" == n) d = !0;
                        else {
                            d = !1;
                            if ("pending" == n) {
                                this.toHide = this.toHide.not(this.errorsFor(b));
                                return
                            }
                            if (!n) return this.formatAndAdd(b, k), !1
                        }
                    } catch (g) {
                        throw this.settings.debug && window.console && console.log("exception occured when checking element " + b.id + ", check the '" + k.method +
                            "' method", g), g;
                    }
                }
                if (!d) return this.objectLength(c) && this.successList.push(b), !0
            },
            customMetaMessage: function (b, c) {
                if (a.metadata) {
                    var d = this.settings.meta ? a(b).metadata()[this.settings.meta] : a(b).metadata();
                    return d && d.messages && d.messages[c]
                }
            },
            customMessage: function (a, c) {
                var d = this.settings.messages[a];
                return d && (d.constructor == String ? d : d[c])
            },
            findDefined: function () {
                for (var a = 0; a < arguments.length; a++)
                    if (void 0 !== arguments[a]) return arguments[a]
            },
            defaultMessage: function (b, c) {
                return this.findDefined(this.customMessage(b.name,
                    c), this.customMetaMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
            },
            formatAndAdd: function (a, c) {
                var d = this.defaultMessage(a, c.method),
                    f = /\$?\{(\d+)\}/g;
                "function" == typeof d ? d = d.call(this, c.parameters, a) : f.test(d) && (d = jQuery.format(d.replace(f, "{$1}"), c.parameters));
                this.errorList.push({
                    message: d,
                    element: a
                });
                this.errorMap[a.name] = d;
                this.submitted[a.name] = d
            },
            addWrapper: function (a) {
                this.settings.wrapper && (a =
                    a.add(a.parent(this.settings.wrapper)));
                return a
            },
            defaultShowErrors: function () {
                for (var a = 0; this.errorList[a]; a++) {
                    var c = this.errorList[a];
                    this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass);
                    this.showLabel(c.element, c.message)
                }
                this.errorList.length && (this.toShow = this.toShow.add(this.containers));
                if (this.settings.success)
                    for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)
                    for (a = 0, c = this.validElements(); c[a]; a++) this.settings.unhighlight.call(this,
                        c[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function () {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function () {
                return a(this.errorList).map(function () {
                    return this.element
                })
            },
            showLabel: function (b, c) {
                var d = this.errorsFor(b);
                d.length ? (d.removeClass(this.settings.validClass).addClass(this.settings.errorClass), d.attr("generated") && d.html(c)) : (d = a("<" + this.settings.errorElement +
                    "/>").attr({
                    "for": this.idOrName(b),
                    generated: !0
                }).addClass(this.settings.errorClass).html(c || ""), this.settings.wrapper && (d = d.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(d).length || (this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b)));
                !c && this.settings.success && (d.text(""), "string" == typeof this.settings.success ? d.addClass(this.settings.success) : this.settings.success(d));
                this.toShow = this.toShow.add(d)
            },
            errorsFor: function (b) {
                var c =
                    this.idOrName(b);
                return this.errors().filter(function () {
                    return a(this).attr("for") == c
                })
            },
            idOrName: function (a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function (a) {
                this.checkable(a) && (a = this.findByName(a.name).not(this.settings.ignore)[0]);
                return a
            },
            checkable: function (a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function (b) {
                var c = this.currentForm;
                return a(document.getElementsByName(b)).map(function (a, f) {
                    return f.form == c && f.name == b && f || null
                })
            },
            getLength: function (b, c) {
                switch (c.nodeName.toLowerCase()) {
                case "select":
                    return a("option:selected", c).length;
                case "input":
                    if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            },
            depend: function (a, c) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, c) : !0
            },
            dependTypes: {
                "boolean": function (a) {
                    return a
                },
                string: function (b, c) {
                    return !!a(b, c.form).length
                },
                "function": function (a, c) {
                    return a(c)
                }
            },
            optional: function (b) {
                return !a.validator.methods.required.call(this,
                    a.trim(b.value), b) && "dependency-mismatch"
            },
            startRequest: function (a) {
                this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
            },
            stopRequest: function (b, c) {
                this.pendingRequest--;
                0 > this.pendingRequest && (this.pendingRequest = 0);
                delete this.pending[b.name];
                c && 0 == this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 == this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function (b) {
                return a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            dateDE: {
                dateDE: !0
            },
            number: {
                number: !0
            },
            numberDE: {
                numberDE: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function (b, c) {
            b.constructor == String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function (b) {
            var c = {};
            (b = a(b).attr("class")) && a.each(b.split(" "), function () {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            });
            return c
        },
        attributeRules: function (b) {
            var c = {};
            b = a(b);
            for (var d in a.validator.methods) {
                var f;
                (f = "required" === d && "function" === typeof a.fn.prop ? b.prop(d) : b.attr(d)) ? c[d] = f : b[0].getAttribute("type") === d && (c[d] = !0)
            }
            c.maxlength && /-1|2147483647|524288/.test(c.maxlength) && delete c.maxlength;
            return c
        },
        metadataRules: function (b) {
            if (!a.metadata) return {};
            var c = a.data(b.form,
                "validator").settings.meta;
            return c ? a(b).metadata()[c] : a(b).metadata()
        },
        staticRules: function (b) {
            var c = {},
                d = a.data(b.form, "validator");
            d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {});
            return c
        },
        normalizeRules: function (b, c) {
            a.each(b, function (d, f) {
                if (!1 === f) delete b[d];
                else if (f.param || f.depends) {
                    var k = !0;
                    switch (typeof f.depends) {
                    case "string":
                        k = !!a(f.depends, c.form).length;
                        break;
                    case "function":
                        k = f.depends.call(c, c)
                    }
                    k ? b[d] = void 0 !== f.param ? f.param : !0 : delete b[d]
                }
            });
            a.each(b,
                function (d, f) {
                    b[d] = a.isFunction(f) ? f(c) : f
                });
            a.each(["minlength", "maxlength", "min", "max"], function () {
                b[this] && (b[this] = Number(b[this]))
            });
            a.each(["rangelength", "range"], function () {
                b[this] && (b[this] = [Number(b[this][0]), Number(b[this][1])])
            });
            a.validator.autoCreateRanges && (b.min && b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), b.minlength && b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength));
            b.messages && delete b.messages;
            return b
        },
        normalizeRule: function (b) {
            if ("string" ==
                typeof b) {
                var c = {};
                a.each(b.split(/\s/), function () {
                    c[this] = !0
                });
                b = c
            }
            return b
        },
        addMethod: function (b, c, d) {
            a.validator.methods[b] = c;
            a.validator.messages[b] = void 0 != d ? d : a.validator.messages[b];
            3 > c.length && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function (b, c, d) {
                if (!this.depend(d, c)) return "dependency-mismatch";
                switch (c.nodeName.toLowerCase()) {
                case "select":
                    return (b = a(c).val()) && 0 < b.length;
                case "input":
                    if (this.checkable(c)) return 0 < this.getLength(b, c);
                default:
                    return 0 <
                        a.trim(b).length
                }
            },
            remote: function (b, c, d) {
                if (this.optional(c)) return "dependency-mismatch";
                var f = this.previousValue(c);
                this.settings.messages[c.name] || (this.settings.messages[c.name] = {});
                f.originalMessage = this.settings.messages[c.name].remote;
                this.settings.messages[c.name].remote = f.message;
                d = "string" == typeof d && {
                    url: d
                } || d;
                if (this.pending[c.name]) return "pending";
                if (f.old === b) return f.valid;
                f.old = b;
                var k = this;
                this.startRequest(c);
                var n = {};
                n[c.name] = b;
                a.ajax(a.extend(!0, {
                    url: d,
                    mode: "abort",
                    port: "validate" +
                        c.name,
                    dataType: "json",
                    data: n,
                    success: function (g) {
                        k.settings.messages[c.name].remote = f.originalMessage;
                        var l = !0 === g;
                        if (l) {
                            var d = k.formSubmitted;
                            k.prepareElement(c);
                            k.formSubmitted = d;
                            k.successList.push(c);
                            k.showErrors()
                        } else d = {}, g = g || k.defaultMessage(c, "remote"), d[c.name] = f.message = a.isFunction(g) ? g(b) : g, k.showErrors(d);
                        f.valid = l;
                        k.stopRequest(c, l)
                    }
                }, d));
                return "pending"
            },
            minlength: function (b, c, d) {
                return this.optional(c) || this.getLength(a.trim(b), c) >= d
            },
            maxlength: function (b, c, d) {
                return this.optional(c) ||
                    this.getLength(a.trim(b), c) <= d
            },
            rangelength: function (b, c, d) {
                b = this.getLength(a.trim(b), c);
                return this.optional(c) || b >= d[0] && b <= d[1]
            },
            min: function (a, c, d) {
                return this.optional(c) || a >= d
            },
            max: function (a, c, d) {
                return this.optional(c) || a <= d
            },
            range: function (a, c, d) {
                return this.optional(c) || a >= d[0] && a <= d[1]
            },
            email: function (a, c) {
                return this.optional(c) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)
            },
            url: function (a, c) {
                return this.optional(c) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
            },
            date: function (a, c) {
                return this.optional(c) || !/Invalid|NaN/.test(new Date(a))
            },
            dateISO: function (a, c) {
                return this.optional(c) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a)
            },
            number: function (a, c) {
                return this.optional(c) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(a)
            },
            digits: function (a, c) {
                return this.optional(c) || /^\d+$/.test(a)
            },
            creditcard: function (a, c) {
                if (this.optional(c)) return "dependency-mismatch";
                if (/[^0-9 -]+/.test(a)) return !1;
                var d = 0,
                    f = 0,
                    k = !1;
                a = a.replace(/\D/g, "");
                for (var n = a.length - 1; 0 <= n; n--) f =
                    a.charAt(n), f = parseInt(f, 10), k && 9 < (f *= 2) && (f -= 9), d += f, k = !k;
                return 0 == d % 10
            },
            accept: function (a, c, d) {
                d = "string" == typeof d ? d.replace(/,/g, "|") : "png|jpe?g|gif";
                return this.optional(c) || a.match(RegExp(".(" + d + ")$", "i"))
            },
            equalTo: function (b, c, d) {
                d = a(d).unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                    a(c).valid()
                });
                return b == d.val()
            }
        }
    });
    a.format = a.validator.format
})(jQuery);
(function (a) {
    var b = {};
    if (a.ajaxPrefilter) a.ajaxPrefilter(function (a, c, k) {
        c = a.port;
        "abort" == a.mode && (b[c] && b[c].abort(), b[c] = k)
    });
    else {
        var c = a.ajax;
        a.ajax = function (d) {
            var f = ("port" in d ? d : a.ajaxSettings).port;
            return "abort" == ("mode" in d ? d : a.ajaxSettings).mode ? (b[f] && b[f].abort(), b[f] = c.apply(this, arguments)) : c.apply(this, arguments)
        }
    }
})(jQuery);
(function (a) {
    !jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener && a.each({
        focus: "focusin",
        blur: "focusout"
    }, function (b, c) {
        function d(b) {
            b = a.event.fix(b);
            b.type = c;
            return a.event.handle.call(this, b)
        }
        a.event.special[c] = {
            setup: function () {
                this.addEventListener(b, d, !0)
            },
            teardown: function () {
                this.removeEventListener(b, d, !0)
            },
            handler: function (b) {
                arguments[0] = a.event.fix(b);
                arguments[0].type = c;
                return a.event.handle.apply(this, arguments)
            }
        }
    });
    a.extend(a.fn, {
        validateDelegate: function (b,
            c, d) {
            return this.bind(c, function (c) {
                var k = a(c.target);
                if (k.is(b)) return d.apply(k, arguments)
            })
        }
    })
})(jQuery);
(function (a) {
    function b() {
        function b(a) {
            "remove" === a && this.each(function (a, b) {
                var c = l(b);
                c && c.remove()
            });
            this.find("span.mceEditor,div.mceEditor").each(function (a, b) {
                var c = tinyMCE.get(b.id.replace(/_parent$/, ""));
                c && c.remove()
            })
        }

        function g(a) {
            var g;
            if (a !== c) b.call(this), this.each(function (b, c) {
                var g;
                (g = tinyMCE.get(c.id)) && g.setContent(a)
            });
            else if (0 < this.length && (g = tinyMCE.get(this[0].id))) return g.getContent()
        }

        function l(a) {
            var b = null;
            a && a.id && k.tinymce && (b = tinyMCE.get(a.id));
            return b
        }

        function d(a) {
            return !!(a &&
                a.length && k.tinymce && a.is(":tinymce"))
        }
        var f = {};
        a.each(["text", "html", "val"], function (b, k) {
            var n = f[k] = a.fn[k],
                t = "text" === k;
            a.fn[k] = function (b) {
                if (!d(this)) return n.apply(this, arguments);
                if (b !== c) return g.call(this.filter(":tinymce"), b), n.apply(this.not(":tinymce"), arguments), this;
                var f = "",
                    k = arguments;
                (t ? this : this.eq(0)).each(function (b, c) {
                    var g = l(c);
                    f += g ? t ? g.getContent().replace(/<(?:"[^"]*"|'[^']*'|[^'">])*>/g, "") : g.getContent() : n.apply(a(c), k)
                });
                return f
            }
        });
        a.each(["append", "prepend"], function (b,
            g) {
            var k = f[g] = a.fn[g],
                t = "prepend" === g;
            a.fn[g] = function (a) {
                if (!d(this)) return k.apply(this, arguments);
                if (a !== c) return this.filter(":tinymce").each(function (b, c) {
                    var g = l(c);
                    g && g.setContent(t ? a + g.getContent() : g.getContent() + a)
                }), k.apply(this.not(":tinymce"), arguments), this
            }
        });
        a.each(["remove", "replaceWith", "replaceAll", "empty"], function (c, g) {
            var l = f[g] = a.fn[g];
            a.fn[g] = function () {
                b.call(this, g);
                return l.apply(this, arguments)
            }
        });
        f.attr = a.fn.attr;
        a.fn.attr = function (b, k) {
            if (!b || "value" !== b || !d(this)) return k !==
                c ? f.attr.call(this, b, k) : f.attr.call(this, b);
            if (k !== c) return g.call(this.filter(":tinymce"), k), f.attr.call(this.not(":tinymce"), b, k), this;
            var n = this[0],
                t = l(n);
            return t ? t.getContent() : f.attr.call(a(n), b, k)
        }
    }
    var c, d, f = [],
        k = window;
    a.fn.tinymce = function (c) {
        function g() {
            var g = [],
                d = 0;
            b && (b(), b = null);
            l.each(function (a, b) {
                var q;
                q = b.id;
                var f = c.oninit;
                q || (b.id = q = tinymce.DOM.uniqueId());
                q = new tinymce.Editor(q, c);
                g.push(q);
                q.onInit.add(function () {
                    var a, b = f;
                    l.css("visibility", "");
                    f && ++d == g.length && (tinymce.is(b,
                        "string") && (a = -1 === b.indexOf(".") ? null : tinymce.resolve(b.replace(/\.\w+$/, "")), b = tinymce.resolve(b)), b.apply(a || tinymce, g))
                })
            });
            a.each(g, function (a, b) {
                b.render()
            })
        }
        var l = this,
            q, B, s, p, v = "",
            t = "";
        if (!l.length) return l;
        if (!c) return tinyMCE.get(l[0].id);
        l.css("visibility", "hidden");
        k.tinymce || d || !(q = c.script_url) ? 1 === d ? f.push(g) : g() : (d = 1, B = q.substring(0, q.lastIndexOf("/")), /_(src|dev)\.js/g.test(q) && (t = "_src"), s = q.lastIndexOf("?"), -1 != s && (v = q.substring(s + 1)), k.tinyMCEPreInit = k.tinyMCEPreInit || {
            base: B,
            suffix: t,
            query: v
        }, -1 != q.indexOf("gzip") && (p = c.language || "en", q = q + (/\?/.test(q) ? "&" : "?") + "js=true&core=true&suffix=" + escape(t) + "&themes=" + escape(c.theme) + "&plugins=" + escape(c.plugins) + "&languages=" + p, k.tinyMCE_GZ || (tinyMCE_GZ = {
            start: function () {
                function b(a) {
                    tinymce.ScriptLoader.markDone(tinyMCE.baseURI.toAbsolute(a))
                }
                tinymce.suffix = t;
                b("langs/" + p + ".js");
                b("themes/" + c.theme + "/editor_template" + t + ".js");
                b("themes/" + c.theme + "/langs/" + p + ".js");
                a.each(c.plugins.split(","), function (a, c) {
                    c && (b("plugins/" +
                        c + "/editor_plugin" + t + ".js"), b("plugins/" + c + "/langs/" + p + ".js"))
                })
            },
            end: function () {}
        })), a.ajax({
            type: "GET",
            url: q,
            dataType: "script",
            cache: !0,
            success: function () {
                tinymce.dom.Event.domLoaded = 1;
                d = 2;
                c.script_loaded && c.script_loaded();
                g();
                a.each(f, function (a, b) {
                    b()
                })
            }
        }));
        return l
    };
    a.extend(a.expr[":"], {
        tinymce: function (a) {
            return !(!a.id || !tinyMCE.get(a.id))
        }
    })
})(jQuery);
var maxNumID = 6;
(function (a) {
    function b(b) {
        a("#" + b.prefix + "Filedata_1").bind("change", function () {
            if (submitID >= maxImage) alert("B\u1ea1n ch\u1ec9 \u0111\u01b0\u1ee3c upload t\u1ed1i \u0111a " + maxImage + " h\u00ecnh");
            else {
                var c;
                c = this.value;
                c = c.toLowerCase().substr(c.toLowerCase().lastIndexOf(".") + 1);
                b.file_types.match(c) ? c = !0 : (alert("File \u1ea3nh kh\u00f4ng h\u1ee3p l\u1ec7"), c = !1);
                if (c) {
                    c = a(this).clone();
                    a(this).attr("id", b.prefix + "Filedata");
                    a(this).attr("name", "files");
                    a(this).attr("class", "clone");
                    a(this).before(c);
                    c = a("#signkey").clone();
                    var k = a("#time").clone(),
                        n = a("#width").clone(),
                        g = a("#height").clone();
                    a("#" + b.prefix + "myUploadForm").empty();
                    a(this).appendTo("#" + b.prefix + "myUploadForm");
                    a(c).appendTo("#" + b.prefix + "myUploadForm");
                    a(k).appendTo("#" + b.prefix + "myUploadForm");
                    a(n).appendTo("#" + b.prefix + "myUploadForm");
                    a(g).appendTo("#" + b.prefix + "myUploadForm");
                    a("#" + b.prefix + "myUploadForm").submit();
                    submitID++
                }
            }
        })
    }

    function c(c) {
        a("#" + c.prefix + "myUploadForm").submit(function () {
            var a = f.submit(this);
            b(c);
            return a
        });
        var f = {
            frame: function (b) {
                a("#" + c.prefix + "myFrame").empty().one("load", function () {
                    f.loaded(this, b)
                })
            },
            submit: function (a) {
                f.frame(a)
            },
            loaded: function (a) {
                a = (a.contentDocument ? a.contentDocument : a.contentWindow ? a.contentWindow.document : window.frames[a].document).body.innerHTML.replace(/^\s+|\s+$/g, "");
                try {
                    try {
                        var b = eval("(" + a + ")");
                        null != c.callback && c.callback(b)
                    } catch (g) {
                        alert(g)
                    }
                    if ("undefined" == typeof l) var l = null
                } catch (q) {
                    alert("C\u00f3 l\u1ed7i x\u1ea3y ra trong qu\u00e1 tr\u00ecnh \u0111\u0103ng \u1ea3nh. \nVui l\u00f2ng th\u1eed l\u1ea1i l\u1ea7n n\u1eefa.")
                }
            },
            onerror: function () {}
        }
    }
    a.fn.extend({
        photoUpload: function (b) {
            b = a.extend({}, a.uploadSetUp.defaults, b);
            b.file_types.match("jpg") && !b.file_types.match("jpeg") && (b.file_types += ",jpeg");
            $this = a(this);
            new a.uploadSetUp(b)
        },
        photoDel: function () {
            submitID--
        }
    });
    a.uploadSetUp = function (d) {
        d.maxNumID = parseInt(d.maxNumID);
        maxNumID = d.maxNumID;
        a("body").append(a('<div style="display: none;"></div>').append(a('<iframe width="0" height="0" src="about:blank" id="' + d.prefix + 'myFrame" name="' + d.prefix + 'myFrame"></iframe>')));
        $this.append('<input type="hidden" id="width" name="width" value="' + d.width + '" /><input type="hidden" id="height" name="height" value="' + d.height + '" /><input type="hidden" id="time" name="time" value="' + d.time + '" /><input type="hidden" id="signkey" name="signkey" value="' + d.seckey + '" /><input type="file" name="files" rel="1" id="' + d.prefix + 'Filedata_1" class="file" />');
        a("#" + d.prefix + "myFrame").after(a('<form target="' + d.prefix + 'myFrame" enctype="multipart/form-data" action="' + d.ajaxFile + '" method="POST" name="' +
            d.prefix + 'myUploadForm" id="' + d.prefix + 'myUploadForm" style="display:none"></form>'));
        b(d);
        c(d)
    };
    a.uploadSetUp.defaults = {
        file_types: "jpg,gif,png",
        ajaxFile: "",
        maxNumID: 40,
        prefix: "",
        seckey: "",
        time: 0,
        width: 250,
        height: 250,
        callback: null
    }
})(jQuery);
(function () {
    function a(a, c) {
        var d = this;
        a = jQuery(a);
        c.content = '<img src="' + Settings.imgurl + '/arrow_bubble.png">' + a.attr("rel");
        var f = jQuery(document.createElement("div")).addClass(c.baseClass).addClass(c.fixed ? c.fixedClass : "").addClass(c.persistent ? c.persistentClass : "").html(c.content).appendTo(a);
        c.hidden ? f.hide() : f.show();
        c.persistent ? (a.click(function (c) {
            c.target === a.get(0) && ("none" !== f.css("display") ? d.hide() : d.show())
        }), jQuery(window).mousedown(function (a) {
            "none" !== f.css("display") && 0 === (c.focus ?
                jQuery(a.target).parents(".tooltip").andSelf().filter(function () {
                    return this === f.get(0)
                }).length : 0) && d.hide()
        })) : (a.hover(function (c) {
            "" != a.attr("rel") && d.show(c)
        }, function () {
            d.hide()
        }), c.fixed || a.mousemove(function (a) {
            "none" !== f.css("display") && d.updatePos(a)
        }));
        jQuery.extend(d, {
            getVersion: function () {
                return [1, 2, 0]
            },
            getParent: function () {
                return a
            },
            getTooltip: function () {
                return f
            },
            getPos: function () {
                return f.offset()
            },
            setPos: function (c, n) {
                var g = a.offset();
                "string" == typeof c && (c = parseInt(c) + g.left);
                "string" ==
                    typeof n && (n = parseInt(n) + g.top);
                f.css({
                    left: c,
                    top: n,
                    "word-wrap": "break-word"
                });
                return d
            },
            show: function (a) {
                c.onBeforeShow.call(d);
                d.updatePos(c.fixed ? null : a);
                switch (c.showEffect) {
                case "fade":
                    f.fadeIn(c.showTime);
                    break;
                case "slide":
                    f.slideDown(c.showTime, d.updatePos);
                    break;
                case "custom":
                    c.showCustom.call(f, c.showTime);
                    break;
                default:
                case "none":
                    f.show()
                }
                f.addClass(c.activeClass);
                c.onShow.call(d);
                return d
            },
            hide: function () {
                c.onBeforeHide.call(d);
                switch (c.hideEffect) {
                case "fade":
                    f.fadeOut(c.hideTime);
                    break;
                case "slide":
                    f.slideUp(c.hideTime);
                    break;
                case "custom":
                    c.hideCustom.call(f, c.hideTime);
                    break;
                default:
                case "none":
                    f.hide()
                }
                f.removeClass(c.activeClass);
                c.onHide.call(d);
                return d
            },
            update: function (a) {
                f.html(a);
                c.content = a;
                return d
            },
            load: function (a, b) {
                c.beforeContentLoad.call(d);
                f.load(a, b, function () {
                    c.onContentLoad.call(d)
                });
                return d
            },
            boundryCheck: function (a, b) {
                var c = a + f.outerWidth(),
                    l = b + f.outerHeight(),
                    d = jQuery(window).width() + jQuery(window).scrollLeft(),
                    B = jQuery(window).height() + jQuery(window).scrollTop();
                return [c >= d, l >= B]
            },
            updatePos: function (k) {
                var n = f.outerWidth(),
                    g = f.outerHeight();
                if (!k && c.fixed)
                    if (c.position.constructor == Array) l = parseInt(c.position[0]), k = parseInt(c.position[1]);
                    else if (1 === jQuery(c.position).attr("nodeType")) k = jQuery(c.position).offset(), l = k.left, k = k.top;
                else {
                    k = a.offset();
                    var l = a.outerWidth(),
                        q = a.outerHeight();
                    switch (c.position) {
                    case "top":
                        l = k.left - n / 2 + l / 2;
                        k = k.top - g;
                        break;
                    case "bottom":
                        l = k.left - n / 2 + l / 2;
                        k = k.top + q;
                        break;
                    case "left":
                        l = k.left - n;
                        k = k.top - g / 2 + q / 2;
                        break;
                    case "right":
                        l =
                            k.left + l;
                        k = k.top - g / 2 + q / 2;
                        break;
                    default:
                    case "default":
                        l = l / 2 + k.left + 20, k = k.top
                    }
                } else l = k.pageX, k = k.pageY;
                "object" != typeof c.position ? (l += c.offset[0], k += c.offset[1], c.boundryCheck && (q = d.boundryCheck(l, k), q[0] && (l = l - n / 2 - 2 * c.offset[0]), q[1] && (k = k - g / 2 - 2 * c.offset[1]))) : ("string" == typeof c.position[0] && (l = String(l)), "string" == typeof c.position[1] && (k = String(k)));
                d.setPos(l, k);
                return d
            }
        })
    }
    jQuery.fn.simpletip = function (b) {
        var c = jQuery(this).eq("number" == typeof b ? b : 0).data("simpletip");
        if (c) return c;
        var d = {
            content: "A simple tooltip",
            persistent: !1,
            focus: !1,
            hidden: !0,
            position: "default",
            offset: [0, 0],
            boundryCheck: !0,
            fixed: !0,
            showEffect: "none",
            showTime: 150,
            showCustom: null,
            hideEffect: "none",
            hideTime: 150,
            hideCustom: null,
            baseClass: "tooltip",
            activeClass: "active",
            fixedClass: "fixed",
            persistentClass: "persistent",
            focusClass: "focus",
            onBeforeShow: function () {},
            onShow: function () {},
            onBeforeHide: function () {},
            onHide: function () {},
            beforeContentLoad: function () {},
            onContentLoad: function () {}
        };
        jQuery.extend(d, b);
        this.each(function () {
            var b = new a(jQuery(this),
                d);
            jQuery(this).data("simpletip", b)
        });
        return this
    }
})(jQuery);
var blockPromote = {
    totalpage: 2,
    currentpage: [0, 0],
    totalReason: 6,
    init: function (a) {
        this.pageData = a;
        this._randrighttab();
        this._attach();
        this._startRunRoll()
    },
    _attach: function () {
        $(".btn .next").click(function () {
            blockPromote.currentpage[blockPromote.currenttabright - 1]++;
            blockPromote.currentpage[blockPromote.currenttabright - 1] > blockPromote.totalpage && (blockPromote.currentpage[blockPromote.currenttabright - 1] = 1);
            blockPromote._builtrightitem()
        });
        $(".btn .prev").click(function () {
            blockPromote.currentpage[blockPromote.currenttabright - 1]--;
            0 == blockPromote.currentpage[blockPromote.currenttabright - 1] && (blockPromote.currentpage[blockPromote.currenttabright - 1] = blockPromote.totalpage);
            blockPromote._builtrightitem()
        })
    },
    _randrighttab: function () {
        var a = Math.floor(2 * Math.random() + 1);
        $('.lbptab li[tab-id$="' + a + '"] a').addClass("active");
        $(".lbptab li").click(function () {
            var a = $(this).attr("tab-id");
            blockPromote._changerighttab(a)
        });
        $(".postPromote").hide();
        $(".list-content-" + a).show();
        blockPromote.currenttabright = a
    },
    _changerighttab: function (a) {
        $(".lbptab li a").removeClass("active");
        $(".postPromote").hide();
        blockPromote.currenttabright = a;
        0 < $(".list-content-" + a + " li ").length ? $(".list-content-" + a).show() : ($(".list-content-" + a).show(), blockPromote.currentpage[blockPromote.currenttabright - 1]++, this._builtrightitem());
        $('.lbptab li[tab-id$="' + a + '"] a').addClass("active")
    },
    _builtrightitem: function () {
        var a = this.pageData[blockPromote.currenttabright - 1].item,
            b = "<li><ul>",
            c = 0;
        end = 0;
        switch (blockPromote.currentpage[blockPromote.currenttabright - 1]) {
        case 0:
        case 1:
            c = 0;
            end = 5;
            break;
        case 2:
            c =
                5, end = 10
        }
        for (; c < end; c++) var d = a[c],
            b = b + blockPromote._templaterightitem(d.link, d.title, d.summary, d.picture, blockPromote.pageData[blockPromote.currenttabright - 1].code);
        $(".list-content-" + blockPromote.currenttabright).fadeIn("slow").html(b + "</ul></li>")
    },
    _templaterightitem: function (a, b, c, d, f) {
        return "" + ('<li><a class="title _trackLink" href="' + a + '" target="_blank" title="' + b + '" class="_trackLink" tracking_category="homepage_raovat" tracking="homepage_raovat_' + f + '">' + b + "</a>") + ('<p class="summary">' + c +
            "</p>") + ('<div class="pic"><a href="' + a + '" target="_blank" title="' + b + '"><img src="' + d + '"></a></div></li>')
    },
    _startRunRoll: function () {
        try {
            roll = window.setTimeout("blockPromote._startRunRoll()", 1E4), blockPromote.currentpage[blockPromote.currenttabright - 1]++, blockPromote.currentpage[blockPromote.currenttabright - 1] > blockPromote.totalpage && (blockPromote.currentpage[blockPromote.currenttabright - 1] = 1), blockPromote._builtrightitem()
        } catch (a) {
            console.log(a.message)
        }
    }
};
(function (a, b) {
    function c(c, l) {
        a.extend(c, l);
        for (var d in l)
            if (null == l[d] || l[d] == b) c[d] = l[d];
        return c
    }

    function d(b) {
        return b.bind("mouseout", function (b) {
            b = a(b.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");
            !b.length || b.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
        }).bind("mouseover", function (c) {
            c = a(c.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");
            !a.datepicker._isDisabledDatepicker(n.inline ?
                b.parent()[0] : n.input[0]) && c.length && (c.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), c.addClass("ui-state-hover"), c.hasClass("ui-datepicker-prev") && c.addClass("ui-datepicker-prev-hover"), c.hasClass("ui-datepicker-next") && c.addClass("ui-datepicker-next-hover"))
        })
    }

    function f() {
        this.debug = !1;
        this._curInst = null;
        this._keyEvent = !1;
        this._disabledInputs = [];
        this._inDialog = this._datepickerShowing = !1;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass =
            "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: "January February March April May June July August September October November December".split(" "),
            monthNamesShort: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            dayNames: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            dayNamesShort: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
            dayNamesMin: "Su Mo Tu We Th Fr Sa".split(" "),
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        };
        a.extend(this._defaults,
            this.regional[""]);
        this.dpDiv = d(a('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
    }
    a.extend(a.ui, {
        datepicker: {
            version: "1.8.18"
        }
    });
    var k = (new Date).getTime(),
        n;
    a.extend(f.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        log: function () {
            this.debug && console.log.apply("", arguments)
        },
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (a) {
            c(this._defaults, a || {});
            return this
        },
        _attachDatepicker: function (b, c) {
            var d =
                null,
                f;
            for (f in this._defaults) {
                var k = b.getAttribute("date:" + f);
                if (k) {
                    d = d || {};
                    try {
                        d[f] = eval(k)
                    } catch (p) {
                        d[f] = k
                    }
                }
            }
            f = b.nodeName.toLowerCase();
            k = "div" == f || "span" == f;
            b.id || (this.uuid += 1, b.id = "dp" + this.uuid);
            var n = this._newInst(a(b), k);
            n.settings = a.extend({}, c || {}, d || {});
            "input" == f ? this._connectDatepicker(b, n) : k && this._inlineDatepicker(b, n)
        },
        _newInst: function (b, c) {
            return {
                id: b[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"),
                input: b,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: c,
                dpDiv: c ? d(a('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
            }
        },
        _connectDatepicker: function (b, c) {
            var d = a(b);
            c.append = a([]);
            c.trigger = a([]);
            d.hasClass(this.markerClassName) || (this._attachments(d, c), d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function (a, b, g) {
                c.settings[b] = g
            }).bind("getData.datepicker", function (a, b) {
                return this._get(c,
                    b)
            }), this._autoSize(c), a.data(b, "datepicker", c), c.settings.disabled && this._disableDatepicker(b))
        },
        _attachments: function (b, c) {
            var d = this._get(c, "appendText"),
                f = this._get(c, "isRTL");
            c.append && c.append.remove();
            d && (c.append = a('<span class="' + this._appendClass + '">' + d + "</span>"), b[f ? "before" : "after"](c.append));
            b.unbind("focus", this._showDatepicker);
            c.trigger && c.trigger.remove();
            d = this._get(c, "showOn");
            "focus" != d && "both" != d || b.focus(this._showDatepicker);
            if ("button" == d || "both" == d) {
                var d = this._get(c, "buttonText"),
                    k = this._get(c, "buttonImage");
                c.trigger = a(this._get(c, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({
                    src: k,
                    alt: d,
                    title: d
                }) : a('<button type="button"></button>').addClass(this._triggerClass).html("" == k ? d : a("<img/>").attr({
                    src: k,
                    alt: d,
                    title: d
                })));
                b[f ? "before" : "after"](c.trigger);
                c.trigger.click(function () {
                    a.datepicker._datepickerShowing && a.datepicker._lastInput == b[0] ? a.datepicker._hideDatepicker() : a.datepicker._datepickerShowing && a.datepicker._lastInput != b[0] ? (a.datepicker._hideDatepicker(),
                        a.datepicker._showDatepicker(b[0])) : a.datepicker._showDatepicker(b[0]);
                    return !1
                })
            }
        },
        _autoSize: function (a) {
            if (this._get(a, "autoSize") && !a.inline) {
                var b = new Date(2009, 11, 20),
                    c = this._get(a, "dateFormat");
                if (c.match(/[DM]/)) {
                    var d = function (a) {
                        for (var b = 0, c = 0, g = 0; g < a.length; g++) a[g].length > b && (b = a[g].length, c = g);
                        return c
                    };
                    b.setMonth(d(this._get(a, c.match(/MM/) ? "monthNames" : "monthNamesShort")));
                    b.setDate(d(this._get(a, c.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - b.getDay())
                }
                a.input.attr("size", this._formatDate(a,
                    b).length)
            }
        },
        _inlineDatepicker: function (b, c) {
            var d = a(b);
            d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv).bind("setData.datepicker", function (a, b, g) {
                c.settings[b] = g
            }).bind("getData.datepicker", function (a, b) {
                return this._get(c, b)
            }), a.data(b, "datepicker", c), this._setDate(c, this._getDefaultDate(c), !0), this._updateDatepicker(c), this._updateAlternate(c), c.settings.disabled && this._disableDatepicker(b), c.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function (b, d, f, k, s) {
            (b =
                this._dialogInst) || (this.uuid += 1, this._dialogInput = a('<input type="text" id="dp' + this.uuid + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'), this._dialogInput.keydown(this._doKeyDown), a("body").append(this._dialogInput), b = this._dialogInst = this._newInst(this._dialogInput, !1), b.settings = {}, a.data(this._dialogInput[0], "datepicker", b));
            c(b.settings, k || {});
            d = d && d.constructor == Date ? this._formatDate(b, d) : d;
            this._dialogInput.val(d);
            (this._pos = s ? s.length ? s : [s.pageX, s.pageY] : null) ||
                (this._pos = [document.documentElement.clientWidth / 2 - 100 + (document.documentElement.scrollLeft || document.body.scrollLeft), document.documentElement.clientHeight / 2 - 150 + (document.documentElement.scrollTop || document.body.scrollTop)]);
            this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px");
            b.settings.onSelect = f;
            this._inDialog = !0;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);
            a.blockUI && a.blockUI(this.dpDiv);
            a.data(this._dialogInput[0], "datepicker",
                b);
            return this
        },
        _destroyDatepicker: function (b) {
            var c = a(b),
                d = a.data(b, "datepicker");
            if (c.hasClass(this.markerClassName)) {
                var f = b.nodeName.toLowerCase();
                a.removeData(b, "datepicker");
                "input" == f ? (d.append.remove(), d.trigger.remove(), c.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" == f || "span" == f) && c.removeClass(this.markerClassName).empty()
            }
        },
        _enableDatepicker: function (b) {
            var c =
                a(b),
                d = a.data(b, "datepicker");
            if (c.hasClass(this.markerClassName)) {
                var f = b.nodeName.toLowerCase();
                if ("input" == f) b.disabled = !1, d.trigger.filter("button").each(function () {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                });
                else if ("div" == f || "span" == f) c = c.children("." + this._inlineClass), c.children().removeClass("ui-state-disabled"), c.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled");
                this._disabledInputs = a.map(this._disabledInputs, function (a) {
                    return a ==
                        b ? null : a
                })
            }
        },
        _disableDatepicker: function (b) {
            var c = a(b),
                d = a.data(b, "datepicker");
            if (c.hasClass(this.markerClassName)) {
                var f = b.nodeName.toLowerCase();
                if ("input" == f) b.disabled = !0, d.trigger.filter("button").each(function () {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                });
                else if ("div" == f || "span" == f) c = c.children("." + this._inlineClass), c.children().addClass("ui-state-disabled"), c.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled");
                this._disabledInputs =
                    a.map(this._disabledInputs, function (a) {
                        return a == b ? null : a
                    });
                this._disabledInputs[this._disabledInputs.length] = b
            }
        },
        _isDisabledDatepicker: function (a) {
            if (!a) return !1;
            for (var b = 0; b < this._disabledInputs.length; b++)
                if (this._disabledInputs[b] == a) return !0;
            return !1
        },
        _getInst: function (b) {
            try {
                return a.data(b, "datepicker")
            } catch (c) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function (g, d, f) {
            var k = this._getInst(g);
            if (2 == arguments.length && "string" == typeof d) return "defaults" == d ? a.extend({},
                a.datepicker._defaults) : k ? "all" == d ? a.extend({}, k.settings) : this._get(k, d) : null;
            var s = d || {};
            "string" == typeof d && (s = {}, s[d] = f);
            if (k) {
                this._curInst == k && this._hideDatepicker();
                var p = this._getDateDatepicker(g, !0),
                    n = this._getMinMaxDate(k, "min"),
                    t = this._getMinMaxDate(k, "max");
                c(k.settings, s);
                null !== n && s.dateFormat !== b && s.minDate === b && (k.settings.minDate = this._formatDate(k, n));
                null !== t && s.dateFormat !== b && s.maxDate === b && (k.settings.maxDate = this._formatDate(k, t));
                this._attachments(a(g), k);
                this._autoSize(k);
                this._setDate(k, p);
                this._updateAlternate(k);
                this._updateDatepicker(k)
            }
        },
        _changeDatepicker: function (a, b, c) {
            this._optionDatepicker(a, b, c)
        },
        _refreshDatepicker: function (a) {
            (a = this._getInst(a)) && this._updateDatepicker(a)
        },
        _setDateDatepicker: function (a, b) {
            var c = this._getInst(a);
            c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c))
        },
        _getDateDatepicker: function (a, b) {
            var c = this._getInst(a);
            c && !c.inline && this._setDateFromField(c, b);
            return c ? this._getDate(c) : null
        },
        _doKeyDown: function (b) {
            var c =
                a.datepicker._getInst(b.target),
                d = !0,
                f = c.dpDiv.is(".ui-datepicker-rtl");
            c._keyEvent = !0;
            if (a.datepicker._datepickerShowing) switch (b.keyCode) {
            case 9:
                a.datepicker._hideDatepicker();
                d = !1;
                break;
            case 13:
                return d = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", c.dpDiv), d[0] && a.datepicker._selectDay(b.target, c.selectedMonth, c.selectedYear, d[0]), (b = a.datepicker._get(c, "onSelect")) ? (d = a.datepicker._formatDate(c), b.apply(c.input ? c.input[0] : null, [d, c])) : a.datepicker._hideDatepicker(), !1;
            case 27:
                a.datepicker._hideDatepicker();
                break;
            case 33:
                a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(c, "stepBigMonths") : -a.datepicker._get(c, "stepMonths"), "M");
                break;
            case 34:
                a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(c, "stepBigMonths") : +a.datepicker._get(c, "stepMonths"), "M");
                break;
            case 35:
                (b.ctrlKey || b.metaKey) && a.datepicker._clearDate(b.target);
                d = b.ctrlKey || b.metaKey;
                break;
            case 36:
                (b.ctrlKey || b.metaKey) && a.datepicker._gotoToday(b.target);
                d = b.ctrlKey || b.metaKey;
                break;
            case 37:
                (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, f ? 1 : -1, "D");
                d = b.ctrlKey || b.metaKey;
                b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(c, "stepBigMonths") : -a.datepicker._get(c, "stepMonths"), "M");
                break;
            case 38:
                (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, -7, "D");
                d = b.ctrlKey || b.metaKey;
                break;
            case 39:
                (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, f ? -1 : 1, "D");
                d = b.ctrlKey || b.metaKey;
                b.originalEvent.altKey && a.datepicker._adjustDate(b.target,
                    b.ctrlKey ? +a.datepicker._get(c, "stepBigMonths") : +a.datepicker._get(c, "stepMonths"), "M");
                break;
            case 40:
                (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, 7, "D");
                d = b.ctrlKey || b.metaKey;
                break;
            default:
                d = !1
            } else 36 == b.keyCode && b.ctrlKey ? a.datepicker._showDatepicker(this) : d = !1;
            d && (b.preventDefault(), b.stopPropagation())
        },
        _doKeyPress: function (c) {
            var d = a.datepicker._getInst(c.target);
            if (a.datepicker._get(d, "constrainInput")) {
                var d = a.datepicker._possibleChars(a.datepicker._get(d, "dateFormat")),
                    f = String.fromCharCode(c.charCode ==
                        b ? c.keyCode : c.charCode);
                return c.ctrlKey || c.metaKey || " " > f || !d || -1 < d.indexOf(f)
            }
        },
        _doKeyUp: function (b) {
            b = a.datepicker._getInst(b.target);
            if (b.input.val() != b.lastVal) try {
                a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), b.input ? b.input.val() : null, a.datepicker._getFormatConfig(b)) && (a.datepicker._setDateFromField(b), a.datepicker._updateAlternate(b), a.datepicker._updateDatepicker(b))
            } catch (c) {
                a.datepicker.log(c)
            }
            return !0
        },
        _showDatepicker: function (b) {
            b = b.target || b;
            "input" != b.nodeName.toLowerCase() &&
                (b = a("input", b.parentNode)[0]);
            if (!a.datepicker._isDisabledDatepicker(b) && a.datepicker._lastInput != b) {
                var d = a.datepicker._getInst(b);
                a.datepicker._curInst && a.datepicker._curInst != d && (a.datepicker._curInst.dpDiv.stop(!0, !0), d && a.datepicker._datepickerShowing && a.datepicker._hideDatepicker(a.datepicker._curInst.input[0]));
                var f = a.datepicker._get(d, "beforeShow"),
                    f = f ? f.apply(b, [b, d]) : {};
                if (!1 !== f) {
                    c(d.settings, f);
                    d.lastVal = null;
                    a.datepicker._lastInput = b;
                    a.datepicker._setDateFromField(d);
                    a.datepicker._inDialog &&
                        (b.value = "");
                    a.datepicker._pos || (a.datepicker._pos = a.datepicker._findPos(b), a.datepicker._pos[1] += b.offsetHeight);
                    var k = !1;
                    a(b).parents().each(function () {
                        k |= "fixed" == a(this).css("position");
                        return !k
                    });
                    k && a.browser.opera && (a.datepicker._pos[0] -= document.documentElement.scrollLeft, a.datepicker._pos[1] -= document.documentElement.scrollTop);
                    f = {
                        left: a.datepicker._pos[0],
                        top: a.datepicker._pos[1]
                    };
                    a.datepicker._pos = null;
                    d.dpDiv.empty();
                    d.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    });
                    a.datepicker._updateDatepicker(d);
                    f = a.datepicker._checkOffset(d, f, k);
                    d.dpDiv.css({
                        position: a.datepicker._inDialog && a.blockUI ? "static" : k ? "fixed" : "absolute",
                        display: "none",
                        left: f.left + "px",
                        top: f.top + "px"
                    });
                    if (!d.inline) {
                        var f = a.datepicker._get(d, "showAnim"),
                            s = a.datepicker._get(d, "duration"),
                            p = function () {
                                var b = d.dpDiv.find("iframe.ui-datepicker-cover");
                                if (b.length) {
                                    var c = a.datepicker._getBorders(d.dpDiv);
                                    b.css({
                                        left: -c[0],
                                        top: -c[1],
                                        width: d.dpDiv.outerWidth(),
                                        height: d.dpDiv.outerHeight()
                                    })
                                }
                            };
                        d.dpDiv.zIndex(a(b).zIndex() + 1);
                        a.datepicker._datepickerShowing = !0;
                        a.effects && a.effects[f] ? d.dpDiv.show(f, a.datepicker._get(d, "showOptions"), s, p) : d.dpDiv[f || "show"](f ? s : null, p);
                        f && s || p();
                        d.input.is(":visible") && !d.input.is(":disabled") && d.input.focus();
                        a.datepicker._curInst = d
                    }
                }
            }
        },
        _updateDatepicker: function (b) {
            this.maxRows = 4;
            var c = a.datepicker._getBorders(b.dpDiv);
            n = b;
            b.dpDiv.empty().append(this._generateHTML(b));
            var d = b.dpDiv.find("iframe.ui-datepicker-cover");
            !d.length || d.css({
                left: -c[0],
                top: -c[1],
                width: b.dpDiv.outerWidth(),
                height: b.dpDiv.outerHeight()
            });
            b.dpDiv.find("." +
                this._dayOverClass + " a").mouseover();
            c = this._getNumberOfMonths(b);
            d = c[1];
            b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            1 < d && b.dpDiv.addClass("ui-datepicker-multi-" + d).css("width", 17 * d + "em");
            b.dpDiv[(1 != c[0] || 1 != c[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            b.dpDiv[(this._get(b, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            b == a.datepicker._curInst && a.datepicker._datepickerShowing && b.input && b.input.is(":visible") && !b.input.is(":disabled") &&
                b.input[0] != document.activeElement && b.input.focus();
            if (b.yearshtml) {
                var f = b.yearshtml;
                setTimeout(function () {
                    f === b.yearshtml && b.yearshtml && b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml);
                    f = b.yearshtml = null
                }, 0)
            }
        },
        _getBorders: function (a) {
            var b = function (a) {
                return {
                    thin: 1,
                    medium: 2,
                    thick: 3
                }[a] || a
            };
            return [parseFloat(b(a.css("border-left-width"))), parseFloat(b(a.css("border-top-width")))]
        },
        _checkOffset: function (b, c, d) {
            var f = b.dpDiv.outerWidth(),
                k = b.dpDiv.outerHeight(),
                p = b.input ? b.input.outerWidth() :
                0,
                n = b.input ? b.input.outerHeight() : 0,
                t = document.documentElement.clientWidth + a(document).scrollLeft(),
                A = document.documentElement.clientHeight + a(document).scrollTop();
            c.left -= this._get(b, "isRTL") ? f - p : 0;
            c.left -= d && c.left == b.input.offset().left ? a(document).scrollLeft() : 0;
            c.top -= d && c.top == b.input.offset().top + n ? a(document).scrollTop() : 0;
            c.left -= Math.min(c.left, c.left + f > t && t > f ? Math.abs(c.left + f - t) : 0);
            c.top -= Math.min(c.top, c.top + k > A && A > k ? Math.abs(k + n) : 0);
            return c
        },
        _findPos: function (b) {
            for (var c = this._getInst(b),
                c = this._get(c, "isRTL"); b && ("hidden" == b.type || 1 != b.nodeType || a.expr.filters.hidden(b));) b = b[c ? "previousSibling" : "nextSibling"];
            b = a(b).offset();
            return [b.left, b.top]
        },
        _hideDatepicker: function (b) {
            var c = this._curInst;
            if (c && (!b || c == a.data(b, "datepicker")) && this._datepickerShowing) {
                b = this._get(c, "showAnim");
                var d = this._get(c, "duration"),
                    f = this,
                    k = function () {
                        a.datepicker._tidyDialog(c);
                        f._curInst = null
                    };
                a.effects && a.effects[b] ? c.dpDiv.hide(b, a.datepicker._get(c, "showOptions"), d, k) : c.dpDiv["slideDown" == b ? "slideUp" :
                    "fadeIn" == b ? "fadeOut" : "hide"](b ? d : null, k);
                b || k();
                this._datepickerShowing = !1;
                (b = this._get(c, "onClose")) && b.apply(c.input ? c.input[0] : null, [c.input ? c.input.val() : "", c]);
                this._lastInput = null;
                this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), a.blockUI && (a.unblockUI(), a("body").append(this.dpDiv)));
                this._inDialog = !1
            }
        },
        _tidyDialog: function (a) {
            a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (b) {
            if (a.datepicker._curInst) {
                b =
                    a(b.target);
                var c = a.datepicker._getInst(b[0]);
                (!(b[0].id == a.datepicker._mainDivId || 0 != b.parents("#" + a.datepicker._mainDivId).length || b.hasClass(a.datepicker.markerClassName) || b.closest("." + a.datepicker._triggerClass).length || !a.datepicker._datepickerShowing || a.datepicker._inDialog && a.blockUI) || b.hasClass(a.datepicker.markerClassName) && a.datepicker._curInst != c) && a.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function (b, c, d) {
            b = a(b);
            var f = this._getInst(b[0]);
            this._isDisabledDatepicker(b[0]) || (this._adjustInstDate(f,
                c + ("M" == d ? this._get(f, "showCurrentAtPos") : 0), d), this._updateDatepicker(f))
        },
        _gotoToday: function (b) {
            b = a(b);
            var c = this._getInst(b[0]);
            if (this._get(c, "gotoCurrent") && c.currentDay) c.selectedDay = c.currentDay, c.drawMonth = c.selectedMonth = c.currentMonth, c.drawYear = c.selectedYear = c.currentYear;
            else {
                var d = new Date;
                c.selectedDay = d.getDate();
                c.drawMonth = c.selectedMonth = d.getMonth();
                c.drawYear = c.selectedYear = d.getFullYear()
            }
            this._notifyChange(c);
            this._adjustDate(b)
        },
        _selectMonthYear: function (b, c, d) {
            b = a(b);
            var f =
                this._getInst(b[0]);
            f["selected" + ("M" == d ? "Month" : "Year")] = f["draw" + ("M" == d ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, 10);
            this._notifyChange(f);
            this._adjustDate(b)
        },
        _selectDay: function (b, c, d, f) {
            var k = a(b);
            a(f).hasClass(this._unselectableClass) || this._isDisabledDatepicker(k[0]) || (k = this._getInst(k[0]), k.selectedDay = k.currentDay = a("a", f).html(), k.selectedMonth = k.currentMonth = c, k.selectedYear = k.currentYear = d, this._selectDate(b, this._formatDate(k, k.currentDay, k.currentMonth, k.currentYear)))
        },
        _clearDate: function (b) {
            b = a(b);
            this._getInst(b[0]);
            this._selectDate(b, "")
        },
        _selectDate: function (b, c) {
            var d = a(b),
                d = this._getInst(d[0]);
            c = null != c ? c : this._formatDate(d);
            d.input && d.input.val(c);
            this._updateAlternate(d);
            var f = this._get(d, "onSelect");
            f ? f.apply(d.input ? d.input[0] : null, [c, d]) : d.input && d.input.trigger("change");
            d.inline ? this._updateDatepicker(d) : (this._hideDatepicker(), this._lastInput = d.input[0], "object" != typeof d.input[0] && d.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function (b) {
            var c =
                this._get(b, "altField");
            if (c) {
                var d = this._get(b, "altFormat") || this._get(b, "dateFormat"),
                    f = this._getDate(b),
                    k = this.formatDate(d, f, this._getFormatConfig(b));
                a(c).each(function () {
                    a(this).val(k)
                })
            }
        },
        noWeekends: function (a) {
            a = a.getDay();
            return [0 < a && 6 > a, ""]
        },
        iso8601Week: function (a) {
            a = new Date(a.getTime());
            a.setDate(a.getDate() + 4 - (a.getDay() || 7));
            var b = a.getTime();
            a.setMonth(0);
            a.setDate(1);
            return Math.floor(Math.round((b - a) / 864E5) / 7) + 1
        },
        parseDate: function (b, c, d) {
            if (null == b || null == c) throw "Invalid arguments";
            c = "object" == typeof c ? c.toString() : c + "";
            if ("" == c) return null;
            for (var f = (d ? d.shortYearCutoff : null) || this._defaults.shortYearCutoff, f = "string" != typeof f ? f : (new Date).getFullYear() % 100 + parseInt(f, 10), k = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort, p = (d ? d.dayNames : null) || this._defaults.dayNames, n = (d ? d.monthNamesShort : null) || this._defaults.monthNamesShort, t = (d ? d.monthNames : null) || this._defaults.monthNames, A = d = -1, L = -1, C = -1, y = !1, z = function (a) {
                (a = x + 1 < b.length && b.charAt(x + 1) == a) && x++;
                return a
            }, D = function (a) {
                var b =
                    z(a);
                a = RegExp("^\\d{1," + ("@" == a ? 14 : "!" == a ? 20 : "y" == a && b ? 4 : "o" == a ? 3 : 2) + "}");
                a = c.substring(Q).match(a);
                if (!a) throw "Missing number at position " + Q;
                Q += a[0].length;
                return parseInt(a[0], 10)
            }, u = function (b, d, g) {
                b = a.map(z(b) ? g : d, function (a, b) {
                    return [
                        [b, a]
                    ]
                }).sort(function (a, b) {
                    return -(a[1].length - b[1].length)
                });
                var f = -1;
                a.each(b, function (a, b) {
                    var d = b[1];
                    if (c.substr(Q, d.length).toLowerCase() == d.toLowerCase()) return f = b[0], Q += d.length, !1
                });
                if (-1 != f) return f + 1;
                throw "Unknown name at position " + Q;
            }, F = function () {
                if (c.charAt(Q) !=
                    b.charAt(x)) throw "Unexpected literal at position " + Q;
                Q++
            }, Q = 0, x = 0; x < b.length; x++)
                if (y) "'" != b.charAt(x) || z("'") ? F() : y = !1;
                else switch (b.charAt(x)) {
                case "d":
                    L = D("d");
                    break;
                case "D":
                    u("D", k, p);
                    break;
                case "o":
                    C = D("o");
                    break;
                case "m":
                    A = D("m");
                    break;
                case "M":
                    A = u("M", n, t);
                    break;
                case "y":
                    d = D("y");
                    break;
                case "@":
                    var E = new Date(D("@"));
                    d = E.getFullYear();
                    A = E.getMonth() + 1;
                    L = E.getDate();
                    break;
                case "!":
                    E = new Date((D("!") - this._ticksTo1970) / 1E4);
                    d = E.getFullYear();
                    A = E.getMonth() + 1;
                    L = E.getDate();
                    break;
                case "'":
                    z("'") ?
                        F() : y = !0;
                    break;
                default:
                    F()
                }
                if (Q < c.length) throw "Extra/unparsed characters found in date: " + c.substring(Q); - 1 == d ? d = (new Date).getFullYear() : 100 > d && (d += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (d <= f ? 0 : -100));
            if (-1 < C)
                for (A = 1, L = C;;) {
                    f = this._getDaysInMonth(d, A - 1);
                    if (L <= f) break;
                    A++;
                    L -= f
                }
            E = this._daylightSavingAdjust(new Date(d, A - 1, L));
            if (E.getFullYear() != d || E.getMonth() + 1 != A || E.getDate() != L) throw "Invalid date";
            return E
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864E9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function (a, b, c) {
            if (!b) return "";
            var d = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
                f = (c ? c.dayNames : null) || this._defaults.dayNames,
                k = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort;
            c = (c ? c.monthNames : null) || this._defaults.monthNames;
            var n = function (b) {
                    (b =
                        C + 1 < a.length && a.charAt(C + 1) == b) && C++;
                    return b
                },
                t = function (a, b, c) {
                    b = "" + b;
                    if (n(a))
                        for (; b.length < c;) b = "0" + b;
                    return b
                },
                A = "",
                L = !1;
            if (b)
                for (var C = 0; C < a.length; C++)
                    if (L) "'" != a.charAt(C) || n("'") ? A += a.charAt(C) : L = !1;
                    else switch (a.charAt(C)) {
                    case "d":
                        A += t("d", b.getDate(), 2);
                        break;
                    case "D":
                        var y;
                        y = b.getDay();
                        var z = d,
                            D = f;
                        y = n("D") ? D[y] : z[y];
                        A += y;
                        break;
                    case "o":
                        A += t("o", Math.round(((new Date(b.getFullYear(), b.getMonth(), b.getDate())).getTime() - (new Date(b.getFullYear(), 0, 0)).getTime()) / 864E5), 3);
                        break;
                    case "m":
                        A +=
                            t("m", b.getMonth() + 1, 2);
                        break;
                    case "M":
                        y = b.getMonth();
                        z = k;
                        D = c;
                        y = n("M") ? D[y] : z[y];
                        A += y;
                        break;
                    case "y":
                        A += n("y") ? b.getFullYear() : (10 > b.getYear() % 100 ? "0" : "") + b.getYear() % 100;
                        break;
                    case "@":
                        A += b.getTime();
                        break;
                    case "!":
                        A += 1E4 * b.getTime() + this._ticksTo1970;
                        break;
                    case "'":
                        n("'") ? A += "'" : L = !0;
                        break;
                    default:
                        A += a.charAt(C)
                    }
                    return A
        },
        _possibleChars: function (a) {
            for (var b = "", c = !1, d = function (b) {
                (b = f + 1 < a.length && a.charAt(f + 1) == b) && f++;
                return b
            }, f = 0; f < a.length; f++)
                if (c) "'" != a.charAt(f) || d("'") ? b += a.charAt(f) : c = !1;
                else switch (a.charAt(f)) {
                case "d":
                case "m":
                case "y":
                case "@":
                    b += "0123456789";
                    break;
                case "D":
                case "M":
                    return null;
                case "'":
                    d("'") ? b += "'" : c = !0;
                    break;
                default:
                    b += a.charAt(f)
                }
                return b
        },
        _get: function (a, c) {
            return a.settings[c] !== b ? a.settings[c] : this._defaults[c]
        },
        _setDateFromField: function (a, b) {
            if (a.input.val() != a.lastVal) {
                var c = this._get(a, "dateFormat"),
                    d = a.lastVal = a.input ? a.input.val() : null,
                    f, k;
                f = k = this._getDefaultDate(a);
                var n = this._getFormatConfig(a);
                try {
                    f = this.parseDate(c, d, n) || k
                } catch (t) {
                    this.log(t),
                    d = b ? "" : d
                }
                a.selectedDay = f.getDate();
                a.drawMonth = a.selectedMonth = f.getMonth();
                a.drawYear = a.selectedYear = f.getFullYear();
                a.currentDay = d ? f.getDate() : 0;
                a.currentMonth = d ? f.getMonth() : 0;
                a.currentYear = d ? f.getFullYear() : 0;
                this._adjustInstDate(a)
            }
        },
        _getDefaultDate: function (a) {
            return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
        },
        _determineDate: function (b, c, d) {
            if (null == c || "" === c) c = d;
            else {
                var f;
                if ("string" == typeof c) a: {
                    try {
                        f = a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"),
                            c, a.datepicker._getFormatConfig(b));
                        break a
                    } catch (k) {}
                    var p = (c.toLowerCase().match(/^c/) ? a.datepicker._getDate(b) : null) || new Date;
                    b = p.getFullYear();
                    f = p.getMonth();
                    for (var p = p.getDate(), n = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, t = n.exec(c); t;) {
                        switch (t[2] || "d") {
                        case "d":
                        case "D":
                            p += parseInt(t[1], 10);
                            break;
                        case "w":
                        case "W":
                            p += 7 * parseInt(t[1], 10);
                            break;
                        case "m":
                        case "M":
                            f += parseInt(t[1], 10);
                            p = Math.min(p, a.datepicker._getDaysInMonth(b, f));
                            break;
                        case "y":
                        case "Y":
                            b += parseInt(t[1], 10), p = Math.min(p, a.datepicker._getDaysInMonth(b,
                                f))
                        }
                        t = n.exec(c)
                    }
                    f = new Date(b, f, p)
                } else "number" == typeof c ? isNaN(c) ? c = d : (b = new Date, b.setDate(b.getDate() + c), c = b) : c = new Date(c.getTime()), f = c;
                c = f
            }(c = c && "Invalid Date" == c.toString() ? d : c) && (c.setHours(0), c.setMinutes(0), c.setSeconds(0), c.setMilliseconds(0));
            return this._daylightSavingAdjust(c)
        },
        _daylightSavingAdjust: function (a) {
            if (!a) return null;
            a.setHours(12 < a.getHours() ? a.getHours() + 2 : 0);
            return a
        },
        _setDate: function (a, b, c) {
            var d = !b,
                f = a.selectedMonth,
                k = a.selectedYear;
            b = this._restrictMinMax(a, this._determineDate(a,
                b, new Date));
            a.selectedDay = a.currentDay = b.getDate();
            a.drawMonth = a.selectedMonth = a.currentMonth = b.getMonth();
            a.drawYear = a.selectedYear = a.currentYear = b.getFullYear();
            f == a.selectedMonth && k == a.selectedYear || c || this._notifyChange(a);
            this._adjustInstDate(a);
            a.input && a.input.val(d ? "" : this._formatDate(a))
        },
        _getDate: function (a) {
            return !a.currentYear || a.input && "" == a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay))
        },
        _generateHTML: function (b) {
            var c = new Date,
                c = this._daylightSavingAdjust(new Date(c.getFullYear(),
                    c.getMonth(), c.getDate())),
                d = this._get(b, "isRTL"),
                f = this._get(b, "showButtonPanel"),
                n = this._get(b, "hideIfNoPrevNext"),
                p = this._get(b, "navigationAsDateFormat"),
                v = this._getNumberOfMonths(b),
                t = this._get(b, "showCurrentAtPos"),
                A = this._get(b, "stepMonths"),
                L = 1 != v[0] || 1 != v[1],
                C = this._daylightSavingAdjust(b.currentDay ? new Date(b.currentYear, b.currentMonth, b.currentDay) : new Date(9999, 9, 9)),
                y = this._getMinMaxDate(b, "min"),
                z = this._getMinMaxDate(b, "max"),
                t = b.drawMonth - t,
                D = b.drawYear;
            0 > t && (t += 12, D--);
            if (z)
                for (var u =
                    this._daylightSavingAdjust(new Date(z.getFullYear(), z.getMonth() - v[0] * v[1] + 1, z.getDate())), u = y && u < y ? y : u; this._daylightSavingAdjust(new Date(D, t, 1)) > u;) t--, 0 > t && (t = 11, D--);
            b.drawMonth = t;
            b.drawYear = D;
            var u = this._get(b, "prevText"),
                u = p ? this.formatDate(u, this._daylightSavingAdjust(new Date(D, t - A, 1)), this._getFormatConfig(b)) : u,
                u = this._canAdjustMonth(b, -1, D, t) ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + k + ".datepicker._adjustDate('#" + b.id + "', -" + A + ", 'M');\" title=\"" + u + '"><span class="ui-icon ui-icon-circle-triangle-' +
                (d ? "e" : "w") + '">' + u + "</span></a>" : n ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + u + '"><span class="ui-icon ui-icon-circle-triangle-' + (d ? "e" : "w") + '">' + u + "</span></a>",
                F = this._get(b, "nextText"),
                F = p ? this.formatDate(F, this._daylightSavingAdjust(new Date(D, t + A, 1)), this._getFormatConfig(b)) : F,
                n = this._canAdjustMonth(b, 1, D, t) ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + k + ".datepicker._adjustDate('#" + b.id + "', +" + A + ", 'M');\" title=\"" + F + '"><span class="ui-icon ui-icon-circle-triangle-' +
                (d ? "w" : "e") + '">' + F + "</span></a>" : n ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + F + '"><span class="ui-icon ui-icon-circle-triangle-' + (d ? "w" : "e") + '">' + F + "</span></a>",
                A = this._get(b, "currentText"),
                F = this._get(b, "gotoCurrent") && b.currentDay ? C : c,
                A = p ? this.formatDate(A, F, this._getFormatConfig(b)) : A,
                p = b.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + k + '.datepicker._hideDatepicker();">' + this._get(b,
                    "closeText") + "</button>",
                f = f ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (d ? p : "") + (this._isInRange(b, F) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + k + ".datepicker._gotoToday('#" + b.id + "');\">" + A + "</button>" : "") + (d ? "" : p) + "</div>" : "",
                p = parseInt(this._get(b, "firstDay"), 10),
                p = isNaN(p) ? 0 : p,
                A = this._get(b, "showWeek"),
                F = this._get(b, "dayNames");
            this._get(b, "dayNamesShort");
            var Q = this._get(b, "dayNamesMin"),
                x = this._get(b,
                    "monthNames"),
                E = this._get(b, "monthNamesShort"),
                I = this._get(b, "beforeShowDay"),
                r = this._get(b, "showOtherMonths"),
                M = this._get(b, "selectOtherMonths");
            this._get(b, "calculateWeek");
            for (var J = this._getDefaultDate(b), P = "", N = 0; N < v[0]; N++) {
                var Y = "";
                this.maxRows = 4;
                for (var V = 0; V < v[1]; V++) {
                    var O = this._daylightSavingAdjust(new Date(D, t, b.selectedDay)),
                        K = " ui-corner-all",
                        G = "";
                    if (L) {
                        G += '<div class="ui-datepicker-group';
                        if (1 < v[1]) switch (V) {
                        case 0:
                            G += " ui-datepicker-group-first";
                            K = " ui-corner-" + (d ? "right" : "left");
                            break;
                        case v[1] - 1:
                            G += " ui-datepicker-group-last";
                            K = " ui-corner-" + (d ? "left" : "right");
                            break;
                        default:
                            G += " ui-datepicker-group-middle", K = ""
                        }
                        G += '">'
                    }
                    for (var G = G + ('<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + K + '">' + (/all|left/.test(K) && 0 == N ? d ? n : u : "") + (/all|right/.test(K) && 0 == N ? d ? u : n : "") + this._generateMonthYearHeader(b, t, D, y, z, 0 < N || 0 < V, x, E) + '</div><table class="ui-datepicker-calendar"><thead><tr>'), S = A ? '<th class="ui-datepicker-week-col">' + this._get(b, "weekHeader") + "</th>" : "", K =
                        0; 7 > K; K++) var H = (K + p) % 7,
                        S = S + ("<th" + (5 <= (K + p + 6) % 7 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + F[H] + '">' + Q[H] + "</span></th>");
                    G += S + "</tr></thead><tbody>";
                    S = this._getDaysInMonth(D, t);
                    D == b.selectedYear && t == b.selectedMonth && (b.selectedDay = Math.min(b.selectedDay, S));
                    K = (this._getFirstDayOfMonth(D, t) - p + 7) % 7;
                    S = Math.ceil((K + S) / 7);
                    this.maxRows = S = L ? this.maxRows > S ? this.maxRows : S : S;
                    for (var H = this._daylightSavingAdjust(new Date(D, t, 1 - K)), W = 0; W < S; W++) {
                        for (var G = G + "<tr>", T = A ? '<td class="ui-datepicker-week-col">' +
                            this._get(b, "calculateWeek")(H) + "</td>" : "", K = 0; 7 > K; K++) {
                            var R = I ? I.apply(b.input ? b.input[0] : null, [H]) : [!0, ""],
                                U = H.getMonth() != t,
                                X = U && !M || !R[0] || y && H < y || z && H > z,
                                T = T + ('<td class="' + (5 <= (K + p + 6) % 7 ? " ui-datepicker-week-end" : "") + (U ? " ui-datepicker-other-month" : "") + (H.getTime() == O.getTime() && t == b.selectedMonth && b._keyEvent || J.getTime() == H.getTime() && J.getTime() == O.getTime() ? " " + this._dayOverClass : "") + (X ? " " + this._unselectableClass + " ui-state-disabled" : "") + (U && !r ? "" : " " + R[1] + (H.getTime() == C.getTime() ? " " + this._currentClass :
                                        "") + (H.getTime() == c.getTime() ? " ui-datepicker-today" : "")) + '"' + (U && !r || !R[2] ? "" : ' title="' + R[2] + '"') + (X ? "" : ' onclick="DP_jQuery_' + k + ".datepicker._selectDay('#" + b.id + "'," + H.getMonth() + "," + H.getFullYear() + ', this);return false;"') + ">" + (U && !r ? "&#xa0;" : X ? '<span class="ui-state-default">' + H.getDate() + "</span>" : '<a class="ui-state-default' + (H.getTime() == c.getTime() ? " ui-state-highlight" : "") + (H.getTime() == C.getTime() ? " ui-state-active" : "") + (U ? " ui-priority-secondary" : "") + '" href="#">' + H.getDate() + "</a>") +
                                    "</td>");
                            H.setDate(H.getDate() + 1);
                            H = this._daylightSavingAdjust(H)
                        }
                        G += T + "</tr>"
                    }
                    t++;
                    11 < t && (t = 0, D++);
                    G += "</tbody></table>" + (L ? "</div>" + (0 < v[0] && V == v[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : "");
                    Y += G
                }
                P += Y
            }
            P += f + (a.browser.msie && 7 > parseInt(a.browser.version, 10) && !b.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : "");
            b._keyEvent = !1;
            return P
        },
        _generateMonthYearHeader: function (a, b, c, d, f, n, v, t) {
            var A = this._get(a, "changeMonth"),
                L = this._get(a, "changeYear"),
                C = this._get(a, "showMonthAfterYear"),
                y = '<div class="ui-datepicker-title">',
                z = "";
            if (n || !A) z += '<span class="ui-datepicker-month">' + v[b] + "</span>";
            else {
                v = d && d.getFullYear() == c;
                for (var D = f && f.getFullYear() == c, z = z + ('<select class="ui-datepicker-month" onchange="DP_jQuery_' + k + ".datepicker._selectMonthYear('#" + a.id + "', this, 'M');\" >"), u = 0; 12 > u; u++)(!v || u >= d.getMonth()) && (!D || u <= f.getMonth()) && (z += '<option value="' + u + '"' + (u == b ? ' selected="selected"' : "") + ">" + t[u] + "</option>");
                z += "</select>"
            }
            C || (y += z + (!n &&
                A && L ? "" : "&#xa0;"));
            if (!a.yearshtml)
                if (a.yearshtml = "", n || !L) y += '<span class="ui-datepicker-year">' + c + "</span>";
                else {
                    t = this._get(a, "yearRange").split(":");
                    var F = (new Date).getFullYear();
                    v = function (a) {
                        a = a.match(/c[+-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+-].*/) ? F + parseInt(a, 10) : parseInt(a, 10);
                        return isNaN(a) ? F : a
                    };
                    b = v(t[0]);
                    t = Math.max(b, v(t[1] || ""));
                    b = d ? Math.max(b, d.getFullYear()) : b;
                    t = f ? Math.min(t, f.getFullYear()) : t;
                    for (a.yearshtml += '<select class="ui-datepicker-year" onchange="DP_jQuery_' + k +
                        ".datepicker._selectMonthYear('#" + a.id + "', this, 'Y');\" >"; b <= t; b++) a.yearshtml += '<option value="' + b + '"' + (b == c ? ' selected="selected"' : "") + ">" + b + "</option>";
                    a.yearshtml += "</select>";
                    y += a.yearshtml;
                    a.yearshtml = null
                }
            y += this._get(a, "yearSuffix");
            C && (y += (!n && A && L ? "" : "&#xa0;") + z);
            return y + "</div>"
        },
        _adjustInstDate: function (a, b, c) {
            var d = a.drawYear + ("Y" == c ? b : 0),
                f = a.drawMonth + ("M" == c ? b : 0);
            b = Math.min(a.selectedDay, this._getDaysInMonth(d, f)) + ("D" == c ? b : 0);
            d = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d,
                f, b)));
            a.selectedDay = d.getDate();
            a.drawMonth = a.selectedMonth = d.getMonth();
            a.drawYear = a.selectedYear = d.getFullYear();
            "M" != c && "Y" != c || this._notifyChange(a)
        },
        _restrictMinMax: function (a, b) {
            var c = this._getMinMaxDate(a, "min"),
                d = this._getMinMaxDate(a, "max"),
                c = c && b < c ? c : b;
            return d && c > d ? d : c
        },
        _notifyChange: function (a) {
            var b = this._get(a, "onChangeMonthYear");
            b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
        },
        _getNumberOfMonths: function (a) {
            a = this._get(a, "numberOfMonths");
            return null == a ? [1,
                1
            ] : "number" == typeof a ? [1, a] : a
        },
        _getMinMaxDate: function (a, b) {
            return this._determineDate(a, this._get(a, b + "Date"), null)
        },
        _getDaysInMonth: function (a, b) {
            return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
        },
        _getFirstDayOfMonth: function (a, b) {
            return (new Date(a, b, 1)).getDay()
        },
        _canAdjustMonth: function (a, b, c, d) {
            var f = this._getNumberOfMonths(a);
            c = this._daylightSavingAdjust(new Date(c, d + (0 > b ? b : f[0] * f[1]), 1));
            0 > b && c.setDate(this._getDaysInMonth(c.getFullYear(), c.getMonth()));
            return this._isInRange(a,
                c)
        },
        _isInRange: function (a, b) {
            var c = this._getMinMaxDate(a, "min"),
                d = this._getMinMaxDate(a, "max");
            return (!c || b.getTime() >= c.getTime()) && (!d || b.getTime() <= d.getTime())
        },
        _getFormatConfig: function (a) {
            var b = this._get(a, "shortYearCutoff"),
                b = "string" != typeof b ? b : (new Date).getFullYear() % 100 + parseInt(b, 10);
            return {
                shortYearCutoff: b,
                dayNamesShort: this._get(a, "dayNamesShort"),
                dayNames: this._get(a, "dayNames"),
                monthNamesShort: this._get(a, "monthNamesShort"),
                monthNames: this._get(a, "monthNames")
            }
        },
        _formatDate: function (a,
            b, c, d) {
            b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
            b = b ? "object" == typeof b ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
            return this.formatDate(this._get(a, "dateFormat"), b, this._getFormatConfig(a))
        }
    });
    a.fn.datepicker = function (b) {
        if (!this.length) return this;
        a.datepicker.initialized || (a(document).mousedown(a.datepicker._checkExternalClick).find("body").append(a.datepicker.dpDiv),
            a.datepicker.initialized = !0);
        var c = Array.prototype.slice.call(arguments, 1);
        return "string" == typeof b && ("isDisabled" == b || "getDate" == b || "widget" == b) || "option" == b && 2 == arguments.length && "string" == typeof arguments[1] ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c)) : this.each(function () {
            "string" == typeof b ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this].concat(c)) : a.datepicker._attachDatepicker(this, b)
        })
    };
    a.datepicker = new f;
    a.datepicker.initialized = !1;
    a.datepicker.uuid =
        (new Date).getTime();
    a.datepicker.version = "1.8.18";
    window["DP_jQuery_" + k] = a
})(jQuery);
var verSlider = {
    max_items: 12,
    totalItem: 0,
    init: function (a) {
        verSlider.element = $("#vip_post_123mua");
        verSlider.data = a.slice(-1);
        verSlider.queue = a.slice(0, a.length - 1);
        verSlider.totalItem = a.length;
        this.run()
    },
    run: function () {
        clearTimeout(verSlider.process_run);
        if (1 <= verSlider.queue.length && 10 < verSlider.totalItem) {
            var a = verSlider.queue.pop();
            "undefined" != typeof a.title && $("#vip_post_123mua").prepend(templateleftpost("post_vip", a.title, a.url, a.post_image, a.price, a.star));
            a = verSlider.element.find("li.sticky");
            verSlider.element.css("top", -55);
            verSlider.element.animate({
                top: 0
            }, {
                duration: 1E3,
                specialEasing: {
                    height: "easeInOutQuart"
                },
                complete: function () {
                    verSlider.process_run = setTimeout(function () {
                        verSlider.run()
                    }, 9E3)
                }
            });
            a.length > verSlider.max_items && $(a[a.length - 1]).remove()
        } else 10 > verSlider.totalItem || _loadleftpostvip()
    }
};
(function () {
    function a(a) {
        function c(c, g) {
            var k = c == window,
                l = a(c),
                n = l.data("blockUI.history"),
                q = l.data("blockUI.timeout");
            q && (clearTimeout(q), l.removeData("blockUI.timeout"));
            g = a.extend({}, a.blockUI.defaults, g || {});
            f(0, c, g);
            null === g.onUnblock && (g.onUnblock = l.data("blockUI.onUnblock"), l.removeData("blockUI.onUnblock"));
            var s;
            s = k ? a("body").children().filter(".blockUI").add("body > .blockUI") : a(".blockUI", c);
            k && (p = v = null);
            g.fadeOut ? (s.fadeOut(g.fadeOut), setTimeout(function () {
                d(s, n, g, c)
            }, g.fadeOut)) : d(s,
                n, g, c)
        }

        function d(c, d, f, g) {
            c.each(function () {
                this.parentNode && this.parentNode.removeChild(this)
            });
            d && d.el && (d.el.style.display = d.display, d.el.style.position = d.position, d.parent && d.parent.appendChild(d.el), a(g).removeData("blockUI.history"));
            if ("function" == typeof f.onUnblock) f.onUnblock(g, f)
        }

        function f(c, d, f) {
            var g = d == window;
            d = a(d);
            if (c || (!g || p) && (g || d.data("blockUI.isBlocked"))) d.data("blockUI.isBlocked", c), f.bindEvents && (!c || f.showOverlay) && (c ? a(document).bind("mousedown mouseup keydown keypress",
                f, k) : a(document).unbind("mousedown mouseup keydown keypress", k))
        }

        function k(c) {
            if (c.keyCode && 9 == c.keyCode && p && c.data.constrainTabKey) {
                var d = v,
                    f = c.shiftKey && c.target === d[0];
                if (!c.shiftKey && c.target === d[d.length - 1] || f) return setTimeout(function () {
                    n(f)
                }, 10), !1
            }
            d = c.data;
            return 0 < a(c.target).parents("div." + d.blockMsgClass).length ? !0 : 0 == a(c.target).parents().children().filter("div.blockUI").length
        }

        function n(a) {
            v && (a = v[!0 === a ? v.length - 1 : 0]) && a.focus()
        }
        if (/1\.(0|1|2)\.(0|1|2)/.test(a.fn.jquery) || /^1.1/.test(a.fn.jquery)) alert("blockUI requires jQuery v1.2.3 or later!  You are using v" +
            a.fn.jquery);
        else {
            a.fn._fadeIn = a.fn.fadeIn;
            var g = function () {},
                l = document.documentMode || 0,
                q = a.browser.msie && (8 > a.browser.version && !l || 8 > l),
                B = a.browser.msie && /MSIE 6.0/.test(navigator.userAgent) && !l,
                s = /MSIE/.test(navigator.userAgent);
            a.blockUI = function (d) {
                var k = window,
                    l = d,
                    C, y, z = k == window;
                d = l && void 0 !== l.message ? l.message : void 0;
                l = a.extend({}, a.blockUI.defaults, l || {});
                if (!l.ignoreIfBlocked || !a(k).data("blockUI.isBlocked")) {
                    l.overlayCSS = a.extend({}, a.blockUI.defaults.overlayCSS, l.overlayCSS || {});
                    C = a.extend({},
                        a.blockUI.defaults.css, l.css || {});
                    y = a.extend({}, a.blockUI.defaults.themedCSS, l.themedCSS || {});
                    d = void 0 === d ? l.message : d;
                    z && p && c(window, {
                        fadeOut: 0
                    });
                    if (d && "string" != typeof d && (d.parentNode || d.jquery)) {
                        var D = d.jquery ? d[0] : d,
                            u = {};
                        a(k).data("blockUI.history", u);
                        u.el = D;
                        u.parent = D.parentNode;
                        u.display = D.style.display;
                        u.position = D.style.position;
                        u.parent && u.parent.removeChild(D)
                    }
                    a(k).data("blockUI.onUnblock", l.onUnblock);
                    var u = l.baseZ,
                        F = s || l.forceIframe ? a('<iframe class="blockUI" style="z-index:' + u+++';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' +
                            l.iframeSrc + '"></iframe>') : a('<div class="blockUI" style="display:none"></div>'),
                        D = l.theme ? a('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + u+++';display:none"></div>') : a('<div class="blockUI blockOverlay" style="z-index:' + u+++';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');
                    l.theme && z ? (u = '<div class="blockUI ' + l.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (u + 10) + ';display:none;position:fixed">',
                        l.title && (u += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (l.title || "&nbsp;") + "</div>"), u += '<div class="ui-widget-content ui-dialog-content"></div></div>') : l.theme ? (u = '<div class="blockUI ' + l.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (u + 10) + ';display:none;position:absolute">', l.title && (u += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (l.title || "&nbsp;") + "</div>"), u += '<div class="ui-widget-content ui-dialog-content"></div>',
                        u += "</div>") : u = z ? '<div class="blockUI ' + l.blockMsgClass + ' blockPage" style="z-index:' + (u + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + l.blockMsgClass + ' blockElement" style="z-index:' + (u + 10) + ';display:none;position:absolute"></div>';
                    u = a(u);
                    d && (l.theme ? (u.css(y), u.addClass("ui-widget-content")) : u.css(C));
                    D.css(l.overlayCSS);
                    D.css("position", z ? "fixed" : "absolute");
                    (s || l.forceIframe) && F.css("opacity", 0);
                    C = [F, D, u];
                    var Q = z ? a("body") : a(k);
                    a.each(C, function () {
                        this.appendTo(Q)
                    });
                    l.theme &&
                        l.draggable && a.fn.draggable && u.draggable({
                            handle: ".ui-dialog-titlebar",
                            cancel: "li"
                        });
                    C = q && (!a.boxModel || 0 < a("object,embed", z ? null : k).length);
                    if (B || C) {
                        z && l.allowBodyStretch && a.boxModel && a("html,body").css("height", "100%");
                        if ((B || !a.boxModel) && !z) {
                            C = parseInt(a.css(k, "borderTopWidth")) || 0;
                            y = parseInt(a.css(k, "borderLeftWidth")) || 0;
                            var x = C ? "(0 - " + C + ")" : 0,
                                E = y ? "(0 - " + y + ")" : 0
                        }
                        a.each([F, D, u], function (a, b) {
                            var c = b[0].style;
                            c.position = "absolute";
                            if (2 > a) z ? c.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.boxModel?0:" +
                                l.quirksmodeOffsetHack + ') + "px"') : c.setExpression("height", 'this.parentNode.offsetHeight + "px"'), z ? c.setExpression("width", 'jQuery.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : c.setExpression("width", 'this.parentNode.offsetWidth + "px"'), E && c.setExpression("left", E), x && c.setExpression("top", x);
                            else if (l.centerY) z && c.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),
                                c.marginTop = 0;
                            else if (!l.centerY && z) {
                                var d = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + (l.css && l.css.top ? parseInt(l.css.top) : 0) + ') + "px"';
                                c.setExpression("top", d)
                            }
                        })
                    }
                    d && (l.theme ? u.find(".ui-widget-content").append(d) : u.append(d), (d.jquery || d.nodeType) && a(d).show());
                    (s || l.forceIframe) && l.showOverlay && F.show();
                    if (l.fadeIn) C = l.onBlock ? l.onBlock : g, F = l.showOverlay && !d ? C : g, C = d ? C : g, l.showOverlay && D._fadeIn(l.fadeIn, F), d && u._fadeIn(l.fadeIn, C);
                    else if (l.showOverlay && D.show(), d && u.show(), l.onBlock) l.onBlock();
                    f(1, k, l);
                    z ? (p = u[0], v = a(":input:enabled:visible", p), l.focusInput && setTimeout(n, 20)) : (C = u[0], d = l.centerX, D = l.centerY, y = C.parentNode, u = C.style, F = (y.offsetWidth - C.offsetWidth) / 2 - (parseInt(a.css(y, "borderLeftWidth")) || 0), C = (y.offsetHeight - C.offsetHeight) / 2 - (parseInt(a.css(y, "borderTopWidth")) || 0), d && (u.left = 0 < F ? F + "px" : "0"), D && (u.top = 0 < C ? C + "px" : "0"));
                    l.timeout && (d = setTimeout(function () {
                        z ? a.unblockUI(l) : a(k).unblock(l)
                    }, l.timeout), a(k).data("blockUI.timeout",
                        d))
                }
            };
            a.unblockUI = function (a) {
                c(window, a)
            };
            a.blockUI.version = 2.42;
            a.blockUI.defaults = {
                message: "<h1>\u0110ang t\u1ea3i...</h1>",
                title: null,
                draggable: !0,
                theme: !1,
                css: {
                    cursor: "wait"
                },
                themedCSS: {
                    width: "30%",
                    top: "40%",
                    left: "35%"
                },
                overlayCSS: {
                    backgroundColor: "#fff",
                    opacity: 0,
                    cursor: "wait"
                },
                iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
                forceIframe: !1,
                baseZ: 1E3,
                centerX: !0,
                centerY: !0,
                allowBodyStretch: !0,
                bindEvents: !0,
                constrainTabKey: !0,
                fadeIn: 200,
                fadeOut: 400,
                timeout: 0,
                showOverlay: !0,
                focusInput: !0,
                applyPlatformOpacityRules: !0,
                onBlock: null,
                onUnblock: null,
                quirksmodeOffsetHack: 4,
                blockMsgClass: "blockMsg",
                ignoreIfBlocked: !1
            };
            var p = null,
                v = []
        }
    }
    "function" === typeof define && define.amd && define.amd.jQuery ? define(["jquery"], a) : a(jQuery)
})();

function login_callback(a, b) {
    "" != b && (login.auto_check_login(), "function" == typeof window._fnCallbackAfterLogin && _fnCallbackAfterLogin())
}

function pre_login_callback() {
    return !0
}
$(document).ready(function () {
    "" == Account.UNAME && login.get_login();
    $("#zme-registerwg").live("click", function () {
        login.popup_register()
    });
    $("#zme-loginwg").live("click", function () {
        login.popup_login()
    });
    $("#back-top").hide();
    $(window).scroll(function () {
        100 < $(this).scrollTop() ? $("#back-top").fadeIn() : $("#back-top").fadeOut()
    });
    $("#back-top a").click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 800);
        return !1
    })
});
var initGlobal = function () {
        $(".loggedin").hover(function () {
            $(".dropdown-profile").show();
            $(".dropdown-caret").show()
        }, function () {
            $(".dropdown-caret").hide();
            $(".dropdown-profile").hide()
        })
    },
    login = {
        boxy: {},
        token: "",
        timeout: 0,
        options: {
            redirect_url: ""
        },
        build_login_template: function (a, b) {
            var c = "";
            "" != b ? (c = '<ul class="site-nav"><li><div class="loggedin"><a class="profile-links"><img src="' + Settings.imgurl + '/no_avatar.1.0.1.png" width="20" height="20" alt="' + b + '"></a><span class="screen-name">' + b + '</span><div class="dropdown-profile" style="display:none"><div class="dropdown-caret" style="display:none"></div><ul class="user-dropdown">',
                c += '<li class="title-user-dropdown">Qu\u1ea3n l\u00fd c\u00e1 nh\u00e2n</li><li><a href="' + Settings.baseurl + '/usercp/danh-sach-tin.html"><span class="ico-03"></span>Qu\u1ea3n l\u00fd tin</a></li><li><a href="' + Settings.baseurl + '/usercp/danh-sach-tin-da-luu.html"><span class="ico-09"></span>Danh s\u00e1ch tin \u0111\u00e3 l\u01b0u</a></li><li><a href="' + Settings.baseurl + '/usercp/hop-thu-den.html"><span class="ico-08"></span>Danh s\u00e1ch tin nh\u1eafn</a></li><li><a href="' + Settings.baseurl + '/usercp/lich-su-giao-dich.html"><span class="ico-05"></span>Th\u1ed1ng k\u00ea giao d\u1ecbch</a></li>',
                c += '<li class="end"><a href="' + Settings.baseurl + '/user/logout"><span class="ico-10"></span>Tho\u00e1t</a></li></ul></div></div></li>', c += '<li><div id="func-01" class="func-notify"><a class="icon-mail" href="' + Settings.baseurl + '/usercp/hop-thu-den.html"><span class="num"></span></a><div id="dropdown-01" class="dropdown-notify" style="display:none"><div class="dropdown-caret"></div><h3 class="title-user-dropdown">Tin nh\u1eafn m\u1edbi</h3><div id="scroll-01" class="notify-scroll" style="height:200px"><div class="viewport"><div class="overview"><ul class="user-dropdown dropdown-message">',
                c += '</ul></div></div></div><a class="view-more" href="' + Settings.baseurl + '/usercp/hop-thu-den.html">Xem t\u1ea5t c\u1ea3</a></div></div></li>', c += '<li class="first helper"><a href="' + Settings.baseurl + '/tro-giup/Lam-sao-de-tin-rao-vat-hieu-qua.html">B\u1ea1n mu\u1ed1n rao v\u1eb7t hi\u1ec7u qu\u1ea3?</a></li>', $("#welcome_zone").html(c + "</ul>"), $(".loggedin").hover(function () {
                    $(".dropdown-profile").show();
                    $(".dropdown-caret").show()
                }, function () {
                    $(".dropdown-caret").hide();
                    $(".dropdown-profile").hide()
                }),
                $("#func-01").hover(function () {
                    $("#dropdown-01").is(":hidden") ? $("#dropdown-01").show() : $("#dropdown-01").hide()
                })) : login.auto_check_login();
            return !1
        },
        close_popup: function (a) {
            null != a ? a = Boxy.get(a.target) : (a = $(".boxy-content"), a = Boxy.get(a));
            a.hide();
            a.unload()
        },
        popup_login: function (a) {
            Boxy.load(Settings.baseurl + "/user/popup-login", {
                modal: !0
            });
            this.callback = a
        },
        popup_register: function () {
            Boxy.load(Settings.baseurl + "/user/popup-register", {
                modal: !0
            })
        },
        popup_resend_email: function () {
            Boxy.load(Settings.baseurl +
                "/user/popup-resend-email", {
                    modal: !0
                })
        },
        get_login: function () {
            $.get(Settings.baseurl + "/ajax/getlogininfo?v=" + (new Date).getTime(), {}, function (a) {
                a && ("" != a.uname ? (Account.UID = a.uid, Account.UNAME = a.uname, login.build_login_template(a.uid, a.uname), 0 == Account.UID && $("#zmesession").attr("src", Settings.baseurl + "/user/zmessionhandler")) : login.build_login_template(0, "", 0, 0), "function" == typeof window._fnCallbackAfterLogin && _fnCallbackAfterLogin())
            }, "json");
            return !1
        },
        get_unread: function () {
            $.get(Settings.baseurl +
                "/ajax/unread-message", {}, function (a) {
                    a && ("" != a.total ? ($("span.num").html(a.total), $("ul.dropdown-message").html(login.build_template_message(a.data))) : ($("span.num").remove(), $(".overview").html('<span style="margin-left:36px">Kh\u00f4ng c\u00f3 tin nh\u1eafn m\u1edbi n\u00e0o!</span>')))
                }, "json")
        },
        build_template_message: function (a) {
            var b = "";
            for (i = 0; i < a.length; i++) var c = a[i],
                b = b + ('<li><a target="_blank" href="' + Settings.baseurl + "/usercp/chi-tiet-tin-nhan-" + c.msg_id + '.html"><span class="ico-13"></span><strong>' +
                    c.sender_fullname + '</strong> v\u1eeba g\u1eedi tin nh\u1eafn cho b\u1ea1n - <strong class="timer">' + c.time + "</strong></a></li>");
            return b
        },
        auto_check_login: function () {
            $.ajax({
                url: "http://123.zing.vn/sso.php",
                dataType: "jsonp",
                success: function (a) {
                    a.isLogined && "" != a.acn && $.post(Settings.baseurl + "/ajax/setlogin/", {
                        sid: a.vngauth,
                        user_name: a.acn
                    }, function (a) {
                        0 == a.err && (Account.UID = a.uid, Account.UNAME = a.uname, login.build_login_template(a.uid, a.uname, a.shop, a.level), login.get_unread(), "" != Account.UNAME &&
                            0 == Account.UID && $("#zmesession").attr("src", Settings.baseurl + "/user/zmessionhandler"))
                    }, "json")
                }
            })
        }
    },
    Message = {
        options: {
            receiver: 0,
            sender_id: 0,
            msgId: 0,
            email: "",
            titleReply: "",
            postId: 0
        },
        compose: function () {
            this.boxy = new Boxy('<div class="popup" style="width:450px;margin:0 auto"><div class="title-popup">G\u1eedi tin nh\u1eafn<a title="\u0110\u00f3ng l\u1ea1i" class="btn-close close"><img src="' + Settings.imgurl + '/boxy/close_boxy.png" width="18" height="17" alt="\u0110\u00f3ng l\u1ea1i" /></a></div><div class="content-popup"><div class="loading" style="display:none"><span></span>\u0110ang t\u1ea3i...</div><div class="msg-form"><p class="notice-error" style="display:none">Xin vui l\u00f2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\u00f4ng tin</p><p class="row-info clearfix"><label for="name">Ng\u01b0\u1eddi nh\u1eadn:</label><span class="txt">' +
                Message.options.userName + '</span></p><p class="row-info clearfix"><label for="title">Ti\u00eau \u0111\u1ec1 <span style="color:red">(*)</span>:</label>\t<input id="title_msg" class="input-msg" name="title" type="text" maxlength="100"></p><p class="row-info clearfix"><label for="content">N\u1ed9i dung tin nh\u1eafn <span style="color:red">(*)</span> (T\u1ed1i \u0111a 200 k\u00fd t\u1ef1):</label>\t<textarea id="content_msg" class="ctn-content" maxlength="200"></textarea></p><h2 class="contact-title">Th\u00f4ng tin ng\u01b0\u1eddi g\u1eedi:</h2><p class="row-info clearfix"><label for="title" class="e-title">Email <span style="color:red">(*)</span>:</label><input class="input-msg" name="email_sender" id="email_sender" type="text" value="' +
                Message.options.email + '"/></p><div class="clear"></div></div><div class="clear"></div></div><div class="footer-popup"><div class="btn-default btn-double"><input class="btn-accept" name="" type="button" value="G\u1eedi \u0111i" onclick="Message.sendMessage()"/><input class="btn-cancel close" name="" type="button" value="H\u1ee7y b\u1ecf" /></div></div></div>', {
                    modal: !0,
                    unloadOnHide: !0
                })
        },
        sendMessage: function () {
            $(".btn-accept").attr("disabled", "disabled");
            var a = $("#title_msg").val(),
                b = $("#content_msg").val(),
                c = $("#email_sender").val();
            if ("" == a || "" == b || "" == c) return $(".notice-error").text("Xin vui l\u00f2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\u00f4ng tin!"), $(".notice-error").css("display", "block"), $(".btn-accept").removeAttr("disabled"), !1;
            if (!Core123M.is_email(c)) return $(".notice-error").text("\u0110\u1ecba ch\u1ec9 email kh\u00f4ng \u0111\u00fang. Vui l\u00f2ng nh\u1eadp l\u1ea1i!"), $(".notice-error").css("display", "block"), $(".btn-accept").removeAttr("disabled"), !1;
            $(".loading").show();
            $.ajax({
                type: "POST",
                dataType: "json",
                url: Settings.baseurl + "/inbox/sendmessage/",
                data: {
                    receiver_id: Message.options.receiver,
                    msg_subject: a,
                    msg_content: b,
                    email: c,
                    post_id: Message.options.postId
                },
                success: function (a) {
                    Boxy.get($(".popup")).hide();
                    1 == a.error ? $(this).myBoxy(Boxy, {
                        type: "alert",
                        message: a.message
                    }) : $(this).myBoxy(Boxy, {
                        type: "success",
                        message: a.message
                    });
                    $(".loading").hide()
                }
            })
        },
        reply: function () {
            this.boxy = new Boxy('<div class="popup" style="width:450px;margin:0 auto"><div class="title-popup">Tr\u1ea3 l\u1eddi tin nh\u1eafn<a title="\u0110\u00f3ng l\u1ea1i" class="btn-close close"><img src="' +
                Settings.imgurl + '/boxy/close_boxy.png" width="18" height="17" alt="\u0110\u00f3ng l\u1ea1i" /></a></div><div class="content-popup"><div class="loading" style="display:none"><span></span>\u0110ang t\u1ea3i...</div><div class="msg-form"><p class="notice-error" style="display:none">Xin vui l\u00f2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\u00f4ng tin</p><p class="row-info clearfix"><label for="name">Ng\u01b0\u1eddi nh\u1eadn <span style="color:red">(*)</span>:</label><span class="txt"><input class="input-msg disable-input" disabled="disabled" name="receiver_id" value="' +
                Message.options.sender_id + '" type="text"></span></p><p class="row-info clearfix"><label for="title">Ti\u00eau \u0111\u1ec1 <span style="color:red">(*)</span>:</label><input class="input-msg" name="title" id="title_msg" type="text" value="' + Message.options.titleReply + '"></p><p class="row-info clearfix"><label for="content">N\u1ed9i dung tin nh\u1eafn <span style="color:red">(*)</span> (T\u1ed1i \u0111a 200 k\u00fd t\u1ef1):</label><textarea id="content_reply" class="ctn-content" maxlength="200"></textarea></p><div class="clear"></div></div><div class="clear"></div></div><div class="footer-popup"><div class="btn-default btn-double"><input class="btn-accept" name="" onclick="Message.sendReply()" type="button" value="G\u1eedi \u0111i" /><input class="btn-cancel close" name="" type="button" value="H\u1ee7y b\u1ecf" /></div></div></div>', {
                    modal: !0,
                    unloadOnHide: !0
                })
        },
        sendReply: function () {
            var a = $("#title_msg").val(),
                b = $("#content_reply").val();
            $("#receiver_id").val();
            if ("" == a || "" == b) return $(".notice-error").text("Xin vui l\u00f2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\u00f4ng tin!"), $(".notice-error").css("display", "block"), !1;
            $(".loading").show();
            $.ajax({
                type: "POST",
                dataType: "json",
                url: Settings.baseurl + "/inbox/sendmessagereply/",
                data: {
                    msg_id: Message.options.msgId,
                    msg_content: b,
                    msg_subject: a
                },
                success: function (a) {
                    Boxy.get($(".popup")).hide();
                    1 == a.error ? $(this).myBoxy(Boxy, {
                        type: "alert",
                        message: a.message
                    }) : $(this).myBoxy(Boxy, {
                        type: "success",
                        message: a.message
                    });
                    $(".loading").hide()
                }
            })
        }
    },
    common = {
        formatCurrency: function (a) {
            a = a.toString().replace(/\$|\,/g, "");
            isNaN(a) && (a = "0");
            sign = a == (a = Math.abs(a));
            a = Math.floor(100 * a + .50000000001);
            cents = a % 100;
            a = Math.floor(a / 100).toString();
            10 > cents && (cents = "0" + cents);
            for (var b = 0; b < Math.floor((a.length - (1 + b)) / 3); b++) a = a.substring(0, a.length - (4 * b + 3)) + "." + a.substring(a.length - (4 * b + 3));
            return (sign ? "" : "-") +
                a
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
                d = new Date,
                f = new Date(1E3 * a),
                k = Math.floor(d.getTime() / 1E3) - a;
            if (60 > k) return (0 > k ? 0 : k).toString() + " gi\u00e2y tr\u01b0\u1edbc";
            if (3600 > k) return Math.floor(k / 60) + " ph\u00fat tr\u01b0\u1edbc";
            if (43200 > k) return Math.floor(k / 3600) + " ti\u1ebfng tr\u01b0\u1edbc";
            a = f.getHours();
            var n = Core123M.fn.fill2(f.getMinutes());
            if (518400 > k) {
                for (var g = "t\u1ed1i", k = 0; 3 > k; k++)
                    if (a < b[k][0]) {
                        g = b[k][1];
                        break
                    }
                k = (d.getDay() + 7 - f.getDay()) % 7;
                b = 0 == k ? "h\u00f4m nay" : 1 == k ? "h\u00f4m qua" : c[f.getDay()];
                return (a % 12).toString() + ":" + n +
                    " " + g + " " + b
            }
            a = Core123M.fn.fill2(a);
            return a + ":" + n + " " + Core123M.fn.fill2(f.getDate()) + "/" + Core123M.fn.fill2(f.getMonth() + 1) + "/" + f.getFullYear()
        },
        getUrlVars: function (a) {
            for (var b = {}, c = a.slice(a.indexOf("?") + 1).split("&"), d = 0; d < c.length; d++) a = c[d].split("="), b[a[0]] = a[1];
            return b
        },
        httpBuildQueryString: function (a) {
            return $.param(a)
        },
        is_email: function (a) {
            return /^[a-z][a-z-_0-9\.]+@[a-z-_=>0-9\.]+\.[a-z]{2,3}$/i.test(a)
        },
        is_numeric: function (a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        strtotime: function (a) {
            return "" !=
                a ? (a = a.split("-"), (new Date(Date.UTC(a[2], this.stripLeadingZeroes(a[1]) - 1, this.stripLeadingZeroes(a[0])))).getTime() / 1E3) : 0
        },
        stripLeadingZeroes: function (a) {
            if (void 0 != a) return 1 < a.length && "0" == a.substr(0, 1) ? a.substr(1) : a
        },
        addDot: function (a) {
            a = new String(a);
            a = a.split("").reverse();
            for (var b = "", c = 0; c <= a.length - 1; c++) b = a[c] + b, 0 == (c + 1) % 3 && a.length - 1 !== c && (b = "." + b);
            return b
        },
        overlayfeedback: function () {
            var a = '<div class="popup" style="width:450px;margin:0 auto"><div class="title-popup">G\u00f3p \u00fd/ B\u00e1o l\u1ed7i phi\u00ean b\u1ea3n Beta raovat.123mua.vn<a title="\u0110\u00f3ng l\u1ea1i" class="btn-close close"><img src="' +
                Settings.imgurl + '/boxy/close_boxy.png" alt="\u0110\u00f3ng l\u1ea1i" /></a></div><div class="content-popup"><div class="msg-form" style="margin:10px 0"><p class="notice-error" style="display:none">Xin vui l\u00f2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\u00f4ng tin</p><p class="row-info clearfix"><label for="name">Ch\u1ee7 \u0111\u1ec1 g\u00f3p \u00fd:</label><select class="input-msg" id="type_feedback" style="width:290px"><option value="0">Vui l\u00f2ng ch\u1ecdn lo\u1ea1i ph\u1ea3n h\u1ed3i</option><option value="1">B\u00e1o l\u1ed7i</option><option value="2">G\u00f3p \u00fd n\u1ed9i dung</option><option value="3">Y\u00eau c\u1ea7u ch\u1ee9c n\u0103ng</option><option value="4">Kh\u00e1c</option></select></p><p class="row-info clearfix"><label for="title">G\u00f3p \u00fd v\u1ec1 li\u00ean k\u1ebft:</label><input class="input-msg" id="link_feedback" name="title" type="text" value="' +
                $(location).attr("href") + '"></p><p class="row-info clearfix"><label for="email">Email c\u1ee7a b\u1ea1n:</label><input type="text" name="email_feedback" value="" class="input-msg" id="email_msg"></p><p class="row-info clearfix"><label for="content">M\u00f4 t\u1ea3 n\u1ed9i dung:</label><textarea class="ctn-content" id="content_feedback"></textarea></p><div class="clear"></div></div><div class="clear"></div></div><div class="footer-popup"><div class="btn-default btn-double"><input class="btn-accept" name="" type="button" value="G\u1eedi \u0111i" onclick="common.sendFeedback()"/><input class="btn-cancel close" name="" type="button" value="H\u1ee7y b\u1ecf" /></div></div></div>';
            this.boxy = new Boxy(a, {
                modal: !0,
                unloadOnHide: !0
            })
        },
        sendFeedback: function () {
            $(".loading").show();
            $(".btn-accept").attr("disabled", "disabled");
            var a = $("#type_feedback").val(),
                b = $("#content_feedback").val(),
                c = $("#link_feedback").val(),
                d = $("#email_msg").val();
            if (0 == a || "" == b || "" == c) return $(".notice-error").text("Xin vui l\u00f2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\u00f4ng tin!"), $(".notice-error").css("display", "block"), $(".btn-accept").removeAttr("disabled"), !1;
            if (!common.is_email(d)) return $(".notice-error").text("\u0110\u1ecba ch\u1ec9 email kh\u00f4ng \u0111\u00fang. Vui l\u00f2ng nh\u1eadp l\u1ea1i!"),
                $(".notice-error").css("display", "block"), $(".btn-accept").removeAttr("disabled"), !1;
            Boxy.get($(".popup")).hide();
            $(this).myBoxy(Boxy, {
                title: "\u0110ang x\u1eed l\u00fd",
                type: "loading",
                message: '<img src="' + Settings.imgurl + '/zoomloader.gif" alt="\u0110ang th\u1ef1c hi\u1ec7n" style="margin-bottom:5px;margin-left:10px;" />'
            });
            $.ajax({
                type: "POST",
                dataType: "json",
                url: Settings.baseurl + "/ajax/sendfeedback/",
                data: {
                    type_feedback: a,
                    content: b,
                    link: c,
                    email: d
                },
                success: function (a) {
                    Boxy.get($(".popup")).hide();
                    1 == a.error ? $(this).myBoxy(Boxy, {
                        type: "alert",
                        message: a.message
                    }) : $(this).myBoxy(Boxy, {
                        type: "success",
                        message: "C\u00e1m \u01a1n b\u1ea1n \u0111\u00e3 tham gia \u0111\u00f3ng g\u00f3p \u00fd ki\u1ebfn cho phi\u00ean b\u1ea3n beta c\u1ee7a raovat.123mua.vn!"
                    });
                    $(".loading").hide()
                }
            })
        }
    };

function popupResendEmail() {
    login.close_popup();
    login.popup_resend_email()
};
PopupManager = {
        popup_window: null,
        interval_time: 80,
        interval: null,
        open: function (a, b, c, e) {
            this.popup_window = window.open(a, "", this.getWindowParams(b, c));
            this.interval = window.setInterval(this.waitForPopupClose, this.interval_time, e);
            return this.popup_window
        },
        waitForPopupClose: function (a) {
            PopupManager.isPopupClosed() && (PopupManager.destroyPopup(), a ? "function" == typeof a && a() : window.location.reload())
        },
        getWindowParams: function (a, b) {
            var c = this.getCenterCoords(a, b);
            return "width=" + a + ",height=" + b + ",status=1,location=1,resizable=yes,left=" + c[0] + ",top=" + c[1]
        },
        getCenterCoords: function (a, b) {
            var c = this.getWindowInnerSize(),
                e = this.getParentCoords(),
                f = e[0] + Math.max(0, Math.floor((c[0] - a) / 2)),
                c = e[1] + Math.max(0, Math.floor((c[1] - b) / 2));
            return [f, c]
        },
        destroyPopup: function () {
            this.popup_window = null;
            window.clearInterval(this.interval);
            this.interval = null
        },
        getParentCoords: function () {
            var a = 0,
                b = 0;
            "screenLeft" in window ? (a = window.screenLeft, b = window.screenTop) : "screenX" in window && (a = window.screenX, b = window.screenY);
            return [a, b]
        },
        getWindowInnerSize: function () {
            var a = 0,
                b = 0,
                c =
                null;
            "innerWidth" in window ? (a = window.innerWidth, b = window.innerHeight) : ("BackCompat" === window.document.compatMode && "body" in window.document ? c = window.document.body : "documentElement" in window.document && (c = window.document.documentElement), null !== c && (a = c.offsetWidth, b = c.offsetHeight));
            return [a, b]
        },
        isPopupClosed: function () {
            return !this.popup_window || this.popup_window.closed
        },
        getWindowInnerSize: function () {
            var a = 0,
                b = 0,
                c = null;
            "innerWidth" in window ? (a = window.innerWidth, b = window.innerHeight) : ("BackCompat" ===
                window.document.compatMode && "body" in window.document ? c = window.document.body : "documentElement" in window.document && (c = window.document.documentElement), null !== c && (a = c.offsetWidth, b = c.offsetHeight));
            return [a, b]
        }
    }