'use strict'

//---MODEL---//
var gImgs = [{
    id: 1,
    url: './meme-img/1.jpg'
},
{
    id: 2,
    url: './meme-img/2.jpg'
},
{
    id: 3,
    url: './meme-img/3.jpg'
},
{
    id: 4,
    url: './meme-img/4.jpg'
},
{
    id: 5,
    url: './meme-img/5.jpg'
},
{
    id: 6,
    url: './meme-img/6.jpg'
},
{
    id: 7,
    url: './meme-img/7.jpg'
},
{
    id: 8,
    url: './meme-img/8.jpg'
},
{
    id: 9,
    url: './meme-img/9.jpg'
},
{
    id: 10,
    url: './meme-img/10.jpg'
},
{
    id: 11,
    url: './meme-img/11.jpg'
},
{
    id: 12,
    url: './meme-img/12.jpg'
},
{
    id: 13,
    url: './meme-img/13.jpg'
},
{
    id: 14,
    url: './meme-img/14.jpg'
},
{
    id: 15,
    url: './meme-img/15.jpg'
},
{
    id: 16,
    url: './meme-img/16.jpg'
},
{
    id: 17,
    url: './meme-img/17.jpg'
},
{
    id: 18,
    url: './meme-img/18.jpg'
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
        x: 220,
        y: 50
    },
    {
        txt: 'write your text here',
        size: 30,
        align: 'center',
        color: 'white',
        stroke: 'black',
        font: 'Impact',
        x: 220,
        y: 420
    }]
}

function setCurrLineIdx(){
gMeme.selectedLineIdx = (gMeme.selectedLineIdx<gMeme.lines.length-1)? gMeme.selectedLineIdx+1 : 0;
}
function changeTxt(txt){
gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}
function increaseFont(){
gMeme.lines[gMeme.selectedLineIdx].size++;
}
function decreaseFont(){
gMeme.lines[gMeme.selectedLineIdx].size--;
}
function moveTxtUp(){
gMeme.lines[gMeme.selectedLineIdx].y--;
}
function moveTxtDown(){
gMeme.lines[gMeme.selectedLineIdx].y++;
}
function addLine(line){
gMeme.lines.push(line);
}
function deleteLine(idx){
    gMeme.lines.splice(idx, 1);
}
function alignLeft(){
    gMeme.lines[gMeme.selectedLineIdx].align = 'left';
}
function alignCenter(){
    gMeme.lines[gMeme.selectedLineIdx].align = 'center';
}
function alignRight(){
    gMeme.lines[gMeme.selectedLineIdx].align = 'right';
}
function updateFontFamily(fontFamily){
    gMeme.lines[gMeme.selectedLineIdx].font = fontFamily; 
}
function updateTxtFillColor(fillColor){
    gMeme.lines[gMeme.selectedLineIdx].color = fillColor; 
}
function updateTxtStrokeColor(strokeColor){
    gMeme.lines[gMeme.selectedLineIdx].stroke = strokeColor; 
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
