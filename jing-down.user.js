// ==UserScript==
// @name            jing-down
// @include         http://jing.fm/*
// ==/UserScript==


// injectScript from http://voodooattack.blogspot.com/2010/01/writing-google-chrome-extension-how-to.html
function injectScript(source)
{
     
    // Utilities
    var isFunction = function (arg) { 
        return (Object.prototype.toString.call(arg) == "[object Function]"); 
    };
     
    var jsEscape = function (str) { 
        // Replaces quotes with numerical escape sequences to
        // avoid single-quote-double-quote-hell, also helps by escaping HTML special chars.
        if (!str || !str.length) return str;
        // use \W in the square brackets if you have trouble with any values.
        var r = /['"<>\/]/g, result = "", l = 0, c; 
        do{    c = r.exec(str);
            result += (c ? (str.substring(l, r.lastIndex-1) + "\\x" + 
                c[0].charCodeAt(0).toString(16)) : (str.substring(l)));
        } while (c && ((l = r.lastIndex) > 0))
        return (result.length ? result : str);
    };
 
    var bFunction = isFunction(source);
    var elem = document.createElement("script");    // create the new script element.
    var script, ret, id = "";
 
    if (bFunction)
    {
        // We're dealing with a function, prepare the arguments.
        var args = [];
 
        for (var i = 1; i < arguments.length; i++)
        {
            var raw = arguments[i];
            var arg;
 
            if (isFunction(raw))    // argument is a function.
                arg = "eval(\"" + jsEscape("(" + raw.toString() + ")") + "\")";
            else if (Object.prototype.toString.call(raw) == '[object Date]') // Date
                arg = "(new Date(" + raw.getTime().toString() + "))";
            else if (Object.prototype.toString.call(raw) == '[object RegExp]') // RegExp
                arg = "(new RegExp(" + raw.toString() + "))";
            else if (typeof raw === 'string' || typeof raw === 'object') // String or another object
                arg = "JSON.parse(\"" + jsEscape(JSON.stringify(raw)) + "\")";
            else
                arg = raw.toString(); // Anything else number/boolean
 
            args.push(arg);    // push the new argument on the list
        }
 
        // generate a random id string for the script block
        while (id.length < 16) id += String.fromCharCode(((!id.length || Math.random() > 0.5) ?
            0x61 + Math.floor(Math.random() * 0x19) : 0x30 + Math.floor(Math.random() * 0x9 )));
 
        // build the final script string, wrapping the original in a boot-strapper/proxy:
        script = "(function(){var value={callResult: null, throwValue: false};try{value.callResult=(("+
            source.toString()+")("+args.join()+"));}catch(e){value.throwValue=true;value.callResult=e;};"+
            "document.getElementById('"+id+"').innerText=JSON.stringify(value);})();";
 
        elem.id = id;
    }
    else // plain string, just copy it over.
    {
        script = source;
    }
 
    elem.type = "text/javascript";
    elem.innerHTML = script;
 
    // insert the element into the DOM (it starts to execute instantly)
    document.head.appendChild(elem);
 
    if (bFunction)
    {
        // get the return value from our function:
        ret = JSON.parse(elem.innerText);
 
        // remove the now-useless clutter.
        elem.parentNode.removeChild(elem);
 
        // make sure the garbage collector picks it instantly. (and hope it does)
        delete (elem);
 
        // see if our returned value was thrown or not
        if (ret.throwValue)
            throw (ret.callResult);
        else
            return (ret.callResult);
    }
    else // plain text insertion, return the new script element.
        return (elem);
}

injectScript(function(){
    console.log(window.Player);

    function smilekzs_jing_alt(){
        //locate music
        var music=window.Player.music.filter(function(a){return a.tid === window.Player.tid;});
        if(!music || music.length!==1 || !(music=music[0])) throw Error("!! can't find music");

        //get music url
        music.url=window.$.id2mediaUrl(music.mid, "audio");
        if(!music.url) throw Error("!! can't get music url");

        //create music link on music title
        var el_tit=document.getElementsByClassName('tit');
        if(!el_tit || !(el_tit=el_tit[0])) throw Error("!! can't find tit");
        if(el_tit.firstChild.nodeName!='A'){
            var el_tit_a=document.createElement('a');
            el_tit_a.className='smilekzs_tit_a';
            el_tit_a.innerHTML=el_tit.firstChild.data;
            el_tit_a.href=music.url;
            el_tit_a.target='_blank';
            el_tit.replaceChild(el_tit_a, el_tit.firstChild);
        }

        //get album art url
        music.art=window.$.id2url(music.fid, "image", "AL", "album");
        if(!music.art) throw Error("!! can't get music art");

        //create album art(large size!) link on album art mask
        var el_mscPlrCtn=document.getElementById('mscPlrCtn');
        if(!el_mscPlrCtn) throw Error("!! can't find mscPlrCtn");

        var el_tit_art_a=el_mscPlrCtn.getElementsByClassName('smilekzs_art_a');
        if(!el_tit_art_a || !el_tit_art_a.length || !(el_tit_art_a=el_tit_art_a[0])){
            var el_mscPlrMask=document.getElementsByClassName('mscPlrMask');
            if(!el_mscPlrMask || !(el_mscPlrMask=el_mscPlrMask[0])) throw Error("!! can't find mscPlrMask");

            el_tit_art_a=document.createElement('a');
            el_mscPlrCtn.replaceChild(el_tit_art_a, el_mscPlrMask);
            el_tit_art_a.appendChild(el_mscPlrMask);
        }

        el_tit_art_a.className='smilekzs_art_a';
        el_tit_art_a.href=music.art;
        el_tit_art_a.target='_blank';
    }

    //autorun
    window.smilekzs_jing_alt_iid=setInterval(smilekzs_jing_alt, 1000);
});

