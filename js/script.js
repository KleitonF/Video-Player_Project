let title_video = document.getElementById("title_video")
let video = document.getElementById("video")
let progress_bar = document.getElementById("progress_bar")
let btn_play = document.getElementById("btn_play")
let sts = btn_play.getAttribute("status")
let btn_stop = document.getElementById("btn_stop")
let btn_back = document.getElementById("btn_back")
let btn_forward = document.getElementById("btn_forward")
let btn_fullscreen = document.getElementById("btn_fullscreen")
let it_list = document.getElementsByClassName("it_list")

//Configurações do Seletor de vídeos
it_list[0].addEventListener("click", () =>{
    var video = document.getElementById("video")
    title_video.innerHTML = "<h3 id='title_video'> Trailer Cyberpunk 2077 </h3>"
    video.setAttribute("src","./assets/videos/Cyberpunk-2077.mp4")
    video.setAttribute("poster","./assets/videos/cyberpunkIMG.webp")
    video = document.getElementById("video")
})

it_list[1].addEventListener("click", () =>{
    var video = document.getElementById("video")
    title_video.innerHTML = "<h3 id='title_video'> Trailer Batman Arkham Origins </h3>"
    video.setAttribute("src","./assets/videos/Batman-Arkham-Origins-Trailer.mp4")
    video.setAttribute("poster","./assets/videos/batman-arkham-origins-video-game-wallpaper-preview.jpg")
    video = document.getElementById("video")
})

it_list[2].addEventListener("click", () =>{
    var video = document.getElementById("video")
    title_video.innerHTML = "<h3 id='title_video'> Trailer Final Fantasy VII remake </h3>"
    video.setAttribute("src","./assets/videos/FFVII-remake-trailer.mp4")
    video.setAttribute("poster","./assets/videos/final-fantasy-vii-remake-cloud-strife-shinra-midgar-hd-wallpaper-preview.jpg")
    video = document.getElementById("video")
})
it_list[3].addEventListener("click", () =>{
    var video = document.getElementById("video")
    title_video.innerHTML = "<h3 id='title_video'> Trailer Horizon Zero Dawn </h3>"
    video.setAttribute("src","./assets/videos/Horizon-Zero Dawn-Trailer.mp4")
    video.setAttribute("poster","./assets/videos/video-game-horizon-zero-dawn-aloy-horizon-zero-dawn-wallpaper-preview.jpg")
    video = document.getElementById("video")
})

it_list[4].addEventListener("click", () =>{
    var video = document.getElementById("video")
    title_video.innerHTML = "<h3 id='title_video'> Trailer Assasin's creed III </h3>"
    video.setAttribute("src","./assets/videos/Assassins-Creed-3-Trailer.mp4")
    video.setAttribute("poster","./assets/videos/aciii-3-wallpaper-preview.jpg")
    video = document.getElementById("video")
})

// Configurações do Player de Vídeo
video.addEventListener("timeupdate", (e)=>{
    let currentTime = e.target.currentTime;
    let duration = e.target.duration;
    let progressWidth = (currentTime / duration) *100;
    progress_bar.style.width = progressWidth+"%";
})

btn_play.addEventListener("click",()=>{
    let sts = btn_play.getAttribute("status")
    if(sts == "true"){
        video.play()
        btn_play.setAttribute("src","./assets/imagens/pause - branco.png")
        btn_play.setAttribute("status","false")
    }
    if(sts == "false"){
        video.pause()
        btn_play.setAttribute("src","./assets/imagens/play - branco.png")
        btn_play.setAttribute("status","true")
    }
})

btn_stop.addEventListener("click", () => {
    video.pause()
    video.currentTime = 0;
    btn_play.setAttribute("src","./assets/imagens/play - branco.png")
    btn_play.setAttribute("status","true")
})

btn_back.addEventListener("click", () => {
    video.currentTime -= 10;
})

btn_forward.addEventListener("click", () => {
    video.currentTime += 10;
})

btn_fullscreen.addEventListener("click", () => {
    video.requestFullscreen()
})