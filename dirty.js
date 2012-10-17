function smilekzs_jing_get(callback){
    //locate music
    var music=window.Player.music.filter(function(a){return a.tid === window.Player.tid;});
    if(!music || music.length!==1 || !(music=music[0])) throw Error("!! can't find music");

    //get music url
    //  2012-10-17: New way of obtaining music URL
    $.ajax({
        url: Core.API_VER + "/media/song/surl",
        data: {
            mid: music.mid,
            type: Signup.userDetail.sts.hbr == "true" ? i = "NO": i = "MM"
        },
        success: function(t) {
            if (!t.success){
                throw Error("!! can't get music url");
            }
            console.log(t);
            music.url = t.result;
            console.log(t.result);

            //get album art url
            music.art=window.$.id2url(music.fid, "image", "AL", "album");
            if(!music.art) throw Error("!! can't get music art");

            callback(music);
        }
    });
}

function smilekzs_jing_alt(music){
    //create music link on music title
    var el_tit=document.getElementsByClassName('tit');
    if(!el_tit || !(el_tit=el_tit[0])) throw Error("!! can't find tit");
    if(el_tit.firstChild.nodeName!='A'){
        var el_a=document.createElement('a');
        el_a.className='smilekzs_tit_a';
        el_a.innerHTML=el_tit.firstChild.data;
        el_a.href=music.url;
        el_tit.replaceChild(el_a, el_tit.firstChild);
    }


    //create album art(large size!) link on album art mask
    var el_mscPlrCtn=document.getElementById('mscPlrCtn');
    if(!el_mscPlrCtn) throw Error("!! can't find mscPlrCtn");

    var el_art_a=el_mscPlrCtn.getElementsByClassName('smilekzs_art_a');
    if(!el_art_a || !el_art_a.length || !(el_art_a=el_art_a[0])){
        var el_mscPlrMask=document.getElementsByClassName('mscPlrMask');
        if(!el_mscPlrMask || !(el_mscPlrMask=el_mscPlrMask[0])) throw Error("!! can't find mscPlrMask");

        el_art_a=document.createElement('a');
        el_mscPlrCtn.replaceChild(el_art_a, el_mscPlrMask);
        el_art_a.appendChild(el_mscPlrMask);
    }

    el_art_a.className='smilekzs_art_a';
    el_art_a.href=music.art;
    el_art_a.target='_blank';
}

//autorun
//window.smilekzs_jing_alt_iid=setInterval(, 1000);

smilekzs_jing_get(function(m){console.log(m);};
