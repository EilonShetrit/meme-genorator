var gCanvas;
var gCtx;

gCanvas = document.querySelector('#my-canvas');
gCtx = gCanvas.getContext('2d');
console.log('The context:', gCtx);

function onInit() {
    renderImgs()
}
function renderImgs() {
    var imgs = getImgs();
    let strHtml = imgs.map(img => {
        return `<img src="${img.url}" onclick="onSelectImg(${img.id})">`
    })
    document.querySelector('.gallery-container').innerHTML = strHtml.join('');
}

function renderCanvas() {
    const meme = getMeme();
    var urlImg = getImgUrlById(meme.selectedImgId);
    var img = new Image();
    img.src = urlImg;
    img.onload = () => {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height); 
    renderLines();
    }
}

function onSelectImg(imgId) {
    selectImg(imgId);
    document.querySelector('.gallery-container').classList.toggle('hide');
    document.querySelector('.about').classList.toggle('hide');
    document.querySelector('.editor-container').classList.toggle('hide');
    renderCanvas();
}
function onChangeTxt(value) {
    changeTxt(value);
    renderCanvas();
}
function renderLine(line) {
    gCtx.font = `${line.size}px  ${line.font}`;
    gCtx.fillStyle = `${line.color}`;
    gCtx.fillText(line.txt, line.x, line.y);
}
function onIncreaseFont(){
increaseFont();
renderCanvas();
}
function onDecreaseFont(){
decreaseFont();
renderCanvas();
}
function onMoveTxtUp(){
moveTxtUp();
renderCanvas();
}
function onMoveTxtDown(){
moveTxtDown();
renderCanvas()
}
function onSwitchLine(){
setCurrLineIdx(); 
renderCanvas()
}

function renderLines(){
    const meme = getMeme();
    const selectedLineIdx = meme.selectedLineIdx
    console.log(selectedLineIdx);
    meme.lines.forEach((line,idx) =>{
     if(selectedLineIdx === idx) renderRect(line.x - 10 , line.y - 25) // fix the render rect
    renderLine(line)
    })
}

function renderRect(x,y){
const meme = getMeme()
gCtx.beginPath()
gCtx.rect(x , y , x*2 , meme.lines[meme.selectedLineIdx].size)
gCtx.strokeStyle = 'black'
gCtx.stroke()
}