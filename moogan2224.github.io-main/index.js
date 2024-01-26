const buttonGD = document.getElementById("buttonGD");
const buttonP = document.getElementById("buttonP");
const buttonIC = document.getElementById("buttonIC");
const button3 = document.getElementById("button3");
const buttonMe = document.getElementById("buttonMe");

const bGround = document.getElementById("home");
const myName = document.getElementById("myName");

const gdColor = "#EC9751";
const pColor = "#F7F8AA";
const icColor = "#76A9FC";
const _3Color = "#E48C85";
const meColor = "#A1C273";

buttonGD.onmouseover = function(){ mouseOver(gdColor)};
buttonGD.onmouseout  = function() { mouseOut(gdColor)};

buttonP.onmouseover = function(){ mouseOver(pColor)};
buttonP.onmouseout  = function() { mouseOut(pColor)};

buttonIC.onmouseover = function(){ mouseOver(icColor)};
buttonIC.onmouseout  = function() { mouseOut(icColor)};

button3.onmouseover = function(){ mouseOver(_3Color)};
button3.onmouseout  = function() { mouseOut(_3Color)};

buttonMe.onmouseover = function(){ mouseOver(meColor)};
buttonMe.onmouseout  = function() { mouseOut(meColor)};

function mouseOver(color) {
    if(color == gdColor){
        buttonGD.style.backgroundColor = gdColor;
        buttonGD.style.color = "black";
        bGround.style.backgroundColor = gdColor;
    }
    else if(color == pColor){
        buttonP.style.backgroundColor = pColor;
        buttonP.style.color = "black";
        bGround.style.backgroundColor = pColor;
    }
    else if(color == icColor){
        buttonIC.style.backgroundColor = icColor;
        buttonIC.style.color = "black";
        bGround.style.backgroundColor = icColor;
    }
    else if(color == _3Color){
        button3.style.backgroundColor = _3Color;
        button3.style.color = "black";
        bGround.style.backgroundColor = _3Color;
    }
    else if(color == meColor){
        buttonMe.style.backgroundColor = meColor;
        buttonMe.style.color = "black";
        bGround.style.backgroundColor = meColor;
    }
    myName.style.color = "black ";

  }
function mouseOut(color){
    if(color == gdColor){
        buttonGD.style.backgroundColor = "";
        buttonGD.style.color = "black";
        bGround.style.backgroundColor = "";
    }
    else if(color == pColor){
        buttonP.style.backgroundColor = "";
        buttonP.style.color = "black";
        bGround.style.backgroundColor = "";
    }
    else if(color == icColor){
        buttonIC.style.backgroundColor = "";
        buttonIC.style.color = "black";
        bGround.style.backgroundColor = "";
    }
    else if(color == _3Color){
        button3.style.backgroundColor = "";
        button3.style.color = "black";
        bGround.style.backgroundColor = "";
    }
    else if(color == meColor){
        buttonMe.style.backgroundColor = "";
        buttonMe.style.color = "black";
        bGround.style.backgroundColor = "";
    }
    myName.style.color = "";
}
  