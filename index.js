let after = document.getElementById('after')
let before = document.getElementById('before')
let inside = document.getElementById('inside')
let content = document.getElementById('content')
let container = document.getElementById('container')


container.style.background = ' #ffa '
container.style.height = '50px'

after.onclick = function(){
 container.after(content)
}



before.onclick = function(){
 container.before(content)
}



inside.onclick = function(){
 container.append(content)
}