for (let j=1;j<=1;j++){
let canvas=document.getElementById('canvas'+j);
let context=document.getElementById('canvas'+j).getContext('2d');
let image=document.getElementById('image'+j);
let frames=24;

function drawImage(source, frameNum) {
    image.onload=function (){
        canvas.width=image.width/frames;
        canvas.height=image.height;
        frameNum=image.width/frames*frameNum;
        context.clearRect(0,0,100,100);
        context.drawImage(image,frameNum,0,image.width/frames,image.height,0,0,image.width/frames,image.height);
    }
    image.src=source;
    image.style.display='none';
}

let i=0; 
setInterval(function(){
     drawImage('image.png',i);
      i++; 
      if (i==frames)
        i=0;
    },50);
}