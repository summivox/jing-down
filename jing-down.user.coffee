jd=new class JingDown
  constructor:->
    @lib=[]
  get:(music, cb)->
    if @lib[music.tid] then return cb(@lib[music.tid])

    art=window.$.id2url(music.fid, "image", "AL", "album")
    if !art then throw Error("!! can't get music art")

    window.$.ajax({
      url: window.Core.API_VER + "/media/song/surl",
      data: {mid: music.mid, type: "NO"},
      success: (t)=>
        console.log(t);
        if !t.success then throw Error("!! can't get music url")
        cb?(@lib[music.tid]={art: art, music: t.result});
    })
    null
