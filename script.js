'use strict'
// Please don't delete the 'use strict' line above



const picArray = [
    {src: "https://i.ibb.co/g7Rd34P/1.jpg", title: '上野ファーム（旭川）'},
    {src: "https://i.ibb.co/cLxpbXV/2-2.jpg", title: '白樺並木（美瑛）'},
    {src: "https://i.ibb.co/rxxhSXd/3.jpg", title: '四季彩の丘（美瑛）'},
    {src: "https://i.ibb.co/4jQGqnb/4.jpg", title: 'セブンスターの木（美瑛）'},
    {src: "https://i.ibb.co/qBL86Xg/5.jpg", title: '阿寒湖（釧路）'},
    {src: "https://i.ibb.co/0XpnQSG/6.jpg", title: '摩周湖（弟子屈）'}
];

let i = 0;

function changePicture() {
    if(i === picArray.length-1) {
        i = 0;
    } else {
        i ++;
    }
    document.getElementById('pics').src = picArray[i].src;
    document.getElementById('pic-title').innerHTML = picArray[i].title;
};

let button = document.getElementById('playButton');
button.addEventListener('click', changePicture);