const btn = document.querySelector('button');
const body = document.querySelector('body');
const h1 = document.querySelector('#h1');
const btnSimple = document.querySelector('#btnSimple');
const btnHex = document.querySelector('#btnHex');
const simpleColorArray = ['GreenYellow','GhostWhite','LavenderBush','Indigo','LightSeaGreen','Chocolate','LightBlue','LightCoral'];
const hexColorArray = ['#0f5257','#0b3142','#9c92a3','#c6b9cd','#d6d3f0','#815e5b','#685155','#7a6f9b','#8b85c1','#d4cdf4'];
let randomColor;
let span = document.createElement('span');

/**
 * if STATUS = false then simple color array is shown 
 * 
 * if STATUS = true then Hex color array is shown
**/
let status = false;

btnSimple.addEventListener( 'click', ()=>{
  if(status== true){
    status = false;
  }
});

btnHex.addEventListener( 'click', ()=>{
  if(status== false){
    status = true;
  }
});


/**
 * function to get random color from simpleColorArray & hexColorArray
**/
function getColor(){
  if(status == false){
    let randomNumber = Math.floor(Math.random() * simpleColorArray.length);
    randomColor = simpleColorArray[randomNumber];
  } else if(status === true){
    let randomNumber = Math.floor(Math.random() * hexColorArray.length);
    randomColor = hexColorArray[randomNumber];
  };
  return randomColor;
 
};

/**
 * Click me btn to change background color and text
**/
btn.addEventListener( 'click', ()=>{
  let bgColor;
  bgColor = body.style.backgroundColor = getColor();
  span.innerHTML = bgColor;
  h1.appendChild(span);
})