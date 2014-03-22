`
// ==UserScript==
// @name            jing-down
// @namespace       http://github.com/smilekzs
// @description     add links to jing.fm player, pointing to music file & album cover art
// @include         *jing.fm*
// @version         2.7
// ==/UserScript==
`
injectScript=(src)->
  scriptEl=document.createElement('script')
  scriptEl.innerHTML="(#{src.toString()})();"
  document.head.appendChild(scriptEl)

injectScript ->
  smilekzs_jd=new class JingDown
    class Lib
      constructor:->
        @lib=[]
      exist:(head)->!!(@lib[head.tid])
      get:(head, cb)->
        if @exist(head) then cb(@lib[head.tid]) else @refresh(head, cb)
      getSync:(head)->
        if !(ret=@lib[head.tid]) then @get(head)
        ret
      refresh:(head, cb)->
        art=window.$.id2url(head.fid, 'AL', 'album')
        if !art then throw Error("!! can't get art")
        window.$.ajax({
          url: window.Core.API_VER + '/media/song/surl',
          data: {mid: head.mid, type: "NO"},
          success: (t)=>
            if !t.success then throw Error("!! can't get audio")
            @lib[head.tid]={head: head, art: art, audio: t.result}
            cb?(@lib[head.tid])
        })
        null

    class Ui
      make:->
        #make title link 
        titEl=document.getElementsByClassName('tit')?[0]
        if !titEl then throw Error("!! can't find tit")
        if titEl.firstChild.nodeName!='A'
          @audio_aEl=document.createElement('a')
          @audio_aEl.id='smilekzs_audio_a'
          @audio_aEl.innerHTML=titEl.firstChild.data
          titEl.replaceChild(@audio_aEl, titEl.firstChild)
        #make album link
        mscPlrCtnEl=document.getElementById('mscPlrCtn')
        if !mscPlrCtnEl then throw Error("!! can't find mscPlrCtn")
        @art_aEl=mscPlrCtnEl.getElementsByClassName('smilekzs_art_a')?[0]
        if !@art_aEl
          mscPlrMaskEl=document.getElementsByClassName('mscPlrMask')?[0]
          if !mscPlrMaskEl then throw Error("!! can't find mscPlrMask")
          @art_aEl=document.createElement('a')
          mscPlrCtnEl.replaceChild(@art_aEl, mscPlrMaskEl)
          @art_aEl.appendChild(mscPlrMaskEl)
          @art_aEl.className='smilekzs_art_a'
          @art_aEl.target='_blank'
      set:(o)->
        {audio: @audio_aEl.href, art: @art_aEl.href}=o

    constructor:->
      @lib=new Lib
      @ui=new Ui
    patch:->
      if !(window.Player.music?.length) then return false
      head=window.Player.music.filter((m)->m.tid==Player.tid)[0]
      if !head then return false
      if !@lib.exist(head)
        @lib.get(head, =>@patch())
        return false
      @ui.make()
      @ui.set(@lib.getSync(head))
      return true

  smilekzs_cron=new class Scheduler
    constructor:->
      @iid=null
    stop:->
      if @iid? then clearInterval(@iid)
    start:(timeout=1000)->
      @stop()
      @iid=setTimeout (=>@fire()), timeout
    fire:->
      if smilekzs_jd.patch() then @start(1000) else @start(3000)

  smilekzs_cron.start()
