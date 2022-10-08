const density = "NMOG@#w&$987654321?!abs';:+=-,._";
let video;
let asciiDiv;

function setup() {
  noCanvas();
  video=createCapture(VIDEO);
  background(0);
  video.size(300,300);
  asciiDiv=createDiv();
}
function draw(){
  video.loadPixels();
  let asciiImage="";
  for(let j=0;j<video.height;j++){
    
    for(let i=0;i<video.width;i++){
      const pixelIndex=(i+j*video.width)*4;
      const r = video.pixels[pixelIndex+0];
      const g = video.pixels[pixelIndex+1];
      const b = video.pixels[pixelIndex+2];
      const avg=(r+g+b)/3;
      const len=density.length;
      const charIndex=floor(map(avg,0,255,len,0));
      const c=(density.charAt(charIndex));
      //square()row+=
      if(c==' ')row+="&nbsp";
      else asciiImage+=c;
    }
    asciiImage+='<br/>';
  }
  asciiDiv.html(asciiImage);
}
