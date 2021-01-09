const gameArea = document.getElementById('game-area');
const ctx = gameArea.getContext('2d');

let count = 0;

let mainImg = new Image();
mainImg.src ="Amidakuji.png";

let omikuji = new Image();
omikuji.src ="omikuji.png";

ctx.font = "32px Arial";
ctx.fillStyle = "black";


function result()
{
 ctx.font = "32px Arial";
 ctx.fillStyle = "black";


 ctx.clearRect(0,0,400,400);


 count=Math.floor(Math.random() * 5);
 
 if(count == 0)
 {
     ctx.fillText("凶です",200,200);
 }

 if(count == 1)
 {
     ctx.fillText("末吉です",200,200);
 }

 if(count == 2)
 {
     ctx.fillText("小吉です",200,200);
 }

 if(count == 3)
 {
     ctx.fillText("中吉です",200,200);
 }

 if(count == 4)
 {
    ctx.fillStyle="red";
    ctx.fillText("大吉です",200,200);
 }



 
}


