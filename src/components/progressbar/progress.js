let progress = document.querySelector('.progress');
let progressLabel = document.querySelector('.progressLabel');
let start = document.querySelector('.start');
let text = document.querySelector('.text');

function handleClick(){
    let value = 0;
    let interval;
    
    interval = setInterval(()=>{
        if(value === 90){
            clearInterval(interval);
            text.style.display = `block`;
        }
        value+=10;
        progress.style.width = `${value}%`;
        progressLabel.innerText = `${value}%`;
    },1000)
}

start.addEventListener('click',()=>{
    handleClick();
})
