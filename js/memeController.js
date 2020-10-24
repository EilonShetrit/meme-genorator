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
    document.querySelector('.nav-btn').classList.toggle('hide');
    document.querySelector('.editor-container').classList.toggle('hide');
    renderCanvas();
}
function onChangeTxt(value) {
    changeTxt(value);
    renderCanvas();
}
function renderLine(line) {
    gCtx.textAlign = `${line.align}`;
    gCtx.font = `${line.size}px  ${line.font}`;
    gCtx.strokeStyle =`${line.stroke}`;
    gCtx.strokeText(line.txt, line.x, line.y);
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
function onAddLine(){
    const line = {
        txt: 'write your text here',
        size: 30,
        align: 'center',
        color: 'white',
        font: 'Impact',
        x: 120,
        y: 220
    }
    addLine(line)
    renderCanvas();
}
function onDeleteLine(){
    const meme = getMeme()
    deleteLine(meme.selectedLineIdx);
    renderCanvas();
}
function onAlignLeft(){ 
    alignLeft();
    renderCanvas(); 
}
function onAlignCenter(){
    alignCenter();
    renderCanvas();
}
function onAlignRight(){
    alignRight();
    renderCanvas();
}
function switchFontFamily(value){
    updateFontFamily(value)
    renderCanvas();
}
function changeStrokeColor(value){
    updateTxtStrokeColor(value)
    renderCanvas();
}
function changeFillColor(value){
    updateTxtFillColor(value);
    renderCanvas();
}
function downloadMeme(elLink){
    var imgContent = gCanvas.toDataURL('image/jpeg');
    elLink.href = imgContent;

}
function shareMeme(){
//TODO
}
function renderLines(){
    const meme = getMeme();
    const selectedLineIdx = meme.selectedLineIdx
    meme.lines.forEach((line,idx) =>{
     if(selectedLineIdx === idx) renderRect(line.x -100 , line.y) // fix the render rect
    renderLine(line)
    })
}
function renderRect(x,y){
const meme = getMeme()
gCtx.beginPath()
gCtx.rect(x , y , x*2 , meme.lines[meme.selectedLineIdx].size)
gCtx.strokeStyle = 'red'
gCtx.stroke()
}


function toggleMenu() {
    var mainMenu = document.getElementById('mainMenu');
    mainMenu.classList.toggle('open');
}