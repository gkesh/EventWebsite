function changeImg(e1){
  e = e1.getElementsByTagName('img')[0];
  e.src = e.src.replace(".png","_rep.png");
}
function revertImg(e1){
  e = e1.getElementsByTagName('img')[0];
    e.src = e.src.replace("_rep","");
}
