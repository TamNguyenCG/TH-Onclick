let myImg = null
myImg = document.getElementById('anh')

function init() {
    myImg = document.getElementById('anh')
    myImg.style.position = 'relative'
    myImg.style.left = '0'
}

function moveRight() {
    myImg.style.left = parseInt(myImg.style.left) + 30 + 'px'
}

window.onload = init;
