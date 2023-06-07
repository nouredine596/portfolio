let btn = document.getElementById('btn')
let main = document.getElementById('main')


window.onscroll = function () {
    if (scrollY > 1000){
        btn.style.display = 'block'
    }else{
        btn.style.display = 'none'
    }
}


btn.onclick = function () {
    scroll ({
        top : 0,
        behavior : "smooth"
    })
}

setInterval(function () {
    x = Math.floor((Math.random() * 3)+2)
    main.style.backgroundImage = `url(image/${x}.jpg)`
   
   
},8000)




