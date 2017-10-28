var out=document.getElementById("out");
var mask=document.getElementsByClassName("mask");
var modal_flow = document.getElementsByClassName("modal_flow");
var confirm=document.getElementById("confirm");
var cancel=document.getElementById("cancel");


out.onclick=function show(){
  modal_flow[0].style.display='block';
  mask[0].style.display='block';
}

function hide(){
  modal_flow[0].style.display='none';
  mask[0].style.display='none';
}
confirm.onclick=hide;
cancel.onclick=hide;
mask.onclick=hide;


