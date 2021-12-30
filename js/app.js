let htmlFullHeight = document.body.clientHeight;
let viewportHeight = window.innerHeight;
let leftHeight = htmlFullHeight - viewportHeight;
let progressBar = document.getElementById('progress-bar');

console.log(leftHeight);

window.addEventListener('scroll', ()=>{
    let value = (scrollY / leftHeight) * 100;
    progressBar.style.width = value + '%';
});

window.addEventListener('resize', ()=>{
    htmlFullHeight = document.body.clientHeight;
    viewportHeight = window.innerHeight;
    leftHeight = htmlFullHeight - viewportHeight;
    progressBar = document.getElementById("progress-bar");
});