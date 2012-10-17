/*  
application.js for Jing.fm
version: 1.8.8.7
Author: Jing.fm Dev Team
*/
function json2str(e) {
    var t = this;
    switch (typeof e) {
    case "string":
        return '"' + e.replace(/(["\\])/g, "\\$1") + '"';
    case "array":
        return "[" + e.map(t.json2str).join(",") + "]";
    case "object":
        if (e instanceof Array) {
            var n = [],
            r = e.length;
            for (var i = 0; i < r; i++) n.push(t.json2str(e[i]));
            return "[" + n.join(",") + "]"
        }
        if (e == null) return "null";
        var s = [];
        for (var o in e) s.push(t.json2str(o) + ":" + t.json2str(e[o]));
        return "{" + s.join(",") + "}";
    case "number":
        return e;
    case ! 1 : return e
    }
}
function fingerGestureListener(e, t) {
    function u() {
        e.removeEventListener("touchmove", a),
        e.removeEventListener("touchend", f),
        n = null,
        i = null,
        s = null
    }
    function a(o) {
        if (o.touches.length == 1) o.preventDefault();
        else if (o.touches.length == 2) {
            i = o.touches[0].pageX - n;
            var a = o.touches[0].pageY - r;
            s == null ? s = i: s < 0 && i > 0 || s > 0 && i < 0 || Math.abs(a) > 100 ? u() : $("#topApp").isDisplay() && t({
                target: e,
                dx: i,
                status: "move"
            })
        } else u()
    }
    function f(n) {
        if (e.getAttribute("id") == "bg" && o == 1) {
            $(document).click();
            return
        }
        o == 2 && (Interface.Current == Interface.MAIN && !Core.isFullScren ? Math.abs(i) > 120 ? t({
            target: e,
            direction: i > 0 ? "right": "left"
        }) : Math.abs(i) < 30 && t({
            target: e,
            direction: "middle"
        }) : $("#topApp").isDisplay() && Math.abs(i) > 10 && t({
            target: e,
            dx: i,
            status: "end"
        })),
        u()
    }
    function l(i) {
        o = i.touches.length,
        e.addEventListener("touchmove", a, !1);
        if (e.getAttribute("id") == "bg" && o == 1) {
            e.addEventListener("touchend", f, !1);
            return
        }
        o == 2 && (i.preventDefault(), n = i.touches[0].pageX, r = i.touches[0].pageY, $("#topApp").isDisplay() && t({
            status: "start"
        }), e.addEventListener("touchend", f, !1))
    }
    var n, r, i, s, o;
    e.addEventListener("touchstart", l, !1)
}
function swfReady() {
    if (Player.swfObj != undefined) return;
    Player.swfObj = swfobject.getObjectById("rotateFlash"),
    Player.ready()
}
new
function(e) {
    var t = e.separator || "&",
    n = e.spaces === !1 ? !1 : !0,
    r = e.suffix === !1 ? "": "[]",
    i = e.prefix === !1 ? !1 : !0,
    s = i ? e.hash === !0 ? "#": "?": "",
    o = e.numbers === !1 ? !1 : !0;
    jQuery.query = new
    function() {
        var e = function(e, t) {
            return e != undefined && e !== null && (t ? e.constructor == t: !0)
        },
        r = function(e) {
            var t, n = /\[([^[]*)\]/g,
            r = /^([^[]+)(\[.*\])?$/.exec(e),
            i = r[1],
            s = [];
            while (t = n.exec(r[2])) s.push(t[1]);
            return [i, s]
        },
        i = function(t, n, r) {
            var s, o = n.shift();
            typeof t != "object" && (t = null);
            if (o === "") {
                t || (t = []);
                if (e(t, Array)) t.push(n.length == 0 ? r: i(null, n.slice(0), r));
                else if (e(t, Object)) {
                    var u = 0;
                    while (t[u++] != null);
                    t[--u] = n.length == 0 ? r: i(t[u], n.slice(0), r)
                } else t = [],
                t.push(n.length == 0 ? r: i(null, n.slice(0), r))
            } else if (o && o.match(/^\s*[0-9]+\s*$/)) {
                var a = parseInt(o, 10);
                t || (t = []),
                t[a] = n.length == 0 ? r: i(t[a], n.slice(0), r)
            } else {
                if (!o) return r;
                var a = o.replace(/^\s*|\s*$/g, "");
                t || (t = {});
                if (e(t, Array)) {
                    var f = {};
                    for (var u = 0; u < t.length; ++u) f[u] = t[u];
                    t = f
                }
                t[a] = n.length == 0 ? r: i(t[a], n.slice(0), r)
            }
            return t
        },
        u = function(e) {
            var t = this;
            return t.keys = {},
            e.queryObject ? jQuery.each(e.get(),
            function(e, n) {
                t.SET(e, n)
            }) : jQuery.each(arguments,
            function() {
                var e = "" + this;
                e = e.replace(/^[?#]/, ""),
                e = e.replace(/[;&]$/, ""),
                n && (e = e.replace(/[+]/g, " ")),
                jQuery.each(e.split(/[&;]/),
                function() {
                    var e = decodeURIComponent(this.split("=")[0] || ""),
                    n = decodeURIComponent(this.split("=")[1] || "");
                    if (!e) return;
                    o && (/^[+-]?[0-9]+\.[0-9]*$/.test(n) ? n = parseFloat(n) : /^[+-]?[0-9]+$/.test(n) && (n = parseInt(n, 10))),
                    n = !n && n !== 0 ? !0 : n,
                    n !== !1 && n !== !0 && typeof n != "number" && (n = n),
                    t.SET(e, n)
                })
            }),
            t
        };
        return u.prototype = {
            queryObject: !0,
            has: function(t, n) {
                var r = this.get(t);
                return e(r, n)
            },
            GET: function(t) {
                if (!e(t)) return this.keys;
                var n = r(t),
                i = n[0],
                s = n[1],
                o = this.keys[i];
                while (o != null && s.length != 0) o = o[s.shift()];
                return typeof o == "number" ? o: o || ""
            },
            get: function(t) {
                var n = this.GET(t);
                return e(n, Object) ? jQuery.extend(!0, {},
                n) : e(n, Array) ? n.slice(0) : n
            },
            SET: function(t, n) {
                var s = e(n) ? n: null,
                o = r(t),
                u = o[0],
                a = o[1],
                f = this.keys[u];
                return this.keys[u] = i(f, a.slice(0), s),
                this
            },
            set: function(e, t) {
                return this.copy().SET(e, t)
            },
            REMOVE: function(e) {
                return this.SET(e, null).COMPACT()
            },
            remove: function(e) {
                return this.copy().REMOVE(e)
            },
            EMPTY: function() {
                var e = this;
                return jQuery.each(e.keys,
                function(t, n) {
                    delete e.keys[t]
                }),
                e
            },
            load: function(e) {
                var t = e.replace(/^.*?[#](.+?)(?:\?.+)?$/, "$1"),
                n = e.replace(/^.*?[?](.+?)(?:#.+)?$/, "$1");
                return new u(e.length == n.length ? "": n, e.length == t.length ? "": t)
            },
            empty: function() {
                return this.copy().EMPTY()
            },
            copy: function() {
                return new u(this)
            },
            COMPACT: function() {
                function t(n) {
                    var r = typeof n == "object" ? e(n, Array) ? [] : {}: n;
                    if (typeof n == "object") {
                        function i(t, n, r) {
                            e(t, Array) ? t.push(r) : t[n] = r
                        }
                        jQuery.each(n,
                        function(n, s) {
                            if (!e(s)) return ! 0;
                            i(r, n, t(s))
                        })
                    }
                    return r
                }
                return this.keys = t(this.keys),
                this
            },
            compact: function() {
                return this.copy().COMPACT()
            },
            toString: function() {
                var r = 0,
                i = [],
                o = [],
                u = this,
                a = function(e) {
                    return e += "",
                    n && (e = e.replace(/ /g, "+")),
                    encodeURIComponent(e)
                },
                f = function(t, n, r) {
                    if (!e(r) || r === !1) return;
                    var i = [a(n)];
                    r !== !0 && (i.push("="), i.push(a(r))),
                    t.push(i.join(""))
                },
                l = function(e, t) {
                    var n = function(e) {
                        return ! t || t == "" ? [e].join("") : [t, "[", e, "]"].join("")
                    };
                    jQuery.each(e,
                    function(e, t) {
                        typeof t == "object" ? l(t, n(e)) : f(o, n(e), t)
                    })
                };
                return l(this.keys),
                o.length > 0 && i.push(s),
                i.push(o.join(t)),
                i.join("")
            }
        },
        new u(location.search, location.hash)
    }
} (jQuery.query || {}),
new
function(e) {
    e.fn.isClass = function(t) {
        return e(this).attr("class").indexOf(t) >= 0 ? !0 : !1
    },
    e.fn.setCursorPosition = function(t) {
        if (e(this).get(0).setSelectionRange) e(this).get(0).setSelectionRange(t, t);
        else if (e(this).get(0).createTextRange) {
            var n = e(this).get(0).createTextRange();
            n.collapse(!0),
            n.moveEnd("character", t),
            n.moveStart("character", t),
            n.select()
        }
    },
    e.fn.isDisplay = function() {
        return e(this).length == 0 ? !1 : e(this).css("display") == "none" ? !1 : !0
    },
    e.fn.autoTextarea = function(t) {
        var n = {
            maxHeight: null,
            minHeight: e(this).height()
        },
        r = e.extend({},
        n, t);
        return e(this).each(function() {
            e(this).bind("paste cut keydown keyup focus blur",
            function() {
                var t, n = this.style;
                this.style.height = r.minHeight + "px",
                this.scrollHeight > r.minHeight && (r.maxHeight && this.scrollHeight > r.maxHeight ? (t = r.maxHeight, n.overflowY = "scroll") : (t = this.scrollHeight, n.overflowY = "hidden"), n.height = t + "px", e(this).parent().css("height", t + 40))
            })
        })
    }
} (jQuery);
var Core = {
    bodyWidth: 0,
    bodyHeight: 0,
    screenWidth: 0,
    screentHeight: 0,
    mouseX: 0,
    mouseY: 0,
    MIN_BODY_WIDTH: 950,
    MIN_BODY_HEIGHT: 620,
    MAX_BODY_WIDTH: 2560,
    MAX_BODY_HEIGHT: 1440,
    JingATokenHeader: "Jing-A-Token-Header",
    JingRTokenHeader: "Jing-R-Token-Header",
    API_VER: "/api/v1",
    isOverlay: !1,
    UPLOAD_ACTION: 0,
    SIGNUP: 1,
    SETTING: 2,
    isFullScren: !1,
    FS_HEIGHT: 0,
    MAX_OVERLAY_HEIGHT: 0,
    DOMAIN: "jing.fm",
    COOKIE_VERSION: "1.0",
    ie67: $("html").isClass("ie6") || $("html").isClass("ie7"),
    ie68: "",
    ie69: "",
    ie: $("html").isClass("ie"),
    gecko: $("html").isClass("gecko"),
    opera: $("html").isClass("opera"),
    ipad: $("html").isClass("ipad"),
    webkit: $("html").isClass("webkit"),
    standalone: navigator.standalone,
    browser: "",
    nowIsReady: !1,
    nowSuccess: 1,
    A30: "30",
    A50: "50",
    A64: "64",
    init: function() {
        Core.standalone ? Core.standalone = "jing.fm": Core.standalone = "",
        Core.ie68 = Core.ie67 || $("html").isClass("ie8"),
        Core.ie69 = Core.ie68 || $("html").isClass("ie9"),
        document.domain = Core.DOMAIN;
        for (var e = 0; e < initImg.length; ++e) {
            var t = new Image;
            t.src = "/images/" + initImg[e]
        }
        $(document).on("click", ".overlay",
        function(e) {
            e.stopPropagation()
        }),
        Core.resize(),
        Core.screenWidth = window.screen.width,
        Core.screenHeight = window.screen.height,
        $("html").isClass("win") && $("html").isClass("chrome") ? $("#signUp, #signIn").children().css({
            width: "88px"
        }) : $("html").isClass("ipad") && $("#signUp, #signIn").children().css({
            width: "87px"
        })
    },
    getSelectionStart: function(e) {
        if (e.createTextRange) {
            var t = document.selection.createRange().duplicate();
            return t.moveEnd("character", e.value.length),
            t.text == "" ? e.value.length: e.value.lastIndexOf(t.text)
        }
        return e.selectionStart
    },
    getSelectionEnd: function(e) {
        if (e.createTextRange) {
            var t = document.selection.createRange().duplicate();
            return t.moveStart("character", -e.value.length),
            t.text.length
        }
        return e.selectionEnd
    },
    get: function(e, t) {
        return Number(e.css(t).replace("px", ""))
    },
    getCookie: function(name) {
        var tempName = "";
        name != "jing.auth" && name != "jing.misc" && (tempName = name, name = "jing.misc");
        var arg = name + "=",
        alen = arg.length,
        clen = document.cookie.length,
        i = 0;
        while (i < clen) {
            var j = i + alen;
            if (document.cookie.substring(i, j) == arg) {
                var endstr = document.cookie.indexOf(";", j);
                endstr == -1 && (endstr = document.cookie.length);
                var result = unescape(document.cookie.substring(j, endstr));
                if (tempName != "") {
                    try {
                        result = eval("(" + result + ")")
                    } catch(e) {
                        result = new Object
                    }
                    return result.v != Core.COOKIE_VERSION ? "": result[tempName] == undefined ? "": result[tempName]
                }
                return result
            }
            i = document.cookie.indexOf(" ", i) + 1;
            if (i == 0) break
        }
        return null
    },
    setCookie: function(name, value, expires, path, domain, secure) {
        if (name != "jing.auth") {
            var tempName = name + "";
            name = "jing.misc";
            var tempValue = value + "",
            misc = Core.getCookie("jing.misc");
            if (misc == null || misc == "") misc = new Object,
            misc.v = Core.COOKIE_VERSION;
            else {
                try {
                    misc = eval("(" + misc + ")")
                } catch(e) {
                    misc = new Object
                }
                misc.v != Core.COOKIE_VERSION && (misc = new Object, misc.v = Core.COOKIE_VERSION)
            }
            misc[tempName] = tempValue,
            value = Core.object2String(misc)
        }
        domain = "." + Core.DOMAIN,
        expires = Core.getExpDate(30, 0, 0),
        document.cookie = name + "=" + escape($.trim(value)) + (expires ? "; expires=" + expires: "") + (path ? "; path=" + path: "") + (domain ? "; domain=" + domain: "") + (secure ? "; secure": "")
    },
    getExpDate: function(e, t, n) {
        var r = new Date;
        if (typeof e == "number" && typeof t == "number" && typeof t == "number") return r.setDate(r.getDate() + parseInt(e)),
        r.setHours(r.getHours() + parseInt(t)),
        r.setMinutes(r.getMinutes() + parseInt(n)),
        r.toGMTString()
    },
    resize: function(e) {
        $("#tps").hide(),
        Core.bodyWidth = document.documentElement.clientWidth,
        Core.bodyHeight = document.documentElement.clientHeight,
        Core.MAX_OVERLAY_HEIGHT = Core.bodyHeight - 90,
        Core.FS_HEIGHT = Core.bodyHeight - 75 - 3,
        $("#gnsCttCt").css({
            width: Core.bodyWidth - 112 + "px"
        }),
        Core.isFullScren && Guide.resize();
        switch (Interface.Current) {
        case Interface.LOGIN:
            Signup.resize();
            break;
        case Interface.MAIN:
            Overlay.resize(),
            Player.resize(),
            $("#topApp").isDisplay() && Top.resize();
            break;
        case Interface.SEARCH:
            Search.resize();
            break;
        case Interface.JING:
        }
    },
    strLength: function(e) {
        var t = 0;
        for (var n = 0; n < e.length; n++) e.charCodeAt(n) > 256 ? t += 2 : t++;
        return t
    },
    objLength: function(e) {
        var t = 0;
        for (var n in e)++t;
        return t
    },
    objClone: function(e, t) {
        result = new t;
        for (var n in e) result[n] = e[n];
        return result
    },
    inputConver: function(e) {
        $("body").append('<p id="inputConver"></p>'),
        $("#inputConver").text(e);
        var e = $("#inputConver").html();
        return $("#inputConver").remove(),
        e
    },
    badgesUrl: function(e, t) {
        return Retina.enabled ? "../images/badges/" + t + "@2x/" + e + ".jpg": "../images/badges/" + t + "/" + e + ".jpg"
    },
    imgLoad: function(e, t, n, r, i) {
        e.attr({
            width: r + "px",
            height: r + "px"
        }).css({
            width: r + "px",
            height: r + "px"
        });
        var s = new Image;
        s.obj = e,
        s.wh = r,
        s.st = t,
        s.type = i,
        s.onload = function() {
            var e = 0;
            this.type == "frd" ? e = Frd.st: e = Overlay.result.st;
            if (this.st != "" && this.st != e) return;
            var t = this.width,
            n = this.height,
            i = "",
            s = 0;
            t < n ? (n = parseInt(this.wh / t * n), i = "top", t = this.wh) : t > n ? (t = parseInt(this.wh / n * t), i = "left", n = this.wh) : (t = this.wh, n = this.wh),
            r == 30 ? s = 1 : r == 64 && (s = 2),
            s = 0,
            this.obj.attr({
                width: t + "px",
                height: n + "px"
            }),
            this.obj.css({
                width: t + "px",
                height: n + "px"
            }),
            i == "top" ? this.obj.css({
                top: -((n - this.wh) / 2) + "px",
                left: s + "px"
            }) : i == "left" ? this.obj.css({
                left: -((t - this.wh) / 2) + "px",
                top: s + "px"
            }) : this.obj.css({
                left: s + "px",
                top: s + "px"
            }),
            this.obj.attr("src", this.src)
        };
        if (n == null || n == "" || n == "null") return;
        n.indexOf("http://") != 0 && (n = $.id2url(n, "image", $.wh2Thumbtype(r), "avatar")),
        s.src = n
    },
    isEmpty: function(e) {
        return e == null || e == undefined || e == "" ? !0 : !1
    },
    object2String: function(e) {
        var t, n = "";
        if (e) {
            n += "{";
            for (var r in e) {
                t = e[r];
                switch (typeof t) {
                case "object":
                    t[0] ? n += "'" + r + "':" + Core.array2String(t) + ",": n += "'" + r + "':" + Core.object2String(t) + ",";
                    break;
                case "string":
                    n += "'" + r + "':'" + t + "',";
                    break;
                default:
                    n += r + ":" + t + ","
                }
            }
            n = n.substring(0, n.length - 1) + "}"
        }
        return n
    },
    array2String: function(e) {
        var t, n = "";
        if (e) {
            n += "[";
            for (var r in e) {
                t = e[r];
                switch (typeof t) {
                case "object":
                    t[0] ? n += Core.array2String(t) + ",": n += Core.object2String(t) + ",";
                    break;
                case "string":
                    n += "'" + t + "',";
                    break;
                default:
                    n += t + ","
                }
            }
            n = n.substring(0, n.length - 1) + "]"
        }
        return n
    },
    playerCDShow: function() {
        $("html").isClass("gecko") ? $("#mscPlrCtn, #rotateFlash").css({
            visibility: "visible"
        }) : $("#mscPlrCtn").show()
    },
    playerCDHide: function() {
        $("html").isClass("gecko") ? $("#mscPlrCtn, #rotateFlash").css({
            visibility: "hidden"
        }) : $("#mscPlrCtn").hide()
    },
    fullScrenMenuShow: function(e, t) {
        $("#mainMenuCtn").animate({
            bottom: "-75px"
        },
        300,
        function() {
            $(this).hide();
            var n = 170;
            t == "flwLstn" && (e += '<span class="spl"></span><a href="#" id="clsFlwLstn" class="clsFlwLstn overlay">关闭跟听</a>'),
            $("#tbCtn").append('<div id="fsappMenu" class="fsappTit" style="bottom:-75px; visibility:hidden"><a class="rndBtn ' + t + '" href="#"></a>' + '<p class="ctt">' + e + "</p>" + "</div>"),
            t == "flwLstn" && (n = $("#fsappMenu .ctt").width() + 40),
            $("#fsappMenu").css("width", n + "px"),
            $("#fsappMenu").css("visibility", "visible"),
            setTimeout(function() {
                $("#fsappMenu").animate({
                    bottom: "-14px"
                },
                300)
            },
            300)
        })
    },
    fullScrenMenuHide: function() {
        $("#fsappMenu").animate({
            bottom: "-75px"
        },
        300,
        function() {
            $(this).remove(),
            $("#mainMenuCtn").show().animate({
                bottom: "-14px"
            },
            300)
        })
    },
    getDate: function() {
        var e = new Date,
        t = e.getYear() + 1900;
        if ($("html").isClass("ie8") || $("html").isClass("ie7") || $("html").isClass("ie6")) t = e.getYear();
        return t + "-" + (e.getMonth() + 1) + "-" + e.getDate() + " " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds()
    },
    isNewIcon: function(e, t) {
        var n = Signup.userDetail.newview;
        for (var r in n) if (r == e) for (var i = 0; i < n[r].length; ++i) if (n[r][i] == t) return ! 0;
        return ! 1
    },
    isNewBdg: function(e, t) {
        e += "";
        var n = Signup.userDetail.newview.b;
        for (var r = 0; r < n.length; ++r) {
            var i = n[r].split("-");
            for (var s = 0; s < i.length; ++s) if (i[s] == e) return t == 1 && (Signup.userDetail.newview.b = Signup.userDetail.newview.b.slice(0, r).concat(Signup.userDetail.newview.b.slice(r + 1))),
            !0
        }
        return ! 1
    },
    ulNewIcon: function(e, t) {
        var n = Signup.userDetail.newview;
        t = t.split("-")[t.split("-").length - 1];
        for (var r = 0; r < n[e].length; ++r) {
            var i = n[e][r].split("-")[n[e][r].split("-").length - 1];
            if (i == t) {
                Signup.userDetail.newview[e] = n[e].slice(0, r).concat(n[e].slice(r + 1)),
                n[e] = n[e].slice(0, r).concat(n[e].slice(r + 1)),
                --r;
                break
            }
        }
        $.ajax({
            url: Core.API_VER + "/app/post_known_app",
            data: {
                uid: Signup.userDetail.id,
                t: e,
                mids: t
            }
        })
    },
    overlayAppsJump: function(e, t) {
        Overlay.rootId = e;
        var n = Core.bodyWidth - $("#" + e).offset().left - 22;
        if ($("#appsCtn").isDisplay()) {
            $("#rightAr").animate({
                right: n + "px"
            },
            {
                queue: !1,
                duration: 300
            }),
            $("#" + e).addClass("selected");
            for (var r in resRoot) r != e && resRoot[e] == resRoot[r] && $("#" + r).removeClass("selected")
        } else $("#rightAr").css({
            right: n + "px"
        }),
        $("#" + e).addClass("selected"),
        $("#appsCtn, #rightAr").show();
        $(".drgbEvt").each(function() {
            $(this).remove()
        }),
        Overlay.brdChildClick("", t)
    },
    uploadify: function(action) {
        $("#uploadify").uploadify({
            formData: {
                uid: Signup.userDetail.id,
                atoken: Core.getCookie("jing.auth").split(",")[0],
                rtoken: Core.getCookie("jing.auth").split(",")[1]
            },
            uploader: "/api/v1/user/avatar/avatarupload",
            swf: "/js/vendor/uploadify.swf",
            auto: !0,
            buttonText: "上传头像",
            fileObjName: "file",
            width: 252,
            multi: !1,
            height: 52,
            onSWFReady: function() {
                $("#SWFUpload_0").css("left", "10px")
            },
            onDialogOpen: function() {
                $("#uploadify-button").addClass("selected"),
                $("#uploadify-button").children("span").text("正在打开")
            },
            onDialogClose: function() {
                $("#uploadify-button").removeClass("selected"),
                $("#uploadify-button").children("span").text("上传头像")
            },
            onUploadStart: function(e) {
                $("#uploadify-button").children("span").text("上传中，请稍侯...")
            },
            onUploadSuccess: function(file, response, data) {
                var $obj = $("#uploadify-button").children("span");
                response = eval("(" + response + ")"),
                console.log(response);
                if (response.success) {
                    $obj.text("上传成功"),
                    Signup.userDetail.fid = response.result;
                    var url = $.id2url(response.result, "image", "US", "avatar");
                    Interface.Current == Interface.LOGIN ? $("#localAvt").attr("src", url + "&random=" + Math.random()) : ($("#Local").children("img").attr("src", url + "&random=" + Math.random()), $("#Local").parent().find(".selected").length || ($("#appsCttCtn").find(".selected").remove(), $("#Local").parent().append("<span class='selected'></span>")))
                } else response.code == "312" ? $obj.text("图片格式仅支持jpg,png,bmp，请重传") : $obj.text("上传失败");
                Signup.timeOutId = setTimeout(function() {
                    $obj.unbind("mouseover"),
                    $obj.text("上传头像")
                },
                5e3),
                $("#uploadify-button").bind("mouseover",
                function() {
                    clearTimeout(Signup.timeOutId),
                    $(this).text("上传头像"),
                    $obj.unbind("mouseover")
                })
            }
        })
    }
},
Interface = {
    Current: 2,
    MAIN: 0,
    SEARCH: 1,
    LOGIN: 2,
    JING: 3
},
NOW_URL = "http://zoro.jing.fm",
MEDIA_URL = "",
res = new Object,
SnsArr = new Array("qq", "wb", "rr", "db"),
resRoot = new Object;
resRoot.tkrs = !1,
resRoot.apps = !1,
resRoot.frdCt = !1;
var URL = 0,
PARENT = 1,
MARK = 2,
NAME = 3,
HTML_POS = 4,
resData = new Object,
resUrl = new Object;
resUrl.qq = Core.API_VER + "/oauth/fetch_friends?uid={id}&identify=qq_weibo",
resUrl.rr = Core.API_VER + "/oauth/fetch_friends?uid={id}&identify=renren",
resUrl.db = Core.API_VER + "/oauth/fetch_friends?uid={id}&identify=douban",
resUrl.wb = Core.API_VER + "/oauth/fetch_friends?uid={id}&identify=sina_weibo",
resUrl.olFrd = Core.API_VER + "/account/fetch_online_friends?uid={id}",
resUrl.inHs = Core.API_VER + "/account/fetch_friends?uid={id}",
resUrl.rbsFrd = Core.API_VER + "/account/fetch_block_friends?uid={id}",
resUrl.info = Core.API_VER + "/account/fetch_profile?uid={id}",
resUrl.avt = Core.API_VER + "/account/fetch_avatar?uid={id}",
resUrl.lnk = Core.API_VER + "/account/fetch_links?uid={id}",
resUrl.love = Core.API_VER + "/music/fetch_favorites?uid={id}",
resUrl.hate = Core.API_VER + "/music/fetch_hates?uid={id}",
resUrl.sns = Core.API_VER + "/setting/fetch_settings?uid={id}&t=sns",
resUrl.taskGnsApp = Core.API_VER + "/setting/fetch_settings?uid={id}&t=taskGnsApp",
resUrl.ntfct = Core.API_VER + "/setting/fetch_settings?uid={id}&t=ntfct",
resUrl.thm = Core.API_VER + "/setting/fetch_settings?uid={id}&t=thm",
resUrl.dsply = Core.API_VER + "/setting/fetch_settings?uid={id}&t=dsply",
resUrl.chtApp = Core.API_VER + "/chat/fetch_chatlist?uid={id}";
var ConverSns = new Object;
ConverSns.extQq = "qq",
ConverSns.extRr = "rr",
ConverSns.extWb = "wb",
ConverSns.extDb = "db",
ConverSns.qq = "extQq",
ConverSns.rr = "extRr",
ConverSns.wb = "extWb",
ConverSns.db = "extDb",
ConverSns.qq1 = "qq_weibo",
ConverSns.rr1 = "renren",
ConverSns.db1 = "douban",
ConverSns.wb1 = "sina_weibo",
ConverSns.renren = "rr",
ConverSns.sina_weibo = "wb",
ConverSns.qq_weibo = "qq",
ConverSns.douban = "db";
var snsWindowWh = new Object;
snsWindowWh.extQq = new Array(812, 807),
snsWindowWh.extRr = new Array(981, 523),
snsWindowWh.extWb = new Array(590, 435),
snsWindowWh.extDb = new Array(590, 435),
resUrl.tkrs = Core.API_VER + "/ticker/fetch_recents?uid={id}",
resUrl.skl = Core.API_VER + "/school/fetch_badges?uid={id}&t=skl",
resUrl.gnr = Core.API_VER + "/school/fetch_badges?uid={id}&t=gnr",
resUrl.mood = Core.API_VER + "/school/fetch_badges?uid={id}&t=mood",
resUrl.stt = Core.API_VER + "/school/fetch_badges?uid={id}&t=stt",
resUrl.ats = Core.API_VER + "/school/fetch_badges?uid={id}&t=ats",
resUrl.sch = Core.API_VER + "/task/fetch_available?uid={id}",
resUrl.invtApp = Core.API_VER + "/app/fetch_invitations?uid={id}",
resUrl.fltrApp = Core.API_VER + "/account/filter/fetch_filter_tags?uid={id}",
resUrl.mtFrds = Core.API_VER + "/account/fetch_mtknown_friends?uid={id}";
var resHtml = new Array;
resHtml[0] = "",
resHtml[1] = "Overlay.menuHtml",
resHtml[2] = "Apps.infoHtml",
resHtml[3] = "Apps.avtHtml",
resHtml[4] = "Apps.firendHtml",
resHtml[5] = "Apps.pwdHtml",
resHtml[6] = "Apps.lnkHtml",
resHtml[7] = "Apps.loveHtml",
resHtml[8] = "Apps.hateHtml",
resHtml[9] = "Apps.tkrsHtml",
resHtml[11] = "Apps.snsHtml",
resHtml[13] = "Apps.stctAppHtml",
resHtml[14] = "Apps.taskGnsAppHtml",
resHtml[15] = "Apps.invtAppHtml",
resHtml[16] = "Apps.ntfctHtml",
resHtml[17] = "Apps.fltrAppHtml",
resHtml[18] = "Apps.thmHtml",
resHtml[19] = "Apps.prsntHtml",
resHtml[20] = "Apps.chtAppHtml",
resHtml[21] = "Apps.mtFrdsHtml",
resHtml[22] = "Apps.dsplyHtml";
var resStyle = new Object;
resStyle.mscSch = new Array(130, 129, 1, 3),
resStyle.tkrs = new Array(250, 87, 3, 2, 50),
resStyle.apps = new Array(130, 129, 1, 3),
resStyle.frdCt = new Array(130, 129, 1, 3),
resStyle.st = new Array(130, 129, 1, 3),
resStyle.sch = new Array(390, 83, 1, 1),
resStyle.skill = new Array(130, 129, 1, 3),
resStyle.love = new Array(390, 77, 3, 1, 50),
resStyle.hate = new Array(390, 77, 3, 1, 50),
resStyle.sns = new Array(390, 86, 1, 1),
resStyle.taskGnsApp = new Array(390, 71, 1, 1),
resStyle.pwd = new Array(390, 142, 0),
resStyle.ext = new Array(130, 129, 1, 3),
resStyle.stctApp = new Array(390, 260, 0),
resStyle.invtApp = new Array(390, 77, 2, 1, 125),
resStyle.ntfct = new Array(390, 71, 1, 1),
resStyle.dsply = new Array(390, 71, 1, 1),
resStyle.fltrApp = new Array(390, 77, 0),
resStyle.thm = new Array(390, 71, 3, 1),
resStyle.prsnt = new Array(390, 198, 0),
resStyle.chtApp = new Array(390, 74, 3, 1),
resStyle.mtFrds = new Array(390, 77, 0),
resStyle.skl = new Array(130, 129, 3, 3, 50),
resStyle.gnr = new Array(130, 129, 3, 3, 50),
resStyle.mood = new Array(130, 129, 3, 3, 50),
resStyle.stt = new Array(130, 129, 3, 3, 50),
resStyle.ats = new Array(130, 129, 3, 3, 50),
resStyle.info = new Array(390, 283, 0),
resStyle.avt = new Array(130, 129, 2, 3, 130),
resStyle.lnk = new Array(390, 51, 2, 1, 77);
var Thm = new Array;
Thm[0] = new Array("jzwd", "爵士印象"),
Thm[1] = new Array("rdpnk", "橙色年华"),
Thm[2] = new Array("dflt", "淡淡时光"),
Thm[3] = new Array("blkstn", "黑色迷墙"),
Thm[4] = new Array("lthbg", "复古质感"),
Thm[5] = new Array("ctwd", "雕刻时光"),
Thm[6] = new Array("rlwd", "一叶知秋");
var taskStyle = new Object;
taskStyle.at = 206,
taskStyle.stct = 177,
taskStyle.instSch = 177,
taskStyle.psnRd = 105,
taskStyle.fltr = 162,
taskStyle.prfsMsc = 198,
taskStyle.smlMsc = 105;
var resEmail = new Object;
resEmail.gm = "Gmail",
resEmail.yh = "Yahoo",
resEmail.ht = "Hotmail";
var resSns = new Object;
resSns.extQq = "qq_weibo",
resSns.extRr = "renren",
resSns.extWb = "sina_weibo",
resSns.extDb = "douban";
var bdgId = new Object;
bdgId.skl = "",
bdgId.gnr = "",
bdgId.mood = "",
bdgId.stt = "",
bdgId.ats = "";
var btnDes = new Object;
btnDes.mscSch = "音乐中心",
btnDes.gns = "Genius",
btnDes.playCtlPlay = "播放",
btnDes.playCtlPause = "暂停",
btnDes.next = "换歌",
btnDes.tkrs = "Ta们在听",
btnDes.apps = "我的应用",
btnDes.frdCt = "好友中心",
btnDes.menuMore = "下一页",
btnDes.menuRfrsh = "刷新",
btnDes.menuLove = "收听自己",
btnDes.menuVo = "语音说明",
btnDes.signUp = "注册",
btnDes.signIn = "登录",
btnDes.snsRenren = "人人网登录",
btnDes.renren = "人人网",
btnDes.snsSina = "微博登录",
btnDes.sina_weibo = "新浪微博",
btnDes.snsQQ = "腾讯登录",
btnDes.qq_weibo = "腾讯微博",
btnDes.snsDouban = "豆瓣登录",
btnDes.douban = "豆瓣网";
var FrdDes = new Object;
FrdDes.olFrd = "好友在线",
FrdDes.inHs = "入驻好友",
FrdDes.rbsFrd = "被删除的好友",
FrdDes.qq = "腾讯微博好友",
FrdDes.rr = "人人好友",
FrdDes.wb = "微博好友",
FrdDes.db = "豆瓣好友",
FrdDes.mtFrds = "你可能认识的人";
var lnkStyle = new Object;
lnkStyle["twitter.com"] = "twt",
lnkStyle["facebook.com"] = "fb",
lnkStyle["blogger.com"] = "blg",
lnkStyle["tumblr.com"] = "tmblr",
lnkStyle["youTube.com"] = "ytb";
var Symbol = new Object;
Symbol["+"] = "+",
Symbol["="] = "+",
Symbol["＋"] = "+",
Symbol["＝"] = "+",
Symbol["-"] = "-",
Symbol["－"] = "-",
Symbol["＿"] = "-",
Symbol["&"] = "&",
Symbol[" + "] = "",
Symbol[" - "] = "",
Symbol[" & "] = "";
var Emj = new Object;
Emj.tst = "1",
Emj.wzb = "2",
Emj.dx = "3",
Emj.k = "4",
Emj.bj = "5",
Emj.by = "6",
Emj.lh = "7",
Emj.ks = "8",
Emj.wq = "9",
Emj.jy = "10",
Emj.n = "11",
Emj.bb = "12",
Emj.pz = "13",
Emj.l = "14";
var initImg = new Array("tipBg.png", "tipElm.png", "typing.gif", "thms.png", "switch.png", "gnsBg.jpg", "defaults/cover/300.jpg", "defaults/cover/cv.jpg", "defaults/avatar/" + Core.A30 + ".jpg", "defaults/avatar/" + Core.A50 + ".jpg", "defaults/avatar/" + Core.A64 + ".jpg"),
Init = {};
$(function() { ($("html").attr("now_time") == undefined || $("html").attr("now_time") == "") && $("html").attr("now_time", (new Date).getTime()),
    $.query.get(Core.JingATokenHeader) != "" && Core.setCookie("jing.auth", $.query.get(Core.JingATokenHeader) + "," + $.query.get(Core.JingRTokenHeader));
    var e = Core.getCookie("jing.auth"),
    t = "",
    n = "";
    e != null && e != "" && (t = e.split(",")[0], n = e.split(",")[1]),
    $.ajaxSetup({
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        type: "POST",
        dataType: "json",
        headers: {
            "Jing-A-Token-Header": t,
            "Jing-R-Token-Header": n
        },
        async: !0
    }),
    Core.ipad && ($("body").append('<div id="bg" style="width:100%; height:100%; position:absolute; z-index:1"></div>'), fingerGestureListener($("body")[0],
    function(e) {}), fingerGestureListener($("#bg")[0],
    function(e) {})),
    !swfobject.ua.pv[0] && (Core.ie68 || Core.gecko || Core.opera) && (window.location.href = "/noflash.html"),
    Retina.init(),
    Retina.enabled && $("img[src='images/defaults/avatar/64.jpg']").attr("src", "images/defaults/avatar/" + Core.A64 + ".jpg");
    if (window.console == undefined) {
        var r = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml", "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];
        window.console = {};
        for (var i = 0; i < r.length; ++i) window.console[r[i]] = function() {}
    }
    setInterval(function() {
        if (Cht.offlineCount == 0) {
            document.title = "Jing+ Music";
            return
        }
        document.title == "[新消息] Jing+ Music" ? document.title = "Jing+ Music": document.title = "[新消息] Jing+ Music"
    },
    2e3),
    Core.init(),
    Signup.init(),
    $("#maskUserMenu").click(function() {
        $("#guide").isDisplay() ? $("#step2").isDisplay() ? Gns.nowGns("点击你喜欢的组合开始音乐旅程") : Gns.nowGns("点击左侧 我知道啦 － 完成此步骤！到下一步") : $("#smlGuide").isDisplay() || $("#psnRdGuide").isDisplay() ? Gns.nowGns("请点击 我知道了 关闭引导") : Gns.nowGns('请点击右上角的 X 关闭应用，或 <a href="#" class="trg closeFullScreenEvt">点此处直接关闭</a>')
    }),
    $(document).click(function() {
        $("#atSgstCtn").hide();
        if (Core.isFullScren) return;
        if (Core.isOverlay) return Core.isOverlay = !1,
        !0;
        $("#tps").hide();
        switch (Interface.Current) {
        case Interface.MAIN:
            Gns.openGnsArr = new Array,
            Gns.closeGns(),
            Main.hide();
            break;
        case Interface.SEARCH:
            Interface.Current = Interface.MAIN,
            Main.hide(),
            Search.hide(),
            $("#schFld").blur();
            break;
        case Interface.LOGIN:
            $("#signUpCtn").isDisplay() && ($("#tps").hide(), $("#signUp").isClass("selected") ? $("#signUp").click() : $("#signIn").click());
            break;
        case Interface.JING:
            Interface.Current = Interface.MAIN,
            $("#logo").removeClass("selected"),
            $("#rlsCtn").hide(),
            Main.hide(),
            Search.hide()
        }
    }).mousemove(function(e) {
        e = e || window.event;
        if (e.pageX || e.pageY) Core.mouseX = e.pageX,
        Core.mouseY = e.pageY;
        Core.mouseX = e.clientX + document.body.scrollLeft - document.body.clientLeft,
        Core.mouseY = e.clientY + document.body.scrollTop - document.body.clientTop,
        Overlay.dragId >= 0 && Overlay.mousemove()
    }).mouseup(function(e) {
        Overlay.dragId >= 0 && ($("html").isClass("ie") && (Core.isOverlay = !0), Overlay.mouseup())
    }),
    key("delete",
    function() {
        Interface.Current == Interface.MAIN && !Core.isFullScren && $("#playerHate").click()
    }),
    key("c",
    function() {
        Interface.Current == Interface.MAIN && !Core.isFullScren && ($("#apps").isClass("selected") || $("#apps").click())
    }),
    key("s",
    function() {
        if (Interface.Current == Interface.MAIN && !$("#playerPsnRd").isClass("selected") && !Core.isFullScren && (!Flw.isFlw || Flw.toid == "")) return $("#schBxCtn").click(),
        !1
    }),
    key("t",
    function() {
        Interface.Current == Interface.MAIN && !Core.isFullScren && $("#playerHate").click()
    }),
    key("x",
    function() {
        Interface.Current == Interface.MAIN && !Core.isFullScren && $("#playerLove").click()
    }),
    key("space",
    function() {
        Interface.Current == Interface.MAIN && !$("#topApp").isDisplay() && (!Flw.isFlw || Flw.toid == "") && Player.playCtl()
    }),
    Core.ie68 && $("#vlmCtrl").removeClass("dspr"),
    key("up",
    function() {
        if (Flw.isFlw && Flw.toid != "") {
            Gns.nowGns("你正在跟听状态中，将跟对方音量同步，不能自己调节");
            return
        }
        if (Interface.Current == Interface.MAIN) {
            var e = Player.volume + .2;
            e > 1 && (e = 1),
            Flw.isServer && Flw.send("volume," + e),
            Player.setVolume(e),
            Player.volume = e
        }
    }),
    key("down",
    function() {
        if (Flw.isFlw && Flw.toid != "") {
            Gns.nowGns("你正在跟听状态中，将跟对方音量同步，不能自己调节");
            return
        }
        if (Interface.Current == Interface.MAIN) {
            var e = Player.volume - .2;
            e < .2 && (e = .05),
            Flw.isServer && Flw.send("volume," + e),
            Player.setVolume(e),
            Player.volume = e
        }
    }),
    key("right",
    function() {
        if (Interface.Current == Interface.MAIN && !$("#topApp").isDisplay() && (!Flw.isFlw || Flw.toid == "") || $("#playerPsnRd").isClass("selected")) Player.postNext(),
        Player.next()
    }),
    key("esc",
    function() {
        return $("#topApp").isDisplay() ? $("#topApp>.cls").click() : $("#shrGuide").isDisplay() ? $("#shrGuide>.cls").click() : $("#rlsNote").isDisplay() && $("#rlsNote>.cls").click(),
        !1
    })
});
var Main = {
    st: 0,
    init: function() {
        Now.init(),
        Message.init(),
        Player.init(),
        Search.init(),
        Player.load(),
        Overlay.init(),
        Apps.init(),
        Top.init(),
        Gns.init(),
        Cht.init(),
        Guide.init(),
        Flw.init(),
        Frd.init(),
        Core.ipad && (fingerGestureListener($(".mscPlrMask")[0],
        function(e) {
            e.direction == "middle" && Player.playCtl(),
            (Interface.Current == Interface.MAIN && Signup.userDetail.avbF.stct != undefined && !$("#topApp").isDisplay() || $("#playerPsnRd").isClass("selected")) && e.direction == "left" && Player.next()
        }), fingerGestureListener($(".slide")[0],
        function(e) {
            if (e.status == "start") {
                Top.ipadleft = $("#topApp .slide").offset().left;
                return
            }
            var t = Top.ipadleft + e.dx,
            n = 0,
            r = $("#topApp .slide").width() - Core.bodyWidth;
            e.status == "move" ? ($(".slide").removeClass("slideAnmt"), n = Core.bodyWidth / 4, r += Core.bodyWidth / 4) : e.status == "end" && ($(".slide").addClass("slideAnmt"), t += e.dx * .5),
            t > n && (t = n),
            -t > r && (t = -r),
            $("#topApp .slide").css("left", t + "px")
        })),
        $("#logo").click(function() {
            $.ajax({
                url: Core.API_VER + "/app/fetch_release",
                success: function(e) {
                    if (!e.sucess && e.result == null) return;
                    $("#rlsNote .rlsCtn .cnfmBtn").hide(),
                    Guide.rlsShow(e.result)
                }
            })
        }),
        $("#rlsLeftBtn").click(function() {
            Main.st > 0 && (--Main.st, Main.jingClick())
        }),
        $("#rlsRightBtn").click(function() {++Main.st,
            Main.jingClick()
        })
    },
    jingClick: function() {
        $.ajax({
            url: Core.API_VER + "/app/fetch_release",
            data: {
                st: Main.st
            },
            success: function(e) {
                if (!e.success) return;
                if (e.result == null) {--Main.st;
                    return
                }
                var t = "",
                n = e.result.content.split("\n");
                for (var r = 0; r < n.length; ++r) t == "" && (t += '<p class="rlsElm"></p>'),
                t += '<p class="rlsElm"><span class="rlsElmNum serif">' + (r + 1) + ".</span>" + n[r] + "</p>";
                $("#rlsTmst").html(e.result.released_at),
                $("#rlsTit").html("Jing.fm " + e.result.title),
                $("#rlsBd").html(t),
                $("#rlsCtn").css({
                    visibility: "hidden"
                }).show(),
                $("#rlsCtn").css({
                    "margin-top": "-" + ($("#rlsCtn").height() / 2 + 70) + "px",
                    visibility: "visible"
                })
            }
        })
    },
    hide: function(e) {
        $("#ppLsted").isDisplay() && $("#ppLsted").animate({
            opacity: "0"
        },
        300,
        function() {
            $(this).children(".ovlCttCtn").css({
                "margin-top": "-125px",
                height: "180px"
            }).children(".ovlCtt").remove(),
            $(this).hide()
        }),
        $("#mscInfo").isDisplay() && $("#mscInfo").animate({
            opacity: "0"
        },
        300,
        function() {
            $(this).hide(),
            $("#mscInfoCtn").children("div").empty(),
            $(".tabCtn").each(function() {
                $(this).removeClass("selected")
            })
        }),
        $("#mscMv").isDisplay() && $("#mscMv").animate({
            opacity: "0"
        },
        300,
        function() {
            $(this).hide(),
            $("#mvPlayer").html(),
            Player.isPlay || $("#playCtl").click(),
            Player.setVolumeUp()
        });
        for (var t in resRoot) {
            if (t == e) continue;
            $("#" + t).isClass("selected") && $("#" + t).click()
        }
    }
},
Signup = {
    FAV_LIST: 15,
    MORE_POS: 10,
    more_POS: 14,
    MIN_HEIGHT: 750,
    ACTION: 0,
    SIGN_UP: 1,
    SIGN_IN: 2,
    CHECK_EMAIL: 3,
    isCheckEmail: 0,
    timeOutId: 0,
    tpsTmo: 0,
    onlineCount: 0,
    resetPwdToken: "",
    userDetail: {
        id: "",
        nick: "",
        fid: "",
        snsId: "",
        snsType: "",
        newbie: 0,
        c: 0,
        invitation: "",
        k: "",
        pld: null,
        sts: null,
        menu: "",
        avbF: new Object,
        newview: new Object
    },
    init: function() {
        var e = function() {
            var e = window.location + "";
            $.query.get("forgot") != "" ? (Signup.resetPwdToken = $.query.get("forgot"), $.ajax({
                url: Core.API_VER + "/account/verify_forgot_token",
                data: {
                    token: Signup.resetPwdToken
                },
                success: function(e) {
                    e.success || (Signup.resetPwdToken = ""),
                    Signup.switchAnimate("resetPwdCtn")
                }
            })) : e != undefined && e.indexOf("?") != -1 && (Signup.userDetail.invitation = e.substring(e.indexOf("?") + 1), $.ajax({
                url: Core.API_VER + "/account/verify_invitation",
                data: {
                    invt: Signup.userDetail.invitation
                },
                success: function(e) {
                    e.success ? $("#signUpCtn").isDisplay() || setTimeout(function() {
                        $("#signUp").click()
                    },
                    300) : Signup.userDetail.invitation = ""
                }
            }))
        };
        Core.getCookie("jing.auth") != "" && Core.getCookie("jing.auth") != null ? $.ajax({
            url: Core.API_VER + "/sessions/validates",
            data: {
                i: ""
            },
            success: function(t, n, r) {
                t.success ? (clearTimeout(Signup.tpsTmo), Signup.setUserDetail(t.result, n, r), Signup.finishClick()) : e()
            }
        }) : e(),
        $(".bdgCtn").css({
            left: 800 + (Core.bodyWidth - 800) / 2 + "px"
        }),
        $("#bdgStr").css({
            left: -((Core.bodyWidth - 800) / 2 + 550) + "px"
        }),
        $("#fvtAtsCtn").css({
            bottom: -((Core.bodyHeight - 512) / 2 + 75 + 420) + "px"
        }),
        $("#bindCtn").css({
            bottom: -((Core.bodyHeight - 404) / 2 + 75 + 375) + "px"
        }),
        $("#cmpltSignupCtn").css({
            bottom: -((Core.bodyHeight - 335) / 2 + 75 + 305) + "px"
        }),
        $("#invt, #fgtCtn, #resetPwdCtn").css({
            bottom: -((Core.bodyHeight - 219) / 2 + 75 + 219) + "px"
        }),
        $(".signUpMenuBtn").bind("click",
        function() {
            $("#tps").hide();
            if ($("#signUpCtn").length == 0) return;
            var e, t;
            $(this).attr("id").indexOf("signUp") >= 0 ? (e = "signUp", t = "signIn") : (e = "signIn", t = "signUp");
            if ($(this).isClass("selected")) {
                if (Signup.userDetail.invitation == "" && e == "signUp") {
                    $("#bdgCtn").css({
                        top: $("#bdgCtn").offset().top,
                        "margin-top": "0px"
                    }),
                    $("#bdgCtn").animate({
                        height: "70px",
                        top: (Core.bodyHeight - 70 - 75) / 2 + "px",
                        "margin-top": "0px"
                    }),
                    $("#invt").animate({
                        bottom: -((Core.bodyHeight - 219) / 2 + 75 + 219) + "px"
                    },
                    300,
                    function() {
                        $(this).hide()
                    }),
                    $(this).removeClass("selected");
                    return
                }
                $(this).removeClass("selected");
                var n = !1,
                r = $("#signUpCtn").offset().top,
                i = $("#bdgCtn").offset().top;
                $("#signUpCtn").animate({
                    bottom: "-300px"
                },
                300,
                function() {
                    $("#signUpCtn").hide()
                }),
                Core.bodyHeight < Signup.MIN_HEIGHT && $("#bdgCtn").animate({
                    top: (Core.bodyHeight - 70 - 75) / 2 + "px"
                },
                300)
            } else $(this).addClass("selected"),
            $("#" + t).removeClass("selected"),
            Signup.signupAnimate(e, t);
            return ! 1
        }),
        $("#signUpEmail, #signInEmail, #invtEmail, #fgtEmail").blur(function() {
            $(".wb").removeClass("selected");
            var e = $(this),
            t = $(this).val();
            if (t == "") return;
            if (t == "你的Email") $("#snsEmail").attr("error", "邮箱不能为空");
            else if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(t)) Signup.tpsShow($(this), "邮箱格式错误"),
            $(this).attr("error", "邮箱格式错误");
            else {
                $(this).attr("error", "");
                if ($(this).attr("id") == "signInEmail" || $(this).attr("id") == "fgtEmail") {
                    $("#tps").hide();
                    return
                }
                $.ajax({
                    url: Core.API_VER + "/account/check_email",
                    data: {
                        email: t
                    },
                    success: function(t) {
                        t.success ? ($("#tps").hide(), e.attr("error", "")) : (e.attr("error", "邮箱已经被人注册"), Signup.tpsShow(e, "邮箱已经被人注册"))
                    }
                })
            }
        }),
        $("#resetPwd").prev().click(function() {
            $(this).next().focus()
        }),
        $("#resetPwd").focus(function() {
            $(this).prev().hide()
        }).blur(function() {
            $(this).val().length == 0 && $(this).prev().show()
        }).keyup(function(e) {
            e.keyCode == 13 && ($(this).blur(), $("#resetPwdBtn").click())
        }),
        $("#signUpPwd, #signInPwd").blur(function() {
            $(".wb").removeClass("selected");
            var e = $(this).val();
            e == "输入你的密码" ? $(this).attr("error", "密码不能为空") : e.length < 6 ? ($(this).attr("error", "密码必须6位以上"), Signup.tpsShow($(this), "密码必须6位以上")) : ($("#tps").hide(), $(this).attr("error", ""))
        }).keyup(function(e) {
            e.keyCode == 13 && ($(this).blur(), $("#" + $(this).attr("id").replace("Pwd", "") + "Cmt").click())
        }),
        $("#signUpCmt").click(Signup.signUpCmtClick),
        $("#signInCmt").click(Signup.signInCmtClick),
        $(".rr, .wb, .qq, .db").click(function() {
            var e = $(this).attr("id"),
            t = "",
            n = "";
            e.indexOf("Renren") >= 0 ? (t = "renren", n = "extRr") : e.indexOf("Sina") >= 0 ? (t = "sina_weibo", n = "extWb") : e.indexOf("Douban") >= 0 ? (t = "douban", n = "extDb") : (t = "qq_weibo", n = "extQq");
            var r = snsWindowWh[n][0],
            i = snsWindowWh[n][1],
            s = (Core.screenWidth - r) / 2,
            o = (Core.screenHeight - i - 68) / 2,
            u = !1;
            Core.ipad && (u = !0);
            var a = Core.API_VER + "/oauth/proxyauthorize?identify=" + t + "&autoclose=" + u + "&standalone=" + Core.standalone;
            u ? window.open(a, "_blank", "width=" + r + "px, height=" + i + "px, left=" + s + "px, top=" + o + "px, directories=0, location=0, menubar=0, resizable=0, status=0, toolbar=0") : Signup.OpenWindow = window.open(a, "_blank", "width=" + r + "px, height=" + i + "px, left=" + s + "px, top=" + o + "px, directories=0, location=0, menubar=0, resizable=0, status=0, toolbar=0")
        }),
        Core.ipad || ($("#snsRenren, #snsSina, #snsQQ, #snsDouban").mouseenter(function() {
            Signup.btnTpsShow($(this))
        }).mouseleave(function() {
            var e = $(this).attr("id");
            btnDes[e] == $("#tps").children(".tpsCtn").children("p").text() && $("#tps").hide()
        }), $("#signIn, #signUp").mouseenter(function() {
            $("#tps").hide(),
            clearTimeout(Signup.tpsTmo);
            if ($(this).isClass("selected") || $("#signUpCtn").isDisplay()) return;
            $(this).children(".tps").show();
            var e = "";
            $(this).attr("id") == "signIn" ? e = "登录": e = "注册",
            Signup.btnTpsShow($(this), e)
        }).mouseleave(function() {
            if ($(this).isClass("selected")) return;
            $("#tps").hide()
        })),
        $("#invtBtn").click(function() {
            if ($("#invtBtn").isClass("selected")) return;
            $("#invtEmail").attr("error") != "" && Signup.tpsShow($("#invtEmail"), $("#invtEmail").attr("error")),
            $("#tps").isDisplay() || ($("#invtBtn").addClass("selected"), $.ajax({
                url: Core.API_VER + "/account/post_invitation",
                data: {
                    email: $("#invtEmail").val()
                },
                success: function(e) {
                    $("#invtEmail").val(""),
                    $("#invtBtn").removeClass("selected"),
                    e.success ? Signup.tpsShow($("#invtEmail"), "邮箱已记录，请耐心等待。") : Signup.tpsShow($("#invtEmail"), e.codemsg)
                }
            }))
        }),
        $("#fgtBtn").click(function() {
            if ($("#fgtBtn").isClass("selected")) return;
            $("#fgtEmail").attr("error") != "" && Signup.tpsShow($("#fgtEmail"), $("#fgtEmail").attr("error")),
            $("#tps").isDisplay() || ($("#fgtBtn").addClass("selected"), $.ajax({
                url: Core.API_VER + "/account/forgot_password",
                data: {
                    email: $("#fgtEmail").val()
                },
                success: function(e) {
                    $("#fgtEmail").val(""),
                    $("#fgtBtn").removeClass("selected"),
                    e.success ? Signup.tpsShow($("#fgtEmail"), "重置密码链接已发送，请查收。") : Signup.tpsShow($("#fgtEmail"), "发送失败，请重试。")
                }
            }))
        }),
        $("#resetPwdBtn").click(function() {
            if ($("#resetPwdBtn").isClass("selected")) return;
            if (Signup.resetPwdToken == "") return;
            $("#resetPwdBtn").addClass("selected"),
            $.ajax({
                url: Core.API_VER + "/account/reset_password",
                data: {
                    pwd: $("#resetPwd").val(),
                    token: Signup.resetPwdToken
                },
                success: function(e) {
                    $("#resetPwd").val(""),
                    $("#resetPwdBtn").removeClass("selected"),
                    e.success ? (Signup.tpsShow($("#resetPwd"), "密码修改成功，请登录。"), setTimeout(function() {
                        $("#signIn").click()
                    },
                    3e3)) : Signup.tpsShow($("#resetPwd"), "密码修改失败，请重试。")
                }
            })
        }),
        $("#fgtPwd").click(function() {
            $("#tps").hide(),
            Signup.switchAnimate("fgtCtn")
        });
        var t = 1,
        n = function() {
            if (t == -1) {
                clearTimeout(Signup.tpsTmo),
                $("#tps").hide("slow");
                return
            }
            t ? (Signup.btnTpsShow($("#signUp"), "注册", "slow"), t = 0) : ($("#tps").hide("slow"), setTimeout(function() {
                Signup.btnTpsShow($("#signIn"), "登录", "slow")
            },
            800), t = -1)
        };
        Signup.tpsTmo = setInterval(n, 5e3),
        n()
    },
    btnTpsShow: function(e, t, n) {
        if (!e.isClass("selected")) {
            $(".wb").removeClass("selected"),
            $("#signIn, #signUp").children(".tps").hide();
            var r = e.attr("id");
            n == undefined && clearTimeout(Signup.tpsTmo),
            t != undefined ? $("#tps").children(".tpsCtn").children("p").text(t) : $("#tps").children(".tpsCtn").children("p").text(btnDes[r]);
            var i = e.offset().left - $("#tps").width() / 2 + 15,
            s = e.offset().top - 60;
            n != undefined ? $("#tps").css({
                left: i,
                top: s + "px"
            }).show("slow") : $("#tps").css({
                left: i,
                top: s + "px"
            }).show()
        }
    },
    signUpCmtClick: function() {
        if ($("#signUpCmt").isClass("selected")) return;
        $("#signUpEmail").attr("error") != "" ? Signup.tpsShow($("#signUpEmail"), $("#signUpEmail").attr("error")) : $("#signUpPwd").attr("error") != "" && Signup.tpsShow($("#signUpPwd"), $("#signUpPwd").attr("error"));
        var e = $("#signUpEmail").val(),
        t = $("#signUpPwd").val();
        $("#tps").isDisplay() || ($("#signUpCmt").addClass("selected"), Signup.ACTION = Signup.SIGN_UP, $.ajax({
            url: Core.API_VER + "/account/create",
            data: {
                email: e,
                pwd: t,
                i: Signup.userDetail.invitation
            },
            success: Signup.signupCallback
        }))
    },
    signInCmtClick: function() {
        if ($("#signInCmt").isClass("selected")) return;
        $("#signInEmail").attr("error") != "" && Signup.tpsShow($("#signInEmail"), $("#signInEmail").attr("error")),
        $("#signInPwd").attr("error") != "" && Signup.tpsShow($("#signInPwd"), $("#signInPwd").attr("error"));
        var e = $("#signInEmail").val(),
        t = $("#signInPwd").val();
        $("#tps").isDisplay() || ($("#signInCmt").addClass("selected"), Signup.ACTION = Signup.SIGN_IN, $.ajax({
            url: Core.API_VER + "/sessions/create",
            data: {
                email: e,
                pwd: t
            },
            success: Signup.signupCallback
        }))
    },
    signupCallback: function(e, t, n) {
        if (!e.success) {
            $("#signUpFormCtn").isDisplay() ? Signup.tpsShow($("#signUpPwd"), e.codemsg) : $("#signInFormCtn").isDisplay() ? Signup.tpsShow($("#signInPwd"), e.codemsg) : Signup.tpsShow($("#snsPwd"), e.codemsg),
            $("#signUpCmt, #signInCmt, #bindBtn").removeClass("selected");
            return
        }
        Signup.setUserDetail(e.result, t, n),
        Signup.ACTION == Signup.SIGN_UP && (Signup.userDetail.c = 1),
        Signup.userDetail.snsType != "" && $.ajax({
            url: Core.API_VER + "/oauth/association",
            data: {
                uid: Signup.userDetail.id,
                identify: Signup.userDetail.snsType,
                auid: Signup.userDetail.snsId
            },
            success: function(e) { ! e.success || (Signup.userDetail.snsType == "qq_weibo" ? Signup.userDetail.snsType = "qq": Signup.userDetail.snsType == "renren" ? Signup.userDetail.snsType = "rr": Signup.userDetail.snsType == "sina_weibo" && (Signup.userDetail.snsType = "wb"))
            }
        }),
        Signup.userDetail.newbie == 1 ? Signup.cmpltAnimate() : Signup.userDetail.newbie == 2 ? Signup.bdgAnimate() : Signup.finishClick()
    },
    cmpltAnimate: function() {
        Core.ipad ? $("#uploadify").parent().html('<div class="uploadify-button"><span class="uploadify-button-text">iPad 不支持上传头像</span></div>') : swfobject.ua.pv[0] ? Core.uploadify() : $("#uploadify").parent().html('<div class="uploadify-button"><span class="uploadify-button-text">没装flash，不能上传头像</span></div>'),
        $(".signUpMenuBtn").removeClass("selected"),
        $("#tps").hide(),
        $("#signUpCtn").animate({
            bottom: "-300px"
        },
        300,
        function() {
            $("#signUpCtn").remove(),
            Core.bodyHeight < Signup.MIN_HEIGHT && $("#bdgCtn").css({
                top: "50%",
                marginTop: $("#bdgCtn").offset().top - Core.bodyHeight / 2 + "px"
            }),
            $("#bdgCtn").animate({
                height: "335px",
                marginTop: "-207px"
            },
            200,
            function() {
                $("#cmpltSignupCtn").removeClass("hide").animate({
                    bottom: "0px"
                },
                200)
            })
        }),
        $("#browseAvatar").click(function() {
            $("#uploadPhoto").click()
        }),
        $("#localNickName").blur(function() {
            var e = $(this).val(),
            t = $(this).offset().left,
            n = $(this).offset().top - 32;
            e.length == 0 || e == "你的昵称" ? ($("#tps").hide(), $(this).attr("error", "昵称不能为空")) : /^[\u4E00-\u9FA5A-Za-z0-9_]+$/.test(e) ? e.length < 2 || e.length > 14 ? (Signup.tpsShow($(this), "昵称只能2-14个字符"), $(this).attr("error", "昵称只能2-14个字符")) : ($("#tps").hide(), $(this).attr("error", ""), $.ajax({
                url: Core.API_VER + "/account/check_nick",
                data: {
                    nick: e
                },
                success: function(e) {
                    e.success ? $("#localNickName").attr("error", "") : e.code == "253" ? (Signup.tpsShow($("#localNickName"), "昵称已被使用"), $("#localNickName").attr("error", "昵称已被使用")) : Signup.tpsShow($("#localNickName"), "Jing开小差了")
                }
            })) : (Signup.tpsShow($(this), '支持中英文、数字、"_"'), $(this).attr("error", '支持中英文、数字、"_"'))
        }).keyup(function(e) {
            e.keyCode == 13 && ($(this).blur(), $("#cmpltBtn").click())
        }),
        $("#cmpltBtn").click(function() {
            if ($("#cmpltBtn").isClass("selected")) return;
            if ($("#uploadify-button").children("span").text() == "上传中，请稍侯...") {
                Signup.tpsShow($("#localNickName"), "图片正在上传，请稍候再提交");
                return
            }
            var e = $("#localNickName").val();
            $("#localNickName").attr("error") != "" && Signup.tpsShow($("#localNickName"), $("#localNickName").attr("error"));
            if ($("#tps").isDisplay() || e.length == 0) return ! 1;
            $("#cmpltBtn").addClass("selected"),
            $.ajax({
                url: Core.API_VER + "/account/update_profile",
                data: {
                    uid: Signup.userDetail.id,
                    nick: e,
                    isreg: "true"
                },
                success: function(t) {
                    t.success ? (Signup.userDetail.nick = e, Signup.bdgAnimate()) : (Signup.tpsShow($("#localNickName"), t.codemsg), $("#cmpltBtn").removeClass("selected"))
                }
            })
        })
    },
    authCallback: function(e) {
        if (!e.success) {
            alert(e.msg);
            return
        }
        if (e.result.association == undefined) {
            var t = e.result.identify;
            $.ajax({
                url: Core.API_VER + "/oauth/bind",
                data: {
                    uid: Signup.userDetail.id,
                    identify: t
                },
                success: function(e) {
                    if (!e.success) {
                        e.code == "806" ? Gns.nowGns("你的" + btnDes[t] + "已经绑定了别的账户，请换别的SNS。") : alert(e.msg);
                        return
                    }
                    if (ConverSns[t] != undefined) {
                        var n = ConverSns[ConverSns[t]];
                        $("a[mid='" + n + "']").removeClass("off").addClass("on"),
                        res[n][MARK] = !0
                    }
                }
            })
        } else e.result.association ? (Core.setCookie("jing.auth", e.result[Core.JingATokenHeader] + "," + e.result[Core.JingRTokenHeader]), $.ajaxSetup({
            headers: {
                "Jing-A-Token-Header": e.result[Core.JingATokenHeader],
                "Jing-R-Token-Header": e.result[Core.JingRTokenHeader]
            }
        }), Signup.setUserDetail(e.result), Signup.userDetail.newbie == 2 ? Signup.bdgAnimate() : Signup.finishClick()) : Signup.snsAnimate(e);
        Signup.OpenWindow && setTimeout(function() {
            Signup.OpenWindow.window.close(),
            Signup.OpenWindow = !1
        },
        2e3)
    },
    snsAnimate: function(e) {
        var t = e.result.nick,
        n = e.result.avatar,
        r = e.result.identify;
        Signup.userDetail.fid = n,
        Signup.userDetail.snsId = e.result.id,
        Signup.userDetail.snsType = r,
        $(".signUpMenuBtn").removeClass("selected"),
        $("#tps").hide(),
        $("#signUpCtn").animate({
            bottom: "-300px"
        },
        300,
        function() {
            $("#signUpCtn").remove(),
            Core.bodyHeight < Signup.MIN_HEIGHT && $("#bdgCtn").css({
                top: "50%",
                marginTop: $("#bdgCtn").offset().top - Core.bodyHeight / 2 + "px"
            }),
            $("#bdgCtn").animate({
                height: "404px",
                marginTop: "-242px"
            },
            200,
            function() {
                $("#bindCtn").removeClass("hide").animate({
                    bottom: "0px"
                },
                500)
            }),
            $("#snsNickName").text("Hi, " + t),
            $("#snsInputNickName").val(t),
            $("#snsDesc").text("你已经成功绑定了" + btnDes[r] + "，现在你需要设置填写登录邮箱和密码就能开始享用Jing了。"),
            Core.imgLoad($("#snsAvt"), "", n, 64),
            $("#bindBtn").click(Signup.bindBtnClick),
            $("#snsEmail").blur(Signup.snsEmailBlur),
            $("#snsPwd").blur(function() {
                var e = $(this).val();
                e == "输入你的密码" ? (Signup.tpsShow($(this), "密码不能为空"), $(this).attr("error", "密码不能为空")) : e.length < 6 ? (Signup.tpsShow($(this), "密码必须6位以上"), $(this).attr("error", "密码必须6位以上")) : ($("#tps").hide(), $(this).attr("error", ""))
            }).keyup(function(e) {
                e.keyCode == 13 && ($(this).blur(), Signup.bindBtnClick())
            }),
            $("#snsInputNickName").blur(function() {
                var e = $(this).val(),
                t = $(this).offset().left,
                n = $(this).offset().top - 32;
                e.length == 0 || e == "你的昵称" ? ($("#tps").hide(), $(this).attr("error", "昵称不能为空")) : /^[\u4E00-\u9FA5A-Za-z0-9_]+$/.test(e) ? Core.strLength(e) < 2 || Core.strLength(e) > 14 ? (Signup.tpsShow($(this), "昵称只能2-14个字符"), $(this).attr("error", "昵称只能2-14个字符")) : ($("#tps").hide(), $(this).attr("error", ""), $.ajax({
                    url: Core.API_VER + "/account/check_nick",
                    data: {
                        nick: e
                    },
                    success: function(e) {
                        e.success ? $("#snsInputNickName").attr("error", "") : e.code == "253" ? (Signup.tpsShow($("#snsInputNickName"), "昵称已被使用"), $("#snsInputNickName").attr("error", "昵称已被使用")) : Signup.tpsShow($("#snsInputNickName"), "Jing开小差了")
                    }
                })) : (Signup.tpsShow($(this), '支持中英文、数字、"_"'), $(this).attr("error", '支持中英文、数字、"_"'))
            })
        })
    },
    snsEmailBlur: function() {
        var e = $("#snsEmail").val(),
        t = $("#snsEmail").offset().left,
        n = $("#snsEmail").offset().top - 35;
        e == "你的Email" ? $("#snsEmail").attr("error", "邮箱不能为空") : /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e) ? ($("#tps").hide(), $("#snsEmail").attr("error", ""), Signup.ACTION = Signup.CHECK_EMAIL, $.ajax({
            url: Core.API_VER + "/account/check_email",
            data: {
                email: e
            },
            success: function(e) {
                e.success || e.msg == "1" ? (e.success ? (Signup.userDetail.invitation == "" && (alert("你还没有邀请码，暂时不能注册"), window.location.reload()), Signup.ACTION = Signup.SIGN_UP) : Signup.ACTION = Signup.SIGN_IN, $.ajax({
                    url: Core.API_VER + "/account/check_nick",
                    data: {
                        nick: $("#snsInputNickName").val()
                    },
                    success: function(e) {
                        e.success || (e.code == "253" || e.code == "252" ? $("#bdgCtn").attr("tag") != "nickname" ? ($("#bdgCtn").attr("tag", "nickname"), $("#bdgCtn").animate({
                            height: "+=70",
                            marginTop: "-=35"
                        },
                        300), $("#bindCtn").animate({
                            height: "+=70"
                        },
                        300,
                        function() {
                            $("#snsInputNickName").parent().show();
                            var t = $("#snsInputNickName").offset().left,
                            n = $("#snsInputNickName").offset().top - 35;
                            e.code == "252" ? (Signup.tpsShow($("#snsInputNickName"), '支持中英文、数字、"_"或"-"'), $("#snsInputNickName").attr("error", '支持中英文、数字、"_"或"-"')) : (Signup.tpsShow($("#snsInputNickName"), "昵称已被使用"), $("#snsInputNickName").attr("error", "昵称已被使用"))
                        })) : $("#snsInputNickName").attr("error", "") : Signup.tpsShow($("#snsPwd"), "Jing开小差了"))
                    }
                })) : Signup.ACTION = Signup.SIGN_IN
            }
        })) : (Signup.tpsShow($("#snsEmail"), "邮箱格式错误"), $("#snsEmail").attr("error", "邮箱格式错误"))
    },
    bindBtnClick: function() {
        if ($("#bindBtn").isClass("selected")) return;
        $("#snsEmail").attr("error") != "" ? Signup.tpsShow($("#snsEmail"), $("#snsEmail").attr("error")) : $("#snsPwd").attr("error") != "" && Signup.tpsShow($("#snsPwd"), $("#snsPwd").attr("error"));
        if ($("#tps").isDisplay()) return;
        var e = $("#snsInputNickName").val();
        Signup.userDetail.nick = e;
        if (Signup.ACTION == Signup.CHECK_EMAIL) Signup.tpsShow($("#snsPwd"), "正在检验您的email，请稍候");
        else if (Signup.ACTION == Signup.SIGN_IN) $("#bindBtn").addClass("selected"),
        $.ajax({
            url: Core.API_VER + "/sessions/create",
            data: {
                email: $("#snsEmail").val(),
                pwd: $("#snsPwd").val()
            },
            success: function(t, n, r) {
                t.success ? (Signup.setUserDetail(t.result, n, r), Signup.userDetail.newbie == 1 ? $.ajax({
                    url: Core.API_VER + "/account/update_profile",
                    data: {
                        uid: Signup.userDetail.id,
                        nick: e,
                        isreg: "true"
                    },
                    success: function(e, t, n) {
                        e.success ? Signup.signupCallback(e, t, n) : ($("#bindBtn").removeClass("selected"), alert(e.codemsg))
                    }
                }) : Signup.signupCallback(t, n, r)) : ($("#bindBtn").removeClass("selected"), Signup.tpsShow($("#snsPwd"), t.codemsg))
            }
        });
        else if (Signup.ACTION == Signup.SIGN_UP) {
            $("#snsInputNickName").attr("error") != "" && $("#snsInputNickName").attr("error") != undefined && Signup.tpsShow($("#snsInputNickName"), $("#snsInputNickName").attr("error"));
            if ($("#tps").isDisplay()) return;
            $.ajax({
                url: Core.API_VER + "/account/create",
                data: {
                    email: $("#snsEmail").val(),
                    pwd: $("#snsPwd").val(),
                    nick: e,
                    i: Signup.userDetail.invitation
                },
                success: Signup.signupCallback
            })
        }
    },
    bdgAnimate: function() {
        $("#tps").hide();
        var e = function() {
            $("#mscGnCtn").removeClass("hide"),
            $("#bdgCtn").animate({
                height: "350px",
                marginTop: "-213px"
            },
            300),
            setTimeout(function() {
                $("#bdg1").animate({
                    left: "41px"
                },
                300)
            },
            800),
            setTimeout(function() {
                $("#bdg2").animate({
                    left: "231px"
                },
                300)
            },
            1100),
            setTimeout(function() {
                $("#bdg3").animate({
                    left: "421px"
                },
                300)
            },
            1400),
            setTimeout(function() {
                $("#bdgStr").animate({
                    left: "0px"
                },
                300)
            },
            1700)
        };
        if ($("#bindCtn").isDisplay()) {
            var t = Core.bodyHeight - $("#bdgCtn").offset().top + 130;
            $("#bindCtn").animate({
                bottom: "-" + t + "px"
            },
            300,
            function() {
                e()
            })
        } else if ($("#signUpCtn").isDisplay()) $("#signUp").removeClass("selected"),
        $("#signUpCtn").animate({
            bottom: "-300px"
        },
        300,
        function() {
            $("#signUpCtn").remove(),
            Core.bodyHeight < Signup.MIN_HEIGHT && $("#bdgCtn").css({
                top: "50%",
                marginTop: $("#bdgCtn").offset().top - Core.bodyHeight / 2 + "px"
            }),
            e()
        });
        else if ($("#cmpltSignupCtn").isDisplay()) {
            var t = Core.bodyHeight - $("#cmpltSignupCtn").offset().top + 130;
            $("#cmpltSignupCtn").animate({
                bottom: "-" + t + "px"
            },
            300,
            function() {
                e()
            })
        }
        $("#bdg1, #bdg2, #bdg3").click(Signup.bdg1Click)
    },
    bdg1Click: function() {
        var e = 0,
        t = 0,
        n = "",
        r = function(e) {
            $.ajax({
                url: Core.API_VER + "/account/filter/fetch_ats",
                data: {
                    st: e,
                    ps: "13"
                },
                success: function(e) {
                    var t = 0;
                    $("#signupFvtAts").children().each(function() {
                        if ($(this).children(".refresh").length == 0 && $(this).children(".finish").length == 0) {
                            var n = e.result.items[t].n,
                            r = e.result.items[t].fid,
                            s = e.result.items[t].aid;
                            r.indexOf(".") >= 0 ? r = $.id2url(r, "image", "SS", "artist") : r = Core.badgesUrl(r, 64),
                            $(this).children("span").text(n),
                            $(this).children(".avtMask").attr("id", s),
                            $(this).children(".avt").css({
                                "background-image": "url('" + r + "')"
                            }),
                            $(this).children(".selected").remove(),
                            ++t
                        }
                    })
                }
            })
        };
        $("#mscGnCtn").animate({
            left: -(800 + (Core.bodyWidth - 800) / 2)
        },
        450,
        function() {
            $("#mscGnCtn").addClass("hide"),
            $("#bdgCtn").animate({
                height: "512px",
                marginTop: "-299px"
            },
            300),
            $("#fvtAtsCtn").removeClass("hide"),
            $("#fvtAtsCtn").animate({
                bottom: "290px"
            },
            500,
            function() {
                $("#fvtAtsCtn").animate({
                    bottom: "0px",
                    height: "390px"
                },
                300,
                function() {
                    $("#tps .tpsCtn .ctt").text("选择你喜欢的艺人"),
                    $("#tps").css({
                        left: Core.bodyWidth / 2 - 90 + "px",
                        top: $(this).offset().top - 34
                    }).show()
                })
            }),
            $.ajax({
                url: Core.API_VER + "/account/filter/fetch_ats",
                data: {
                    st: "0",
                    ps: "13"
                },
                success: function(i) {
                    t = i.result.total;
                    var s = "";
                    Core.ie68 || (s = "dspr");
                    var o = '<div id="signupFvtAts" class="fvtAts hide ' + s + '">';
                    for (var u = 0,
                    a = 0; u < Signup.FAV_LIST; ++u) {
                        var f = "",
                        l = "",
                        c = "",
                        h = "";
                        if (u == 10) l = "更多艺人",
                        c = "refresh";
                        else if (u == 14) l = "完成",
                        c = "finish";
                        else {
                            l = i.result.items[a].n,
                            f = i.result.items[a].fid;
                            var p = i.result.items[a].aid;
                            f.indexOf(".") >= 0 ? f = $.id2url(f, "image", "SS", "artist") : f = Core.badgesUrl(f, 64),
                            h = "favIconClick",
                            ++a
                        }
                        f != "" && (f = '<div class="avt" style="background:#e1e1e1 url(' + f + ') no-repeat scroll"></div>'),
                        o += '<div class="iconCtn"><a id="' + p + '" href="#" class="avtMask overlay ' + c + " " + h + '"></a>' + f + "<span>" + l + "</span>" + "</div>"
                    }
                    o += "</div>",
                    $("#fvtAtsCtn").html(o);
                    var d = setInterval(function() {
                        $("#fvtAtsCtn").height() > 380 && (clearTimeout(d), $("#fvtAtsCtn").children(".fvtAts").removeClass("hide"), Core.ie68 || $("#fvtAtsCtn").children(".fvtAts").animate({
                            opacity: "1"
                        },
                        600))
                    },
                    100);
                    $(".favIconClick").click(function() {
                        $("#tps").hide();
                        var e = $(this).attr("id");
                        $(this).parent().children(".selected").length == 0 ? (n += e + ",", $(this).parent().append('<div class="selected"></div>')) : (n = n.replace(e + ",", ""), $(this).parent().children(".selected").remove())
                    }),
                    $(".fvtAts").children(".iconCtn").children(".finish").click(function() {
                        if (n == "") {
                            $("#tps .tpsCtn .ctt").text("至少选择1个艺人"),
                            $("#tps").css({
                                left: Core.bodyWidth / 2 - 88 + "px",
                                top: $("#fvtAtsCtn").offset().top - 34
                            }).show();
                            return
                        }
                        n = n.substring(0, n.length - 1),
                        Guide.aids = n,
                        Signup.userDetail.newbie = 3,
                        $.ajax({
                            url: Core.API_VER + "/account/filter/post_ats",
                            data: {
                                uid: Signup.userDetail.id,
                                aids: n
                            }
                        }),
                        Signup.finishClick()
                    }),
                    $(".fvtAts").children(".iconCtn").children(".refresh").click(function() {
                        e += 13,
                        e + 13 > t && (e = 0),
                        r(e)
                    })
                }
            })
        })
    },
    finishClick: function() {
        $("body").removeClass("login").addClass("main"),
        $("#tps").hide(),
        Interface.Current = Interface.MAIN,
        $("#signUpCtn").remove(),
        $("#tbCtn").removeClass("gnBd"),
        $("#signUpMenuCtn, #fgtPwd").remove(),
        $("#mdCtn").animate({
            opacity: "0"
        },
        600,
        function() {
            $("body").addClass("ptrn"),
            $(this).remove(),
            Main.init(),
            $("html").addClass(Signup.userDetail.sts.thm + "Thm"),
            $("#lgtBtn").click(function() {
                Core.setCookie("jing.auth", ""),
                window.location.href = "/"
            }),
            Signup.userDetail.newbie == 0 && (setTimeout(function() {
                var e = Core.getCookie("snsUpdateTime");
                if (e == "" || e == null) Core.setCookie("snsUpdateTime", (new Date).getTime());
                else {
                    e = parseInt(e);
                    if (Apps.offsetDate(e, "snsUpdate") == 1) {
                        var t = resData.frdCt.result.items,
                        n = "";
                        for (var r = 0; r < t.length; ++r) {
                            if (t[r].display != "true") continue;
                            t[r].mid == "rr" ? n += "人人网、": t[r].mid == "qq" ? n += "腾讯微博、": t[r].mid == "wb" && (n += "新浪微博、")
                        }
                        n != "" && (n = "你已经7天没有更新" + n.substring(0, n.length - 1) + '，<a href="#" id="gnsSnsUpdate" class="trg">立即更新</a>', Gns.nowGns(n))
                    }
                }
            },
            15e3), setTimeout(function() {
                $.ajax({
                    url: Core.API_VER + "/message/fetch_offline_messages",
                    data: {
                        uid: Signup.userDetail.id
                    },
                    success: function(e) {
                        var t = e.result.items,
                        n = e.result.chats,
                        r = new Array,
                        i = "",
                        s = "",
                        o = 0;
                        for (var u = 0; u < t.length; ++u) t[u].t == "flwd" ? t[u].flw_id == Signup.userDetail.id ? i == "" ? (i = t[u], i.flwer += "、") : i.flwer += t[u].flwer + "、": ++o: t[u].t == "inhs" ? s == "" ? (s = t[u], s.frd += "、") : s.frd += t[u].frd + "、": r[r.length] = t[u];
                        i != "" && (i.flwer = i.flwer.substring(0, i.flwer.length - 1), r[r.length] = i),
                        s != "" && (s.frd = s.frd.substring(0, s.frd.length - 1), r[r.length] = s),
                        t = r;
                        for (var u = 0; u < t.length; ++u) Message.send(t[u]);
                        var a = "";
                        if (o != 0) {
                            var f = n.length;
                            n[f] = new Object,
                            n[f].uid = "0",
                            n[f].nick = "系统消息",
                            n[f].count = o,
                            a = '未读的 <a href="#" class="trg offChtSysEvent">' + n[f].nick + " (" + n[f].count + ")</a>"
                        }
                        var l = "";
                        for (var u = 0; u < n.length; ++u) {
                            Cht.offlineCount += n[u].count,
                            Cht.offlineMes[n[u].uid] = new Object,
                            Cht.offlineMes[n[u].uid].nick = n[u].nick,
                            Cht.offlineMes[n[u].uid].count = n[u].count;
                            if (n[u].uid == "0") {
                                Cht.sysOfflineCount = n[u].count;
                                continue
                            }
                            l += '<a href="#" class="trg offChtNickEvent" fuid="' + n[u].uid + '" nick="' + n[u].nick + '" avatar="' + n[u].avatar + '" ol="' + n[u].ol + '">' + n[u].nick + " (" + n[u].count + ")</a>、"
                        }
                        n.length == 1 && a != "" ? (a = "你有" + a, a += '，<a href="#" class="trg gnsSysEvent">去看看？</a>', Gns.nowGns(a)) : Cht.offlineCount != 0 && (a != "" && (a = "，还有" + a), l = l.substring(0, l.length - 1), l += " 给你发送了消息" + a + '，<a href="#" class="trg offChtListEvent">去看看？</a>', Gns.nowGns(l))
                    }
                })
            },
            1e4), Signup.userDetail.sts.hbr == "false" && Core.getCookie("highKnow") != "true" && setTimeout(function() {
                Gns.nowGns('你现在在使用低品质音乐，如果想恢复高品质音乐，<a href="#" class="trg gnsStsDsply">点击设置</a>。<a href="#" class="trg knowEvent" cookieId="highKnow">不再提醒设置</a>。')
            },
            7e3));
            var e = function() {
                if (Signup.userDetail.id == "") return;
                $.ajax({
                    url: Core.API_VER + "/account/fetch_online_friends_count",
                    data: {
                        uid: Signup.userDetail.id
                    },
                    success: function(e) {
                        if (!e.success) return;
                        if (e.result.c == $("#frdsCount").text()) return;
                        if (Overlay.id == "frdCt") {
                            e.result.c == 0 ? $("#olFrd").parent().children(".num").hide() : $("#olFrd").parent().children(".num").show().text(e.result.c);
                            return
                        }
                        if (e.result.c == 0) {
                            $("#frdsCount").hide();
                            return
                        }
                        Signup.onlineCount = e.result.c
                    }
                }),
                setTimeout(e, 6e4)
            };
            setTimeout(function() {
                Signup.userDetail.c != 0 && Signup.iconShake("appsCount"),
                e()
            },
            1e4),
            setInterval(function() {
                var e = Signup.onlineCount + Cht.offlineCount;
                e > 99 && (e = "...");
                if (e == 0) {
                    $("#frdsCount").hide();
                    return
                }
                $("#frdsCount").isDisplay() ? $("#frdsCount").text(e) : Signup.userDetail.sts.frdCntNtf == "true" && Overlay.rootId != "frdCt" && parseInt($("#frdsCount").text()) != e && e != 0 && ($("#frdsCount").text(e), $("#frdCtNewIcon").isDisplay() || Signup.iconShake("frdsCount"))
            },
            1e4)
        })
    },
    iconShake: function(e) {
        if (e.indexOf("New") >= 0) {
            if ($("#" + e).isDisplay()) return;
            e == "frdCtNewIcon" ? $("#frdsCount").hide() : e == "appNewIcon" && $("#appsCount").hide();
            var t = function() {
                $("#" + e).animate({
                    top: "-=8"
                },
                300,
                function() {
                    $(this).animate({
                        top: "+=8"
                    },
                    300,
                    function() {
                        $(this).isDisplay() && t()
                    })
                })
            };
            $("#" + e).show(),
            t()
        } else {
            if (e == "appsCount" && $("#appNewIcon").isDisplay() || e == "frdsCount" && $("#frdCtNewIcon").isDisplay()) return;
            $("#" + e).show().animate({
                top: "-=15"
            },
            400,
            function() {
                $(this).animate({
                    top: "+=15"
                },
                300,
                function() {
                    $(this).animate({
                        top: "-=7"
                    },
                    200,
                    function() {
                        $(this).animate({
                            top: "+=7"
                        },
                        150)
                    })
                })
            })
        }
    },
    tpsShow: function(e, t) {
        $(".wb").removeClass("selected"),
        $("#signIn, #signUp").children(".tps").hide();
        var n = e.offset().left,
        r = e.offset().top - 40;
        if (e.attr("id") == "invtEmail" || e.attr("id") == "fgtEmail" || e.attr("id") == "resetPwd") r -= 5;
        $("#tps").css({
            left: n,
            top: r + "px"
        }).children(".tpsCtn").children("p").text(t),
        $("#tps").show()
    },
    signupAnimate: function(e, t) {
        if (Signup.userDetail.invitation == "" && e == "signUp") {
            Signup.switchAnimate("invt");
            return
        }
        var n = function() {
            $("#signUpCtn").isDisplay() ? ($("#" + e + "FormCtn").show(), $("#" + t + "FormCtn").hide()) : ($("#signUpCtn").show(), $("#" + t + "FormCtn").hide(), $("#" + e + "FormCtn").show(), $("#signUpCtn").animate({
                bottom: "70px"
            },
            300,
            function() {
                if (!$("#invt").isDisplay() && !$("#fgtCtn").isDisplay() && !$("#resetPwdCtn").isDisplay()) {
                    var t = $("#signUpCtn").offset().top;
                    Core.bodyHeight < Signup.MIN_HEIGHT && $("#bdgCtn").animate({
                        top: t - 77 + "px"
                    },
                    300)
                }
                var n = $("#" + e + "FormCtn .head .right .wb");
                setTimeout(function() {
                    Signup.btnTpsShow(n, "你还可以通过SNS登录"),
                    n.addClass("selected")
                },
                0)
            })),
            e == "signUp" ? $("#signUpCtn").children(".ar").animate({
                right: "242px"
            }) : $("#signUpCtn").children(".ar").animate({
                right: "191px"
            })
        };
        $("#invt").isDisplay() || $("#fgtCtn").isDisplay() || $("#resetPwdCtn").isDisplay() ? ($(this).removeClass("selected"), $("#invt, #fgtCtn").animate({
            bottom: -((Core.bodyHeight - 219) / 2 + 75 + 219) + "px"
        },
        300,
        function() {
            $(this).hide()
        }), $("#resetPwdCtn").animate({
            bottom: -((Core.bodyHeight - 219) / 2 + 75 + 219) + "px"
        },
        300,
        function() {
            $(this).hide();
            if (!$("#signUpCtn").isDisplay() && Core.bodyHeight < Signup.MIN_HEIGHT) {
                var e = $("#bdgCtn").offset().top;
                $("#bdgCtn").css({
                    top: e + "px",
                    "margin-top": "0px",
                    height: "70px"
                }),
                $("#bdgCtn").animate({
                    top: Core.bodyHeight - 341 - 77 + "px"
                },
                300)
            } else $("#bdgCtn").animate({
                height: "70px",
                marginTop: "-73px",
                top: "50%"
            },
            300);
            n()
        })) : n()
    },
    switchAnimate: function(e) {
        $("#signUpCtn").isDisplay() && $("#signUpCtn").animate({
            bottom: "-300px"
        },
        300,
        function() {
            $("#signUpCtn").hide()
        }),
        $("#bdgCtn").height() == 349 ? (e != "invt" && $("#signUp").removeClass("selected"), $("#invt, #fgtCtn").animate({
            bottom: -((Core.bodyHeight - 219) / 2 + 75 + 219) + "px"
        },
        300,
        function() {
            $(this).hide()
        }), $("#resetPwdCtn").animate({
            bottom: -((Core.bodyHeight - 219) / 2 + 75 + 219) + "px"
        },
        300,
        function() {
            $(this).hide(),
            $("#" + e).show().animate({
                bottom: "0px"
            },
            300,
            function() {
                e == "resetPwdCtn" && Signup.resetPwdToken == "" && Signup.tpsShow($("#resetPwd"), "修改密码已经过期，请重试")
            })
        })) : (Core.bodyHeight < Signup.MIN_HEIGHT && $("#bdgCtn").css({
            top: "50%",
            "margin-top": $("#bdgCtn").offset().top - Core.bodyHeight / 2 + "px"
        }), $("#bdgCtn").animate({
            height: "349px",
            "margin-top": "-215px"
        },
        300,
        function() {
            $("#" + e).show().animate({
                bottom: "0px"
            },
            300,
            function() {
                e == "resetPwdCtn" && Signup.resetPwdToken == "" && Signup.tpsShow($("#resetPwd"), "修改密码已经过期，请重试")
            })
        }))
    },
    resize: function() {
        if ($("#mscGnCtn").isDisplay() || $("#fvtAtsCtn").isDisplay() || $("#bindCtn").isDisplay() || $("#cmpltSignupCtn").isDisplay() || $("#invt").isDisplay() || $("#fgtCtn").isDisplay()) return;
        if ($("#signUpCtn").isDisplay()) {
            var e = $("#signUpCtn").offset().top;
            Core.bodyHeight < Signup.MIN_HEIGHT ? $("#bdgCtn").css({
                "margin-top": "0px",
                top: e - 77 + "px"
            }) : $("#bdgCtn").css({
                "margin-top": "-73px",
                top: "50%"
            })
        } else Core.bodyHeight < Signup.MIN_HEIGHT ? $("#bdgCtn").css({
            "margin-top": "0px",
            top: (Core.bodyHeight - 70 - 75) / 2 + "px"
        }) : $("#bdgCtn").css({
            "margin-top": "-73px",
            top: "50%"
        }),
        $("#bdgCtn").removeClass("hide");
        $("#ling").removeClass("hide")
    },
    setUserDetail: function(e, t, n) {
        if (n != undefined) {
            var r = n.getResponseHeader(Core.JingATokenHeader),
            i = n.getResponseHeader(Core.JingRTokenHeader);
            Core.setCookie("jing.auth", r + "," + i),
            $.ajaxSetup({
                headers: {
                    "Jing-A-Token-Header": r,
                    "Jing-R-Token-Header": i
                }
            })
        }
        Signup.userDetail.menu = e.m,
        Signup.userDetail.pld = e.pld,
        Signup.userDetail.k = e.k;
        if (e.avbF != null) {
            var s = e.avbF.split(",");
            for (var o = 0; o < s.length; ++o) Signup.userDetail.avbF[s[o]] = !0
        }
        Signup.userDetail.id = e.usr.id,
        Signup.userDetail.nick = e.usr.nick,
        Signup.userDetail.newbie = e.usr.newbie,
        Signup.userDetail.c = e.usr.c,
        e.usr.avatar == null && (e.usr.avatar = ""),
        Signup.userDetail.fid = e.usr.avatar,
        Signup.userDetail.fidtiny = e.usr.avatartiny,
        Signup.userDetail.sts = e.sts,
        Signup.userDetail.snstokens = e.snstokens,
        $("html").isClass("ipad") && (Signup.userDetail.sts.tipNtf = undefined),
        Signup.userDetail.newview = e.newview,
        Signup.userDetail.newview.b = new Array,
        e.release != null && Signup.userDetail.newbie == 0 && setTimeout(function() {
            Guide.rlsShow(e.release)
        },
        2e4),
        Signup.userDetail.sts.lgA == "true" && $("html").addClass("ftlg")
    }
},
Guide = {
    step: 1,
    result: null,
    mid: "",
    obj: null,
    isDisplayAppsCtn: !1,
    isDisplayMscSchCtn: !1,
    aids: "",
    isSmlAnimate: !1,
    start: "",
    shrData: null,
    oldStart: 0,
    atCount: 0,
    init: function() {
        Search.setSchHint(),
        Core.ie68 && ($("#guide").children(".mscSch, .prgrs, .apps, .lgt, .finish, .sch, .vcOvr").removeClass("dspr"), $("#guide").removeClass("dspr")),
        setInterval(function() {
            $.ajax({
                url: Core.API_VER + "/app/polling_fetch_release",
                data: {
                    uid: Signup.userDetail.id
                },
                success: function(e) {
                    if (!e.sucess && e.result == null) return;
                    $("#rlsNote .rlsCtn .cnfmBtn").show(),
                    Guide.rlsShow(e.result)
                }
            })
        },
        18e5),
        $("#rlsNote .cnfm").click(function() {
            window.location.reload(!0)
        }),
        $("#rlsNote .cncl").click(function() {
            $("#rlsNote .cls").click()
        }),
        $("#rlsNote").children(".cls").click(function() {
            return $("#maskUserMenu").hide(),
            $("#tbCtn").removeClass("gnBd"),
            $("#rlsNote").animate({
                opacity: "0"
            },
            300,
            function() {
                $(".drgbEvt").show(),
                $("#mscPlrCtn").css({
                    "z-index": "1002"
                }),
                Guide.isShow(),
                $(this).hide(),
                Core.isFullScren = !1
            }),
            !1
        }),
        $("#shrCncl, #shrGuide .cls").click(function() {
            return $("#atSgstCtn").hide(),
            $("#maskUserMenu").hide(),
            $("#tbCtn").removeClass("gnBd"),
            $("#shrGuide").animate({
                opacity: "0"
            },
            300,
            function() {
                $("#shrTextarea").attr("style", ""),
                $("#shrTextarea").parent().attr("style", ""),
                $("#shrBoxFtr").removeClass(ConverSns[Guide.shrData.identify]),
                $(".drgbEvt").show(),
                $("#mscPlrCtn").css({
                    "z-index": "1002"
                }),
                Guide.isShow(),
                $(this).hide(),
                Core.isFullScren = !1
            }),
            !1
        }),
        $("#shrCnfm").click(function() {
            $("#shrCncl").click();
            var e = $.trim($("#shrTextarea").val());
            e.length != 0 && (Guide.shrData.c = e),
            Guide.shrSend()
        }),
        $("#shrTextarea").autoTextarea({
            maxHeight: 160
        }),
        $("#shrTextarea").keydown(function(e) {
            if (e.keyCode == 27) return $("#shrGuide>.cls").click(),
            !1;
            if ($(this).val().length > 70 && e.keyCode != 8 && (e.keyCode < 37 || e.keyCode > 40)) return ! 1;
            if ((e.keyCode == 32 || e.keyCode == 13) && $("#atSgstCtn").isDisplay()) {
                var t = $(this).val(),
                n = $(this).val();
                n = n.substring(0, Guide.oldStart);
                for (var r = n.length - 1; r >= 0; --r) if (n[r] == "@") {
                    var n = t.substring(0, r + 1) + $("#atSgstCtn").find("a").first().text() + " ",
                    i = n.length;
                    n += t.substring(Guide.oldStart),
                    $("#shrTextarea").val(n).focus().setCursorPosition(i),
                    $("#atSgstCtn").hide();
                    break
                }
                return ! 1
            }
        }).keyup(function(e) {
            var t = $(this).val();
            t.length > 70 && e.keyCode != 8 && (e.keyCode < 37 || e.keyCode > 40) ? $(this).val(t.substring(0, 70)) : Guide.shrData.identify == "sina_weibo" && Guide.atAuto()
        }),
        $("#appGuide").children(".cls").click(function() {
            Player.pauseMsgTone(),
            Guide.appGideHide($("#appGuide"))
        }),
        $("#smlGuideKnow").click(function() {
            Guide.start == "guide" ? (Guide.psnRdGuideShow(), $("#smlGuide").hide()) : Guide.appGideHide($("#smlGuide")),
            Player.pauseMsgTone()
        }),
        $("#psnRdGuideKnow").click(function() {
            Guide.appGideHide($("#psnRdGuide")),
            Player.pauseMsgTone()
        }),
        $("#acptBtn").click(function() {
            Player.pauseMsgTone();
            if ($(this).isClass("selected")) {
                $("#appGuide").children(".cls").click();
                return
            }
            Guide.obj.prev(".acceptTaskEvt").length == 1 && (Guide.obj.prev(".acceptTaskEvt").click(), $("#acptBtn").html("已接受").addClass("selected"))
        })
    },
    atAuto: function() {++Guide.atCount,
        Guide.atCount == 100 && (Guide.atCount = 0);
        var e = Guide.atCount,
        t = Guide.oldStart,
        n = $("#shrTextarea").val(),
        r = n.substring(0, Guide.oldStart);
        for (var i = r.length - 1; i >= 0; --i) {
            if (r[i] == " ") break;
            if (r[i] == "@") {
                var s = i,
                o = TP.getInputPositon(document.getElementById("shrTextarea"));
                r = r.substring(i + 1);
                if (r == "") break;
                $.getJSON("https://api.weibo.com/2/search/suggestions/at_users.json?access_token=" + Signup.userDetail.snstokens.sina_weibo + "&q=" + r + "&type=0&count=3&callback=?",
                function(r) {
                    if (Gns.isAnimate || r.data.length == 0 || e != Guide.atCount) {
                        $("#atSgstCtn").hide();
                        return
                    }
                    var i = r.data,
                    u = '<div class="atSgstBg"><div class="atSgstLogo wb"></div>',
                    a = 0;
                    for (; a < i.length; ++a) u += '<a href="#" class="atSgst">' + i[a].nickname + "</a>",
                    a != i.length - 1 && (u += '<span class="splt"></span>');
                    u += '</div><div class="atSgstArr"></div>',
                    $("#atSgstCtn").html(u);
                    var f = 37 * (a + 1) + a * 2;
                    $("#atSgstCtn").css({
                        left: o.left - 18 - 75 + "px",
                        top: o.bottom - 17 - f + "px"
                    }).show(),
                    $(".atSgst").click(function() {
                        var e = n.substring(0, s + 1) + $(this).text() + " ",
                        r = e.length;
                        e += n.substring(t),
                        $("#shrTextarea").val(e).focus().setCursorPosition(r),
                        $("#atSgstCtn").hide()
                    })
                });
                return
            }
        }
        $("#atSgstCtn").hide()
    },
    update: function(e) {
        return Guide.oldStart = Core.getSelectionStart(e),
        !0
    },
    isShow: function() {
        Guide.isDisplayAppsCtn && ($("#appsCtn, #rightAr").show(), Guide.isDisplayAppsCtn = !1, $("#apps").addClass("selected"))
    },
    isHide: function() {
        $("#appsCtn").isDisplay() && (Guide.isDisplayAppsCtn = !0, $("#appsCtn, #rightAr").hide())
    },
    rlsShow: function(e) {
        if (!Core.isFullScren) {
            var t = e.content.split("；"),
            n = "";
            for (var r = 0; r < t.length; ++r) n += "<li>" + t[r] + "</li>";
            $("#rlsNote .rlsCtn .rlsCttCtn").html(n),
            $("#rlsNote .rlsCtn .rlsTit .rlsVer").html(e.title),
            Interface.Current == Interface.SEARCH && Search.hide(),
            $(".drgbEvt").hide(),
            $("#maskUserMenu").show(),
            $("#tbCtn").addClass("gnBd"),
            Core.isFullScren = !0,
            $("#mscPlrCtn").css({
                "z-index": "999"
            }),
            Guide.isHide(),
            $("#rlsNote").show(),
            Guide.resize(),
            $("#rlsNote").animate({
                opacity: "0.95"
            },
            300)
        }
    },
    shrSend: function(e) {
        e != "false" && Gns.nowGns("正在分享...");
        var t = function() {
            Gns.nowGns("你已成功分享到" + btnDes[Guide.shrData.identify]),
            Guide.shrData = null
        },
        n = !1,
        r = !1;
        setTimeout(function() {
            n = !0,
            r && t()
        },
        3e3),
        $.ajax({
            url: Core.API_VER + "/oauth/music/share",
            data: Guide.shrData,
            success: function(e) {
                e.success ? n ? t() : r = !0 : e.code == "802" ? Gns.nowGns("你的" + btnDes[Guide.shrData.identify] + '绑定已过期，<a identify="' + ConverSns[Guide.shrData.identify] + '" href="#" class="trg gnsSnsBind">请重新绑定</a>') : e.code == "804" ? Gns.nowGns("访问" + btnDes[Guide.shrData.identify] + "的时候超时，请重试") : Gns.nowGns("分享失败")
            }
        })
    },
    shrShow: function() {
        Interface.Current == Interface.SEARCH && Search.hide(),
        $(".drgbEvt").hide(),
        $("#maskUserMenu").show(),
        $("#tbCtn").addClass("gnBd"),
        Core.isFullScren = !0,
        $("#mscPlrCtn").css({
            "z-index": "999"
        }),
        Guide.isHide(),
        $("#shrBoxFtr").addClass(ConverSns[Guide.shrData.identify]);
        var e = Signup.userDetail.fid;
        Signup.userDetail.fidtiny != undefined ? e = Signup.userDetail.fidtiny: e.indexOf("http://") != 0 ? e = $.id2url(e, "image", "US", "avatar") : e == "" && (e = "../images/defaults/avatar/" + Core.A50 + ".jpg"),
        $("#shrAvt").attr("src", e),
        $("#shrGuide").show(),
        $("#shrTextarea").focus(),
        $("#shrTextarea").val(Guide.shrData.c),
        Guide.resize(),
        $("#shrGuide").animate({
            opacity: "0.95"
        },
        300)
    },
    step1: function() {
        Guide.start = "guide",
        Guide.isSmlAnimate = !1,
        $("#tbCtn").addClass("gnBd"),
        Guide.isHide(),
        Interface.Current == Interface.SEARCH && Search.hide(),
        Guide.resize(),
        $("#maskUserMenu").show(),
        $("#mscPlrCtn").css({
            "z-index": "999"
        }),
        $("#guide").show();
        if (Signup.userDetail.newbie != 0) Core.ie68 ? $("#guide").css({
            opacity: "0.95"
        }) : $("#guide").animate({
            opacity: "0.95"
        },
        500),
        Core.isFullScren = !0,
        $.ajax({
            url: Core.API_VER + "/account/filter/fetch_taste_terms",
            data: {
                uid: Signup.userDetail.id,
                aids: Guide.aids
            },
            success: function(e) {
                if (!e.success) {
                    alert(e.codemsg);
                    return
                }
                var t = "",
                n = e.result.urTst,
                r = e.result.items;
                for (var i = 0; i < r.length; ++i) {
                    var s = r[i].split(" + ");
                    if (s.length > 1) {
                        var o = !1;
                        for (var u = 0; u < n.length && !o; ++u) s[1] == n[u] && (o = !0);
                        o ? t += '<p><span class="rcmndtBlt"></span><a href="#" id="' + r[i] + '" class="step2Evt">' + s[0] + " + " + s[1] + "</a></p>": t += '<p><span class="rcmndtBlt"></span><a href="#" id="' + r[i] + '" class="step2Evt">' + s[0] + " + " + s[1] + "</a></p>"
                    } else t += '<p><span class="rcmndtBlt"></span><a href="#" id="' + r[i] + '" class="step2Evt">' + r[i] + "</a></p>"
                }
                $("#step2").html(t),
                $(".step2Evt").click(function() {
                    var e = $(this);
                    $.ajax({
                        url: Core.API_VER + "/account/register_completed",
                        data: {
                            uid: Signup.userDetail.id
                        },
                        success: function() {
                            Search.fly(e, "guide", e.text(), !1, !0),
                            setTimeout(function() {
                                Signup.userDetail.newbie = 0,
                                Guide.finish("init"),
                                $("#playCtl").removeClass("play").addClass("pause"),
                                Player.startRotate()
                            },
                            2e3)
                        }
                    })
                }),
                Guide.step2()
            }
        });
        else {
            Core.ie68 ? ($("#guide").css({
                opacity: "0.95"
            }), $("#guide").children(".prgrs, .apps, .lgt, .vcOvr").show(), $("#guide").children(".finish").show()) : $("#guide").animate({
                opacity: "0.95"
            },
            500,
            function() {
                $("#guide").children(".prgrs, .apps, .lgt, .vcOvr").show().animate({
                    opacity: "1"
                },
                300),
                $("#guide").children(".finish").show().animate({
                    opacity: "1"
                },
                300)
            });
            var e = function() {
                $("#guideFinish").isDisplay() && (Signup.iconShake("guideFinish"), setTimeout(e, 3e3))
            };
            setTimeout(e, 3e3),
            $("#guide").children(".finish").click(Guide.step2)
        }
    },
    step2: function() {
        Player.pauseMsgTone();
        if (Signup.userDetail.newbie == 0) Guide.finish();
        else {
            Guide.isSmlAnimate = !0;
            var e = function() {
                $("#guide .sch .schTit").animate({
                    "margin-top": "0px"
                },
                1e3,
                function() {
                    $("#step2").prev().show(),
                    $("#step2").show()
                })
            };
            Core.ie68 ? ($("#guide").children(".prgrs, .apps, .lgt, .finish, .vcOvr").hide(), $("#guide").children(".sch").show(), setTimeout(e, 2e3)) : ($("#guide").children(".prgrs, .apps, .lgt, .vcOvr").animate({
                opacity: "0"
            },
            300), $("#guide").children(".finish").animate({
                opacity: "0"
            },
            300,
            function() {
                $("#guide").children(".prgrs, .apps, .lgt, .finish, .vcOvr").hide(),
                $("#guide").children(".sch").show().animate({
                    opacity: "1"
                },
                300),
                setTimeout(e, 2e3)
            }))
        }
    },
    finish: function(e) {
        $("#tbCtn").removeClass("gnBd"),
        $("#maskUserMenu").hide();
        var t = function() {
            $(this).hide(),
            Core.ie68 ? $("#guide").children(".prgrs, .apps, .lgt, .finish, .sch, .vcOvr").hide() : $("#guide").children(".prgrs, .apps, .lgt, .finish, .sch, .vcOvr").hide().css({
                opacity: "0"
            }),
            e == "init" && Guide.appGuideShow("smlMsc")
        };
        Core.ie68 || e != "init" ? (e != "init" && Guide.appGuideShow("smlMsc"), $("#guide").hide(), t()) : $("#guide").animate({
            opacity: "0"
        },
        300, t)
    },
    appDtl: function(e, t) {
        $(".drgbEvt").hide(),
        $("#acptBtn").show(),
        Guide.obj = $(this),
        Guide.mid = $(this).attr("mid"),
        $("#acptBtn").html("我知道了").addClass("selected"),
        Guide.start = "",
        Guide.mid == "at" || Guide.mid == "stct" ? $("#appGuideVcOvr").show() : $("#appGuideVcOvr").hide(),
        Guide.appGuideShow(Guide.mid)
    },
    appGuideShow: function(e) {
        $("#acptBtn").html("我知道了").addClass("selected"),
        e == "at" || e == "stct" ? $("#appGuideVcOvr").show() : $("#appGuideVcOvr").hide(),
        Interface.Current == Interface.SEARCH && Search.hide(),
        Core.getCookie("clsInstrc") == null || Core.getCookie("clsInstrc") == "" ? ($("#appGuide .clsInstrc").removeClass("hide"), Core.setCookie("clsInstrc", "true")) : $("#appGuide .clsInstrc").addClass("hide"),
        Guide.mid = e,
        $("#maskUserMenu").show(),
        $("#tbCtn").addClass("gnBd"),
        Core.isFullScren = !0,
        $("#mscPlrCtn").css({
            "z-index": "999"
        }),
        Guide.isHide(),
        Guide.resize();
        if (Guide.mid == "smlMsc") {
            Guide.smlGuideShow();
            return
        }
        if (Guide.mid == "psnRd") {
            Guide.psnRdGuideShow();
            return
        }
        $("#appGuide").children(".appGdCtn").addClass(e),
        $("#appGuide").show(),
        e == "bdgs" && ($("#acptBtn").hide(), $("#appGuideVcOvr").hide(), $("#appGuide .appGdCtn .appIll").css({
            right: "-" + $("#appGuide .appGdCtn").offset().left + "px"
        })),
        $("#appGuide").animate({
            opacity: "0.95"
        },
        300),
        Guide.resize()
    },
    appGideHide: function(e) {
        return $("#maskUserMenu").hide(),
        $("#tbCtn").removeClass("gnBd"),
        e.animate({
            opacity: "0"
        },
        300,
        function() {
            $(".drgbEvt").show(),
            $("#mscPlrCtn").css({
                "z-index": "1002"
            }),
            Guide.isShow(),
            Guide.mid == "bdgs" && $("#appGuide .appGdCtn .appIll").css({
                right: "0px"
            }),
            $(this).children(".appGdCtn").removeClass(Guide.mid),
            $(this).hide(),
            Core.isFullScren = !1
        }),
        !1
    },
    psnRdGuideShow: function() {
        $("#psnRdGuide").show(),
        Guide.start == "guide" ? $("#psnRdGuide").css({
            opacity: "0.95"
        }) : $("#psnRdGuide").animate({
            opacity: "0.95"
        },
        300)
    },
    smlGuideShow: function() {
        $("#smlGuide").show(),
        Guide.isSmlAnimate ? $("#smlGuide").animate({
            opacity: "0.95"
        },
        300) : $("#smlGuide").css({
            opacity: "0.95"
        })
    },
    resize: function() {
        $("#guide, #smlGuide, #psnRdGuide, #shrGuide").css({
            height: Core.FS_HEIGHT + "px",
            top: "3px",
            left: "0px"
        }),
        $("#guide").children(".finish").css({
            top: (Core.FS_HEIGHT - 32) / 2 + "px"
        }),
        $("#guide").children(".sch").css({
            left: (Core.bodyWidth - 409) / 2 + "px"
        }),
        $("#smlGuide .appGdBtnCtn").css({
            left: $("#playerSml").offset().left + 14 + "px",
            top: (Core.bodyHeight - 75 - 91) / 2 - 6 + "px"
        }),
        $("#psnRdGuide .appGdBtnCtn").css({
            left: $("#playerPsnRd").offset().left + 15 + "px",
            top: (Core.bodyHeight - 75 - 91) / 2 - 6 + "px"
        });
        var e = $("#appGuide").children(".appGdCtn").height();
        $("#appGuide").children(".appGdCtn").css({
            "margin-top": "-" + (e + 75) / 2 + "px"
        });
        var t = $("#rlsNote .rlsCtn").width(),
        n = $("#rlsNote .rlsCtn").height();
        $("#rlsNote .rlsCtn").css({
            "margin-top": "-" + (n / 2 + 75) + "px",
            "margin-left": "-" + t / 2 + "px"
        })
    }
},
Overlay = {
    rootId: "",
    id: "",
    ctn: "",
    result: "",
    animateWidth: 0,
    rowCount: 0,
    colCount: 0,
    maxCount: 0,
    maxRowCount: 0,
    maxColCount: 0,
    count: 0,
    direction: "",
    mouseOffsetRight: 0,
    mouseOffsetBottom: 0,
    dragId: -1,
    isDrag: 0,
    isSwitch: !0,
    arr: new Object,
    MSC_SCH_OFFSET: 158,
    HIDE_WIDTH: 302,
    HIDE_HEIGHT: 141,
    init: function() {
        $(document).on("click", ".brdBtnEvt", Overlay.brdBtnClick),
        $(document).on("click", ".brdChildEvt", Overlay.brdChildClick),
        $(document).on("mouseover", ".drgbEvt",
        function() {
            $("#" + $(this).attr("id").replace("drag", "menu")).addClass("selected")
        }).on("mouseout", ".drgbEvt",
        function() {
            $("#" + $(this).attr("id").replace("drag", "menu")).removeClass("selected")
        }),
        $(document).on("click", "#nullBdgCtn",
        function() {
            Guide.appGuideShow("bdgs")
        }),
        $(document).on("click", ".snsBindEvt",
        function() {
            Frd.tab = Frd.EXT,
            $("#frdCt").click()
        });
        var e = null;
        Core.ie68 ? (e = new ActiveXObject("Microsoft.XMLDOM"), e.loadXML(Signup.userDetail.menu.replace(new RegExp("#", "gm"), '"'))) : e = (new DOMParser).parseFromString(Signup.userDetail.menu.replace(new RegExp("#", "gm"), '"'), "text/xml"),
        e == null ? Gns.nowGns("菜单解析错误") : Overlay.xmlRoot(e),
        Overlay.resize()
    },
    xmlRoot: function(e) {
        $(e).children("root").children("node").each(function() {
            var e = $(this).attr("mid");
            res[e] = new Array,
            res[e][NAME] = $(this).attr("name"),
            res[e][HTML_POS] = $(this).attr("type"),
            $(this).attr("remote") == "0" ? (res[e][URL] = "", Overlay.xmlLoop($(this), e)) : $(this).attr("remote") == "1" ? res[e][URL] = resUrl[e].replace("{id}", Signup.userDetail.id) : $(this).attr("remote") == "2" && (res[e][URL] = "openWindow")
        })
    },
    xmlLoop: function(e, t) {
        var n = e.attr("mid"),
        r = 0;
        resData[n] = new Object,
        resData[n].result = new Object,
        resData[n].result.items = new Array,
        e.children("node").each(function() {
            var e = $(this).attr("mid"),
            s = $(this).attr("name"),
            o = $(this).attr("remote"),
            u = $(this).attr("display");
            resData[n].result.items[r] = new Object,
            resData[n].result.items[r].mid = e,
            resData[n].result.items[r].name = s,
            e == Signup.userDetail.snsType ? resData[n].result.items[r].display = "true": resData[n].result.items[r].display = u,
            res[e] = new Array,
            o != undefined && (o == "0" ? (res[e][URL] = "", Overlay.xmlLoop($(this), t + "." + e)) : o == "1" ? res[e][URL] = resUrl[e].replace("{id}", Signup.userDetail.id) : o == "2" && (res[e][URL] = "openWindow")),
            res[e][PARENT] = t,
            res[e][MARK] = !1,
            res[e][NAME] = s,
            res[e][HTML_POS] = $(this).attr("type"),
            ++r
        })
    },
    brdBtnClick: function() {
        $("#tps").hide();
        var e = $(this).attr("id"),
        t = !1;
        e.indexOf(".nav") >= 0 && (t = !0, e = e.replace(".nav", ""));
        if (Overlay.isSwitch != 1 && resRoot[Overlay.id] == resRoot[e]) return;
        Overlay.rootId = e,
        Overlay.id = e,
        Overlay.isSwitch = e,
        resRoot[e] ? (Overlay.ctn = "mscSch", Overlay.direction = "left") : (Overlay.ctn = "apps", Overlay.direction = "right");
        var n = Core.bodyWidth - $("#" + e).offset().left;
        for (var r in resRoot) r == e ? (resRoot[r] ? n -= 37 : n -= 22, $("#" + Overlay.ctn + "Ctn").isDisplay() && !Core.ie67 ? $("#" + Overlay.direction + "Ar").animate({
            right: n + "px"
        },
        {
            queue: !1,
            duration: 300
        }) : $("#" + Overlay.direction + "Ar").css({
            right: n + "px"
        })) : resRoot[e] == resRoot[r] && $("#" + r).removeClass("selected");
        Overlay.ctn == "apps" && $(".drgbEvt").remove(),
        $(this).isClass("selected") ? Overlay.menuHide(e, Overlay.ctn, Overlay.direction) : ($("#" + Overlay.ctn + "Nav").empty().hide(), $("#frdCtNav").hide(), $("#appsCtn").addClass("appCt").removeClass("frdCt"), $("#appsCttCtn").html("").hide().removeClass("lstCtn"), Overlay.menuShow()),
        $("#" + Overlay.ctn + "CttCtn").attr("tag", Overlay.id)
    },
    menuHide: function(e, t, n) {
        Cht.fuid = "",
        $(".drgbEvt").remove(),
        Core.ie68 ? $("#" + n + "Ar").hide() : $("#" + n + "Ar").animate({
            opacity: "0"
        },
        {
            queue: !1,
            duration: 300,
            complete: function() {
                $(this).hide(),
                $(this).css({
                    opacity: "1"
                })
            }
        });
        var r = function() {
            $("#" + t + "Ctn").hide(),
            $("#" + t + "Ctn").css({
                opacity: "1"
            }),
            $("#" + t + "CttCtn").html("").hide(),
            $("#appsCtn").addClass("appCt").removeClass("frdCt"),
            $("#appsCttCtn").removeClass("lstCtn"),
            Overlay.isSwitch = !0,
            $("#appsCtn").isDisplay() || (Overlay.id = "", Overlay.rootId = "")
        };
        resRoot[e] ? Core.ie67 ? ($("#" + t + "Ctn").css({
            width: Overlay.HIDE_WIDTH + "px",
            height: Overlay.HIDE_HEIGHT + "px",
            right: Core.bodyWidth - $("#mscSch").offset().left - Overlay.MSC_SCH_OFFSET + "px"
        }), r()) : $("#" + t + "Ctn").animate({
            width: Overlay.HIDE_WIDTH + "px",
            height: Overlay.HIDE_HEIGHT + "px",
            right: Core.bodyWidth - $("#mscSch").offset().left - Overlay.MSC_SCH_OFFSET + "px",
            opacity: "0"
        },
        500, r) : Core.ie67 ? ($("#" + t + "Ctn").css({
            width: Overlay.HIDE_WIDTH + "px",
            height: Overlay.HIDE_HEIGHT + "px"
        }), r()) : $("#" + t + "Ctn").animate({
            width: Overlay.HIDE_WIDTH + "px",
            height: Overlay.HIDE_HEIGHT + "px",
            opacity: "0"
        },
        500, r),
        $("#" + e).removeClass("selected")
    },
    menuShow: function() {
        Cht.fuid = "",
        $("#" + Overlay.id).addClass("selected"),
        Overlay.id == "tkrs" ? $("#tkrsCount").hide() : Overlay.id == "apps" ? ($("#appsCount").hide(), $("#appNewIcon").hide()) : Overlay.id == "frdCt" && ($("#frdsCount").hide(), $("#frdCtNewIcon").hide()),
        $("#" + Overlay.ctn + "Ctn").css({
            "background-image": "url('../images/loading.gif')"
        }).show(),
        $("#" + Overlay.direction + "Ar").show(),
        $("#appsCttCtn").is(":animated") && $("#appsCttCtn").stop(),
        $("#" + Overlay.ctn + "CttCtn").css({
            "border-bottom-width": "0px",
            height: "auto"
        });
        if (res[Overlay.id][URL] == "") Overlay.id == "frdCt" ? (Frd.init = !0, Frd.jump(Frd.tab)) : Overlay.switchAnimate(resData[Overlay.id]);
        else {
            var page = "",
            ps = 0;
            resStyle[Overlay.id][2] == 3 && (Overlay.getMaxCount(), ps = Overlay.maxRowCount * Overlay.maxColCount, ps > resStyle[Overlay.id][4] && (ps = resStyle[Overlay.id][4], ps -= ps % Overlay.maxColCount), res[Overlay.id][URL].indexOf("?") >= 0 ? page = "&st=0&ps=" + ps: page = "?st=0&ps=" + ps);
            if (Overlay.id == "tkrs") if (Apps.tickerCache == null) $.ajax({
                url: res[Overlay.id][URL] + page,
                success: Overlay.switchAnimate
            });
            else {
                var tempTickerCache = Apps.tickerCache;
                tempTickerCache.items.length > ps && (tempTickerCache.items = tempTickerCache.items.slice(0, ps));
                var response = "{success:true, result:" + json2str(tempTickerCache) + "}";
                Overlay.switchAnimate(eval("(" + response + ")"))
            } else $.ajax({
                url: res[Overlay.id][URL] + page,
                success: Overlay.switchAnimate
            })
        }
    },
    brdChildClick: function(e, t) {
        $("#tps").hide(),
        t == undefined && (t = $(this).attr("mid")),
        Overlay.id = t,
        Overlay.id == "frdCt" && $("#frdsCount").hide(),
        Overlay.rootId = res[Overlay.id][PARENT].split(".")[0],
        Overlay.rootId == "mscSch" ? Overlay.ctn = "mscSch": Overlay.ctn = "apps",
        $("#" + Overlay.ctn + "Ctn").css({
            "background-image": "url('../images/loading.gif')"
        }).show(),
        $("#appsCttCtn").attr("tag", Overlay.id),
        $("#appsCttCtn").css({
            "border-bottom-width": "0px",
            height: "auto"
        }),
        $("#appsCtn").addClass("appCt").removeClass("frdCt"),
        $("#frdCtNav").hide();
        if (res[Overlay.id][HTML_POS] == 0) Overlay.execution($(this));
        else if (res[Overlay.id][URL] == "") $("#" + Overlay.ctn + "CttCtn").html(""),
        Overlay.switchAnimate(resData[Overlay.id]);
        else {
            var n = "";
            if (resStyle[Overlay.id][2] == 3 || resStyle[Overlay.id][2] == 2) {
                Overlay.getMaxCount();
                var r = Overlay.maxRowCount * Overlay.maxColCount;
                r > resStyle[Overlay.id][4] && (r = resStyle[Overlay.id][4], r -= r % Overlay.maxColCount),
                Overlay.id == "invtApp" && (r = Apps.MAX_INVT),
                res[Overlay.id][URL].indexOf("?") >= 0 ? n = "&st=0&ps=" + r: n = "?st=0&ps=" + r
            }
            $("#" + Overlay.ctn + "CttCtn").html("").css({
                "border-bottom-width": "0px"
            }),
            $.ajax({
                url: res[Overlay.id][URL] + n,
                success: function(e) {
                    Overlay.id == t && Overlay.switchAnimate(e)
                }
            })
        }
    },
    getMaxCount: function() {
        var e = 20,
        t, n, r, i, s, o = 0,
        u = 0;
        resStyle[Overlay.id] == undefined ? (t = 200, n = 100, r = 1, i = 3) : (t = resStyle[Overlay.id][0], n = resStyle[Overlay.id][1], r = resStyle[Overlay.id][2], i = resStyle[Overlay.id][3]),
        Overlay.rootId != Overlay.id && (u += 61);
        if (r) {
            r == 2 && (u += resStyle[Overlay.id][4]);
            if (r == 3) {
                Overlay.maxColCount = parseInt((Core.bodyHeight - 110 - u) / n);
                var a = 0;
                Overlay.rootId == "apps" ? a = Core.bodyWidth / 2 - 285 : a = Core.bodyWidth - (Core.bodyWidth / 2 + 250) - 55,
                Overlay.maxRowCount = parseInt((Core.bodyWidth - 20 - 15 - a) / t)
            }
        }
        Overlay.maxRowCount > resStyle[Overlay.id][3] && (Overlay.maxRowCount = resStyle[Overlay.id][3]),
        Overlay.id == "olFrd" || Overlay.id == "inHs" || Overlay.id == "rbsFrd" || Overlay.id == "qq" || Overlay.id == "rr" || Overlay.id == "wb" || Overlay.id == "db" ? Overlay.maxRowCount = Overlay.maxRowCount > 3 ? 3 : Overlay.maxRowCount: bdgId[Overlay.id] != undefined && (Overlay.maxRowCount = Overlay.maxRowCount > 4 ? 4 : Overlay.maxRowCount)
    },
    switchAnimate: function(e) {
        if (e.success != undefined && !e.success) {
            Overlay.isSwitch = !0;
            return
        }
        $("#" + Overlay.ctn + "CttCtn").css({
            "border-bottom-width": "1px"
        }),
        Overlay.result = e.result;
        var t = 20,
        n, r, i, s, o, u = 0,
        a = 0;
        n = resStyle[Overlay.id][0],
        r = resStyle[Overlay.id][1],
        i = resStyle[Overlay.id][2],
        s = resStyle[Overlay.id][3],
        Overlay.ctn != "apps" && (i == 3 && $("#appsCtn").isDisplay() ? ($("#tkrs").isClass("selected") ? Overlay.menuHide("tkrs", "apps", "right") : $("#apps").isClass("selected") ? Overlay.menuHide("apps", "apps", "right") : $("#frdCt").isClass("selected") && Overlay.menuHide("frdCt", "apps", "right"), $("#appsCttCtn").attr("tag", "")) : $("#appsCtn").attr("mark") == "3" && ($("#tkrs").isClass("selected") ? Overlay.menuHide("tkrs", "apps", "right") : $("#apps").isClass("selected") ? Overlay.menuHide("apps", "apps", "right") : $("#frdCt").isClass("selected") && Overlay.menuHide("frdCt", "apps", "right"), $("#appsCttCtn").attr("tag", ""))),
        $("#" + Overlay.ctn + "Ctn").attr("mark", i).css({
            overflow: "hidden"
        }),
        Overlay.rootId != Overlay.id && (a += 61);
        if (i) {
            i == 2 && (a += resStyle[Overlay.id][4]);
            var f = 0;
            for (var l = 0; l < Overlay.result.items.length; ++l) {
                if (Overlay.result.items[l].display == undefined) {
                    f = Overlay.result.items.length;
                    break
                }
                Overlay.result.items[l].display == "true" && ++f
            }
            Overlay.id == "thm" && (f = Overlay.maxColCount < Thm.length ? Overlay.maxColCount: Thm.length, Overlay.result.st = 0, Overlay.result.ps = f, Overlay.result.total = Thm.length),
            Overlay.count = f,
            Overlay.id == "sch" && f > 4 && (f = 4);
            if (f != 0 || resStyle[Overlay.id][2] != 1 && resStyle[Overlay.id][2] != 3) {
                do {
                    var c = a;
                    o = f / s + "", o.indexOf(".") >= 0 ? o = parseInt(o) + 1 : o = parseInt(o), c += r * o;
                    if (! (c + 110 > Core.bodyHeight)) {
                        a = c;
                        break
                    }++s
                } while ( i == 3 || i == 1 );
                do {
                    var h = u;
                    h += n * s;
                    if (! (h > Core.bodyWidth)) {
                        u = h;
                        break
                    }--s
                } while ( i == 3 || i == 1 );
                Overlay.id == "sch" && (u = 390)
            } else u = 390,
            a = 197,
            Overlay.rootId != Overlay.id && (a += 61);
            $("#" + Overlay.ctn + "CttCtn").css({
                width: u + 1
            })
        } else {
            u += n,
            a += r;
            if (Overlay.id == "fltrApp") {
                if (Overlay.result.items.length != 0) {
                    var p = "";
                    for (var l = 0; l < Overlay.result.items.length; ++l) p += Apps.fltrGnHtml(Overlay.result.items[l]);
                    a += Apps.fltrHeight(p)
                }
            } else Overlay.id == "mtFrds" ? Overlay.result.items.length != 0 && (a += 216) : Overlay.id == "mtFrds" && Overlay.result.items.length != 0 && (a = 294)
        }
        Overlay.id == "dsply" && !Core.ipad && Core.webkit && (a += 71),
        Overlay.rowCount = s,
        Overlay.colCount = o,
        $("#" + Overlay.ctn + "Nav").css({
            width: u - 1
        }),
        Overlay.lastButtonColor(),
        $("#" + Overlay.ctn + "CttCtn").hide();
        var d = function() {
            $("#" + Overlay.ctn + "CttCtn").css({
                left: u + t + 5 + "px"
            }),
            Overlay.flyData()
        };
        if (Overlay.rootId == "mscSch") {
            var v = Core.bodyWidth - $("#mscSch").offset().left - Overlay.MSC_SCH_OFFSET,
            m = Core.bodyWidth - v - (u + t + 15);
            m < 0 ? Core.ie67 ? ($("#" + Overlay.ctn + "Ctn").css({
                width: u + "px",
                height: a + "px",
                right: v + m + "px"
            }), d()) : $("#" + Overlay.ctn + "Ctn").animate({
                width: u + "px",
                height: a + "px",
                right: v + m + "px"
            },
            300, d) : Core.ie67 ? ($("#" + Overlay.ctn + "Ctn").css({
                width: u + "px",
                height: a + "px",
                right: v + "px"
            }), d()) : $("#" + Overlay.ctn + "Ctn").animate({
                width: u + "px",
                height: a + "px",
                right: v + "px"
            },
            300, d)
        } else Core.ie67 ? ($("#" + Overlay.ctn + "Ctn").css({
            width: u + "px",
            height: a + "px"
        }), d()) : $("#" + Overlay.ctn + "Ctn").animate({
            width: u + "px",
            height: a + "px"
        },
        300, d);
        Overlay.rowCount = s,
        Overlay.colCount = o,
        Overlay.animateWidth = u
    },
    flyData: function() {
        Overlay.rootId != Overlay.id ? ($("#" + Overlay.ctn + "CttCtn").css({
            top: "71px"
        }), Overlay.navigation(), $("#" + Overlay.ctn + "Nav").css("opacity") == 0 && $("#" + Overlay.ctn + "Nav").css({
            opacity: 1
        })) : $("#" + Overlay.ctn + "CttCtn").css({
            top: "10px"
        });
        if (Overlay.count != 0 || resStyle[Overlay.id][2] != 1 && resStyle[Overlay.id][2] != 3) res[Overlay.id][HTML_POS] != 0 && eval(resHtml[res[Overlay.id][HTML_POS]])();
        else {
            var str = "";
            Overlay.rootId == "mscSch" ? str = '这里还是空的呢，赶快解锁对应的勋章 <a id="nullBdgCtn" href="#">如何解锁？</a>': Overlay.id == "sns" && (str = '你还没有绑定任何社交网络，<a href="#" class="snsBindEvt">快去绑定吧</a>'),
            $("#" + Overlay.ctn + "CttCtn").html(Overlay.noCttHtml(str)),
            bdgId[Overlay.id] != undefined && Core.getCookie("bdg") == null && ($("#nullBdgCtn").click(), Core.setCookie("bdg", "true"))
        }
        $("#" + Overlay.ctn + "CttCtn").children().length > 0 && $("#" + Overlay.ctn + "CttCtn").show();
        var flyDataAfter = function() {
            Core.getCookie("nextIconTps") == null && $("#menuMore").length != 0 && ($("#tps .tpsCtn .ctt").text("下一页"), $("#tps").css({
                left: $("#menuMore").offset().left - 35,
                top: $("#menuMore").offset().top - 56
            }).show(), Core.setCookie("nextIconTps", "true")),
            $("#" + Overlay.ctn + "Ctn").css({
                overflow: "visible",
                "background-image": "none"
            });
            if (Overlay.id == "apps") {
                var e = "";
                Overlay.arr = new Object;
                for (var t = 0; t < Overlay.count; ++t) {
                    var n = Core.bodyWidth - $("#menu" + t).offset().left - resStyle.apps[0],
                    r = Core.bodyHeight - $("#menu" + t).offset().top - resStyle.apps[1];
                    Overlay.arr[t] = new Array,
                    Overlay.arr[t][0] = n + resStyle.apps[0],
                    Overlay.arr[t][1] = n,
                    Overlay.arr[t][2] = r + resStyle.apps[1],
                    Overlay.arr[t][3] = r,
                    e += '<div id="drag' + t + '" class="iconCtn drgb drgbEvt" style="right:' + n + "px; bottom:" + r + 'px"></div>'
                }
                $("body").append(e),
                $(".drgbEvt").mousedown(Overlay.drgbEvtMouseDown)
            }
            Overlay.isSwitch = !0
        };
        Core.ie67 ? ($("#" + Overlay.ctn + "CttCtn").css({
            left: "10px"
        }), flyDataAfter()) : $("#" + Overlay.ctn + "CttCtn").animate({
            left: "10px"
        },
        300, "linear", flyDataAfter)
    },
    menuHtml: function() {
        var e = "",
        t = Overlay.count;
        Overlay.rowCount * Overlay.colCount > t && (t = Overlay.rowCount - t % Overlay.rowCount + t);
        var n = "";
        Overlay.id == "apps" && (n = '<div class="icon unkn"></div><span>获得更多App</span>');
        for (var r = 0,
        i = 0; r < t; ++r, ++i) if (Overlay.count <= r) e += '<a href="#" class="iconCtn" id="getApp">' + n + "</a>",
        Overlay.id == "apps" && (n = "");
        else {
            while (Overlay.result.items[i].display == "false")++i;
            var s = "";
            if (Overlay.id == "ext") {
                var o = Overlay.result.items[i].mid;
                if (ConverSns[o] != undefined) {
                    o = ConverSns[o];
                    for (var u = 0; u < resData.frdCt.result.items.length; ++u) if (resData.frdCt.result.items[u].mid == o) {
                        resData.frdCt.result.items[u].display == "true" && (s = "<span class='selected'></span>");
                        break
                    }
                }
            }
            var a = "";
            Overlay.id == "apps" && (a = "id='menu" + r + "'");
            var f = "",
            l = Overlay.result.items[i].mid;
            l == "olFrd" || l == "frdCt" ? Signup.onlineCount != 0 ? f = '<em class="num serif">' + Signup.onlineCount + "</em>": f = '<em class="num serif hide"></em>': l == "invtApp" && Signup.userDetail.c != 0 ? f = '<em class="num serif">' + Signup.userDetail.c + "</em>": l == "chtApp" && Cht.offlineCount != 0 && (f = '<em class="num serif">' + Cht.offlineCount + "</em>");
            var c = !1,
            h = Signup.userDetail.newview.m,
            o = "";
            for (var p = 0; p < h.length; ++p) {
                var d = h[p].split("-");
                for (var u = 0; u < d.length; ++u) if (d[u] == l) {
                    u == d.length - 1 && (o = h[p]),
                    c = !0;
                    break
                }
                if (c) break
            }
            if (l == "sch" && Signup.userDetail.newview.k.length != 0 || (l == "thm" || l == "st") && Signup.userDetail.newview.t.length != 0 || c || Core.isNewBdg(l)) f = '<em class="newApp" style="right:12px; top:15px; left:auto"></em>',
            o != "" && Core.ulNewIcon("m", o);
            e += "<a " + a + ' mid="' + l + '" href="#" class="iconCtn brdChildEvt">' + '<div class="icon ' + l + '"></div>' + "<span>" + Overlay.result.items[i].name + "</span>" + f + s + "</a>"
        }
        $("#" + Overlay.ctn + "CttCtn").html(e)
    },
    navigation: function(e) {
        var t = res[Overlay.id][PARENT].split(".");
        e == undefined ? t[t.length] = Overlay.id: t[t.length] = e;
        var n = "";
        for (var r = 0; r < t.length; ++r) {
            var i = "",
            s = "",
            o = "",
            u = "",
            a = "",
            f = t[r];
            r == 0 ? (f += ".nav", o = "brdBtnEvt", a = "id") : (s = '<span class="spt"></span>', o = "brdChildEvt", a = "mid");
            if (r == t.length - 1) {
                i = "crt";
                var l = "";
                res[t[r]] == undefined ? l = t[r] : l = res[t[r]][NAME],
                u = '<em id="' + f + '" href="#">' + l + "</em>",
                u += '<span class="rBox">';
                if ((resStyle[Overlay.id][MARK] == 3 || resStyle[Overlay.id][MARK] == 2) && Overlay.result.total > Overlay.result.ps + Overlay.result.st || Overlay.id == "sch" && Overlay.result.items.length > 4) u += '<a href="#" id="menuMore" class="more" onclick="Overlay.more();"></a>';
                ConverSns[Overlay.id] != undefined && (u += '<a href="#" id="menuRfrsh" class="rfrsh" onclick="Apps.refreshFriends();"></a>'),
                Overlay.id == "love" && Overlay.result.items.length != 0 && (u += '<a href="#" id="menuLove" class="love gnsAttrTextFly" text="@' + Signup.userDetail.nick + '"></a>');
                if (Overlay.id == "stctApp" || Overlay.id == "fltrApp") u += '<a href="#" id="menuVo" class="vo" onclick="Guide.appGuideShow(\'' + Overlay.id.replace("App", "") + "');\"></a>";
                u += "</span>"
            } else u = "<a " + a + '="' + f + '" class="' + o + '" href="#">' + res[t[r]][NAME] + "</a>";
            n += '<li class="brdBtn ' + i + '">' + s + u + "</li>"
        }
        $("#" + Overlay.ctn + "Nav").html(n).show(),
        Overlay.lastButtonColor(e)
    },
    more: function() {
        $("#tps").hide(),
        Overlay.id = $("#" + Overlay.ctn + "CttCtn").attr("tag");
        if (Overlay.result.st + Overlay.result.items.length >= Overlay.result.total) return;
        var uri = res[Overlay.id][URL];
        uri.indexOf("?") >= 0 ? uri += "&": uri += "?",
        uri += "st=" + (Overlay.result.st + Overlay.result.items.length) + "&ps=" + Overlay.result.ps,
        $.ajax({
            url: uri,
            success: function(response) {
                if (!response.success) {
                    Gns.nowGns(response.msg);
                    return
                } (response.result.total <= response.result.st + response.result.items.length || Overlay.id == "thm") && $("#menuMore").remove(),
                Overlay.id != "thm" && (Overlay.result = response.result),
                Overlay.moreAnimate(),
                eval(resHtml[res[Overlay.id][HTML_POS]].replace("Html", "More"))()
            }
        })
    },
    moreAnimate: function() {
        var e = 20,
        t, n, r, i, s = 0,
        o = 61;
        t = resStyle[Overlay.id][0],
        n = resStyle[Overlay.id][1],
        i = resStyle[Overlay.id][2],
        r = resStyle[Overlay.id][3];
        var u = Overlay.result.items.length;
        Overlay.id == "thm" && (u = Thm.length - Overlay.count);
        do {
            var a = o;
            colCount = u / r + "", colCount.indexOf(".") >= 0 ? colCount = parseInt(colCount) + 1 : colCount = parseInt(colCount), a += n * colCount;
            if (! (a + 110 > Core.bodyHeight)) {
                o = a;
                break
            }++r
        } while ( i == 3 );
        do {
            var f = s;
            f += t * r;
            if (! (f > Core.bodyWidth)) {
                s = f;
                break
            }--r
        } while ( i == 3 );
        i == 2 && (o += resStyle[Overlay.id][4]),
        $("#" + Overlay.ctn + "Nav").css({
            width: t * r - 1
        }),
        Overlay.lastButtonColor(),
        $("#" + Overlay.ctn + "CttCtn").css({
            width: t * r
        });
        if (Overlay.rootId == "mscSch") {
            var l = Core.bodyWidth - $("#mscSch").offset().left - Overlay.MSC_SCH_OFFSET,
            c = Core.bodyWidth - l - (s + e + 15),
            h = 0;
            c < 0 ? h = l + c: h = l,
            Core.ie67 ? $("#" + Overlay.ctn + "Ctn").css({
                width: s + "px",
                height: o + "px",
                right: h + "px"
            }) : $("#" + Overlay.ctn + "Ctn").animate({
                width: s + "px",
                height: o + "px",
                right: h + "px"
            },
            {
                queue: !1,
                duration: 300
            })
        } else Core.ie67 ? $("#" + Overlay.ctn + "Ctn").css({
            width: s + "px",
            height: o + "px"
        }) : $("#" + Overlay.ctn + "Ctn").animate({
            width: s + "px",
            height: o + "px"
        },
        {
            queue: !1,
            duration: 300
        });
        Overlay.rowCount = r,
        Overlay.colCount = colCount,
        Overlay.animateWidth = s
    },
    vo: function(e) {
        if ($("#menuVo").isClass("selected")) $("#menuVo").removeClass("selected"),
        Player.pauseMsgTone();
        else {
            $("#menuVo").addClass("selected"),
            Player.msgTongType = e;
            var t = "http://jingfm.duomi.com/vo/guide/" + e + ".m4a";
            Player.isPlay && Player.playCtl(),
            Player.msgTone.jPlayer("setMedia", {
                m4a: t
            }).jPlayer("play")
        }
    },
    lastButtonColor: function(e) {
        var t = 0,
        n;
        if ($("#" + Overlay.ctn + "Nav").children(".brdBtn").length == 0) return;
        $("#" + Overlay.ctn + "Nav").children(".brdBtn").each(function() {
            $(this).attr("class").indexOf("crt") == -1 ? t += $(this).width() : n = $(this)
        });
        var r = 0;
        e != undefined ? r = 390 : r = $("#" + Overlay.ctn + "Nav").width();
        var i = r - t + "px";
        n.css({
            width: i
        })
    },
    drgbEvtMouseDown: function() {
        if (Overlay.isDrag) return;
        var e = Number($(this).attr("id").replace("drag", ""));
        Overlay.dragId = e;
        var t, n, r = 25,
        i = 80,
        s = $("#appsCttCtn").children().length,
        o = s / 3 + "",
        u = 0;
        o.indexOf(".") >= 0 && ++parseInt(o),
        s > 3 ? u = 3 : u = s,
        o = parseInt(o),
        t = u - e % u,
        e += 1,
        (e / u + "").indexOf(".") >= 0 ? n = parseInt(e / u) : n = parseInt(e / u) - 1,
        n = o - n;
        var a = Core.bodyWidth - Core.mouseX,
        f = Core.bodyHeight - Core.mouseY;
        $("#dragMenu").css({
            right: a + "px",
            bottom: f + "px"
        }),
        Overlay.rightX = a,
        Overlay.bottomY = f,
        Overlay.mouseOffsetRight = t * resStyle.apps[0] + r - a,
        Overlay.mouseOffsetBottom = n * resStyle.apps[1] + i - f,
        Overlay.isMouseOver = 1
    },
    mousemove: function() {
        var e = Core.bodyWidth - Core.mouseX,
        t = Core.bodyHeight - Core.mouseY,
        n = Math.abs(Overlay.rightX - e),
        r = Math.abs(Overlay.bottomY - t);
        if (n < 3 && r < 3) return;
        Overlay.isDrag == 0 && (Overlay.isDrag = 1, dragMenuHtml = $("#menu" + Overlay.dragId).html(), $("#dragMenu").attr("mid", $("#menu" + Overlay.dragId).attr("mid")).html(dragMenuHtml).show(), $("#menu" + Overlay.dragId).html(""));
        var i = Core.bodyWidth - Core.mouseX + Overlay.mouseOffsetRight - resStyle.apps[0],
        s = Core.bodyHeight - Core.mouseY + Overlay.mouseOffsetBottom - resStyle.apps[1];
        $("#dragMenu").css({
            right: i + "px",
            bottom: s + "px"
        }),
        i += resStyle.apps[0] / 2,
        s += resStyle.apps[1] / 2;
        for (var o = 0; o < Overlay.count; ++o) {
            if (Overlay.dragId == o) continue;
            if (i < Overlay.arr[o][0] && i > Overlay.arr[o][1] && s < Overlay.arr[o][2] && s > Overlay.arr[o][3]) {
                var u = $("#menu" + Overlay.dragId).attr("mid");
                $("#menu" + Overlay.dragId).remove(),
                Overlay.dragId > o ? $("#menu" + o).before('<a class="iconCtn brdChildEvt" mid="' + u + '"></a>') : $("#menu" + o).after('<a class="iconCtn brdChildEvt" mid="' + u + '"></a>'),
                $("#appsCttCtn").children(".iconCtn").each(function(e) {
                    Overlay.count > e && $(this).attr("id", "menu" + e)
                }),
                Overlay.dragId = o;
                break
            }
        }
        $("#dragMenu").attr("value", i + resStyle.apps[0] / 2 + "," + (s + resStyle.apps[1] / 2))
    },
    mouseup: function() {
        var e = Overlay.dragId;
        Overlay.dragId = -1;
        if (Overlay.isDrag) {
            var t = $("#dragMenu").html(),
            n = $("#dragMenu").attr("mid");
            $("#dragMenu").animate({
                right: $("#drag" + e).css("right"),
                bottom: $("#drag" + e).css("bottom")
            },
            300,
            function() {
                $("#menu" + e).html(t),
                $("#dragMenu").css({
                    right: "0px",
                    bottom: "0px"
                }).html("").hide(),
                $(".drgbEvt").remove();
                var r = "",
                i = "";
                for (var s = 0; s < Overlay.count; ++s) {
                    var o = Core.bodyWidth - $("#menu" + s).offset().left - resStyle.apps[0],
                    u = Core.bodyHeight - $("#menu" + s).offset().top - resStyle.apps[1];
                    r += '<div id="drag' + s + '" class="iconCtn drgb drgbEvt" style="right:' + o + "px; bottom:" + u + 'px"></div>';
                    var a = $("#menu" + s).attr("mid");
                    a == undefined && (a = n),
                    i += a + ","
                }
                i = i.substring(0, i.length - 1),
                $("body").append(r),
                $(".drgbEvt").mousedown(Overlay.drgbEvtMouseDown),
                $.ajax({
                    url: Core.API_VER + "/account/post_menu_orders",
                    data: {
                        uid: Signup.userDetail.id,
                        pmid: "apps",
                        mids: i
                    },
                    dataType: "xml",
                    success: Overlay.xmlRoot
                }),
                Overlay.isDrag = 0
            })
        } else {
            var r = $("#menu" + e).attr("mid");
            r == "top" || r == "gd" ? $(".drgbEvt").hide() : $(".drgbEvt").remove(),
            $("#menu" + e).click(),
            Overlay.isDrag = 0
        }
    },
    execution: function(e) {
        if (resUrl[Overlay.id] != undefined) {
            Overlay.ext(e);
            return
        }
        if (resEmail[Overlay.id] != undefined) {
            window.open(Core.API_VER + "/oauth/mailauthorize?uid=" + Signup.userDetail.id + "&type=" + Overlay.id, "_blank", "directories=0, location=0, menubar=0, resizable=0, status=0, toolbar=0");
            return
        }
        if (Overlay.id == "gd") {
            if (Flw.isFlw && Flw.toid != "") {
                Gns.nowGns("你正在跟听中，暂时不能做其他操作哦。");
                return
            }
            Guide.step1()
        } else if (Overlay.id == "top") {
            if (Flw.isFlw && Flw.toid != "") {
                Gns.nowGns("你正在跟听中，暂时不能做其他操作哦。");
                return
            }
            Top.show()
        }
        $("#appsCtn, #rightAr").hide(),
        $("#apps").removeClass("selected"),
        Core.isFullScren = !0
    },
    ext: function(e) {
        if (Core.standalone) {
            Gns.nowGns('请打开Safari访问 <a href="#" class="trg">http://jing.fm</a>，进行好友扩展');
            return
        }
        if (e.children(".selected").length == 0) Overlay.openSns(Overlay.id);
        else {
            if (!confirm("确定解除绑定吗？")) return;
            $.ajax({
                url: Core.API_VER + "/oauth/remove_bind",
                data: {
                    uid: Signup.userDetail.id,
                    identify: res[Overlay.id][URL]
                },
                success: function(t) {
                    if (!t.success) {
                        Gns.nowGns(t.msg);
                        return
                    }
                    e.children(".selected").remove()
                }
            })
        }
    },
    openSns: function(e) {
        var t = snsWindowWh[e][0],
        n = snsWindowWh[e][1],
        r = (Core.screenWidth - t) / 2,
        i = (Core.screenHeight - n - 68) / 2,
        s = resSns[e],
        o = Core.API_VER + "/oauth/proxyauthorize?action=BIND&identify=" + s + "&standalone=" + Core.standalone;
        window.open(o, "_blank", "width=" + t + "px, height=" + n + "px, left=" + r + "px, top=" + (Core.screenHeight - n - 68) / 2 + "px, directories=0, location=0, menubar=0, resizable=0, status=0, toolbar=0")
    },
    authCallback: function(e) {
        e.success ? Gns.nowGns("你已成功导入" + resEmail[e.result.identify] + "好友") : Gns.nowGns("你导入" + resEmail[e.result.identify] + "失败，重新试试。")
    },
    noCttHtml: function(e) {
        if (e == "" || e == undefined) e = "这里现在是空的，赶快填满它吧！";
        var t = '<div class="noCtt"><div class="icon box"></div><p class="ctn">' + e + "</p>" + "</div>";
        return t
    },
    resize: function() {}
},
Retina = {
    enabled: !1,
    suffix: "@2x",
    className: "retina",
    init: function() {
        window.devicePixelRatio && (Retina.enabled || window.devicePixelRatio >= 2) && (Retina.enabled = !0, Core.A30 += Retina.suffix, Core.A50 += Retina.suffix, Core.A64 += Retina.suffix, $("html").addClass(Retina.className))
    }
},
ClientIdArr = new Array,
Now = {
    init: function() {
        window.now = nowInitialize(NOW_URL, {}),
        now.ready(function() {
            console.log("now enter ready");
            var e = $("html").attr("now_time") + "-" + Core.nowSuccess;
            ClientIdArr[ClientIdArr.length] = window.now.core.clientId,
            now.connectionUnique(Signup.userDetail.id, Signup.userDetail.nick, e,
            function() {++Core.nowSuccess,
                console.log("now connection regist success"),
                Core.nowIsReady = !0
            },
            Selector_browser)
        }),
        now.receiveTickerMessage = function(message) {
            message = eval("(" + message + ")"),
            Apps.tickerCache != null && (Apps.tickerCache.items = (new Array(message)).concat(Apps.tickerCache.items), resStyle.tkrs[4] < Apps.tickerCache.items.length && (Apps.tickerCache.items = Apps.tickerCache.items.slice(0, resStyle.tkrs[4])));
            if (Overlay.id == "tkrs") {
                var html = Apps.tkrsGnHtml(message, 0);
                $("#appsCttCtn").children().last().remove(),
                $("#appsCttCtn").prepend(html),
                (message.t == "C" || message.t == "D") && message.fid == "" && Core.imgLoad($("#appsCttCtn").children().first().find("img"), "", message.avt, 53),
                $("#appsCttCtn").children().each(function(e) {
                    $(this).children("em.serif").text(e + 1 + ".")
                })
            } else {
                if (message.uid == Signup.userDetail.id || Signup.userDetail.sts.tckNtf != "true") return;
                if ($("#tkrsCount").isDisplay()) {
                    var count = $("#tkrsCount").text();
                    if (count == "...") return;
                    count != "" && (count = parseInt(count) + 1),
                    count > 99 && (count = "..."),
                    $("#tkrsCount").text(count)
                } else $("#tkrsCount").text("1"),
                Signup.iconShake("tkrsCount")
            }
        },
        now.receivePrivateMessage = function(message) {
            message = eval("(" + message + ")");
            if (message.t == "lisn") {
                if (Flw.isFlw) return;
                Gns.friendListen(message)
            } else message.t == "chat" ? (Player.setVolumeDown("msgTone", 100), Cht.receiveMessage(message)) : message.t == "acty" ? (Player.setVolumeDown("msgTone", 100), Gns.nowGns('你收到一条活动信息，<a href="#" class="trg gnsSysEvent">去看看</a>')) : Message.send(message)
        },
        now.receiveInputMessage = function(e, t) {
            if (Cht.fuid != e) return;
            Cht.typingMessage(e, t)
        },
        now.disconnect = function(e) {
            for (var t = 0; t < ClientIdArr.length; ++t) if (ClientIdArr[t] == e) return;
            Gns.nowGns('你的帐号已在别的地方登陆了，我们将会在 <em class="serif big">5</em> 秒内退出此帐号。'),
            Core.setCookie("jing.auth", ""),
            setTimeout(function() {
                window.location.reload()
            },
            5e3)
        },
        now.followListenResponseFailOther = function(e, t) {
            $.ajax({
                url: Core.API_VER + "/account/check_frdshp",
                data: {
                    id: Signup.userDetail.id,
                    frdid: e
                },
                success: function(n) {
                    $("#usrTpsCtn").remove();
                    var r = "";
                    n.success ? r = Flw.nick + " 正在跟听 " + t + '，你也要跟听吗？<a id="flwOther" fid="' + e + '" fnick="' + t + '" class="trg" href="#">跟听</a>': r = Flw.nick + " 正在跟听别人",
                    Flw.empty(),
                    setTimeout(function() {
                        Gns.nowGns(r)
                    },
                    500)
                }
            })
        },
        now.followListenRequestSuccess = function() {
            Gns.nowGns('跟听请求已发送给Ta，现在正在等待Ta的许可 <em id="flwCountdown" class="serif big">15</em>', Gns.level1);
            var e = function() {
                if ($("#flwCountdown").length == 0) return;
                var t = parseInt($("#flwCountdown").text()) - 1;
                t > 0 && ($("#flwCountdown").text(t), setTimeout(e, 1e3))
            };
            setTimeout(e, 2e3),
            $("#usrTpsCtn").remove(),
            Flw.serverTmo = setTimeout(function() {
                $("#gnsCtn").attr("tag", ""),
                Gns.nowGns(Flw.nick + "可能不在电脑旁边哦～所以不能跟听啦"),
                Flw.empty()
            },
            17e3)
        },
        now.followListenRequestAuthorize = function(e, t) {
            Player.setVolumeDown("msgTone", 100),
            Gns.nowGns(t + ' 想要让你带着Ta听音乐，<a href="#" id="flwOK" class="trg know" fuid="' + e + '">同意</a> 或 <a href="#" id="flwNO" class="trg know" fuid="' + e + '">拒绝</a> <em class="serif big" id="flwCountdown">15</em> 秒后默认为同意。', Gns.level1);
            var n = function() {
                if ($("#flwCountdown").length == 0) return;
                var e = parseInt($("#flwCountdown").text()) - 1;
                e > 0 ? ($("#flwCountdown").text(e), setTimeout(n, 1e3)) : $("#flwOK").click()
            };
            setTimeout(n, 2e3)
        },
        now.followListenJoin = function(e, t) {
            if (Signup.userDetail.id == e) $("#gnsCtn").attr("tag", ""),
            Gns.nowGns("你正在和 " + Flw.nick + " 收听同样的音乐哦，你可以喜欢、讨厌，但在退出跟听之前不能进行其他操作"),
            clearTimeout(Flw.serverTmo);
            else if (Flw.toid == "") {
                var n = t + " 正在跟着你听音乐哦";
                Flw.users == null && (n += "，点击随便听听查看跟听状态", Flw.users = new Object),
                Gns.nowGns(n),
                Flw.users[e] = t
            } else Gns.nowGns(t + " 加入了跟听")
        },
        now.followListenLeave = function(e, t) {
            if (Flw.toid == e) Gns.nowGns(t + " 停止让你继续跟听Ta，跟听结束。"),
            $("#clsFlwLstn").click();
            else {
                var n = t + " 退出了跟听";
                Flw.toid == "" && (delete Flw.users[e], Core.objLength(Flw.users) == 0 && (Flw.empty(), n += "，跟听已结束")),
                Gns.nowGns(n)
            }
        },
        now.followListenResponseAuthorizeSuccess = function(e) {
            if (!Flw.isFlw) return;
            Core.fullScrenMenuShow("你正在跟听 " + Flw.nick, "flwLstn"),
            Flw.cacheMusic == null && (Flw.cacheMusic = Core.objClone(Player.music[Player.pos], Object), Flw.cacheSec = Player.currentTime),
            Gns.openGnsArr = new Array,
            Flw.play(e)
        },
        now.followListenResponseAuthorizeRefuse = function() {
            $("#gnsCtn").attr("tag", ""),
            Flw.empty(),
            Gns.nowGns("你的好友 " + Flw.nick + " 暂时不想让你跟听，试试收听Ta喜欢的音乐吧")
        },
        now.receiveFollowListenMessage = function(e, t) {
            if (Signup.userDetail.id == e) return;
            var n = t.split(",");
            n[0] == "playing" ? Player.playCtl() : n[0] == "pause" ? (Gns.nowGns("你跟听的人，暂停播放了哦"), Player.pause()) : n[0] == "volume" ? (Player.vlmHideTmo == 0 && Gns.nowGns("你跟听的人，调节了音量哦"), Player.setVolume(Number(n[1]))) : n[0] == "hate" && Flw.toid == "" ? (Gns.nowGns("正在跟听你的" + n[1] + '，表示不想听这首。和他 <a href="#" class="trg offChtNickEvent" nick="' + n[1] + '" fuid="' + e + '" avatar="' + n[2] + '" ol="true">聊聊</a>'), Player.setVolumeDown("msgTone", 100)) : n[0] == "love" && Flw.toid == "" ? Gns.nowGns("正在跟听你的" + n[1] + "，喜欢了这首歌哦") : Flw.play(t)
        }
    }
},
Message = {
    isMessageAni: !1,
    isLoginInit: !1,
    msgOverObj: $("null"),
    init: function() {
        $(document).on("mouseenter", ".msgCtn",
        function() {
            Message.msgOverObj = $(this)
        }).on("mouseleave", ".msgCtn",
        function() {
            Message.msgOverObj = $("null")
        })
    },
    send: function(e) {
        var t = "";
        if (e.t == "uats") {
            t = '你已经喜欢3首 <a class="msgFlyEvent trg" href="#" fid="' + e.fid + '">' + e.arts + "</a> 的歌曲，现在解锁到你的音乐中心。";
            var n = Signup.userDetail.newview.b.length;
            Signup.userDetail.newview.b[n] = "ats-" + e.fid
        } else if (e.t == "ubdg") {
            t = '你刚刚解锁了勋章 <a class="msgFlyEvent trg" href="#" fid="' + e.fid + '">' + e.bdg + "</a> 赶快去体验一下吧。";
            if (e.bt.toLowerCase() != "sns") {
                if (e.n == undefined) {
                    setTimeout(function() {
                        e.n = "true",
                        Message.send(e)
                    },
                    2e3);
                    return
                }
                var n = Signup.userDetail.newview.b.length;
                Signup.userDetail.newview.b[n] = e.bt + "-" + e.fid
            }
        } else if (e.t == "flwd") {
            var r = "";
            e.me_flw || (r = '，你也要 <a href="#" class="trg gnsFlwd" frdid="' + e.flwer_id + '" nick="' + e.flwer + '">关注</a> 吗？'),
            e.flw_id == Signup.userDetail.id ? t = '<a href="#" class="trg">' + e.flwer + "</a> 关注了你" + r: Signup.userDetail.id != e.flw_id && Signup.userDetail.id != e.flwer_id && (t = '你的好友 <a href="#" class="trg">' + e.flwer + '</a> 关注了 <a href="#" class="trg">' + e.flw + "</a>")
        } else if (e.t == "inhs") {
            if (Message.isLoginInit) {
                Message.isLoginInit = !1,
                setTimeout(function() {
                    Message.send(e)
                },
                1e4);
                return
            }
            for (var i = 0; i < e.frds.length; ++i) {
                t += '<a href="#" class="trg gnsInhsEvt">' + e.frds[i] + "</a>，";
                var n = Signup.userDetail.newview.b.length;
                Signup.userDetail.newview.b[n] = "frdCt-inHs-" + e.frd_ids[i]
            }
            t = "你的好友 " + t.substring(0, t.length - 1) + " 入驻Jing了。",
            $("#frdCt").isClass("selected") ? Frd.current == Frd.FRDS ? $(".iconEvent[mid='inHs']").children(".newApp").show() : $("#frds").find(".newApp").show() : Signup.iconShake("frdCtNewIcon")
        } else if (e.t == "atfd") {
            var s = e.cmbt.split(","),
            o = "";
            for (var i = 0; i < s.length; ++i) o += '<a class="msgFlyEvent trg" href="#" fid="">' + s[i] + "</a>+";
            o != "" && (o = o.substring(0, o.length - 1), o = " " + o + " "),
            e.cmbt == "" && (o = ""),
            t = '<a href="#" class="trg">' + e.frd + "</a> 正在收听你喜欢的" + o + "音乐。"
        } else if (e.t == "uapp") {
            for (var i = 0; i < resData[e.pmid].result.items.length; ++i) if (resData[e.pmid].result.items[i].mid == e.mid) {
                resData[e.pmid].result.items[i].display = "" + e.display;
                if (e.display) {
                    t = "你解锁了" + resData[e.pmid].result.items[i].name + '菜单，<a href="#" class="trg uappEvt">去看看</a>。',
                    $("#frdsCount").hide(),
                    ConverSns[e.mid] != undefined ? $("#frds").find(".newApp").show() : Signup.iconShake("appNewIcon"),
                    Signup.userDetail.newview.m[Signup.userDetail.newview.m.length] = e.path,
                    Guide.shrData != null && ConverSns[e.mid + "1"] == Guide.shrData.identify && Guide.shrSend("false");
                    break
                }
                ConverSns[e.mid] != undefined && $("#" + ConverSns[e.mid]).parent().children(".selected").remove();
                return
            }
        } else if (e.t == "ufnc") {
            Signup.userDetail.avbF[e.mid] = !0,
            t = "你解锁了" + e.n + "，快去试试吧。";
            if (e.mid == "smlMsc" || e.mid == "psnRd") t = "你已成功安装" + e.n + "，快去试试吧。",
            Signup.userDetail.avbF[e.mid] = ""
        } else e.t == "rmnd" && (t = e.frd + ' 想要你关注Ta，<a href="#" class="trg gnsFlwd" frdid="' + e.frd_id + '" nick="' + e.frd + '">关注</a>');
        Player.setVolumeDown("msgTone", 100),
        Gns.nowGns(t)
    },
    gnMessage: function(e, t) {
        var n = "";
        if (e.t == "uats") n = "你已经喜欢3首 " + e.arts + " 的歌曲，现在解锁到你的音乐中心。";
        else if (e.t == "ubdg") n = "你刚刚解锁了勋章 " + e.bdg + " 赶快去体验一下吧。";
        else if (e.t == "flwd") {
            var r = "",
            i = "";
            e.me_flw || (r = "chtFlwEvt"),
            t == 1 ? e.flw_id == Signup.userDetail.id ? n = e.flwer + " 关注了你": Signup.userDetail.id != e.flw_id && Signup.userDetail.id != e.flwer_id && (n = "你的好友 " + e.flwer + " 关注了 " + e.flw) : e.flw_id == Signup.userDetail.id ? n = '<a href="#" class="' + r + '" uid="' + e.flwer_id + '" nick="' + e.flwer + '">' + e.flwer + "</a> 关注了你": Signup.userDetail.id != e.flw_id && Signup.userDetail.id != e.flwer_id && (n = "你的好友 " + e.flwer + ' 关注了 <a href="#" class="' + r + '" uid="' + e.flw_id + '" nick="' + e.flw + '">' + e.flw + "</a>")
        } else if (e.t == "inhs") {
            for (var s = 0; s < e.frds.length; ++s) n += e.frds[s] + "，";
            n = "你的好友 " + n.substring(0, n.length - 1) + " 入驻Jing了。"
        } else if (e.t == "atfd") {
            var o = e.cmbt.split(","),
            u = "";
            for (var s = 0; s < o.length; ++s) u += o[s] + "+";
            u != "" && (u = " " + u + " "),
            n = e.frd + " 正在收听你喜欢的" + u.substring(0, u.length - 1) + "音乐。"
        } else if (e.t == "uapp") {
            for (var s = 0; s < resData[e.pmid].result.items.length; ++s) if (resData[e.pmid].result.items[s].mid == e.mid) {
                if (e.display) {
                    n = "你解锁了" + resData[e.pmid].result.items[s].name + "菜单，快去试试吧。";
                    break
                }
                return
            }
        } else if (e.t == "ufnc") {
            n = "你解锁了" + e.n + "，快去试试吧。";
            if (e.mid == "smlMsc" || e.mid == "psnRd") n = "你已成功安装" + e.n + "，快去试试吧。"
        }
        return n
    }
},
Search = {
    TIP_WIDTH: 145,
    TIP_HEIGHT: 170,
    PERCENTAGE: 5,
    INTERVAL: 100,
    rowCount: 0,
    colCount: 0,
    isFly: !1,
    oldStart: 0,
    oldEnd: 0,
    count: 0,
    maxCount: 0,
    keywords: "",
    updateKeywords: null,
    tickerSendTimeout: 0,
    autoKeywords: null,
    st: 0,
    total: 0,
    ps: 0,
    isSearch: !1,
    tid: 0,
    mt: "",
    response: null,
    afterKeywords: "",
    moods: null,
    init: function() {
        $("html").isClass("gecko") && $("#schFld").attr("placeholder", ""),
        $("#schBxCtn").click(Search.schBxCtnClick),
        $("#schFld").keyup(Search.inputKeyup),
        $("#schFld").keydown(Search.inputKeydown),
        $("#schFld").focus(function() {
            Interface.Current != Interface.SEARCH && $("#schBxCtn").click()
        }),
        Search.resize("init"),
        $(document).on("click", ".searchflyCtn",
        function() {
            Search.fly($(this), $(this).attr("fid"), $(this).children("span").html(), !0, !1)
        })
    },
    setSchHint: function() {
        if ($("#schFld").val() == "")(Core.ie69 || Core.gecko) && $("#schBxCtn .schHint").html("Search What You Want to Listen...").css({
            left: "15px"
        }).show();
        else {
            if (Interface.Current == Interface.SEARCH) return;
            $("#schBxCtn .schHint").html("想听更多点击添加"),
            $("#ctnLength").html(Core.inputConver($("#schFld").val()));
            var e = $("#ctnLength").width() + 18 + 7;
            e < 168 ? $("#schBxCtn .schHint").css({
                left: e + "px"
            }).show() : $("#schBxCtn .schHint").hide()
        }
    },
    schBxCtnClick: function() {
        $("#tps").hide();
        if (Interface.Current != Interface.SEARCH) {
            Search.updateKeywords = null,
            Interface.Current = Interface.SEARCH,
            Main.hide(),
            $("#schBxCtn .schHint").hide();
            var e = $("#schFld").val();
            e.length != 0 && Symbol[e.substring(e.length - 3)] == undefined && (e += " + "),
            $("#schFld").val(e),
            $("#schFld").setCursorPosition(e.length),
            $("#mainMenuCtn").css({
                width: "377px"
            }),
            $("#schFld").css({
                width: "328px"
            }),
            $("#mdlHr, #flyAblum, #flySmlAblum").hide(),
            Core.playerCDHide(),
            $("#instSchCtn").show(),
            $("#leftAr").animate({
                right: "+=37"
            },
            300),
            Search.dataUpdate(""),
            $("#schFld").focus()
        }
        return ! 1
    },
    searchBtnClick: function() {
        var e = !0;
        Player.loveCount = 0,
        Player.hateCount = 0,
        Player.isInsertPlay && Player.insertStop(),
        $("#atTipsCtn").html("").hide(),
        $(".tipCtn").length == 1 && Search.flyInput($(".tipCtn").children("span").text(), !0);
        var t = $("#schFld").val();
        t = Search.filterStr(t),
        $("#schFld").val(t),
        t = Search.removeLastSymbol(t);
        if (t == "") {
            $("#schFld").val("");
            return
        }
        Search.st = 0,
        Player.psnRdMusic != null && $("#playerPsnRd").click(),
        clearTimeout(Gns.gnsRcmdTmo),
        Gns.gnsRcmdTmo = setInterval(Gns.rcmd, 6e5),
        t == Search.keywords && (e = !1),
        Search.searchByKeywords(t, 0, 0, e)
    },
    searchByKeywords: function(e, t, n, r) {
        if (e == "") return;
        var i = "";
        e.indexOf("@") >= 0 ? i = Core.API_VER + "/search/at/fetch_pls": e.indexOf("%") >= 0 ? i = Core.API_VER + "/search/sm/fetch_pls": i = Core.API_VER + "/search/ling/fetch_pls";
        var s = Search.tid,
        o = Search.mt;
        Search.tid = 0,
        Search.mt = "",
        Search.isSearch = !0,
        n == 0 && $("#playCtl").addClass("loading"),
        $.ajax({
            url: i,
            data: {
                q: e,
                ps: 5,
                st: n,
                u: Signup.userDetail.id,
                tid: s,
                mt: o
            },
            success: function(n) {
                Search.isSearch = !1;
                if (!n.success) {
                    $("#playCtl").removeClass("loading"),
                    Gns.nowGns("Jing 开了点小差，你过会儿再试试。");
                    return
                }
                n.result.hint != undefined && Search.st == 0 && Gns.nowGns(n.result.hint);
                if (n.result.items.length == 0) {
                    Search.st != 0 ? (Search.st = 0, Search.searchByKeywords(Search.keywords, 0, 0)) : t == 0 && (Search.keywords == e && Player.setPlayerDefault(), $("#playCtl").removeClass("loading"));
                    return
                }
                n.result.moods == undefined ? Search.moods = null: Search.moods = n.result.moods;
                if (n.result.choose == 1) {
                    $("#playCtl").removeClass("loading");
                    var i = "",
                    s = n.result.items;
                    for (var o = 0; o < s.length; ++o) i += '<a href="#" class="trg gnsSchSml" tid="' + s[o].tid + '">' + s[o].n + "</a>",
                    o == s.length - 2 ? i += "，还是 ": i += "，";
                    Gns.nowGns("你想要搜索的歌曲是 " + i + " 演艺的？");
                    return
                }
                if (n.result.multiple != undefined) {
                    var i = "";
                    for (var o = 0; o < n.result.multiple.length; ++o) {
                        var u = n.result.multiple[o].split(":");
                        u[2] == "ats" ? i += "艺人": u[2] == "tas" ? i += "电影原声": u[2] == "sta" ? i += "原声专辑": i += "标签",
                        i += '：<a href="#" class="trg gnsMt" mt="' + n.result.multiple[o] + '">',
                        u[0] == u[1] ? i += u[0] : i += u[0] + "（" + u[1] + "）",
                        i += "</a>、"
                    }
                    Gns.nowGns("还有 " + i.substring(0, i.length - 1) + "，是否要听听？")
                }
                var a = n.result.os;
                if (a != undefined) {
                    osArr = a.split(":");
                    if (! (osArr[1] > 0)) {
                        Search.response = n,
                        Gns.nowGns(osArr[0] + '今年才发行的专辑，还没有老歌呀，<a href="#" class="trg gnsTingOS" keywords="' + e + '">是否收听这盘专辑</a>呢？');
                        return
                    }
                    Gns.nowGns(osArr[0] + "的歌曲都不算太老哦，为你播放 " + osArr[0] + " 尽可能早的歌曲")
                }
                Search.searchAfter(e, n, t, r, !0)
            }
        })
    },
    searchAfter: function(e, t, n, r, i) {
        t.result.tn != undefined && Gns.nowGns('你正在收听 <a href="#" class="trg">' + t.result.tn + "</a> 的相似歌曲"),
        Player.smlMusic = null,
        $("#flySmlAblum").remove(),
        $("#playerSml").removeClass("hiRt selected"),
        setTimeout(function() {
            $("#playerSml").addClass("lwRt")
        },
        0),
        Search.total = t.result.total,
        t.result.cmbt != undefined ? (Search.keywords = t.result.cmbt, e = t.result.cmbt, Search.setSchVal(Search.keywords)) : Search.keywords = e,
        r == 1 && (Search.tickerSendTimeout != 0 && clearTimeout(Search.tickerSendTimeout), e.indexOf("@") == -1 && (Search.tickerSendTimeout = setTimeout(function() {
            $.ajax({
                url: Core.API_VER + "/ticker/post_cmbt",
                data: {
                    uid: Signup.userDetail.id,
                    content: e,
                    tid: t.result.tid,
                    usedCmbt: i
                },
                success: function(e) {
                    e.result != undefined && e.result.rd != undefined && (pHtml = Signup.userDetail.nick + '，试试 <a class="gnsRdFlyEvent trg" href="#">' + e.result.rd + "</a> 的组合", Gns.openGnsArr[Gns.openGnsArr.length] = new Array("rcmd", pHtml), Gns.showGns())
                }
            })
        },
        1e4))),
        n == 0 && (Player.music = new Array);
        var s = n;
        for (var o = 0; o < t.result.items.length; ++o) {
            if (n == 1 && t.result.items[o].tid == Player.music[0].tid) continue;
            Search.setMusic(t.result.items[o], s),
            s += 1
        }
        Search.ps = Player.music.length,
        n == 0 && (Gns.isInsertPlay ? (Player.pos = -1, Gns.insertStop("next")) : (Player.pos = 0, Player.setVolumeDown("play", 400)), Player.playerUI(), Player.closeGns())
    },
    setMusic: function(e, t) {
        Player.music[t] = new Object,
        Player.music[t].fid = e.fid,
        Player.music[t].mid = e.mid,
        Player.music[t].tid = e.tid,
        Player.music[t].name = e.n,
        Player.music[t].duration = e.d,
        e.d < 1 && console.error("duration异常(" + e.d + "), name->" + e.n + ", fid->" + e.tid)
    },
    dataUpdate: function(e) {
        if (e == Search.updateKeywords) return;
        Search.updateKeywords = e,
        $("#atTipsCtn").html("").hide();
        var t = "";
        e == "" ? t = Core.API_VER + "/badge/fetch_pop": t = Core.API_VER + "/search/ling/auto";
        if (e[0] == "%") return;
        $.ajax({
            url: t,
            data: {
                q: e,
                ps: Search.maxCount,
                st: 0
            },
            success: function(e) {
                if (!e.success) return;
                Search.count = e.result.length;
                var t = "",
                n, r = $.makeArray($("#instSchCtn .tipCtn")),
                i = e.result.length,
                s = i < r.length ? r.length: i;
                for (n = 0; n < s; ++n) {
                    if (n >= i) {
                        $(r[n]).remove();
                        continue
                    }
                    var o = e.result[n].fid;
                    o == null && (o = "");
                    var u = e.result[n].t,
                    a = e.result[n].n,
                    f = "";
                    o.indexOf(".") >= 0 ? f = $.id2url(o, "image", "SM", u) : f = Core.badgesUrl(o, 100),
                    n < r.length ? ($(r[n]).attr("fid", o), $(r[n]).children(".tip").css({
                        "background-image": "url('" + f + "')"
                    }), $(r[n]).children("span").text(a)) : t += '<div fid="' + o + '" class="tipCtn searchflyCtn overlay">' + '<div style="background-image:url(' + f + ')" class="tip"></div>' + '<a class="tipMask" href="#"></a>' + "<span>" + a + "</span>" + "</div>"
                }
                $("#instSchCtn").children(".noneTip").remove(),
                $("#instSchCtn").append(t),
                Search.resize()
            }
        })
    },
    userUpdate: function(e) {
        $("#instSchCtn").html(""),
        Search.afterKeywords = e.substring(0, e.indexOf("@")),
        e = e.substring(e.indexOf("@")),
        $.ajax({
            url: Core.API_VER + "/search/at/auto",
            data: {
                q: e,
                ps: 100,
                st: 0,
                u: Signup.userDetail.id
            },
            success: function(t) {
                if (!t.success) return;
                var n = "";
                if (t.result.length == 0) {
                    $("#atTipsCtn").hide();
                    return
                }
                var r = new Array,
                i = t.result.length + 1;
                i > 5 && (i = 5);
                for (var s = 0; s < i; ++s) {
                    var o = "",
                    u = "",
                    a = "",
                    f = "";
                    s == 0 ? (u = e.replace("@", ""), f = "hide selected") : (o = t.result[s - 1].fid, u = t.result[s - 1].n, a = t.result[s - 1].c),
                    n += '<div class="atTip ' + f + '">' + '<div class="avtCtn">' + '<a class="avtMask tiny" href="#"></a>' + '<div class="avt tiny" style="overflow:hidden;position:relative;"><img style="position: absolute; width: 30px; height: 30px;" src="/images/defaults/avatar/' + Core.A30 + '.jpg" /></div>' + "</div>" + '<div class="atName">' + "<p>" + u + "</p>" + "</div>" + '<div class="fvtCnt">' + "<p>" + a + "首</p>" + "</div>" + "</div>",
                    r[s] = o
                }
                $("#tbCtn").css("overflow", "visible"),
                $("#atTipsCtn").html(n).show(),
                $("#atTipsCtn").children().each(function(e) {
                    Core.imgLoad($(this).find("img"), "", r[e], 30)
                }),
                $(".atTip").click(function() {
                    Search.flyInput(Search.afterKeywords + "@" + $(this).children(".atName").children("p").text(), !0),
                    $("#atTipsCtn").hide()
                })
            }
        })
    },
    fly: function(e, t, n, r, i) {
        if (Search.isFly) return ! 1;
        Flw.isFlw && Flw.toid != "" && $("#clsFlwLstn").click(),
        Search.isFly = !0,
        $("#schFld").width() == 329 && (Search.oldStart = $("#schFld").val().length);
        var s = e.offset().left,
        o = e.offset().top;
        n == "随便听听" && (s -= e.width(), o -= e.height());
        var u = "";
        t == "guide" ? e.parent().append('<div span="' + n + '" id="flySearchTip" style="position:fixed; left:' + s + "px; top:" + o + 'px; z-index:99999"><a>' + n + "</a></div>") : (t.indexOf(".") >= 0 ? u = $.id2url(t, "image", "ST", "artist") : u = Core.badgesUrl(t, 50), $("body").append('<img src="' + u + '" class="ufo hide" span="' + n + '" id="flySearchTip" style="left:' + s + "px; top:" + o + 'px;"/>'));
        var a = Core.bodyWidth / 2 - $("#schFld").width() / 2,
        f = Core.bodyHeight - 55,
        l = $("#schFld").val(),
        c = Search.getStrWidth(l);
        c > 310 ? a += $("#schFld").width() / 2 : a += Search.getStrWidth(l.substring(0, Search.oldStart));
        var h = function() {
            var e = $(this).attr("span");
            $(this).remove(),
            r == 1 ? Search.flyInput(e, !0) : Search.setSchVal(e + " + "),
            i == 1 && ($(document).click(), Search.searchBtnClick()),
            Search.isFly = !1
        };
        return t == "guide" ? $("#flySearchTip").show().animate({
            left: a + "px",
            top: f - 30 + "px"
        },
        800, h) : n == "随便听听" ? $("#flySearchTip").show().animate({
            left: "-=60",
            top: "-=130"
        },
        500,
        function() {
            $("#flySearchTip").animate({
                left: a + "px",
                top: f + "px"
            },
            800,
            function() {
                $("#flySearchTip").animate({
                    top: f - 50 + "px"
                },
                400, h)
            })
        }) : $("#flySearchTip").show().animate({
            left: a + "px",
            top: f + "px"
        },
        800,
        function() {
            $("#flySearchTip").animate({
                top: f - 50 + "px"
            },
            400, h)
        }),
        !1
    },
    flyInput: function(e, t, n) {
        n == undefined && (n = "+");
        var r = $("#schFld").val(),
        i,
        s = !1;
        for (var o = Search.oldStart; o != 0; --o) if (Symbol[r[o]] != undefined || o == 0) {
            i = r.substring(0, o + 1) + e,
            t && (Symbol[r[o]] != undefined ? i += " " + n + " ": i += " + "),
            s = !0;
            break
        }
        s || (i = e, t && (n != undefined ? i += " " + n + " ": i += " + "));
        for (var o = Search.oldStart; o < r.length; ++o) if (Symbol[r[o]] != undefined) {
            i += r.substring(o);
            break
        }
        r = i,
        r = Search.filterStr(r),
        t && (r = Search.deleteRepeat(r)),
        Search.setSchVal(r);
        var u = r.indexOf(e) + e.length;
        t && (u += 3),
        $("#schFld").setCursorPosition(u),
        Search.oldStart = u,
        $("#schFld").focus()
    },
    checkKeywordsEqual: function() {
        var e = Search.removeLastSymbol(Search.filterStr($("#schFld").val()));
        if (Search.keywords != e) {
            if (e != "") {
                Search.searchBtnClick();
                return
            }
            Search.setSchVal(Search.keywords)
        }
    },
    removeLastSymbol: function(e) {
        var t = e;
        for (var n = e.length - 1; n >= 0; --n) {
            if (e[n] != " " && Symbol[e[n]] == undefined) break;
            t = e.substring(0, n)
        }
        return t
    },
    filterStr: function(e) {
        var t = 1;
        for (var n = 0; n < e.length; ++n) {
            if (t == 1) {
                if (Symbol[e[n]] != undefined || e[n] == " ") {
                    e = e.substring(0, n) + e.substring(n + 1),
                    --n;
                    continue
                }
                t = 0
            }
            if (Symbol[e[n]] != undefined) {
                var r = e[n];
                e[n - 1] != " " || e[n + 1] != " " ? e[n + 1] == " " ? (e = e.substring(0, n) + " " + r + e.substring(n + 1), n += 1) : e[n - 1] == " " ? (e = e.substring(0, n) + r + " " + e.substring(n + 1), n += 1) : (e = e.substring(0, n) + " " + r + " " + e.substring(n + 1), n += 2) : ++n,
                t = 1
            }
        }
        return e
    },
    deleteRepeat: function(e) {
        var t = e.split(/ \- | \+ /g);
        for (var n = 0; n < t.length - 1; ++n) for (var r = n + 1; r < t.length; ++r) if (t[n] == t[r]) {
            var e = "";
            for (var i = 0; i < t.length; ++i) {
                if (i == r) continue;
                e += t[i],
                i != t.length - 1 && (e += " + ")
            }
            return e
        }
        return e
    },
    getStrWidth: function(e) {
        $("body").append("<div class='temp-tip'>" + e + "</div>");
        var t = $(".temp-tip").width();
        return $(".temp-tip").remove(),
        t
    },
    inputKeydown: function(e) {
        if (e.keyCode == 38 || e.keyCode == 40) return ! 1
    },
    inputKeyup: function(e) {
        var t = $(this).val();
        if (t.length == 0 && Search.autoKeywords == "") return;
        var n = 1;
        t == Search.autoKeywords && (n = 0);
        if (e.keyCode == 38 || e.keyCode == 40 || e.keyCode == 13) n = 0;
        var r = t.substring(Search.oldStart - 1, Search.oldStart),
        i = "";
        $(".tipCtn").length == 1 && (i = $(".tipCtn").children("span").text());
        if (n) {
            Search.autoKeywords = t;
            var s = new Array("+", "-", "&"),
            o = -1,
            u = -1;
            for (var a = 0; a < s.length; ++a) {
                var u = t.lastIndexOf(s[a]);
                u > o && (o = u)
            }
            keywords = t.substring(o + 1),
            keywords = $.trim(keywords);
            if (keywords == "@") {
                $("#atTipsCtn").hide();
                return
            }
            keywords.indexOf("@") >= 0 ? Search.userUpdate(keywords) : Search.dataUpdate(keywords)
        }
        if (Symbol[r] != undefined) {
            $("#atTipsCtn").hide(),
            Search.updateKeywords = "at",
            Search.dataUpdate("");
            if (i != "" && e.keyCode != 37 && e.keyCode != 39) {
                $(this).val($(this).val().substring(0, $(this).val().length - 1)),
                Search.flyInput(i, !0, Symbol[r]);
                return
            }
            if (Search.oldStart == 1) {
                $(this).val("");
                return
            }
            var f = t.substring(Search.oldStart - 4, Search.oldStart - 1);
            if (Symbol[f] != undefined && Symbol[f] != " " + Symbol[r] + " ") {
                var l = t.substring(0, Search.oldStart - 4) + " " + Symbol[r] + " ";
                $(this).val(l);
                return
            }
            if (Symbol[f] != undefined && Symbol[f] == " " + Symbol[r] + " ") {
                var l = t.substring(0, Search.oldStart - 1);
                $(this).val(l);
                return
            }
        }
        if (e.keyCode == 37) {
            if (Symbol[r] != undefined) {
                var c = 0;
                for (var a = 1;; ++a) {
                    if (Search.oldStart - a == 0) break;
                    var h = t.substring(Search.oldStart - a - 1, Search.oldStart - a);
                    if (Symbol[h]) {
                        $(this).setCursorPosition(Search.oldStart - a + 1),
                        c = 1;
                        break
                    }
                }
                c || $(this).setCursorPosition(0)
            }
            return
        }
        if (e.keyCode == 39) {
            var f = t.substring(Search.oldStart - 4, Search.oldStart - 1);
            if (Search.oldStart == 1 || Symbol[f] != undefined) for (var a = 1;; ++a) {
                if (Search.oldStart + a + 1 >= t.length) break;
                var p = t.substring(Search.oldStart + a, Search.oldStart + a + 1);
                if (Symbol[p] != undefined) {
                    $(this).setCursorPosition(Search.oldStart + a + 2);
                    break
                }
            } else Search.oldStart == $("#schFld").val().length && i != "" && (Search.flyInput(i, !0), Search.dataUpdate(""));
            return
        }
        if (e.keyCode == 38) {
            if ($("#atTipsCtn").isDisplay()) {
                var d = $.makeArray($("#atTipsCtn").children());
                for (var a = 0; a < d.length; ++a) if ($(d[a]).isClass("selected")) {
                    $(d[a]).removeClass("selected"),
                    a == 0 ? ($(d[d.length - 1]).addClass("selected"), Search.flyInput(Search.afterKeywords + "@" + $(d[d.length - 1]).children(".atName").children().text(), !1)) : ($(d[a - 1]).addClass("selected"), Search.flyInput(Search.afterKeywords + "@" + $(d[a - 1]).children(".atName").children().text(), !1));
                    return
                }
            }
            return
        }
        if (e.keyCode == 40) {
            if ($("#atTipsCtn").isDisplay()) {
                var d = $.makeArray($("#atTipsCtn").children());
                for (var a = 0; a < d.length; ++a) if ($(d[a]).isClass("selected")) {
                    $(d[a]).removeClass("selected"),
                    a == d.length - 1 ? ($(d[0]).addClass("selected"), Search.flyInput(Search.afterKeywords + "@" + $(d[0]).children(".atName").children().text(), !1)) : ($(d[a + 1]).addClass("selected"), Search.flyInput(Search.afterKeywords + "@" + $(d[a + 1]).children(".atName").children().text(), !1));
                    return
                }
            }
            return
        }
        if (e.keyCode == 8) {
            if (Symbol[r] != undefined) {
                var c = 0,
                v = t.substring(Search.oldStart);
                for (var a = 1;; ++a) {
                    if (Search.oldStart - a == 0) break;
                    var h = t.substring(Search.oldStart - a - 1, Search.oldStart - a);
                    if (Symbol[h] != undefined) {
                        var m = t.substring(0, Search.oldStart - a + 1);
                        $(this).val(m + v),
                        $(this).setCursorPosition(m.length),
                        c = 1;
                        break
                    }
                }
                c || ($(this).val(v), $(this).setCursorPosition(0))
            }
            return
        }
        if (e.keyCode == 13) {
            Search.searchBtnClick(),
            $(document).click();
            return
        }
        if (Symbol[r] != undefined) {
            var m = t.substring(0, Search.oldStart - 1) + " " + Symbol[r] + " ",
            v = t.substring(Search.oldStart);
            $(this).val(m + v),
            $(this).setCursorPosition(m.length)
        }
    },
    update: function(e) {
        return Search.oldStart = Core.getSelectionStart(e),
        !0
    },
    setSchVal: function(e) {
        $("#schFld").val(e),
        Search.setSchHint()
    },
    hide: function() {
        $("#atTipsCtn, #instSchCtn").html("").hide(),
        $("#tbCtn").css("overflow", "hidden"),
        $("#flyAblum, #flySmlAblum, #mdlHr, #msgCtn, #lstdCtn").show(),
        Core.playerCDShow(),
        $("#mainMenuCtn").css({
            width: "301px"
        }),
        Search.setSchHint(),
        $("#schFld").css({
            width: "252px"
        }),
        $("#leftAr").animate({
            right: "-=37"
        },
        300)
    },
    resize: function(e) {
        Search.rowCount = parseInt((Core.bodyWidth - 260) / Search.TIP_WIDTH),
        Search.colCount = parseInt((Core.bodyHeight - 75 - 185) / Search.TIP_HEIGHT),
        Search.maxCount = Search.rowCount * Search.colCount;
        if (e != undefined) return;
        Search.rowCount > Search.count && (Search.rowCount = Search.count),
        Search.colCount = Search.count / Search.rowCount + "",
        Search.maxCount >= Search.colCount ? Search.colCount.indexOf(".") >= 0 ? Search.colCount = parseInt(Search.colCount) + 1 : Search.colCount = parseInt(Search.colCount) : Search.colCount = Search.maxCount;
        if ($("#instSchCtn .noneTip").length != 1) {
            var t = Search.TIP_WIDTH * Search.rowCount,
            n = Search.TIP_HEIGHT * Search.colCount;
            while (n > Core.bodyHeight - 75 - 185) n -= Search.TIP_HEIGHT;
            $("#instSchCtn").css({
                width: t + "px",
                height: n + "px",
                "margin-left": -(t / 2) + "px",
                "margin-top": -n / 2 - 35 - $("#gnsCtn").height() + "px"
            })
        }
    }
},
Player = {
    music: new Array,
    player: null,
    msgTone: null,
    pos: -1,
    heardTmo: 0,
    listenTmo: 0,
    isStart: !1,
    isPlay: !1,
    isInsertPlay: !1,
    isControl: !0,
    currentTime: 0,
    actualCurrentTime: 0,
    volume: .8,
    isNextResponse: !0,
    isVolumeDown: !1,
    seconds: 0,
    timeDot: undefined,
    isLoveAnimate: !1,
    isReady: !1,
    isMsgToneReady: !1,
    angle: 0,
    rotateTimeout: 0,
    cdRotate: "",
    isPreload: !0,
    preloadMscList: null,
    smlMusic: null,
    cachePos: -1,
    cacheSeconds: 0,
    isNextCount: 0,
    isNextTmo: 0,
    psnRdMusic: null,
    cachePsnRdPos: -1,
    cachePsnRdSt: 0,
    psnRdTmo: 0,
    psnRdCount: 0,
    loveCount: 0,
    hateCount: 0,
    ipadInit: $("html").isClass("ipad"),
    isGnsLoad: !0,
    netCount: 0,
    vlmHideTmo: 0,
    tid: 0,
    PLAYER_TYPE: "html, flash",
    msgTongType: "msg",
    switchSong: 0,
    isNetPause: !1,
    hbr: !1,
    isHalf: !1,
    init: function() {
        Player.cdRotate = Core.opera || Core.ie69;
        var e = navigator.platform == "Win32" || navigator.platform == "Windows",
        t = isWin2000 = isWinXP = !1,
        n = navigator.userAgent;
        e ? swfobject.ua.pv[0] ? Player.PLAYER_TYPE = "flash": Player.PLAYER_TYPE = "html, flash": Player.PLAYER_TYPE = "html, flash",
        Signup.userDetail.sts.h5 != "true" && (Player.PLAYER_TYPE = "flash");
        if (Core.ipad || !Core.webkit) Player.PLAYER_TYPE = "html, flash";
        Player.volume = Number(Core.getCookie("jing.volume"));
        if (Player.volume == null || isNaN(Player.volume) || Player.volume == "") Player.volume = 1;
        Player.player = $("#playerCore"),
        Player.msgTone = $("#msgTone"),
        $("#mainMenuCtn, #userMenuCtn, #msgCtn").removeClass("hide"),
        $(document).on("click", ".ablumEvent", Gns.ablumEventClick),
        $(document).on("click", ".timeDotEvent",
        function() {
            $("#playCtl").addClass("loading"),
            Player.stopRotate(),
            Player.playSeconds(parseInt($(this).attr("id").replace("timeDot", "")) + 2)
        }),
        $(document).on("click", ".knowEvent",
        function() {
            var e = $(this).attr("cookieId");
            e != undefined && e != "" && e != null && Core.setCookie(e, "true"),
            $("#gnsCtn").attr("tag", ""),
            Gns.openGnsArr = new Array,
            Gns.isOver = !1,
            Gns.closeGns()
        }),
        $(".vcOvr").click(function() {
            if ($(this).isClass("selected")) Player.pauseMsgTone();
            else {
                $(this).addClass("selected");
                var e = $(this).attr("type");
                e.split(",").length == 2 && (e = Guide.mid),
                Player.msgTongType = e;
                var t = "http://jingfm.duomi.com/vo/guide/" + e + ".m4a";
                Player.isPlay && Player.playCtl(),
                Player.msgTone.jPlayer("setMedia", {
                    m4a: t
                }).jPlayer("play")
            }
        }),
        setTimeout(function() {
            $("#userMenuCtn").animate({
                right: "25px"
            },
            300).animate({
                right: "15px"
            },
            100).animate({
                right: "20px"
            },
            100,
            function() {
                Player.ipadInit && Signup.userDetail.newbie == 0 && ($("#tps").children(".tpsCtn").children("p").text("歌曲已准备好，点击播放"), $("#tps").css({
                    left: $("#playCtl").offset().left - 65 + "px",
                    top: Core.bodyHeight - 110 + "px"
                }).show())
            })
        },
        600);
        var r = "";
        Signup.userDetail.sts.thm == "lthbg" || Signup.userDetail.sts.thm == "ctwd" ? r = -17 : r = -14,
        $("#mainMenuCtn").animate({
            bottom: r + "px"
        },
        5),
        $("#next").click(function() {
            Search.checkKeywordsEqual(),
            Player.currentTime < 10 && (clearTimeout(Player.isNextTmo), Player.isNextTmo = setTimeout(function() {
                Player.isNextCount = 0
            },
            15e3), ++Player.isNextCount),
            Player.postNext(),
            clearTimeout(Gns.gnsRcmdTmo),
            Gns.gnsRcmdTmo = setInterval(Gns.rcmd, 6e5),
            Player.next(),
            Player.isNextCount == 3 && (Player.isNextCount = 0, setTimeout(function() {
                Gns.rcmd()
            },
            500))
        }),
        $("#playCtl").click(Player.playCtl),
        $("html").isClass("ipad") || ($(document).on("mouseenter", "#menuLove, #menuMore, #menuRfrsh, #menuVo",
        function() {
            if (Signup.userDetail.sts.tipNtf != "true") return;
            var e = $(this).attr("id");
            $("#tps .tpsCtn .ctt").text(btnDes[e]);
            var t = $("#tps").width() / 2 - 12;
            $("#tps").css({
                left: $(this).offset().left - t,
                top: $(this).offset().top - 56
            }).show()
        }), $(document).on("mouseleave", "#menuLove, #menuMore, #menuRfrsh, #menuVo",
        function() {
            if (Signup.userDetail.sts.tipNtf != "true") return;
            $("#tps").hide()
        }), $(".sqrBtn, .brdBtnEvt").mouseenter(function() {
            if (Signup.userDetail.sts.tipNtf != "true") return;
            var e = $(this).attr("id"),
            t = e;
            e == "playCtl" && ($(this).isClass("play") ? t = e + "Play": t = e + "Pause"),
            $("#tps").children(".tpsCtn").children("p").text(btnDes[t]);
            var n = $(this).offset().left - $(this).width() / 2 + 2;
            e == "gns" ? n += 3 : e == "playCtl" ? n += 10 : e == "next" ? n += 10 : e == "tkrs" ? n -= 27 : e == "apps" ? n -= 26 : e == "frdCt" && (n -= 40, $("#tps .tpsAr").css("margin-left", "6px"));
            var r = $(this).offset().top - 55;
            $("#tps").css({
                left: n,
                top: r + "px"
            }),
            (!$(this).isClass("selected") || e == "home" || e == "playCtl") && $("#tps").show()
        }).mouseleave(function() {
            $("#tps").hide(),
            $(this).attr("id") == "frdCt" && $("#tps .tpsAr").css("margin-left", "-7px")
        })),
        Player.msgTone.jPlayer({
            ready: function() {
                Player.msgTone.jPlayer("volume", "1"),
                Player.isMsgToneReady = !0
            },
            timeupdate: function(e) {
                var t = e.jPlayer.status.duration,
                n = e.jPlayer.status.currentTime;
                t - n < .5 && n > 0 && t > 0 && Player.msgTongType != "msg" && Player.pauseMsgTone()
            },
            swfPath: "http://player.jing.fm/player.swf",
            solution: Player.PLAYER_TYPE,
            supplied: "m4a"
        }),
        Player.player.jPlayer({
            ready: function(e) {
                Player.isReady = !0
            },
            timeupdate: function(e) {
                if (Player.music[Player.pos] == undefined) return; (Gns.isInsertPlay || Top.isInsertPlay) && $("#playCtl").removeClass("loading");
                var t = e.jPlayer.status.currentTime,
                n = -1;
                Player.player.children("audio")[0] != undefined && Player.player.children("audio")[0].buffered.length > 0 && (n = Player.player.children("audio")[0].buffered.end(0) - Player.player.children("audio")[0].buffered.start(0));
                if (!Search.isSearch && Player.switchSong == 0 && t > 2 && Player.isNextResponse && t + Player.seconds < Player.music[Player.pos].duration - 3 && $("#playCtl").isClass("pause") && (t == Player.statusCurrentTime || n != -1 && n - t < 1)) {
                    Signup.userDetail.sts.hbr == "true" ? Core.getCookie("lowKnow") == "true" ? Gns.nowGns("你的网速很不给力，歌曲正在辛苦加载中，缓冲一会再点播放。") : Gns.nowGns('你的网速很不给力，歌曲正在辛苦加载中，缓冲一会再点播放。尝试使用低品质音乐，<a href="#" class="trg gnsStsDsply">设置</a>。<a href="#" class="trg knowEvent" cookieId="lowKnow">不再提醒</a>') : Gns.nowGns("你的网络实在有点慢，低品质音乐也跑不动，耐心等待吧。");
                    if (!$("#top").isDisplay()) {
                        Player.playCtl(),
                        Player.isNetPause = !0;
                        if (n != -1) var r = setInterval(function() {
                            if (Player.isNetPause) {
                                var e = Player.player.children("audio")[0].buffered.end(0) - Player.player.children("audio")[0].buffered.start(0);
                                e - t > 5 && ($("#gnsCtt .ctt").text().indexOf("你的网速很不给力，歌曲正在辛苦加载中") >= 0 && ($(".knowEvent").length > 0 ? $(".knowEvent").click() : Gns.closeGns()), Player.playCtl(), clearTimeout(r))
                            } else clearTimeout(r)
                        },
                        1e3)
                    }
                    return
                }
                Player.statusCurrentTime = t;
                var i = e.jPlayer.status.duration;
                t > .5 && t < 2.5 && Player.isNextResponse && $("#playCtl").isClass("loading") && ($("#playCtl").removeClass("loading"), Player.startRotate());
                if (Top.isInsertPlay) {
                    t > 0 && i > 0 && i - t < 1 && Top.obj != null && !Player.isExec && Top.playOver();
                    return
                }
                if (Gns.isInsertPlay) {
                    t > 0 && i > 0 && i - t < 1 && Gns.insertStop("continue");
                    return
                }
                t = e.jPlayer.status.currentTime + Player.seconds,
                i = Player.music[Player.pos].duration;
                if (Player.currentTime != parseInt(t) && Gns.timeDot != undefined && Gns.timeDot["timeDot" + Player.currentTime] != undefined && Player.currentTime > 5) {
                    var s = Gns.timeDot,
                    o = s["timeDot" + Player.currentTime][1];
                    s["timeDot" + Player.currentTime][1] = o.substring(0, o.indexOf("在")) + "正在演奏",
                    Gns.openGnsArr[Gns.openGnsArr.length] = s["timeDot" + Player.currentTime],
                    Gns.showGns()
                }
                Player.actualCurrentTime = parseInt(t),
                Player.currentTime = parseInt(t),
                Player.currentTime > i / 2 && !Player.isHalf && (Player.isHalf = !0, $.ajax({
                    url: Core.API_VER + "/music/post_half",
                    data: {
                        uid: Signup.userDetail.id,
                        tid: Player.music[Player.pos].tid
                    }
                }));
                var u = t / i * 100;
                u = Core.bodyWidth / 100 * u,
                $("#prgrsCtn .crt").css({
                    width: u + "px"
                });
                var a = parseInt(t / 60),
                f = parseInt(t % 60);
                a < 10 && (a = "0" + a),
                f < 10 && (f = "0" + f),
                $("#timeTps .tpsCtn p").text(a + ":" + f);
                var l = 45;
                u > Core.bodyWidth - 55 ? (l = 45 + u - (Core.bodyWidth - 55), l > 87 && (l = 87), u = Core.bodyWidth - 55) : u < 52 && (l = u - 6, l < 1 && (l = 1), u = 52),
                $("#timeTps .tpsAr").css({
                    left: l + "px"
                }),
                $("#timeTps").css({
                    top: "15px",
                    left: u - 50 + "px"
                }),
                i - t < .5 && t > 0 && (Player.isVolumeDown || Player.next(0));
                if (i - t < 60 && Player.isPreload && Player.music.length > Player.pos + 1) {
                    Player.isPreload = !1;
                    var c = new Image;
                    c.src = $.id2url(Player.music[Player.pos + 1].fid, "image", "AM", "album")
                }
                if (t > 11 && t < 12) {
                    var c = new Image;
                    c.src = $.id2url(Player.music[Player.pos].fid, "image", "AT", "album")
                }
            },
            volume: Player.volume,
            swfPath: "http://player.jing.fm/player.swf",
            solution: Player.PLAYER_TYPE,
            wmode: "window",
            supplied: "m4a"
        }),
        setTimeout(function() {
            Player.savePlayingData(!0)
        },
        1e4)
    },
    savePlayingData: function(e) {
        if (e == 1) {
            var t = 0;
            Player.currentTime < 30 ? t = 10 : t = 30,
            setTimeout(function() {
                Player.savePlayingData(!0)
            },
            1e3 * t)
        }
        if (Player.isPlay && !$("#playerPsnRd").isClass("selected") && Player.music[Player.pos] != undefined && Flw.cacheMusic == null) {
            var n = Search.keywords,
            r = Player.currentTime,
            i = Player.music[Player.pos].tid;
            $.ajax({
                url: Core.API_VER + "/account/post_playing_data",
                data: {
                    uid: Signup.userDetail.id,
                    cmbt: n,
                    tid: i,
                    ct: r
                }
            }),
            Core.setCookie("jing.volume", Player.volume)
        }
        Player.music.length == 0 && $.ajax({
            url: Core.API_VER + "/account/post_playing_data",
            data: {
                uid: Signup.userDetail.id,
                isclear: !0
            }
        })
    },
    load: function() {
        var e = "";
        Player.cdRotate ? e = '<div id="rotateCtn" class="cv"><div id="rotateFlash"></div></div>': e = '<div id="rotateCD" class="cv"></div>';
        var t = "dspr";
        if ($("html").isClass("ie6") || $("html").isClass("ie7") || $("html").isClass("ie8")) t = "";
        $("body").prepend('<div id="prgrsCtn" class="prgrsCtn ' + t + '" style="height:15px">' + '<div id="timeTps" class="tps time hide">' + '<div class="tpsAr"></div>' + '<div class="tpsLbd"></div>' + '<div class="tpsCtn">' + '<div class="inspt"></div>' + '<p class="ctt serif"></p>' + "</div>" + '<div class="tpsRbd"></div>' + "</div>" + '<span class="prgrs"></span>' + '<span class="prgrs crt"></span>' + '<div class="timeTpsCtn hide">' + '<div class="tpsAr"></div>' + '<div class="tpsCtn"></div>' + "</div>" + "</div>" + '<div id="mdlHr" class="mdlHr"></div>' + '<div id="mscPlrCtn" class="mscPlrCtn absCt ' + t + '">' + '<div class="mscPlrMask"></div>' + '<div id="mscPlr" class="mscPlr">' + e + '<p class="tit">Jing 已经为你准备好，搜索你想听的</p>' + "</div>" + '<div class="mscPlrBtnCtn">' + '<div class="plrBtnBg love">' + '<a id="playerLove" href="#" class="plrBtn lwRt overlay"></a>' + "</div>" + '<div class="plrBtnBg sml">' + '<a id="playerSml" href="#" class="plrBtn lwRt overlay"></a>' + "</div>" + '<div class="plrBtnBg psnRd">' + '<a id="playerPsnRd" href="#" class="plrBtn lwRt overlay"></a>' + "</div>" + '<div class="plrBtnBg hate">' + '<a id="playerHate" href="#" class="plrBtn lwRt overlay"></a>' + "</div>" + "</div>" + "</div>");
        var n = {
            wmode: "opaque"
        },
        r = {},
        i = {};
        swfobject.embedSWF("/js/vendor/rt.swf", "rotateFlash", "300", "300", "9.0.0", "", i, n, r),
        Player.resize(),
        $("#mscPlrCtn").animate({
            opacity: 1
        },
        500),
        $("#prgrsCtn").animate({
            opacity: 1
        },
        2e3),
        $("#playerHate").click(Player.hateClick),
        $("#playerLove").click(Player.loveClick),
        $("#playerSml").click(Player.smlClick),
        $("#playerPsnRd").click(Player.psnRdClick),
        $(".ovlCtnBg, .cls").click(function() {
            $(document).click()
        }),
        $("#prgrsCtn").mouseenter(function() {
            if (Player.currentTime == 0) return;
            $("#timeTps").show()
        }).mouseleave(function() {
            $("#timeTps").hide()
        }),
        Player.cdRotate || Player.ready()
    },
    ready: function() {
        Player.cdRotate && Player.swfObj.showCover("/images/defaults/cover/300.jpg");
        var e = Signup.userDetail.pld;
        if (e != null) {
            $("#schFld").val(e.cmbt),
            Search.setSchHint(),
            Player.music = new Array,
            Player.music[0] = new Object,
            Player.music[0].fid = e.fid,
            Player.music[0].mid = e.mid,
            Player.music[0].tid = e.tid,
            Player.music[0].name = e.n,
            Player.music[0].duration = e.d,
            Player.pos = 0;
            var t = function() {
                Player.isReady ? Player.ipadInit ? ($("#playCtl").removeClass("loading"), Player.setPlayerUI()) : (Player.player.jPlayer("volume", Player.volume), $("#playCtl").removeClass("play").addClass("pause"), Player.play(parseInt(e.ct)), Player.setVolumeUp()) : setTimeout(t, 300)
            };
            t(),
            Search.searchByKeywords(e.cmbt, 1, 0)
        }
        if (Signup.userDetail.newbie == 3) Message.isLoginInit = !0,
        Guide.step1();
        else if (Signup.userDetail.newview.m.length != 0) {
            var n = Signup.userDetail.newview.m;
            for (var r = 0; r < n.length; ++r) {
                var i = !0;
                for (var s = 0; s < SnsArr.length; ++s) if (n[r].indexOf("-" + SnsArr[s]) >= 0) {
                    Signup.iconShake("frdCtNewIcon"),
                    i = !1;
                    break
                }
                i && Signup.iconShake("appNewIcon")
            }
        } else Signup.userDetail.newview.t.length != 0 && Signup.iconShake("appNewIcon")
    },
    playSeconds: function(e) {
        Player.seconds = e,
        Player.setVolumeDown("jump", 50)
    },
    setPlay: function(e, t, n) {
        clearTimeout(Player.switchSong),
        Player.switchSong = setTimeout(function() {
            Player.switchSong = 0
        },
        2e3),
        e == undefined && (e = 0),
        Player.tid = parseInt(n),
        Flw.isServer && Flw.send("play", e),
        Player.seconds = e;
        if (Player.currentTime >= 1) {
            var r = Player.currentTime;
            r > Player.music[Player.pos].duration && (r = Player.music[Player.pos].duration),
            $.ajax({
                url: "/official/stat?Heard|" + Signup.userDetail.id + "|" + Player.music[Player.pos].tid + "|" + r
            })
        }
        var i = "";
        Signup.userDetail.sts.hbr == "true" ? i = "NO": i = "MM",
        $.ajax({
            url: Core.API_VER + "/media/song/surl",
            data: {
                mid: t,
                type: i
            },
            success: function(t) {
                if (!t.success) return;
                var n = MEDIA_URL + t.result + "?start=" + e;
                Player.player.jPlayer("setMedia", {
                    m4a: n
                }).jPlayer("play")
            }
        }),
        Player.currentTime = 0,
        Player.isPlay = !0,
        Player.isControl = !1
    },
    setPlayerUI: function() {
        if (Player.music[Player.pos] == undefined) return;
        var e = $("#mscPlr").children("p").text(),
        t = $("#mscPlr").children("p").attr("fid");
        if (e == Player.music[Player.pos].name && t == Player.music[Player.pos].fid) return;
        var n = $.id2url(Player.music[Player.pos].fid, "image", "AM", "album");
        $("#mscPlr").children("p").text(Player.music[Player.pos].name).append('<a href="#" id="shrIcon" class="shrIcon"></a>'),
        Core.ie68 || $("#shrIcon").css("opacity", "0.5"),
        $("#shrIcon").mouseenter(function() {
            Core.ie68 || $(this).css("opacity", "1"),
            Apps.friendMenu("shr", $(this)),
            $(".usrTps").click(function() {
                var e = $(this).attr("identify"),
                t = !0;
                for (var n = 0; n < resData.frdCt.result.items.length; ++n) if (resData.frdCt.result.items[n].mid == e && resData.frdCt.result.items[n].display == "true") {
                    t = !1;
                    var r = {
                        uid: Signup.userDetail.id,
                        tid: Player.music[Player.pos].tid,
                        c: "",
                        identify: ConverSns[e + "1"]
                    };
                    if (Search.moods != null) {
                        var i = "";
                        for (var n = 0; n < Search.moods.length; ++n) n + 2 == Search.moods.length ? i += Search.moods[n] + "和": i += Search.moods[n] + "、";
                        r.c = "我" + i.substring(0, i.length - 1) + "的时候喜欢听这首 ♫" + Player.music[Player.pos].name
                    } else r.c = "我分享了一首歌 ♫" + Player.music[Player.pos].name + " ，快来听听吧。";
                    Guide.shrData = r,
                    Signup.userDetail.sts.autoSnc == "true" ? Guide.shrSend() : Guide.shrShow();
                    return
                }
                t && Gns.nowGns("你还没绑定 " + btnDes[ConverSns[e + "1"]] + '，暂时不能分享。<a href="#" class="trg gnsSnsBind" identify="' + e + '">需要绑定吗？</a>')
            })
        }).mouseleave(function() {
            Core.ie68 || $(this).css("opacity", "0.5"),
            $("#usrTpsCtn").remove()
        }),
        $("#mscPlr").children("p").attr("fid", Player.music[Player.pos].fid),
        Player.cdRotate ? (Player.swfObj.showCover(n), $("#playCtl").isClass("play") && Player.playCtl()) : $("#rotateCD").animate({
            opacity: "0"
        },
        300,
        function() {
            $("#rotateCD").css({
                "background-image": 'url("' + n + '")'
            }),
            $(this).animate({
                opacity: "1"
            },
            300,
            function() {
                $("#playCtl").isClass("play") && !Player.ipadInit && Player.playCtl()
            })
        })
    },
    play: function(e) {
        var t = Player.music[Player.pos];
        Player.music.length == 0 && Player.setPlayerDefault();
        if (Player.music.length <= Player.pos || t == undefined) return;
        if (t.duration < 1) {
            Player.next();
            return
        }
        $("#playerLove, #playerHate").removeClass("selected"),
        Player.ipadInit ? ($("#playCtl").addClass("loading"), Player.stopRotate(), Player.ipadInit = !1) : Player.setPlayerUI(),
        e == undefined && (e = 0),
        Player.setPlay(e, t.mid, t.tid),
        Player.setVolumeUp(),
        Player.isPreload = !0,
        e == 0 && (Player.isHalf = !1),
        Player.hbr ? (Player.hbr == "true" ? Gns.nowGns("已经切换至高品质音乐") : Player.hbr == "false" && Gns.nowGns("已经切换至低品质音乐"), $("#playCtl").removeClass("play").addClass("pause").addClass("loading")) : ($.ajax({
            url: Core.API_VER + "/music/fetch_track_infos",
            data: {
                uid: Signup.userDetail.id,
                tid: t.tid
            },
            success: Gns.mscInfoHtml
        }), clearTimeout(Player.heardTmo), Player.heardTmo = setTimeout(function() {
            $.ajax({
                url: Core.API_VER + "/music/post_heard_song",
                data: {
                    uid: Signup.userDetail.id,
                    tid: t.tid
                }
            })
        },
        t.duration / 2 * 1e3), clearTimeout(Player.listenTmo), Player.listenTmo = setTimeout(function() {
            $.ajax({
                url: Core.API_VER + "/music/post_listening_song",
                data: {
                    uid: Signup.userDetail.id,
                    tid: t.tid
                }
            })
        },
        5e3)),
        Player.hbr = !1
    },
    closeGns: function() {
        var e = new Array;
        for (var t = 0; t < Gns.openGnsArr.length; ++t) Gns.openGnsArr[t][0] == "now" && (e[e.length] = Gns.openGnsArr[t]);
        Gns.openGnsArr = e,
        Gns.openGnsArr.length == 0 && (clearTimeout(Gns.closeGnsTmo), Gns.closeGns())
    },
    next: function(e) {
        if (!Player.isNextResponse || Search.isSearch || Flw.isFlw && !Flw.isServer) return;
        setTimeout(function() {
            Player.isNextResponse = !0
        },
        1e3),
        Player.isNextResponse = !1,
        Player.closeGns(),
        e != 0 && (e = 400),
        $("#playCtl").removeClass("play").addClass("pause").addClass("loading"),
        Player.stopRotate(),
        $("#lstdCtn").html(""),
        Gns.isInsertPlay && Gns.insertStop("next"),
        Player.isControl = !0,
        ++Player.pos;
        if (Player.music.length <= Player.pos) {
            if (Player.smlMusic != null) {
                $("#playerSml").click();
                return
            }
            if (Player.psnRdMusic != null && Player.psnRdTmo == 0) {
                var t = function() {
                    Player.psnRdCount <= Search.st && (Search.st = 0),
                    $.ajax({
                        url: Core.API_VER + "/app/fetch_psnrd",
                        data: {
                            uid: Signup.userDetail.id,
                            st: Search.st,
                            ps: 5
                        },
                        success: function(n) {
                            if (n.result.items.length == 0) {
                                Search.st != 0 ? (Search.st = 0, t()) : ($("#gnsCtn").attr("tag") == Gns.level1 && $("#gnsCtn").attr("tag", ""), Gns.nowGns("你的个人电台暂时不可使用，请稍候再试。"), $("#playerPsnRd").click());
                                return
                            }
                            Player.psnRdCount = n.result.total,
                            Search.st = Search.st + n.result.items.length,
                            $("#gnsCtn").attr("tag", ""),
                            Core.getCookie("psnRdKnow") == "true" ? Gns.closeGns() : Core.ipad ? Gns.nowGns('你已经启用个人电台，下一首双指向左滑动封面，暂停请用双指点击封面，再次点击个人电台图标退出，<a href="#" class="trg knowEvent" cookieId="psnRdKnow">我知道了</a>。', Gns.level1) : Gns.nowGns('你已经启用个人电台，下一首请按 -> 键，暂停请按空格键，再次点击个人电台图标退出，<a href="#" class="trg knowEvent" cookieId="psnRdKnow">我知道了</a>。', Gns.level1),
                            Player.music = new Array;
                            for (var r = 0; r < n.result.items.length; ++r) Search.setMusic(n.result.items[r], r);
                            Player.pos = 0,
                            Player.setVolumeDown("play", e)
                        }
                    })
                };
                t();
                return
            }
            Player.loveCount > 0 ? $.ajax({
                url: Core.API_VER + "/search/fetch_rcmd_next",
                data: {
                    tid: Player.music[Player.music.length - 1].tid,
                    uid: Signup.userDetail.id,
                    cmbt: Search.keywords
                },
                success: function(t) {
                    Player.loveCount = 0;
                    if (!t.success || t.result.items.length == 0) {
                        Search.st = Search.st + Search.ps,
                        Search.total <= Search.st && (Search.st = 0),
                        Search.searchByKeywords(Search.keywords, 0, Search.st);
                        return
                    }
                    for (var n = 0; n < t.result.items.length; ++n) Search.setMusic(t.result.items[n], n);
                    Player.pos = 0,
                    Player.setVolumeDown("play", e)
                }
            }) : (Search.st = Search.st + Search.ps, Search.total <= Search.st && (Search.st = 0), Search.searchByKeywords(Search.keywords, 0, Search.st))
        } else Player.setVolumeDown("play", e)
    },
    playCtl: function(e) {
        if (! (Player.music.length != 0 && !$("#playCtl").isClass("loading") || typeof e == "string")) return;
        Player.isNetPause = !1,
        clearTimeout(Player.switchSong),
        Player.switchSong = setTimeout(function() {
            Player.switchSong = 0
        },
        2e3),
        $("#tps").hide(),
        $("#playCtl").isClass("play") || e == "play" ? (Player.msgTongType != "msg" && ($("#menuVo").removeClass("selected"), Player.pauseMsgTone()), Search.checkKeywordsEqual(), Player.playing()) : Player.pause()
    },
    playerUI: function() {
        $("#playCtl").removeClass("play").addClass("pause"),
        Player.startRotate(),
        Player.player.jPlayer("play"),
        Player.setVolumeUp(),
        Player.isPlay = !0,
        Player.setPlayerUI()
    },
    playing: function() {
        if (Player.isVolumeDown) return;
        Flw.isServer && Flw.send("playing"),
        Gns.isInsertPlay ? (Player.setVolumeDown("pause", 400), Gns.insertStop("continue")) : Player.playerUI(),
        Player.ipadInit && (Player.player.jPlayer("volume", Player.volume), Player.play(parseInt(Signup.userDetail.pld.ct)), Player.setVolumeUp())
    },
    pause: function() {
        Flw.isServer && Flw.send("pause"),
        $("#playCtl").removeClass("pause").addClass("play"),
        Player.stopRotate(),
        Player.setVolumeDown("pause", 400),
        Flw.isFlw && Flw.toid != "" ? Player.player.jPlayer("pause") : Player.setVolumeDown("pause", 400),
        Player.isPlay = !1
    },
    pauseMsgTone: function() {
        Player.msgTongType = "msg",
        $(".vcOvr").removeClass("selected"),
        Player.msgTone.jPlayer("pause"),
        Player.isPlay || Player.playCtl()
    },
    setVolumeDown: function(e, t) {
        if (e == "msgTone" && Signup.userDetail.sts.rmdTone != "true") return;
        if (Flw.isFlw && Flw.toid != "") return;
        var n = .05;
        e == "msgTone" && (n = .2),
        Player.isVolumeDown = !0;
        var r = 0,
        i, s = function() {++r;
            var s = Player.player.jPlayer("option", "volume") - .02;
            if (s <= n || r >= t) Player.isVolumeDown = !1,
            Player.player.jPlayer("volume", n),
            clearInterval(i),
            e == "pause" ? Player.player.jPlayer("pause") : e == "play" ? ($("#playerLove").removeClass("selected"), Player.play()) : e == "jump" ? (Player.setPlay(Player.seconds, Player.music[Player.pos].mid, Player.music[Player.pos].tid), Player.setVolumeUp()) : e == "msgTone" && (Player.msgTone.jPlayer("setMedia", {
                m4a: "http://player.jing.fm/msgTone.m4a"
            }).jPlayer("play"), setTimeout(function() {
                Player.setVolumeUp()
            },
            1e3));
            Player.player.jPlayer("volume", s)
        };
        Player.isPlay || Player.player.jPlayer("volume", "0"),
        i = setInterval(s, t / 50)
    },
    setVolumeUp: function() {
        if (Flw.isFlw && Flw.toid != "") return;
        var e = 0,
        t, n = function() {
            if (Player.isVolumeDown) return; ++e;
            var n = Player.player.jPlayer("option", "volume") + .02;
            if (n >= Player.volume || e == 50) {
                clearInterval(t);
                return
            }
            Player.player.jPlayer("volume", n)
        };
        t = setInterval(n, 20)
    },
    setVolume: function(e) {
        if (Flw.isFlw && Flw.toid != "" && Player.volume == e) return;
        Player.player.jPlayer("volume", e),
        clearTimeout(Player.vlmHideTmo),
        Player.vlmHideTmo = setTimeout(function() {
            Player.vlmHideTmo = 0,
            Core.ie68 ? $("#vlmCtrl").hide() : $("#vlmCtrl").animate({
                opacity: "0"
            },
            300,
            function() {
                $(this).hide()
            })
        },
        2e3),
        $("#vlmCtrl").show(),
        Core.ie68 || $("#vlmCtrl").animate({
            opacity: "1"
        },
        300),
        e == .05 ? ($("#vlmCtrl .vlmIcon").addClass("lwst"), e = 0) : $("#vlmCtrl .vlmIcon").removeClass("lwst"),
        e *= 134,
        $("#vlmPrgrBar").css("width", e + "px")
    },
    musicUpdate: function(e) {
        var t = Player.music;
        Player.music = new Array,
        Player.music[0] = t[Player.pos];
        for (var n = 0; n < e.length; ++n) Search.setMusic(e[n], n + 1);
        Player.pos = 0
    },
    loveClick: function() {
        if (Player.pos == -1) {
            Gns.nowGns("你貌似还没有播放呢，在搜索框输入你想听的音乐吧！");
            return
        }
        if (Player.isLoveAnimate) return;
        if (Player.currentTime < 15 && !$("#playerLove").isClass("selected")) {
            Gns.nowGns("如果你真的喜欢，至少会听15秒～");
            return
        }
        Player.isLoveAnimate = !0,
        ++Player.loveCount,
        Player.hateCount = 0;
        var e = "";
        Player.psnRdMusic != null ? e = "psn": e = Search.keywords,
        clearTimeout(Gns.gnsRcmdTmo),
        Gns.gnsRcmdTmo = setInterval(Gns.rcmd, 6e5),
        $("#playerLove").toggleClass("selected"),
        $("#playerHate").removeClass("selected");
        if ($("#playerLove").isClass("selected")) {
            Flw.isFlw && Flw.toid != "" && Flw.send("love," + Signup.userDetail.nick);
            if (Overlay.id == "apps") {
                var t = Core.bodyWidth - ($("a[mid='love']").offset().left + 85),
                n = Core.bodyHeight - ($("a[mid='love']").offset().top + 85);
                Player.loveAnimate(t, n, 50)
            } else Player.loveAnimate(58, 15, 50)
        } else Overlay.id == "love" && $("#appsCttCtn div").each(function() {
            $(this).attr("id") == Player.music[Player.pos].tid && $(this).children("a.loveBtn").click()
        });
        $.ajax({
            url: Core.API_VER + "/music/post_love_song",
            data: {
                uid: Signup.userDetail.id,
                tid: Player.music[Player.pos].tid,
                c: Player.loveCount,
                cmbt: e
            },
            success: function(e) {
                $("#playerLove").isClass("selected") && (e.result.items.length > 0 ? Player.musicUpdate(e.result.items) : --Player.loveCount),
                Player.isLoveAnimate = !1
            }
        })
    },
    loveAnimate: function(e, t, n) {
        var r = $.id2url(Player.music[Player.pos].fid, "image", "AT", "album"),
        i = Core.bodyWidth / 2 - 25,
        s = Core.bodyHeight / 2;
        $("#gnsCtn").isDisplay() && (s += 74),
        $("body").append("<div id='flyLoveTip' class='ufo hide' style='right:" + i + "px; bottom:" + s + "px; background-image:url(" + r + ");'/>"),
        $("#flyLoveTip").show().animate({
            right: "-=180",
            bottom: "+=160"
        },
        500,
        function() {
            $(this).animate({
                right: e + "px",
                bottom: t + "px"
            },
            600,
            function() {
                $("#apps").addClass("selected"),
                $(this).animate({
                    opacity: "0"
                },
                500,
                function() {
                    $(this).remove(),
                    $("body").append("<img id='flyPlusTip' src='images/plusOne.png' style='right:" + (e + 19) + "px; bottom:" + (t + 14) + "px; position:absolute; z-index:9999'/>"),
                    Core.ie68 ? $("#flyPlusTip").animate({
                        bottom: "+=" + n
                    },
                    1e3,
                    function() {
                        Overlay.rootId != "apps" && $("#apps").removeClass("selected"),
                        $(this).remove(),
                        Player.isLoveAnimate = !1
                    }) : $("#flyPlusTip").animate({
                        bottom: "+=" + n,
                        opacity: "0"
                    },
                    1e3,
                    function() {
                        Overlay.rootId != "apps" && $("#apps").removeClass("selected"),
                        $(this).remove(),
                        Player.isLoveAnimate = !1
                    })
                })
            })
        })
    },
    hateClick: function() {
        if (Player.pos == -1) {
            Gns.nowGns("你貌似还没有播放呢，在搜索框输入你想听的音乐吧！");
            return
        }
        if (Player.music[Player.pos] == undefined || $(this).isClass("selected")) return; ++Player.hateCount,
        Player.loveCount = 0;
        var e = "";
        Player.psnRdMusic != null ? e = "psn": e = Search.keywords,
        clearTimeout(Gns.gnsRcmdTmo),
        Gns.gnsRcmdTmo = setInterval(Gns.rcmd, 6e5),
        $(this).addClass("selected"),
        $("#playerLove").removeClass("selected"),
        $.ajax({
            url: Core.API_VER + "/music/post_hate_song",
            data: {
                uid: Signup.userDetail.id,
                tid: Player.music[Player.pos].tid,
                c: Player.hateCount,
                cmbt: e
            },
            success: function(e) {
                if (Flw.isFlw && Flw.toid != "") {
                    Core.getCookie("hateKnow") != "true" && Gns.nowGns('你在跟听状态，讨厌歌曲不会切换，但是已经记录了哦。<a href="#" class="trg knowEvent" cookieId="hateKnow">我知道了</a>'),
                    Flw.send("hate," + Signup.userDetail.nick + "," + Signup.userDetail.fid);
                    return
                }
                e.result.items.length > 0 ? Player.musicUpdate(e.result.items) : --Player.hateCount,
                Player.next(),
                Player.savePlayingData()
            }
        })
    },
    smlClick: function() {
        if (Flw.isFlw && Flw.toid != "") {
            Gns.nowGns("你正在跟听中，暂时不能做其他操作哦。");
            return
        }
        if (Player.pos == -1) {
            Gns.nowGns("你貌似还没有播放呢，在搜索框输入你想听的音乐吧！");
            return
        }
        $("#playerSml").isClass("hiRt") ? ($("#playerSml").removeClass("hiRt selected"), setTimeout(function() {
            $("#playerSml").addClass("lwRt")
        },
        0), $("#flySmlAblum").animate({
            left: $("#mscPlrCtn").width() / 2 - 25,
            top: $("#mscPlrCtn").height() / 2 - 25
        },
        500,
        function() {
            $("#flySmlAblum").remove(),
            Player.music = Player.smlMusic,
            Player.pos = Player.cachePos,
            Player.currentTime = 0,
            Player.play(Player.cacheSeconds),
            Player.smlMusic = null
        })) : $.ajax({
            url: Core.API_VER + "/search/fetch_sml",
            data: {
                uid: Signup.userDetail.id,
                tid: Player.music[Player.pos].tid,
                st: "0",
                ps: "30"
            },
            success: function(e) {
                if (e.result.items.length == 0) {
                    Gns.nowGns("请原谅，这首歌曲暂时没有相似歌曲，我们正在很努力的扩充DNA曲库。");
                    return
                }
                var t = $.id2url(Player.music[Player.pos].fid, "image", "AT", "album");
                $("#mscPlrCtn").append("<a href='#' id='flySmlAblum' class='ufo hide' style='left:" + ($("#mscPlrCtn").width() / 2 - 25) + "px; top:" + ($("#mscPlrCtn").height() / 2 - 25) + "px; z-index:1004; background-image:url(" + t + ");' ></a>"),
                $("#flySmlAblum").show().animate({
                    left: "57px",
                    top: "46px"
                },
                500),
                $("#flySmlAblum").click(function() {
                    $("#playerSml").click()
                }),
                $("#playerSml").removeClass("lwRt"),
                setTimeout(function() {
                    $("#playerSml").addClass("hiRt selected")
                },
                0);
                var n = 0;
                Player.smlMusic = Player.music,
                Player.music = new Array;
                for (var r = 0; r < e.result.items.length; ++r) Search.setMusic(e.result.items[r], r);
                Player.cachePos = Player.pos,
                Player.cacheSeconds = Player.currentTime,
                Player.pos = 0,
                Player.setVolumeDown("play", 400)
            }
        })
    },
    psnRdClick: function() {
        if (Flw.isFlw && Flw.toid != "") {
            Gns.nowGns("你正在跟听中，暂时不能做其他操作哦。");
            return
        }
        if ($("#playerPsnRd").isClass("selected") && Player.psnRdTmo == 0) {
            $("#psnRdMainMenu").animate({
                "margin-top": "60px"
            },
            300,
            function() {
                $(this).hide(),
                $("#searchMainMenu").show().animate({
                    "margin-top": "0px"
                },
                300)
            });
            var e = new Array;
            for (var t = 0; t < Gns.openGnsArr.length; ++t) Gns.openGnsArr[t][0] == "now" && (e[e.length] = Gns.openGnsArr[t]);
            Gns.openGnsArr = e,
            clearTimeout(Gns.closeGnsTmo),
            $("#playerPsnRd").removeClass("selected"),
            Search.st = Player.cachePsnRdSt,
            Player.music = Player.psnRdMusic,
            Player.pos = Player.cachePsnRdPos,
            Player.currentTime = 0,
            Player.play(),
            Player.psnRdMusic = null,
            Search.total = 0
        } else $("#playerPsnRd").isClass("selected") || ($("#playerPsnRd").addClass("selected"), Gns.nowGns("我们正在为你准备个人电台。", Gns.level1), $("#searchMainMenu").animate({
            "margin-top": "60px"
        },
        300,
        function() {
            $(this).hide(),
            $("#psnRdMainMenu").css({
                "margin-left": "28px"
            }).show().animate({
                "margin-top": "0px"
            },
            300)
        }), Player.smlMusic != null ? (Player.psnRdMusic = Player.smlMusic, Player.cachePsnRdPos = Player.cachePos) : (Player.psnRdMusic = Player.music, Player.cachePsnRdPos = Player.pos), Player.cachePsnRdSt = Search.st, Player.psnRdTmo = setTimeout(function() {
            Player.psnRdTmo = 0,
            Player.pos = 100,
            Search.st = 0,
            Player.music = new Array,
            Player.next()
        },
        2e3))
    },
    startRotate: function() {
        if (Signup.userDetail.sts.rtCv == "false" || $("#playCtl").isClass("loading")) return;
        Player.cdRotate ? Player.swfObj.isRotate() || Player.swfObj.beginRotate() : $("#rotateCD").removeClass("stRt").addClass("rt")
    },
    stopRotate: function() {
        Player.cdRotate ? Player.swfObj.isRotate() && Player.swfObj.stopRotate() : $("#rotateCD").addClass("stRt")
    },
    setRotate: function() {
        if (Player.music[Player.pos] == undefined) return;
        var e = $.id2url(Player.music[Player.pos].fid, "image", "AM", "album");
        Player.cdRotate ? Player.swfObj.showCover(e) : $("#rotateCD").removeClass("rt")
    },
    postNext: function() {
        if (Player.music[Player.pos] == undefined) return;
        var e, t;
        Player.actualCurrentTime > 10 ? e = "true": e = "false",
        Player.actualCurrentTime > Player.music[Player.pos].duration / 2 ? t = "true": t = "false",
        $.ajax({
            url: Core.API_VER + "/music/post_next",
            data: {
                uid: Signup.userDetail.id,
                tid: Player.music[Player.pos].tid,
                next: e,
                half: t
            }
        })
    },
    setPlayerDefault: function() {
        Player.pause(),
        Player.cdRotate ? Player.swfObj.showCover("/images/defaults/cover/300.jpg") : $("#rotateCD").css({
            background: 'url("/images/defaults/cover/300.jpg") no-repeat scroll 0 0 #E3E3E1'
        }),
        $("#mscPlr").children("p").text("Jing 已经为你准备好，搜索你想听的"),
        Player.music = new Array,
        Player.savePlayingData()
    },
    resize: function() {
        Core.bodyWidth < Core.MIN_BODY_WIDTH && (Core.bodyWidth = Core.MIN_BODY_WIDTH),
        width = Core.bodyWidth,
        Core.bodyWidth > Core.MAX_BODY_WIDTH && (width = Core.MAX_BODY_WIDTH),
        width -= Core.MIN_BODY_WIDTH,
        width = parseInt(width / ((Core.MAX_BODY_WIDTH - Core.MIN_BODY_WIDTH) / 100)),
        $("#mscPlrCtn").children(".mscPlrBtnCtn").css({
            width: 100 + width + "%",
            left: "-" + width / 2 + "%"
        })
    }
},
Apps = {
    tickerCache: null,
    MAX_INVT: 3,
    isInvtAnimate: !1,
    mtFrdsData: null,
    timeOutId: 0,
    fid: "",
    nick: "",
    init: function() {
        $(document).on("click", ".loveBtn", Apps.loveBtnClick),
        $(document).on("click", ".hateBtn", Apps.hateBtnClick),
        $(document).on("click", ".tkrsFlyEvent",
        function() {
            Search.fly($(this), $(this).attr("fid"), $(this).attr("span"), !1, !0)
        }),
        $(document).on("click", ".copyEvent",
        function() {
            var e = $(this).prev().val();
            Core.ie ? window.clipboardData.setData("Text", e) : $(this).prev().clippy({
                text: e
            })
        }),
        $(document).on("click", ".delFltr",
        function() {
            $.ajax({
                url: Core.API_VER + "/account/filter/remove_filter_tags",
                data: {
                    uid: Signup.userDetail.id,
                    tid: $(this).parent().attr("id")
                }
            });
            var e = $("#appsCttCtn").children(".fltrAppCtn");
            if (e.children().length == 1) e.css({
                height: "+=41",
                "padding-top": "0px",
                "padding-bottom": "0px"
            }),
            $("#appsCtn").animate({
                height: "-=" + e.height()
            },
            300),
            e.html(""),
            e.animate({
                height: "0px"
            },
            300,
            function() {
                e.hide()
            });
            else {
                var t = Apps.fltrHeight(e.html(), $(this).parent().attr("id"));
                t != e.height() + 41 ? (t = e.height() + 41 - t, $("#appsCtn").animate({
                    height: "-=" + t
                },
                300), e.animate({
                    height: "-=" + t
                },
                300), $(this).parent().remove()) : $(this).parent().remove()
            }
        })
    },
    tpsMenu: function(e, t) {
        var n = e.attr("uid"),
        r = e.attr("nick"),
        i,
        s,
        o,
        u,
        a = "";
        t == "shr" && (s = e.offset().left - 97, o = e.offset().top - 56, u = "", i = '<a href="#" class="trg overlay snsBindEvt">绑定一个SNS才能分享&nbsp;&nbsp;绑定</a>', a = '<div style="bottom:-24px; left:0px; position:absolute; width:200px; height:25px;"></div>');
        var f = '<div id="usrTpsCtn" class="tps" style="position:fixed; z-index:9999; left:' + s + "px; top:" + o + 'px">' + '<div class="tpsAr ' + u + '"></div>' + '<div class="tpsLbd"></div>' + '<div class="tpsCtn">' + '<div class="inspt"></div>' + '<p class="ctt">' + i + "</p>" + "</div>" + '<div class="tpsRbd"></div>' + a + "</div>";
        e.append(f),
        $("#rmnd").click(function() {
            $.ajax({
                url: Core.API_VER + "/account/remind_frd",
                data: {
                    uid: Signup.userDetail.id,
                    frdid: n
                }
            }),
            Gns.nowGns("提醒已发送"),
            $("#usrTpsCtn").remove()
        })
    },
    friendMenu: function(e, t, n) {
        var r = "";
        if (t.children(".selected").length == 1) return;
        var i = "",
        s = 0,
        o = t.attr("uid"),
        u = t.attr("nick");
        if (e == "shr") {
            r = "rvs";
            var a = new Array,
            f = resData.frdCt.result.items;
            for (var l = 0; l < f.length; ++l) ConverSns[f[l].mid] != undefined && f[l].display == "true" && (a[a.length] = ConverSns[f[l].mid + "1"]);
            for (var l = 0; l < a.length; ++l) i += '<a class="usrTps ' + ConverSns[a[l]] + '" identify="' + ConverSns[a[l]] + '" href="#">' + '<p class="usrTip">' + btnDes[a[l]] + "</p>" + "</a>",
            l != a.length - 1 && (i += '<div class="spl"></div>'),
            ++s;
            s == 0 && Apps.tpsMenu(t, "shr")
        }
        var c = 233 - (3 - s) * 77,
        h = 31.5;
        t.parent().children().each(function() {
            $(this).css("z-index", "1")
        }),
        t.css("z-index", "2"),
        parseInt(t.attr("id")) % Overlay.rowCount == 0 && (h = c - h - 15);
        if (s == 0) return;
        var p = t.offset().top + 100,
        d = t.offset().left + 54 - h,
        v = "";
        if (n == "cht") {
            var m = Core.bodyHeight - ($("#chtScroll").offset().top + $("#chtScroll").height()),
            g = Core.bodyHeight - t.offset().top;
            g - m < 90 ? (r = "rvs", p -= 178) : p -= 78,
            d = d - 54 + t.width() / 2,
            t.width() > 170 && (d += 60),
            v = '<div style="top:-22px; left:0px; position:absolute; width:78px; height:23px;"></div>'
        }
        e == "shr" && (p = $("#shrIcon").offset().top - 83, d = $("#shrIcon").offset().left - c / 2 + 6, h = c / 2, v = '<div style="bottom:-24px; left:0px; position:absolute; width:' + c + 'px; height:25px;"></div>'),
        i = '<div id="usrTpsCtn" class="usrTpsCtn overlay" style="position:fixed; z-index:9999; left:' + d + "px; top:" + p + 'px;">' + '<div class="usrTpsAr ' + r + '" style="left:' + h + 'px"></div>' + v + '<div class="usrTpsLbd"></div>' + i + '<div class="usrTpsRbd"></div>' + "</div>",
        t.append(i)
    },
    refreshFriends: function() {
        Core.setCookie("snsUpdateTime", (new Date).getTime());
        var e = $(this).attr("mid");
        $.ajax({
            url: Core.API_VER + "/oauth/fetch_updates",
            data: {
                uid: Signup.userDetail.id,
                identify: ConverSns[e + "1"]
            },
            success: function(t) {
                t.code == "802" ? Gns.nowGns("你的" + btnDes[ConverSns[e + "1"]] + '绑定已过期，<a identify="' + e + '" href="#" class="trg gnsSnsBind">请重新绑定</a>') : t.code == "804" ? Gns.nowGns("访问" + btnDes[ConverSns[e + "1"]] + "的时候超时，请重试") : t.success && Gns.nowGns("正在更新你的好友关系，稍候重新查看。")
            }
        })
    },
    loveHtml: function() {
        var e = "",
        t = Overlay.result.items,
        n = t.length;
        Overlay.rowCount * Overlay.colCount > n && (n = Overlay.rowCount - n % Overlay.rowCount + n);
        for (var r = 0; r < n; ++r) t.length <= r ? e += '<div id="" class="false rctCtn love"></div>': e += '<div id="' + t[r].id + '" class="true rctCtn love">' + '<a href="#" class="cv tkrsFlyEvent" fid="CmbtFlyBadge" span="%' + t[r].at + "的" + t[r].tit + '" style="background-image:url(' + $.id2url(t[r].fid, "image", "AT", "album") + ')"></a>' + '<p class="tit">' + t[r].tit + "</p>" + "<span>" + t[r].al + "&nbsp;&nbsp;" + t[r].at + "&nbsp;&nbsp;" + Apps.offsetDate(t[r].ts) + "</span>" + '<a href="#" class="loveBtn"></a></div>';
        $("#appsCttCtn").html(e)
    },
    loveBtnClick: function() {
        $(this).addClass("selected"),
        $.ajax({
            url: Core.API_VER + "/music/post_love_song",
            data: {
                uid: Signup.userDetail.id,
                tid: $(this).parent().attr("id")
            }
        }),
        Player.pos >= 0 && $(this).parent().attr("id") == Player.music[Player.pos].tid && $("#playerLove").removeClass("selected");
        var e = $("#appsCttCtn").children(".true").length - 1;
        $(this).parent().animate({
            height: "0px"
        },
        300,
        function() {
            $(this).remove(),
            $("#appsCttCtn").children().length == 0 && ($("#menuMore").length == 0 ? $("#appsCtn").animate({
                width: "390px",
                height: "258px"
            },
            300,
            function() {
                $("#appsCttCtn").html('<div class="noCtt"><div class="icon box"></div><p class="ctn">这里现在是空的，赶快填满它吧！</p></div>')
            }) : $("#menuMore").click())
        }),
        $("#appsCtn").animate({
            height: "-=" + resStyle.love[1]
        },
        300),
        --Overlay.result.st,
        --Overlay.result.total
    },
    loveMore: function() {
        var e = Overlay.result.items,
        t = 0;
        $("#appsCttCtn").children().each(function(n) {
            n < e.length ? ($(this).attr("id", e[n].id), $(this).children(".cv").css("background-image", "url(" + $.id2url(e[n].fid, "image", "AT", "album") + ")"), $(this).children(".cv").attr("span", "%" + e[n].at + "的" + e[n].tit), $(this).children(".tit").html(e[n].tit), $(this).children("span").html(e[n].al + "&nbsp;&nbsp;" + e[n].at + "&nbsp;&nbsp;" + Apps.offsetDate(e[n].ts))) : Overlay.rowCount * Overlay.colCount > n ? $(this).empty() : $(this).remove(),
            t = n + 1
        });
        var n = "";
        for (var r = t; r < e.length; ++r) n += '<div id="' + e[r].id + '" class="true rctCtn love">' + '<div class="cv" style="background-image:url(' + $.id2url(e[r].fid, "image", "AT", "album") + ')"></div>' + '<p class="tit">' + e[r].tit + "</p>" + "<span>" + e[r].al + "&nbsp;&nbsp;" + e[r].at + "&nbsp;&nbsp;" + Apps.offsetDate(e[r].ts) + "</span>" + '<a href="#" class="loveBtn"></a></div>';
        $("#appsCttCtn").append(n)
    },
    hateHtml: function() {
        var e = "",
        t = Overlay.result.items,
        n = t.length;
        Overlay.rowCount * Overlay.colCount > n && (n = Overlay.rowCount - n % Overlay.rowCount + n);
        for (var r = 0; r < n; ++r) t.length <= r ? e += '<div class="false rctCtn hate"></div>': e += '<div id="' + t[r].id + '" class="true rctCtn hate">' + '<div class="cv" style="background-image:url(' + $.id2url(t[r].fid, "image", "AT", "album") + ')"></div>' + '<p class="tit">' + t[r].tit + "</p>" + "<span>" + t[r].al + "&nbsp;&nbsp;" + t[r].at + "&nbsp;&nbsp;" + Apps.offsetDate(t[r].ts) + "</span>" + '<a href="#" class="hateBtn"></a></div>';
        $("#" + Overlay.ctn + "CttCtn").html(e)
    },
    hateBtnClick: function() {
        $(this).addClass("selected"),
        $.ajax({
            url: Core.API_VER + "/music/post_hate_song",
            data: {
                uid: Signup.userDetail.id,
                tid: $(this).parent().attr("id")
            }
        });
        var e = $("#appsCttCtn").children(".true").length - 1;
        $(this).parent().animate({
            height: "0px"
        },
        300,
        function() {
            $(this).remove(),
            $("#appsCttCtn").children().length == 0 && ($("#menuMore").length == 0 ? $("#appsCtn").animate({
                width: "390px",
                height: "258px"
            },
            300,
            function() {
                $("#appsCttCtn").html('<div class="noCtt"><div class="icon box"></div><p class="ctn">这里现在是空的，赶快填满它吧！</p></div>')
            }) : $("#menuMore").click())
        }),
        e % Overlay.rowCount == 0 ? ($("#appsCtn").animate({
            height: "-=" + resStyle.hate[1]
        },
        300), $("#appsCttCtn").children(".false").each(function() {
            $(this).remove()
        })) : $("#" + Overlay.ctn + "CttCtn").append('<div class="false rctCtn hate"></div>'),
        --Overlay.result.st,
        --Overlay.result.total
    },
    hateMore: function() {
        var e = Overlay.result.items,
        t = 0;
        $("#appsCttCtn").children().each(function(n) {
            n < e.length ? ($(this).attr("id", e[n].id), $(this).children(".cv").css("background-image", "url(" + $.id2url(e[n].fid, "image", "AT", "album") + ")"), $(this).children(".tit").html(e[n].tit), $(this).children("span").html(e[n].al + "&nbsp;&nbsp;" + e[n].at + "&nbsp;&nbsp;" + Apps.offsetDate(e[n].ts))) : Overlay.rowCount * Overlay.colCount > n ? $(this).empty() : $(this).remove(),
            t = n + 1
        });
        var n = "";
        for (var r = t; r < e.length; ++r) n += '<div id="' + e[r].id + '" class="true rctCtn hate">' + '<div class="cv" style="background-image:url(' + $.id2url(e[r].fid, "image", "AT", "album") + ')"></div>' + '<p class="tit">' + e[r].tit + "</p>" + "<span>" + e[r].al + "&nbsp;&nbsp;" + e[r].at + "&nbsp;&nbsp;" + Apps.offsetDate(e[r].ts) + "</span>" + '<a href="#" class="hateBtn"></a></div>';
        $("#appsCttCtn").append(n)
    },
    offsetDate: function(e, t) {
        var n = new Date,
        r = parseInt((n.getTime() - parseInt(e)) / 1e3);
        if (r / 60 < 1) return r < 30 ? "刚才": r + "秒前";
        if (r / 3600 < 1) return parseInt(r / 60) + "分钟前";
        if (r / 86400 < 1) return parseInt(r / 3600) + "小时前";
        if (r / 2592e3 < 1) {
            var i = parseInt(r / 86400);
            return t == "snsUpdate" ? i >= 7 ? !0 : !1 : i + "天前"
        }
        return r / 31104e3 < 1 ? parseInt(r / 2592e3) + "个月前": "1年前"
    },
    stctAppHtml: function() {
        $("#" + Overlay.ctn + "CttCtn").html('<div class="stctAppCtn"></div>')
    },
    invtAppHtml: function() {
        var e = "",
        t = "";
        Signup.userDetail.c != 0 && (t = '<em id="invtCount" class="num serif" style="right:70px">' + Signup.userDetail.c + "</em>"),
        e += '<div class="rctCtn invtAppCtn">' + t + '<a id="invtBtn" href="#" class="invtBtn"><span class="invtBtn txt"></span></a>' + "</div>";
        for (var n = 0; n < Overlay.result.items.length; ++n) e += Apps.invtAppGnHtml(Overlay.result.items[n]);
        $("#appsCttCtn").html(e),
        Core.ie || $(".copyEvent").clippy(),
        $("#invtBtn").click(function() {
            if (Apps.isInvtAnimate) return;
            var e = $(this);
            $.ajax({
                url: Core.API_VER + "/app/generate_invitations",
                data: {
                    uid: Signup.userDetail.id
                },
                success: function(t) {
                    if (!t.success) {
                        Gns.nowGns(t.codemsg);
                        return
                    }
                    Apps.isInvtAnimate = !0,
                    e.after("<img id='invtPlusTip' src='images/plusOne.png' style='left:" + (e.width() / 2 - 7) + "px; top:" + (e.height() / 2 - 15) + "px; position:absolute; z-index:9999'/>"),
                    Core.ie68 ? $("#invtPlusTip").animate({
                        top: "-=50"
                    },
                    1e3,
                    function() {
                        $(this).remove(),
                        Apps.isInvtAnimate = !1
                    }) : $("#invtPlusTip").animate({
                        top: "-=50",
                        opacity: "0"
                    },
                    1e3,
                    function() {
                        $(this).remove(),
                        Apps.isInvtAnimate = !1
                    }),
                    t.result.c == 0 ? $("#invtCount").hide() : $("#invtCount").text(t.result.c),
                    Signup.userDetail.c = t.result.c;
                    var n = t.result.items;
                    Overlay.result.total += n.length;
                    var r = $("#appsCttCtn").children().length,
                    i = r + n.length - 1;
                    i > Apps.MAX_INVT && ($("#appsNav .crt .rBox a").length == 0 && $("#appsNav .crt .rBox").append('<a href="#" id="menuMore" class="more" onclick="Overlay.more();"></a>'), i = Apps.MAX_INVT),
                    i -= r - 1,
                    i && $("#appsCtn").animate({
                        height: "+=" + i * resStyle.invtApp[1]
                    },
                    300,
                    function() {
                        var e = $("#appsCttCtn").children(".fm").length;
                        for (var t = 0; t < i; ++t) $("#appsCttCtn").append(Apps.invtAppGnHtml(n[t])),
                        Core.ie || $(".copyEvent").last().clippy()
                    })
                }
            })
        })
    },
    invtAppGnHtml: function(e) {
        var t = "",
        n = e;
        Core.ie && (n = "");
        var r = '<a href="#" class="clpyBtn copyEvent">' + n + "</a>",
        i = "readonly";
        return Core.ipad && (r = "", i = ""),
        swfobject.ua.pv[0] || (r = ""),
        t += '<div class="rctCtn fm"><div class="fld link"><input name="link" value="' + e + '" autocorrect="off" class="input invtLink" ' + i + ">" + r + "</div>" + "</div>",
        t
    },
    invtAppMore: function() {
        $("#appsCttCtn").children(".rctCtn.fm").remove();
        for (var e = 0; e < Overlay.result.items.length; ++e) $("#appsCttCtn").append(Apps.invtAppGnHtml(Overlay.result.items[e])),
        Core.ie || $(".copyEvent").last().clippy()
    },
    fltrAppHtml: function() {
        var e = "";
        Overlay.result.items.length == 0 ? e = '<div class="rctCtn fltrAppCtn hide">': e = '<div class="rctCtn fltrAppCtn">';
        for (var t = 0; t < Overlay.result.items.length; ++t) e += Apps.fltrGnHtml(Overlay.result.items[t]);
        e += "</div>",
        e += '<div class="rctCtn fm"><div class="fld link"><span class="fltrHint"></span><input id="fltrAppSch" class="input fltrIpt" value="添加你想过滤的内容" onblur="if(this.value == \'\')this.value=\'添加你想过滤的内容\'" onfocus="if(this.value == \'添加你想过滤的内容\')this.value = \'\'"><a id="fltrAppBtn" href="#" class="btn"><span class="btnLt"></span>提交<span class="btnRt"></span></a></div></div>',
        $("#appsCttCtn").html(e),
        $("#fltrAppSch").keyup(function(e) {
            if (e.keyCode == 13) {
                $("#fltrAppBtn").click();
                return
            }
            if (e.keyCode == 39) {
                $(this).val($(this).val() + $(".fltrHint").text()),
                $(".fltrHint").text("");
                return
            }
            var t = $(this).val();
            if (t == "") {
                $(".fltrHint").text("");
                return
            }
            $.ajax({
                url: Core.API_VER + "/account/filter/auto_filter_tags",
                data: {
                    uid: Signup.userDetail.id,
                    q: t
                },
                success: function(e) {
                    if (e.result == null || e.result == "") {
                        $(".fltrHint").text("");
                        return
                    }
                    e.result = e.result.replace(t, ""),
                    $(".fltrHint").css({
                        left: Search.getStrWidth(t) + 13 + "px"
                    }),
                    $(".fltrHint").text(e.result)
                }
            })
        }),
        $("#fltrAppBtn").click(function() {
            var e = $(this).prev().val();
            if (e == "") return;
            $.ajax({
                url: Core.API_VER + "/account/filter/post_filter_tags",
                data: {
                    uid: Signup.userDetail.id,
                    tag: e
                },
                success: function(e) {
                    if (!e.success) {
                        Gns.nowGns(e.codemsg);
                        return
                    }
                    var t = $("#appsCttCtn").children(".fltrAppCtn"),
                    n = Apps.fltrHeight(t.html() + Apps.fltrGnHtml(e.result));
                    if (n != t.height() + 41) {
                        n -= t.height(),
                        t.height() != 0 && (n -= 41),
                        $("#appsCtn").animate({
                            height: "+=" + n
                        },
                        300);
                        var r = !1;
                        t.height() == 0 && (r = !0, t.css({
                            "padding-top": "0px",
                            "padding-bottom": "0px"
                        })),
                        t.show().animate({
                            height: "+=" + n
                        },
                        300,
                        function() {
                            r && t.css({
                                "padding-top": "25px",
                                "padding-bottom": "15px",
                                height: n - 41 + "px"
                            }),
                            t.append(Apps.fltrGnHtml(e.result))
                        })
                    } else t.append(Apps.fltrGnHtml(e.result))
                }
            }),
            $(this).prev().val("")
        })
    },
    fltrGnHtml: function(e) {
        return '<div class="fltrWdCtn" id="' + e.id + '">' + '<div class="fltrWdLt"></div>' + '<p class="fltrWdCtt">' + e.n + "</p>" + '<div class="fltrWdRb"></div>' + '<a href="#" class="delFltr"></a>' + "</div>"
    },
    fltrHeight: function(e, t) {
        var n = '<div id="fltrAppCtn" class="rctCtn fltrAppCtn">' + e + "</div>";
        $("#appsCttCtn").append(n),
        t != undefined && $("#fltrAppCtn").children().each(function() {
            if ($(this).attr("id") == t) return $(this).remove(),
            !1
        });
        var r = $("#fltrAppCtn").height();
        return $("#fltrAppCtn").remove(),
        r + 41
    },
    prsntHtml: function() {
        $("#appsCttCtn").append('<div id="taskDtl" class="cmngSn"><div class="icon time"></div><p class="ctn">即将到来的App , 很快会与你见面喽！</p></div>')
    },
    infoHtml: function() {
        var e = "",
        t = Overlay.result.nickname == null ? "": Overlay.result.nickname,
        n = Overlay.result.birthday == null ? "": Overlay.result.birthday,
        r = n.split("-")[0] == undefined ? "1970": n.split("-")[0],
        i = n.split("-")[1] == undefined ? "01": n.split("-")[1],
        s = n.split("-")[2] == undefined ? "01": n.split("-")[2],
        o = Overlay.result.permalink == null ? "": Overlay.result.permalink;
        o == "" && (o = Overlay.result.id),
        o = "jing.fm/" + o;
        var u = Overlay.result.bio == null ? "": Overlay.result.bio;
        u == "" && (u = "这个人很懒，什么也没留下！");
        var a = Overlay.result.sex == null ? "": Overlay.result.sex,
        f = "";
        e += '<div class="fmCtn info"><div class="fld"><input id="nick" class="input nick" name="nick" value="' + t + '">' + '<span class="spt"></span>' + "</div>" + '<div class="fld">' + "<h4>" + o + "</h4>" + '<span class="spt"></span>' + "</div>" + '<div class="fld"><ul><li class="rd">',
        a == "男" && (f = "checked='checked'"),
        e += '<input type="radio" class="input" name="sex" ' + f + ' value="男">男</li>' + '<li class="rd">',
        f = "",
        a == "女" && (f = "checked='checked'"),
        e += '<input type="radio" class="input" name="sex" ' + f + ' value="女">女</li></ul>' + '<span class="spt"></span></div>' + '<div class="fld">' + '<ul><li class="slt"><select id="year" name="year">' + "</select><span>年</span></li>" + '<li class="slt"><select id="mouth" name="month">' + "</select><span>月</span></li>" + '<li class="slt"><select id="day" name="day">' + '</select><span>日</span></li></ul><span class="spt"></span></div>' + '<div class="fld"><input id="bio" class="input bio" value="' + u + "\" onblur=\"if(this.value == '')this.value='这个人很懒，什么也没留下！'\" onfocus=\"if(this.value == '这个人很懒，什么也没留下！')this.value = ''\" /></div></div>",
        $("#" + Overlay.ctn + "CttCtn").html(e),
        Apps.date(r, i, s);
        var l = Core.API_VER + "/account/update_profile?uid=" + Signup.userDetail.id;
        $("#nick").keydown(function(e) {
            e.stopPropagation()
        }).focus(function() {
            Apps.nick = Core.inputConver($(this).val())
        }).blur(function() {
            var e = Core.inputConver($(this).val());
            if (Apps.nick == e) return;
            var t = $(this).offset().left,
            n = $(this).offset().top - 32;
            /^[\u4E00-\u9FA5A-Za-z0-9_]+$/.test(e) ? Core.strLength(e) < 2 || Core.strLength(e) > 14 ? (Signup.tpsShow($(this), "昵称只能2-14个字符"), $(this).attr("error", "昵称只能2-14个字符")) : e.length == 0 ? ($("#tps").hide(), Signup.tpsShow($(this), "不能为空"), $(this).attr("error", "不能为空")) : ($("#tps").hide(), $(this).attr("error", ""), $.ajax({
                url: l,
                data: {
                    nick: e
                },
                success: function(t) {
                    t.success ? ($("#nick").attr("error", ""), Signup.userDetail.nick = e) : t.code == "253" ? (Signup.tpsShow($("#nick"), "昵称重复"), $("#nick").attr($("#nick"), "不能为空")) : alert(t.codemsg)
                }
            })) : (Signup.tpsShow($(this), '支持中英文、数字、"_"'), $(this).attr("error", '支持中英文、数字、"_"'))
        }),
        $("#bio").blur(function() {
            $.ajax({
                url: l,
                data: {
                    bio: Core.inputConver($(this).val())
                }
            })
        }).keydown(function(e) {
            e.stopPropagation()
        }),
        $("input[name=sex]").click(function() {
            $.ajax({
                url: l,
                data: {
                    sex: $(this).val()
                }
            })
        }),
        $("#year, #mouth, #day").change(function() {
            var e = $("#year").val() + "-" + $("#mouth").val() + "-" + $("#day").val();
            $.ajax({
                url: l,
                data: {
                    bday: e
                }
            })
        })
    },
    date: function(e, t, n) {
        e == "" && (e = 1985);
        var r = new Date,
        i = r.getYear() + 1900;
        Core.ie68 && (i = r.getYear());
        var s = "",
        o = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
        i % 4 == 0 && (o[1] = 29);
        for (var u = 80; u >= 10; --u) {
            var a = "";
            i - u == Number(e) && (a = "selected"),
            s += "<option value='" + (i - u).toString() + "' " + a + ">" + (i - u).toString() + "</option>"
        }
        $("#year").html(s),
        s = "";
        for (var u = 1; u < 13; ++u) {
            var a = "",
            f = "";
            u < 10 ? f = "0" + u: f = u + "",
            f == t && (a = "selected"),
            s += "<option value='" + f + "' " + a + ">" + f + "</option>"
        }
        $("#mouth").html(s),
        s = "",
        nowMouth = Number(t.replace("0", ""));
        for (var u = 1; u < o[nowMouth - 1] + 1; ++u) {
            var a = "",
            l = "";
            u < 10 ? l = "0" + u: l = u + "",
            l == n && (a = "selected"),
            s += "<option value='" + l + "' " + a + ">" + l + "</option>"
        }
        $("#day").html(s)
    },
    avtHtml: function() {
        var e = "",
        t = "";
        Core.ipad ? t = '<div class="uploadify-button" style="margin-left:68px; margin-top:40px"><span class="uploadify-button-text">iPad 不支持上传头像</span></div>': swfobject.ua.pv[0] ? t = '<input id="uploadify" name="file" type="file">': t = '<div class="uploadify-button" style="margin-left:68px; margin-top:40px"><span class="uploadify-button-text">没装flash，不能上传头像</span></div>',
        e += '<div class="fmCtn">' + t + "</div>";
        var n = Overlay.result.items.length;
        Overlay.rowCount * Overlay.colCount > n && (n = Overlay.rowCount - n % Overlay.rowCount + n);
        for (var r = 0; r < n; ++r) {
            var i = "";
            if (Overlay.result.items.length <= r) e += '<div class="iconCtn"></div>';
            else {
                var s = Overlay.result.items[r].url,
                o = "";
                Overlay.result.items[r].type == "Qq" ? i = "腾讯微博": Overlay.result.items[r].type == "Sina" ? i = "新浪微博": Overlay.result.items[r].type == "Renren" ? i = "人人网": Overlay.result.items[r].type == "Douban" ? i = "豆瓣网": Overlay.result.items[r].type == "Gr" ? i = "Gravatar.com": i = "本地上传",
                Overlay.result.items[r].using && (o = "<span class='selected'></span>"),
                e += '<div class="iconCtn" url="' + Overlay.result.items[r].url + '">' + '<a href="#" class="avtMask avtEvt"></a>' + '<div id="' + Overlay.result.items[r].type + '" class="avt" style="overflow:hidden;position:relative;">' + '<img id="avt-' + r + '" src="/images/defaults/avatar/' + Core.A64 + '.jpg" width="64px" height="64px" style="position:absolute;" /></div>' + "<span>" + i + "</span>" + o + "</div>"
            }
        }
        $("#appsCttCtn").html(e),
        Core.uploadify(),
        $("#appsCttCtn").find("img").each(function(e) {
            Core.imgLoad($(this), "", Overlay.result.items[e].url, 64)
        }),
        $(".avtEvt").click(function() {
            if (!$(this).parent().find(".selected").length) {
                var e = $(this).parent();
                $("#appsCttCtn").find(".selected").remove();
                var t = $(this).next(".avt").attr("id"),
                n = Core.API_VER + "/account/change_avatar";
                $.ajax({
                    url: n,
                    data: {
                        uid: Signup.userDetail.id,
                        type: t
                    },
                    success: function(t) {
                        if (!t.success) return;
                        Signup.userDetail.fid = e.attr("url"),
                        Signup.userDetail.fidtiny = t.result
                    }
                }),
                $(this).parent().append("<span class='selected'></span>")
            }
        })
    },
    pwdHtml: function() {
        var e = "",
        t = "",
        n = "",
        r = "",
        i = "";
        Core.ie68 ? (t = '<img src="images/i18n/zh_CN/cnStrP10.gif" class="pwdImg" />', n = '<img src="images/i18n/zh_CN/cnStrP11.gif" class="pwdImg" />') : (r = 'placeholder="输入你的旧密码"', i = 'placeholder="输入你的新密码"'),
        e += '<div class="rctCtn pwd"><div class="fld oldPwd"><label></label>' + t + '<input type="password" id="oldPwd" name="link" class="input" ' + r + ">" + "</div>" + '<div class="fld newPwd">' + "<label></label>" + n + '<input type="password" id="newPwd" name="new_password" class="input" ' + i + ">" + '<a id="pwdSubmit" href="#" class="btn"><span class="btnLt"></span>提交<span class="btnRt"></span></a>' + "</div></div>",
        $("#" + Overlay.ctn + "CttCtn").html(e),
        $("#newPwd, #oldPwd").prev().click(function() {
            $(this).next().focus()
        }),
        $("#newPwd, #oldPwd").focus(function() {
            Core.ie68 && $(this).prev().hide()
        }).blur(function() {
            $(this).val().length == 0 && Core.ie68 && $(this).prev().show();
            var e = $(this).val();
            e == "" ? $(this).attr("error", "密码不能为空") : e.length < 6 ? ($(this).attr("error", "密码必须6位以上"), Signup.tpsShow($(this), "密码必须6位以上")) : ($("#tps").hide(), $(this).attr("error", ""))
        }),
        $("#pwdSubmit").click(function() {
            if (!Core.isEmpty($("#newPwd").attr("error"))) Signup.tpsShow($("#newPwd"), $("#newPwd").attr("error"));
            else if (!Core.isEmpty($("#oldPwd").attr("error"))) Signup.tpsShow($("#oldPwd"), $("#oldPwd").attr("error"));
            else {
                var e = Core.API_VER + "/account/change_pwd";
                $.ajax({
                    url: e,
                    data: {
                        uid: Signup.userDetail.id,
                        oldpwd: $("#oldPwd").val(),
                        newpwd: $("#newPwd").val()
                    },
                    success: function(e) {
                        e.success ? (Gns.nowGns("你的密码已经修改成功"), $("#oldPwd, #newPwd").val(""), $("#oldPwd, #newPwd").prev().show()) : Gns.nowGns(e.codemsg)
                    }
                })
            }
        }),
        $("#newPwd").keyup(function(e) {
            e.keyCode == 13 && ($("#newPwd").blur(), $("#pwdSubmit").click())
        }).keydown(function(e) {
            e.stopPropagation()
        })
    },
    lnkHtml: function() {
        var e = "";
        e += '<div class="rctCtn fm"><div class="fld link"><label></label><input id="addLinkInput" name="link" class="input" value="添加你的社交网络链接" onblur="if(this.value == \'\')this.value=\'添加你的社交网络链接\'" onfocus="if(this.value == \'添加你的社交网络链接\')this.value = \'\'"><a id="addLinkBtn" href="#" class="btn"><span class="btnLt"></span>提交<span class="btnRt"></span></a></div></div>';
        for (var t = 0; t < Overlay.result.items.length; ++t) e += Apps.lnkGnrHtml(Overlay.result.items[t]);
        $("#" + Overlay.ctn + "CttCtn").html(e),
        $("#addLinkInput").focus(function() {
            $(this).val() == "" && ($(this).val("http://"), $(this).setCursorPosition(7))
        }).blur(function() {
            $(this).val() == "http://" && $(this).val("")
        }).keydown(function(e) {
            e.stopPropagation()
        }),
        $("#addLinkBtn").click(function() {
            var e = $("#addLinkInput").val();
            e != "" && ($.ajax({
                url: Core.API_VER + "/account/add_link",
                data: {
                    link: e,
                    uid: Signup.userDetail.id
                }
            }), $("#appsCtn").animate({
                height: "+=" + resStyle.lnk[1]
            },
            300,
            function() {
                $("#appsCttCtn").append(Apps.lnkGnrHtml(e)),
                $("#addLinkInput").val("http://"),
                $(".dltBtn, .edtBtn").unbind("click"),
                $(".dltBtn").bind("click", Apps.dltBtnClick),
                $(".edtBtn").bind("click", Apps.edtBtnClick),
                $("#addLinkInput").focus()
            }))
        }),
        $("#addLinkInput").keyup(function(e) {
            e.keyCode == 13 && $("#addLinkBtn").click()
        }),
        $(".dltBtn").bind("click", Apps.dltBtnClick),
        $(".edtBtn").bind("click", Apps.edtBtnClick)
    },
    lnkGnrHtml: function(e) {
        var t = "twt";
        for (var n in lnkStyle) e.indexOf(n) >= 0 && (t = lnkStyle[n]);
        var r = '<div class="rctCtn lnk"><label class="scLogo ' + t + '"></label>' + "<pre>" + e + "</pre>" + '<a href="#" class="dltBtn"></a>' + '<a href="#" class="edtBtn"></a>' + "</div>";
        return r
    },
    dltBtnClick: function() {
        var e = $(this).parent().children("pre").text();
        $.ajax({
            url: Core.API_VER + "/account/remove_link",
            data: {
                uid: Signup.userDetail.id,
                link: e
            }
        }),
        $(this).parent().animate({
            height: "0px"
        },
        300,
        function() {
            $(this).remove()
        }),
        $("#appsCtn").animate({
            height: "-=" + resStyle.lnk[1]
        },
        300)
    },
    edtBtnClick: function() {
        var e = $(this).parent().children("pre").text();
        $(this).parent().children("pre").remove(),
        $(this).parent().children("label").after("<div class='fld link'><input id='editLink' type='' class='input editLink' value='" + e + "' /></div>"),
        $("#editLink").focus().setCursorPosition($("#editLink").val().length),
        $("#editLink").blur(function() {
            var t = $(this).val();
            t == "" && (t = e),
            $(this).parent().parent().children("label").after("<pre>" + t + "</pre>"),
            $(this).parent().remove();
            if (t == e) return;
            $.ajax({
                url: Core.API_VER + "/account/update_link",
                data: {
                    uid: Signup.userDetail.id,
                    oldlink: e,
                    newlink: t
                }
            })
        })
    },
    snsHtml: function() {
        var e = "";
        for (var t = 0; t < Overlay.result.items.length; ++t) {
            var n = "";
            Overlay.result.items[t].v == "false" && (n = "off"),
            e += '<div class="rctCtn sync"><div class="icon ' + ConverSns[Overlay.result.items[t].n] + '"></div>' + '<p class="ctn">自动同步到' + btnDes[Overlay.result.items[t].n] + "</p>" + '<a href="#" class="swtch swtchEvent ' + n + '"></a>' + "</div>"
        }
        $("#" + Overlay.ctn + "CttCtn").html(e),
        $(".swtchEvent").click(function() {
            var e, t;
            $(this).parent().children(".newapp").remove(),
            $(this).isClass("off") ? ($(this).removeClass("off"), e = !0, Core.getCookie("snsStKnow") != "true" && Gns.nowGns('开启之后会自动同步你喜欢、搜索和解锁的操作，<a href="#" class="trg knowEvent" cookieId="snsStKnow">我知道了</a>。', Gns.level1)) : ($(this).addClass("off"), e = !1),
            $(this).parent().children(".qq").length > 0 ? t = "qq_weibo": $(this).parent().children(".rr").length > 0 ? t = "renren": $(this).parent().children(".wb").length > 0 ? t = "sina_weibo": $(this).parent().children(".db").length > 0 && (t = "douban"),
            $.ajax({
                url: Core.API_VER + "/setting/post_settings",
                data: {
                    uid: Signup.userDetail.id,
                    n: t,
                    v: e
                }
            })
        })
    },
    taskGnsAppHtml: function() {
        var e = "";
        for (var t = 0; t < Overlay.result.items.length; ++t) {
            var n = Overlay.result.items[t].n,
            r = Overlay.result.items[t].v,
            i = "";
            n == "timedot" ? i = "自动提示歌曲的演奏信息": n == "rltd" ? i = "自动提示歌曲的周边信息，电影相关": n == "frdlvd" ? i = "自动提示你的朋友也喜欢了这首歌": n == "rcmd" && (i = "自动推荐搜索组合"),
            Signup.userDetail.sts[n] = r,
            r == "true" ? r = "": r = "off",
            e += '<div class="rctCtn ntfct"><p class="ctn">' + i + "</p>" + '<a id="' + n + '" href="#" class="swtch swtchEvent ' + r + '"></a>' + "</div>"
        }
        $("#appsCttCtn").html(e),
        $(".swtchEvent").click(function() {
            var e;
            $(this).isClass("off") ? ($(this).removeClass("off"), e = "true") : ($(this).addClass("off"), e = "false"),
            Signup.userDetail.sts[$(this).attr("id")] = e,
            $.ajax({
                url: Core.API_VER + "/setting/post_settings",
                data: {
                    uid: Signup.userDetail.id,
                    n: $(this).attr("id"),
                    v: e
                }
            })
        })
    },
    dsplyHtml: function() {
        var e = "",
        t = Overlay.result.items; ! Core.ipad && Core.webkit && (t[t.length] = new Object, t[t.length - 1].n = "h5", t[t.length - 1].v = Signup.userDetail.sts.h5);
        for (var n = 0; n < t.length; ++n) {
            var r = t[n].n,
            i = t[n].v,
            s = "";
            r == "lgA" ? s = "开启大字体显示": r == "rtCv" ? s = "Cover 旋转开关": r == "autoSnc" ? s = "开启一键分享": r == "hbr" && (s = "使用高品质音乐"),
            !Core.ipad && Core.webkit && r == "h5" && (s = "开启HTML5播放器"),
            Signup.userDetail.sts[r] = i,
            i == "true" ? i = "": i = "off",
            e += '<div class="rctCtn ntfct"><p class="ctn">' + s + "</p>" + '<a id="' + r + '" href="#" class="swtch swtchEvent ' + i + '"></a>' + "</div>"
        }
        $("#appsCttCtn").html(e),
        $(".swtchEvent").click(function() {
            var e, t = $(this).attr("id");
            $(this).isClass("off") ? ($(this).removeClass("off"), e = "true") : ($(this).addClass("off"), e = "false"),
            Signup.userDetail.sts[t] = e,
            t == "rtCv" ? Signup.userDetail.sts.rtCv == "true" ? Player.startRotate() : (Player.stopRotate(), Player.setRotate()) : t == "hbr" ? (Player.hbr = e, Player.play(Player.currentTime)) : Signup.userDetail.sts.lgA == "true" ? $("html").addClass("ftlg") : $("html").removeClass("ftlg"),
            $.ajax({
                url: Core.API_VER + "/setting/post_settings",
                data: {
                    uid: Signup.userDetail.id,
                    n: t,
                    v: e
                },
                success: function() {
                    if (t == "h5") {
                        var n = "";
                        e == "true" ? n = "HTML5": n = "FLASH",
                        Gns.nowGns("已经切换到" + n + '播放器，刷新立即生效。<a href="javascript:window.location.reload()" class="trg">刷新</a>')
                    }
                }
            })
        })
    },
    ntfctHtml: function() {
        var e = "";
        for (var t = 0; t < Overlay.result.items.length; ++t) {
            var n = Overlay.result.items[t].n,
            r = Overlay.result.items[t].v,
            i = "";
            n == "tckNtf" ? i = "自动提醒好友在听": n == "rmdTone" ? i = "开启消息提醒声音": n == "frdCntNtf" ? i = "自动提醒在线好友": n == "tipNtf" && (i = "自动提示菜单Tip"),
            Signup.userDetail.sts[n] = r,
            r == "true" ? r = "": r = "off",
            e += '<div class="rctCtn ntfct"><p class="ctn">' + i + "</p>" + '<a id="' + n + '" href="#" class="swtch swtchEvent ' + r + '"></a>' + "</div>"
        }
        $("#appsCttCtn").html(e),
        $(".swtchEvent").click(function() {
            var e;
            $(this).isClass("off") ? ($(this).removeClass("off"), e = "true") : ($(this).addClass("off"), e = "false"),
            Signup.userDetail.sts[$(this).attr("id")] = e,
            $.ajax({
                url: Core.API_VER + "/setting/post_settings",
                data: {
                    uid: Signup.userDetail.id,
                    n: $(this).attr("id"),
                    v: e
                }
            })
        })
    },
    thmHtml: function() {
        var e = Overlay.result.items[0].v,
        t = "";
        for (var n = 0; n < Thm.length; ++n) {
            if (n == Overlay.count) break;
            var r = "";
            e == Thm[n][0] && (r = "selected");
            var i = "";
            Core.isNewIcon("t", Thm[n][0]) && (i = '<em class="newApp" style="left:auto; top:7px; right:20px;"></em>', Core.ulNewIcon("t", Thm[n][0])),
            t += '<div class="rctCtn thm">' + i + '<div class="thmIcon ' + Thm[n][0] + '"></div>' + '<p class="ctn">' + Thm[n][1] + "</p>" + '<a id="' + Thm[n][0] + '" href="#" class="chc ' + r + ' swtchEvent"></a>' + "</div>"
        }
        $("#appsCttCtn").html(t),
        $(".swtchEvent").click(function() {
            var e = "";
            if (!$(this).isClass("selected")) {
                e = $(this).attr("id"),
                Overlay.result.items[0].v = e;
                for (var t = 0; t < Thm.length; ++t) $("#" + Thm[t][0]).removeClass("selected");
                $(this).addClass("selected"),
                Gns.nowGns('你正在更换 <a class="trg" href="#">' + $(this).prev().text() + "</a> 主题。"),
                $.ajax({
                    url: Core.API_VER + "/setting/post_settings",
                    data: {
                        uid: Signup.userDetail.id,
                        n: "thm",
                        v: e
                    }
                });
                var n = function() {
                    for (var t = 0; t < Thm.length; ++t) $("html").removeClass(Thm[t][0] + "Thm");
                    $("html").addClass(e + "Thm");
                    var n = "";
                    e == "lthbg" || e == "ctwd" ? n = "-17px": n = "-14px",
                    $("#mainMenuCtn").animate({
                        bottom: n
                    },
                    300),
                    Signup.userDetail.sts.thm = e
                };
                n()
            }
        })
    },
    thmMore: function() {
        var e = Overlay.count;
        $("#appsCttCtn>.thm").each(function(t) {
            e += t;
            if (e >= Thm.length) {
                $(this).remove();
                return
            }
            $(this).children(".newApp").remove(),
            $(this).children(".thmIcon").attr("class", "thmIcon " + Thm[e][0]),
            $(this).children(".ctn").text(Thm[e][1]);
            var n = "";
            Overlay.result.items[0].v == Thm[e][0] && (n = "selected"),
            $(this).children("a").attr({
                id: Thm[e][0],
                "class": "chc " + n
            })
        })
    },
    tkrsHtml: function() {
        var e = "";
        Apps.tickerCache = Overlay.result;
        var t = Overlay.result.items,
        n = t.length;
        Overlay.rowCount * Overlay.colCount > n && (n = Overlay.rowCount - n % Overlay.rowCount + n),
        $("#appsCttCtn").html("");
        for (var r = 0; r < n; ++r) t.length <= r ? e = '<div class="rctCtn tck"></div>': e = Apps.tkrsGnHtml(t[r], r),
        $("#appsCttCtn").append(e),
        t.length > r && (t[r].t == "C" || t[r].t == "D" || t[r].t == "S") && t[r].fid == "" && Core.imgLoad($("#appsCttCtn").children().last().find("img"), "", t[r].avt, 53)
    },
    tkrsGnHtml: function(e, t) {
        var n = "";
        if (e.t == "L") {
            var r = $.id2url(e.fid, "image", "AT", "album");
            n = '<div class="rctCtn tck love"><div class="imgs"><a fid="CmbtFlyBadge" span="' + e.tit + '" class="sbj tkrsFlyEvent" href="#" style="background:#e1e1e1 url(' + r + ') no-repeat"></a>' + "</div>" + '<div class="ctt">' + '<a fid="CmbtFlyBadge" span="' + e.tit + '" class="tckrTit tkrsFlyEvent" href="#">' + e.tit + "</a>" + '<div class="actn"><a href="#">' + e.nick + "</a> " + Apps.offsetDate(e.ts) + "喜欢了这首歌</div>" + "</div>" + '<em class="serif">' + (t + 1) + ".</em>" + "</div>"
        } else if (e.t == "K") {
            var r = $.id2url(e.fid, "image", "AT", "album");
            n = '<div class="rctCtn tck love"><div class="imgs"><a fid="CmbtFlyBadge" span="' + e.tit + '" class="sbj tkrsFlyEvent" href="#" style="background:#e1e1e1 url(' + r + ') no-repeat"></a>' + "</div>" + '<div class="ctt">' + '<a href="#" class="tckrTit tkrsFlyEvent" fid="' + e.fid + '" span="' + e.tit + '">相似：' + e.tit + "</a>" + '<div class="actn"><a href="#">' + e.nick + "</a> " + Apps.offsetDate(e.ts) + "听了相似歌曲</div>" + "</div>" + '<em class="serif">' + (t + 1) + ".</em>" + "</div>"
        } else if (e.t == "C") n = '<div class="rctCtn tck cmbt"><div class="imgs" style="overflow:hidden;position:relative;"><a fid="CmbtFlyBadge" span="' + e.tit + '" class="sbj tkrsFlyEvent" href="#"></a>' + '<img class="bdg" src="/images/defaults/avatar/' + Core.A50 + '.jpg" width="53px" height="53px" />' + "</div>" + '<div class="ctt">' + '<a href="#" class="tckrTit tkrsFlyEvent" fid="CmbtFlyBadge" span="' + e.tit + '">' + e.tit + "</a>" + '<div class="actn"><a href="#">' + e.nick + "</a> " + Apps.offsetDate(e.ts) + "使用了组合</div>" + "</div>" + '<em class="serif">' + (t + 1) + ".</em>" + "</div>";
        else if (e.t == "U") {
            var i = "",
            s = '<a fid="' + e.fid + '" span="' + e.tit + '" class="sbj tkrsFlyEvent" href="#"></a>';
            e.fid.indexOf(".") >= 0 ? i = "background-image: url('" + $.id2url(e.fid, "image", "ST", "artist") + "');": e.fid == "RRLoveBadge" || e.fid == "WBLoveBadge" || e.fid == "QQLoveBadge" || e.fid == "DBLoveBadge" ? (i = "background: transparent url('/images/badges/50/" + e.fid + ".png') no-repeat;", s = "") : i = "background-image: url('" + Core.badgesUrl(e.fid, 50) + "');",
            n = '<div class="rctCtn tck unlck"><div class="imgs">' + s + '<div class="bdg" style="' + i + '"></div>' + "</div>" + '<div class="ctt">' + '<a href="#" class="tckrTit tkrsFlyEvent" fid="' + e.fid + '" span="' + e.tit + '">勋章：' + e.tit + "</a>" + '<div class="actn"><a href="#">' + e.nick + "</a> " + Apps.offsetDate(e.ts) + "解锁了勋章</div>" + "</div>" + '<em class="serif">' + (t + 1) + ".</em>" + "</div>"
        } else if (e.t == "G") n = '<div class="rctCtn tck uprd"><div class="imgs"><a class="sbj" href="#" style="background-image:url(' + Core.badgesUrl(e.fid, 50) + ')"></a>' + "</div>" + '<div class="ctt">' + '<a href="#" class="tckrTit">级别：' + e.tit + "</a>" + '<div class="actn"><a href="#">' + e.nick + "</a> " + Apps.offsetDate(e.ts) + "升级了</div>" + "</div>" + '<em class="serif">' + (t + 1) + ".</em>" + "</div>";
        else if (e.t == "D") {
            var o = "",
            u = e.fid;
            e.fid == "" ? (u = "CmbtFlyBadge", o = '<img class="bdg" src="/images/defaults/avatar/' + Core.A50 + '.jpg" width="53px" height="53px" />') : e.fid.indexOf(".") >= 0 ? o = '<div class="bdg" style="background-image: url(' + $.id2url(e.fid, "image", "ST", "artist") + ');"></div>': o = '<div class="bdg" style="background-image: url(' + Core.badgesUrl(e.fid, 50) + ');"></div>',
            n = '<div class="rctCtn tck usd"><div class="imgs" style="overflow: hidden; position: relative;"><a fid="' + u + '" span="' + e.tit + '" class="sbj tkrsFlyEvent" href="#"></a>' + o + "</div>" + '<div class="ctt">' + '<a href="#" class="tckrTit tkrsFlyEvent" fid="' + e.fid + '" span="' + e.tit + '">听了：' + e.tit + "</a>" + '<div class="actn"><a href="#">' + e.nick + "</a> " + Apps.offsetDate(e.ts) + "听了</div>" + "</div>" + '<em class="serif">' + (t + 1) + ".</em>" + "</div>"
        } else if (e.t == "S") {
            var o = "",
            u = e.fid;
            e.fid == "" ? (u = "CmbtFlyBadge", o = '<img class="bdg" src="/images/defaults/avatar/' + Core.A50 + '.jpg" width="53px" height="53px" />') : e.fid.indexOf(".") >= 0 ? o = '<div class="bdg" style="background-image: url(' + $.id2url(e.fid, "image", "ST", "artist") + ');"></div>': o = '<div class="bdg" style="background-image: url(' + Core.badgesUrl(e.fid, 50) + ');"></div>',
            n = '<div class="rctCtn tck usd"><div class="imgs" style="overflow: hidden; position: relative;"><a fid="' + u + '" span="' + e.tit + '" class="sbj tkrsFlyEvent" href="#"></a>' + o + "</div>" + '<div class="ctt">' + '<a href="#" class="tckrTit tkrsFlyEvent" fid="' + e.fid + '" span="' + e.tit + '">说了：' + e.tit + "</a>" + '<div class="actn"><a href="#">' + e.nick + "</a> " + Apps.offsetDate(e.ts) + "说了</div>" + "</div>" + '<em class="serif">' + (t + 1) + ".</em>" + "</div>"
        }
        return n
    }
},
Gns = {
    openGnsArr: new Array,
    closeGnsTmo: 0,
    isOver: !1,
    level1: "level1",
    gnsRcmdTmo: 0,
    isInsertPlay: !1,
    isAnimate: !1,
    modelArr: new Array("mscPlrCtn", "mdlHr", "instSchCtn", "topApp", "guide", "appGuide", "rlsNote", "smlGuide", "psnRdGuide", "shrGuide"),
    timeDot: null,
    init: function() {
        $(document).on("click", ".gnsStsDsply",
        function() {
            Core.overlayAppsJump("apps", "dsply")
        }),
        $(document).on("click", ".gnsSchSml",
        function() {
            Search.tid = $(this).attr("tid"),
            Search.searchBtnClick()
        }),
        $(document).on("click", ".gnsTingOS",
        function() {
            Search.searchAfter($(this).attr("keywords"), Search.response, 0, !0, !1)
        }),
        $(document).on("click", ".gnsMt",
        function() {
            Search.mt = $(this).attr("mt"),
            Search.searchBtnClick()
        }),
        $(document).on("click", ".gnsSnsBind",
        function() {
            Overlay.openSns(ConverSns[$(this).attr("identify")])
        }),
        $(document).on("click", ".gnsFlyEvent",
        function() {
            Search.fly($(this), "CmbtFlyBadge", $(this).text(), !1, !1)
        }),
        $(document).on("click", ".gnsRdFlyEvent",
        function() {
            Search.fly($(this), "CmbtFlyBadge", $(this).text(), !1, !0)
        }),
        $(document).on("click", ".gnsAttrTextFly",
        function() {
            Search.fly($(this), "CmbtFlyBadge", $(this).attr("text"), !1, !0)
        }),
        $(document).on("click", "#gnsSnsUpdate",
        function() {
            Core.setCookie("snsUpdateTime", (new Date).getTime()),
            $("#frdCt").isClass("selected") ? Frd.jump(Frd.FRDS) : (Frd.tab = Frd.FRDS, $("#frdCt").click())
        }),
        $(document).on("click", ".closeFullScreenEvt",
        function() {
            $(".cls").each(function() {
                if ($(this).parent().isDisplay()) return $(this).click(),
                Gns.isOver = !1,
                Gns.closeGns(),
                !1
            })
        }),
        $(".cls").click(function() {
            $(".closeFullScreenEvt").length > 0 && Gns.closeGns()
        }),
        $(document).on("click", ".uappEvt",
        function() {
            $("#frdCt").isClass("selected") ? Frd.jump(Frd.FRDS) : (Frd.tab = Frd.FRDS, $("#frdCt").click())
        }),
        $(document).on("click", ".gnsFlwd",
        function() {
            var e = $(this).attr("nick");
            $.ajax({
                url: Core.API_VER + "/account/follow_frd",
                data: {
                    uid: Signup.userDetail.id,
                    frdid: $(this).attr("frdid")
                },
                success: function(t) {
                    if (!t.success) {
                        Gns.nowGns(t.codemsg);
                        return
                    }
                    Gns.nowGns("你已成功关注了 " + e)
                }
            })
        }),
        $(document).on("click", "#gnsCtt a",
        function() {
            if ($(this).attr("class").indexOf("know") > -1) return;
            Core.isFullScren && ($("#guide").isDisplay() ? $("#guideFinish").click() : $("#topApp").isDisplay() ? $("#topApp .cls").click() : $("#appGuide").isDisplay() && $("#appGuide .cls").click())
        }),
        $(document).on("click", ".gnsInhsEvt",
        function() {
            $("#frdCtNewIcon").hide(),
            $("#frdCt").isClass("selected") ? Frd.jump(Frd.FRDS) : (Frd.tab = Frd.FRDS, $("#frdCt").click()),
            $(".iconEvent:eq(0)").children("a:eq(0)").click()
        }),
        $(document).on("click", ".gnsKnownEvent",
        function() {
            var e = $(this).attr("n"),
            t = $(this).parent().children(".gnsFlyEvent").text();
            $.ajax({
                url: Core.API_VER + "/music/post_genius_rcmd",
                data: {
                    uid: Signup.userDetail.id,
                    rd: t,
                    n: e
                }
            }),
            $(this).remove()
        }),
        $("#gnsCtn").mouseenter(function() {
            Gns.isOver = !0
        }).mouseleave(function() {
            Gns.isOver = !1
        }),
        $("#gnsBtn").click(function() {
            return $.ajax({
                url: Core.API_VER + "/app/fetch_genius",
                data: {
                    uid: Signup.userDetail.id
                },
                success: function(e) {
                    e.success || (e.result = Signup.userDetail.nick + "，是你在呼叫我么？我在这～");
                    if (Flw.isServer) {
                        var t = "",
                        n = Core.objLength(Flw.users);
                        if (n > 1) t = '你有 <em class="serif big" id="showFlwUsers" style="cursor:pointer; border-bottom:2px dashed #888; padding-bottom:4px;">' + n + '</em> 个好友在跟听<span class="spl"></span>';
                        else {
                            var r = "",
                            i = "";
                            for (i in Flw.users) r = Flw.users[i];
                            t = r + ' 在跟听你 <a href="#" id="stopFlw" class="trg overlay">关闭跟听</a><span class="spl"></span>'
                        }
                        e.result = t + e.result,
                        Gns.nowGns(e.result + ' 如果你不知道听什么，点击 <a class="trg gnsAttrTextFly" text="随便听听" href="#">随便听听</a>')
                    } else Search.fly($("#gnsBtn"), "CmbtFlyBadge", "随便听听", !1, !0)
                }
            }),
            !1
        }).mouseenter(function() {
            if (Signup.userDetail.sts.tipNtf != "true") return;
            $("#tps").children(".tpsCtn").children("p").text("随便听听"),
            $("#tps").css({
                left: $(this).offset().left - 39 + "px",
                top: $(this).offset().top - 47 + "px"
            }),
            $("#tps").show()
        }).mouseleave(function() {
            $("#tps").hide()
        }),
        $(document).on("click", ".gnsSysEvent",
        function() {
            Frd.olFrdObj = {
                avatar: "",
                frdshp: "",
                from: "",
                id: "",
                nick: "",
                uid: 0,
                ol: ""
            },
            $("#frdCt").isClass("selected") ? Frd.jump(Frd.OLFRD) : (Frd.tab = Frd.OLFRD, $("#frdCt").click())
        }),
        $(document).on("click", ".offChtNickEvent",
        function() {
            var e = $(this).attr("frdshp"),
            t = $(this).attr("ol");
            if (e == "false") {
                Gns.nowGns("Ta还没有关注你，无法开启聊天。");
                return
            }
            t == undefined && (t = "true"),
            Frd.olFrdObj = {
                avatar: $(this).attr("avatar"),
                frdshp: !0,
                from: "",
                id: "",
                nick: $(this).attr("nick"),
                uid: $(this).attr("fuid"),
                ol: t
            },
            $("#frdCt").isClass("selected") ? Frd.jump(Frd.FRDS) : (Frd.tab = Frd.FRDS, $("#frdCt").click())
        }),
        $(document).on("click", ".offChtListEvent",
        function() {
            $("#frdCt").isClass("selected") ? Frd.jump(Frd.FRDS) : (Frd.tab = Frd.FRDS, $("#frdCt").click()),
            $(".iconEvent:eq(0)").children("a:eq(0)").click()
        }),
        $(document).on("click", ".offChtSysEvent",
        function() {
            Frd.olFrdObj = {
                avatar: "",
                frdshp: !0,
                from: "",
                id: "",
                nick: "",
                uid: 0
            },
            $("#frdCt").isClass("selected") ? Frd.jump(Frd.OLFRD) : $("#frdCt").click()
        })
    },
    mscInfoHtml: function(e) {
        if (Player.music[Player.pos] == undefined || e.result.tid != Player.music[Player.pos].tid) return;
        Gns.mscInfo(e),
        Gns.timeDotHtml(e);
        if (Signup.userDetail.sts.frdlvd == "true") {
            var t = Player.music[Player.pos].tid;
            $.ajax({
                url: Core.API_VER + "/music/fetch_frdlvd",
                data: {
                    tid: t,
                    uid: Signup.userDetail.id
                },
                success: function(e) {
                    if (e.result.items.length == 0 || t != Player.music[Player.pos].tid) return;
                    Gns.friendLove(e)
                }
            })
        }
        $(".tmDtsCtn").remove(),
        e.result.lvd == "l" ? $("#playerLove").addClass("selected") : e.result.lvd == "h" && $("#playerHate").addClass("selected")
    },
    friendLove: function(e) {
        var t = "",
        n = e.result.items;
        for (var r = 0; r < n.length; ++r) {
            var i = n[r].nick,
            s = Search.keywords.toLowerCase().indexOf(i.toLowerCase());
            if (s >= 0 && Search.keywords.substring(s - 1, s) == "@") continue;
            t += '<a fuid="' + n[r].uid + '" avatar="' + n[r].avatar + '" nick="' + i + '" frdshp="' + n[r].frdshp + '" ol="' + n[r].ol + '" href="#" class="trg offChtNickEvent">' + i + "</a>、"
        }
        if (t == "") return;
        t = t.substring(0, t.length - 1) + " 喜欢过这首歌曲~",
        Gns.openGnsArr[Gns.openGnsArr.length] = new Array("love", t),
        Gns.showGns()
    },
    friendListen: function(e) {
        var t = "";
        for (var n = 0; n < e.items.length; ++n) {
            var r = e.items[n].avatar;
            t += '<a uid="' + e.items[n].uid + '" href="#" class="trg">' + e.items[n].nick + "</a>、"
        }
        if (t == "") return;
        t = t.substring(0, t.length - 1) + " ",
        t += "正在听这首歌曲~",
        Gns.openGnsArr[Gns.openGnsArr.length] = new Array("listen", t),
        Gns.showGns()
    },
    ablumEventClick: function() {
        var e = $.id2url($(this).attr("fid"), "image", "AT", "album"),
        t = $(this).attr("mid"),
        n = $(this).attr("tid"),
        r = $(this).offset().top - $("#mscPlrCtn").offset().top,
        i = $(this).offset().left - $("#mscPlrCtn").offset().left;
        $("#mscPlrCtn").append('<a href="#" id="flyAblum" class="ufo rt hide" style="left:' + i + "px; top:" + r + "px; background-image:url(" + e + ');" ></a>'),
        $("#flyAblum").show().animate({
            left: "335px",
            top: "315px"
        },
        500,
        function() {
            Player.isPlay && Player.playCtl("pause"),
            Gns.isInsertPlay = !0,
            $("#flyAblum").css({
                "z-index": "1004"
            });
            var e = function() {
                Player.isVolumeDown ? setTimeout(e, 200) : (Player.setPlay(0, t, n), Player.setVolumeUp())
            };
            e()
        }),
        $("#flyAblum").click(function() {
            $("#playCtl").click()
        })
    },
    mscInfo: function(e) {
        resData.gns.result.items = new Array;
        var t = e.result,
        n = "";
        for (var r in t) {
            if (Core.isEmpty(t[r]) || r == "ply_info" || r == "lvd" || r == "tid") continue;
            var i = "";
            switch (r) {
            case "feat":
                var s = t[r].atst,
                o = t[r].ftw.split(","),
                u = "",
                a = 0;
                s == "Various Artists" && (s = o[0], a = 1);
                for (; a < o.length; ++a) u += '<a class="gnsFlyEvent trg" href="#">' + o[a] + "</a>、";
                if (u == "") continue;
                u = u.substring(0, u.length - 1);
                var f = '<a class="gnsFlyEvent trg" href="#">' + s + "</a> 和 " + u + " 共同演艺这首歌噢！";
                Gns.openGnsArr[Gns.openGnsArr.length] = new Array("feat", f);
                break;
            case "vsn":
                for (var a = 0; a < t[r].length; ++a) {
                    if (t[r][a] == "原版" || t[r][a] == "纯音乐") continue;
                    n += '<a href="#" class="gnsFlyEvent trg">' + t[r][a] + "</a>、"
                }
                if (n == "") continue;
                n = n.substring(0, n.length - 1);
                var f = "你正在收听 " + n + " 的 " + Player.music[Player.pos].name;
                Gns.openGnsArr[Gns.openGnsArr.length] = new Array("vsn", f);
                break;
            case "orgn":
                for (var a = 0; a < t[r].length; ++a) {
                    var l = "";
                    if (t[r][a].tid == Player.music[Player.pos].tid) continue; ! Core.isEmpty(t[r][a].mid) && (!Flw.isFlw || Flw.toid == "") && (l = '，<a class="ablumEvent trg" fid="' + t[r][a].fid + '" mid="' + t[r][a].mid + '" tid="' + t[r][a].tid + '" href="#">要听听</a> ？');
                    var f = '<a class="gnsFlyEvent trg" href="#">' + t[r][a].atst + "</a> 也演艺过这首歌曲哦" + l;
                    Gns.openGnsArr[Gns.openGnsArr.length] = new Array("orgn", f)
                }
                break;
            case "mov_info":
                var c = "",
                h = "",
                p = 'target="_blank"';
                for (var d in t[r]) {
                    if (Core.isEmpty(t[r][d]) || d == "movie_url") continue;
                    d == "jingle" ? c += "广告歌曲、": d == "in_song" ? c += "插曲、": d == "ending_song" ? c += "片尾曲、": d == "opening_song" ? c += "片头曲、": d == "theme_song" && (c += "主题曲、"),
                    h = d
                }
                if (c != "") {
                    if (t.mov_info.movie_url == "" || t.mov_info.movie_url == null || t.mov_info.movie_url == undefined) t.mov_info.movie_url = "#",
                    p = "";
                    var f = '电影 <a href="' + t.mov_info.movie_url + '" class="trg" ' + p + "> &lt;" + t[r][h] + "&gt; </a> 的" + c.substring(0, c.length - 1) + "哦 !";
                    Gns.openGnsArr[Gns.openGnsArr.length] = new Array("mov", f)
                }
                break;
            case "cmps_info":
                var v = "",
                m = new Object;
                t[r].occp == undefined && (t[r].occp = "");
                var g = t[r].occp,
                y = t[r].singer;
                for (var d in t[r]) {
                    if (Core.isEmpty(t[r][d]) || d == "occp" || d == "singer") continue;
                    var b = "";
                    d == "composers" ? b = "作曲": d == "songwriters" ? b = "作词": d == "arrangers" ? b = "编曲": d == "producers" && (b = "制作人");
                    var w = t[r][d].split(",");
                    for (var a = 0; a < w.length; ++a) Search.keywords.indexOf(w[a]) >= 0 && (m[w[a]] == undefined ? m[w[a]] = b + "、": m[w[a]] += b + "、")
                }
                var E = !0;
                for (var r in m) if (y.indexOf(r) >= 0) {
                    E = !1;
                    break
                }
                for (var r in m) {
                    var f = '这首歌是 <a class="gnsFlyEvent trg" href="#" >' + r + "</a> ，" + m[r].substring(0, m[r].length - 1);
                    g.indexOf(r) >= 0 && E && (Gns.openGnsArr[Gns.openGnsArr.length] = new Array("cmps", f))
                }
            }
        }
        Gns.openGnsArr.length != 0 && Gns.showGns()
    },
    nowGns: function(e, t) {
        if (e == $("#gnsCtt .ctt").text()) return;
        var n = (new Date).getTime() - parseInt($("#gnsCtn").attr("time"));
        if ($("#gnsCtn").attr("tag") == "now" && 1500 > n) {
            setTimeout(function() {
                Gns.nowGns(e, t)
            },
            2e3 - n);
            return
        }
        e == undefined && (e = "Jing 开了点小差，你过会儿再试试。");
        var r = "now";
        t == Gns.level1 && (r = t),
        $("#gnsCtn").height() == 74 ? (clearTimeout(Gns.closeGnsTmo), Gns.openGnsArr = (new Array(new Array(r, e))).concat(Gns.openGnsArr), Gns.closeGns()) : (Gns.openGnsArr[0] = new Array(r, e), Gns.showGns())
    },
    showGns: function() {
        if (Gns.openGnsArr.length == 0) return;
        if ($("#gnsCtn").isDisplay() && $("#gnsCtn").height() == 74) return;
        if ($("#gnsCtn").isDisplay() && $("#gnsCtn").height() < 74) {
            setTimeout(Gns.showGns, 1e3);
            return
        }
        var e = "";
        for (var t = 0; t < Gns.modelArr.length; ++t) $("#" + Gns.modelArr[t]).isDisplay() ? $("#" + Gns.modelArr[t]).animate({
            "margin-top": "-=74"
        },
        300) : e += "#" + Gns.modelArr[t] + ",";
        $(e.substring(0, e.length - 1)).css({
            "margin-top": "-=74"
        }),
        $("#shrIcon").children("#usrTpsCtn").remove(),
        $("#atSgstCtn").hide(),
        Gns.isAnimate = !0,
        $("#gnsCtn").show().animate({
            height: "74px"
        },
        300,
        function() {
            Gns.isAnimate = !1,
            Gns.nextGns()
        })
    },
    nextGns: function() {
        clearTimeout(Gns.closeGnsTmo);
        if (Gns.openGnsArr.length == 0) {
            Gns.closeGns();
            return
        }
        if ($("#gnsCtn").attr("tag") == Gns.level1) return;
        $("#gnsCtn").attr("tag", Gns.openGnsArr[0][0]),
        $("#gnsCtn").attr("time", (new Date).getTime()),
        $("#gnsCtt").css({
            left: "0px"
        }).html('<p class="ctt">' + Gns.openGnsArr[0][1] + "</p>"),
        $("#gnsCtt").css({
            width: "auto"
        });
        var e = $("#gnsCtt").width(),
        t = $("#gnsCtt").height(),
        n = $("#gnsCttCt").width(),
        r = Gns.openGnsArr[0];
        $("#gnsCtt").css({
            left: "-" + $("#gnsCtt").width() + "px",
            "margin-top": -t / 2 + "px"
        }).animate({
            left: (n - e) / 2 + "px"
        },
        500,
        function() {
            $(this).css({
                width: e + 5 + "px"
            })
        }),
        Gns.openGnsArr[0][0] != Gns.level1 && (Gns.closeGnsTmo = setTimeout(Gns.closeGns, 8e3)),
        Gns.openGnsArr = Gns.openGnsArr.slice(1, Gns.openGnsArr.length)
    },
    closeGns: function() {
        if ($("#gnsCtn").attr("tag") == Gns.level1 || $("#gnsCtn").height() != 74 || Gns.isAnimate) return;
        var e = $("#gnsCttCt").width();
        if (Gns.openGnsArr.length != 0) $("#gnsCtt").animate({
            left: e + "px"
        },
        500,
        function() {
            $(this).css({
                width: "auto"
            }),
            Gns.nextGns()
        });
        else {
            if (Gns.isOver) {
                Gns.closeGnsTmo = setTimeout(Gns.closeGns, 3e3);
                return
            }
            $("#gnsCtn").attr("tag", ""),
            $("#gnsCtt").html("").css({
                width: "auto"
            });
            var t = "";
            for (var n = 0; n < Gns.modelArr.length; ++n) $("#" + Gns.modelArr[n]).isDisplay() ? $("#" + Gns.modelArr[n]).animate({
                "margin-top": "+=74"
            },
            300) : t += "#" + Gns.modelArr[n] + ",";
            $(t.substring(0, t.length - 1)).css({
                "margin-top": "+=74"
            }),
            $("#shrIcon").children("#usrTpsCtn").remove(),
            $("#atSgstCtn").hide(),
            Gns.isAnimate = !0,
            $("#gnsCtn").animate({
                height: "0px"
            },
            300,
            function() {
                $(this).hide(),
                Gns.isAnimate = !1
            })
        }
    },
    insertStop: function(e) {
        Gns.isInsertPlay = !1;
        if (e == "continue") {
            Player.setPlay(Player.currentTime, Player.music[Player.pos].mid, Player.music[Player.pos].tid);
            var t = function() {
                Player.isVolumeDown ? setTimeout(t, 200) : Player.playCtl()
            };
            t()
        } else e == "next" && Player.next();
        $("#flyAblum").remove()
    },
    converTime: function(e) {
        var t = parseInt(e / 60),
        n = parseInt(e % 60),
        r = "";
        return t > 0 ? (t < 10 && (t = "0" + t), n < 10 && (n = "0" + n), r = "在" + t + "分" + n + "秒出现") : r = "在" + n + "秒出现",
        r
    },
    timeDotHtml: function(response) {
        if (!response.success) return;
        Gns.timeDot = undefined;
        if (response.result.ply_info != null && response.result.ply_info != "") {
            var isShowGns = !1,
            info = eval("(" + response.result.ply_info + ")"),
            key,
            childKey;
            for (key in info.timeDot) for (var i = 0; i < info.timeDot[key].length; ++i) {
                childKey = "";
                var infoStr = "",
                pHtml = "",
                dotSeconds = 0;
                if (typeof info.timeDot[key][i] == "string") {
                    dotSeconds = parseInt(info.timeDot[key][i]),
                    infoStr = key + "从这里开始";
                    var listenHtml = ' <a href="#" id="timeDot' + dotSeconds + '" class="timeDotEvent trg">去听听</a>';
                    Flw.isFlw && Flw.toid != "" && (listenHtml = ""),
                    pHtml = '<a href="#" class="gnsFlyEvent trg" >' + key + "</a> " + Gns.converTime(dotSeconds) + listenHtml
                } else if (typeof info.timeDot[key][i] == "object") for (childKey in info.timeDot[key][i]) {
                    dotSeconds = parseInt(info.timeDot[key][i][childKey]),
                    infoStr = key + childKey + "从这里开始";
                    var listenHtml = ' <a href="#" id="timeDot' + dotSeconds + '" class="timeDotEvent trg">去听听</a>';
                    Flw.isFlw && Flw.toid != "" && (listenHtml = ""),
                    pHtml = '<a href="#" class="gnsFlyEvent trg" >' + childKey + "</a> " + Gns.converTime(dotSeconds) + listenHtml
                }
                if (dotSeconds != 0 && !isNaN(dotSeconds)) {
                    isShowGns = !0;
                    var timeDotObj = new Object;
                    timeDotObj.action = "timedot",
                    timeDotObj.classStyle = "play";
                    if (childKey != "" && (Search.keywords.indexOf(key) != -1 || Search.keywords.indexOf(childKey) != -1) || childKey == "" && Search.keywords.indexOf(key) != -1) Gns.openGnsArr[Gns.openGnsArr.length] = new Array(timeDotObj, pHtml);
                    if (Gns.timeDot == null || Gns.timeDot == undefined) Gns.timeDot = new Object;
                    Gns.timeDot["timeDot" + (dotSeconds - 2)] = new Array(timeDotObj, pHtml)
                }
            }
            isShowGns && Gns.showGns()
        }
    },
    rcmd: function() {
        if (Signup.userDetail.sts.rcmd != "true" || !$("#mainMenuCtn").isDisplay()) return;
        $.ajax({
            url: Core.API_VER + "/music/fetch_genius_rcmd",
            data: {
                uid: Signup.userDetail.id,
                cmbt: Search.keywords
            },
            success: function(e) {
                if (!e.success || e.result.rd == null) return;
                var t = e.result.rd,
                n = e.result.n;
                pHtml = Signup.userDetail.nick + '，试试 <a class="gnsRdFlyEvent trg" href="#">' + t + "</a> 的组合",
                Gns.openGnsArr[Gns.openGnsArr.length] = new Array("rcmd", pHtml),
                Gns.showGns()
            }
        })
    }
},
Top = {
    unitWH: 0,
    fontsize: 18,
    count: 0,
    direction: "",
    ANI_TIME: 50,
    TIME_ARR: new Array(2, 10, 20, 30, 40),
    isInsertPlay: !1,
    obj: null,
    colCount: 0,
    rowCount: 0,
    isExec: !1,
    init: function() {
        $("#topApp .cls").click(function(e) {
            $(".knowEvent").attr("cookieId") == "topKnow" && $(".knowEvent").click(),
            Top.obj = null,
            clearTimeout(Top.showTpsTmo),
            Core.fullScrenMenuHide();
            var t = function() {
                $(this).hide(),
                Core.isFullScren = !1,
                $("#topApp .slide").stop().html(""),
                $(document).clearQueue("topQueue"),
                $("#maskUserMenu").hide(),
                $("#tbCtn").removeClass("fsappMd"),
                Core.playerCDShow(),
                $("#topApp").css({
                    "z-index": "1004"
                }),
                Top.isInsertPlay && (Player.setVolumeDown("pause", 400), Top.insertStop()),
                $("#appsCtn, #rightAr").show(),
                $("#apps").addClass("selected"),
                $(".drgbEvt").each(function() {
                    $(this).show()
                }),
                $("#prgrsCtn").show()
            };
            Core.ie68 ? ($("#topApp").hide(), t()) : $("#topApp").animate({
                opacity: "0"
            },
            300, t)
        })
    },
    insertStop: function(e) {
        Top.isInsertPlay = !1,
        Player.setPlay(Player.currentTime, Player.music[Player.pos].mid, Player.music[Player.pos].tid);
        var t = function() {
            Player.isVolumeDown ? setTimeout(t, 200) : $("#playCtl").isClass("play") && Player.playCtl()
        };
        t()
    },
    show: function() {
        Core.getCookie("topKnow") != "true" && (Core.ipad ? Gns.nowGns('用双指滑动封面进行翻页，点击右上角小叉退出。<a href="#" cookieId="topKnow" class="trg knowEvent">我知道了</a>', Gns.level1) : Gns.nowGns('点击右上角小叉退出。<a href="#" cookieId="topKnow" class="trg knowEvent">我知道了</a>', Gns.level1)),
        $("#prgrsCtn").hide(),
        $("#topApp .slide").css("left", "0px"),
        Top.resize("true"),
        Main.hide("apps"),
        Interface.Current == Interface.SEARCH && Search.hide(),
        Core.fullScrenMenuShow("你正在使用Top排行榜", "topApp"),
        $("#maskUserMenu").show(),
        Core.playerCDHide();
        var e = function() {
            $("#tbCtn").addClass("fsappMd"),
            $(this).css({
                height: "100%",
                "z-index": "999"
            }),
            $.ajax({
                url: Core.API_VER + "/app/fetch_top",
                data: {
                    ps: "100"
                },
                success: function(e) {
                    var t = e.result.top,
                    n = "";
                    for (var r = 0; r < t.length; ++r) {
                        var i = "";
                        r >= Top.count && (i = "hide"),
                        n += '<div class="topCvCtn ' + i + '">' + '<div class="topCv" style="width:' + (Top.unitWH - 3) + "px; height:" + (Top.unitWH - 3) + 'px">' + '<div class="blkMask"></div>' + '<img src="/images/defaults/cover/cv.jpg" width="' + (Top.unitWH - 3) + 'px" height="' + (Top.unitWH - 3) + 'px">' + "</div>" + '<div class="qkPlay" style="width:' + (Top.unitWH - 3) + 'px;">' + '<p class="ats" style="width:' + (Top.unitWH - 71) + 'px"><span class="dark">Artist</span>&nbsp;' + t[r].atst + "</p>" + '<h5 class="trckTit" style="width:' + (Top.unitWH - 55) + "px; font-size:" + Top.fontsize + 'px;">' + t[r].n + "</h5>" + '<a mid="' + t[r].mid + '" tid="' + t[r].tid + '" class="qkPlayBtn" href="#"></a>' + "</div>" + "</div>"
                    }
                    $("#topApp .slide").append(n),
                    $("#topApp .slide").children().each(function(e) {
                        var n = new Image;
                        n.obj = $(this).children(".topCv").children("img"),
                        n.onload = function() {
                            this.obj.attr("src", this.src)
                        },
                        n.src = $.id2url(t[e].fid, "image", "AM", "album")
                    }),
                    Core.ipad || $("#topApp .slide").mousemove(function() {
                        if (Core.mouseX < Core.bodyWidth / 5) {
                            var e = Top.TIME_ARR[parseInt(Core.mouseX / (Core.bodyWidth / 5 / 5))];
                            if (Top.direction != "right" || Top.ANI_TIME != e) Top.ANI_TIME = e,
                            Top.slideRight();
                            return
                        }
                        if (Core.mouseX > Core.bodyWidth / 5 * 4) {
                            var e = Top.TIME_ARR[4 - parseInt((Core.mouseX - Core.bodyWidth / 5 * 4) / (Core.bodyWidth / 5 / 5))];
                            if (Top.direction != "left" || Top.ANI_TIME != e) Top.ANI_TIME = e,
                            Top.slideLeft();
                            return
                        }
                        Core.mouseX > Core.bodyWidth / 5 && Core.mouseX < Core.bodyWidth / 5 * 4 && Top.slideStop()
                    }),
                    $(".topCvCtn").mouseenter(function() {
                        if (Top.obj != null && $(this).children(".qkPlay").children(".qkPlayBtn").attr("mid") == Top.obj.attr("mid")) return;
                        $(this).children(".topCv").children(".blkMask").css({
                            opacity: "0"
                        }),
                        $(this).children(".qkPlay").show()
                    }).mouseleave(function() {
                        if (Top.obj != null && $(this).children(".qkPlay").children(".qkPlayBtn").attr("mid") == Top.obj.attr("mid")) return;
                        $(this).children(".topCv").children(".blkMask").css({
                            opacity: "0.5"
                        }),
                        $(this).children(".qkPlay").hide()
                    }),
                    $(".qkPlayBtn").click(function() {
                        if ($(this).isClass("selected")) {
                            Top.obj.removeClass("selected"),
                            Player.setVolumeDown("pause", 400),
                            Top.obj = null;
                            return
                        }
                        Top.isInsertPlay = !0,
                        Player.isPlay && Player.playCtl(),
                        Top.obj != null && (Top.obj.removeClass("selected"), Top.obj.parent(".qkPlay").hide().parent(".topCvCtn").children(".topCv").children(".blkMask").css({
                            opacity: "0.5"
                        })),
                        $(this).addClass("selected"),
                        $(this).parent(".qkPlay").show().parent(".topCvCtn").children(".topCv").children(".blkMask").css({
                            opacity: "0"
                        }),
                        Top.obj = $(this);
                        var e = $(this).attr("mid"),
                        t = $(this).attr("tid"),
                        n = function() {
                            Player.isVolumeDown ? setTimeout(n, 200) : (Player.setPlay(0, e, t), Player.setVolumeUp(), setTimeout(function() {
                                Player.isExec = !1
                            },
                            500))
                        };
                        n()
                    })
                }
            })
        };
        Core.ie68 ? ($("#topApp").removeClass("dspr"), $("#topApp").show(), e()) : $("#topApp").show().animate({
            opacity: "1"
        },
        300, e)
    },
    slideLeft: function() {
        Top.slideStop(),
        Top.direction = "left",
        $(document).queue("topQueue",
        function() {
            var e = $("#topApp .slide").width() - Core.bodyWidth + parseInt($("#topApp .slide").css("left"));
            $("#topApp .slide").animate({
                left: "-=" + e + "px"
            },
            e * Top.ANI_TIME, "linear",
            function() {
                $(document).dequeue("topQueue")
            })
        }),
        $(document).dequeue("topQueue")
    },
    slideRight: function() {
        Top.slideStop(),
        Top.direction = "right",
        $(document).queue("topQueue",
        function() {
            var e = -parseInt($("#topApp .slide").css("left"));
            $("#topApp .slide").animate({
                left: "0px"
            },
            e * Top.ANI_TIME, "linear",
            function() {
                $(document).dequeue("topQueue")
            })
        }),
        $(document).dequeue("topQueue")
    },
    slideStop: function() {
        $("#topApp .slide").stop(),
        $(document).clearQueue("topQueue"),
        Top.direction = ""
    },
    playOver: function() {
        Player.isExec = !0;
        var e = parseInt(Math.random() * Top.count),
        t = $(".topCvCtn:eq(" + e + ")");
        t.children(".qkPlay").children(".qkPlayBtn").click();
        while (e >= Top.rowCount) e -= Top.rowCount;
        var n = e * Top.unitWH - Core.bodyWidth / 2;
        n < 0 && (n = 0),
        n > $("#topApp .slide").width() - Core.bodyWidth && (n = $("#topApp .slide").width() - Core.bodyWidth),
        Top.slideStop(),
        $(document).queue("topQueue",
        function() {
            var e = -parseInt($("#topApp .slide").css("left"));
            n > e ? e = n - e: e -= n,
            Core.ipad ? $("#topApp .slide").css({
                left: "-" + n + "px"
            }) : $("#topApp .slide").animate({
                left: "-" + n + "px"
            },
            e * Top.TIME_ARR[0], "linear")
        }),
        $(document).dequeue("topQueue")
    },
    resize: function(e) {
        var t = Core.bodyHeight - 75;
        e == "true" && $("#topApp").css({
            height: t + "px"
        }),
        t -= 3;
        var n = parseInt(t / 200);
        n > 5 && (n = 5),
        n < 3 && (n = 3),
        Top.unitWH = parseInt(t / n),
        Top.fontsize = parseInt((Top.unitWH - 200) / parseInt(100 / 6)) + 18;
        var r = parseInt(100 / n);
        Top.rowCount = r,
        Top.colCount = n,
        Top.count = r * n,
        $("#topApp .slide").css({
            width: r * Top.unitWH + 3 + "px"
        }),
        e == undefined && $("#topApp .slide").children(".topCvCtn").each(function(e) {
            e < Top.count ? ($(this).children(".topCv").css({
                width: Top.unitWH - 3 + "px",
                height: Top.unitWH - 3 + "px"
            }), $(this).children(".topCv").children("img").attr("width", Top.unitWH - 3 + "px"), $(this).children(".topCv").children("img").attr("height", Top.unitWH - 3 + "px"), $(this).children(".qkPlay").css("width", Top.unitWH - 3 + "px"), $(this).children(".qkPlay").children(".ats").css({
                width: Top.unitWH - 71 + "px"
            }), $(this).children(".qkPlay").children(".trckTit").css({
                width: Top.unitWH - 55 + "px",
                "font-size": Top.fontsize + "px"
            }), $(this).show()) : $(this).hide()
        })
    }
},
Cht = {
    TEXTAREA_HEIGHT: 65,
    MAX_CHT_HEIGHT: 0,
    fuid: "",
    fid: "",
    isScroll: !1,
    scrollApi: null,
    offlineMes: new Object,
    offlineCount: 0,
    sysOfflineCount: 0,
    isTyping: !1,
    PS: 5,
    isFocus: !1,
    cacheCtnH: 0,
    cacheCttCtnH: 0,
    cacheFrdListH: 0,
    no: 0,
    init: function() {
        $(document).on("click", ".chtFlyEvent",
        function() {
            Search.fly($(this), "CmbtFlyBadge", $(this).text().replace(/#([^"]*)#/g, "$1"), !1, !0)
        })
    },
    dtlEventClick: function() {
        $cht = $(this).parents(".frdEvent").children(".tpsMenuCtn").children(".rndBtn.chtEvent");
        if ($cht.isClass("loading")) return;
        if ($(this).attr("frdshp") == "false") return;
        if (Cht.fuid != "") {
            Cht.closeCht();
            return
        }
        $(this).parents(".frdEvent").children(".tpsMenuCtn").children(".num.cht").remove(),
        $(this).parents(".rctCtn").after('<div id="chtCtn"><div id="chtScroll" class="scrollable hide"></div></div>'),
        Cht.isScroll = !1,
        Cht.fuid = $(this).attr("uid"),
        nick = $(this).attr("nick"),
        Cht.no = parseInt($(this).attr("no")),
        Cht.offlineMes[Cht.fuid] != undefined && (Cht.offlineCount -= Cht.offlineMes[Cht.fuid].count, delete Cht.offlineMes[Cht.fuid]),
        $cht.addClass("loading"),
        $.ajax({
            url: Core.API_VER + "/chat/fetch_chatctt",
            data: {
                uid: Signup.userDetail.id,
                fuid: Cht.fuid,
                st: "0",
                ps: Cht.PS
            },
            success: function(e) {
                Cht.dtlHtml(e),
                $cht.removeClass("loading")
            }
        })
    },
    closeCht: function() {
        $("#appsCttCtn").children(".rctCtn:eq(0)").animate({
            "margin-top": "+=" + Cht.no * Frd.ITEM_H
        },
        300),
        $("#appsCtn").animate({
            height: Cht.cacheCtnH + "px"
        },
        300),
        $("#appsCttCtn").animate({
            height: Cht.cacheCttCtnH + "px"
        },
        300),
        $("#chtCtn").animate({
            height: "0px"
        },
        300,
        function() {
            $(this).remove()
        }),
        Frd.mid != "" && $("#frdList").animate({
            height: Cht.cacheFrdListH + "px"
        },
        300),
        Cht.fuid = "",
        Cht.fid = ""
    },
    sysH: function() {
        Cht.MAX_CHT_HEIGHT = Core.MAX_OVERLAY_HEIGHT - Frd.ITEM_H - Frd.TITLE_H - 20 - Frd.STTS_H;
        var e = parseInt(Cht.MAX_CHT_HEIGHT / 117);
        return e
    },
    converData: function(e) {
        var t = new Array;
        for (var n = 0; n < e.length; ++n) {
            var r = Message.gnMessage(e[n]);
            t[n] = new Object,
            t[n].ts = e[n].ts,
            t[n].sf = !1,
            t[n].ctt = r
        }
        return t
    },
    dtlHtml: function(e) {
        Cht.fid = e.result.fid;
        var t = e.result.items,
        n = "",
        r, i, s, o = new Array;
        o[0] = t.length - 1;
        for (var u = t.length - 2; u >= 0; --u) {
            if (Cht.fuid == 0) break;
            r = parseInt(t[u].ts.split(" ")[0].split("-")[2]),
            i = parseInt(t[u].ts.split(" ")[1].split(":")[0]),
            s = parseInt(t[u].ts.split(" ")[1].split(":")[1]),
            r > parseInt(t[o[o.length - 1]].ts.split(" ")[0].split("-")[2]) ? o[o.length] = u: i > parseInt(t[o[o.length - 1]].ts.split(" ")[1].split(":")[0]) ? o[o.length] = u: s - parseInt(t[u].ts.split(" ")[1].split(":")[1]) > 30 && (o[o.length] = u)
        }
        for (var u = t.length - 1,
        a = 0; u >= 0; --u) Cht.fuid == 0 ? n += Cht.sysHtml(t[u]) : (u == o[a] && (n += Cht.gnTime(t[u].ts), ++a), t[u].sf ? n += Cht.rightDtl(t[u].ctt) : n += Cht.leftDtl(t[u].ctt, u));
        $("#cypherH").html(n);
        var f = $("#cypherH").height();
        $("#cypherH").html(""),
        Cht.MAX_CHT_HEIGHT = Core.MAX_OVERLAY_HEIGHT - Frd.ITEM_H - Frd.TITLE_H - 20 - Frd.STTS_H;
        var l = f;
        Cht.fuid != 0 && (l += Cht.TEXTAREA_HEIGHT),
        f == 18 && (l -= 18),
        Cht.fuid == 0 && (l += 5, f += 5),
        l > Cht.MAX_CHT_HEIGHT && (l = Cht.MAX_CHT_HEIGHT, f = Cht.MAX_CHT_HEIGHT, Cht.fuid != 0 && (f -= Cht.TEXTAREA_HEIGHT));
        var c = l;
        t.length == Cht.PS && (c += Frd.STTS_H);
        var h = function() {
            t.length == Cht.PS && (Cht.fuid == 0 ? $("#chtCtn").append(Frd.sttsHtml("查看更多通知", !0)) : $("#chtCtn").append(Frd.sttsHtml("查看聊天记录", !0)));
            if (Cht.fuid != 0) {
                var r = Retina.suffix;
                $("#chtCtn").append('<div id="chtCttCtn" class="rctCtn chtCtn rght type"><div id="emjCtn" class="emjCtn" style="height:0px; overflow:hidden;"><a href="#" class="emj mns" code="tst" style="background-image:url(../../images/emoji/1' + r + '.png)"></a>' + '<a href="#" class="emj" code="wzb" style="background-image:url(../../images/emoji/2' + r + '.png)"></a>' + '<a href="#" class="emj" code="dx" style="background-image:url(../../images/emoji/3' + r + '.png)"></a>' + '<a href="#" class="emj mns" code="k" style="background-image:url(../../images/emoji/4' + r + '.png)"></a>' + '<a href="#" class="emj" code="bj" style="background-image:url(../../images/emoji/5' + r + '.png)"></a>' + '<a href="#" class="emj" code="by" style="background-image:url(../../images/emoji/6' + r + '.png)"></a>' + '<a href="#" class="emj nbd" code="lh" style="background-image:url(../../images/emoji/7' + r + '.png)"></a>' + '<a href="#" class="emj mns" code="ks" style="background-image:url(../../images/emoji/8' + r + '.png)"></a>' + '<a href="#" class="emj" code="wq" style="background-image:url(../../images/emoji/9' + r + '.png)"></a>' + '<a href="#" class="emj" code="jy" style="background-image:url(../../images/emoji/10' + r + '.png)"></a>' + '<a href="#" class="emj mns" code="n" style="background-image:url(../../images/emoji/11' + r + '.png)"></a>' + '<a href="#" class="emj" code="bb" style="background-image:url(../../images/emoji/12' + r + '.png)"></a>' + '<a href="#" class="emj" code="pz" style="background-image:url(../../images/emoji/13' + r + '.png)"></a>' + '<a href="#" class="emj nbd" code="l" style="background-image:url(../../images/emoji/14' + r + '.png)"></a>' + "</div>" + '<div id="chtMsg" class="chtMsg">' + '<p class="chat">' + '<textarea id="chtInput" placeholder="你想和TA说点什么？" class="chtInput" ></textarea>' + '<a id="emjBtn" class="emjBtn" style="display:none" href="#"></a>' + "</p>" + '<div class="chtTail"></div>' + "</div>" + "</div>")
            }
            n != "" && $("#chtScroll").show(),
            $("#chtScroll").html(n),
            Core.ie68 && $("#emjBtn").css("opacity", "1"),
            Frd.replaceAvatar(),
            l == Cht.MAX_CHT_HEIGHT && Cht.setScroll(),
            $(".chtFlwEvt").mouseenter(function() {
                $("#appsCtn").css("overflow", "visible"),
                $(this).parents(".rctCtn").css("z-index", "2"),
                Apps.friendMenu("mtFrds", $(this), "cht")
            }).mouseleave(function() {
                $(this).parents(".rctCtn").css("z-index", "1"),
                $("#appsCtn").css("overflow", "hidden"),
                $("#usrTpsCtn").remove()
            }),
            $("#chtInput").focus(function() {
                if (Cht.emj || $(this).height() == 30) return;
                Cht.isFocus = !0,
                $("#appsCtn").animate({
                    height: "+=15"
                },
                300),
                $(this).animate({
                    height: "30px"
                },
                300,
                function() {
                    $("#emjBtn").show()
                }),
                $("#chtCttCtn").animate({
                    height: "+=15"
                },
                300),
                $("#appsCttCtn").animate({
                    height: "+=15"
                },
                300),
                Frd.mid != "" && $("#frdList").animate({
                    height: "+=15"
                },
                300)
            }).blur(function() {
                if (Cht.emj || $(this).height() == 15) return;
                var e = 15,
                t = function() {
                    $("#emjBtn").hide(),
                    $("#emjCtn").animate({
                        height: "0px"
                    },
                    300),
                    $("#appsCtn").animate({
                        height: "-=" + e
                    },
                    300),
                    $("#chtCttCtn").animate({
                        height: "-=" + e
                    },
                    300),
                    $("#appsCttCtn").animate({
                        height: "-=" + e
                    },
                    300),
                    Frd.mid != "" && $("#frdList").animate({
                        height: "-=" + e
                    },
                    300),
                    $("#chtInput").animate({
                        height: "15px"
                    },
                    300,
                    function() {
                        Cht.isFocus = !1
                    }),
                    Cht.isTyping = !1,
                    now.typing(Signup.userDetail.id, Cht.fuid, Cht.isTyping)
                };
                $("#emjCtn").height() == 88 ? (e += 88, setTimeout(t, 50)) : t()
            }).keydown(function(t) {
                if (t.keyCode == 13) {
                    var n = Core.inputConver($.trim($(this).val()));
                    return n.length > 240 ? (Gns.nowGns("发送消息内容超长，请分条发送。"), !1) : ($(this).val(""), n == "" ? !1 : (Cht.isTyping = !1, Cht.sendMsg(e, n), $.ajax({
                        url: Core.API_VER + "/chat/post_chat",
                        data: {
                            uid: Signup.userDetail.id,
                            fuid: Cht.fuid,
                            ctt: n
                        }
                    }), !1))
                }
                Cht.isTyping || (Cht.isTyping = !0, now.typing(Signup.userDetail.id, Cht.fuid, Cht.isTyping))
            }),
            $("#chtMsg").click(function() {
                Cht.isFocus || $("#chtInput").focus()
            }),
            $("#emjBtn").mouseover(function() {
                Cht.emj = !0
            }).mouseout(function() {
                Cht.emj = !1
            }).click(function() {
                $("#emjCtn").height() == 88 ? ($("#emjCtn, #appsCtn, #appsCttCtn, #chtCttCtn").animate({
                    height: "-=88"
                },
                300), Frd.mid != "" && $("#frdList").animate({
                    height: "-=88"
                },
                300)) : ($("#emjCtn, #appsCtn, #appsCttCtn, #chtCttCtn").animate({
                    height: "+=88"
                },
                300), Frd.mid != "" && $("#frdList").animate({
                    height: "+=88"
                },
                300)),
                $("#chtInput").focus()
            }),
            $(".emj").mouseover(function() {
                Cht.emj = !0
            }).mouseout(function() {
                Cht.emj = !1
            }).click(function() {
                $("#emjBtn").click();
                var e = "[" + $(this).attr("code") + "]";
                $("#chtInput").val($("#chtInput").val() + e)
            })
        };
        Cht.cacheCttCtnH = $("#appsCttCtn").height(),
        Frd.olFrdObj == "" ? (Cht.cacheCtnH = $("#appsCtn").height(), $("#appsCttCtn").children(".rctCtn:eq(0)").animate({
            "margin-top": "-=" + Cht.no * Frd.ITEM_H
        },
        300), $("#appsCtn").animate({
            height: c + Frd.ITEM_H + Frd.TITLE_H - 10 + "px"
        },
        300), $("#appsCttCtn").animate({
            height: c + Frd.ITEM_H + "px"
        },
        300), $("#chtCtn").animate({
            height: c + "px"
        },
        300,
        function() {
            $(this).css("height", "auto")
        }), $("#chtScroll").animate({
            height: f + "px"
        },
        300, h), Frd.mid != "" && (Cht.cacheFrdListH = $("#frdList").height(), $("#frdList").animate({
            height: (Cht.no + 1) * Frd.ITEM_H + c + "px"
        },
        300))) : (Cht.cacheCtnH = parseInt($("#appsCtn").attr("heightArg")), $("#appsCttCtn").children(".rctCtn:eq(0)").css({
            "margin-top": "-=" + Cht.no * Frd.ITEM_H
        }), $("#appsCttCtn").animate({
            height: c + Frd.ITEM_H + "px"
        }), $("#chtCtn").css({
            height: c + "px"
        }), $("#chtScroll").css({
            height: f + "px"
        }), $("#chtCtn").css("height", "auto"), Frd.mid != "" && (Cht.cacheFrdListH = $("#frdList").height(), $("#frdList").css({
            height: (Cht.no + 1) * Frd.ITEM_H + c + "px"
        })), h(), Frd.olFrdObj = "", $("#appsCtn").animate({
            height: c + Frd.ITEM_H + Frd.TITLE_H - 10 + "px"
        },
        300,
        function() {
            $("#appsCttCtn").animate({
                left: "10px"
            },
            300,
            function() {
                $(this).css({
                    "background-image": "none"
                }),
                Overlay.isSwitch = !0
            })
        }))
    },
    more: function() {
        var e = 0;
        Cht.isScroll ? e = Cht.scrollApi.getContentPane().children(".rctCtn").length: e = $("#chtScroll").children(".rctCtn").length,
        $.ajax({
            url: Core.API_VER + "/chat/fetch_chatctt",
            data: {
                uid: Signup.userDetail.id,
                fuid: Cht.fuid,
                st: e,
                ps: Cht.PS
            },
            success: function(e) {
                var t = e.result.items,
                n = "";
                if (t.length == 0 || t.length != Cht.PS) $("#appsCtn, #appsCttCtn").animate({
                    height: "-=" + Frd.STTS_H
                },
                300),
                Frd.mid != "" && $("#frdList").animate({
                    height: "-=" + Frd.STTS_H
                },
                300),
                $("#chtCtn").children(".stts").animate({
                    height: "0px"
                },
                300,
                function() {
                    $(this).remove()
                });
                if (t.length == 0) return;
                var r, i, s, o = new Array;
                o[0] = t.length - 1;
                for (var u = t.length - 2; u >= 0; --u) r = parseInt(t[u].ts.split(" ")[0].split("-")[2]),
                i = parseInt(t[u].ts.split(" ")[1].split(":")[0]),
                s = parseInt(t[u].ts.split(" ")[1].split(":")[1]),
                r > parseInt(t[o[o.length - 1]].ts.split(" ")[0].split("-")[2]) ? o[o.length] = u: i > parseInt(t[o[o.length - 1]].ts.split(" ")[1].split(":")[0]) ? o[o.length] = u: s - parseInt(t[u].ts.split(" ")[1].split(":")[1]) > 30 && (o[o.length] = u);
                for (var u = t.length - 1,
                a = 0; u >= 0; --u) Cht.fuid == 0 ? n += Cht.sysHtml(t[u]) : (u == o[a] && (n += Cht.gnTime(t[u].ts), ++a), t[u].sf ? n += Cht.rightDtl(t[u].ctt) : n += Cht.leftDtl(t[u].ctt));
                if (Cht.isScroll) Cht.prependChtHtml(n);
                else {
                    $("#cypherH").html(n);
                    var f = $("#cypherH").height() + $("#chtScroll").height();
                    $("#cypherH").html("");
                    var l = f + Cht.TEXTAREA_HEIGHT;
                    f == 18 && (l -= 18),
                    l > Cht.MAX_CHT_HEIGHT && (l = Cht.MAX_CHT_HEIGHT, f = Cht.MAX_CHT_HEIGHT - Cht.TEXTAREA_HEIGHT);
                    var c = l;
                    Cht.fuid == 0 && (c -= Cht.TEXTAREA_HEIGHT),
                    c += Frd.STTS_H,
                    $("#appsCtn").animate({
                        height: c + Frd.ITEM_H + Frd.TITLE_H - 10 + "px"
                    },
                    300),
                    $("#appsCttCtn").animate({
                        height: c + Frd.ITEM_H + "px"
                    },
                    300),
                    $("#chtScroll").animate({
                        height: f + "px"
                    },
                    300,
                    function() {
                        l == Cht.MAX_CHT_HEIGHT && Cht.setScroll(),
                        Cht.prependChtHtml(n),
                        Frd.replaceAvatar()
                    }),
                    Frd.mid != "" && $("#frdList").animate({
                        height: (Cht.no + 1) * Frd.ITEM_H + c + "px"
                    },
                    300)
                }
                Frd.replaceAvatar()
            }
        })
    },
    sendMsg: function(e, t) {
        var n = ""; ! Cht.isScroll && $("#chtScroll").children().length == 0 && (n += Cht.gnTime(Core.getDate())),
        n += Cht.rightDtl(t),
        Cht.appendCht(n, "send")
    },
    receiveMessage: function(e) {
        if (Cht.fuid == e.fuid) {
            var t = ""; ! Cht.isScroll && $("#chtScroll").children().length == 0 && (t += Cht.gnTime(e.ts)),
            t += Cht.leftDtl(e.ctt),
            Cht.appendCht(t, "receive")
        } else {
            Cht.offlineMes[e.fuid] == undefined && (Cht.offlineMes[e.fuid] = new Object, Cht.offlineMes[e.fuid].count = 0),
            Cht.offlineMes[e.fuid].nick = e.nick,
            Cht.offlineMes[e.fuid].count += 1,
            Cht.offlineCount += 1,
            e.ctt.length > 10 && (e.ctt = e.ctt.substring(0, 10) + "...");
            var n = e.nick + ' 对你说："' + e.ctt + '"，<a href="#" class="trg offChtNickEvent" fuid="' + e.fuid + '" nick="' + e.nick + '" avatar="' + e.fid + '">去看看？</a>';
            Gns.nowGns(n),
            $(".tpsMenuCtn>.chtEvent").each(function() {
                if ($(this).attr("uid") == e.fuid) return $(this).parent().children("em").remove(),
                $(this).after('<em class="num serif cht">' + Cht.offlineMes[e.fuid].count + "</em>"),
                !1
            })
        }
    },
    typingMessage: function(e, t) {
        var n = '<div id="typing" class="rctCtn chtCtn lft typng" style="float:left; height:auto"><div class="chtMsg"><p class="chat"></p><div class="chtTail"></div></div></div>';
        if (t && $("#typing").length == 0) Cht.appendCht(n, "typing");
        else {
            var r = $("#typing").height();
            $("#typing").remove(),
            Cht.isScroll ? (Cht.scrollApi.reinitialise(), Cht.scrollApi.scrollTo(0, 999999999999)) : $("#chtScroll, #appsCttCtn, #frdList, #appsCtn").animate({
                height: "-=" + r
            },
            300)
        }
    },
    appendCht: function(e, t) {
        var n = 0;
        t == "receive" && $("#typing").length != 0 && (n = $("#typing").height(), $("#typing").remove());
        if (Cht.isScroll) Cht.appendChtHtml(e, t);
        else {
            $("#chtScroll").show().append(e);
            var r = 0;
            $("#chtScroll").children().length == 2 ? (r = $("#chtScroll").children().last().height(), r += $("#chtScroll").children().first().height() + 20, $("#chtScroll").html("")) : (r = $("#chtScroll").children().last().height(), $("#chtScroll").children().last().remove()),
            r -= n;
            if ($("#chtCtn").height() - Frd.ITEM_H + r > Cht.MAX_CHT_HEIGHT) {
                var i = Cht.MAX_CHT_HEIGHT - ($("#chtCtn").height() - Frd.ITEM_H + r);
                i < 0 && (i = 0),
                $("#appsCttCtn, #frdList").animate({
                    height: "+=" + i
                },
                300),
                $("#appsCtn").animate({
                    height: "+=" + i
                },
                300),
                $("#chtScroll").animate({
                    height: "+=" + i
                },
                300,
                function() {
                    Cht.setScroll(),
                    Cht.appendChtHtml(e, t)
                })
            } else $("#chtScroll, #appsCttCtn, #frdList").animate({
                height: "+=" + r
            },
            300),
            $("#appsCtn").animate({
                height: "+=" + r
            },
            300,
            function() {
                Cht.appendChtHtml(e, t)
            })
        }
    },
    appendChtHtml: function(e, t) {
        Cht.isScroll ? (t == "send" && $("#typing").length != 0 ? Cht.scrollApi.getContentPane().children().last().before(e) : Cht.scrollApi.getContentPane().append(e), Cht.scrollApi.reinitialise(), Cht.scrollApi.scrollTo(0, 999999999999)) : t == "send" && $("#typing").length != 0 ? $("#chtScroll").children().last().before(e) : $("#chtScroll").append(e)
    },
    prependChtHtml: function(e) {
        Cht.isScroll ? (Cht.scrollApi.getContentPane().prepend(e), Cht.scrollApi.reinitialise(), Cht.scrollApi.scrollTo(0, 0)) : $("#chtScroll").prepend(e)
    },
    setScroll: function() {
        Cht.isScroll = !0,
        $("#chtScroll").jScrollPane(),
        $("#chtScroll").mouseenter(function() {
            $(".jspVerticalBar").animate({
                opacity: "1"
            },
            300)
        }).mouseleave(function() {
            $(".jspVerticalBar").animate({
                opacity: "0"
            },
            300)
        }),
        Cht.scrollApi = $("#chtScroll").data("jsp"),
        Cht.scrollApi.scrollTo(0, 999999999999)
    },
    sysHtml: function(e) {
        var t = "",
        n = "../images/defaults/avatar/" + Core.A50 + ".jpg",
        r = "",
        i = "",
        s = "",
        o = "",
        u = "",
        a = "",
        f = "";
        if (e.t == "inhs") i = '<a href="#" class="nick">' + e.frds[0] + '</a> 入驻了Jing.fm <a href="#" class="tmstmp">' + e.ts + "</a>",
        s = e.frds[0],
        e.frdshps[0] && (a = '<a href="#" class="rndBtn cht offChtNickEvent" fuid="' + e.frd_ids[0] + '" nick="' + e.frds[0] + '" avatar="' + e.avatars[0] + '" tps="聊天"></a>'),
        u = '<a class="rndBtn blkFrd sysBlkEvent" uid="' + e.frd_ids[0] + '" href="#" tps="扔掉"></a>',
        r = e.avatars[0];
        else if (e.t == "flwd") {
            e.flw_id == Signup.userDetail.id ? (s = e.flwer, f = e.flwer_id, i = '<a href="#" class="nick">' + e.flwer + '</a> 关注了 <a href="#" class="nick">你</a> <a href="#" class="tmstmp">' + e.ts + "</a>") : (s = e.flw, f = e.flw_id, i = '<a href="#" class="nick">' + e.flwer + '</a> 关注了 <a href="#" class="nick">' + e.flw + '</a> <a href="#" class="tmstmp">' + e.ts + "</a>"),
            r = e.flw_avatar;
            var l = "flwFrd flwFrdEvent",
            c = "关注";
            e.me_flw ? e.frdshp ? (a = '<a href="#" class="rndBtn cht offChtNickEvent" fuid="' + f + '" nick="' + s + '" avatar="' + e.flw_avatar + '" tps="聊天"></a>', u = '<a class="rndBtn blkFrd sysBlkEvent" uid="' + f + '" href="#" tps="扔掉"></a>') : o = '<a href="#" class="rndBtn cnct on" uid="' + f + '" nick="' + s + '" tps="已关注"></a>': o = '<a href="#" class="rndBtn flwFrd flwFrdEvent" uid="' + f + '" nick="' + s + '" tps="关注"></a>'
        } else if (e.t == "rmnd") s = e.frd,
        f = e.frd_id,
        r = e.avatar,
        i = '<a href="#" class="nick">' + s + '</a> 想让你关注Ta<a href="#" class="tmstmp">' + e.ts + "</a>",
        e.frdshp ? (a = '<a href="#" class="rndBtn cht offChtNickEvent" fuid="' + f + '" nick="' + s + '" avatar="' + r + '" tps="聊天"></a>', u = '<a class="rndBtn blkFrd sysBlkEvent" uid="' + f + '" href="#" tps="扔掉"></a>') : o = '<a href="#" class="rndBtn flwFrd flwFrdEvent" uid="' + f + '" nick="' + s + '" tps="关注"></a>';
        else if (e.t == "acty") return t += '<div class="rctCtn sysMsgCtn" style="height:auto; border-top:medium none"><div class="sysMsgHd"><p class="chat">活动信息<a href="#" class="tmstmp">' + e.ts + "</a></p>" + "</div>" + '<div class="sysMsgBd">' + '<p class="chat">' + e.content + "</p>" + "</div>" + "</div>",
        t;
        return t += '<div class="rctCtn sysMsgCtn" style="height:auto; border-top:medium none"><div class="sysMsgHd"><p class="chat">' + i + "</p>" + "</div>" + '<div class="sysMsgBd frdEvent">' + '<div class="avtCtn">' + '<a class="chtMask" href="#"></a>' + '<img src="' + n + '" class="chtAvt" fid="' + r + '" width="50px" height="50px">' + "</div>" + '<a class="desc inhs" href="#">' + s + "</a>" + '<div class="tpsMenuCtn">' + o + a + u + "</div>" + "</div>" + "</div>",
        t
    },
    leftDtl: function(ctt, i) {
        i == undefined && (i = ""),
        ctt = ctt.replace(/#([^"]*)#/g, ' <a href="#" class="chtCmbt chtFlyEvent">#$1#</a> '),
        ctt = ctt.replace(/＃([^"]*)＃/g, ' <a href="#" class="chtCmbt chtFlyEvent">#$1#</a> ');
        var suffix = Retina.suffix;
        for (var k in Emj) {
            var reg = eval("/\\[" + k + "\\]/g");
            ctt = ctt.replace(reg, '<img width="28px" height="28px" src="../../images/emoji/' + Emj[k] + suffix + '.png"/>')
        }
        var html = "",
        sysClass = "";
        return Cht.fuid == 0 && (sysClass = "sysMsg"),
        html += '<div class="rctCtn chtCtn lft ' + sysClass + '" style="z-index:1; float:left;  height:auto">' + '<div class="chtMsg">' + '<p class="chat">' + ctt + "</p>" + '<div class="chtTail"></div>' + "</div>" + "</div>",
        html
    },
    rightDtl: function(ctt) {
        ctt = ctt.replace(/#([^"]*)#/g, ' <a href="#" class="chtCmbt chtFlyEvent"><span>#</span>$1<span>#</span></a> '),
        ctt = ctt.replace(/＃([^"]*)＃/g, ' <a href="#" class="chtCmbt chtFlyEvent"><span>#</span>$1<span>#</span></a> ');
        var suffix = Retina.suffix;
        for (var k in Emj) {
            var reg = eval("/\\[" + k + "\\]/g");
            ctt = ctt.replace(reg, '<img width="28px" height="28px" src="../../images/emoji/' + Emj[k] + suffix + '.png"/>')
        }
        var html = "";
        return html += '<div class="rctCtn chtCtn rght" style="float:left;  height:auto"><div class="chtMsg"><p class="chat">' + ctt + "</p>" + '<div class="chtTail"></div>' + "</div>" + "</div>",
        html
    },
    gnTime: function(e) {
        return '<div class="chtSpltCtn"><div class="chtSplt" href="#"></div><em class="serif spltBtn">' + e + "</em>" + "</div>"
    }
},
Flw = {
    nick: "",
    toid: "",
    music: "",
    isFlw: !1,
    isServer: !1,
    cacheMusic: null,
    cacheSec: 0,
    users: null,
    serverTmo: 0,
    ACTION: 0,
    TID: 1,
    MID: 2,
    FID: 3,
    NAME: 4,
    DUR: 5,
    SEC: 6,
    VOLUME: 7,
    init: function() {
        $(document).on("click", "#flwOK",
        function() {
            $("#gnsCtn").attr("tag", ""),
            clearTimeout(Flw.reqTmo),
            Flw.isServer = !0,
            Flw.isFlw = !0,
            now.followListenResponseAuthorize(!0, $(this).attr("fuid"), Signup.userDetail.id, Flw.gnMusicStr(Player.currentTime))
        }),
        $(document).on("click", "#flwNO",
        function() {
            $("#gnsCtn").attr("tag", ""),
            clearTimeout(Flw.reqTmo),
            now.followListenResponseAuthorize(!1, $(this).attr("fuid"), Signup.userDetail.id, null),
            Gns.isOver = !1,
            Gns.closeGns()
        }),
        $(document).on("click", "#flwOther",
        function() {
            Flw.isFlw = !0,
            Flw.toid = $(this).attr("fid"),
            Flw.nick = $(this).attr("fnick"),
            Flw.listenRequest()
        }),
        $(document).on("click", "#showFlwUsers", Flw.showFlwUser),
        $(document).on("click", "#stopFlw",
        function() {
            Flw.leave(),
            Gns.nowGns("你已经踢开了正在跟听你的人哦，跟听结束。"),
            Flw.empty()
        }),
        $(document).on("click", "#clsFlwLstn",
        function() {
            Flw.leave(),
            Core.fullScrenMenuHide(),
            Flw.empty(),
            Player.music[Player.pos] = Core.objClone(Flw.cacheMusic, Object),
            Flw.cacheMusic = null,
            Player.setVolume(Player.volume),
            Player.play(Flw.cacheSec),
            Gns.openGnsArr = new Array,
            Gns.nowGns("已经退出跟听状态")
        })
    },
    showFlwUser: function() {
        var e = "";
        for (var t in Flw.users) e += Flw.users[t] + "、";
        e = e.substring(0, e.length - 1) + ' 跟听了你。<a href="#" id="stopFlw" class="trg">退出跟听</a>',
        Gns.nowGns(e)
    },
    gnMusicStr: function(e) {
        var t = function(t) {
            return "play," + t.tid + "," + t.mid + "," + t.fid + "," + t.name + "," + t.duration + "," + e + "," + Player.volume
        },
        n = Player.music[Player.pos];
        return n != undefined && n.tid == Player.tid ? t(n) : ($.ajax({
            url: Core.API_VER + "/media/song/meta",
            data: {
                id: Player.tid
            },
            success: function(e) {
                n = new Object,
                n.tid = e.result.tid,
                n.mid = e.result.mid,
                n.fid = e.result.fid,
                n.name = e.result.n,
                n.duration = e.result.d,
                now.sendFollowListenMessage(Signup.userDetail.id, t(n))
            }
        }), null)
    },
    listenRequest: function() {
        now.followListenRequest(Signup.userDetail.id, Flw.toid)
    },
    send: function(e, t) {
        var n = "";
        e == "play" ? n = Flw.gnMusicStr(t) : n = e,
        n != null && now.sendFollowListenMessage(Signup.userDetail.id, n)
    },
    leave: function() {
        now.notifyFollowListenLeave(Signup.userDetail.id)
    },
    play: function(e) {
        Player.closeGns();
        var t = e.split(",");
        Player.music[Player.pos].tid = t[Flw.TID],
        Player.music[Player.pos].fid = t[Flw.FID],
        Player.music[Player.pos].mid = t[Flw.MID],
        Player.music[Player.pos].name = t[Flw.NAME],
        Player.music[Player.pos].duration = parseInt(t[Flw.DUR]),
        Player.setVolume(t[Flw.VOLUME]),
        Player.play(parseInt(t[Flw.SEC])),
        Player.startRotate()
    },
    empty: function() {
        Flw.isServer = !1,
        Flw.isFlw = !1,
        Flw.toid = "",
        Flw.nick = "",
        Flw.users = null,
        clearTimeout(Flw.serverTmo)
    }
},
Frd = {
    OLFRD: "olFrd",
    FRDS: "frds",
    EXT: "ext",
    h: 0,
    cacheIconH: 0,
    ITEM_H: 66,
    STTS_H: 46,
    TITLE_H: 81,
    WIDTH: 330,
    current: "olFrd",
    mid: "",
    st: 0,
    ps: 0,
    tab: "",
    olFrdObj: "",
    init: function() {
        $("#frdCtNav .tabBtn").click(function() {
            $("#" + Frd.current).animate("width", ""),
            Frd.jump($(this).attr("id"), !1)
        }),
        $(document).on("mouseenter", ".tpsMenuCtn>.rndBtn",
        function() {
            if (Signup.userDetail.sts.tipNtf != "true") return;
            var e = $(this).attr("tps");
            e == undefined && ($(this).isClass("ext off") ? e = "展开": e = "收起"),
            $("#tps>.tpsCtn>p").text(e).show();
            var t = $(this).offset().left - $("#tps").width() / 2 + 15,
            n = $(this).offset().top - 55;
            $("#tps").css({
                left: t,
                top: n + "px"
            }).show()
        }),
        $(document).on("mouseleave", ".tpsMenuCtn>.rndBtn",
        function() {
            $("#tps").hide()
        }),
        $(document).on("click", ".tpsMenuCtn>a",
        function() {
            $("#tps").hide()
        }),
        $(document).on("click", ".iconEvent>.frdIcon, .iconEvent>.tpsMenuCtn>.ext, .iconEvent>.desc",
        function() {
            var e = $(this).attr("mid");
            if (resUrl[e] == undefined) return;
            $(this).parents(".iconEvent").find(".newApp").hide(),
            $ext = $(this).parents(".iconEvent").children(".tpsMenuCtn").children(".ext");
            if (Frd.mid == e) {
                Frd.closeData(e),
                Frd.mid = "",
                $ext.removeClass("on").addClass("off");
                return
            }
            Frd.mid = e,
            $ext.removeClass("off").addClass("on"),
            Frd.st = 0,
            Frd.ps = Frd.getMaxCount(!0) - 1;
            if ($ext.isClass("loading")) return;
            $ext.addClass("loading"),
            $.ajax({
                url: resUrl[Frd.mid].replace("{id}", Signup.userDetail.id),
                data: {
                    st: "0",
                    ps: Frd.ps
                },
                success: function(e) {
                    $ext.removeClass("loading");
                    if (!e.success) return;
                    var t = e.result.items;
                    if (Frd.olFrdObj != "") {
                        var n = !0;
                        for (var r = 0; r < t.length; ++r) if (t[r].uid == Frd.olFrdObj.uid) {
                            n = !1;
                            break
                        }
                        n && (t = (new Array(Frd.olFrdObj)).concat(t), t = t.slice(0, t.length - 1), Frd.st -= 1)
                    }
                    Frd.cacheIconH = Frd.h,
                    Frd.h = Frd.getHeight(!0, t.length + 1);
                    var i = Frd.frdHtml(t);
                    if (t.length == 0) Frd.h += 198,
                    Frd.h -= Frd.STTS_H,
                    Frd.mid == "rbsFrd" ? i = Overlay.noCttHtml("你还没有删除的好友") : Frd.mid == "mtFrds" ? i = Overlay.noCttHtml("你还没有可能认识的人") : i = Overlay.noCttHtml();
                    else {
                        var s;
                        e.result.total > Frd.ps ? s = !0 : s = !1,
                        i += Frd.sttsHtml('共 <span class="serif">' + e.result.total + "</span> 位" + FrdDes[Frd.mid], s)
                    }
                    Frd.openData(Frd.mid, i)
                }
            })
        }),
        $(document).on("click", ".frdCtMoreEvent",
        function() {
            var e = $(this).parents(".rctCtn").prev();
            e.isClass("frdEvent") ? Frd.frdMore() : e.isClass("iconEvent") ? Frd.iconMore() : Cht.more()
        }),
        $(document).on("click", ".flwLstnEvent",
        function() {
            if (Flw.isFlw) {
                Flw.toid == "" ? Gns.nowGns('你正在被人跟听中，暂时不能跟听被人。<a href="#" id="showFlwUsers" class="trg">查看跟听我的人</a>') : Gns.nowGns("你正在跟听中，暂时不能做其他操作哦。");
                return
            }
            $("#playerSml").isClass("selected") ? $("#playerSml").click() : $("#playerPsnRd").isClass("selected") ? $("#playerPsnRd").click() : $("#flyAblum").length == 1 && $("#flyAblum").click(),
            Flw.isFlw = !0,
            Flw.toid = $(this).attr("uid"),
            Flw.nick = $(this).attr("nick"),
            Flw.listenRequest()
        }),
        $(document).on("click", ".blkEvent, .hdEvent",
        function() {
            if ($("#chtCtn").length == 1) {
                $(this).prev().click();
                var e = $(this);
                setTimeout(function() {
                    e.click()
                },
                400)
            } else Frd.deleteItem($(this)),
            $.ajax({
                url: Core.API_VER + "/account/block_frd",
                data: {
                    uid: Signup.userDetail.id,
                    frdid: $(this).attr("uid")
                }
            })
        }),
        $(document).on("click", ".sysBlkEvent",
        function() {
            $(this).attr("tps") == "扔掉" ? ($(this).attr("tps", "恢复"), $(this).prev().hide(), $.ajax({
                url: Core.API_VER + "/account/block_frd",
                data: {
                    uid: Signup.userDetail.id,
                    frdid: $(this).attr("uid")
                }
            })) : ($(this).attr("tps", "扔掉"), $(this).prev().show(), $.ajax({
                url: Core.API_VER + "/account/block_frd",
                data: {
                    uid: Signup.userDetail.id,
                    frdid: $(this).attr("uid")
                }
            }))
        }),
        $(document).on("click", ".chtEvent", Cht.dtlEventClick),
        $(document).on("click", ".cnctEvent",
        function() {
            var e = $(this).attr("mid");
            if ($(this).isClass("on")) {
                if (!confirm("确定解除绑定吗？")) return;
                $(this).removeClass("on").addClass("off"),
                $.ajax({
                    url: Core.API_VER + "/oauth/remove_bind",
                    data: {
                        uid: Signup.userDetail.id,
                        identify: resSns[e]
                    },
                    success: function(e) {
                        if (!e.success) {
                            Gns.nowGns(e.msg);
                            return
                        }
                    }
                })
            } else resEmail[e] != undefined ? window.open(Core.API_VER + "/oauth/mailauthorize?uid=" + Signup.userDetail.id + "&type=" + e, "_blank", "directories=0, location=0, menubar=0, resizable=0, status=0, toolbar=0") : Overlay.openSns(e);
            return ! 1
        }),
        $(document).on("click", ".invtEvent",
        function() {
            Gns.nowGns("正在发送邀请..."),
            $.ajax({
                url: Core.API_VER + "/oauth/invite_friend",
                data: {
                    uid: Signup.userDetail.id,
                    suid: $(this).attr("uid"),
                    nick: $(this).attr("nick"),
                    identify: ConverSns[Frd.mid + "1"]
                },
                success: function(e) {
                    if (!e.success) {
                        Gns.nowGns(e.codemsg);
                        return
                    }
                    setTimeout(function() {
                        Gns.nowGns("已经邀请成功")
                    },
                    2e3)
                }
            })
        }),
        $(document).on("click", ".hdFrdEvent",
        function() {
            var e = $(this);
            $.ajax({
                url: Core.API_VER + "/oauth/hide_friends",
                data: {
                    uid: Signup.userDetail.id,
                    suid: $(this).attr("uid"),
                    identify: ConverSns[Frd.mid + "1"]
                },
                success: function(t) {
                    if (!t.success) {
                        Gns.nowGns(t.codemsg);
                        return
                    }
                    Frd.deleteItem(e)
                }
            })
        }),
        $(document).on("click", ".flwFrdEvent",
        function() {
            var e = $(this);
            $.ajax({
                url: Core.API_VER + "/account/follow_frd",
                data: {
                    uid: Signup.userDetail.id,
                    frdid: $(this).attr("uid")
                },
                success: function(t) {
                    if (!t.success) {
                        Gns.nowGns(t.codemsg);
                        return
                    }
                    e.removeClass("flwFrd").addClass("cnct on"),
                    e.next(".notKnwnEvent").animate({
                        width: "0px"
                    },
                    300),
                    Gns.nowGns("你已成功关注了 " + e.attr("nick"))
                }
            })
        }),
        $(document).on("click", ".notKnwnEvent",
        function() {
            var e = $(this);
            $.ajax({
                url: Core.API_VER + "/account/post_notknown_friends",
                data: {
                    uid: Signup.userDetail.id,
                    fid: $(this).attr("uid")
                },
                success: function(t) {
                    if (!t.success) {
                        Gns.nowGns(t.codemsg);
                        return
                    }
                    Frd.deleteItem(e)
                }
            })
        }),
        $(document).on("keydown", "#mtfrdsNick",
        function(e) {
            if (e.keyCode == 13) return $("#schNick").click(),
            !1
        }),
        $(document).on("click", "#schNick",
        function() {
            var e = $("#mtfrdsNick").val();
            Frd.mid = "search";
            if (e == "") return;
            $.ajax({
                url: Core.API_VER + "/search/fetch_nick",
                data: {
                    u: Signup.userDetail.id,
                    q: e
                },
                success: function(e) {
                    var t = e.result.items;
                    if (t.length == 0) {
                        Gns.nowGns("暂时没有找到哦，是不是打错昵称了？再试试");
                        return
                    }
                    $(".iconEvent, .stts, .frdEvent").remove(),
                    $("#appsCttCtn").css("height", "auto").append(Frd.frdHtml(t)),
                    Frd.replaceAvatar(),
                    $("#appsCttCtn").children(".rctCtn:odd").addClass("odd"),
                    $("#appsCttCtn").children(".rctCtn:even").addClass("even"),
                    $("#appsCtn").animate({
                        height: (t.length + 1) * Frd.ITEM_H + Frd.TITLE_H - 10 + "px"
                    },
                    300)
                }
            })
        }),
        $(document).on("click", ".rmndEvent",
        function() {
            $.ajax({
                url: Core.API_VER + "/account/remind_frd",
                data: {
                    uid: Signup.userDetail.id,
                    frdid: $(this).attr("uid")
                }
            }),
            Gns.nowGns("提醒已发送")
        }),
        $(document).on("click", ".updtEvent", Apps.refreshFriends)
    },
    deleteItem: function(e) {
        e.parents(".rctCtn").animate({
            height: "0px"
        },
        300,
        function() {
            $(this).remove()
        }),
        $("#appsCtn").animate({
            height: "-=" + Frd.ITEM_H
        },
        300),
        $("#appsCttCtn").animate({
            height: "-=" + Frd.ITEM_H
        },
        300)
    },
    jump: function(TAB) {
        TAB == "" && (TAB = Frd.OLFRD),
        Frd.tab = "",
        Frd.mid = "",
        Cht.fuid = "",
        Cht.fid = "",
        $("#appsCttCtn").hide().css("overflow", "hidden"),
        Frd.current != "" && $("#" + Frd.current).removeClass("crt"),
        $("#" + TAB).addClass("crt"),
        Frd.current = TAB;
        if (TAB == Frd.FRDS) $("#frds").find(".newApp").hide();
        else {
            var mNew = Signup.userDetail.newview.m,
            bNew = Signup.userDetail.newview.b;
            if (bNew.length > 0) $("#frds").find(".newApp").show();
            else for (var i = 0; i < mNew.length; ++i) for (var j = 0; j < SnsArr.length; ++j) if (mNew[i].indexOf("-" + SnsArr[j]) >= 0) {
                $("#frds").find(".newApp").show();
                break
            }
        }
        eval("Frd." + TAB + "Click")()
    },
    olFrdClick: function() {
        Frd.st = -1,
        Frd.ps = Frd.getMaxCount(!0);
        var e = Frd.init;
        Frd.init = !1,
        $.ajax({
            url: resUrl[Frd.OLFRD].replace("{id}", Signup.userDetail.id),
            data: {
                st: "0",
                ps: Frd.ps - 1
            },
            success: function(t) {
                if (!t.success) return;
                var n = t.result.items;
                if (n.length == 0 && e && Frd.olFrdObj == "") {
                    Frd.jump(Frd.FRDS),
                    $(".iconEvent:eq(0)").children("a:eq(0)").click();
                    return
                }
                var r = "sys";
                Retina.enabled && (r += Retina.suffix);
                var i = {
                    avatar: "../images/defaults/avatar/" + r + ".png",
                    frdshp: !0,
                    from: "",
                    id: "",
                    nick: "通知中心",
                    uid: "0"
                };
                n = (new Array(i)).concat(n),
                Frd.h = Frd.getHeight(!0, n.length);
                var s = Frd.frdHtml(n),
                o;
                t.result.total >= Frd.ps ? o = !0 : o = !1,
                s += Frd.sttsHtml('共 <span class="serif">' + t.result.total + "</span> 位" + FrdDes[Frd.OLFRD], o),
                Frd.flyData(s)
            }
        })
    },
    frdsClick: function() {
        var e = resData.frdCt.result.items,
        t = "",
        n = 0;
        for (var r = 0; r < e.length; ++r) {
            if (e[r].display == "false") continue; ++n,
            t += Frd.iconHtml(e[r])
        }
        Frd.h = Frd.getHeight(!1, n),
        Frd.flyData(t)
    },
    extClick: function() {
        var e = resData.ext.result.items;
        Frd.st = 0;
        var t = '<div class="rctCtn fm"><div class="fld link"><input id="mtfrdsNick" name="link" class="input" value="输入好友的昵称" onblur="if(this.value == \'\')this.value=\'输入好友的昵称\'" onfocus="if(this.value == \'输入好友的昵称\')this.value = \'\'"><a id="schNick" href="#" class="btn"><span class="btnLt"></span>搜索好友<span class="btnRt"></span></a></div></div>',
        n = Frd.getMaxCount(!1);
        n < e.length + 1 ? (n = Frd.getMaxCount(!0), Frd.h = Frd.getHeight(!0, n)) : (n = e.length + 1, Frd.h = Frd.getHeight(!1, n));
        for (var r = 0; r < n - 1; ++r) t += Frd.iconHtml(e[r]);
        n < e.length + 1 && (t += Frd.sttsHtml("更多获取好友的方式", !0)),
        Frd.flyData(t)
    },
    isMenuShow: function(e) {
        for (var t = 0; t < resData.frdCt.result.items.length; ++t) if (resData.frdCt.result.items[t].mid == e) return resData.frdCt.result.items[t].display == "true" ? !0 : !1;
        return ! 1
    },
    iconHtml: function(e) {
        var t = "",
        n = "",
        r = "";
        res[e.mid][URL] == "openWindow" ? ConverSns[e.mid] != undefined ? Frd.isMenuShow(ConverSns[e.mid]) ? r = '<a mid="' + e.mid + '" href="#" class="rndBtn cnct cnctEvent on" tps="已绑定"></a>': r = '<a mid="' + e.mid + '" href="#" class="rndBtn cnct cnctEvent off" tps="绑定"></a>': r = '<a mid="' + e.mid + '" href="#" class="rndBtn cnct cnctEvent off" tps="连接"></a>': (ConverSns[e.mid] != undefined && (t = '<a mid="' + e.mid + '" href="#" class="rndBtn updt updtEvent" tps="更新"></a>'), n = '<a mid="' + e.mid + '" href="#" class="rndBtn ext off"></a>');
        var i = Signup.userDetail.newview.m,
        s = !0,
        o = "";
        for (var u = 0; u < i.length; ++u) if (i[u].indexOf("-" + e.mid) >= 0) {
            s = !1,
            Core.ulNewIcon("m", e.mid);
            break
        }
        var a = Signup.userDetail.newview.b;
        a.length > 0 && e.mid == "inHs" && (s = !1),
        s && (o = "hide");
        var f = '<em class="newApp overlay ' + o + '" style="left:auto; right: 17px; top: 5px;"></em>',
        l = '<div mid="' + e.mid + '" class="rctCtn iconEvent">' + '<a mid="' + e.mid + '" class="frdIcon ' + e.mid + '" href="#"></a>' + '<a mid="' + e.mid + '" class="desc" href="#">' + e.name + "</a>" + '<div class="tpsMenuCtn">' + t + n + r + "</div>" + f + "</div>";
        return l
    },
    frdHtml: function(e) {
        var t = "",
        n = "";
        for (var r = 0; r < e.length; ++r) {
            var i = "",
            s = "",
            o = "",
            u = "",
            a = "",
            f = "",
            l = "",
            c = "",
            h = "",
            p = "",
            d = "",
            v = r,
            m = e[r].uid,
            g = e[r].nick,
            y = e[r].frdshp,
            b = "";
            e[r].avatar == null && (e[r].avatar = ""),
            e[r].ol != undefined && Frd.mid != "mtFrds" && (++v, e[r].ol ? i = '<a href="#" class="rndBtn ol" tps="在线"></a>': i = '<a href="#" class="rndBtn ofl" tps="离线"></a>');
            if (Frd.current == Frd.OLFRD) {
                var w = "",
                E = ""; ! y || m == 0 ? (w = 'style="display:none"', m == 0 && (E = 'style="display:none"')) : E = 'style="display:none"',
                p = '<a href="#" class="rndBtn pkr rmndEvent" uid="' + m + '" nick="' + g + '" tps="提醒Ta" ' + E + "></a>",
                s = '<a href="#" class="rndBtn chtflwLstn flwLstnEvent" ' + w + ' uid="' + m + '" nick="' + g + '" tps="跟听"></a>'
            }
            Frd.mid == "rbsFrd" && (a = '<a class="rndBtn blkFrd hdEvent" uid="' + m + '" href="#" tps="恢复"></a>'),
            ConverSns[Frd.mid] != undefined && (e[r].inhs ? c = '<a href="#" class="rndBtn invt" tps="已邀请"></a>': c = '<a href="#" class="rndBtn invt invtEvent" uid="' + m + '" nick="' + g + '" tps="邀请"></a>', h = '<a href="#" class="rndBtn hdFrd hdFrdEvent" uid="' + m + '" nick="' + g + '" tps="隐藏"></a>');
            if (Frd.mid == "mtFrds" || Frd.mid == "search") {
                b = "flwFrd flwFrdEvent";
                var S = "关注";
                Frd.mid == "search" && e[r].flwd && (b = "cnct on", S = "已关注"),
                f = '<a href="#" class="rndBtn ' + b + '" uid="' + m + '" nick="' + g + '" tps="' + S + '"></a>',
                Frd.mid == "mtFrds" && (l = '<a href="#" class="rndBtn notKnwn notKnwnEvent" uid="' + m + '" tps="不认识"></a>'),
                Frd.mid == "search" && e[r].flwd && (e[r].frdshp ? (o = '<a href="#" class="rndBtn cht chtEvent" uid="' + m + '" nick="' + g + '" no="' + v + '" tps="聊天" frdshp="' + y + '"></a>', e[r].ol && (s = '<a href="#" class="rndBtn chtflwLstn flwLstnEvent" uid="' + m + '" nick="' + g + '" tps="跟听"></a>'), b = "chtEvent", f = "") : e[r].ol && (p = '<a href="#" class="rndBtn pkr rmndEvent" uid="' + m + '" nick="' + g + '" tps="提醒Ta"></a>'))
            }
            Frd.mid == "inHs" && (u = '<a class="rndBtn blkFrd blkEvent" uid="' + m + '" href="#" tps="扔掉"></a>');
            if (Frd.mid == "inHs" || Frd.current == Frd.OLFRD) {
                var x = "",
                S = "聊天",
                w = "",
                T = "cht";
                m == 0 && (x = "sys", S = "查看", T = "ntfc"),
                y || (w = 'style="display:none"'),
                o = '<a href="#" class="rndBtn ' + T + ' chtEvent" ' + w + ' uid="' + m + '" nick="' + g + '" no="' + v + '" tps="' + S + '" frdshp="' + y + '"></a>',
                Cht.offlineMes[m] != undefined && (o += '<em class="num serif cht ' + x + '">' + Cht.offlineMes[m].count + "</em>"),
                b = "chtEvent"
            }
            var N = "../images/defaults/avatar/" + Core.A50 + ".jpg";
            e[r].avatar.indexOf("../") >= 0 && (N = e[r].avatar, e[r].avatar = ""),
            Frd.mid == "inHs" && Core.isNewBdg(m, !0) && (d = '<em class="newApp overlay" style="left:50; top: 5px;"></em>'),
            b != "chtEvent" && (b = "");
            var C = "";
            e[r].uid == "0" ? C = '<a class="' + b + '" href="#" uid="' + m + '" nick="' + g + '" no="' + v + '" frdshp="' + y + '"><img src="' + N + '" class="chtAvt" fid="sys">': C = '<a class="chtMask ' + b + '" href="#" uid="' + m + '" nick="' + g + '" no="' + v + '" frdshp="' + y + '"></a><img src="' + N + '" class="chtAvt" fid="' + e[r].avatar + '">',
            t += '<div class="rctCtn frdEvent"><div class="avtCtn">' + C + "</div>" + '<a class="desc ' + b + '" href="#" uid="' + m + '" nick="' + g + '" no="' + v + '" frdshp="' + y + '">' + g + "</a>" + '<div class="tpsMenuCtn ' + Frd.mid + '">' + p + o + s + a + u + f + l + c + h + i + "</div>" + d + "</div>"
        }
        return t
    },
    sttsHtml: function(e, t) {
        var n = "";
        Frd.mid != "mtFrds" && t && (n = '<a href="#" class="more frdCtMoreEvent"></a>');
        var r = '<div class="rctCtn stts"><p class="desc islt" >' + e + "</p>" + '<div class="rBox">' + n + "</div>" + "</div>";
        return r
    },
    flyData: function(e) {
        Frd.olFrdObj == "" ? ($("#appsCttCtn").hide().addClass("lstCtn").html(e), $("#appsCtn").animate({
            width: Frd.WIDTH + "px",
            height: Frd.h + Frd.TITLE_H - 10 + "px"
        },
        300,
        function() {
            $("#appsCtn").css({
                overflow: "hidden"
            }).removeClass("appCt").addClass("frdCt"),
            $("#frdCtNav").show(),
            $("#appsCttCtn").children(".rctCtn:odd").addClass("odd"),
            $("#appsCttCtn").children(".rctCtn:even").addClass("even"),
            $("#appsCttCtn").css({
                width: Frd.WIDTH - 2 + "px",
                top: Frd.TITLE_H + "px",
                left: Frd.WIDTH + 22 + "px",
                height: "auto",
                "border-bottom-width": "1px"
            }),
            $("#appsCttCtn").show().animate({
                left: "10px"
            },
            300,
            function() {
                $("#appsCtn").css({
                    overflow: "visible",
                    "background-image": "none"
                }),
                Overlay.isSwitch = !0
            }),
            Frd.replaceAvatar()
        })) : $("#appsCtn").animate({
            width: Frd.WIDTH + "px"
        },
        300,
        function() {
            $("#appsCttCtn").hide().addClass("lstCtn").html(e),
            $("#appsCtn").attr({
                widthArg: Frd.WIDTH,
                heightArg: Frd.h + Frd.TITLE_H - 10
            }),
            $("#appsCtn").css({
                overflow: "hidden"
            }).removeClass("appCt").addClass("frdCt"),
            $("#frdCtNav").show(),
            $("#appsCttCtn").children(".rctCtn:odd").addClass("odd"),
            $("#appsCttCtn").children(".rctCtn:even").addClass("even"),
            $("#appsCttCtn").css({
                width: Frd.WIDTH - 2 + "px",
                top: Frd.TITLE_H + "px",
                left: Frd.WIDTH + 22 + "px",
                height: "auto",
                "border-bottom-width": "1px"
            }),
            $("#appsCttCtn").show(),
            Frd.olFrdObj.uid == 0 ? $(".frdEvent:eq(0)").children("a:eq(0)").click() : $(".iconEvent:eq(0)").children("a:eq(0)").click()
        })
    },
    openData: function(e, t) {
        var n = 0,
        r = null;
        $("#appsCttCtn").children(".rctCtn").each(function(t) {
            $(this).attr("mid") == e && (r = $(this), n = t)
        }),
        r.after('<div id="frdList" style="height:0px"></div>');
        if (Frd.olFrdObj == "") $("#appsCttCtn").children(".rctCtn:eq(0)").animate({
            "margin-top": "-" + n * Frd.ITEM_H
        },
        300),
        $("#appsCtn").animate({
            height: Frd.h + Frd.TITLE_H - 10 + "px"
        },
        300),
        $("#appsCttCtn").animate({
            height: Frd.h + "px"
        },
        300),
        $("#frdList").addClass(e).animate({
            height: Frd.h - Frd.ITEM_H + "px"
        },
        300,
        function() {
            $(this).html(t);
            var e = "even",
            n = "odd";
            r.isClass("even") && (e = "odd", n = "even"),
            $(this).children(".rctCtn:even").addClass(e),
            $(this).children(".rctCtn:odd").addClass(n),
            Frd.replaceAvatar()
        });
        else {
            $("#appsCttCtn").children(".rctCtn:eq(0)").css({
                "margin-top": "-" + n * Frd.ITEM_H
            }),
            $("#appsCtn").attr({
                heightArg: Frd.h + Frd.TITLE_H - 10
            }),
            $("#appsCttCtn").css({
                height: Frd.h + "px"
            }),
            $("#frdList").addClass(e).css({
                height: Frd.h - Frd.ITEM_H + "px"
            }),
            $("#frdList").html(t);
            var i = "even",
            s = "odd";
            r.isClass("even") && (i = "odd", s = "even"),
            $("#frdList").children(".rctCtn:even").addClass(i),
            $("#frdList").children(".rctCtn:odd").addClass(s),
            Frd.replaceAvatar(),
            $(".chtEvent").each(function() {
                if ($(this).attr("uid") == Frd.olFrdObj.uid + "") return $(this).click(),
                !1
            })
        }
    },
    closeData: function(e) {
        Frd.mid = "";
        var t = null;
        $("#appsCttCtn").children(".rctCtn").each(function(n) {
            $(this).attr("mid") == e && (t = $(this))
        }),
        Frd.h = Frd.cacheIconH,
        $("#appsCttCtn").children(".rctCtn::eq(0)").animate({
            "margin-top": "0px"
        },
        300),
        $("#appsCtn").animate({
            height: Frd.h + Frd.TITLE_H - 10 + "px"
        },
        300),
        $("#appsCttCtn").css("height", "auto"),
        t.next().animate({
            height: "0px"
        },
        300,
        function() {
            $(this).remove()
        })
    },
    frdMore: function() {
        var e = Frd.mid;
        e == "" && (e = "olFrd"),
        Frd.st += Frd.ps,
        $.ajax({
            url: resUrl[e].replace("{id}", Signup.userDetail.id),
            data: {
                st: Frd.st,
                ps: Frd.ps
            },
            success: function(t) {
                if (!t.success) return;
                var n = t.result.items,
                r = t.result.total;
                if (n.length == 0) return;
                var i = 0;
                $("#appsCttCtn").find(".frdEvent").each(function(t) {
                    if (n.length > t) {
                        if (e != "olFrd") {
                            var r = $(this).children(".tpsMenuCtn").children().last();
                            r.removeClass("ol ofl"),
                            n[t].ol ? r.addClass("ol").attr("tps", "在线") : r.addClass("ofl").attr("tps", "离线")
                        }
                        $(this).find("a").attr({
                            uid: n[t].uid,
                            nick: n[t].nick
                        }),
                        $(this).find(".ntfc").removeClass("ntfc").addClass("cht");
                        var s = $(this).children(".tpsMenuCtn");
                        s.children("em").remove(),
                        Cht.offlineMes[n[t].uid] != undefined && s.append('<em class="num serif cht">' + Cht.offlineMes[uid].count + "</em>"),
                        $(this).children(".newApp").remove(),
                        Frd.mid == "inHs" && Core.isNewBdg(n[t].uid, !0) && $(this).append('<em class="newApp overlay" style="left:50; top: 5px;"></em>'),
                        n[t].frdshp ? ($(this).find("a").attr("frdshp", "true"), s.children(".chtEvent").show(), s.children(".flwLstnEvent").show(), s.children(".rmndEvent").hide()) : ($(this).find("a").attr("frdshp", "false"), s.children(".chtEvent").hide(), s.children(".flwLstnEvent").hide(), s.children(".rmndEvent").show()),
                        $(this).find("img").parent("a").length == 1 ? $(this).children(".avtCtn").html('<a class="chtMask chtEvent" href="#" uid="' + n[t].uid + '" nick="' + n[t].nick + '" no="0" frdshp="' + n[t].frdshp + '"></a><img src="../images/defaults/avatar/' + Core.A50 + '.jpg" class="chtAvt" fid="' + n[t].avatar + '">') : $(this).find("img").attr({
                            fid: n[t].avatar,
                            src: "../images/defaults/avatar/" + Core.A50 + ".jpg"
                        }),
                        $(this).children(".desc").text(n[t].nick)
                    } else $(this).remove(),
                    ++i
                });
                if (i > 0 || r == Frd.st + Frd.ps) $("#appsCtn").animate({
                    height: "-=" + i * Frd.ITEM_H
                },
                300),
                Frd.mid != "" && $("#frdList, #appsCttCtn").css("height", "-=" + i * Frd.ITEM_H),
                $(".stts").each(function() {
                    $(this).prev().isClass("frdEvent") && $(this).children(".rBox").remove()
                });
                Frd.replaceAvatar()
            }
        })
    },
    iconMore: function() {
        var e = resData.ext.result.items;
        Frd.st += $(".iconEvent").length;
        var t = 0;
        $(".iconEvent").each(function(n) {
            var r, i = n + Frd.st;
            i >= e.length ? ($(this).remove(), ++t) : (ConverSns[e[i].mid] != undefined ? Frd.isMenuShow(ConverSns[e[i].mid]) ? r = '<a mid="' + e[i].mid + '" href="#" class="rndBtn cnct cnctEvent on" tps="已绑定"></a>': r = '<a mid="' + e[i].mid + '" href="#" class="rndBtn cnct cnctEvent off" tps="绑定"></a>': r = '<a mid="' + e[i].mid + '" href="#" class="rndBtn cnct cnctEvent off" tps="连接"></a>', $(this).attr("mid", e[i].mid), $(this).children("a").attr("mid", e[i].mid), $(this).children(".tpsMenuCtn").html(r), $(this).children(".frdIcon").attr("class", "frdIcon " + e[i].mid), $(this).children(".desc").text(e[i].name))
        }),
        t > 0 && ($("#appsCtn").animate({
            height: "-=" + (t * Frd.ITEM_H + Frd.STTS_H)
        },
        300), $("#appsCttCtn>.stts").remove())
    },
    replaceAvatar: function() {
        $(".frdEvent").find("img").each(function() {
            var e = $(this).attr("fid");
            if (e == "sys") {
                $(this).attr({
                    width: "50px",
                    height: "50px"
                }).css({
                    width: "50px",
                    height: "50px"
                });
                return
            }
            e == "" ? $(this).attr({
                width: "50px",
                height: "50px"
            }).css({
                width: "50px",
                height: "50px"
            }) : ($(this).css("background-color", "#e1e1e1"), Core.imgLoad($(this), Frd.st, e, 50, "frd")),
            $(this).attr("fid", "")
        })
    },
    getHeight: function(e, t) {
        var n = t * Frd.ITEM_H;
        return e && (n += Frd.STTS_H),
        n
    },
    getMaxCount: function(e) {
        var t = Core.bodyHeight - 170;
        e && (t -= Frd.STTS_H);
        var n = parseInt(t / Frd.ITEM_H);
        return n
    }
};

