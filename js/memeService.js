'use strict'




//---MODEL---//
var gImgs = [{
    id: 1,
    url: './meme-img/1.jpg'
},
{
    id: 2,
    url: './meme-img/2.jpg'
}];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: {
        txt: 'write your text here',
        size: 30,
        align: 'center',
        color: 'white',
        font: 'Impact'
    }
}

function changeTxt(txt){
    gMeme.lines.txt = txt;
}
function selectImg(imgId) {
    gMeme.selectedImgId = imgId;
}
function getMeme(){
    return gMeme
}
function getImgUrlById(imgId) {
    const imgUrl = gImgs.find(img => imgId === img.id)
    return imgUrl.url;
}
function getImgs(){
    return gImgs
}
