let title_video = document.getElementById("title_video")
let video = document.getElementById("video")
let progress_bar = document.getElementById("progress_bar")
let btn_play = document.getElementById("btn_play")
let sts = btn_play.getAttribute("status")
let btn_stop = document.getElementById("btn_stop")
let btn_back = document.getElementById("btn_back")
let btn_forward = document.getElementById("btn_forward")
let btn_fullscreen = document.getElementById("btn_fullscreen")
let it_list = document.querySelectorAll(".it_list")
listVideos = [
    {
        titulo: "<h3 id='title_video'> Trailer Cyberpunk 2077 </h3>",
        src: "./assets/videos/Cyberpunk-2077.mp4",
        img: "./assets/videos/cyberpunkIMG.webp"
    },
    {
        titulo: "<h3 id='title_video'> Trailer Batman Arkham Origins </h3>",
        src: "./assets/videos/Batman-Arkham-Origins-Trailer.mp4",
        img: "./assets/videos/batman-arkham-origins-video-game-wallpaper-preview.jpg"
    },
    {
        titulo: "<h3 id='title_video'> Trailer Final Fantasy VII remake </h3>",
        src: "./assets/videos/FFVII-remake-trailer.mp4",
        img: "./assets/videos/final-fantasy-vii-remake-cloud-strife-shinra-midgar-hd-wallpaper-preview.jpg"
    },
    {
        titulo: "<h3 id='title_video'> Trailer Horizon Zero Dawn </h3>",
        src: "./assets/videos/Horizon-Zero Dawn-Trailer.mp4",
        img: "./assets/videos/video-game-horizon-zero-dawn-aloy-horizon-zero-dawn-wallpaper-preview.jpg"
    },
    {
        titulo: "<h3 id='title_video'> Trailer Assasin's creed III </h3>",
        src: "./assets/videos/Assassins-Creed-3-Trailer.mp4",
        img: "./assets/videos/aciii-3-wallpaper-preview.jpg"
    }
]

//Seletor de vídeos
for(let i=0; i< it_list.length; i++){
    it_list[i].addEventListener("click", function(e){
        console.log(e.target.innerHTML)
        title_video.innerHTML = listVideos[i].titulo
        video.setAttribute("src", listVideos[i].src)
        video.setAttribute("poster", listVideos[i].img)

    })
}

// Configurações do Player de Vídeo
video.addEventListener("timeupdate", (e) => {
    let currentTime = e.target.currentTime;
    let duration = e.target.duration;
    let progressWidth = (currentTime / duration) * 100;
    progress_bar.style.width = progressWidth + "%";
})

btn_play.addEventListener("click", () => {
    let sts = btn_play.getAttribute("status")
    if (sts == "true") {
        video.play()
        btn_play.setAttribute("src", "./assets/imagens/pause - branco.png")
        btn_play.setAttribute("status", "false")
    }
    if (sts == "false") {
        video.pause()
        btn_play.setAttribute("src", "./assets/imagens/play - branco.png")
        btn_play.setAttribute("status", "true")
    }
})

btn_stop.addEventListener("click", () => {
    video.pause()
    video.currentTime = 0;
    btn_play.setAttribute("src", "./assets/imagens/play - branco.png")
    btn_play.setAttribute("status", "true")
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