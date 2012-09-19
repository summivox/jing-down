/*!
 * jQuery JavaScript Library v1.7.2
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Wed Mar 21 12:46:34 2012 -0700
 */
function css_browser_selector(e) {
    var t = e.toLowerCase(),
    n = function(e) {
        return t.indexOf(e) > -1
    },
    r = "gecko",
    i = "webkit",
    s = "safari",
    o = "opera",
    u = "mobile",
    a = document.documentElement,
    f = [!/opera|webtv/i.test(t) && /msie\s(\d)/.test(t) ? "ie ie" + RegExp.$1: n("firefox/2") ? r + " ff2": n("firefox/3.5") ? r + " ff3 ff3_5": n("firefox/3.6") ? r + " ff3 ff3_6": n("firefox/3") ? r + " ff3": n("gecko/") ? r: n("opera") ? o + (/version\/(\d+)/.test(t) ? " " + o + RegExp.$1: /opera(\s|\/)(\d+)/.test(t) ? " " + o + RegExp.$2: "") : n("konqueror") ? "konqueror": n("blackberry") ? u + " blackberry": n("android") ? u + " android": n("chrome") ? i + " chrome": n("iron") ? i + " iron": n("applewebkit/") ? i + " " + s + (/version\/(\d+)/.test(t) ? " " + s + RegExp.$1: "") : n("mozilla/") ? r: "", n("j2me") ? u + " j2me": n("iphone") ? u + " iphone": n("ipod") ? u + " ipod": n("ipad") ? u + " ipad": n("mac") ? "mac": n("darwin") ? "mac": n("webtv") ? "webtv": n("win") ? "win" + (n("windows nt 6.0") ? " vista": "") : n("freebsd") ? "freebsd": n("x11") || n("linux") ? "linux": "", "js"];
    return Selector_browser = f[0],
    c = f.join(" "),
    a.className += " " + c,
    c
} (function(e, t) {
    function u(e) {
        var t = o[e] = {},
        n,
        r;
        e = e.split(/\s+/);
        for (n = 0, r = e.length; n < r; n++) t[e[n]] = !0;
        return t
    }
    function c(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(l, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null: s.isNumeric(r) ? +r: f.test(r) ? s.parseJSON(r) : r
                } catch(o) {}
                s.data(e, n, r)
            } else r = t
        }
        return r
    }
    function h(e) {
        for (var t in e) {
            if (t === "data" && s.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return ! 1
        }
        return ! 0
    }
    function p(e, t, n) {
        var r = t + "defer",
        i = t + "queue",
        o = t + "mark",
        u = s._data(e, r);
        u && (n === "queue" || !s._data(e, i)) && (n === "mark" || !s._data(e, o)) && setTimeout(function() { ! s._data(e, i) && !s._data(e, o) && (s.removeData(e, r, !0), u.fire())
        },
        0)
    }
    function H() {
        return ! 1
    }
    function B() {
        return ! 0
    }
    function W(e) {
        return ! e || !e.parentNode || e.parentNode.nodeType === 11
    }
    function X(e, t, n) {
        t = t || 0;
        if (s.isFunction(t)) return s.grep(e,
        function(e, r) {
            var i = !!t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return s.grep(e,
        function(e, r) {
            return e === t === n
        });
        if (typeof t == "string") {
            var r = s.grep(e,
            function(e) {
                return e.nodeType === 1
            });
            if (q.test(t)) return s.filter(t, r, !n);
            t = s.filter(t, r)
        }
        return s.grep(e,
        function(e, r) {
            return s.inArray(e, t) >= 0 === n
        })
    }
    function V(e) {
        var t = $.split("|"),
        n = e.createDocumentFragment();
        if (n.createElement) while (t.length) n.createElement(t.pop());
        return n
    }
    function at(e, t) {
        return s.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function ft(e, t) {
        if (t.nodeType !== 1 || !s.hasData(e)) return;
        var n, r, i, o = s._data(e),
        u = s._data(t, o),
        a = o.events;
        if (a) {
            delete u.handle,
            u.events = {};
            for (n in a) for (r = 0, i = a[n].length; r < i; r++) s.event.add(t, n, a[n][r])
        }
        u.data && (u.data = s.extend({},
        u.data))
    }
    function lt(e, t) {
        var n;
        if (t.nodeType !== 1) return;
        t.clearAttributes && t.clearAttributes(),
        t.mergeAttributes && t.mergeAttributes(e),
        n = t.nodeName.toLowerCase(),
        n === "object" ? t.outerHTML = e.outerHTML: n !== "input" || e.type !== "checkbox" && e.type !== "radio" ? n === "option" ? t.selected = e.defaultSelected: n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue: n === "script" && t.text !== e.text && (t.text = e.text) : (e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value)),
        t.removeAttribute(s.expando),
        t.removeAttribute("_submit_attached"),
        t.removeAttribute("_change_attached")
    }
    function ct(e) {
        return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []
    }
    function ht(e) {
        if (e.type === "checkbox" || e.type === "radio") e.defaultChecked = e.checked
    }
    function pt(e) {
        var t = (e.nodeName || "").toLowerCase();
        t === "input" ? ht(e) : t !== "script" && typeof e.getElementsByTagName != "undefined" && s.grep(e.getElementsByTagName("input"), ht)
    }
    function dt(e) {
        var t = n.createElement("div");
        return ut.appendChild(t),
        t.innerHTML = e.outerHTML,
        t.firstChild
    }
    function kt(e, t, n) {
        var r = t === "width" ? e.offsetWidth: e.offsetHeight,
        i = t === "width" ? 1 : 0,
        o = 4;
        if (r > 0) {
            if (n !== "border") for (; i < o; i += 2) n || (r -= parseFloat(s.css(e, "padding" + xt[i])) || 0),
            n === "margin" ? r += parseFloat(s.css(e, n + xt[i])) || 0 : r -= parseFloat(s.css(e, "border" + xt[i] + "Width")) || 0;
            return r + "px"
        }
        r = Tt(e, t);
        if (r < 0 || r == null) r = e.style[t];
        if (bt.test(r)) return r;
        r = parseFloat(r) || 0;
        if (n) for (; i < o; i += 2) r += parseFloat(s.css(e, "padding" + xt[i])) || 0,
        n !== "padding" && (r += parseFloat(s.css(e, "border" + xt[i] + "Width")) || 0),
        n === "margin" && (r += parseFloat(s.css(e, n + xt[i])) || 0);
        return r + "px"
    }
    function Qt(e) {
        return function(t, n) {
            typeof t != "string" && (n = t, t = "*");
            if (s.isFunction(n)) {
                var r = t.toLowerCase().split(qt),
                i = 0,
                o = r.length,
                u,
                a,
                f;
                for (; i < o; i++) u = r[i],
                f = /^\+/.test(u),
                f && (u = u.substr(1) || "*"),
                a = e[u] = e[u] || [],
                a[f ? "unshift": "push"](n)
            }
        }
    }
    function Gt(e, n, r, i, s, o) {
        s = s || n.dataTypes[0],
        o = o || {},
        o[s] = !0;
        var u = e[s],
        a = 0,
        f = u ? u.length: 0,
        l = e === Wt,
        c;
        for (; a < f && (l || !c); a++) c = u[a](n, r, i),
        typeof c == "string" && (!l || o[c] ? c = t: (n.dataTypes.unshift(c), c = Gt(e, n, r, i, c, o)));
        return (l || !c) && !o["*"] && (c = Gt(e, n, r, i, "*", o)),
        c
    }
    function Yt(e, n) {
        var r, i, o = s.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((o[r] ? e: i || (i = {}))[r] = n[r]);
        i && s.extend(!0, e, i)
    }
    function Zt(e, t, n, r) {
        if (s.isArray(t)) s.each(t,
        function(t, i) {
            n || At.test(e) ? r(e, i) : Zt(e + "[" + (typeof i == "object" ? t: "") + "]", i, n, r)
        });
        else if (!n && s.type(t) === "object") for (var i in t) Zt(e + "[" + i + "]", t[i], n, r);
        else r(e, t)
    }
    function en(e, n, r) {
        var i = e.contents,
        s = e.dataTypes,
        o = e.responseFields,
        u, a, f, l;
        for (a in o) a in r && (n[o[a]] = r[a]);
        while (s[0] === "*") s.shift(),
        u === t && (u = e.mimeType || n.getResponseHeader("content-type"));
        if (u) for (a in i) if (i[a] && i[a].test(u)) {
            s.unshift(a);
            break
        }
        if (s[0] in r) f = s[0];
        else {
            for (a in r) {
                if (!s[0] || e.converters[a + " " + s[0]]) {
                    f = a;
                    break
                }
                l || (l = a)
            }
            f = f || l
        }
        if (f) return f !== s[0] && s.unshift(f),
        r[f]
    }
    function tn(e, n) {
        e.dataFilter && (n = e.dataFilter(n, e.dataType));
        var r = e.dataTypes,
        i = {},
        o, u, a = r.length,
        f, l = r[0],
        c,
        h,
        p,
        d,
        v;
        for (o = 1; o < a; o++) {
            if (o === 1) for (u in e.converters) typeof u == "string" && (i[u.toLowerCase()] = e.converters[u]);
            c = l,
            l = r[o];
            if (l === "*") l = c;
            else if (c !== "*" && c !== l) {
                h = c + " " + l,
                p = i[h] || i["* " + l];
                if (!p) {
                    v = t;
                    for (d in i) {
                        f = d.split(" ");
                        if (f[0] === c || f[0] === "*") {
                            v = i[f[1] + " " + l];
                            if (v) {
                                d = i[d],
                                d === !0 ? p = v: v === !0 && (p = d);
                                break
                            }
                        }
                    }
                } ! p && !v && s.error("No conversion from " + h.replace(" ", " to ")),
                p !== !0 && (n = p ? p(n) : v(d(n)))
            }
        }
        return n
    }
    function an() {
        try {
            return new e.XMLHttpRequest
        } catch(t) {}
    }
    function fn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch(t) {}
    }
    function yn() {
        return setTimeout(bn, 0),
        gn = s.now()
    }
    function bn() {
        gn = t
    }
    function wn(e, t) {
        var n = {};
        return s.each(mn.concat.apply([], mn.slice(0, t)),
        function() {
            n[this] = e
        }),
        n
    }
    function En(e) {
        if (!ln[e]) {
            var t = n.body,
            r = s("<" + e + ">").appendTo(t),
            i = r.css("display");
            r.remove();
            if (i === "none" || i === "") {
                cn || (cn = n.createElement("iframe"), cn.frameBorder = cn.width = cn.height = 0),
                t.appendChild(cn);
                if (!hn || !cn.createElement) hn = (cn.contentWindow || cn.contentDocument).document,
                hn.write((s.support.boxModel ? "<!doctype html>": "") + "<html><body>"),
                hn.close();
                r = hn.createElement(e),
                hn.body.appendChild(r),
                i = s.css(r, "display"),
                t.removeChild(cn)
            }
            ln[e] = i
        }
        return ln[e]
    }
    function Nn(e) {
        return s.isWindow(e) ? e: e.nodeType === 9 ? e.defaultView || e.parentWindow: !1
    }
    var n = e.document,
    r = e.navigator,
    i = e.location,
    s = function() {
        function H() {
            if (i.isReady) return;
            try {
                n.documentElement.doScroll("left")
            } catch(e) {
                setTimeout(H, 1);
                return
            }
            i.ready()
        }
        var i = function(e, t) {
            return new i.fn.init(e, t, u)
        },
        s = e.jQuery,
        o = e.$,
        u,
        a = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        f = /\S/,
        l = /^\s+/,
        c = /\s+$/,
        h = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        p = /^[\],:{}\s]*$/,
        d = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        v = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        m = /(?:^|:|,)(?:\s*\[)+/g,
        g = /(webkit)[ \/]([\w.]+)/,
        y = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        b = /(msie) ([\w.]+)/,
        w = /(mozilla)(?:.*? rv:([\w.]+))?/,
        E = /-([a-z]|[0-9])/ig,
        S = /^-ms-/,
        x = function(e, t) {
            return (t + "").toUpperCase()
        },
        T = r.userAgent,
        N,
        C,
        k,
        L = Object.prototype.toString,
        A = Object.prototype.hasOwnProperty,
        O = Array.prototype.push,
        M = Array.prototype.slice,
        _ = String.prototype.trim,
        D = Array.prototype.indexOf,
        P = {};
        return i.fn = i.prototype = {
            constructor: i,
            init: function(e, r, s) {
                var o, u, f, l;
                if (!e) return this;
                if (e.nodeType) return this.context = this[0] = e,
                this.length = 1,
                this;
                if (e === "body" && !r && n.body) return this.context = n,
                this[0] = n.body,
                this.selector = e,
                this.length = 1,
                this;
                if (typeof e == "string") {
                    e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? o = [null, e, null] : o = a.exec(e);
                    if (o && (o[1] || !r)) {
                        if (o[1]) return r = r instanceof i ? r[0] : r,
                        l = r ? r.ownerDocument || r: n,
                        f = h.exec(e),
                        f ? i.isPlainObject(r) ? (e = [n.createElement(f[1])], i.fn.attr.call(e, r, !0)) : e = [l.createElement(f[1])] : (f = i.buildFragment([o[1]], [l]), e = (f.cacheable ? i.clone(f.fragment) : f.fragment).childNodes),
                        i.merge(this, e);
                        u = n.getElementById(o[2]);
                        if (u && u.parentNode) {
                            if (u.id !== o[2]) return s.find(e);
                            this.length = 1,
                            this[0] = u
                        }
                        return this.context = n,
                        this.selector = e,
                        this
                    }
                    return ! r || r.jquery ? (r || s).find(e) : this.constructor(r).find(e)
                }
                return i.isFunction(e) ? s.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), i.makeArray(e, this))
            },
            selector: "",
            jquery: "1.7.2",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return M.call(this, 0)
            },
            get: function(e) {
                return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
            },
            pushStack: function(e, t, n) {
                var r = this.constructor();
                return i.isArray(e) ? O.apply(r, e) : i.merge(r, e),
                r.prevObject = this,
                r.context = this.context,
                t === "find" ? r.selector = this.selector + (this.selector ? " ": "") + n: t && (r.selector = this.selector + "." + t + "(" + n + ")"),
                r
            },
            each: function(e, t) {
                return i.each(this, e, t)
            },
            ready: function(e) {
                return i.bindReady(),
                C.add(e),
                this
            },
            eq: function(e) {
                return e = +e,
                e === -1 ? this.slice(e) : this.slice(e, e + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq( - 1)
            },
            slice: function() {
                return this.pushStack(M.apply(this, arguments), "slice", M.call(arguments).join(","))
            },
            map: function(e) {
                return this.pushStack(i.map(this,
                function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: O,
            sort: [].sort,
            splice: [].splice
        },
        i.fn.init.prototype = i.fn,
        i.extend = i.fn.extend = function() {
            var e, n, r, s, o, u, a = arguments[0] || {},
            f = 1,
            l = arguments.length,
            c = !1;
            typeof a == "boolean" && (c = a, a = arguments[1] || {},
            f = 2),
            typeof a != "object" && !i.isFunction(a) && (a = {}),
            l === f && (a = this, --f);
            for (; f < l; f++) if ((e = arguments[f]) != null) for (n in e) {
                r = a[n],
                s = e[n];
                if (a === s) continue;
                c && s && (i.isPlainObject(s) || (o = i.isArray(s))) ? (o ? (o = !1, u = r && i.isArray(r) ? r: []) : u = r && i.isPlainObject(r) ? r: {},
                a[n] = i.extend(c, u, s)) : s !== t && (a[n] = s)
            }
            return a
        },
        i.extend({
            noConflict: function(t) {
                return e.$ === i && (e.$ = o),
                t && e.jQuery === i && (e.jQuery = s),
                i
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? i.readyWait++:i.ready(!0)
            },
            ready: function(e) {
                if (e === !0 && !--i.readyWait || e !== !0 && !i.isReady) {
                    if (!n.body) return setTimeout(i.ready, 1);
                    i.isReady = !0;
                    if (e !== !0 && --i.readyWait > 0) return;
                    C.fireWith(n, [i]),
                    i.fn.trigger && i(n).trigger("ready").off("ready")
                }
            },
            bindReady: function() {
                if (C) return;
                C = i.Callbacks("once memory");
                if (n.readyState === "complete") return setTimeout(i.ready, 1);
                if (n.addEventListener) n.addEventListener("DOMContentLoaded", k, !1),
                e.addEventListener("load", i.ready, !1);
                else if (n.attachEvent) {
                    n.attachEvent("onreadystatechange", k),
                    e.attachEvent("onload", i.ready);
                    var t = !1;
                    try {
                        t = e.frameElement == null
                    } catch(r) {}
                    n.documentElement.doScroll && t && H()
                }
            },
            isFunction: function(e) {
                return i.type(e) === "function"
            },
            isArray: Array.isArray ||
            function(e) {
                return i.type(e) === "array"
            },
            isWindow: function(e) {
                return e != null && e == e.window
            },
            isNumeric: function(e) {
                return ! isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function(e) {
                return e == null ? String(e) : P[L.call(e)] || "object"
            },
            isPlainObject: function(e) {
                if (!e || i.type(e) !== "object" || e.nodeType || i.isWindow(e)) return ! 1;
                try {
                    if (e.constructor && !A.call(e, "constructor") && !A.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
                } catch(n) {
                    return ! 1
                }
                var r;
                for (r in e);
                return r === t || A.call(e, r)
            },
            isEmptyObject: function(e) {
                for (var t in e) return ! 1;
                return ! 0
            },
            error: function(e) {
                throw new Error(e)
            },
            parseJSON: function(t) {
                if (typeof t != "string" || !t) return null;
                t = i.trim(t);
                if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
                if (p.test(t.replace(d, "@").replace(v, "]").replace(m, ""))) return (new Function("return " + t))();
                i.error("Invalid JSON: " + t)
            },
            parseXML: function(n) {
                if (typeof n != "string" || !n) return null;
                var r, s;
                try {
                    e.DOMParser ? (s = new DOMParser, r = s.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
                } catch(o) {
                    r = t
                }
                return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + n),
                r
            },
            noop: function() {},
            globalEval: function(t) {
                t && f.test(t) && (e.execScript ||
                function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(S, "ms-").replace(E, x)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
            },
            each: function(e, n, r) {
                var s, o = 0,
                u = e.length,
                a = u === t || i.isFunction(e);
                if (r) {
                    if (a) {
                        for (s in e) if (n.apply(e[s], r) === !1) break
                    } else for (; o < u;) if (n.apply(e[o++], r) === !1) break
                } else if (a) {
                    for (s in e) if (n.call(e[s], s, e[s]) === !1) break
                } else for (; o < u;) if (n.call(e[o], o, e[o++]) === !1) break;
                return e
            },
            trim: _ ?
            function(e) {
                return e == null ? "": _.call(e)
            }: function(e) {
                return e == null ? "": e.toString().replace(l, "").replace(c, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                if (e != null) {
                    var r = i.type(e);
                    e.length == null || r === "string" || r === "function" || r === "regexp" || i.isWindow(e) ? O.call(n, e) : i.merge(n, e)
                }
                return n
            },
            inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (D) return D.call(t, e, n);
                    r = t.length,
                    n = n ? n < 0 ? Math.max(0, r + n) : n: 0;
                    for (; n < r; n++) if (n in t && t[n] === e) return n
                }
                return - 1
            },
            merge: function(e, n) {
                var r = e.length,
                i = 0;
                if (typeof n.length == "number") for (var s = n.length; i < s; i++) e[r++] = n[i];
                else while (n[i] !== t) e[r++] = n[i++];
                return e.length = r,
                e
            },
            grep: function(e, t, n) {
                var r = [],
                i;
                n = !!n;
                for (var s = 0,
                o = e.length; s < o; s++) i = !!t(e[s], s),
                n !== i && r.push(e[s]);
                return r
            },
            map: function(e, n, r) {
                var s, o, u = [],
                a = 0,
                f = e.length,
                l = e instanceof i || f !== t && typeof f == "number" && (f > 0 && e[0] && e[f - 1] || f === 0 || i.isArray(e));
                if (l) for (; a < f; a++) s = n(e[a], a, r),
                s != null && (u[u.length] = s);
                else for (o in e) s = n(e[o], o, r),
                s != null && (u[u.length] = s);
                return u.concat.apply([], u)
            },
            guid: 1,
            proxy: function(e, n) {
                if (typeof n == "string") {
                    var r = e[n];
                    n = e,
                    e = r
                }
                if (!i.isFunction(e)) return t;
                var s = M.call(arguments, 2),
                o = function() {
                    return e.apply(n, s.concat(M.call(arguments)))
                };
                return o.guid = e.guid = e.guid || o.guid || i.guid++,
                o
            },
            access: function(e, n, r, s, o, u, a) {
                var f, l = r == null,
                c = 0,
                h = e.length;
                if (r && typeof r == "object") {
                    for (c in r) i.access(e, n, c, r[c], 1, u, s);
                    o = 1
                } else if (s !== t) {
                    f = a === t && i.isFunction(s),
                    l && (f ? (f = n, n = function(e, t, n) {
                        return f.call(i(e), n)
                    }) : (n.call(e, s), n = null));
                    if (n) for (; c < h; c++) n(e[c], r, f ? s.call(e[c], c, n(e[c], r)) : s, a);
                    o = 1
                }
                return o ? e: l ? n.call(e) : h ? n(e[0], r) : u
            },
            now: function() {
                return (new Date).getTime()
            },
            uaMatch: function(e) {
                e = e.toLowerCase();
                var t = g.exec(e) || y.exec(e) || b.exec(e) || e.indexOf("compatible") < 0 && w.exec(e) || [];
                return {
                    browser: t[1] || "",
                    version: t[2] || "0"
                }
            },
            sub: function() {
                function e(t, n) {
                    return new e.fn.init(t, n)
                }
                i.extend(!0, e, this),
                e.superclass = this,
                e.fn = e.prototype = this(),
                e.fn.constructor = e,
                e.sub = this.sub,
                e.fn.init = function(r, s) {
                    return s && s instanceof i && !(s instanceof e) && (s = e(s)),
                    i.fn.init.call(this, r, s, t)
                },
                e.fn.init.prototype = e.fn;
                var t = e(n);
                return e
            },
            browser: {}
        }),
        i.each("Boolean Number String Function Array Date RegExp Object".split(" "),
        function(e, t) {
            P["[object " + t + "]"] = t.toLowerCase()
        }),
        N = i.uaMatch(T),
        N.browser && (i.browser[N.browser] = !0, i.browser.version = N.version),
        i.browser.webkit && (i.browser.safari = !0),
        f.test(" ") && (l = /^[\s\xA0]+/, c = /[\s\xA0]+$/),
        u = i(n),
        n.addEventListener ? k = function() {
            n.removeEventListener("DOMContentLoaded", k, !1),
            i.ready()
        }: n.attachEvent && (k = function() {
            n.readyState === "complete" && (n.detachEvent("onreadystatechange", k), i.ready())
        }),
        i
    } (),
    o = {};
    s.Callbacks = function(e) {
        e = e ? o[e] || u(e) : {};
        var n = [],
        r = [],
        i,
        a,
        f,
        l,
        c,
        h,
        p = function(t) {
            var r, i, o, u, a;
            for (r = 0, i = t.length; r < i; r++) o = t[r],
            u = s.type(o),
            u === "array" ? p(o) : u === "function" && (!e.unique || !v.has(o)) && n.push(o)
        },
        d = function(t, s) {
            s = s || [],
            i = !e.memory || [t, s],
            a = !0,
            f = !0,
            h = l || 0,
            l = 0,
            c = n.length;
            for (; n && h < c; h++) if (n[h].apply(t, s) === !1 && e.stopOnFalse) {
                i = !0;
                break
            }
            f = !1,
            n && (e.once ? i === !0 ? v.disable() : n = [] : r && r.length && (i = r.shift(), v.fireWith(i[0], i[1])))
        },
        v = {
            add: function() {
                if (n) {
                    var e = n.length;
                    p(arguments),
                    f ? c = n.length: i && i !== !0 && (l = e, d(i[0], i[1]))
                }
                return this
            },
            remove: function() {
                if (n) {
                    var t = arguments,
                    r = 0,
                    i = t.length;
                    for (; r < i; r++) for (var s = 0; s < n.length; s++) if (t[r] === n[s]) {
                        f && s <= c && (c--, s <= h && h--),
                        n.splice(s--, 1);
                        if (e.unique) break
                    }
                }
                return this
            },
            has: function(e) {
                if (n) {
                    var t = 0,
                    r = n.length;
                    for (; t < r; t++) if (e === n[t]) return ! 0
                }
                return ! 1
            },
            empty: function() {
                return n = [],
                this
            },
            disable: function() {
                return n = r = i = t,
                this
            },
            disabled: function() {
                return ! n
            },
            lock: function() {
                return r = t,
                (!i || i === !0) && v.disable(),
                this
            },
            locked: function() {
                return ! r
            },
            fireWith: function(t, n) {
                return r && (f ? e.once || r.push([t, n]) : (!e.once || !i) && d(t, n)),
                this
            },
            fire: function() {
                return v.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! a
            }
        };
        return v
    };
    var a = [].slice;
    s.extend({
        Deferred: function(e) {
            var t = s.Callbacks("once memory"),
            n = s.Callbacks("once memory"),
            r = s.Callbacks("memory"),
            i = "pending",
            o = {
                resolve: t,
                reject: n,
                notify: r
            },
            u = {
                done: t.add,
                fail: n.add,
                progress: r.add,
                state: function() {
                    return i
                },
                isResolved: t.fired,
                isRejected: n.fired,
                then: function(e, t, n) {
                    return a.done(e).fail(t).progress(n),
                    this
                },
                always: function() {
                    return a.done.apply(a, arguments).fail.apply(a, arguments),
                    this
                },
                pipe: function(e, t, n) {
                    return s.Deferred(function(r) {
                        s.each({
                            done: [e, "resolve"],
                            fail: [t, "reject"],
                            progress: [n, "notify"]
                        },
                        function(e, t) {
                            var n = t[0],
                            i = t[1],
                            o;
                            s.isFunction(n) ? a[e](function() {
                                o = n.apply(this, arguments),
                                o && s.isFunction(o.promise) ? o.promise().then(r.resolve, r.reject, r.notify) : r[i + "With"](this === a ? r: this, [o])
                            }) : a[e](r[i])
                        })
                    }).promise()
                },
                promise: function(e) {
                    if (e == null) e = u;
                    else for (var t in u) e[t] = u[t];
                    return e
                }
            },
            a = u.promise({}),
            f;
            for (f in o) a[f] = o[f].fire,
            a[f + "With"] = o[f].fireWith;
            return a.done(function() {
                i = "resolved"
            },
            n.disable, r.lock).fail(function() {
                i = "rejected"
            },
            t.disable, r.lock),
            e && e.call(a, a),
            a
        },
        when: function(e) {
            function c(e) {
                return function(n) {
                    t[e] = arguments.length > 1 ? a.call(arguments, 0) : n,
                    --o || f.resolveWith(f, t)
                }
            }
            function h(e) {
                return function(t) {
                    i[e] = arguments.length > 1 ? a.call(arguments, 0) : t,
                    f.notifyWith(l, i)
                }
            }
            var t = a.call(arguments, 0),
            n = 0,
            r = t.length,
            i = new Array(r),
            o = r,
            u = r,
            f = r <= 1 && e && s.isFunction(e.promise) ? e: s.Deferred(),
            l = f.promise();
            if (r > 1) {
                for (; n < r; n++) t[n] && t[n].promise && s.isFunction(t[n].promise) ? t[n].promise().then(c(n), f.reject, h(n)) : --o;
                o || f.resolveWith(f, t)
            } else f !== e && f.resolveWith(f, r ? [e] : []);
            return l
        }
    }),
    s.support = function() {
        var t, r, i, o, u, a, f, l, c, h, p, d, v = n.createElement("div"),
        m = n.documentElement;
        v.setAttribute("className", "t"),
        v.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",
        r = v.getElementsByTagName("*"),
        i = v.getElementsByTagName("a")[0];
        if (!r || !r.length || !i) return {};
        o = n.createElement("select"),
        u = o.appendChild(n.createElement("option")),
        a = v.getElementsByTagName("input")[0],
        t = {
            leadingWhitespace: v.firstChild.nodeType === 3,
            tbody: !v.getElementsByTagName("tbody").length,
            htmlSerialize: !!v.getElementsByTagName("link").length,
            style: /top/.test(i.getAttribute("style")),
            hrefNormalized: i.getAttribute("href") === "/a",
            opacity: /^0.55/.test(i.style.opacity),
            cssFloat: !!i.style.cssFloat,
            checkOn: a.value === "on",
            optSelected: u.selected,
            getSetAttribute: v.className !== "t",
            enctype: !!n.createElement("form").enctype,
            html5Clone: n.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        },
        s.boxModel = t.boxModel = n.compatMode === "CSS1Compat",
        a.checked = !0,
        t.noCloneChecked = a.cloneNode(!0).checked,
        o.disabled = !0,
        t.optDisabled = !u.disabled;
        try {
            delete v.test
        } catch(g) {
            t.deleteExpando = !1
        } ! v.addEventListener && v.attachEvent && v.fireEvent && (v.attachEvent("onclick",
        function() {
            t.noCloneEvent = !1
        }), v.cloneNode(!0).fireEvent("onclick")),
        a = n.createElement("input"),
        a.value = "t",
        a.setAttribute("type", "radio"),
        t.radioValue = a.value === "t",
        a.setAttribute("checked", "checked"),
        a.setAttribute("name", "t"),
        v.appendChild(a),
        f = n.createDocumentFragment(),
        f.appendChild(v.lastChild),
        t.checkClone = f.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.appendChecked = a.checked,
        f.removeChild(a),
        f.appendChild(v);
        if (v.attachEvent) for (p in {
            submit: 1,
            change: 1,
            focusin: 1
        }) h = "on" + p,
        d = h in v,
        d || (v.setAttribute(h, "return;"), d = typeof v[h] == "function"),
        t[p + "Bubbles"] = d;
        return f.removeChild(v),
        f = o = u = v = a = null,
        s(function() {
            var r, i, o, u, a, f, c, h, p, m, g, y, b, w = n.getElementsByTagName("body")[0];
            if (!w) return;
            h = 1,
            b = "padding:0;margin:0;border:",
            g = "position:absolute;top:0;left:0;width:1px;height:1px;",
            y = b + "0;visibility:hidden;",
            p = "style='" + g + b + "5px solid #000;",
            m = "<div " + p + "display:block;'><div style='" + b + "0;display:block;overflow:hidden;'></div></div>" + "<table " + p + "' cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>",
            r = n.createElement("div"),
            r.style.cssText = y + "width:0;height:0;position:static;top:0;margin-top:" + h + "px",
            w.insertBefore(r, w.firstChild),
            v = n.createElement("div"),
            r.appendChild(v),
            v.innerHTML = "<table><tr><td style='" + b + "0;display:none'></td><td>t</td></tr></table>",
            l = v.getElementsByTagName("td"),
            d = l[0].offsetHeight === 0,
            l[0].style.display = "",
            l[1].style.display = "none",
            t.reliableHiddenOffsets = d && l[0].offsetHeight === 0,
            e.getComputedStyle && (v.innerHTML = "", c = n.createElement("div"), c.style.width = "0", c.style.marginRight = "0", v.style.width = "2px", v.appendChild(c), t.reliableMarginRight = (parseInt((e.getComputedStyle(c, null) || {
                marginRight: 0
            }).marginRight, 10) || 0) === 0),
            typeof v.style.zoom != "undefined" && (v.innerHTML = "", v.style.width = v.style.padding = "1px", v.style.border = 0, v.style.overflow = "hidden", v.style.display = "inline", v.style.zoom = 1, t.inlineBlockNeedsLayout = v.offsetWidth === 3, v.style.display = "block", v.style.overflow = "visible", v.innerHTML = "<div style='width:5px;'></div>", t.shrinkWrapBlocks = v.offsetWidth !== 3),
            v.style.cssText = g + y,
            v.innerHTML = m,
            i = v.firstChild,
            o = i.firstChild,
            a = i.nextSibling.firstChild.firstChild,
            f = {
                doesNotAddBorder: o.offsetTop !== 5,
                doesAddBorderForTableAndCells: a.offsetTop === 5
            },
            o.style.position = "fixed",
            o.style.top = "20px",
            f.fixedPosition = o.offsetTop === 20 || o.offsetTop === 15,
            o.style.position = o.style.top = "",
            i.style.overflow = "hidden",
            i.style.position = "relative",
            f.subtractsBorderForOverflowNotVisible = o.offsetTop === -5,
            f.doesNotIncludeMarginInBodyOffset = w.offsetTop !== h,
            e.getComputedStyle && (v.style.marginTop = "1%", t.pixelMargin = (e.getComputedStyle(v, null) || {
                marginTop: 0
            }).marginTop !== "1%"),
            typeof r.style.zoom != "undefined" && (r.style.zoom = 1),
            w.removeChild(r),
            c = v = r = null,
            s.extend(t, f)
        }),
        t
    } ();
    var f = /^(?:\{.*\}|\[.*\])$/,
    l = /([A-Z])/g;
    s.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (s.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? s.cache[e[s.expando]] : e[s.expando],
            !!e && !h(e)
        },
        data: function(e, n, r, i) {
            if (!s.acceptData(e)) return;
            var o, u, a, f = s.expando,
            l = typeof n == "string",
            c = e.nodeType,
            h = c ? s.cache: e,
            p = c ? e[f] : e[f] && f,
            d = n === "events";
            if ((!p || !h[p] || !d && !i && !h[p].data) && l && r === t) return;
            p || (c ? e[f] = p = ++s.uuid: p = f),
            h[p] || (h[p] = {},
            c || (h[p].toJSON = s.noop));
            if (typeof n == "object" || typeof n == "function") i ? h[p] = s.extend(h[p], n) : h[p].data = s.extend(h[p].data, n);
            return o = u = h[p],
            i || (u.data || (u.data = {}), u = u.data),
            r !== t && (u[s.camelCase(n)] = r),
            d && !u[n] ? o.events: (l ? (a = u[n], a == null && (a = u[s.camelCase(n)])) : a = u, a)
        },
        removeData: function(e, t, n) {
            if (!s.acceptData(e)) return;
            var r, i, o, u = s.expando,
            a = e.nodeType,
            f = a ? s.cache: e,
            l = a ? e[u] : u;
            if (!f[l]) return;
            if (t) {
                r = n ? f[l] : f[l].data;
                if (r) {
                    s.isArray(t) || (t in r ? t = [t] : (t = s.camelCase(t), t in r ? t = [t] : t = t.split(" ")));
                    for (i = 0, o = t.length; i < o; i++) delete r[t[i]];
                    if (! (n ? h: s.isEmptyObject)(r)) return
                }
            }
            if (!n) {
                delete f[l].data;
                if (!h(f[l])) return
            }
            s.support.deleteExpando || !f.setInterval ? delete f[l] : f[l] = null,
            a && (s.support.deleteExpando ? delete e[u] : e.removeAttribute ? e.removeAttribute(u) : e[u] = null)
        },
        _data: function(e, t, n) {
            return s.data(e, t, n, !0)
        },
        acceptData: function(e) {
            if (e.nodeName) {
                var t = s.noData[e.nodeName.toLowerCase()];
                if (t) return t !== !0 && e.getAttribute("classid") === t
            }
            return ! 0
        }
    }),
    s.fn.extend({
        data: function(e, n) {
            var r, i, o, u, a, f = this[0],
            l = 0,
            h = null;
            if (e === t) {
                if (this.length) {
                    h = s.data(f);
                    if (f.nodeType === 1 && !s._data(f, "parsedAttrs")) {
                        o = f.attributes;
                        for (a = o.length; l < a; l++) u = o[l].name,
                        u.indexOf("data-") === 0 && (u = s.camelCase(u.substring(5)), c(f, u, h[u]));
                        s._data(f, "parsedAttrs", !0)
                    }
                }
                return h
            }
            return typeof e == "object" ? this.each(function() {
                s.data(this, e)
            }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", s.access(this,
            function(n) {
                if (n === t) return h = this.triggerHandler("getData" + i, [r[0]]),
                h === t && f && (h = s.data(f, e), h = c(f, e, h)),
                h === t && r[1] ? this.data(r[0]) : h;
                r[1] = n,
                this.each(function() {
                    var t = s(this);
                    t.triggerHandler("setData" + i, r),
                    s.data(this, e, n),
                    t.triggerHandler("changeData" + i, r)
                })
            },
            null, n, arguments.length > 1, null, !1))
        },
        removeData: function(e) {
            return this.each(function() {
                s.removeData(this, e)
            })
        }
    }),
    s.extend({
        _mark: function(e, t) {
            e && (t = (t || "fx") + "mark", s._data(e, t, (s._data(e, t) || 0) + 1))
        },
        _unmark: function(e, t, n) {
            e !== !0 && (n = t, t = e, e = !1);
            if (t) {
                n = n || "fx";
                var r = n + "mark",
                i = e ? 0 : (s._data(t, r) || 1) - 1;
                i ? s._data(t, r, i) : (s.removeData(t, r, !0), p(t, n, "mark"))
            }
        },
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue",
            r = s._data(e, t),
            n && (!r || s.isArray(n) ? r = s._data(e, t, s.makeArray(n)) : r.push(n)),
            r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = s.queue(e, t),
            r = n.shift(),
            i = {};
            r === "inprogress" && (r = n.shift()),
            r && (t === "fx" && n.unshift("inprogress"), s._data(e, t + ".run", i), r.call(e,
            function() {
                s.dequeue(e, t)
            },
            i)),
            n.length || (s.removeData(e, t + "queue " + t + ".run", !0), p(e, t, "queue"))
        }
    }),
    s.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return typeof e != "string" && (n = e, e = "fx", r--),
            arguments.length < r ? s.queue(this[0], e) : n === t ? this: this.each(function() {
                var t = s.queue(this, e, n);
                e === "fx" && t[0] !== "inprogress" && s.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                s.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = s.fx ? s.fx.speeds[e] || e: e,
            t = t || "fx",
            this.queue(t,
            function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            function h() {--u || r.resolveWith(i, [i])
            }
            typeof e != "string" && (n = e, e = t),
            e = e || "fx";
            var r = s.Deferred(),
            i = this,
            o = i.length,
            u = 1,
            a = e + "defer",
            f = e + "queue",
            l = e + "mark",
            c;
            while (o--) if (c = s.data(i[o], a, t, !0) || (s.data(i[o], f, t, !0) || s.data(i[o], l, t, !0)) && s.data(i[o], a, s.Callbacks("once memory"), !0)) u++,
            c.add(h);
            return h(),
            r.promise(n)
        }
    });
    var d = /[\n\t\r]/g,
    v = /\s+/,
    m = /\r/g,
    g = /^(?:button|input)$/i,
    y = /^(?:button|input|object|select|textarea)$/i,
    b = /^a(?:rea)?$/i,
    w = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    E = s.support.getSetAttribute,
    S, x, T;
    s.fn.extend({
        attr: function(e, t) {
            return s.access(this, s.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                s.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return s.access(this, s.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = s.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = t,
                    delete this[e]
                } catch(n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, u, a;
            if (s.isFunction(e)) return this.each(function(t) {
                s(this).addClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string") {
                t = e.split(v);
                for (n = 0, r = this.length; n < r; n++) {
                    i = this[n];
                    if (i.nodeType === 1) if (!i.className && t.length === 1) i.className = e;
                    else {
                        o = " " + i.className + " ";
                        for (u = 0, a = t.length; u < a; u++)~o.indexOf(" " + t[u] + " ") || (o += t[u] + " ");
                        i.className = s.trim(o)
                    }
                }
            }
            return this
        },
        removeClass: function(e) {
            var n, r, i, o, u, a, f;
            if (s.isFunction(e)) return this.each(function(t) {
                s(this).removeClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string" || e === t) {
                n = (e || "").split(v);
                for (r = 0, i = this.length; r < i; r++) {
                    o = this[r];
                    if (o.nodeType === 1 && o.className) if (e) {
                        u = (" " + o.className + " ").replace(d, " ");
                        for (a = 0, f = n.length; a < f; a++) u = u.replace(" " + n[a] + " ", " ");
                        o.className = s.trim(u)
                    } else o.className = ""
                }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
            r = typeof t == "boolean";
            return s.isFunction(e) ? this.each(function(n) {
                s(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if (n === "string") {
                    var i, o = 0,
                    u = s(this),
                    a = t,
                    f = e.split(v);
                    while (i = f[o++]) a = r ? a: !u.hasClass(i),
                    u[a ? "addClass": "removeClass"](i)
                } else if (n === "undefined" || n === "boolean") this.className && s._data(this, "__className__", this.className),
                this.className = this.className || e === !1 ? "": s._data(this, "__className__") || ""
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
            n = 0,
            r = this.length;
            for (; n < r; n++) if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(d, " ").indexOf(t) > -1) return ! 0;
            return ! 1
        },
        val: function(e) {
            var n, r, i, o = this[0];
            if (!arguments.length) {
                if (o) return n = s.valHooks[o.type] || s.valHooks[o.nodeName.toLowerCase()],
                n && "get" in n && (r = n.get(o, "value")) !== t ? r: (r = o.value, typeof r == "string" ? r.replace(m, "") : r == null ? "": r);
                return
            }
            return i = s.isFunction(e),
            this.each(function(r) {
                var o = s(this),
                u;
                if (this.nodeType !== 1) return;
                i ? u = e.call(this, r, o.val()) : u = e,
                u == null ? u = "": typeof u == "number" ? u += "": s.isArray(u) && (u = s.map(u,
                function(e) {
                    return e == null ? "": e + ""
                })),
                n = s.valHooks[this.type] || s.valHooks[this.nodeName.toLowerCase()];
                if (!n || !("set" in n) || n.set(this, u, "value") === t) this.value = u
            })
        }
    }),
    s.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return ! t || t.specified ? e.value: e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i, o = e.selectedIndex,
                    u = [],
                    a = e.options,
                    f = e.type === "select-one";
                    if (o < 0) return null;
                    n = f ? o: 0,
                    r = f ? o + 1 : a.length;
                    for (; n < r; n++) {
                        i = a[n];
                        if (i.selected && (s.support.optDisabled ? !i.disabled: i.getAttribute("disabled") === null) && (!i.parentNode.disabled || !s.nodeName(i.parentNode, "optgroup"))) {
                            t = s(i).val();
                            if (f) return t;
                            u.push(t)
                        }
                    }
                    return f && !u.length && a.length ? s(a[o]).val() : u
                },
                set: function(e, t) {
                    var n = s.makeArray(t);
                    return s(e).find("option").each(function() {
                        this.selected = s.inArray(s(this).val(), n) >= 0
                    }),
                    n.length || (e.selectedIndex = -1),
                    n
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(e, n, r, i) {
            var o, u, a, f = e.nodeType;
            if (!e || f === 3 || f === 8 || f === 2) return;
            if (i && n in s.attrFn) return s(e)[n](r);
            if (typeof e.getAttribute == "undefined") return s.prop(e, n, r);
            a = f !== 1 || !s.isXMLDoc(e),
            a && (n = n.toLowerCase(), u = s.attrHooks[n] || (w.test(n) ? x: S));
            if (r !== t) {
                if (r === null) {
                    s.removeAttr(e, n);
                    return
                }
                return u && "set" in u && a && (o = u.set(e, r, n)) !== t ? o: (e.setAttribute(n, "" + r), r)
            }
            return u && "get" in u && a && (o = u.get(e, n)) !== null ? o: (o = e.getAttribute(n), o === null ? t: o)
        },
        removeAttr: function(e, t) {
            var n, r, i, o, u, a = 0;
            if (t && e.nodeType === 1) {
                r = t.toLowerCase().split(v),
                o = r.length;
                for (; a < o; a++) i = r[a],
                i && (n = s.propFix[i] || i, u = w.test(i), u || s.attr(e, i, ""), e.removeAttribute(E ? i: n), u && n in e && (e[n] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (g.test(e.nodeName) && e.parentNode) s.error("type property can't be changed");
                    else if (!s.support.radioValue && t === "radio" && s.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            },
            value: {
                get: function(e, t) {
                    return S && s.nodeName(e, "button") ? S.get(e, t) : t in e ? e.value: null
                },
                set: function(e, t, n) {
                    if (S && s.nodeName(e, "button")) return S.set(e, t, n);
                    e.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, o, u, a = e.nodeType;
            if (!e || a === 3 || a === 8 || a === 2) return;
            return u = a !== 1 || !s.isXMLDoc(e),
            u && (n = s.propFix[n] || n, o = s.propHooks[n]),
            r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i: e[n] = r: o && "get" in o && (i = o.get(e, n)) !== null ? i: e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : y.test(e.nodeName) || b.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }),
    s.attrHooks.tabindex = s.propHooks.tabIndex,
    x = {
        get: function(e, n) {
            var r, i = s.prop(e, n);
            return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            var r;
            return t === !1 ? s.removeAttr(e, n) : (r = s.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())),
            n
        }
    },
    E || (T = {
        name: !0,
        id: !0,
        coords: !0
    },
    S = s.valHooks.button = {
        get: function(e, n) {
            var r;
            return r = e.getAttributeNode(n),
            r && (T[n] ? r.nodeValue !== "": r.specified) ? r.nodeValue: t
        },
        set: function(e, t, r) {
            var i = e.getAttributeNode(r);
            return i || (i = n.createAttribute(r), e.setAttributeNode(i)),
            i.nodeValue = t + ""
        }
    },
    s.attrHooks.tabindex.set = S.set, s.each(["width", "height"],
    function(e, t) {
        s.attrHooks[t] = s.extend(s.attrHooks[t], {
            set: function(e, n) {
                if (n === "") return e.setAttribute(t, "auto"),
                n
            }
        })
    }), s.attrHooks.contenteditable = {
        get: S.get,
        set: function(e, t, n) {
            t === "" && (t = "false"),
            S.set(e, t, n)
        }
    }),
    s.support.hrefNormalized || s.each(["href", "src", "width", "height"],
    function(e, n) {
        s.attrHooks[n] = s.extend(s.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return r === null ? t: r
            }
        })
    }),
    s.support.style || (s.attrHooks.style = {
        get: function(e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function(e, t) {
            return e.style.cssText = "" + t
        }
    }),
    s.support.optSelected || (s.propHooks.selected = s.extend(s.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
        }
    })),
    s.support.enctype || (s.propFix.enctype = "encoding"),
    s.support.checkOn || s.each(["radio", "checkbox"],
    function() {
        s.valHooks[this] = {
            get: function(e) {
                return e.getAttribute("value") === null ? "on": e.value
            }
        }
    }),
    s.each(["radio", "checkbox"],
    function() {
        s.valHooks[this] = s.extend(s.valHooks[this], {
            set: function(e, t) {
                if (s.isArray(t)) return e.checked = s.inArray(s(e).val(), t) >= 0
            }
        })
    });
    var N = /^(?:textarea|input|select)$/i,
    C = /^([^\.]*)?(?:\.(.+))?$/,
    k = /(?:^|\s)hover(\.\S+)?\b/,
    L = /^key/,
    A = /^(?:mouse|contextmenu)|click/,
    O = /^(?:focusinfocus|focusoutblur)$/,
    M = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
    _ = function(e) {
        var t = M.exec(e);
        return t && (t[1] = (t[1] || "").toLowerCase(), t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")),
        t
    },
    D = function(e, t) {
        var n = e.attributes || {};
        return (!t[1] || e.nodeName.toLowerCase() === t[1]) && (!t[2] || (n.id || {}).value === t[2]) && (!t[3] || t[3].test((n["class"] || {}).value))
    },
    P = function(e) {
        return s.event.special.hover ? e: e.replace(k, "mouseenter$1 mouseleave$1")
    };
    s.event = {
        add: function(e, n, r, i, o) {
            var u, a, f, l, c, h, p, d, v, m, g, y;
            if (e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(u = s._data(e))) return;
            r.handler && (v = r, r = v.handler, o = v.selector),
            r.guid || (r.guid = s.guid++),
            f = u.events,
            f || (u.events = f = {}),
            a = u.handle,
            a || (u.handle = a = function(e) {
                return typeof s == "undefined" || !!e && s.event.triggered === e.type ? t: s.event.dispatch.apply(a.elem, arguments)
            },
            a.elem = e),
            n = s.trim(P(n)).split(" ");
            for (l = 0; l < n.length; l++) {
                c = C.exec(n[l]) || [],
                h = c[1],
                p = (c[2] || "").split(".").sort(),
                y = s.event.special[h] || {},
                h = (o ? y.delegateType: y.bindType) || h,
                y = s.event.special[h] || {},
                d = s.extend({
                    type: h,
                    origType: c[1],
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    quick: o && _(o),
                    namespace: p.join(".")
                },
                v),
                g = f[h];
                if (!g) {
                    g = f[h] = [],
                    g.delegateCount = 0;
                    if (!y.setup || y.setup.call(e, i, p, a) === !1) e.addEventListener ? e.addEventListener(h, a, !1) : e.attachEvent && e.attachEvent("on" + h, a)
                }
                y.add && (y.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)),
                o ? g.splice(g.delegateCount++, 0, d) : g.push(d),
                s.event.global[h] = !0
            }
            e = null
        },
        global: {},
        remove: function(e, t, n, r, i) {
            var o = s.hasData(e) && s._data(e),
            u,
            a,
            f,
            l,
            c,
            h,
            p,
            d,
            v,
            m,
            g,
            y;
            if (!o || !(d = o.events)) return;
            t = s.trim(P(t || "")).split(" ");
            for (u = 0; u < t.length; u++) {
                a = C.exec(t[u]) || [],
                f = l = a[1],
                c = a[2];
                if (!f) {
                    for (f in d) s.event.remove(e, f + t[u], n, r, !0);
                    continue
                }
                v = s.event.special[f] || {},
                f = (r ? v.delegateType: v.bindType) || f,
                g = d[f] || [],
                h = g.length,
                c = c ? new RegExp("(^|\\.)" + c.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                for (p = 0; p < g.length; p++) y = g[p],
                (i || l === y.origType) && (!n || n.guid === y.guid) && (!c || c.test(y.namespace)) && (!r || r === y.selector || r === "**" && y.selector) && (g.splice(p--, 1), y.selector && g.delegateCount--, v.remove && v.remove.call(e, y));
                g.length === 0 && h !== g.length && ((!v.teardown || v.teardown.call(e, c) === !1) && s.removeEvent(e, f, o.handle), delete d[f])
            }
            s.isEmptyObject(d) && (m = o.handle, m && (m.elem = null), s.removeData(e, ["events", "handle"], !0))
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(n, r, i, o) {
            if (!i || i.nodeType !== 3 && i.nodeType !== 8) {
                var u = n.type || n,
                a = [],
                f,
                l,
                c,
                h,
                p,
                d,
                v,
                m,
                g,
                y;
                if (O.test(u + s.event.triggered)) return;
                u.indexOf("!") >= 0 && (u = u.slice(0, -1), l = !0),
                u.indexOf(".") >= 0 && (a = u.split("."), u = a.shift(), a.sort());
                if ((!i || s.event.customEvent[u]) && !s.event.global[u]) return;
                n = typeof n == "object" ? n[s.expando] ? n: new s.Event(u, n) : new s.Event(u),
                n.type = u,
                n.isTrigger = !0,
                n.exclusive = l,
                n.namespace = a.join("."),
                n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + a.join("\\.(?:.*\\.)?") + "(\\.|$)") : null,
                d = u.indexOf(":") < 0 ? "on" + u: "";
                if (!i) {
                    f = s.cache;
                    for (c in f) f[c].events && f[c].events[u] && s.event.trigger(n, r, f[c].handle.elem, !0);
                    return
                }
                n.result = t,
                n.target || (n.target = i),
                r = r != null ? s.makeArray(r) : [],
                r.unshift(n),
                v = s.event.special[u] || {};
                if (v.trigger && v.trigger.apply(i, r) === !1) return;
                g = [[i, v.bindType || u]];
                if (!o && !v.noBubble && !s.isWindow(i)) {
                    y = v.delegateType || u,
                    h = O.test(y + u) ? i: i.parentNode,
                    p = null;
                    for (; h; h = h.parentNode) g.push([h, y]),
                    p = h;
                    p && p === i.ownerDocument && g.push([p.defaultView || p.parentWindow || e, y])
                }
                for (c = 0; c < g.length && !n.isPropagationStopped(); c++) h = g[c][0],
                n.type = g[c][1],
                m = (s._data(h, "events") || {})[n.type] && s._data(h, "handle"),
                m && m.apply(h, r),
                m = d && h[d],
                m && s.acceptData(h) && m.apply(h, r) === !1 && n.preventDefault();
                return n.type = u,
                !o && !n.isDefaultPrevented() && (!v._default || v._default.apply(i.ownerDocument, r) === !1) && (u !== "click" || !s.nodeName(i, "a")) && s.acceptData(i) && d && i[u] && (u !== "focus" && u !== "blur" || n.target.offsetWidth !== 0) && !s.isWindow(i) && (p = i[d], p && (i[d] = null), s.event.triggered = u, i[u](), s.event.triggered = t, p && (i[d] = p)),
                n.result
            }
            return
        },
        dispatch: function(n) {
            n = s.event.fix(n || e.event);
            var r = (s._data(this, "events") || {})[n.type] || [],
            i = r.delegateCount,
            o = [].slice.call(arguments, 0),
            u = !n.exclusive && !n.namespace,
            a = s.event.special[n.type] || {},
            f = [],
            l,
            c,
            h,
            p,
            d,
            v,
            m,
            g,
            y,
            b,
            w;
            o[0] = n,
            n.delegateTarget = this;
            if (a.preDispatch && a.preDispatch.call(this, n) === !1) return;
            if (i && (!n.button || n.type !== "click")) {
                p = s(this),
                p.context = this.ownerDocument || this;
                for (h = n.target; h != this; h = h.parentNode || this) if (h.disabled !== !0) {
                    v = {},
                    g = [],
                    p[0] = h;
                    for (l = 0; l < i; l++) y = r[l],
                    b = y.selector,
                    v[b] === t && (v[b] = y.quick ? D(h, y.quick) : p.is(b)),
                    v[b] && g.push(y);
                    g.length && f.push({
                        elem: h,
                        matches: g
                    })
                }
            }
            r.length > i && f.push({
                elem: this,
                matches: r.slice(i)
            });
            for (l = 0; l < f.length && !n.isPropagationStopped(); l++) {
                m = f[l],
                n.currentTarget = m.elem;
                for (c = 0; c < m.matches.length && !n.isImmediatePropagationStopped(); c++) {
                    y = m.matches[c];
                    if (u || !n.namespace && !y.namespace || n.namespace_re && n.namespace_re.test(y.namespace)) n.data = y.data,
                    n.handleObj = y,
                    d = ((s.event.special[y.origType] || {}).handle || y.handler).apply(m.elem, o),
                    d !== t && (n.result = d, d === !1 && (n.preventDefault(), n.stopPropagation()))
                }
            }
            return a.postDispatch && a.postDispatch.call(this, n),
            n.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode: t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, r) {
                var i, s, o, u = r.button,
                a = r.fromElement;
                return e.pageX == null && r.clientX != null && (i = e.target.ownerDocument || n, s = i.documentElement, o = i.body, e.pageX = r.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = r.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)),
                !e.relatedTarget && a && (e.relatedTarget = a === e.target ? r.toElement: a),
                !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[s.expando]) return e;
            var r, i, o = e,
            u = s.event.fixHooks[e.type] || {},
            a = u.props ? this.props.concat(u.props) : this.props;
            e = s.Event(o);
            for (r = a.length; r;) i = a[--r],
            e[i] = o[i];
            return e.target || (e.target = o.srcElement || n),
            e.target.nodeType === 3 && (e.target = e.target.parentNode),
            e.metaKey === t && (e.metaKey = e.ctrlKey),
            u.filter ? u.filter(e, o) : e
        },
        special: {
            ready: {
                setup: s.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(e, t, n) {
                    s.isWindow(this) && (this.onbeforeunload = n)
                },
                teardown: function(e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = s.extend(new s.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? s.event.trigger(i, null, t) : s.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    s.event.handle = s.event.dispatch,
    s.removeEvent = n.removeEventListener ?
    function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }: function(e, t, n) {
        e.detachEvent && e.detachEvent("on" + t, n)
    },
    s.Event = function(e, t) {
        if (! (this instanceof s.Event)) return new s.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? B: H) : this.type = e,
        t && s.extend(this, t),
        this.timeStamp = e && e.timeStamp || s.now(),
        this[s.expando] = !0
    },
    s.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = B;
            var e = this.originalEvent;
            if (!e) return;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        },
        stopPropagation: function() {
            this.isPropagationStopped = B;
            var e = this.originalEvent;
            if (!e) return;
            e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = B,
            this.stopPropagation()
        },
        isDefaultPrevented: H,
        isPropagationStopped: H,
        isImmediatePropagationStopped: H
    },
    s.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(e, t) {
        s.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n = this,
                r = e.relatedTarget,
                i = e.handleObj,
                o = i.selector,
                u;
                if (!r || r !== n && !s.contains(n, r)) e.type = i.origType,
                u = i.handler.apply(this, arguments),
                e.type = t;
                return u
            }
        }
    }),
    s.support.submitBubbles || (s.event.special.submit = {
        setup: function() {
            if (s.nodeName(this, "form")) return ! 1;
            s.event.add(this, "click._submit keypress._submit",
            function(e) {
                var n = e.target,
                r = s.nodeName(n, "input") || s.nodeName(n, "button") ? n.form: t;
                r && !r._submit_attached && (s.event.add(r, "submit._submit",
                function(e) {
                    e._submit_bubble = !0
                }), r._submit_attached = !0)
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && s.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            if (s.nodeName(this, "form")) return ! 1;
            s.event.remove(this, "._submit")
        }
    }),
    s.support.changeBubbles || (s.event.special.change = {
        setup: function() {
            if (N.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") s.event.add(this, "propertychange._change",
                function(e) {
                    e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }),
                s.event.add(this, "click._change",
                function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1, s.event.simulate("change", this, e, !0))
                });
                return ! 1
            }
            s.event.add(this, "beforeactivate._change",
            function(e) {
                var t = e.target;
                N.test(t.nodeName) && !t._change_attached && (s.event.add(t, "change._change",
                function(e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && s.event.simulate("change", this.parentNode, e, !0)
                }), t._change_attached = !0)
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return s.event.remove(this, "._change"),
            N.test(this.nodeName)
        }
    }),
    s.support.focusinBubbles || s.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(e, t) {
        var r = 0,
        i = function(e) {
            s.event.simulate(t, e.target, s.event.fix(e), !0)
        };
        s.event.special[t] = {
            setup: function() {
                r++===0 && n.addEventListener(e, i, !0)
            },
            teardown: function() {--r === 0 && n.removeEventListener(e, i, !0)
            }
        }
    }),
    s.fn.extend({
        on: function(e, n, r, i, o) {
            var u, a;
            if (typeof e == "object") {
                typeof n != "string" && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this
            }
            r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
            if (i === !1) i = H;
            else if (!i) return this;
            return o === 1 && (u = i, i = function(e) {
                return s().off(e),
                u.apply(this, arguments)
            },
            i.guid = u.guid || (u.guid = s.guid++)),
            this.each(function() {
                s.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            if (e && e.preventDefault && e.handleObj) {
                var i = e.handleObj;
                return s(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace: i.origType, i.selector, i.handler),
                this
            }
            if (typeof e == "object") {
                for (var o in e) this.off(o, n, e[o]);
                return this
            }
            if (n === !1 || typeof n == "function") r = n,
            n = t;
            return r === !1 && (r = H),
            this.each(function() {
                s.event.remove(this, e, r, n)
            })
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        live: function(e, t, n) {
            return s(this.context).on(e, this.selector, t, n),
            this
        },
        die: function(e, t) {
            return s(this.context).off(e, this.selector || "**", t),
            this
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return arguments.length == 1 ? this.off(e, "**") : this.off(t, e, n)
        },
        trigger: function(e, t) {
            return this.each(function() {
                s.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            if (this[0]) return s.event.trigger(e, t, this[0], !0)
        },
        toggle: function(e) {
            var t = arguments,
            n = e.guid || s.guid++,
            r = 0,
            i = function(n) {
                var i = (s._data(this, "lastToggle" + e.guid) || 0) % r;
                return s._data(this, "lastToggle" + e.guid, i + 1),
                n.preventDefault(),
                t[i].apply(this, arguments) || !1
            };
            i.guid = n;
            while (r < t.length) t[r++].guid = n;
            return this.click(i)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    s.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(e, t) {
        s.fn[t] = function(e, n) {
            return n == null && (n = e, e = null),
            arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        },
        s.attrFn && (s.attrFn[t] = !0),
        L.test(t) && (s.event.fixHooks[t] = s.event.keyHooks),
        A.test(t) && (s.event.fixHooks[t] = s.event.mouseHooks)
    }),
    function() {
        function S(e, t, n, i, s, o) {
            for (var u = 0,
            a = i.length; u < a; u++) {
                var f = i[u];
                if (f) {
                    var l = !1;
                    f = f[e];
                    while (f) {
                        if (f[r] === n) {
                            l = i[f.sizset];
                            break
                        }
                        f.nodeType === 1 && !o && (f[r] = n, f.sizset = u);
                        if (f.nodeName.toLowerCase() === t) {
                            l = f;
                            break
                        }
                        f = f[e]
                    }
                    i[u] = l
                }
            }
        }
        function x(e, t, n, i, s, o) {
            for (var u = 0,
            a = i.length; u < a; u++) {
                var f = i[u];
                if (f) {
                    var l = !1;
                    f = f[e];
                    while (f) {
                        if (f[r] === n) {
                            l = i[f.sizset];
                            break
                        }
                        if (f.nodeType === 1) {
                            o || (f[r] = n, f.sizset = u);
                            if (typeof t != "string") {
                                if (f === t) {
                                    l = !0;
                                    break
                                }
                            } else if (h.filter(t, [f]).length > 0) {
                                l = f;
                                break
                            }
                        }
                        f = f[e]
                    }
                    i[u] = l
                }
            }
        }
        var e = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        r = "sizcache" + (Math.random() + "").replace(".", ""),
        i = 0,
        o = Object.prototype.toString,
        u = !1,
        a = !0,
        f = /\\/g,
        l = /\r\n/g,
        c = /\W/; [0, 0].sort(function() {
            return a = !1,
            0
        });
        var h = function(t, r, i, s) {
            i = i || [],
            r = r || n;
            var u = r;
            if (r.nodeType !== 1 && r.nodeType !== 9) return [];
            if (!t || typeof t != "string") return i;
            var a, f, l, c, p, m, g, b, w = !0,
            E = h.isXML(r),
            S = [],
            x = t;
            do {
                e.exec(""), a = e.exec(x);
                if (a) {
                    x = a[3],
                    S.push(a[1]);
                    if (a[2]) {
                        c = a[3];
                        break
                    }
                }
            } while ( a );
            if (S.length > 1 && v.exec(t)) if (S.length === 2 && d.relative[S[0]]) f = T(S[0] + S[1], r, s);
            else {
                f = d.relative[S[0]] ? [r] : h(S.shift(), r);
                while (S.length) t = S.shift(),
                d.relative[t] && (t += S.shift()),
                f = T(t, f, s)
            } else { ! s && S.length > 1 && r.nodeType === 9 && !E && d.match.ID.test(S[0]) && !d.match.ID.test(S[S.length - 1]) && (p = h.find(S.shift(), r, E), r = p.expr ? h.filter(p.expr, p.set)[0] : p.set[0]);
                if (r) {
                    p = s ? {
                        expr: S.pop(),
                        set: y(s)
                    }: h.find(S.pop(), S.length !== 1 || S[0] !== "~" && S[0] !== "+" || !r.parentNode ? r: r.parentNode, E),
                    f = p.expr ? h.filter(p.expr, p.set) : p.set,
                    S.length > 0 ? l = y(f) : w = !1;
                    while (S.length) m = S.pop(),
                    g = m,
                    d.relative[m] ? g = S.pop() : m = "",
                    g == null && (g = r),
                    d.relative[m](l, g, E)
                } else l = S = []
            }
            l || (l = f),
            l || h.error(m || t);
            if (o.call(l) === "[object Array]") if (!w) i.push.apply(i, l);
            else if (r && r.nodeType === 1) for (b = 0; l[b] != null; b++) l[b] && (l[b] === !0 || l[b].nodeType === 1 && h.contains(r, l[b])) && i.push(f[b]);
            else for (b = 0; l[b] != null; b++) l[b] && l[b].nodeType === 1 && i.push(f[b]);
            else y(l, i);
            return c && (h(c, u, i, s), h.uniqueSort(i)),
            i
        };
        h.uniqueSort = function(e) {
            if (w) {
                u = a,
                e.sort(w);
                if (u) for (var t = 1; t < e.length; t++) e[t] === e[t - 1] && e.splice(t--, 1)
            }
            return e
        },
        h.matches = function(e, t) {
            return h(e, null, null, t)
        },
        h.matchesSelector = function(e, t) {
            return h(t, null, null, [e]).length > 0
        },
        h.find = function(e, t, n) {
            var r, i, s, o, u, a;
            if (!e) return [];
            for (i = 0, s = d.order.length; i < s; i++) {
                u = d.order[i];
                if (o = d.leftMatch[u].exec(e)) {
                    a = o[1],
                    o.splice(1, 1);
                    if (a.substr(a.length - 1) !== "\\") {
                        o[1] = (o[1] || "").replace(f, ""),
                        r = d.find[u](o, t, n);
                        if (r != null) {
                            e = e.replace(d.match[u], "");
                            break
                        }
                    }
                }
            }
            return r || (r = typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName("*") : []),
            {
                set: r,
                expr: e
            }
        },
        h.filter = function(e, n, r, i) {
            var s, o, u, a, f, l, c, p, v, m = e,
            g = [],
            y = n,
            b = n && n[0] && h.isXML(n[0]);
            while (e && n.length) {
                for (u in d.filter) if ((s = d.leftMatch[u].exec(e)) != null && s[2]) {
                    l = d.filter[u],
                    c = s[1],
                    o = !1,
                    s.splice(1, 1);
                    if (c.substr(c.length - 1) === "\\") continue;
                    y === g && (g = []);
                    if (d.preFilter[u]) {
                        s = d.preFilter[u](s, y, r, g, i, b);
                        if (!s) o = a = !0;
                        else if (s === !0) continue
                    }
                    if (s) for (p = 0; (f = y[p]) != null; p++) f && (a = l(f, s, p, y), v = i ^ a, r && a != null ? v ? o = !0 : y[p] = !1 : v && (g.push(f), o = !0));
                    if (a !== t) {
                        r || (y = g),
                        e = e.replace(d.match[u], "");
                        if (!o) return [];
                        break
                    }
                }
                if (e === m) {
                    if (o != null) break;
                    h.error(e)
                }
                m = e
            }
            return y
        },
        h.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        };
        var p = h.getText = function(e) {
            var t, n, r = e.nodeType,
            i = "";
            if (r) {
                if (r === 1 || r === 9 || r === 11) {
                    if (typeof e.textContent == "string") return e.textContent;
                    if (typeof e.innerText == "string") return e.innerText.replace(l, "");
                    for (e = e.firstChild; e; e = e.nextSibling) i += p(e)
                } else if (r === 3 || r === 4) return e.nodeValue
            } else for (t = 0; n = e[t]; t++) n.nodeType !== 8 && (i += p(n));
            return i
        },
        d = h.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function(e) {
                    return e.getAttribute("href")
                },
                type: function(e) {
                    return e.getAttribute("type")
                }
            },
            relative: {
                "+": function(e, t) {
                    var n = typeof t == "string",
                    r = n && !c.test(t),
                    i = n && !r;
                    r && (t = t.toLowerCase());
                    for (var s = 0,
                    o = e.length,
                    u; s < o; s++) if (u = e[s]) {
                        while ((u = u.previousSibling) && u.nodeType !== 1);
                        e[s] = i || u && u.nodeName.toLowerCase() === t ? u || !1 : u === t
                    }
                    i && h.filter(t, e, !0)
                },
                ">": function(e, t) {
                    var n, r = typeof t == "string",
                    i = 0,
                    s = e.length;
                    if (r && !c.test(t)) {
                        t = t.toLowerCase();
                        for (; i < s; i++) {
                            n = e[i];
                            if (n) {
                                var o = n.parentNode;
                                e[i] = o.nodeName.toLowerCase() === t ? o: !1
                            }
                        }
                    } else {
                        for (; i < s; i++) n = e[i],
                        n && (e[i] = r ? n.parentNode: n.parentNode === t);
                        r && h.filter(t, e, !0)
                    }
                },
                "": function(e, t, n) {
                    var r, s = i++,
                    o = x;
                    typeof t == "string" && !c.test(t) && (t = t.toLowerCase(), r = t, o = S),
                    o("parentNode", t, s, e, r, n)
                },
                "~": function(e, t, n) {
                    var r, s = i++,
                    o = x;
                    typeof t == "string" && !c.test(t) && (t = t.toLowerCase(), r = t, o = S),
                    o("previousSibling", t, s, e, r, n)
                }
            },
            find: {
                ID: function(e, t, n) {
                    if (typeof t.getElementById != "undefined" && !n) {
                        var r = t.getElementById(e[1]);
                        return r && r.parentNode ? [r] : []
                    }
                },
                NAME: function(e, t) {
                    if (typeof t.getElementsByName != "undefined") {
                        var n = [],
                        r = t.getElementsByName(e[1]);
                        for (var i = 0,
                        s = r.length; i < s; i++) r[i].getAttribute("name") === e[1] && n.push(r[i]);
                        return n.length === 0 ? null: n
                    }
                },
                TAG: function(e, t) {
                    if (typeof t.getElementsByTagName != "undefined") return t.getElementsByTagName(e[1])
                }
            },
            preFilter: {
                CLASS: function(e, t, n, r, i, s) {
                    e = " " + e[1].replace(f, "") + " ";
                    if (s) return e;
                    for (var o = 0,
                    u; (u = t[o]) != null; o++) u && (i ^ (u.className && (" " + u.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || r.push(u) : n && (t[o] = !1));
                    return ! 1
                },
                ID: function(e) {
                    return e[1].replace(f, "")
                },
                TAG: function(e, t) {
                    return e[1].replace(f, "").toLowerCase()
                },
                CHILD: function(e) {
                    if (e[1] === "nth") {
                        e[2] || h.error(e[0]),
                        e[2] = e[2].replace(/^\+|\s*/g, "");
                        var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2] === "even" && "2n" || e[2] === "odd" && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                        e[2] = t[1] + (t[2] || 1) - 0,
                        e[3] = t[3] - 0
                    } else e[2] && h.error(e[0]);
                    return e[0] = i++,
                    e
                },
                ATTR: function(e, t, n, r, i, s) {
                    var o = e[1] = e[1].replace(f, "");
                    return ! s && d.attrMap[o] && (e[1] = d.attrMap[o]),
                    e[4] = (e[4] || e[5] || "").replace(f, ""),
                    e[2] === "~=" && (e[4] = " " + e[4] + " "),
                    e
                },
                PSEUDO: function(t, n, r, i, s) {
                    if (t[1] === "not") {
                        if (! ((e.exec(t[3]) || "").length > 1 || /^\w/.test(t[3]))) {
                            var o = h.filter(t[3], n, r, !0 ^ s);
                            return r || i.push.apply(i, o),
                            !1
                        }
                        t[3] = h(t[3], null, null, n)
                    } else if (d.match.POS.test(t[0]) || d.match.CHILD.test(t[0])) return ! 0;
                    return t
                },
                POS: function(e) {
                    return e.unshift(!0),
                    e
                }
            },
            filters: {
                enabled: function(e) {
                    return e.disabled === !1 && e.type !== "hidden"
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    return e.checked === !0
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                parent: function(e) {
                    return !! e.firstChild
                },
                empty: function(e) {
                    return ! e.firstChild
                },
                has: function(e, t, n) {
                    return !! h(n[3], e).length
                },
                header: function(e) {
                    return /h\d/i.test(e.nodeName)
                },
                text: function(e) {
                    var t = e.getAttribute("type"),
                    n = e.type;
                    return e.nodeName.toLowerCase() === "input" && "text" === n && (t === n || t === null)
                },
                radio: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "radio" === e.type
                },
                checkbox: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "checkbox" === e.type
                },
                file: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "file" === e.type
                },
                password: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "password" === e.type
                },
                submit: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return (t === "input" || t === "button") && "submit" === e.type
                },
                image: function(e) {
                    return e.nodeName.toLowerCase() === "input" && "image" === e.type
                },
                reset: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return (t === "input" || t === "button") && "reset" === e.type
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && "button" === e.type || t === "button"
                },
                input: function(e) {
                    return /input|select|textarea|button/i.test(e.nodeName)
                },
                focus: function(e) {
                    return e === e.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function(e, t) {
                    return t === 0
                },
                last: function(e, t, n, r) {
                    return t === r.length - 1
                },
                even: function(e, t) {
                    return t % 2 === 0
                },
                odd: function(e, t) {
                    return t % 2 === 1
                },
                lt: function(e, t, n) {
                    return t < n[3] - 0
                },
                gt: function(e, t, n) {
                    return t > n[3] - 0
                },
                nth: function(e, t, n) {
                    return n[3] - 0 === t
                },
                eq: function(e, t, n) {
                    return n[3] - 0 === t
                }
            },
            filter: {
                PSEUDO: function(e, t, n, r) {
                    var i = t[1],
                    s = d.filters[i];
                    if (s) return s(e, n, t, r);
                    if (i === "contains") return (e.textContent || e.innerText || p([e]) || "").indexOf(t[3]) >= 0;
                    if (i === "not") {
                        var o = t[3];
                        for (var u = 0,
                        a = o.length; u < a; u++) if (o[u] === e) return ! 1;
                        return ! 0
                    }
                    h.error(i)
                },
                CHILD: function(e, t) {
                    var n, i, s, o, u, a, f, l = t[1],
                    c = e;
                    switch (l) {
                    case "only":
                    case "first":
                        while (c = c.previousSibling) if (c.nodeType === 1) return ! 1;
                        if (l === "first") return ! 0;
                        c = e;
                    case "last":
                        while (c = c.nextSibling) if (c.nodeType === 1) return ! 1;
                        return ! 0;
                    case "nth":
                        n = t[2],
                        i = t[3];
                        if (n === 1 && i === 0) return ! 0;
                        s = t[0],
                        o = e.parentNode;
                        if (o && (o[r] !== s || !e.nodeIndex)) {
                            a = 0;
                            for (c = o.firstChild; c; c = c.nextSibling) c.nodeType === 1 && (c.nodeIndex = ++a);
                            o[r] = s
                        }
                        return f = e.nodeIndex - i,
                        n === 0 ? f === 0 : f % n === 0 && f / n >= 0
                    }
                },
                ID: function(e, t) {
                    return e.nodeType === 1 && e.getAttribute("id") === t
                },
                TAG: function(e, t) {
                    return t === "*" && e.nodeType === 1 || !!e.nodeName && e.nodeName.toLowerCase() === t
                },
                CLASS: function(e, t) {
                    return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
                },
                ATTR: function(e, t) {
                    var n = t[1],
                    r = h.attr ? h.attr(e, n) : d.attrHandle[n] ? d.attrHandle[n](e) : e[n] != null ? e[n] : e.getAttribute(n),
                    i = r + "",
                    s = t[2],
                    o = t[4];
                    return r == null ? s === "!=": !s && h.attr ? r != null: s === "=" ? i === o: s === "*=" ? i.indexOf(o) >= 0 : s === "~=" ? (" " + i + " ").indexOf(o) >= 0 : o ? s === "!=" ? i !== o: s === "^=" ? i.indexOf(o) === 0 : s === "$=" ? i.substr(i.length - o.length) === o: s === "|=" ? i === o || i.substr(0, o.length + 1) === o + "-": !1 : i && r !== !1
                },
                POS: function(e, t, n, r) {
                    var i = t[2],
                    s = d.setFilters[i];
                    if (s) return s(e, n, t, r)
                }
            }
        },
        v = d.match.POS,
        m = function(e, t) {
            return "\\" + (t - 0 + 1)
        };
        for (var g in d.match) d.match[g] = new RegExp(d.match[g].source + /(?![^\[]*\])(?![^\(]*\))/.source),
        d.leftMatch[g] = new RegExp(/(^(?:.|\r|\n)*?)/.source + d.match[g].source.replace(/\\(\d+)/g, m));
        d.match.globalPOS = v;
        var y = function(e, t) {
            return e = Array.prototype.slice.call(e, 0),
            t ? (t.push.apply(t, e), t) : e
        };
        try {
            Array.prototype.slice.call(n.documentElement.childNodes, 0)[0].nodeType
        } catch(b) {
            y = function(e, t) {
                var n = 0,
                r = t || [];
                if (o.call(e) === "[object Array]") Array.prototype.push.apply(r, e);
                else if (typeof e.length == "number") for (var i = e.length; n < i; n++) r.push(e[n]);
                else for (; e[n]; n++) r.push(e[n]);
                return r
            }
        }
        var w, E;
        n.documentElement.compareDocumentPosition ? w = function(e, t) {
            return e === t ? (u = !0, 0) : !e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition ? -1 : 1 : e.compareDocumentPosition(t) & 4 ? -1 : 1
        }: (w = function(e, t) {
            if (e === t) return u = !0,
            0;
            if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
            var n, r, i = [],
            s = [],
            o = e.parentNode,
            a = t.parentNode,
            f = o;
            if (o === a) return E(e, t);
            if (!o) return - 1;
            if (!a) return 1;
            while (f) i.unshift(f),
            f = f.parentNode;
            f = a;
            while (f) s.unshift(f),
            f = f.parentNode;
            n = i.length,
            r = s.length;
            for (var l = 0; l < n && l < r; l++) if (i[l] !== s[l]) return E(i[l], s[l]);
            return l === n ? E(e, s[l], -1) : E(i[l], t, 1)
        },
        E = function(e, t, n) {
            if (e === t) return n;
            var r = e.nextSibling;
            while (r) {
                if (r === t) return - 1;
                r = r.nextSibling
            }
            return 1
        }),
        function() {
            var e = n.createElement("div"),
            r = "script" + (new Date).getTime(),
            i = n.documentElement;
            e.innerHTML = "<a name='" + r + "'/>",
            i.insertBefore(e, i.firstChild),
            n.getElementById(r) && (d.find.ID = function(e, n, r) {
                if (typeof n.getElementById != "undefined" && !r) {
                    var i = n.getElementById(e[1]);
                    return i ? i.id === e[1] || typeof i.getAttributeNode != "undefined" && i.getAttributeNode("id").nodeValue === e[1] ? [i] : t: []
                }
            },
            d.filter.ID = function(e, t) {
                var n = typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id");
                return e.nodeType === 1 && n && n.nodeValue === t
            }),
            i.removeChild(e),
            i = e = null
        } (),
        function() {
            var e = n.createElement("div");
            e.appendChild(n.createComment("")),
            e.getElementsByTagName("*").length > 0 && (d.find.TAG = function(e, t) {
                var n = t.getElementsByTagName(e[1]);
                if (e[1] === "*") {
                    var r = [];
                    for (var i = 0; n[i]; i++) n[i].nodeType === 1 && r.push(n[i]);
                    n = r
                }
                return n
            }),
            e.innerHTML = "<a href='#'></a>",
            e.firstChild && typeof e.firstChild.getAttribute != "undefined" && e.firstChild.getAttribute("href") !== "#" && (d.attrHandle.href = function(e) {
                return e.getAttribute("href", 2)
            }),
            e = null
        } (),
        n.querySelectorAll &&
        function() {
            var e = h,
            t = n.createElement("div"),
            r = "__sizzle__";
            t.innerHTML = "<p class='TEST'></p>";
            if (t.querySelectorAll && t.querySelectorAll(".TEST").length === 0) return;
            h = function(t, i, s, o) {
                i = i || n;
                if (!o && !h.isXML(i)) {
                    var u = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                    if (u && (i.nodeType === 1 || i.nodeType === 9)) {
                        if (u[1]) return y(i.getElementsByTagName(t), s);
                        if (u[2] && d.find.CLASS && i.getElementsByClassName) return y(i.getElementsByClassName(u[2]), s)
                    }
                    if (i.nodeType === 9) {
                        if (t === "body" && i.body) return y([i.body], s);
                        if (u && u[3]) {
                            var a = i.getElementById(u[3]);
                            if (!a || !a.parentNode) return y([], s);
                            if (a.id === u[3]) return y([a], s)
                        }
                        try {
                            return y(i.querySelectorAll(t), s)
                        } catch(f) {}
                    } else if (i.nodeType === 1 && i.nodeName.toLowerCase() !== "object") {
                        var l = i,
                        c = i.getAttribute("id"),
                        p = c || r,
                        v = i.parentNode,
                        m = /^\s*[+~]/.test(t);
                        c ? p = p.replace(/'/g, "\\$&") : i.setAttribute("id", p),
                        m && v && (i = i.parentNode);
                        try {
                            if (!m || v) return y(i.querySelectorAll("[id='" + p + "'] " + t), s)
                        } catch(g) {} finally {
                            c || l.removeAttribute("id")
                        }
                    }
                }
                return e(t, i, s, o)
            };
            for (var i in e) h[i] = e[i];
            t = null
        } (),
        function() {
            var e = n.documentElement,
            t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
            if (t) {
                var r = !t.call(n.createElement("div"), "div"),
                i = !1;
                try {
                    t.call(n.documentElement, "[test!='']:sizzle")
                } catch(s) {
                    i = !0
                }
                h.matchesSelector = function(e, n) {
                    n = n.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!h.isXML(e)) try {
                        if (i || !d.match.PSEUDO.test(n) && !/!=/.test(n)) {
                            var s = t.call(e, n);
                            if (s || !r || e.document && e.document.nodeType !== 11) return s
                        }
                    } catch(o) {}
                    return h(n, null, null, [e]).length > 0
                }
            }
        } (),
        function() {
            var e = n.createElement("div");
            e.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!e.getElementsByClassName || e.getElementsByClassName("e").length === 0) return;
            e.lastChild.className = "e";
            if (e.getElementsByClassName("e").length === 1) return;
            d.order.splice(1, 0, "CLASS"),
            d.find.CLASS = function(e, t, n) {
                if (typeof t.getElementsByClassName != "undefined" && !n) return t.getElementsByClassName(e[1])
            },
            e = null
        } (),
        n.documentElement.contains ? h.contains = function(e, t) {
            return e !== t && (e.contains ? e.contains(t) : !0)
        }: n.documentElement.compareDocumentPosition ? h.contains = function(e, t) {
            return !! (e.compareDocumentPosition(t) & 16)
        }: h.contains = function() {
            return ! 1
        },
        h.isXML = function(e) {
            var t = (e ? e.ownerDocument || e: 0).documentElement;
            return t ? t.nodeName !== "HTML": !1
        };
        var T = function(e, t, n) {
            var r, i = [],
            s = "",
            o = t.nodeType ? [t] : t;
            while (r = d.match.PSEUDO.exec(e)) s += r[0],
            e = e.replace(d.match.PSEUDO, "");
            e = d.relative[e] ? e + "*": e;
            for (var u = 0,
            a = o.length; u < a; u++) h(e, o[u], i, n);
            return h.filter(s, i)
        };
        h.attr = s.attr,
        h.selectors.attrMap = {},
        s.find = h,
        s.expr = h.selectors,
        s.expr[":"] = s.expr.filters,
        s.unique = h.uniqueSort,
        s.text = h.getText,
        s.isXMLDoc = h.isXML,
        s.contains = h.contains
    } ();
    var j = /Until$/,
    F = /^(?:parents|prevUntil|prevAll)/,
    I = /,/,
    q = /^.[^:#\[\.,]*$/,
    R = Array.prototype.slice,
    U = s.expr.match.globalPOS,
    z = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    s.fn.extend({
        find: function(e) {
            var t = this,
            n, r;
            if (typeof e != "string") return s(e).filter(function() {
                for (n = 0, r = t.length; n < r; n++) if (s.contains(t[n], this)) return ! 0
            });
            var i = this.pushStack("", "find", e),
            o,
            u,
            a;
            for (n = 0, r = this.length; n < r; n++) {
                o = i.length,
                s.find(e, this[n], i);
                if (n > 0) for (u = o; u < i.length; u++) for (a = 0; a < o; a++) if (i[a] === i[u]) {
                    i.splice(u--, 1);
                    break
                }
            }
            return i
        },
        has: function(e) {
            var t = s(e);
            return this.filter(function() {
                for (var e = 0,
                n = t.length; e < n; e++) if (s.contains(this, t[e])) return ! 0
            })
        },
        not: function(e) {
            return this.pushStack(X(this, e, !1), "not", e)
        },
        filter: function(e) {
            return this.pushStack(X(this, e, !0), "filter", e)
        },
        is: function(e) {
            return !! e && (typeof e == "string" ? U.test(e) ? s(e, this.context).index(this[0]) >= 0 : s.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            var n = [],
            r,
            i,
            o = this[0];
            if (s.isArray(e)) {
                var u = 1;
                while (o && o.ownerDocument && o !== t) {
                    for (r = 0; r < e.length; r++) s(o).is(e[r]) && n.push({
                        selector: e[r],
                        elem: o,
                        level: u
                    });
                    o = o.parentNode,
                    u++
                }
                return n
            }
            var a = U.test(e) || typeof e != "string" ? s(e, t || this.context) : 0;
            for (r = 0, i = this.length; r < i; r++) {
                o = this[r];
                while (o) {
                    if (a ? a.index(o) > -1 : s.find.matchesSelector(o, e)) {
                        n.push(o);
                        break
                    }
                    o = o.parentNode;
                    if (!o || !o.ownerDocument || o === t || o.nodeType === 11) break
                }
            }
            return n = n.length > 1 ? s.unique(n) : n,
            this.pushStack(n, "closest", e)
        },
        index: function(e) {
            return e ? typeof e == "string" ? s.inArray(this[0], s(e)) : s.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length: -1
        },
        add: function(e, t) {
            var n = typeof e == "string" ? s(e, t) : s.makeArray(e && e.nodeType ? [e] : e),
            r = s.merge(this.get(), n);
            return this.pushStack(W(n[0]) || W(r[0]) ? r: s.unique(r))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }),
    s.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t: null
        },
        parents: function(e) {
            return s.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return s.dir(e, "parentNode", n)
        },
        next: function(e) {
            return s.nth(e, 2, "nextSibling")
        },
        prev: function(e) {
            return s.nth(e, 2, "previousSibling")
        },
        nextAll: function(e) {
            return s.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return s.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return s.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return s.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return s.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return s.sibling(e.firstChild)
        },
        contents: function(e) {
            return s.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: s.makeArray(e.childNodes)
        }
    },
    function(e, t) {
        s.fn[e] = function(n, r) {
            var i = s.map(this, t, n);
            return j.test(e) || (r = n),
            r && typeof r == "string" && (i = s.filter(r, i)),
            i = this.length > 1 && !z[e] ? s.unique(i) : i,
            (this.length > 1 || I.test(r)) && F.test(e) && (i = i.reverse()),
            this.pushStack(i, e, R.call(arguments).join(","))
        }
    }),
    s.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"),
            t.length === 1 ? s.find.matchesSelector(t[0], e) ? [t[0]] : [] : s.find.matches(e, t)
        },
        dir: function(e, n, r) {
            var i = [],
            o = e[n];
            while (o && o.nodeType !== 9 && (r === t || o.nodeType !== 1 || !s(o).is(r))) o.nodeType === 1 && i.push(o),
            o = o[n];
            return i
        },
        nth: function(e, t, n, r) {
            t = t || 1;
            var i = 0;
            for (; e; e = e[n]) if (e.nodeType === 1 && ++i === t) break;
            return e
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var $ = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    J = / jQuery\d+="(?:\d+|null)"/g,
    K = /^\s+/,
    Q = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    G = /<([\w:]+)/,
    Y = /<tbody/i,
    Z = /<|&#?\w+;/,
    et = /<(?:script|style)/i,
    tt = /<(?:script|object|embed|option|style)/i,
    nt = new RegExp("<(?:" + $ + ")[\\s/>]", "i"),
    rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    it = /\/(java|ecma)script/i,
    st = /^\s*<!(?:\[CDATA\[|\-\-)/,
    ot = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    },
    ut = V(n);
    ot.optgroup = ot.option,
    ot.tbody = ot.tfoot = ot.colgroup = ot.caption = ot.thead,
    ot.th = ot.td,
    s.support.htmlSerialize || (ot._default = [1, "div<div>", "</div>"]),
    s.fn.extend({
        text: function(e) {
            return s.access(this,
            function(e) {
                return e === t ? s.text(this) : this.empty().append((this[0] && this[0].ownerDocument || n).createTextNode(e))
            },
            null, e, arguments.length)
        },
        wrapAll: function(e) {
            if (s.isFunction(e)) return this.each(function(t) {
                s(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = s(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return s.isFunction(e) ? this.each(function(t) {
                s(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = s(this),
                n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = s.isFunction(e);
            return this.each(function(n) {
                s(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                s.nodeName(this, "body") || s(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0,
            function(e) {
                this.nodeType === 1 && this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0,
            function(e) {
                this.nodeType === 1 && this.insertBefore(e, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
            function(e) {
                this.parentNode.insertBefore(e, this)
            });
            if (arguments.length) {
                var e = s.clean(arguments);
                return e.push.apply(e, this.toArray()),
                this.pushStack(e, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
            function(e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            });
            if (arguments.length) {
                var e = this.pushStack(this, "after", arguments);
                return e.push.apply(e, s.clean(arguments)),
                e
            }
        },
        remove: function(e, t) {
            for (var n = 0,
            r; (r = this[n]) != null; n++) if (!e || s.filter(e, [r]).length) ! t && r.nodeType === 1 && (s.cleanData(r.getElementsByTagName("*")), s.cleanData([r])),
            r.parentNode && r.parentNode.removeChild(r);
            return this
        },
        empty: function() {
            for (var e = 0,
            t; (t = this[e]) != null; e++) {
                t.nodeType === 1 && s.cleanData(t.getElementsByTagName("*"));
                while (t.firstChild) t.removeChild(t.firstChild)
            }
            return this
        },
        clone: function(e, t) {
            return e = e == null ? !1 : e,
            t = t == null ? e: t,
            this.map(function() {
                return s.clone(this, e, t)
            })
        },
        html: function(e) {
            return s.access(this,
            function(e) {
                var n = this[0] || {},
                r = 0,
                i = this.length;
                if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(J, "") : null;
                if (typeof e == "string" && !et.test(e) && (s.support.leadingWhitespace || !K.test(e)) && !ot[(G.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Q, "<$1></$2>");
                    try {
                        for (; r < i; r++) n = this[r] || {},
                        n.nodeType === 1 && (s.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                        n = 0
                    } catch(o) {}
                }
                n && this.empty().append(e)
            },
            null, e, arguments.length)
        },
        replaceWith: function(e) {
            return this[0] && this[0].parentNode ? s.isFunction(e) ? this.each(function(t) {
                var n = s(this),
                r = n.html();
                n.replaceWith(e.call(this, t, r))
            }) : (typeof e != "string" && (e = s(e).detach()), this.each(function() {
                var t = this.nextSibling,
                n = this.parentNode;
                s(this).remove(),
                t ? s(t).before(e) : s(n).append(e)
            })) : this.length ? this.pushStack(s(s.isFunction(e) ? e() : e), "replaceWith", e) : this
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, r) {
            var i, o, u, a, f = e[0],
            l = [];
            if (!s.support.checkClone && arguments.length === 3 && typeof f == "string" && rt.test(f)) return this.each(function() {
                s(this).domManip(e, n, r, !0)
            });
            if (s.isFunction(f)) return this.each(function(i) {
                var o = s(this);
                e[0] = f.call(this, i, n ? o.html() : t),
                o.domManip(e, n, r)
            });
            if (this[0]) {
                a = f && f.parentNode,
                s.support.parentNode && a && a.nodeType === 11 && a.childNodes.length === this.length ? i = {
                    fragment: a
                }: i = s.buildFragment(e, this, l),
                u = i.fragment,
                u.childNodes.length === 1 ? o = u = u.firstChild: o = u.firstChild;
                if (o) {
                    n = n && s.nodeName(o, "tr");
                    for (var c = 0,
                    h = this.length,
                    p = h - 1; c < h; c++) r.call(n ? at(this[c], o) : this[c], i.cacheable || h > 1 && c < p ? s.clone(u, !0, !0) : u)
                }
                l.length && s.each(l,
                function(e, t) {
                    t.src ? s.ajax({
                        type: "GET",
                        global: !1,
                        url: t.src,
                        async: !1,
                        dataType: "script"
                    }) : s.globalEval((t.text || t.textContent || t.innerHTML || "").replace(st, "/*$0*/")),
                    t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    }),
    s.buildFragment = function(e, t, r) {
        var i, o, u, a, f = e[0];
        return t && t[0] && (a = t[0].ownerDocument || t[0]),
        a.createDocumentFragment || (a = n),
        e.length === 1 && typeof f == "string" && f.length < 512 && a === n && f.charAt(0) === "<" && !tt.test(f) && (s.support.checkClone || !rt.test(f)) && (s.support.html5Clone || !nt.test(f)) && (o = !0, u = s.fragments[f], u && u !== 1 && (i = u)),
        i || (i = a.createDocumentFragment(), s.clean(e, a, i, r)),
        o && (s.fragments[f] = u ? i: 1),
        {
            fragment: i,
            cacheable: o
        }
    },
    s.fragments = {},
    s.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(e, t) {
        s.fn[e] = function(n) {
            var r = [],
            i = s(n),
            o = this.length === 1 && this[0].parentNode;
            if (o && o.nodeType === 11 && o.childNodes.length === 1 && i.length === 1) return i[t](this[0]),
            this;
            for (var u = 0,
            a = i.length; u < a; u++) {
                var f = (u > 0 ? this.clone(!0) : this).get();
                s(i[u])[t](f),
                r = r.concat(f)
            }
            return this.pushStack(r, e, i.selector)
        }
    }),
    s.extend({
        clone: function(e, t, n) {
            var r, i, o, u = s.support.html5Clone || s.isXMLDoc(e) || !nt.test("<" + e.nodeName + ">") ? e.cloneNode(!0) : dt(e);
            if ((!s.support.noCloneEvent || !s.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !s.isXMLDoc(e)) {
                lt(e, u),
                r = ct(e),
                i = ct(u);
                for (o = 0; r[o]; ++o) i[o] && lt(r[o], i[o])
            }
            if (t) {
                ft(e, u);
                if (n) {
                    r = ct(e),
                    i = ct(u);
                    for (o = 0; r[o]; ++o) ft(r[o], i[o])
                }
            }
            return r = i = null,
            u
        },
        clean: function(e, t, r, i) {
            var o, u, a, f = [];
            t = t || n,
            typeof t.createElement == "undefined" && (t = t.ownerDocument || t[0] && t[0].ownerDocument || n);
            for (var l = 0,
            c; (c = e[l]) != null; l++) {
                typeof c == "number" && (c += "");
                if (!c) continue;
                if (typeof c == "string") if (!Z.test(c)) c = t.createTextNode(c);
                else {
                    c = c.replace(Q, "<$1></$2>");
                    var h = (G.exec(c) || ["", ""])[1].toLowerCase(),
                    p = ot[h] || ot._default,
                    d = p[0],
                    v = t.createElement("div"),
                    m = ut.childNodes,
                    g;
                    t === n ? ut.appendChild(v) : V(t).appendChild(v),
                    v.innerHTML = p[1] + c + p[2];
                    while (d--) v = v.lastChild;
                    if (!s.support.tbody) {
                        var y = Y.test(c),
                        b = h === "table" && !y ? v.firstChild && v.firstChild.childNodes: p[1] === "<table>" && !y ? v.childNodes: [];
                        for (a = b.length - 1; a >= 0; --a) s.nodeName(b[a], "tbody") && !b[a].childNodes.length && b[a].parentNode.removeChild(b[a])
                    } ! s.support.leadingWhitespace && K.test(c) && v.insertBefore(t.createTextNode(K.exec(c)[0]), v.firstChild),
                    c = v.childNodes,
                    v && (v.parentNode.removeChild(v), m.length > 0 && (g = m[m.length - 1], g && g.parentNode && g.parentNode.removeChild(g)))
                }
                var w;
                if (!s.support.appendChecked) if (c[0] && typeof(w = c.length) == "number") for (a = 0; a < w; a++) pt(c[a]);
                else pt(c);
                c.nodeType ? f.push(c) : f = s.merge(f, c)
            }
            if (r) {
                o = function(e) {
                    return ! e.type || it.test(e.type)
                };
                for (l = 0; f[l]; l++) {
                    u = f[l];
                    if (i && s.nodeName(u, "script") && (!u.type || it.test(u.type))) i.push(u.parentNode ? u.parentNode.removeChild(u) : u);
                    else {
                        if (u.nodeType === 1) {
                            var E = s.grep(u.getElementsByTagName("script"), o);
                            f.splice.apply(f, [l + 1, 0].concat(E))
                        }
                        r.appendChild(u)
                    }
                }
            }
            return f
        },
        cleanData: function(e) {
            var t, n, r = s.cache,
            i = s.event.special,
            o = s.support.deleteExpando;
            for (var u = 0,
            a; (a = e[u]) != null; u++) {
                if (a.nodeName && s.noData[a.nodeName.toLowerCase()]) continue;
                n = a[s.expando];
                if (n) {
                    t = r[n];
                    if (t && t.events) {
                        for (var f in t.events) i[f] ? s.event.remove(a, f) : s.removeEvent(a, f, t.handle);
                        t.handle && (t.handle.elem = null)
                    }
                    o ? delete a[s.expando] : a.removeAttribute && a.removeAttribute(s.expando),
                    delete r[n]
                }
            }
        }
    });
    var vt = /alpha\([^)]*\)/i,
    mt = /opacity=([^)]*)/,
    gt = /([A-Z]|^ms)/g,
    yt = /^[\-+]?(?:\d*\.)?\d+$/i,
    bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
    wt = /^([\-+])=([\-+.\de]+)/,
    Et = /^margin/,
    St = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    xt = ["Top", "Right", "Bottom", "Left"],
    Tt,
    Nt,
    Ct;
    s.fn.css = function(e, n) {
        return s.access(this,
        function(e, n, r) {
            return r !== t ? s.style(e, n, r) : s.css(e, n)
        },
        e, n, arguments.length > 1)
    },
    s.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Tt(e, "opacity");
                        return n === "" ? "1": n
                    }
                    return e.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": s.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(e, n, r, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
            var o, u, a = s.camelCase(n),
            f = e.style,
            l = s.cssHooks[a];
            n = s.cssProps[a] || a;
            if (r === t) return l && "get" in l && (o = l.get(e, !1, i)) !== t ? o: f[n];
            u = typeof r,
            u === "string" && (o = wt.exec(r)) && (r = +(o[1] + 1) * +o[2] + parseFloat(s.css(e, n)), u = "number");
            if (r == null || u === "number" && isNaN(r)) return;
            u === "number" && !s.cssNumber[a] && (r += "px");
            if (!l || !("set" in l) || (r = l.set(e, r)) !== t) try {
                f[n] = r
            } catch(c) {}
        },
        css: function(e, n, r) {
            var i, o;
            n = s.camelCase(n),
            o = s.cssHooks[n],
            n = s.cssProps[n] || n,
            n === "cssFloat" && (n = "float");
            if (o && "get" in o && (i = o.get(e, !0, r)) !== t) return i;
            if (Tt) return Tt(e, n)
        },
        swap: function(e, t, n) {
            var r = {},
            i, s;
            for (s in t) r[s] = e.style[s],
            e.style[s] = t[s];
            i = n.call(e);
            for (s in t) e.style[s] = r[s];
            return i
        }
    }),
    s.curCSS = s.css,
    n.defaultView && n.defaultView.getComputedStyle && (Nt = function(e, t) {
        var n, r, i, o, u = e.style;
        return t = t.replace(gt, "-$1").toLowerCase(),
        (r = e.ownerDocument.defaultView) && (i = r.getComputedStyle(e, null)) && (n = i.getPropertyValue(t), n === "" && !s.contains(e.ownerDocument.documentElement, e) && (n = s.style(e, t))),
        !s.support.pixelMargin && i && Et.test(t) && bt.test(n) && (o = u.width, u.width = n, n = i.width, u.width = o),
        n
    }),
    n.documentElement.currentStyle && (Ct = function(e, t) {
        var n, r, i, s = e.currentStyle && e.currentStyle[t],
        o = e.style;
        return s == null && o && (i = o[t]) && (s = i),
        bt.test(s) && (n = o.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), o.left = t === "fontSize" ? "1em": s, s = o.pixelLeft + "px", o.left = n, r && (e.runtimeStyle.left = r)),
        s === "" ? "auto": s
    }),
    Tt = Nt || Ct,
    s.each(["height", "width"],
    function(e, t) {
        s.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return e.offsetWidth !== 0 ? kt(e, t, r) : s.swap(e, St,
                function() {
                    return kt(e, t, r)
                })
            },
            set: function(e, t) {
                return yt.test(t) ? t + "px": t
            }
        }
    }),
    s.support.opacity || (s.cssHooks.opacity = {
        get: function(e, t) {
            return mt.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "": t ? "1": ""
        },
        set: function(e, t) {
            var n = e.style,
            r = e.currentStyle,
            i = s.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")": "",
            o = r && r.filter || n.filter || "";
            n.zoom = 1;
            if (t >= 1 && s.trim(o.replace(vt, "")) === "") {
                n.removeAttribute("filter");
                if (r && !r.filter) return
            }
            n.filter = vt.test(o) ? o.replace(vt, i) : o + " " + i
        }
    }),
    s(function() {
        s.support.reliableMarginRight || (s.cssHooks.marginRight = {
            get: function(e, t) {
                return s.swap(e, {
                    display: "inline-block"
                },
                function() {
                    return t ? Tt(e, "margin-right") : e.style.marginRight
                })
            }
        })
    }),
    s.expr && s.expr.filters && (s.expr.filters.hidden = function(e) {
        var t = e.offsetWidth,
        n = e.offsetHeight;
        return t === 0 && n === 0 || !s.support.reliableHiddenOffsets && (e.style && e.style.display || s.css(e, "display")) === "none"
    },
    s.expr.filters.visible = function(e) {
        return ! s.expr.filters.hidden(e)
    }),
    s.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(e, t) {
        s.cssHooks[e + t] = {
            expand: function(n) {
                var r, i = typeof n == "string" ? n.split(" ") : [n],
                s = {};
                for (r = 0; r < 4; r++) s[e + xt[r] + t] = i[r] || i[r - 2] || i[0];
                return s
            }
        }
    });
    var Lt = /%20/g,
    At = /\[\]$/,
    Ot = /\r?\n/g,
    Mt = /#.*$/,
    _t = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
    Dt = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    Pt = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
    Ht = /^(?:GET|HEAD)$/,
    Bt = /^\/\//,
    jt = /\?/,
    Ft = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    It = /^(?:select|textarea)/i,
    qt = /\s+/,
    Rt = /([?&])_=[^&]*/,
    Ut = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
    zt = s.fn.load,
    Wt = {},
    Xt = {},
    Vt, $t, Jt = ["*/"] + ["*"];
    try {
        Vt = i.href
    } catch(Kt) {
        Vt = n.createElement("a"),
        Vt.href = "",
        Vt = Vt.href
    }
    $t = Ut.exec(Vt.toLowerCase()) || [],
    s.fn.extend({
        load: function(e, n, r) {
            if (typeof e != "string" && zt) return zt.apply(this, arguments);
            if (!this.length) return this;
            var i = e.indexOf(" ");
            if (i >= 0) {
                var o = e.slice(i, e.length);
                e = e.slice(0, i)
            }
            var u = "GET";
            n && (s.isFunction(n) ? (r = n, n = t) : typeof n == "object" && (n = s.param(n, s.ajaxSettings.traditional), u = "POST"));
            var a = this;
            return s.ajax({
                url: e,
                type: u,
                dataType: "html",
                data: n,
                complete: function(e, t, n) {
                    n = e.responseText,
                    e.isResolved() && (e.done(function(e) {
                        n = e
                    }), a.html(o ? s("<div>").append(n.replace(Ft, "")).find(o) : n)),
                    r && a.each(r, [n, t, e])
                }
            }),
            this
        },
        serialize: function() {
            return s.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? s.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || It.test(this.nodeName) || Dt.test(this.type))
            }).map(function(e, t) {
                var n = s(this).val();
                return n == null ? null: s.isArray(n) ? s.map(n,
                function(e, n) {
                    return {
                        name: t.name,
                        value: e.replace(Ot, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ot, "\r\n")
                }
            }).get()
        }
    }),
    s.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
    function(e, t) {
        s.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    s.each(["get", "post"],
    function(e, n) {
        s[n] = function(e, r, i, o) {
            return s.isFunction(r) && (o = o || i, i = r, r = t),
            s.ajax({
                type: n,
                url: e,
                data: r,
                success: i,
                dataType: o
            })
        }
    }),
    s.extend({
        getScript: function(e, n) {
            return s.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return s.get(e, t, n, "json")
        },
        ajaxSetup: function(e, t) {
            return t ? Yt(e, s.ajaxSettings) : (t = e, e = s.ajaxSettings),
            Yt(e, t),
            e
        },
        ajaxSettings: {
            url: Vt,
            isLocal: Pt.test($t[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Jt
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": s.parseJSON,
                "text xml": s.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: Qt(Wt),
        ajaxTransport: Qt(Xt),
        ajax: function(e, n) {
            function S(e, n, c, h) {
                if (y === 2) return;
                y = 2,
                m && clearTimeout(m),
                v = t,
                p = h || "",
                E.readyState = e > 0 ? 4 : 0;
                var d, g, w, S = n,
                x = c ? en(r, E, c) : t,
                T,
                N;
                if (e >= 200 && e < 300 || e === 304) {
                    if (r.ifModified) {
                        if (T = E.getResponseHeader("Last-Modified")) s.lastModified[l] = T;
                        if (N = E.getResponseHeader("Etag")) s.etag[l] = N
                    }
                    if (e === 304) S = "notmodified",
                    d = !0;
                    else try {
                        g = tn(r, x),
                        S = "success",
                        d = !0
                    } catch(C) {
                        S = "parsererror",
                        w = C
                    }
                } else {
                    w = S;
                    if (!S || e) S = "error",
                    e < 0 && (e = 0)
                }
                E.status = e,
                E.statusText = "" + (n || S),
                d ? u.resolveWith(i, [g, S, E]) : u.rejectWith(i, [E, S, w]),
                E.statusCode(f),
                f = t,
                b && o.trigger("ajax" + (d ? "Success": "Error"), [E, r, d ? g: w]),
                a.fireWith(i, [E, S]),
                b && (o.trigger("ajaxComplete", [E, r]), --s.active || s.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (n = e, e = t),
            n = n || {};
            var r = s.ajaxSetup({},
            n),
            i = r.context || r,
            o = i !== r && (i.nodeType || i instanceof s) ? s(i) : s.event,
            u = s.Deferred(),
            a = s.Callbacks("once memory"),
            f = r.statusCode || {},
            l,
            c = {},
            h = {},
            p,
            d,
            v,
            m,
            g,
            y = 0,
            b,
            w,
            E = {
                readyState: 0,
                setRequestHeader: function(e, t) {
                    if (!y) {
                        var n = e.toLowerCase();
                        e = h[n] = h[n] || e,
                        c[e] = t
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return y === 2 ? p: null
                },
                getResponseHeader: function(e) {
                    var n;
                    if (y === 2) {
                        if (!d) {
                            d = {};
                            while (n = _t.exec(p)) d[n[1].toLowerCase()] = n[2]
                        }
                        n = d[e.toLowerCase()]
                    }
                    return n === t ? null: n
                },
                overrideMimeType: function(e) {
                    return y || (r.mimeType = e),
                    this
                },
                abort: function(e) {
                    return e = e || "abort",
                    v && v.abort(e),
                    S(0, e),
                    this
                }
            };
            u.promise(E),
            E.success = E.done,
            E.error = E.fail,
            E.complete = a.add,
            E.statusCode = function(e) {
                if (e) {
                    var t;
                    if (y < 2) for (t in e) f[t] = [f[t], e[t]];
                    else t = e[E.status],
                    E.then(t, t)
                }
                return this
            },
            r.url = ((e || r.url) + "").replace(Mt, "").replace(Bt, $t[1] + "//"),
            r.dataTypes = s.trim(r.dataType || "*").toLowerCase().split(qt),
            r.crossDomain == null && (g = Ut.exec(r.url.toLowerCase()), r.crossDomain = !(!g || g[1] == $t[1] && g[2] == $t[2] && (g[3] || (g[1] === "http:" ? 80 : 443)) == ($t[3] || ($t[1] === "http:" ? 80 : 443)))),
            r.data && r.processData && typeof r.data != "string" && (r.data = s.param(r.data, r.traditional)),
            Gt(Wt, r, n, E);
            if (y === 2) return ! 1;
            b = r.global,
            r.type = r.type.toUpperCase(),
            r.hasContent = !Ht.test(r.type),
            b && s.active++===0 && s.event.trigger("ajaxStart");
            if (!r.hasContent) {
                r.data && (r.url += (jt.test(r.url) ? "&": "?") + r.data, delete r.data),
                l = r.url;
                if (r.cache === !1) {
                    var x = s.now(),
                    T = r.url.replace(Rt, "$1_=" + x);
                    r.url = T + (T === r.url ? (jt.test(r.url) ? "&": "?") + "_=" + x: "")
                }
            } (r.data && r.hasContent && r.contentType !== !1 || n.contentType) && E.setRequestHeader("Content-Type", r.contentType),
            r.ifModified && (l = l || r.url, s.lastModified[l] && E.setRequestHeader("If-Modified-Since", s.lastModified[l]), s.etag[l] && E.setRequestHeader("If-None-Match", s.etag[l])),
            E.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + (r.dataTypes[0] !== "*" ? ", " + Jt + "; q=0.01": "") : r.accepts["*"]);
            for (w in r.headers) E.setRequestHeader(w, r.headers[w]);
            if (!r.beforeSend || r.beforeSend.call(i, E, r) !== !1 && y !== 2) {
                for (w in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) E[w](r[w]);
                v = Gt(Xt, r, n, E);
                if (!v) S( - 1, "No Transport");
                else {
                    E.readyState = 1,
                    b && o.trigger("ajaxSend", [E, r]),
                    r.async && r.timeout > 0 && (m = setTimeout(function() {
                        E.abort("timeout")
                    },
                    r.timeout));
                    try {
                        y = 1,
                        v.send(c, S)
                    } catch(N) {
                        if (! (y < 2)) throw N;
                        S( - 1, N)
                    }
                }
                return E
            }
            return E.abort(),
            !1
        },
        param: function(e, n) {
            var r = [],
            i = function(e, t) {
                t = s.isFunction(t) ? t() : t,
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            n === t && (n = s.ajaxSettings.traditional);
            if (s.isArray(e) || e.jquery && !s.isPlainObject(e)) s.each(e,
            function() {
                i(this.name, this.value)
            });
            else for (var o in e) Zt(o, e[o], n, i);
            return r.join("&").replace(Lt, "+")
        }
    }),
    s.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var nn = s.now(),
    rn = /(\=)\?(&|$)|\?\?/i;
    s.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return s.expando + "_" + nn++
        }
    }),
    s.ajaxPrefilter("json jsonp",
    function(t, n, r) {
        var i = typeof t.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(t.contentType);
        if (t.dataTypes[0] === "jsonp" || t.jsonp !== !1 && (rn.test(t.url) || i && rn.test(t.data))) {
            var o, u = t.jsonpCallback = s.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            a = e[u],
            f = t.url,
            l = t.data,
            c = "$1" + u + "$2";
            return t.jsonp !== !1 && (f = f.replace(rn, c), t.url === f && (i && (l = l.replace(rn, c)), t.data === l && (f += (/\?/.test(f) ? "&": "?") + t.jsonp + "=" + u))),
            t.url = f,
            t.data = l,
            e[u] = function(e) {
                o = [e]
            },
            r.always(function() {
                e[u] = a,
                o && s.isFunction(a) && e[u](o[0])
            }),
            t.converters["script json"] = function() {
                return o || s.error(u + " was not called"),
                o[0]
            },
            t.dataTypes[0] = "json",
            "script"
        }
    }),
    s.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                return s.globalEval(e),
                e
            }
        }
    }),
    s.ajaxPrefilter("script",
    function(e) {
        e.cache === t && (e.cache = !1),
        e.crossDomain && (e.type = "GET", e.global = !1)
    }),
    s.ajaxTransport("script",
    function(e) {
        if (e.crossDomain) {
            var r, i = n.head || n.getElementsByTagName("head")[0] || n.documentElement;
            return {
                send: function(s, o) {
                    r = n.createElement("script"),
                    r.async = "async",
                    e.scriptCharset && (r.charset = e.scriptCharset),
                    r.src = e.url,
                    r.onload = r.onreadystatechange = function(e, n) {
                        if (n || !r.readyState || /loaded|complete/.test(r.readyState)) r.onload = r.onreadystatechange = null,
                        i && r.parentNode && i.removeChild(r),
                        r = t,
                        n || o(200, "success")
                    },
                    i.insertBefore(r, i.firstChild)
                },
                abort: function() {
                    r && r.onload(0, 1)
                }
            }
        }
    });
    var sn = e.ActiveXObject ?
    function() {
        for (var e in un) un[e](0, 1)
    }: !1,
    on = 0,
    un;
    s.ajaxSettings.xhr = e.ActiveXObject ?
    function() {
        return ! this.isLocal && an() || fn()
    }: an,
    function(e) {
        s.extend(s.support, {
            ajax: !!e,
            cors: !!e && "withCredentials" in e
        })
    } (s.ajaxSettings.xhr()),
    s.support.ajax && s.ajaxTransport(function(n) {
        if (!n.crossDomain || s.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var u = n.xhr(),
                    a,
                    f;
                    n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async);
                    if (n.xhrFields) for (f in n.xhrFields) u[f] = n.xhrFields[f];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType),
                    !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (f in i) u.setRequestHeader(f, i[f])
                    } catch(l) {}
                    u.send(n.hasContent && n.data || null),
                    r = function(e, i) {
                        var f, l, c, h, p;
                        try {
                            if (r && (i || u.readyState === 4)) {
                                r = t,
                                a && (u.onreadystatechange = s.noop, sn && delete un[a]);
                                if (i) u.readyState !== 4 && u.abort();
                                else {
                                    f = u.status,
                                    c = u.getAllResponseHeaders(),
                                    h = {},
                                    p = u.responseXML,
                                    p && p.documentElement && (h.xml = p);
                                    try {
                                        h.text = u.responseText
                                    } catch(e) {}
                                    try {
                                        l = u.statusText
                                    } catch(d) {
                                        l = ""
                                    } ! f && n.isLocal && !n.crossDomain ? f = h.text ? 200 : 404 : f === 1223 && (f = 204)
                                }
                            }
                        } catch(v) {
                            i || o( - 1, v)
                        }
                        h && o(f, l, h, c)
                    },
                    !n.async || u.readyState === 4 ? r() : (a = ++on, sn && (un || (un = {},
                    s(e).unload(sn)), un[a] = r), u.onreadystatechange = r)
                },
                abort: function() {
                    r && r(0, 1)
                }
            }
        }
    });
    var ln = {},
    cn, hn, pn = /^(?:toggle|show|hide)$/,
    dn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
    vn, mn = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]],
    gn;
    s.fn.extend({
        show: function(e, t, n) {
            var r, i;
            if (e || e === 0) return this.animate(wn("show", 3), e, t, n);
            for (var o = 0,
            u = this.length; o < u; o++) r = this[o],
            r.style && (i = r.style.display, !s._data(r, "olddisplay") && i === "none" && (i = r.style.display = ""), (i === "" && s.css(r, "display") === "none" || !s.contains(r.ownerDocument.documentElement, r)) && s._data(r, "olddisplay", En(r.nodeName)));
            for (o = 0; o < u; o++) {
                r = this[o];
                if (r.style) {
                    i = r.style.display;
                    if (i === "" || i === "none") r.style.display = s._data(r, "olddisplay") || ""
                }
            }
            return this
        },
        hide: function(e, t, n) {
            if (e || e === 0) return this.animate(wn("hide", 3), e, t, n);
            var r, i, o = 0,
            u = this.length;
            for (; o < u; o++) r = this[o],
            r.style && (i = s.css(r, "display"), i !== "none" && !s._data(r, "olddisplay") && s._data(r, "olddisplay", i));
            for (o = 0; o < u; o++) this[o].style && (this[o].style.display = "none");
            return this
        },
        _toggle: s.fn.toggle,
        toggle: function(e, t, n) {
            var r = typeof e == "boolean";
            return s.isFunction(e) && s.isFunction(t) ? this._toggle.apply(this, arguments) : e == null || r ? this.each(function() {
                var t = r ? e: s(this).is(":hidden");
                s(this)[t ? "show": "hide"]()
            }) : this.animate(wn("toggle", 3), e, t, n),
            this
        },
        fadeTo: function(e, t, n, r) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: t
            },
            e, n, r)
        },
        animate: function(e, t, n, r) {
            function o() {
                i.queue === !1 && s._mark(this);
                var t = s.extend({},
                i),
                n = this.nodeType === 1,
                r = n && s(this).is(":hidden"),
                o,
                u,
                a,
                f,
                l,
                c,
                h,
                p,
                d,
                v,
                m;
                t.animatedProperties = {};
                for (a in e) {
                    o = s.camelCase(a),
                    a !== o && (e[o] = e[a], delete e[a]);
                    if ((l = s.cssHooks[o]) && "expand" in l) {
                        c = l.expand(e[o]),
                        delete e[o];
                        for (a in c) a in e || (e[a] = c[a])
                    }
                }
                for (o in e) {
                    u = e[o],
                    s.isArray(u) ? (t.animatedProperties[o] = u[1], u = e[o] = u[0]) : t.animatedProperties[o] = t.specialEasing && t.specialEasing[o] || t.easing || "swing";
                    if (u === "hide" && r || u === "show" && !r) return t.complete.call(this);
                    n && (o === "height" || o === "width") && (t.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], s.css(this, "display") === "inline" && s.css(this, "float") === "none" && (!s.support.inlineBlockNeedsLayout || En(this.nodeName) === "inline" ? this.style.display = "inline-block": this.style.zoom = 1))
                }
                t.overflow != null && (this.style.overflow = "hidden");
                for (a in e) f = new s.fx(this, t, a),
                u = e[a],
                pn.test(u) ? (m = s._data(this, "toggle" + a) || (u === "toggle" ? r ? "show": "hide": 0), m ? (s._data(this, "toggle" + a, m === "show" ? "hide": "show"), f[m]()) : f[u]()) : (h = dn.exec(u), p = f.cur(), h ? (d = parseFloat(h[2]), v = h[3] || (s.cssNumber[a] ? "": "px"), v !== "px" && (s.style(this, a, (d || 1) + v), p = (d || 1) / f.cur() * p, s.style(this, a, p + v)), h[1] && (d = (h[1] === "-=" ? -1 : 1) * d + p), f.custom(p, d, v)) : f.custom(p, u, ""));
                return ! 0
            }
            var i = s.speed(t, n, r);
            return s.isEmptyObject(e) ? this.each(i.complete, [!1]) : (e = s.extend({},
            e), i.queue === !1 ? this.each(o) : this.queue(i.queue, o))
        },
        stop: function(e, n, r) {
            return typeof e != "string" && (r = n, n = e, e = t),
            n && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                function u(e, t, n) {
                    var i = t[n];
                    s.removeData(e, n, !0),
                    i.stop(r)
                }
                var t, n = !1,
                i = s.timers,
                o = s._data(this);
                r || s._unmark(!0, this);
                if (e == null) for (t in o) o[t] && o[t].stop && t.indexOf(".run") === t.length - 4 && u(this, o, t);
                else o[t = e + ".run"] && o[t].stop && u(this, o, t);
                for (t = i.length; t--;) i[t].elem === this && (e == null || i[t].queue === e) && (r ? i[t](!0) : i[t].saveState(), n = !0, i.splice(t, 1)); (!r || !n) && s.dequeue(this, e)
            })
        }
    }),
    s.each({
        slideDown: wn("show", 1),
        slideUp: wn("hide", 1),
        slideToggle: wn("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(e, t) {
        s.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    s.extend({
        speed: function(e, t, n) {
            var r = e && typeof e == "object" ? s.extend({},
            e) : {
                complete: n || !n && t || s.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !s.isFunction(t) && t
            };
            r.duration = s.fx.off ? 0 : typeof r.duration == "number" ? r.duration: r.duration in s.fx.speeds ? s.fx.speeds[r.duration] : s.fx.speeds._default;
            if (r.queue == null || r.queue === !0) r.queue = "fx";
            return r.old = r.complete,
            r.complete = function(e) {
                s.isFunction(r.old) && r.old.call(this),
                r.queue ? s.dequeue(this, r.queue) : e !== !1 && s._unmark(this)
            },
            r
        },
        easing: {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return - Math.cos(e * Math.PI) / 2 + .5
            }
        },
        timers: [],
        fx: function(e, t, n) {
            this.options = t,
            this.elem = e,
            this.prop = n,
            t.orig = t.orig || {}
        }
    }),
    s.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (s.fx.step[this.prop] || s.fx.step._default)(this)
        },
        cur: function() {
            if (this.elem[this.prop] == null || !!this.elem.style && this.elem.style[this.prop] != null) {
                var e, t = s.css(this.elem, this.prop);
                return isNaN(e = parseFloat(t)) ? !t || t === "auto" ? 0 : t: e
            }
            return this.elem[this.prop]
        },
        custom: function(e, n, r) {
            function u(e) {
                return i.step(e)
            }
            var i = this,
            o = s.fx;
            this.startTime = gn || yn(),
            this.end = n,
            this.now = this.start = e,
            this.pos = this.state = 0,
            this.unit = r || this.unit || (s.cssNumber[this.prop] ? "": "px"),
            u.queue = this.options.queue,
            u.elem = this.elem,
            u.saveState = function() {
                s._data(i.elem, "fxshow" + i.prop) === t && (i.options.hide ? s._data(i.elem, "fxshow" + i.prop, i.start) : i.options.show && s._data(i.elem, "fxshow" + i.prop, i.end))
            },
            u() && s.timers.push(u) && !vn && (vn = setInterval(o.tick, o.interval))
        },
        show: function() {
            var e = s._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = e || s.style(this.elem, this.prop),
            this.options.show = !0,
            e !== t ? this.custom(this.cur(), e) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()),
            s(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = s._data(this.elem, "fxshow" + this.prop) || s.style(this.elem, this.prop),
            this.options.hide = !0,
            this.custom(this.cur(), 0)
        },
        step: function(e) {
            var t, n, r, i = gn || yn(),
            o = !0,
            u = this.elem,
            a = this.options;
            if (e || i >= a.duration + this.startTime) {
                this.now = this.end,
                this.pos = this.state = 1,
                this.update(),
                a.animatedProperties[this.prop] = !0;
                for (t in a.animatedProperties) a.animatedProperties[t] !== !0 && (o = !1);
                if (o) {
                    a.overflow != null && !s.support.shrinkWrapBlocks && s.each(["", "X", "Y"],
                    function(e, t) {
                        u.style["overflow" + t] = a.overflow[e]
                    }),
                    a.hide && s(u).hide();
                    if (a.hide || a.show) for (t in a.animatedProperties) s.style(u, t, a.orig[t]),
                    s.removeData(u, "fxshow" + t, !0),
                    s.removeData(u, "toggle" + t, !0);
                    r = a.complete,
                    r && (a.complete = !1, r.call(u))
                }
                return ! 1
            }
            return a.duration == Infinity ? this.now = i: (n = i - this.startTime, this.state = n / a.duration, this.pos = s.easing[a.animatedProperties[this.prop]](this.state, n, 0, 1, a.duration), this.now = this.start + (this.end - this.start) * this.pos),
            this.update(),
            !0
        }
    },
    s.extend(s.fx, {
        tick: function() {
            var e, t = s.timers,
            n = 0;
            for (; n < t.length; n++) e = t[n],
            !e() && t[n] === e && t.splice(n--, 1);
            t.length || s.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(vn),
            vn = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(e) {
                s.style(e.elem, "opacity", e.now)
            },
            _default: function(e) {
                e.elem.style && e.elem.style[e.prop] != null ? e.elem.style[e.prop] = e.now + e.unit: e.elem[e.prop] = e.now
            }
        }
    }),
    s.each(mn.concat.apply([], mn),
    function(e, t) {
        t.indexOf("margin") && (s.fx.step[t] = function(e) {
            s.style(e.elem, t, Math.max(0, e.now) + e.unit)
        })
    }),
    s.expr && s.expr.filters && (s.expr.filters.animated = function(e) {
        return s.grep(s.timers,
        function(t) {
            return e === t.elem
        }).length
    });
    var Sn, xn = /^t(?:able|d|h)$/i,
    Tn = /^(?:body|html)$/i;
    "getBoundingClientRect" in n.documentElement ? Sn = function(e, t, n, r) {
        try {
            r = e.getBoundingClientRect()
        } catch(i) {}
        if (!r || !s.contains(n, e)) return r ? {
            top: r.top,
            left: r.left
        }: {
            top: 0,
            left: 0
        };
        var o = t.body,
        u = Nn(t),
        a = n.clientTop || o.clientTop || 0,
        f = n.clientLeft || o.clientLeft || 0,
        l = u.pageYOffset || s.support.boxModel && n.scrollTop || o.scrollTop,
        c = u.pageXOffset || s.support.boxModel && n.scrollLeft || o.scrollLeft,
        h = r.top + l - a,
        p = r.left + c - f;
        return {
            top: h,
            left: p
        }
    }: Sn = function(e, t, n) {
        var r, i = e.offsetParent,
        o = e,
        u = t.body,
        a = t.defaultView,
        f = a ? a.getComputedStyle(e, null) : e.currentStyle,
        l = e.offsetTop,
        c = e.offsetLeft;
        while ((e = e.parentNode) && e !== u && e !== n) {
            if (s.support.fixedPosition && f.position === "fixed") break;
            r = a ? a.getComputedStyle(e, null) : e.currentStyle,
            l -= e.scrollTop,
            c -= e.scrollLeft,
            e === i && (l += e.offsetTop, c += e.offsetLeft, s.support.doesNotAddBorder && (!s.support.doesAddBorderForTableAndCells || !xn.test(e.nodeName)) && (l += parseFloat(r.borderTopWidth) || 0, c += parseFloat(r.borderLeftWidth) || 0), o = i, i = e.offsetParent),
            s.support.subtractsBorderForOverflowNotVisible && r.overflow !== "visible" && (l += parseFloat(r.borderTopWidth) || 0, c += parseFloat(r.borderLeftWidth) || 0),
            f = r
        }
        if (f.position === "relative" || f.position === "static") l += u.offsetTop,
        c += u.offsetLeft;
        return s.support.fixedPosition && f.position === "fixed" && (l += Math.max(n.scrollTop, u.scrollTop), c += Math.max(n.scrollLeft, u.scrollLeft)),
        {
            top: l,
            left: c
        }
    },
    s.fn.offset = function(e) {
        if (arguments.length) return e === t ? this: this.each(function(t) {
            s.offset.setOffset(this, e, t)
        });
        var n = this[0],
        r = n && n.ownerDocument;
        return r ? n === r.body ? s.offset.bodyOffset(n) : Sn(n, r, r.documentElement) : null
    },
    s.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop,
            n = e.offsetLeft;
            return s.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(s.css(e, "marginTop")) || 0, n += parseFloat(s.css(e, "marginLeft")) || 0),
            {
                top: t,
                left: n
            }
        },
        setOffset: function(e, t, n) {
            var r = s.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = s(e),
            o = i.offset(),
            u = s.css(e, "top"),
            a = s.css(e, "left"),
            f = (r === "absolute" || r === "fixed") && s.inArray("auto", [u, a]) > -1,
            l = {},
            c = {},
            h,
            p;
            f ? (c = i.position(), h = c.top, p = c.left) : (h = parseFloat(u) || 0, p = parseFloat(a) || 0),
            s.isFunction(t) && (t = t.call(e, n, o)),
            t.top != null && (l.top = t.top - o.top + h),
            t.left != null && (l.left = t.left - o.left + p),
            "using" in t ? t.using.call(e, l) : i.css(l)
        }
    },
    s.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var e = this[0],
            t = this.offsetParent(),
            n = this.offset(),
            r = Tn.test(t[0].nodeName) ? {
                top: 0,
                left: 0
            }: t.offset();
            return n.top -= parseFloat(s.css(e, "marginTop")) || 0,
            n.left -= parseFloat(s.css(e, "marginLeft")) || 0,
            r.top += parseFloat(s.css(t[0], "borderTopWidth")) || 0,
            r.left += parseFloat(s.css(t[0], "borderLeftWidth")) || 0,
            {
                top: n.top - r.top,
                left: n.left - r.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || n.body;
                while (e && !Tn.test(e.nodeName) && s.css(e, "position") === "static") e = e.offsetParent;
                return e
            })
        }
    }),
    s.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(e, n) {
        var r = /Y/.test(n);
        s.fn[e] = function(i) {
            return s.access(this,
            function(e, i, o) {
                var u = Nn(e);
                if (o === t) return u ? n in u ? u[n] : s.support.boxModel && u.document.documentElement[i] || u.document.body[i] : e[i];
                u ? u.scrollTo(r ? s(u).scrollLeft() : o, r ? o: s(u).scrollTop()) : e[i] = o
            },
            e, i, arguments.length, null)
        }
    }),
    s.each({
        Height: "height",
        Width: "width"
    },
    function(e, n) {
        var r = "client" + e,
        i = "scroll" + e,
        o = "offset" + e;
        s.fn["inner" + e] = function() {
            var e = this[0];
            return e ? e.style ? parseFloat(s.css(e, n, "padding")) : this[n]() : null
        },
        s.fn["outer" + e] = function(e) {
            var t = this[0];
            return t ? t.style ? parseFloat(s.css(t, n, e ? "margin": "border")) : this[n]() : null
        },
        s.fn[n] = function(e) {
            return s.access(this,
            function(e, n, u) {
                var a, f, l, c;
                if (s.isWindow(e)) return a = e.document,
                f = a.documentElement[r],
                s.support.boxModel && f || a.body && a.body[r] || f;
                if (e.nodeType === 9) return a = e.documentElement,
                a[r] >= a[i] ? a[r] : Math.max(e.body[i], a[i], e.body[o], a[o]);
                if (u === t) return l = s.css(e, n),
                c = parseFloat(l),
                s.isNumeric(c) ? c: l;
                s(e).css(n, u)
            },
            n, e, arguments.length, null)
        }
    }),
    e.jQuery = e.$ = s,
    typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [],
    function() {
        return s
    })
})(window),
function(e) {
    var t = {
        video: 3,
        flash: 3,
        image: 3,
        audio: 3,
        domainpostfix: ".jing.fm"
    };
    e.extend({
        wh2Thumbtype: function(e) {
            if (e == 30) return "UY";
            if (e == 50) return "UT";
            if (e == 64 || e == 53) return "US";
            if (e == 100) return "UM";
            if (e == 200) return "SL"
        },
        converRetina: function(e) {
            switch (e) {
            case "AT":
                e = "AS";
                break;
            case "AS":
                e = "AM";
                break;
            case "AM":
                e = "AL";
                break;
            case "ST":
                e = "SM";
                break;
            case "SS":
            case "SM":
                e = "SL";
                break;
            case "UY":
                e = "US";
                break;
            case "UT":
                e = "UM";
                break;
            case "US":
            case "UM":
                e = "UL"
            }
            return e
        },
        id2url: function(n, r, i, s) {
            if (n == null) return "";
            var o = "";
            return Retina.enabled && (i = e.converRetina(i)),
            s == "snsavatar" ? o = "http://" + e.randNumberWithKey(r) + t.domainpostfix + "/" + s + e.id2filepath4snsavatar(n, r, i) : o = "http://" + e.randNumberWithKey(r) + t.domainpostfix + "/" + s + e.id2filepath(n, r, i) + "?key=" + Signup.userDetail.k,
            o
        },
        id2mediaUrl: function(t, n, r) {
            var i = MEDIA_URL + e.id2filepath(t, n, r);
            return i
        },
        random: function(e) {
            return Math.floor(e * (Math.random() % 1))
        },
        randomBetween: function(e, t) {
            return e + jQuery.random(t - e + 1)
        },
        leftaddstr: function(e, t, n) {
            var r = e.length;
            while (r < n) e = t + "" + e,
            r = e.length;
            return e
        },
        randNumberWithKey: function(e) {
            var t = "";
            switch (e) {
            case "image":
                t = "img";
                break;
            case "audio":
                t = "media"
            }
            return t
        },
        id2urls4pageimage: function() {
            e("[filetype='image']").each(function(t, n) {
                var r = e(n).attr("filetype"),
                i = e(n).attr("thumbtype"),
                s = e(n).attr("fileid"),
                o = e.id2url(s, r, i);
                e(n).attr("src", o)
            })
        },
        id2urlimagethis: function(t) {
            var n = e(t).attr("filetype"),
            r = e(t).attr("thumbtype"),
            i = e(t).attr("fileid"),
            s = e.id2url(i, n, r);
            e(t).attr("src", s),
            t.onerror = null
        },
        id2urls4pageflash: function() {
            e("[filetype='flash']").each(function(t, n) {
                var r = e(n).attr("filetype"),
                i = e(n).attr("fileid"),
                s = e.id2url(i, r);
                e(n).attr("src", s)
            })
        },
        id2filepath4snsavatar: function(t, n, r) {
            if (typeof r == "undefined" || typeof r == "null" || r == null || r == "") r = "NO";
            var i = t.lastIndexOf("@"),
            s = t.lastIndexOf("."),
            o = t.substring(i + 1, s),
            u = t.substring(0, i),
            a = u.length;
            if (a < 6) for (var f = 0; f < 6 - a; f++) u += "0";
            return path = "/" + o + "/" + r + "/" + u.substring(0, 2) + "/" + u.substring(2, 4) + "/" + u.substring(4, 5) + "/" + e.id2filename(t, r),
            path
        },
        id2filepath: function(t, n, r) {
            var i = "";
            switch (n) {
            case "image":
                if (typeof r == "undefined" || typeof r == "null" || r == null || r == "") r = "NO";
                i = "/" + r + "/" + t.substring(0, 4) + "/" + t.substring(4, 8) + "/" + t.substring(8, 10) + "/" + t.substring(10, 12) + "/" + e.id2filename(t, r);
                break;
            case "flash":
                i = "/" + t.substring(0, 4) + "/" + t.substring(4, 8) + "/" + t.substring(8, 10) + "/" + t.substring(10, 12) + "/" + t;
                break;
            case "video":
                i = "/" + t.substring(0, 4) + "/" + t.substring(4, 8) + "/" + t.substring(8, 10) + "/" + t.substring(10, 12) + "/" + t;
                break;
            case "audio":
                i = "/" + t.substring(0, 4) + "/" + t.substring(4, 8) + "/" + t.substring(8, 10) + "/" + t.substring(10, 12) + "/",
                Signup.userDetail.sts.hbr == "true" ? i += t: i += "MM" + t;
                break;
            default:
                numend = 1
            }
            return i
        },
        id2filename: function(e, t) {
            return t + "" + e
        }
    })
} (jQuery),
function(e) {
    function t(e, t) {
        var n = e.length;
        while (n--) if (e[n] === t) return n;
        return - 1
    }
    function n(e) {
        var n, r, i, o, u, a;
        r = (e.target || e.srcElement).tagName,
        n = e.keyCode;
        if (n == 93 || n == 224) n = 91;
        if (n in c) {
            c[n] = !0;
            for (o in p) p[o] == n && (s[o] = !0);
            return
        }
        if (r == "INPUT" || r == "SELECT" || r == "TEXTAREA") return;
        if (! (n in l)) return;
        for (u = 0; u < l[n].length; u++) {
            i = l[n][u];
            if (i.scope == h || i.scope == "all") {
                a = i.mods.length > 0;
                for (o in c) if (!c[o] && t(i.mods, +o) > -1 || c[o] && t(i.mods, +o) == -1) a = !1; (i.mods.length == 0 && !c[16] && !c[18] && !c[17] && !c[91] || a) && i.method(e, i) === !1 && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), e.cancelBubble && (e.cancelBubble = !0))
            }
        }
    }
    function r(e) {
        var t = e.keyCode,
        n;
        if (t == 93 || t == 224) t = 91;
        if (t in c) {
            c[t] = !1;
            for (n in p) p[n] == t && (s[n] = !1)
        }
    }
    function i() {
        for (f in c) c[f] = !1;
        for (f in p) s[f] = !1
    }
    function s(e, t, n) {
        var r, i, s, o;
        n === undefined && (n = t, t = "all"),
        e = e.replace(/\s/g, ""),
        r = e.split(","),
        r[r.length - 1] == "" && (r[r.length - 2] += ",");
        for (s = 0; s < r.length; s++) {
            i = [],
            e = r[s].split("+");
            if (e.length > 1) {
                i = e.slice(0, e.length - 1);
                for (o = 0; o < i.length; o++) i[o] = p[i[o]];
                e = [e[e.length - 1]]
            }
            e = e[0],
            e = d[e] || e.toUpperCase().charCodeAt(0),
            e in l || (l[e] = []),
            l[e].push({
                shortcut: r[s],
                scope: t,
                method: n,
                key: r[s],
                mods: i
            })
        }
    }
    function o(e) {
        h = e || "all"
    }
    function u() {
        return h || "all"
    }
    function a(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t,
        function() {
            n(window.event)
        })
    }
    var f, l = {},
    c = {
        16 : !1,
        18 : !1,
        17 : !1,
        91 : !1
    },
    h = "all",
    p = {
        "?": 16,
        shift: 16,
        "?": 18,
        alt: 18,
        option: 18,
        "?": 17,
        ctrl: 17,
        control: 17,
        "?": 91,
        command: 91
    },
    d = {
        backspace: 8,
        tab: 9,
        clear: 12,
        enter: 13,
        "return": 13,
        esc: 27,
        escape: 27,
        space: 32,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        del: 46,
        "delete": 46,
        home: 36,
        end: 35,
        pageup: 33,
        pagedown: 34,
        ",": 188,
        ".": 190,
        "/": 191,
        "`": 192,
        "-": 189,
        "=": 187,
        ";": 186,
        "'": 222,
        "[": 219,
        "]": 221,
        "\\": 220
    };
    for (f = 1; f < 20; f++) p["f" + f] = 111 + f;
    for (f in p) s[f] = !1;
    a(document, "keydown", n),
    a(document, "keyup", r),
    a(window, "focus", i),
    e.key = s,
    e.key.setScope = o,
    e.key.getScope = u,
    typeof module != "undefined" && (module.exports = key)
} (this);
var Selector_browser = "";
css_browser_selector(navigator.userAgent),
function(e) {
    e.fn.clippy = function(t) {
        _opts = {
            width: "20",
            height: "16",
            clippy_path: "/js/vendor/clippy.swf",
            keep_text: !1
        },
        t = e.extend(_opts, t),
        params = {
            movie: t.clippy_path,
            allowScriptAccess: "always",
            quality: "high",
            scale: "noscale",
            wmode: "transparent"
        },
        embed_params = e.extend({},
        params, {
            width: t.width,
            height: t.height,
            style: "margin-top: 5px;margin-left: 20px;"
        }),
        embed_params.src = embed_params.movie,
        delete embed_params.movie,
        this.each(function(n, r) {
            text = encodeURIComponent(e(r).html()),
            params.FlashVars = "text=" + text,
            embed_params.FlashVars = "text=" + text,
            dom = e("<object />").attr({
                classid: "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",
                width: t.width,
                height: t.height,
                style: "opacity:0"
            }),
            e.each(params,
            function(t, n) {
                dom.append(e("<param />").attr({
                    name: t,
                    value: n
                }))
            }),
            embed = e("<embed />").attr(embed_params),
            dom.append(embed),
            t.keep_text ? e(r).html(dom).append(decodeURIComponent(text)) : e(r).html(dom)
        })
    }
} (jQuery);
var swfobject = function() {
    function C() {
        if (b) return;
        try {
            var e = a.getElementsByTagName("body")[0].appendChild(U("span"));
            e.parentNode.removeChild(e)
        } catch(t) {
            return
        }
        b = !0;
        var n = c.length;
        for (var r = 0; r < n; r++) c[r]()
    }
    function k(e) {
        b ? e() : c[c.length] = e
    }
    function L(t) {
        if (typeof u.addEventListener != e) u.addEventListener("load", t, !1);
        else if (typeof a.addEventListener != e) a.addEventListener("load", t, !1);
        else if (typeof u.attachEvent != e) z(u, "onload", t);
        else if (typeof u.onload == "function") {
            var n = u.onload;
            u.onload = function() {
                n(),
                t()
            }
        } else u.onload = t
    }
    function A() {
        l ? O() : M()
    }
    function O() {
        var n = a.getElementsByTagName("body")[0],
        r = U(t);
        r.setAttribute("type", i);
        var s = n.appendChild(r);
        if (s) {
            var o = 0; (function() {
                if (typeof s.GetVariable != e) {
                    var t = s.GetVariable("$version");
                    t && (t = t.split(" ")[1].split(","), T.pv = [parseInt(t[0], 10), parseInt(t[1], 10), parseInt(t[2], 10)])
                } else if (o < 10) {
                    o++,
                    setTimeout(arguments.callee, 10);
                    return
                }
                n.removeChild(r),
                s = null,
                M()
            })()
        } else M()
    }
    function M() {
        var t = h.length;
        if (t > 0) for (var n = 0; n < t; n++) {
            var r = h[n].id,
            i = h[n].callbackFn,
            s = {
                success: !1,
                id: r
            };
            if (T.pv[0] > 0) {
                var o = R(r);
                if (o) if (W(h[n].swfVersion) && !(T.wk && T.wk < 312)) V(r, !0),
                i && (s.success = !0, s.ref = _(r), i(s));
                else if (h[n].expressInstall && D()) {
                    var u = {};
                    u.data = h[n].expressInstall,
                    u.width = o.getAttribute("width") || "0",
                    u.height = o.getAttribute("height") || "0",
                    o.getAttribute("class") && (u.styleclass = o.getAttribute("class")),
                    o.getAttribute("align") && (u.align = o.getAttribute("align"));
                    var a = {},
                    f = o.getElementsByTagName("param"),
                    l = f.length;
                    for (var c = 0; c < l; c++) f[c].getAttribute("name").toLowerCase() != "movie" && (a[f[c].getAttribute("name")] = f[c].getAttribute("value"));
                    P(u, a, r, i)
                } else H(o),
                i && i(s)
            } else {
                V(r, !0);
                if (i) {
                    var p = _(r);
                    p && typeof p.SetVariable != e && (s.success = !0, s.ref = p),
                    i(s)
                }
            }
        }
    }
    function _(n) {
        var r = null,
        i = R(n);
        if (i && i.nodeName == "OBJECT") if (typeof i.SetVariable != e) r = i;
        else {
            var s = i.getElementsByTagName(t)[0];
            s && (r = s)
        }
        return r
    }
    function D() {
        return ! w && W("6.0.65") && (T.win || T.mac) && !(T.wk && T.wk < 312)
    }
    function P(t, n, r, i) {
        w = !0,
        g = i || null,
        y = {
            success: !1,
            id: r
        };
        var o = R(r);
        if (o) {
            o.nodeName == "OBJECT" ? (v = B(o), m = null) : (v = o, m = r),
            t.id = s;
            if (typeof t.width == e || !/%$/.test(t.width) && parseInt(t.width, 10) < 310) t.width = "310";
            if (typeof t.height == e || !/%$/.test(t.height) && parseInt(t.height, 10) < 137) t.height = "137";
            a.title = a.title.slice(0, 47) + " - Flash Player Installation";
            var f = T.ie && T.win ? "ActiveX": "PlugIn",
            l = "MMredirectURL=" + u.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + f + "&MMdoctitle=" + a.title;
            typeof n.flashvars != e ? n.flashvars += "&" + l: n.flashvars = l;
            if (T.ie && T.win && o.readyState != 4) {
                var c = U("div");
                r += "SWFObjectNew",
                c.setAttribute("id", r),
                o.parentNode.insertBefore(c, o),
                o.style.display = "none",
                function() {
                    o.readyState == 4 ? o.parentNode.removeChild(o) : setTimeout(arguments.callee, 10)
                } ()
            }
            j(t, n, r)
        }
    }
    function H(e) {
        if (T.ie && T.win && e.readyState != 4) {
            var t = U("div");
            e.parentNode.insertBefore(t, e),
            t.parentNode.replaceChild(B(e), t),
            e.style.display = "none",
            function() {
                e.readyState == 4 ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
            } ()
        } else e.parentNode.replaceChild(B(e), e)
    }
    function B(e) {
        var n = U("div");
        if (T.win && T.ie) n.innerHTML = e.innerHTML;
        else {
            var r = e.getElementsByTagName(t)[0];
            if (r) {
                var i = r.childNodes;
                if (i) {
                    var s = i.length;
                    for (var o = 0; o < s; o++)(i[o].nodeType != 1 || i[o].nodeName != "PARAM") && i[o].nodeType != 8 && n.appendChild(i[o].cloneNode(!0))
                }
            }
        }
        return n
    }
    function j(n, r, s) {
        var o, u = R(s);
        if (T.wk && T.wk < 312) return o;
        if (u) {
            typeof n.id == e && (n.id = s);
            if (T.ie && T.win) {
                var a = "";
                for (var f in n) n[f] != Object.prototype[f] && (f.toLowerCase() == "data" ? r.movie = n[f] : f.toLowerCase() == "styleclass" ? a += ' class="' + n[f] + '"': f.toLowerCase() != "classid" && (a += " " + f + '="' + n[f] + '"'));
                var l = "";
                for (var c in r) r[c] != Object.prototype[c] && (l += '<param name="' + c + '" value="' + r[c] + '" />');
                u.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + a + ">" + l + "</object>",
                p[p.length] = n.id,
                o = R(n.id)
            } else {
                var h = U(t);
                h.setAttribute("type", i);
                for (var d in n) n[d] != Object.prototype[d] && (d.toLowerCase() == "styleclass" ? h.setAttribute("class", n[d]) : d.toLowerCase() != "classid" && h.setAttribute(d, n[d]));
                for (var v in r) r[v] != Object.prototype[v] && v.toLowerCase() != "movie" && F(h, v, r[v]);
                u.parentNode.replaceChild(h, u),
                o = h
            }
        }
        return o
    }
    function F(e, t, n) {
        var r = U("param");
        r.setAttribute("name", t),
        r.setAttribute("value", n),
        e.appendChild(r)
    }
    function I(e) {
        var t = R(e);
        t && t.nodeName == "OBJECT" && (T.ie && T.win ? (t.style.display = "none",
        function() {
            t.readyState == 4 ? q(e) : setTimeout(arguments.callee, 10)
        } ()) : t.parentNode.removeChild(t))
    }
    function q(e) {
        var t = R(e);
        if (t) {
            for (var n in t) typeof t[n] == "function" && (t[n] = null);
            t.parentNode.removeChild(t)
        }
    }
    function R(e) {
        var t = null;
        try {
            t = a.getElementById(e)
        } catch(n) {}
        return t
    }
    function U(e) {
        return a.createElement(e)
    }
    function z(e, t, n) {
        e.attachEvent(t, n),
        d[d.length] = [e, t, n]
    }
    function W(e) {
        var t = T.pv,
        n = e.split(".");
        return n[0] = parseInt(n[0], 10),
        n[1] = parseInt(n[1], 10) || 0,
        n[2] = parseInt(n[2], 10) || 0,
        t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2] ? !0 : !1
    }
    function X(n, r, i, s) {
        if (T.ie && T.mac) return;
        var o = a.getElementsByTagName("head")[0];
        if (!o) return;
        var u = i && typeof i == "string" ? i: "screen";
        s && (E = null, S = null);
        if (!E || S != u) {
            var f = U("style");
            f.setAttribute("type", "text/css"),
            f.setAttribute("media", u),
            E = o.appendChild(f),
            T.ie && T.win && typeof a.styleSheets != e && a.styleSheets.length > 0 && (E = a.styleSheets[a.styleSheets.length - 1]),
            S = u
        }
        T.ie && T.win ? E && typeof E.addRule == t && E.addRule(n, r) : E && typeof a.createTextNode != e && E.appendChild(a.createTextNode(n + " {" + r + "}"))
    }
    function V(e, t) {
        if (!x) return;
        var n = t ? "visible": "hidden"
    }
    function $(t) {
        var n = /[\\\"<>\.;]/,
        r = n.exec(t) != null;
        return r && typeof encodeURIComponent != e ? encodeURIComponent(t) : t
    }
    var e = "undefined",
    t = "object",
    n = "Shockwave Flash",
    r = "ShockwaveFlash.ShockwaveFlash",
    i = "application/x-shockwave-flash",
    s = "SWFObjectExprInst",
    o = "onreadystatechange",
    u = window,
    a = document,
    f = navigator,
    l = !1,
    c = [A],
    h = [],
    p = [],
    d = [],
    v,
    m,
    g,
    y,
    b = !1,
    w = !1,
    E,
    S,
    x = !0,
    T = function() {
        var s = typeof a.getElementById != e && typeof a.getElementsByTagName != e && typeof a.createElement != e,
        o = f.userAgent.toLowerCase(),
        c = f.platform.toLowerCase(),
        h = c ? /win/.test(c) : /win/.test(o),
        p = c ? /mac/.test(c) : /mac/.test(o),
        d = /webkit/.test(o) ? parseFloat(o.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
        v = !1,
        m = [0, 0, 0],
        g = null;
        if (typeof f.plugins != e && typeof f.plugins[n] == t) g = f.plugins[n].description,
        g && (typeof f.mimeTypes == e || !f.mimeTypes[i] || !!f.mimeTypes[i].enabledPlugin) && (l = !0, v = !1, g = g.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), m[0] = parseInt(g.replace(/^(.*)\..*$/, "$1"), 10), m[1] = parseInt(g.replace(/^.*\.(.*)\s.*$/, "$1"), 10), m[2] = /[a-zA-Z]/.test(g) ? parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
        else if (typeof u.ActiveXObject != e) try {
            var y = new ActiveXObject(r);
            y && (g = y.GetVariable("$version"), g && (v = !0, g = g.split(" ")[1].split(","), m = [parseInt(g[0], 10), parseInt(g[1], 10), parseInt(g[2], 10)]))
        } catch(b) {}
        return {
            w3: s,
            pv: m,
            wk: d,
            ie: v,
            win: h,
            mac: p
        }
    } (),
    N = function() {
        if (!T.w3) return; (typeof a.readyState != e && a.readyState == "complete" || typeof a.readyState == e && (a.getElementsByTagName("body")[0] || a.body)) && C(),
        b || (typeof a.addEventListener != e && a.addEventListener("DOMContentLoaded", C, !1), T.ie && T.win && (a.attachEvent(o,
        function() {
            a.readyState == "complete" && (a.detachEvent(o, arguments.callee), C())
        }), u == top &&
        function() {
            if (b) return;
            try {
                a.documentElement.doScroll("left")
            } catch(e) {
                setTimeout(arguments.callee, 0);
                return
            }
            C()
        } ()), T.wk &&
        function() {
            if (b) return;
            if (!/loaded|complete/.test(a.readyState)) {
                setTimeout(arguments.callee, 0);
                return
            }
            C()
        } (), L(C))
    } (),
    J = function() {
        T.ie && T.win && window.attachEvent("onunload",
        function() {
            var e = d.length;
            for (var t = 0; t < e; t++) d[t][0].detachEvent(d[t][1], d[t][2]);
            var n = p.length;
            for (var r = 0; r < n; r++) I(p[r]);
            for (var i in T) T[i] = null;
            T = null;
            for (var s in swfobject) swfobject[s] = null;
            swfobject = null
        })
    } ();
    return {
        registerObject: function(e, t, n, r) {
            if (T.w3 && e && t) {
                var i = {};
                i.id = e,
                i.swfVersion = t,
                i.expressInstall = n,
                i.callbackFn = r,
                h[h.length] = i,
                V(e, !1)
            } else r && r({
                success: !1,
                id: e
            })
        },
        getObjectById: function(e) {
            if (T.w3) return _(e)
        },
        embedSWF: function(n, r, i, s, o, u, a, f, l, c) {
            var h = {
                success: !1,
                id: r
            };
            T.w3 && !(T.wk && T.wk < 312) && n && r && i && s && o ? (V(r, !1), k(function() {
                i += "",
                s += "";
                var p = {};
                if (l && typeof l === t) for (var d in l) p[d] = l[d];
                p.data = n,
                p.width = i,
                p.height = s;
                var v = {};
                if (f && typeof f === t) for (var m in f) v[m] = f[m];
                if (a && typeof a === t) for (var g in a) typeof v.flashvars != e ? v.flashvars += "&" + g + "=" + a[g] : v.flashvars = g + "=" + a[g];
                if (W(o)) {
                    var y = j(p, v, r);
                    p.id == r && V(r, !0),
                    h.success = !0,
                    h.ref = y
                } else {
                    if (u && D()) {
                        p.data = u,
                        P(p, v, r, c);
                        return
                    }
                    V(r, !0)
                }
                c && c(h)
            })) : c && c(h)
        },
        switchOffAutoHideShow: function() {
            x = !1
        },
        ua: T,
        getFlashPlayerVersion: function() {
            return {
                major: T.pv[0],
                minor: T.pv[1],
                release: T.pv[2]
            }
        },
        hasFlashPlayerVersion: W,
        createSWF: function(e, t, n) {
            return T.w3 ? j(e, t, n) : undefined
        },
        showExpressInstall: function(e, t, n, r) {
            T.w3 && D() && P(e, t, n, r)
        },
        removeSWF: function(e) {
            T.w3 && I(e)
        },
        createCSS: function(e, t, n, r) {
            T.w3 && X(e, t, n, r)
        },
        addDomLoadEvent: k,
        addLoadEvent: L,
        getQueryParamValue: function(e) {
            var t = a.location.search || a.location.hash;
            if (t) { / \ ? /.test(t)&&(t=t.split("?")[1]);if(e==null)return $(t);var n=t.split("&");for(var r=0;r<n.length;r++)if(n[r].substring(0,n[r].indexOf("="))==e)return $(n[r].substring(n[r].indexOf("=")+1))}return""},expressInstallCallback:function(){if(w){var e=R(s);e&&v&&(e.parentNode.replaceChild(v,e),m&&(V(m,!0),T.ie&&T.win&&(v.style.display="block")),g&&g(y)),w=!1}}}}();(function(e,t,n){e.fn.jScrollPane=function(t){function r(t,r){function $(r){var s,g,y,E,S,T,N=!1,C=!1;i=r;if(o===n)S=t.scrollTop(),T=t.scrollLeft(),t.css({overflow:"hidden",padding:0}),u=t.innerWidth()+I,a=t.innerHeight(),t.width(u),o=e('<div class="jspPane" / > ').css("padding",F).append(t.children()),f=e(' < div class = "jspContainer" / >').css({width:u+"px",height:a+"px"}).append(o).appendTo(t);else{t.css("width",""),N=i.stickToBottom&&mt(),C=i.stickToRight&&gt(),E=t.innerWidth()+I!=u||t.outerHeight()!=a,E&&(u=t.innerWidth()+I,a=t.innerHeight(),f.css({width:u+"px",height:a+"px"}));if(!E&&q==l&&o.outerHeight()==h){t.width(u);return}q=l,o.css("width",""),t.width(u),f.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}o.css("overflow","auto"),r.contentWidth?l=r.contentWidth:l=o[0].scrollWidth,h=o[0].scrollHeight,o.css("overflow",""),p=l/u,d=h/a,v=d>1,m=p>1,!m&&!v?(t.removeClass("jspScrollable"),o.css({top:0,width:f.width()-I}),bt(),St(),Tt(),rt(),Ct()):(t.addClass("jspScrollable"),s=i.maintainPosition&&(w||x),s&&(g=dt(),y=vt()),J(),Q(),Y(),s&&(ht(C?l-u:g,!1),ct(N?h-a:y,!1)),Et(),yt(),Lt(),i.enableKeyboardNavigation&&xt(),i.clickOnTrack&&nt(),Nt(),i.hijackInternalLinks&&kt()),i.autoReinitialise&&!j?j=setInterval(function(){$(i)},i.autoReinitialiseDelay):!i.autoReinitialise&&j&&clearInterval(j),S&&t.scrollTop(0)&&ct(S,!1),T&&t.scrollLeft(0)&&ht(T,!1),t.trigger("jsp-initialised",[m||v])}function J(){v&&(f.append(e(' < div class = "jspVerticalBar" / >').append(e(' < div class = "jspCap jspCapTop" / >'),e(' < div class = "jspTrack" / >').append(e(' < div class = "jspDrag" / >').append(e(' < div class = "jspDragTop" / >'),e(' < div class = "jspDragBottom" / >'))),e(' < div class = "jspCap jspCapBottom" / >'))),T=f.find(">.jspVerticalBar"),N=T.find(">.jspTrack"),g=N.find(">.jspDrag"),i.showArrows&&(A=e(' < a class = "jspArrow jspArrowUp" / >').bind("mousedown.jsp",et(0,-1)).bind("click.jsp",wt),O=e(' < a class = "jspArrow jspArrowDown" / >').bind("mousedown.jsp",et(0,1)).bind("click.jsp",wt),i.arrowScrollOnHover&&(A.bind("mouseover.jsp",et(0,-1,A)),O.bind("mouseover.jsp",et(0,1,O))),Z(N,i.verticalArrowPositions,A,O)),k=a,f.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){k-=e(this).outerHeight()}),g.hover(function(){g.addClass("jspHover")},function(){g.removeClass("jspHover")}).bind("mousedown.jsp",function(t){e("html").bind("dragstart.jsp selectstart.jsp",wt),g.addClass("jspActive");var n=t.pageY-g.position().top;return e("html").bind("mousemove.jsp",function(e){st(e.pageY-n,!1)}).bind("mouseup.jsp mouseleave.jsp",it),!1}),K())}function K(){N.height(k+"px"),w=0,C=i.verticalGutter+N.outerWidth(),o.width(u-C-I);try{T.position().left===0&&o.css("margin-left",C+"px")}catch(e){}}function Q(){m&&(f.append(e(' < div class = "jspHorizontalBar" / >').append(e(' < div class = "jspCap jspCapLeft" / >'),e(' < div class = "jspTrack" / >').append(e(' < div class = "jspDrag" / >').append(e(' < div class = "jspDragLeft" / >'),e(' < div class = "jspDragRight" / >'))),e(' < div class = "jspCap jspCapRight" / >'))),M=f.find(">.jspHorizontalBar"),_=M.find(">.jspTrack"),E=_.find(">.jspDrag"),i.showArrows&&(H=e(' < a class = "jspArrow jspArrowLeft" / >').bind("mousedown.jsp",et(-1,0)).bind("click.jsp",wt),B=e(' < a class = "jspArrow jspArrowRight" / >').bind("mousedown.jsp",et(1,0)).bind("click.jsp",wt),i.arrowScrollOnHover&&(H.bind("mouseover.jsp",et(-1,0,H)),B.bind("mouseover.jsp",et(1,0,B))),Z(_,i.horizontalArrowPositions,H,B)),E.hover(function(){E.addClass("jspHover")},function(){E.removeClass("jspHover")}).bind("mousedown.jsp",function(t){e("html").bind("dragstart.jsp selectstart.jsp",wt),E.addClass("jspActive");var n=t.pageX-E.position().left;return e("html").bind("mousemove.jsp",function(e){ut(e.pageX-n,!1)}).bind("mouseup.jsp mouseleave.jsp",it),!1}),D=f.innerWidth(),G())}function G(){f.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){D-=e(this).outerWidth()}),_.width(D+"px"),x=0}function Y(){if(m&&v){var t=_.outerHeight(),n=N.outerWidth();k-=t,e(M).find(">.jspCap:visible,>.jspArrow").each(function(){D+=e(this).outerWidth()}),D-=n,a-=n,u-=t,_.parent().append(e(' < div class = "jspCorner" / >').css("width",t+"px")),K(),G()}m&&o.width(f.outerWidth()-I+"px"),h=o.outerHeight(),d=h/a,m&&(P=Math.ceil(1/p*D),P>i.horizontalDragMaxWidth?P=i.horizontalDragMaxWidth:P<i.horizontalDragMinWidth&&(P=i.horizontalDragMinWidth),E.width(P+"px"),S=D-P,at(x)),v&&(L=Math.ceil(1/d*k),L>i.verticalDragMaxHeight?L=i.verticalDragMaxHeight:L<i.verticalDragMinHeight&&(L=i.verticalDragMinHeight),g.height(L+"px"),y=k-L,ot(w))}function Z(e,t,n,r){var i="before",s="after",o;t=="os"&&(t=/Mac/.test(navigator.platform)?"after":"split"),t==i?s=t:t==s&&(i=t,o=n,n=r,r=o),e[i](n)[s](r)}function et(e,t,n){return function(){return tt(e,t,this,n),this.blur(),!1}}function tt(t,n,r,o){r=e(r).addClass("jspActive");var u,a,f=!0,l=function(){t!==0&&s.scrollByX(t*i.arrowButtonSpeed),n!==0&&s.scrollByY(n*i.arrowButtonSpeed),a=setTimeout(l,f?i.initialDelay:i.arrowRepeatFreq),f=!1};l(),u=o?"mouseout.jsp":"mouseup.jsp",o=o||e("html"),o.bind(u,function(){r.removeClass("jspActive"),a&&clearTimeout(a),a=null,o.unbind(u)})}function nt(){rt(),v&&N.bind("mousedown.jsp",function(t){if(t.originalTarget===n||t.originalTarget==t.currentTarget){var r=e(this),o=r.offset(),u=t.pageY-o.top-w,f,l=!0,p=function(){var e=r.offset(),n=t.pageY-e.top-L/2,o=a*i.scrollPagePercent,c=y*o/(h-a);if(u<0)w-c>n?s.scrollByY(-o):st(n);else{if(!(u>0)){d();return}w+c<n?s.scrollByY(o):st(n)}f=setTimeout(p,l?i.initialDelay:i.trackClickRepeatFreq),l=!1},d=function(){f&&clearTimeout(f),f=null,e(document).unbind("mouseup.jsp",d)};return p(),e(document).bind("mouseup.jsp",d),!1}}),m&&_.bind("mousedown.jsp",function(t){if(t.originalTarget===n||t.originalTarget==t.currentTarget){var r=e(this),o=r.offset(),a=t.pageX-o.left-x,f,h=!0,p=function(){var e=r.offset(),n=t.pageX-e.left-P/2,o=u*i.scrollPagePercent,c=S*o/(l-u);if(a<0)x-c>n?s.scrollByX(-o):ut(n);else{if(!(a>0)){d();return}x+c<n?s.scrollByX(o):ut(n)}f=setTimeout(p,h?i.initialDelay:i.trackClickRepeatFreq),h=!1},d=function(){f&&clearTimeout(f),f=null,e(document).unbind("mouseup.jsp",d)};return p(),e(document).bind("mouseup.jsp",d),!1}})}function rt(){_&&_.unbind("mousedown.jsp"),N&&N.unbind("mousedown.jsp")}function it(){e("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"),g&&g.removeClass("jspActive"),E&&E.removeClass("jspActive")}function st(e,t){if(!v)return;e<0?e=0:e>y&&(e=y),t===n&&(t=i.animateScroll),t?s.animate(g,"top",e,ot):(g.css("top",e),ot(e))}function ot(e){e===n&&(e=g.position().top),f.scrollTop(0),w=e;var r=w===0,i=w==y,s=e/y,u=-s*(h-a);if(R!=r||z!=i)R=r,z=i,t.trigger("jsp-arrow-change",[R,z,U,W]);ft(r,i),o.css("top",u),t.trigger("jsp-scroll-y",[-u,r,i]).trigger("scroll")}function ut(e,t){if(!m)return;e<0?e=0:e>S&&(e=S),t===n&&(t=i.animateScroll),t?s.animate(E,"left",e,at):(E.css("left",e),at(e))}function at(e){e===n&&(e=E.position().left),f.scrollTop(0),x=e;var r=x===0,i=x==S,s=e/S,a=-s*(l-u);if(U!=r||W!=i)U=r,W=i,t.trigger("jsp-arrow-change",[R,z,U,W]);lt(r,i),o.css("left",a),t.trigger("jsp-scroll-x",[-a,r,i]).trigger("scroll")}function ft(e,t){i.showArrows&&(A[e?"addClass":"removeClass"]("jspDisabled"),O[t?"addClass":"removeClass"]("jspDisabled"))}function lt(e,t){i.showArrows&&(H[e?"addClass":"removeClass"]("jspDisabled"),B[t?"addClass":"removeClass"]("jspDisabled"))}function ct(e,t){var n=e/(h-a);st(n*y,t)}function ht(e,t){var n=e/(l-u);ut(n*S,t)}function pt(t,n,r){var s,o,l,c=0,h=0,p,d,v,m,g,y;try{s=e(t)}catch(w){return}o=s.outerHeight(),l=s.outerWidth(),f.scrollTop(0),f.scrollLeft(0);while(!s.is(".jspPane")){c+=s.position().top,h+=s.position().left,s=s.offsetParent();if(/^body|html$/i.test(s[0].nodeName))return}p=vt(),v=p+a,c<p||n?g=c-i.verticalGutter:c+o>v&&(g=c-a+o+i.verticalGutter),g&&ct(g,r),d=dt(),m=d+u,h<d||n?y=h-i.horizontalGutter:h+l>m&&(y=h-u+l+i.horizontalGutter),y&&ht(y,r)}function dt(){return-o.position().left}function vt(){return-o.position().top}function mt(){var e=h-a;return e>20&&e-vt()<10}function gt(){var e=l-u;return e>20&&e-dt()<10}function yt(){f.unbind(V).bind(V,function(e,t,n,r){var o=x,u=w;return s.scrollBy(n*i.mouseWheelSpeed,-r*i.mouseWheelSpeed,!1),o==x&&u==w})}function bt(){f.unbind(V)}function wt(){return!1}function Et(){o.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(e){pt(e.target,!1)})}function St(){o.find(":input,a").unbind("focus.jsp")}function xt(){function l(){var e=x,t=w;switch(n){case 40:s.scrollByY(i.keyboardSpeed,!1);break;case 38:s.scrollByY(-i.keyboardSpeed,!1);break;case 34:case 32:s.scrollByY(a*i.scrollPagePercent,!1);break;case 33:s.scrollByY(-a*i.scrollPagePercent,!1);break;case 39:s.scrollByX(i.keyboardSpeed,!1);break;case 37:s.scrollByX(-i.keyboardSpeed,!1)}return r=e!=x||t!=w,r}var n,r,u=[];m&&u.push(M[0]),v&&u.push(T[0]),o.focus(function(){t.focus()}),t.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(t){if(t.target!==this&&(!u.length||!e(t.target).closest(u).length))return;var i=x,s=w;switch(t.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:n=t.keyCode,l();break;case 35:ct(h-a),n=null;break;case 36:ct(0),n=null}return r=t.keyCode==n&&i!=x||s!=w,!r}).bind("keypress.jsp",function(e){return e.keyCode==n&&l(),!r}),i.hideFocus?(t.css("outline","none"),"hideFocus"in f[0]&&t.attr("hideFocus",!0)):(t.css("outline",""),"hideFocus"in f[0]&&t.attr("hideFocus",!1))}function Tt(){t.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")}function Nt(){if(location.hash&&location.hash.length>1){var t,n,r=escape(location.hash);try{t=e(r)}catch(i){return}t.length&&o.find(r)&&(f.scrollTop()===0?n=setInterval(function(){f.scrollTop()>0&&(pt(r,!0),e(document).scrollTop(f.position().top),clearInterval(n))},50):(pt(r,!0),e(document).scrollTop(f.position().top)))}}function Ct(){e("a.jspHijack").unbind("click.jsp-hijack").removeClass("jspHijack")}function kt(){Ct(),e("a[href^=#]").addClass("jspHijack").bind("click.jsp-hijack",function(){var e=this.href.split("#"),t;if(e.length>1){t=e[1];if(t.length>0&&o.find("#"+t).length>0)return pt("#"+t,!0),!1}})}function Lt(){var e,t,n,r,i,o=!1;f.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(s){var u=s.originalEvent.touches[0];e=dt(),t=vt(),n=u.pageX,r=u.pageY,i=!1,o=!0}).bind("touchmove.jsp",function(u){if(!o)return;var a=u.originalEvent.touches[0],f=x,l=w;return s.scrollTo(e+n-a.pageX,t+r-a.pageY),i=i||Math.abs(n-a.pageX)>5||Math.abs(r-a.pageY)>5,f==x&&l==w}).bind("touchend.jsp",function(e){o=!1}).bind("click.jsp-touchclick",function(e){if(i)return i=!1,!1})}function At(){var e=vt(),n=dt();t.removeClass("jspScrollable").unbind(".jsp"),t.replaceWith(X.append(o.children())),X.scrollTop(e),X.scrollLeft(n)}var i,s=this,o,u,a,f,l,h,p,d,v,m,g,y,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q,R=!0,U=!0,z=!1,W=!1,X=t.clone(!1,!1).empty(),V=e.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";F=t.css("paddingTop")+" "+t.css("paddingRight")+" "+t.css("paddingBottom")+" "+t.css("paddingLeft"),I=(parseInt(t.css("paddingLeft"),10)||0)+(parseInt(t.css("paddingRight"),10)||0),e.extend(s,{reinitialise:function(t){t=e.extend({},i,t),$(t)},scrollToElement:function(e,t,n){pt(e,t,n)},scrollTo:function(e,t,n){ht(e,n),ct(t,n)},scrollToX:function(e,t){ht(e,t)},scrollToY:function(e,t){ct(e,t)},scrollToPercentX:function(e,t){ht(e*(l-u),t)},scrollToPercentY:function(e,t){ct(e*(h-a),t)},scrollBy:function(e,t,n){s.scrollByX(e,n),s.scrollByY(t,n)},scrollByX:function(e,t){var n=dt()+Math[e<0?"floor":"ceil"](e),r=n/(l-u);ut(r*S,t)},scrollByY:function(e,t){var n=vt()+Math[e<0?"floor":"ceil"](e),r=n/(h-a);st(r*y,t)},positionDragX:function(e,t){ut(e,t)},positionDragY:function(e,t){st(e,t)},animate:function(e,t,n,r){var s={};s[t]=n,e.animate(s,{duration:i.animateDuration,easing:i.animateEase,queue:!1,step:r})},getContentPositionX:function(){return dt()},getContentPositionY:function(){return vt()},getContentWidth:function(){return l},getContentHeight:function(){return h},getPercentScrolledX:function(){return dt()/(l-u)},getPercentScrolledY:function(){return vt()/(h-a)},getIsScrollableH:function(){return m},getIsScrollableV:function(){return v},getContentPane:function(){return o},scrollToBottom:function(e){st(y,e)},hijackInternalLinks:function(){kt()},destroy:function(){At()}}),$(r)}return t=e.extend({},e.fn.jScrollPane.defaults,t),e.each(["mouseWheelSpeed","arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){t[this]=t[this]||t.speed}),this.each(function(){var n=e(this),i=n.data("jsp");i?i.reinitialise(t):(i=new r(n,t),n.data("jsp",i))})},e.fn.jScrollPane.defaults={showArrows:!1,maintainPosition:!0,stickToBottom:!1,stickToRight:!1,clickOnTrack:!0,autoReinitialise:!1,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:n,animateScroll:!1,animateDuration:300,animateEase:"linear",hijackInternalLinks:!1,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:0,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:!1,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:!0,hideFocus:!1,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:.8}})(jQuery,this),function(e){function r(t){var n=t||window.event,r=[].slice.call(arguments,1),i=0,s=!0,o=0,u=0;return t=e.event.fix(n),t.type="mousewheel",n.wheelDelta&&(i=n.wheelDelta/120),n.detail&&(i=-n.detail/3),u=i,n.axis!==undefined&&n.axis===n.HORIZONTAL_AXIS&&(u=0,o=-1*i),n.wheelDeltaY!==undefined&&(u=n.wheelDeltaY/120),n.wheelDeltaX!==undefined&&(o=-1*n.wheelDeltaX/120),r.unshift(t,i,o,u),(e.event.dispatch||e.event.handle).apply(this,r)}var t=["DOMMouseScroll","mousewheel"];if(e.event.fixHooks)for(var n=t.length;n;)e.event.fixHooks[t[--n]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=t.length;e;)this.addEventListener(t[--e],r,!1);else this.onmousewheel=r},teardown:function(){if(this.removeEventListener)for(var e=t.length;e;)this.removeEventListener(t[--e],r,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}(jQuery);var swfobject=function(){function C(){if(b)return;try{var e=a.getElementsByTagName("body")[0].appendChild(U("span"));e.parentNode.removeChild(e)}catch(t){return}b=!0;var n=c.length;for(var r=0;r<n;r++)c[r]()}function k(e){b?e():c[c.length]=e}function L(t){if(typeof u.addEventListener!=e)u.addEventListener("load",t,!1);else if(typeof a.addEventListener!=e)a.addEventListener("load",t,!1);else if(typeof u.attachEvent!=e)z(u,"onload",t);else if(typeof u.onload=="function"){var n=u.onload;u.onload=function(){n(),t()}}else u.onload=t}function A(){l?O():M()}function O(){var n=a.getElementsByTagName("body")[0],r=U(t);r.setAttribute("type",i);var s=n.appendChild(r);if(s){var o=0;(function(){if(typeof s.GetVariable!=e){var t=s.GetVariable("$version");t&&(t=t.split(" ")[1].split(","),T.pv=[parseInt(t[0],10),parseInt(t[1],10),parseInt(t[2],10)])}else if(o<10){o++,setTimeout(arguments.callee,10);return}n.removeChild(r),s=null,M()})()}else M()}function M(){var t=h.length;if(t>0)for(var n=0;n<t;n++){var r=h[n].id,i=h[n].callbackFn,s={success:!1,id:r};if(T.pv[0]>0){var o=R(r);if(o)if(W(h[n].swfVersion)&&!(T.wk&&T.wk<312))V(r,!0),i&&(s.success=!0,s.ref=_(r),i(s));else if(h[n].expressInstall&&D()){var u={};u.data=h[n].expressInstall,u.width=o.getAttribute("width")||"0",u.height=o.getAttribute("height")||"0",o.getAttribute("class")&&(u.styleclass=o.getAttribute("class")),o.getAttribute("align")&&(u.align=o.getAttribute("align"));var a={},f=o.getElementsByTagName("param"),l=f.length;for(var c=0;c<l;c++)f[c].getAttribute("name").toLowerCase()!="movie"&&(a[f[c].getAttribute("name")]=f[c].getAttribute("value"));P(u,a,r,i)}else H(o),i&&i(s)}else{V(r,!0);if(i){var p=_(r);p&&typeof p.SetVariable!=e&&(s.success=!0,s.ref=p),i(s)}}}}function _(n){var r=null,i=R(n);if(i&&i.nodeName=="OBJECT")if(typeof i.SetVariable!=e)r=i;else{var s=i.getElementsByTagName(t)[0];s&&(r=s)}return r}function D(){return!w&&W("6.0.65")&&(T.win||T.mac)&&!(T.wk&&T.wk<312)}function P(t,n,r,i){w=!0,g=i||null,y={success:!1,id:r};var o=R(r);if(o){o.nodeName=="OBJECT"?(v=B(o),m=null):(v=o,m=r),t.id=s;if(typeof t.width==e||!/%$/.test(t.width)&&parseInt(t.width,10)<310)t.width="310";if(typeof t.height==e||!/%$/.test(t.height)&&parseInt(t.height,10)<137)t.height="137";a.title=a.title.slice(0,47)+" - Flash Player Installation";var f=T.ie&&T.win?"ActiveX":"PlugIn",l="MMredirectURL="+u.location.toString().replace(/&/g,"%26")+"&MMplayerType="+f+"&MMdoctitle="+a.title;typeof n.flashvars!=e?n.flashvars+="&"+l:n.flashvars=l;if(T.ie&&T.win&&o.readyState!=4){var c=U("div");r+="SWFObjectNew",c.setAttribute("id",r),o.parentNode.insertBefore(c,o),o.style.display="none",function(){o.readyState==4?o.parentNode.removeChild(o):setTimeout(arguments.callee,10)}()}j(t,n,r)}}function H(e){if(T.ie&&T.win&&e.readyState!=4){var t=U("div");e.parentNode.insertBefore(t,e),t.parentNode.replaceChild(B(e),t),e.style.display="none",function(){e.readyState==4?e.parentNode.removeChild(e):setTimeout(arguments.callee,10)}()}else e.parentNode.replaceChild(B(e),e)}function B(e){var n=U("div");if(T.win&&T.ie)n.innerHTML=e.innerHTML;else{var r=e.getElementsByTagName(t)[0];if(r){var i=r.childNodes;if(i){var s=i.length;for(var o=0;o<s;o++)(i[o].nodeType!=1||i[o].nodeName!="PARAM")&&i[o].nodeType!=8&&n.appendChild(i[o].cloneNode(!0))}}}return n}function j(n,r,s){var o,u=R(s);if(T.wk&&T.wk<312)return o;if(u){typeof n.id==e&&(n.id=s);if(T.ie&&T.win){var a="";for(var f in n)n[f]!=Object.prototype[f]&&(f.toLowerCase()=="data"?r.movie=n[f]:f.toLowerCase()=="styleclass"?a+='class = "'+n[f]+'"':f.toLowerCase()!="classid"&&(a+=" "+f+' = "'+n[f]+'"'));var l="";for(var c in r)r[c]!=Object.prototype[c]&&(l+=' < param name = "'+c+'"value = "'+r[c]+'" / >');u.outerHTML=' < object classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+a+">"+l+"</object>",p[p.length]=n.id,o=R(n.id)}else{var h=U(t);h.setAttribute("type",i);for(var d in n)n[d]!=Object.prototype[d]&&(d.toLowerCase()=="styleclass"?h.setAttribute("class",n[d]):d.toLowerCase()!="classid"&&h.setAttribute(d,n[d]));for(var v in r)r[v]!=Object.prototype[v]&&v.toLowerCase()!="movie"&&F(h,v,r[v]);u.parentNode.replaceChild(h,u),o=h}}return o}function F(e,t,n){var r=U("param");r.setAttribute("name",t),r.setAttribute("value",n),e.appendChild(r)}function I(e){var t=R(e);t&&t.nodeName=="OBJECT"&&(T.ie&&T.win?(t.style.display="none",function(){t.readyState==4?q(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function q(e){var t=R(e);if(t){for(var n in t)typeof t[n]=="function"&&(t[n]=null);t.parentNode.removeChild(t)}}function R(e){var t=null;try{t=a.getElementById(e)}catch(n){}return t}function U(e){return a.createElement(e)}function z(e,t,n){e.attachEvent(t,n),d[d.length]=[e,t,n]}function W(e){var t=T.pv,n=e.split(".");return n[0]=parseInt(n[0],10),n[1]=parseInt(n[1],10)||0,n[2]=parseInt(n[2],10)||0,t[0]>n[0]||t[0]==n[0]&&t[1]>n[1]||t[0]==n[0]&&t[1]==n[1]&&t[2]>=n[2]?!0:!1}function X(n,r,i,s){if(T.ie&&T.mac)return;var o=a.getElementsByTagName("head")[0];if(!o)return;var u=i&&typeof i=="string"?i:"screen";s&&(E=null,S=null);if(!E||S!=u){var f=U("style");f.setAttribute("type","text/css"),f.setAttribute("media",u),E=o.appendChild(f),T.ie&&T.win&&typeof a.styleSheets!=e&&a.styleSheets.length>0&&(E=a.styleSheets[a.styleSheets.length-1]),S=u}T.ie&&T.win?E&&typeof E.addRule==t&&E.addRule(n,r):E&&typeof a.createTextNode!=e&&E.appendChild(a.createTextNode(n+" {"+r+"}"))}function V(e,t){if(!x)return;var n=t?"visible":"hidden";b&&R(e)?R(e).style.visibility=n:X("#"+e,"visibility:"+n)}function $(t){var n=/[\\\"<>\.;]/,r=n.exec(t)!=null;return r&&typeof encodeURIComponent!=e?encodeURIComponent(t):t}var e="undefined",t="object",n="Shockwave Flash",r="ShockwaveFlash.ShockwaveFlash",i="application/x-shockwave-flash",s="SWFObjectExprInst",o="onreadystatechange",u=window,a=document,f=navigator
,l=!1,c=[A],h=[],p=[],d=[],v,m,g,y,b=!1,w=!1,E,S,x=!0,T=function(){var s=typeof a.getElementById!=e&&typeof a.getElementsByTagName!=e&&typeof a.createElement!=e,o=f.userAgent.toLowerCase(),c=f.platform.toLowerCase(),h=c?/win/.test(c):/win/.test(o),p=c?/mac/.test(c):/mac/.test(o),d=/webkit/.test(o)?parseFloat(o.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,v=!1,m=[0,0,0],g=null;if(typeof f.plugins!=e&&typeof f.plugins[n]==t)g=f.plugins[n].description,g&&(typeof f.mimeTypes==e||!f.mimeTypes[i]||!!f.mimeTypes[i].enabledPlugin)&&(l=!0,v=!1,g=g.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),m[0]=parseInt(g.replace(/^(.*)\..*$/,"$1"),10),m[1]=parseInt(g.replace(/^.*\.(.*)\s.*$/,"$1"),10),m[2]=/[a-zA-Z]/.test(g)?parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof u.ActiveXObject!=e)try{var y=new ActiveXObject(r);y&&(g=y.GetVariable("$version"),g&&(v=!0,g=g.split(" ")[1].split(","),m=[parseInt(g[0],10),parseInt(g[1],10),parseInt(g[2],10)]))}catch(b){}return{w3:s,pv:m,wk:d,ie:v,win:h,mac:p}}(),N=function(){if(!T.w3)return;(typeof a.readyState!=e&&a.readyState=="complete"||typeof a.readyState==e&&(a.getElementsByTagName("body")[0]||a.body))&&C(),b||(typeof a.addEventListener!=e&&a.addEventListener("DOMContentLoaded",C,!1),T.ie&&T.win&&(a.attachEvent(o,function(){a.readyState=="complete"&&(a.detachEvent(o,arguments.callee),C())}),u==top&&function(){if(b)return;try{a.documentElement.doScroll("left")}catch(e){setTimeout(arguments.callee,0);return}C()}()),T.wk&&function(){if(b)return;if(!/loaded|complete/.test(a.readyState)){setTimeout(arguments.callee,0);return}C()}(),L(C))}(),J=function(){T.ie&&T.win&&window.attachEvent("onunload",function(){var e=d.length;for(var t=0;t<e;t++)d[t][0].detachEvent(d[t][1],d[t][2]);var n=p.length;for(var r=0;r<n;r++)I(p[r]);for(var i in T)T[i]=null;T=null;for(var s in swfobject)swfobject[s]=null;swfobject=null})}();return{registerObject:function(e,t,n,r){if(T.w3&&e&&t){var i={};i.id=e,i.swfVersion=t,i.expressInstall=n,i.callbackFn=r,h[h.length]=i,V(e,!1)}else r&&r({success:!1,id:e})},getObjectById:function(e){if(T.w3)return _(e)},embedSWF:function(n,r,i,s,o,u,a,f,l,c){var h={success:!1,id:r};T.w3&&!(T.wk&&T.wk<312)&&n&&r&&i&&s&&o?(V(r,!1),k(function(){i+="",s+="";var p={};if(l&&typeof l===t)for(var d in l)p[d]=l[d];p.data=n,p.width=i,p.height=s;var v={};if(f&&typeof f===t)for(var m in f)v[m]=f[m];if(a&&typeof a===t)for(var g in a)typeof v.flashvars!=e?v.flashvars+="&"+g+"="+a[g]:v.flashvars=g+"="+a[g];if(W(o)){var y=j(p,v,r);p.id==r&&V(r,!0),h.success=!0,h.ref=y}else{if(u&&D()){p.data=u,P(p,v,r,c);return}V(r,!0)}c&&c(h)})):c&&c(h)},switchOffAutoHideShow:function(){x=!1},ua:T,getFlashPlayerVersion:function(){return{major:T.pv[0],minor:T.pv[1],release:T.pv[2]}},hasFlashPlayerVersion:W,createSWF:function(e,t,n){return T.w3?j(e,t,n):undefined},showExpressInstall:function(e,t,n,r){T.w3&&D()&&P(e,t,n,r)},removeSWF:function(e){T.w3&&I(e)},createCSS:function(e,t,n,r){T.w3&&X(e,t,n,r)},addDomLoadEvent:k,addLoadEvent:L,getQueryParamValue:function(e){var t=a.location.search||a.location.hash;if(t){/\?/.test(t)&&(t=t.split("?")[1]);if(e==null)return $(t);var n=t.split("&");for(var r=0;r<n.length;r++)if(n[r].substring(0,n[r].indexOf("="))==e)return $(n[r].substring(n[r].indexOf("=")+1))}return""},expressInstallCallback:function(){if(w){var e=R(s);e&&v&&(e.parentNode.replaceChild(v,e),m&&(V(m,!0),T.ie&&T.win&&(v.style.display="block")),g&&g(y)),w=!1}}}}(),SWFUpload;SWFUpload==undefined&&(SWFUpload=function(e){this.initSWFUpload(e)}),SWFUpload.prototype.initSWFUpload=function(e){try{this.customSettings={},this.settings=e,this.eventQueue=[],this.movieName="SWFUpload_"+SWFUpload.movieCount++,this.movieElement=null,SWFUpload.instances[this.movieName]=this,this.initSettings(),this.loadFlash(),this.displayDebugInfo()}catch(t){throw delete SWFUpload.instances[this.movieName],t}},SWFUpload.instances={},SWFUpload.movieCount=0,SWFUpload.version="2.2.0 2009-03-25",SWFUpload.QUEUE_ERROR={QUEUE_LIMIT_EXCEEDED:-100,FILE_EXCEEDS_SIZE_LIMIT:-110,ZERO_BYTE_FILE:-120,INVALID_FILETYPE:-130},SWFUpload.UPLOAD_ERROR={HTTP_ERROR:-200,MISSING_UPLOAD_URL:-210,IO_ERROR:-220,SECURITY_ERROR:-230,UPLOAD_LIMIT_EXCEEDED:-240,UPLOAD_FAILED:-250,SPECIFIED_FILE_ID_NOT_FOUND:-260,FILE_VALIDATION_FAILED:-270,FILE_CANCELLED:-280,UPLOAD_STOPPED:-290},SWFUpload.FILE_STATUS={QUEUED:-1,IN_PROGRESS:-2,ERROR:-3,COMPLETE:-4,CANCELLED:-5},SWFUpload.BUTTON_ACTION={SELECT_FILE:-100,SELECT_FILES:-110,START_UPLOAD:-120},SWFUpload.CURSOR={ARROW:-1,HAND:-2},SWFUpload.WINDOW_MODE={WINDOW:"window",TRANSPARENT:"transparent",OPAQUE:"opaque"},SWFUpload.completeURL=function(e){if(typeof e!="string"||e.match(/^https?:\/\//i)||e.match(/^\//))return e;var t=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:""),n=window.location.pathname.lastIndexOf("/");return n<=0?path="/":path=window.location.pathname.substr(0,n)+"/",path+e},SWFUpload.prototype.initSettings=function(){this.ensureDefault=function(e,t){this.settings[e]=this.settings[e]==undefined?t:this.settings[e]},this.ensureDefault("upload_url",""),this.ensureDefault("preserve_relative_urls",!1),this.ensureDefault("file_post_name","Filedata"),this.ensureDefault("post_params",{}),this.ensureDefault("use_query_string",!1),this.ensureDefault("requeue_on_error",!1),this.ensureDefault("http_success",[]),this.ensureDefault("assume_success_timeout",0),this.ensureDefault("file_types","*.*"),this.ensureDefault("file_types_description","All Files"),this.ensureDefault("file_size_limit",0),this.ensureDefault("file_upload_limit",0),this.ensureDefault("file_queue_limit",0),this.ensureDefault("flash_url","swfupload.swf"),this.ensureDefault("prevent_swf_caching",!0),this.ensureDefault("button_image_url",""),this.ensureDefault("button_width",1),this.ensureDefault("button_height",1),this.ensureDefault("button_text",""),this.ensureDefault("button_text_style","color: #000000; font-size: 16pt;"),this.ensureDefault("button_text_top_padding",0),this.ensureDefault("button_text_left_padding",0),this.ensureDefault("button_action",SWFUpload.BUTTON_ACTION.SELECT_FILES),this.ensureDefault("button_disabled",!1),this.ensureDefault("button_placeholder_id",""),this.ensureDefault("button_placeholder",null),this.ensureDefault("button_cursor",SWFUpload.CURSOR.ARROW),this.ensureDefault("button_window_mode",SWFUpload.WINDOW_MODE.WINDOW),this.ensureDefault("debug",!1),this.settings.debug_enabled=this.settings.debug,this.settings.return_upload_start_handler=this.returnUploadStart,this.ensureDefault("swfupload_loaded_handler",null),this.ensureDefault("file_dialog_start_handler",null),this.ensureDefault("file_queued_handler",null),this.ensureDefault("file_queue_error_handler",null),this.ensureDefault("file_dialog_complete_handler",null),this.ensureDefault("upload_start_handler",null),this.ensureDefault("upload_progress_handler",null),this.ensureDefault("upload_error_handler",null),this.ensureDefault("upload_success_handler",null),this.ensureDefault("upload_complete_handler",null),this.ensureDefault("debug_handler",this.debugMessage),this.ensureDefault("custom_settings",{}),this.customSettings=this.settings.custom_settings,!this.settings.prevent_swf_caching||(this.settings.flash_url=this.settings.flash_url+(this.settings.flash_url.indexOf("?")<0?"?":"&")+"preventswfcaching="+(new Date).getTime()),this.settings.preserve_relative_urls||(this.settings.upload_url=SWFUpload.completeURL(this.settings.upload_url),this.settings.button_image_url=SWFUpload.completeURL(this.settings.button_image_url)),delete this.ensureDefault},SWFUpload.prototype.loadFlash=function(){var e,t;if(document.getElementById(this.movieName)!==null)throw"ID "+this.movieName+" is already in use. The Flash Object could not be added";e=document.getElementById(this.settings.button_placeholder_id)||this.settings.button_placeholder;if(e==undefined)throw"Could not find the placeholder element: "+this.settings.button_placeholder_id;t=document.createElement("div"),t.innerHTML=this.getFlashHTML(),e.parentNode.replaceChild(t.firstChild,e),window[this.movieName]==undefined&&(window[this.movieName]=this.getMovieElement())},SWFUpload.prototype.getFlashHTML=function(){return[' < object id = "',this.movieName,'"type = "application/x-shockwave-flash"data = "',this.settings.flash_url,'"width = "',this.settings.button_width,'"height = "',this.settings.button_height,'"class = "swfupload" > ',' < param name = "wmode"value = "',this.settings.button_window_mode,'" / >',' < param name = "movie"value = "',this.settings.flash_url,'" / >',' < param name = "quality"value = "high" / >',' < param name = "menu"value = "false" / >',' < param name = "allowScriptAccess"value = "always" / >',' < param name = "flashvars"value = "'+this.getFlashVars()+'" / >',"</object>"].join("")},SWFUpload.prototype.getFlashVars=function(){var e=this.buildParamString(),t=this.settings.http_success.join(",");return["movieName=",encodeURIComponent(this.movieName),"&amp;uploadURL=",encodeURIComponent(this.settings.upload_url),"&amp;useQueryString=",encodeURIComponent(this.settings.use_query_string),"&amp;requeueOnError=",encodeURIComponent(this.settings.requeue_on_error),"&amp;httpSuccess=",encodeURIComponent(t),"&amp;assumeSuccessTimeout=",encodeURIComponent(this.settings.assume_success_timeout),"&amp;params=",encodeURIComponent(e),"&amp;filePostName=",encodeURIComponent(this.settings.file_post_name),"&amp;fileTypes=",encodeURIComponent(this.settings.file_types),"&amp;fileTypesDescription=",encodeURIComponent(this.settings.file_types_description),"&amp;fileSizeLimit=",encodeURIComponent(this.settings.file_size_limit),"&amp;fileUploadLimit=",encodeURIComponent(this.settings.file_upload_limit),"&amp;fileQueueLimit=",encodeURIComponent(this.settings.file_queue_limit),"&amp;debugEnabled=",encodeURIComponent(this.settings.debug_enabled),"&amp;buttonImageURL=",encodeURIComponent(this.settings.button_image_url),"&amp;buttonWidth=",encodeURIComponent(this.settings.button_width),"&amp;buttonHeight=",encodeURIComponent(this.settings.button_height),"&amp;buttonText=",encodeURIComponent(this.settings.button_text),"&amp;buttonTextTopPadding=",encodeURIComponent(this.settings.button_text_top_padding),"&amp;buttonTextLeftPadding=",encodeURIComponent(this.settings.button_text_left_padding),"&amp;buttonTextStyle=",encodeURIComponent(this.settings.button_text_style),"&amp;buttonAction=",encodeURIComponent(this.settings.button_action),"&amp;buttonDisabled=",encodeURIComponent(this.settings.button_disabled),"&amp;buttonCursor=",encodeURIComponent(this.settings.button_cursor)].join("")},SWFUpload.prototype.getMovieElement=function(){this.movieElement==undefined&&(this.movieElement=document.getElementById(this.movieName));if(this.movieElement===null)throw"Could not find Flash element";return this.movieElement},SWFUpload.prototype.buildParamString=function(){var e=this.settings.post_params,t=[];if(typeof e=="object")for(var n in e)e.hasOwnProperty(n)&&t.push(encodeURIComponent(n.toString())+"="+encodeURIComponent(e[n].toString()));return t.join("&amp;")},SWFUpload.prototype.destroy=function(){try{this.cancelUpload(null,!1);var e=null;e=this.getMovieElement();if(e&&typeof e.CallFunction=="unknown"){for(var t in e)try{typeof e[t]=="function"&&(e[t]=null)}catch(n){}try{e.parentNode.removeChild(e)}catch(r){}}return window[this.movieName]=null,SWFUpload.instances[this.movieName]=null,delete SWFUpload.instances[this.movieName],this.movieElement=null,this.settings=null,this.customSettings=null,this.eventQueue=null,this.movieName=null,!0}catch(i){return!1}},SWFUpload.prototype.displayDebugInfo=function(){this.debug(["---SWFUpload Instance Info---\n","Version: ",SWFUpload.version,"\n","Movie Name: ",this.movieName,"\n","Settings:\n","	","upload_url:               ",this.settings.upload_url,"\n","	","flash_url:                ",this.settings.flash_url,"\n","	","use_query_string:         ",this.settings.use_query_string.toString(),"\n","	","requeue_on_error:         ",this.settings.requeue_on_error.toString(),"\n","	","http_success:             ",this.settings.http_success.join(", "),"\n","	","assume_success_timeout:   ",this.settings.assume_success_timeout,"\n","	","file_post_name:           ",this.settings.file_post_name,"\n","	","post_params:              ",this.settings.post_params.toString(),"\n","	","file_types:               ",this.settings.file_types,"\n","	","file_types_description:   ",this.settings.file_types_description,"\n","	","file_size_limit:          ",this.settings.file_size_limit,"\n","	","file_upload_limit:        ",this.settings.file_upload_limit,"\n","	","file_queue_limit:         ",this.settings.file_queue_limit,"\n","	","debug:                    ",this.settings.debug.toString(),"\n","	","prevent_swf_caching:      ",this.settings.prevent_swf_caching.toString(),"\n","	","button_placeholder_id:    ",this.settings.button_placeholder_id.toString(),"\n","	","button_placeholder:       ",this.settings.button_placeholder?"Set":"Not Set","\n","	","button_image_url:         ",this.settings.button_image_url.toString(),"\n","	","button_width:             ",this.settings.button_width.toString(),"\n","	","button_height:            ",this.settings.button_height.toString(),"\n","	","button_text:              ",this.settings.button_text.toString(),"\n","	","button_text_style:        ",this.settings.button_text_style.toString(),"\n","	","button_text_top_padding:  ",this.settings.button_text_top_padding.toString(),"\n","	","button_text_left_padding: ",this.settings.button_text_left_padding.toString(),"\n","	","button_action:            ",this.settings.button_action.toString(),"\n","	","button_disabled:          ",this.settings.button_disabled.toString(),"\n","	","custom_settings:          ",this.settings.custom_settings.toString(),"\n","Event Handlers:\n","	","swfupload_loaded_handler assigned:  ",(typeof this.settings.swfupload_loaded_handler=="function").toString(),"\n","	","file_dialog_start_handler assigned: ",(typeof this.settings.file_dialog_start_handler=="function").toString(),"\n","	","file_queued_handler assigned:       ",(typeof this.settings.file_queued_handler=="function").toString(),"\n","	","file_queue_error_handler assigned:  ",(typeof this.settings.file_queue_error_handler=="function").toString(),"\n","	","upload_start_handler assigned:      ",(typeof this.settings.upload_start_handler=="function").toString(),"\n","	","upload_progress_handler assigned:   ",(typeof this.settings.upload_progress_handler=="function").toString(),"\n","	","upload_error_handler assigned:      ",(typeof this.settings.upload_error_handler=="function").toString(),"\n","	","upload_success_handler assigned:    ",(typeof this.settings.upload_success_handler=="function").toString(),"\n","	","upload_complete_handler assigned:   ",(typeof this.settings.upload_complete_handler=="function").toString(),"\n","	","debug_handler assigned:             ",(typeof this.settings.debug_handler=="function").toString(),"\n"].join(""))},SWFUpload.prototype.addSetting=function(e,t,n){return t==undefined?this.settings[e]=n:this.settings[e]=t},SWFUpload.prototype.getSetting=function(e){return this.settings[e]!=undefined?this.settings[e]:""},SWFUpload.prototype.callFlash=function(functionName,argumentArray){argumentArray=argumentArray||[];var movieElement=this.getMovieElement(),returnValue,returnString;try{returnString=movieElement.CallFunction(' < invoke name = "'+functionName+'"returntype = "javascript" > '+__flash__argumentsToXML(argumentArray,0)+"</invoke>"),returnValue=eval(returnString)}catch(ex){throw"Call to "+functionName+" failed"}return returnValue!=undefined&&typeof returnValue.post=="object"&&(returnValue=this.unescapeFilePostParams(returnValue)),returnValue},SWFUpload.prototype.selectFile=function(){this.callFlash("SelectFile")},SWFUpload.prototype.selectFiles=function(){this.callFlash("SelectFiles")},SWFUpload.prototype.startUpload=function(e){this.callFlash("StartUpload",[e])},SWFUpload.prototype.cancelUpload=function(e,t){t!==!1&&(t=!0),this.callFlash("CancelUpload",[e,t])},SWFUpload.prototype.stopUpload=function(){this.callFlash("StopUpload")},SWFUpload.prototype.getStats=function(){return this.callFlash("GetStats")},SWFUpload.prototype.setStats=function(e){this.callFlash("SetStats",[e])},SWFUpload.prototype.getFile=function(e){return typeof e=="number"?this.callFlash("GetFileByIndex",[e]):this.callFlash("GetFile",[e])},SWFUpload.prototype.addFileParam=function(e,t,n){return this.callFlash("AddFileParam",[e,t,n])},SWFUpload.prototype.removeFileParam=function(e,t){this.callFlash("RemoveFileParam",[e,t])},SWFUpload.prototype.setUploadURL=function(e){this.settings.upload_url=e.toString(),this.callFlash("SetUploadURL",[e])},SWFUpload.prototype.setPostParams=function(e){this.settings.post_params=e,this.callFlash("SetPostParams",[e])},SWFUpload.prototype.addPostParam=function(e,t){this.settings.post_params[e]=t,this.callFlash("SetPostParams",[this.settings.post_params])},SWFUpload.prototype.removePostParam=function(e){delete this.settings.post_params[e],this.callFlash("SetPostParams",[this.settings.post_params])},SWFUpload.prototype.setFileTypes=function(e,t){this.settings.file_types=e,this.settings.file_types_description=t,this.callFlash("SetFileTypes",[e,t])},SWFUpload.prototype.setFileSizeLimit=function(e){this.settings.file_size_limit=e,this.callFlash("SetFileSizeLimit",[e])},SWFUpload.prototype.setFileUploadLimit=function(e){this.settings.file_upload_limit=e,this.callFlash("SetFileUploadLimit",[e])},SWFUpload.prototype.setFileQueueLimit=function(e){this.settings.file_queue_limit=e,this.callFlash("SetFileQueueLimit",[e])},SWFUpload.prototype.setFilePostName=function(e){this.settings.file_post_name=e,this.callFlash("SetFilePostName",[e])},SWFUpload.prototype.setUseQueryString=function(e){this.settings.use_query_string=e,this.callFlash("SetUseQueryString",[e])},SWFUpload.prototype.setRequeueOnError=function(e){this.settings.requeue_on_error=e,this.callFlash("SetRequeueOnError",[e])},SWFUpload.prototype.setHTTPSuccess=function(e){typeof e=="string"&&(e=e.replace(" ","").split(",")),this.settings.http_success=e,this.callFlash("SetHTTPSuccess",[e])},SWFUpload.prototype.setAssumeSuccessTimeout=function(e){this.settings.assume_success_timeout=e,this.callFlash("SetAssumeSuccessTimeout",[e])},SWFUpload.prototype.setDebugEnabled=function(e){this.settings.debug_enabled=e,this.callFlash("SetDebugEnabled",[e])},SWFUpload.prototype.setButtonImageURL=function(e){e==undefined&&(e=""),this.settings.button_image_url=e,this.callFlash("SetButtonImageURL",[e])},SWFUpload.prototype.setButtonDimensions=function(e,t){this.settings.button_width=e,this.settings.button_height=t;var n=this.getMovieElement();n!=undefined&&(n.style.width=e+"px",n.style.height=t+"px"),this.callFlash("SetButtonDimensions",[e,t])},SWFUpload.prototype.setButtonText=function(e){this.settings.button_text=e,this.callFlash("SetButtonText",[e])},SWFUpload.prototype.setButtonTextPadding=function(e,t){this.settings.button_text_top_padding=t,this.settings.button_text_left_padding=e,this.callFlash("SetButtonTextPadding",[e,t])},SWFUpload.prototype.setButtonTextStyle=function(e){this.settings.button_text_style=e,this.callFlash("SetButtonTextStyle",[e])},SWFUpload.prototype.setButtonDisabled=function(e){this.settings.button_disabled=e,this.callFlash("SetButtonDisabled",[e])},SWFUpload.prototype.setButtonAction=function(e){this.settings.button_action=e,this.callFlash("SetButtonAction",[e])},SWFUpload.prototype.setButtonCursor=function(e){this.settings.button_cursor=e,this.callFlash("SetButtonCursor",[e])},SWFUpload.prototype.queueEvent=function(e,t){t==undefined?t=[]:t instanceof Array||(t=[t]);var n=this;if(typeof this.settings[e]=="function")this.eventQueue.push(function(){this.settings[e].apply(this,t)}),setTimeout(function(){n.executeNextEvent()},0);else if(this.settings[e]!==null)throw"Event handler "+e+" is unknown or is not a function"},SWFUpload.prototype.executeNextEvent=function(){var e=this.eventQueue?this.eventQueue.shift():null;typeof e=="function"&&e.apply(this)},SWFUpload.prototype.unescapeFilePostParams=function(e){var t=/[$]([0-9a-f]{4})/i,n={},r;if(e!=undefined){for(var i in e.post)if(e.post.hasOwnProperty(i)){r=i;var s;while((s=t.exec(r))!==null)r=r.replace(s[0],String.fromCharCode(parseInt("0x"+s[1],16)));n[r]=e.post[i]}e.post=n}return e},SWFUpload.prototype.testExternalInterface=function(){try{return this.callFlash("TestExternalInterface")}catch(e){return!1}},SWFUpload.prototype.flashReady=function(){var e=this.getMovieElement();if(!e){this.debug("Flash called back ready but the flash movie can't be found.");return}this.cleanUp(e),this.queueEvent("swfupload_loaded_handler ")},SWFUpload.prototype.cleanUp=function(e){try{if(this.movieElement&&typeof e.CallFunction=="unknown "){this.debug("Removing Flash functions hooks(this should only run in IE and should prevent memory leaks)");for(var t in e)try{typeof e[t]=="
                function "&&(e[t]=null)}catch(n){}}}catch(r){}window.__flash__removeCallback=function(e,t){try{e&&(e[t]=null)}catch(n){}}},SWFUpload.prototype.fileDialogStart=function(){this.queueEvent("file_dialog_start_handler ")},SWFUpload.prototype.fileQueued=function(e){e=this.unescapeFilePostParams(e),this.queueEvent("file_queued_handler ",e)},SWFUpload.prototype.fileQueueError=function(e,t,n){e=this.unescapeFilePostParams(e),this.queueEvent("file_queue_error_handler ",[e,t,n])},SWFUpload.prototype.fileDialogComplete=function(e,t,n){this.queueEvent("file_dialog_complete_handler ",[e,t,n])},SWFUpload.prototype.uploadStart=function(e){e=this.unescapeFilePostParams(e),this.queueEvent("return_upload_start_handler ",e)},SWFUpload.prototype.returnUploadStart=function(e){var t;if(typeof this.settings.upload_start_handler=="
                function ")e=this.unescapeFilePostParams(e),t=this.settings.upload_start_handler.call(this,e);else if(this.settings.upload_start_handler!=undefined)throw"upload_start_handler must be a
                function ";t===undefined&&(t=!0),t=!!t,this.callFlash("ReturnUploadStart ",[t])},SWFUpload.prototype.uploadProgress=function(e,t,n){e=this.unescapeFilePostParams(e),this.queueEvent("upload_progress_handler ",[e,t,n])},SWFUpload.prototype.uploadError=function(e,t,n){e=this.unescapeFilePostParams(e),this.queueEvent("upload_error_handler ",[e,t,n])},SWFUpload.prototype.uploadSuccess=function(e,t,n){e=this.unescapeFilePostParams(e),this.queueEvent("upload_success_handler ",[e,t,n])},SWFUpload.prototype.uploadComplete=function(e){e=this.unescapeFilePostParams(e),this.queueEvent("upload_complete_handler ",e)},SWFUpload.prototype.debug=function(e){this.queueEvent("debug_handler ",e)},SWFUpload.prototype.debugMessage=function(e){if(this.settings.debug){var t,n=[];if(typeof e=="object "&&typeof e.name=="string "&&typeof e.message=="string "){for(var r in e)e.hasOwnProperty(r)&&n.push(r+": "+e[r]);t=n.join("\n ")||"",n=t.split("\n "),t="EXCEPTION: "+n.join("\nEXCEPTION: "),SWFUpload.Console.writeLine(t)}else SWFUpload.Console.writeLine(e)}},SWFUpload.Console={},SWFUpload.Console.writeLine=function(e){var t,n;try{t=document.getElementById("SWFUpload_Console "),t||(n=document.createElement("form "),document.getElementsByTagName("body ")[0].appendChild(n),t=document.createElement("textarea "),t.id="SWFUpload_Console ",t.style.fontFamily="monospace ",t.setAttribute("wrap ","off "),t.wrap="off ",t.style.overflow="auto ",t.style.width="700px ",t.style.height="350px ",t.style.margin="5px ",n.appendChild(t)),t.value+=e+"\n ",t.scrollTop=t.scrollHeight-t.clientHeight}catch(r){alert("Exception: "+r.name+"Message: "+r.message)}},function(e){var t={init:function(t,r){return this.each(function(){var i=e(this),s=i.clone(),o=e.extend({id:i.attr("id "),swf:"uploadify.swf ",uploader:"uploadify.php ",auto:!0,buttonClass:"",buttonCursor:"hand ",buttonImage:null,buttonText:"SELECT FILES ",checkExisting:!1,debug:!1,fileObjName:"Filedata ",fileSizeLimit:0,fileTypeDesc:"All Files ",fileTypeExts:" * . * ",height:30,method:"post ",multi:!0,formData:{},preventCaching:!0,progressData:"percentage ",queueID:!1,queueSizeLimit:999,removeCompleted:!0,removeTimeout:3,requeueErrors:!1,successTimeout:30,uploadLimit:0,width:120,overrideEvents:[]},t),u={assume_success_timeout:o.successTimeout,button_placeholder_id:o.id,button_width:o.width,button_height:o.height,button_text:null,button_text_style:null,button_text_top_padding:0,button_text_left_padding:0,button_action:o.multi?SWFUpload.BUTTON_ACTION.SELECT_FILES:SWFUpload.BUTTON_ACTION.SELECT_FILE,button_disabled:!1,button_cursor:o.buttonCursor=="arrow "?SWFUpload.CURSOR.ARROW:SWFUpload.CURSOR.HAND,button_window_mode:SWFUpload.WINDOW_MODE.TRANSPARENT,debug:o.debug,requeue_on_error:o.requeueErrors,file_post_name:o.fileObjName,file_size_limit:o.fileSizeLimit,file_types:o.fileTypeExts,file_types_description:o.fileTypeDesc,file_queue_limit:o.queueSizeLimit,file_upload_limit:o.uploadLimit,flash_url:o.swf,prevent_swf_caching:o.preventCaching,post_params:o.formData,upload_url:o.uploader,use_query_string:o.method=="get ",file_dialog_complete_handler:n.onDialogClose,file_dialog_start_handler:n.onDialogOpen,file_queued_handler:n.onSelect,file_queue_error_handler:n.onSelectError,swfupload_loaded_handler:o.onSWFReady,upload_complete_handler:n.onUploadComplete,upload_error_handler:n.onUploadError,upload_progress_handler:n.onUploadProgress,upload_start_handler:n.onUploadStart,upload_success_handler:n.onUploadSuccess};r&&(u=e.extend(u,r)),u=e.extend(u,o);var f=swfobject.getFlashPlayerVersion(),l=f.major>=9;if(l){window["uploadify_ "+o.id]=new SWFUpload(u);var h=window["uploadify_ "+o.id];i.data("uploadify ",h);var p=e(" < div / >",{id:o.id,"class ":"uploadify ",css:{height:o.height+"px ",width:o.width+"px "}});e("#"+h.movieName).wrap(p),p=e("#"+o.id),p.data("uploadify ",h);var v=e(" < div / >",{id:o.id+" - button ","class ":"uploadify - button "+o.buttonClass});o.buttonImage&&v.css({"background - image ":"url('"+o.buttonImage+"')","text - indent ":" - 9999px "}),v.html('<span class="uploadify - button - text ">'+o.buttonText+" < /span>"),p.append(v),e("#"+h.movieName).css({position:"absolute","z-index":1});if(!o.queueID){var m=e("<div / > ",{id:o.id+" - queue ","class ":"uploadify - queue "});p.after(m),h.settings.queueID=o.id+" - queue ",h.settings.defaultQueue=!0}h.queueData={files:{},filesSelected:0,filesQueued:0,filesReplaced:0,filesCancelled:0,filesErrored:0,uploadsSuccessful:0,uploadsErrored:0,averageSpeed:0,queueLength:0,queueSize:0,uploadSize:0,queueBytesUploaded:0,uploadQueue:[],errorMsg:"Some files were not added to the queue: "},h.original=s,h.wrapper=p,h.button=v,h.queue=m,o.onInit&&o.onInit.call(i,h)}else o.onFallback&&o.onFallback.call(i)})},cancel:function(t,n){var r=arguments;this.each(function(){var t=e(this),n=t.data("uploadify "),i=n.settings,s=-1;if(r[0])if(r[0]==" * "){var o=n.queueData.queueLength;e("#"+i.queueID).find(".uploadify - queue - item ").each(function(){s++,r[1]===!0?n.cancelUpload(e(this).attr("id "),!1):n.cancelUpload(e(this).attr("id ")),e(this).find(".data ").removeClass("data ").html(" - Cancelled "),e(this).find(".uploadify - progress - bar ").remove(),e(this).delay(1e3+100*s).fadeOut(500,function(){e(this).remove()})}),n.queueData.queueSize=0,i.onClearQueue&&i.onClearQueue.call(t,o)}else for(var u=0;u<r.length;u++)n.cancelUpload(r[u]),e("#"+r[u]).find(".data ").removeClass("data ").html(" - Cancelled "),e("#"+r[u]).find(".uploadify - progress - bar ").remove(),e("#"+r[u]).delay(1e3+100*u).fadeOut(500,function(){e(this).remove()});else{var a=e("#"+i.queueID).find(".uploadify - queue - item ").get(0);$item=e(a),n.cancelUpload($item.attr("id ")),$item.find(".data ").removeClass("data ").html(" - Cancelled "),$item.find(".uploadify - progress - bar ").remove(),$item.delay(1e3).fadeOut(500,function(){e(this).remove()})}})},destroy:function(){this.each(function(){var t=e(this),n=t.data("uploadify "),r=n.settings;n.destroy(),r.defaultQueue&&e("#"+r.queueID).remove(),e("#"+r.id).replaceWith(n.original),r.onDestroy&&r.onDestroy.call(this),delete n})},disable:function(t){this.each(function(){var n=e(this),r=n.data("uploadify "),i=r.settings;t?(r.button.addClass("disabled "),i.onDisable&&i.onDisable.call(this)):(r.button.removeClass("disabled "),i.onEnable&&i.onEnable.call(this)),r.setButtonDisabled(t)})},settings:function(t,n,r){var i=arguments,s=n;this.each(function(){var o=e(this),u=o.data("uploadify "),a=u.settings;if(typeof i[0]=="object ")for(var l in n)setData(l,n[l]);if(i.length===1)s=a[t];else{switch(t){case"uploader ":u.setUploadURL(n);break;case"formData ":r||(n=e.extend(a.formData,n)),u.setPostParams(a.formData);break;case"method ":n=="get "?u.setUseQueryString(!0):u.setUseQueryString(!1);break;case"fileObjName ":u.setFilePostName(n);break;case"fileTypeExts ":u.setFileTypes(n,a.fileTypeDesc);break;case"fileTypeDesc ":u.setFileTypes(a.fileTypeExts,n);break;case"fileSizeLimit ":u.setFileSizeLimit(n);break;case"uploadLimit ":u.setFileUploadLimit(n);break;case"queueSizeLimit ":u.setFileQueueLimit(n);break;case"buttonImage ":u.button.css("background - image ",settingValue);break;case"buttonCursor ":n=="arrow "?u.setButtonCursor(SWFUpload.CURSOR.ARROW):u.setButtonCursor(SWFUpload.CURSOR.HAND);break;case"buttonText ":e("#"+a.id+" - button ").find(".uploadify - button - text ").html(n);break;case"width ":u.setButtonDimensions(n,a.height);break;case"height ":u.setButtonDimensions(a.width,n);break;case"multi ":n?u.setButtonAction(SWFUpload.BUTTON_ACTION.SELECT_FILES):u.setButtonAction(SWFUpload.BUTTON_ACTION.SELECT_FILE)}a[t]=n}});if(i.length===1)return s},stop:function(){this.each(function(){var t=e(this),n=t.data("uploadify ");n.queueData.averageSpeed=0,n.queueData.uploadSize=0,n.queueData.bytesUploaded=0,n.queueData.uploadQueue=[],n.stopUpload()})},upload:function(){var t=arguments;this.each(function(){var n=e(this),r=n.data("uploadify ");r.queueData.averageSpeed=0,r.queueData.uploadSize=0,r.queueData.bytesUploaded=0,r.queueData.uploadQueue=[];if(t[0])if(t[0]==" * ")r.queueData.uploadSize=r.queueData.queueSize,r.queueData.uploadQueue.push(" * "),r.startUpload();else{for(var i=0;i<t.length;i++)r.queueData.uploadSize+=r.queueData.files[t[i]].size,r.queueData.uploadQueue.push(t[i]);r.startUpload(r.queueData.uploadQueue.shift())}else r.startUpload()})}},n={onDialogOpen:function(){var e=this.settings;this.queueData.errorMsg="Some files were not added to the queue: ",this.queueData.filesReplaced=0,this.queueData.filesCancelled=0,e.onDialogOpen&&e.onDialogOpen.call(this)},onDialogClose:function(t,n,r){var i=this.settings;this.queueData.filesErrored=t-n,this.queueData.filesSelected=t,this.queueData.filesQueued=n-this.queueData.filesCancelled,this.queueData.queueLength=r,e.inArray("onDialogClose ",i.overrideEvents)<0&&this.queueData.filesErrored>0&&alert(this.queueData.errorMsg),i.onDialogClose&&i.onDialogClose.call(this,this.queueData),i.auto&&e("#"+i.id).uploadify("upload "," * ")},onSelect:function(t){var n=this.settings,r={};for(var i in this.queueData.files){r=this.queueData.files[i];if(r.uploaded!=1&&r.name==t.name){var s=confirm('The file named "'+t.name+'" is already in the queue.\nDo you want to replace the existing item in the queue?');if(!s)return this.cancelUpload(t.id),this.queueData.filesCancelled++,!1;e("#"+r.id).remove(),this.cancelUpload(r.id),this.queueData.filesReplaced++}}var o=Math.round(t.size/1024),u="KB ";o>1e3&&(o=Math.round(o/1e3),u="MB ");var a=o.toString().split(".");o=a[0],a.length>1&&(o+="."+a[1].substr(0,2)),o+=u;var f=t.name;f.length>25&&(f=f.substr(0,25)+"..."),e.inArray("onSelect ",n.overrideEvents)<0&&e("#"+n.queueID).append('<div id="'+t.id+'" class="uploadify - queue - item ">					<div class="cancel ">						<a href="javascript: $(\'#' + n.id + "').uploadify('cancel', '" + t.id + '\')">X</a>					</div>					<span class="fileName">' + f + " (" + o + ')</span><span class="data"></span>					<div class="uploadify-progress">						<div class="uploadify-progress-bar"><!--Progress Bar--></div>					</div>				</div>'),
                this.queueData.queueSize += t.size,
                this.queueData.files[t.id] = t,
                n.onSelect && n.onSelect.apply(this, arguments)
            },
            onSelectError: function(t, n, r) {
                var i = this.settings;
                if (e.inArray("onSelectError", i.overrideEvents) < 0) switch (n) {
                case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
                    i.queueSizeLimit > r ? this.queueData.errorMsg += "\nThe number of files selected exceeds the remaining upload limit (" + r + ").": this.queueData.errorMsg += "\nThe number of files selected exceeds the queue size limit (" + i.queueSizeLimit + ").";
                    break;
                case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
                    this.queueData.errorMsg += '\nThe file "' + t.name + '" exceeds the size limit (' + i.fileSizeLimit + ").";
                    break;
                case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
                    this.queueData.errorMsg += '\nThe file "' + t.name + '" is empty.';
                    break;
                case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
                    this.queueData.errorMsg += '\nThe file "' + t.name + '" is not an accepted file type (' + i.fileTypeDesc + ")."
                }
                n != SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED && delete this.queueData.files[t.id],
                i.onSelectError && i.onSelectError.apply(this, arguments)
            },
            onQueueComplete: function() {
                this.settings.onQueueComplete && this.settings.onQueueComplete.call(this, this.settings.queueData)
            },
            onUploadComplete: function(t) {
                var n = this.settings,
                r = this,
                i = this.getStats();
                this.queueData.queueLength = i.files_queued,
                this.queueData.uploadQueue[0] == "*" ? this.queueData.queueLength > 0 ? this.startUpload() : (this.queueData.uploadQueue = [], n.onQueueComplete && n.onQueueComplete.call(this, this.queueData)) : this.queueData.uploadQueue.length > 0 ? this.startUpload(this.queueData.uploadQueue.shift()) : (this.queueData.uploadQueue = [], n.onQueueComplete && n.onQueueComplete.call(this, this.queueData));
                if (e.inArray("onUploadComplete", n.overrideEvents) < 0) if (n.removeCompleted) switch (t.filestatus) {
                case SWFUpload.FILE_STATUS.COMPLETE:
                    setTimeout(function() {
                        e("#" + t.id) && (r.queueData.queueSize -= t.size, delete r.queueData.files[t.id], e("#" + t.id).fadeOut(500,
                        function() {
                            e(this).remove()
                        }))
                    },
                    n.removeTimeout * 1e3);
                    break;
                case SWFUpload.FILE_STATUS.ERROR:
                    n.requeueErrors || setTimeout(function() {
                        e("#" + t.id) && (r.queueData.queueSize -= t.size, delete r.queueData.files[t.id], e("#" + t.id).fadeOut(500,
                        function() {
                            e(this).remove()
                        }))
                    },
                    n.removeTimeout * 1e3)
                } else t.uploaded = !0;
                n.onUploadComplete && n.onUploadComplete.call(this, t)
            },
            onUploadError: function(t, n, r) {
                var i = this.settings,
                s = "Error";
                switch (n) {
                case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:
                    s = "HTTP Error (" + r + ")";
                    break;
                case SWFUpload.UPLOAD_ERROR.MISSING_UPLOAD_URL:
                    s = "Missing Upload URL";
                    break;
                case SWFUpload.UPLOAD_ERROR.IO_ERROR:
                    s = "IO Error";
                    break;
                case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR:
                    s = "Security Error";
                    break;
                case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:
                    alert("The upload limit has been reached (" + r + ")."),
                    s = "Exceeds Upload Limit";
                    break;
                case SWFUpload.UPLOAD_ERROR.UPLOAD_FAILED:
                    s = "Failed";
                    break;
                case SWFUpload.UPLOAD_ERROR.SPECIFIED_FILE_ID_NOT_FOUND:
                    break;
                case SWFUpload.UPLOAD_ERROR.FILE_VALIDATION_FAILED:
                    s = "Validation Error";
                    break;
                case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:
                    s = "Cancelled",
                    this.queueData.queueSize -= t.size;
                    if (t.status == SWFUpload.FILE_STATUS.IN_PROGRESS || e.inArray(t.id, this.queueData.uploadQueue) >= 0) this.queueData.uploadSize -= t.size;
                    i.onCancel && i.onCancel.call(this, t),
                    delete this.queueData.files[t.id];
                    break;
                case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:
                    s = "Stopped"
                }
                e.inArray("onUploadError", i.overrideEvents) < 0 && (n != SWFUpload.UPLOAD_ERROR.FILE_CANCELLED && n != SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED && e("#" + t.id).addClass("uploadify-error"), e("#" + t.id).find(".uploadify-progress-bar").css("width", "1px"), n != SWFUpload.UPLOAD_ERROR.SPECIFIED_FILE_ID_NOT_FOUND && t.status != SWFUpload.FILE_STATUS.COMPLETE && e("#" + t.id).find(".data").html(" - " + s));
                var o = this.getStats();
                this.queueData.uploadsErrored = o.upload_errors,
                i.onUploadError && i.onUploadError.call(this, t, n, r, s)
            },
            onUploadProgress: function(t, n, r) {
                var i = this.settings,
                s = new Date,
                o = s.getTime(),
                u = o - this.timer;
                u > 500 && (this.timer = o);
                var a = n - this.bytesLoaded;
                this.bytesLoaded = n;
                var f = this.queueData.queueBytesUploaded + n,
                l = Math.round(n / r * 100),
                h = "KB/s",
                p = 0,
                d = a / 1024 / (u / 1e3);
                d = Math.floor(d * 10) / 10,
                this.queueData.averageSpeed > 0 ? this.queueData.averageSpeed = Math.floor((this.queueData.averageSpeed + d) / 2) : this.queueData.averageSpeed = Math.floor(d),
                d > 1e3 && (p = d * .001, this.queueData.averageSpeed = Math.floor(p), h = "MB/s"),
                e.inArray("onUploadProgress", i.overrideEvents) < 0 && (i.progressData == "percentage" ? e("#" + t.id).find(".data").html(" - " + l + "%") : i.progressData == "speed" && u > 500 && e("#" + t.id).find(".data").html(" - " + this.queueData.averageSpeed + h), e("#" + t.id).find(".uploadify-progress-bar").css("width", l + "%")),
                i.onUploadProgress && i.onUploadProgress.call(this, t, n, r, f, this.queueData.uploadSize)
            },
            onUploadStart: function(t) {
                var n = this.settings,
                r = new Date;
                this.timer = r.getTime(),
                this.bytesLoaded = 0,
                this.queueData.uploadQueue.length == 0 && (this.queueData.uploadSize = t.size),
                n.checkExisting && e.ajax({
                    type: "POST",
                    async: !1,
                    url: n.checkExisting,
                    data: {
                        filename: t.name
                    },
                    success: function(n) {
                        if (n == 1) {
                            var r = confirm('A file with the name "' + t.name + '" already exists on the server.\nWould you like to replace the existing file?');
                            r || (this.cancelUpload(t.id), e("#" + t.id).remove(), this.queueData.uploadQueue.length > 0 && this.queueData.queueLength > 0 && (this.queueData.uploadQueue[0] == "*" ? this.startUpload() : this.startUpload(this.queueData.uploadQueue.shift())))
                        }
                    }
                }),
                n.onUploadStart && n.onUploadStart.call(this, t)
            },
            onUploadSuccess: function(t, n, r) {
                var i = this.settings,
                s = this.getStats();
                this.queueData.uploadsSuccessful = s.successful_uploads,
                this.queueData.queueBytesUploaded += t.size,
                e.inArray("onUploadSuccess", i.overrideEvents) < 0 && e("#" + t.id).find(".data").html(" - Complete"),
                i.onUploadSuccess && i.onUploadSuccess.call(this, t, n, r)
            }
        };
        e.fn.uploadify = function(n) {
            if (t[n]) return t[n].apply(this, Array.prototype.slice.call(arguments, 1));
            if (typeof n == "object" || !n) return t.init.apply(this, arguments);
            e.error("The method " + n + " does not exist in $.uploadify")
        }
    } ($),
    function() {
        var e = {},
        t = function(n, r) {
            n = n || "";
            if (e[n]) return e[n];
            r = r || {},
            r.socketio = r.socketio || {},
            r.socketio.resource = r.socketio.resource || "socket.io";
            var i, s = {},
            o = !1,
            u = 0,
            a, f, l, c = function() {
                try {
                    return Object.defineProperty({},
                    "", {}),
                    !1
                } catch(e) {
                    return Object.prototype.__defineGetter__ && Object.prototype.__defineSetter__ ? !1 : !0
                }
            } (),
            h = {
                data: {},
                arrays: {},
                get: function(e) {
                    return h.data[e]
                },
                set: function(e, t) {
                    if (h.data[e] !== undefined) h.deleteChildren(e, t);
                    else {
                        var n = e.lastIndexOf("."),
                        r = e.substring(0, n);
                        h.addParent(r, e.substring(n + 1))
                    }
                    return h.data[e] = t
                },
                addParent: function(e, t) {
                    e && (f.isArray(h.data[e]) || h.set(e, []), h.data[e].push(t))
                },
                deleteChildren: function(e) {
                    var t = this.data[e],
                    n = [];
                    if (f.isArray(this.data[e])) for (var r = 0; t.length;) {
                        var i = this.deleteVar(e + "." + t[r]);
                        for (var s = 0; s < i.length; s++) n.push(i[s])
                    }
                    return n
                },
                deleteVar: function(e) {
                    var t = e.lastIndexOf("."),
                    n = e.substring(0, t);
                    if (f.hasProperty(this.data, n)) {
                        var r = f.indexOf(this.data[n], e.substring(t + 1));
                        r > -1 && this.data[n].splice(r, 1)
                    }
                    var i = this.deleteChildren(e);
                    return i.push(e),
                    delete this.data[e],
                    this.unflagAsArray(e),
                    i
                },
                flagAsArray: function(e) {
                    return this.arrays[e] = !0
                },
                unflagAsArray: function(e) {
                    delete this.arrays[e]
                }
            };
            f = {
                _events: {},
                on: function(e, t) {
                    return f.hasProperty(f._events, e) || (f._events[e] = []),
                    f._events[e].push(t),
                    f
                },
                indexOf: function(e, t) {
                    for (var n = 0,
                    r = e.length; n < r; n++) if ("" + e[n] === t) return n;
                    return - 1
                },
                emit: function(e, t) {
                    if (f.hasProperty(f._events, e)) {
                        var n = f._events[e].slice(0);
                        for (var r = 0,
                        i = n.length; r < i; r++) n[r].apply(f, t === undefined ? [] : t)
                    }
                    return f
                },
                removeEvent: function(e, t) {
                    if (f.hasProperty(f._events, e)) for (var n = 0,
                    r = f._events[e].length; n < r; n++) f._events[e][n] === t && f._events[e].splice(n, 1);
                    return f
                },
                hasProperty: function(e, t) {
                    return Object.prototype.hasOwnProperty.call(Object(e), t)
                },
                isArray: Array.isArray ||
                function(e) {
                    return Object.prototype.toString.call(e) === "[object Array]"
                },
                createVarAtFqn: function(e, t, n) {
                    var r = t.split("."),
                    i = f.forceGetParentVarAtFqn(e, t),
                    s = r.pop();
                    h.set(t, n && typeof n == "object" ? [] : n),
                    f.isArray(n) && h.flagAsArray(t),
                    i[s] = n,
                    !c && !f.isArray(i) && f.watch(i, s, t)
                },
                forceGetParentVarAtFqn: function(e, t) {
                    var n = t.split(".");
                    n.shift();
                    var r = e;
                    while (n.length > 1) {
                        var i = n.shift();
                        f.hasProperty(r, i) || (isNaN(n[0]) ? r[i] = {}: r[i] = []);
                        if (!r[i] || typeof r[i] != "object") r[i] = {};
                        r = r[i]
                    }
                    return r
                },
                getVarFromFqn: function(e, t) {
                    var n = t.split(".");
                    n.shift();
                    var r = e;
                    while (n.length > 0) {
                        var i = n.shift();
                        if (!f.hasProperty(r, i)) return ! 1;
                        r = r[i]
                    }
                    return r
                },
                generateRandomString: function() {
                    return Math.random().toString().substr(2)
                },
                getValOrFqn: function(e, t) {
                    return typeof e == "function" ? e.remote ? undefined: {
                        fqn: t
                    }: e
                },
                watch: function(e, t, n) {
                    function s() {
                        return r
                    }
                    function o(t) {
                        if (r !== t && t !== h.get(n)) {
                            if (r && typeof r == "object") return h.deleteVar(n),
                            i.emit("del", [n]),
                            r = t,
                            l.processScope(e, n.substring(0, n.lastIndexOf("."))),
                            t;
                            if (t && typeof t == "object") return h.deleteVar(n),
                            i.emit("del", [n]),
                            r = t,
                            l.processScope(e, n.substring(0, n.lastIndexOf("."))),
                            t;
                            h.set(n, t),
                            r = t,
                            typeof t == "function" && (t = {
                                fqn: n
                            });
                            var s = {};
                            s[n] = t,
                            i.emit("rv", s)
                        }
                        return t
                    }
                    var r = e[t];
                    Object.defineProperty ? Object.defineProperty(e, t, {
                        get: s,
                        set: o
                    }) : (e.__defineSetter__ && e.__defineSetter__(t, o), e.__defineGetter__ && e.__defineGetter__(t, s))
                },
                unwatch: function(e, t) {
                    Object.defineProperty ? Object.defineProperty(e, t, {
                        get: undefined,
                        set: undefined
                    }) : (e.__defineSetter__ && e.__defineSetter__(t, undefined), e.__defineGetter__ && e.__defineGetter__(t, undefined))
                }
            };
            var p = {
                ready: function(e) {
                    arguments.length === 0 ? f.emit("ready") : (o && e(), f.on("ready", e))
                },
                core: {
                    on: f.on,
                    options: r,
                    removeEvent: f.removeEvent,
                    clientId: undefined,
                    noConflict: t
                }
            };
            l = {
                deleteVar: function(e) {
                    var t, n, r, i;
                    t = e.split("."),
                    n = p;
                    for (var s = 1; s < t.length; s++) {
                        i = t[s];
                        if (n === undefined) {
                            h.deleteVar(e);
                            return
                        }
                        if (s === t.length - 1) {
                            delete n[t.pop()],
                            h.deleteVar(e);
                            return
                        }
                        n = n[i]
                    }
                },
                replaceVar: function(e) {
                    for (var t in e) f.hasProperty(e[t], "fqn") && (e[t] = l.constructRemoteFunction(t)),
                    f.createVarAtFqn(p, t, e[t])
                },
                remoteCall: function(e) {
                    var t;
                    e.fqn.split("_")[0] === "closure" ? t = s[e.fqn] : t = f.getVarFromFqn(p, e.fqn);
                    var n, r, i = e.args;
                    if (typeof i == "object" && !f.isArray(i)) {
                        var o = [];
                        for (n in i) o.push(i[n]);
                        i = o
                    }
                    for (n = 0, r = i.length; n < r; n++) f.hasProperty(i[n], "fqn") && (i[n] = l.constructRemoteFunction(i[n].fqn));
                    t.apply({
                        now: p
                    },
                    i)
                },
                serverReady: function() {
                    o = !0,
                    l.processNowScope(),
                    f.emit("ready")
                },
                constructRemoteFunction: function(e) {
                    var t = function() {
                        l.processNowScope();
                        var t = [];
                        for (var n = 0,
                        r = arguments.length; n < r; n++) t[n] = arguments[n];
                        for (n = 0, r = t.length; n < r; n++) if (typeof t[n] == "function") {
                            var o = "closure_" + t[n].name + "_" + f.generateRandomString();
                            s[o] = t[n],
                            t[n] = {
                                fqn: o
                            }
                        }
                        i.emit("rfc", {
                            fqn: e,
                            args: t
                        })
                    };
                    return t.remote = !0,
                    t
                },
                handleNewConnection: function(e) {
                    if (e.handled) return;
                    e.handled = !0,
                    e.on("rfc",
                    function(e) {
                        l.remoteCall(e),
                        f.emit("rfc", e)
                    }),
                    e.on("rv",
                    function(e) {
                        l.replaceVar(e),
                        f.emit("rv", e)
                    }),
                    e.on("del",
                    function(e) {
                        l.deleteVar(e),
                        f.emit("del", e)
                    }),
                    e.on("rd",
                    function(e) {++u === 2 && l.serverReady()
                    }),
                    e.on("disconnect",
                    function() {
                        u = 0,
                        f.emit("disconnect")
                    }),
                    e.on("error",
                    function() {
                        f.emit("error")
                    }),
                    e.on("retry",
                    function() {
                        f.emit("retry")
                    }),
                    e.on("reconnect",
                    function() {
                        f.emit("reconnect")
                    }),
                    e.on("reconnect_failed",
                    function() {
                        f.emit("reconnect_failed")
                    }),
                    e.on("connect_failed",
                    function() {
                        f.emit("connect_failed")
                    })
                },
                processNowScope: function() {
                    l.processScope(p, "now"),
                    clearTimeout(a),
                    i.socket.connected && (a = setTimeout(l.processNowScope, 1e3))
                },
                processScope: function(e, t) {
                    var n = {};
                    l.traverseScope(e, t, n);
                    for (var r in n) if (f.hasProperty(n, r) && n[r] !== undefined) {
                        i.emit("rv", n);
                        break
                    }
                },
                traverseScope: function(e, t, n) {
                    if (e && typeof e == "object") {
                        var r = f.isArray(e),
                        s = h.get(t);
                        for (var o in e) {
                            var u = t + "." + o;
                            if (u === "now.core" || u === "now.ready") continue;
                            if (f.hasProperty(e, o)) {
                                var a = e[o],
                                p = h.get(u),
                                d = h.arrays[u],
                                v = f.isArray(a),
                                m = a && typeof a == "object",
                                g = f.isArray(p) && !d;
                                r || c ? m ? v ? d || (h.set(u, []), h.flagAsArray(u), n[u] = []) : g || (h.set(u, []), h.unflagAsArray(u), n[u] = {}) : a !== p && (h.set(u, a), h.unflagAsArray(u), n[u] = f.getValOrFqn(a, u)) : p === undefined && (f.watch(e, o, u), m ? v ? (h.set(u, []), h.flagAsArray(u), n[u] = []) : (h.set(u, []), n[u] = {}) : (h.set(u, a), n[u] = f.getValOrFqn(a, u))),
                                m && l.traverseScope(a, u, n)
                            }
                        }
                        if (s && typeof s == "object") {
                            var y = [];
                            for (var b = 0; b < s.length; b++) s[b] !== undefined && e[s[b]] === undefined && (y.push(t + "." + s[b]), h.deleteVar(t + "." + s[b]), --b);
                            y.length > 0 && i.emit("del", y)
                        }
                    }
                },
                traverseScopeIE: function(e, t, n) {}
            };
            var d = [{
                key: "io",
                path: "/" + p.core.options.socketio.resource + "/socket.io.js"
            }],
            v = 0,
            m = function() {
                v++;
                if (v !== d.length) return;
                i = io.connect(n + "/", p.core.options.socketio || {}),
                p.core.socketio = i,
                i.on("connect",
                function() {
                    p.core.clientId = i.socket.sessionid,
                    l.handleNewConnection(i),
                    setTimeout(function() {
                        l.processNowScope(),
                        i.emit("rd"),
                        ++u === 2 && (o = !0, f.emit("ready"))
                    },
                    100),
                    f.emit("connect")
                }),
                i.on("disconnect",
                function() { (function(e) {
                        e(e, p)
                    })(function(e, t) {
                        for (var n in t) t[n] && typeof t[n] == "object" && t[n] !== document && t[n] !== p.core ? e(e, t[n]) : typeof t[n] == "function" && t[n].remote && delete t[n]
                    }),
                    h.data = {}
                })
            };
            for (var g = 0,
            y = d.length; g < y; g++) {
                if (window[d[g].key]) {
                    m();
                    continue
                }
                var b = document.createElement("script");
                b.setAttribute("type", "text/javascript"),
                b.setAttribute("src", n + d[g].path),
                b.onload = m,
                c && (b.onreadystatechange = function() { (b.readyState === "loaded" || b.readyState === "complete") && m()
                }),
                document.getElementsByTagName("head")[0].appendChild(b)
            }
            return e[n] = p
        };
        window.nowInitialize = t
    } ();
    var TP = {
        getInputPositon: function(e) {
            if (document.selection) {
                e.focus();
                var t = document.selection.createRange();
                return {
                    left: t.boundingLeft + 17,
                    top: t.boundingTop,
                    bottom: t.boundingTop + t.boundingHeight + 22
                }
            }
            var n = this,
            r = "{$clone_div}",
            i = "{$cloneLeft}",
            s = "{$cloneFocus}",
            o = "{$cloneRight}",
            u = '<span style="white-space:pre-wrap;"> </span>',
            a = e[r] || document.createElement("div"),
            f = e[s] || document.createElement("span"),
            l = e[i] || document.createElement("span"),
            c = n._offset(e),
            h = this._getFocus(e),
            p = {
                left: 0,
                top: 0
            };
            e[r] || (e[r] = a, e[s] = f, e[i] = l, a.appendChild(l), a.appendChild(f), document.body.appendChild(a), f.innerHTML = "|", f.style.cssText = "display:block;width:0px;overflow:hidden;z-index:-100;", a.className = this._cloneStyle(e), a.style.cssText = "visibility:hidden;display:block;position:absolute;z-index:-100;overflow:hidden;"),
            a.style.left = this._offset(e).left + "px",
            a.style.top = this._offset(e).top + "px";
            var d = e.value.substring(0, h).replace(/</g, "<").replace(/>/g, ">").replace(/\n/g, "<br/>").replace(/\s/g, u);
            l.innerHTML = d,
            f.style.display = "inline-block";
            try {
                p = this._offset(f)
            } catch(v) {}
            return f.style.display = "none",
            {
                left: p.left,
                top: p.top,
                bottom: p.bottom
            }
        },
        _cloneStyle: function(e, t) {
            if (!t && e["${cloneName}"]) return e["${cloneName}"];
            var n, r, i = /^(number|string)$/,
            s = /^(content|outline|outlineWidth)$/,
            o = [],
            u = e.style;
            for (r in u) s.test(r) || (val = this._getStyle(e, r), val !== "" && i.test(typeof val) && (r = r.replace(/([A-Z])/g, "-$1").toLowerCase(), o.push(r), o.push(":"), o.push(val), o.push(";")));
            return o = o.join(""),
            e["${cloneName}"] = n = "clone" + (new Date).getTime(),
            this._addHeadStyle("." + n + "{" + o + "}"),
            n
        },
        _addHeadStyle: function(e) {
            var t = this._style[document];
            t || (t = this._style[document] = document.createElement("style"), document.getElementsByTagName("head")[0].appendChild(t)),
            t.styleSheet && (t.styleSheet.cssText += e) || t.appendChild(document.createTextNode(e))
        },
        _style: {},
        _getStyle: "getComputedStyle" in window ?
        function(e, t) {
            return getComputedStyle(e, null)[t]
        }: function(e, t) {
            return e.currentStyle[t]
        },
        _getFocus: function(e) {
            var t = 0;
            if (document.selection) {
                e.focus();
                var n = document.selection.createRange();
                if (e.nodeName === "TEXTAREA") {
                    var r = n.duplicate();
                    r.moveToElementText(e);
                    var t = -1;
                    while (r.inRange(n)) r.moveStart("character"),
                    t++
                } else e.nodeName === "INPUT" && (n.moveStart("character", -e.value.length), t = n.text.length)
            } else if (e.selectionStart || e.selectionStart == "0") t = e.selectionStart;
            return t
        },
        _offset: function(e) {
            var t = e.getBoundingClientRect(),
            n = e.ownerDocument,
            r = n.body,
            i = n.documentElement,
            s = i.clientTop || r.clientTop || 0,
            o = i.clientLeft || r.clientLeft || 0,
            u = t.top + (self.pageYOffset || i.scrollTop) - s,
            a = t.left + (self.pageXOffset || i.scrollLeft) - o;
            return {
                left: a,
                top: u,
                right: a + t.width,
                bottom: u + t.height
            }
        }
    };

