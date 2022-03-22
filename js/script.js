let video1 = document.getElementById("video1")
let control = document.getElementById("control")
let barProgress = document.getElementById("progressWrapper")
let progress = document.getElementById("progress")
let buttons = document.getElementById("buttons")
let back = document.getElementById("back")
let playPause = document.getElementById("playPause")
let Stop = document.getElementById("stop");
let forward = document.getElementById("forward")
let index = 0;
let body = document.getElementsByTagName("body")[0]

// Funções para exibir ou esconder ao colocar o mouse sobre o vídeo
control.addEventListener("mouseover", ()=>{
    barProgress.style = "opacity: 100%;"
    buttons.style = "opacity: 100%;"
})

control.addEventListener("mouseout", ()=>{
    barProgress.style = "opacity: 0%;"
    buttons.style = "opacity: 0%;"
})

video1.addEventListener("timeupdate",()=>{
    n = video1.currentTime
    s = video1.duration
    ns = (n*100)/s
    progress.style = "width:"+ns+"%;"
})

// Função do botão PlayPause e sincronização da barra de progresso
playPause.addEventListener("click", ()=>{
    playPause.getAttribute("data-status")
    let status = playPause.dataset.status
    if (status == "true"){
    video1.play()
    playPause.setAttribute("src", "./assets/pause - branco.png")

    return playPause.dataset.status = "false"
    }
    else{
        video1.pause()
        playPause.setAttribute("src", "./assets/play - branco.png")

    return playPause.dataset.status = "true"  
        }
})

// Função do Botão stop
Stop.addEventListener("click", ()=>{
    video1.pause()
    video1.currentTime = 0;
})

// Função do Botão forward
forward.addEventListener("click", ()=>{
    video1.currentTime += 10;
})

// Função do Botão back
back.addEventListener("click", ()=>{
    video1.currentTime -= 10;
})