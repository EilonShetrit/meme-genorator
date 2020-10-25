'use strict'

//---MODEL---//
var gKeywords = {
    'happy': 12,
    'funny puk': 1,
    'comics': 2
}

var gImgs = [{
    id: 1,
    url: './meme-img/1.jpg',
    keywords: ['happy']
},
{
    id: 2,
    url: './meme-img/2.jpg',
    keywords: ['happy']
},
{
    id: 3,
    url: './meme-img/3.jpg',
    keywords: ['happy']
},
{
    id: 4,
    url: './meme-img/4.jpg',
    keywords: ['happy']
},
{
    id: 5,
    url: './meme-img/5.jpg',
    keywords: ['happy']
},
{
    id: 6,
    url: './meme-img/6.jpg',
    keywords: ['happy']
},
{
    id: 7,
    url: './meme-img/7.jpg',
    keywords: ['happy']
},
{
    id: 8,
    url: './meme-img/8.jpg',
    keywords: ['happy']
},
{
    id: 9,
    url: './meme-img/9.jpg',
    keywords: ['happy']
},
{
    id: 10,
    url: './meme-img/10.jpg',
    keywords: ['happy']
},
{
    id: 11,
    url: './meme-img/11.jpg',
    keywords: ['happy']
},
{
    id: 12,
    url: './meme-img/12.jpg',
    keywords: ['happy']
},
{
    id: 13,
    url: './meme-img/13.jpg',
    keywords: ['happy']
},
{
    id: 14,
    url: './meme-img/14.jpg',
    keywords: ['happy']
},
{
    id: 15,
    url: './meme-img/15.jpg',
    keywords: ['happy']
},
{
    id: 16,
    url: './meme-img/16.jpg',
    keywords: ['happy']
},
{
    id: 17,
    url: './meme-img/17.jpg',
    keywords: ['happy']
},
{
    id: 18,
    url: './meme-img/18.jpg',
    keywords: ['happy']
}];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
        txt: 'write your text here',
        size: 30,
        align: 'center',
        color: 'white',
        stroke: 'black',
        font: 'Impact',
        x: 250,
        y: 50
    },
    {
        txt: 'write your text here',
        size: 30,
        align: 'center',
        color: 'white',
        stroke: 'black',
        font: 'Impact',
        x: 250,
        y: 470
    }]
}

function setCurrLineIdx() {
    gMeme.selectedLineIdx = (gMeme.selectedLineIdx < gMeme.lines.length - 1) ? gMeme.selectedLineIdx + 1 : 0;
}
function changeTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}
function increaseFont() {
    if(gMeme.lines[gMeme.selectedLineIdx].size === 60) return;
    else gMeme.lines[gMeme.selectedLineIdx].size++;
}
function decreaseFont() {
    if(gMeme.lines[gMeme.selectedLineIdx].size === 16) return;
    else gMeme.lines[gMeme.selectedLineIdx].size--;
}
function moveTxtUp() {
    gMeme.lines[gMeme.selectedLineIdx].y--;
}
function moveTxtDown() {
    gMeme.lines[gMeme.selectedLineIdx].y++;
}
function addLine(line) {
    gMeme.lines.push(line);
}
function deleteLine(idx) {
    gMeme.lines.splice(idx, 1);
}
function alignLeft() {
    gMeme.lines[gMeme.selectedLineIdx].align = 'left';
    gMeme.lines[gMeme.selectedLineIdx].x = 10; 
}
function alignCenter() {
    gMeme.lines[gMeme.selectedLineIdx].align = 'center';
    gMeme.lines[gMeme.selectedLineIdx].x = gCanvas.width / 2; 
}
function alignRight() {
    gMeme.lines[gMeme.selectedLineIdx].align = 'right';
    gMeme.lines[gMeme.selectedLineIdx].x = gCanvas.width - 10; 
}
function updateFontFamily(fontFamily) {
    gMeme.lines[gMeme.selectedLineIdx].font = fontFamily;
}
function updateTxtFillColor(fillColor) {
    gMeme.lines[gMeme.selectedLineIdx].color = fillColor;
}
function updateTxtStrokeColor(strokeColor) {
    gMeme.lines[gMeme.selectedLineIdx].stroke = strokeColor;
}
function selectImg(imgId) {
    gMeme.selectedImgId = imgId;
}
function getMeme() {
    return gMeme
}
function getImgUrlById(imgId) {
    const imgUrl = gImgs.find(img => imgId === img.id)
    return imgUrl.url;
}
function getImgs() {
    return gImgs
}
function changeFocus(){
    gMeme.selectedLineIdx = -1; 
}