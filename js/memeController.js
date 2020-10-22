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
    document.querySelector('.imgs-container').innerHTML = strHtml.join('');
}

function renderCanvas() {
    const meme = getMeme()
    var urlImg = getImgUrlById(meme.selectedImgId)
    var img = new Image()
    img.src = urlImg;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        renderTxt(meme.lines.txt) //change to array
    }
    document.querySelector('.canvas-container').style.display = 'block'
}


function onSelectImg(imgId) {
    selectImg(imgId);
    document.querySelector('.imgs-container').style.display = 'none'
    renderCanvas();
}

function onChangeTxt(value) {
    changeTxt(value)
    renderCanvas();
}


function renderTxt(txt) {
    const meme = getMeme();
    gCtx.font = '30px  Impact';
    gCtx.fillStyle = 'white';
    gCtx.fillText(txt, 120, 50);
}

// gCtx.font = `'${meme.lines.size}+px'  '${meme.lines.font}'`;