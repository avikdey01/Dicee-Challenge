var randomNumber1=(Math.floor(Math.random()*6))+1;
var s1="images/dice"+randomNumber1+".png";
document.querySelector("img").setAttribute("src",s1);
var randomNumber2=(Math.floor(Math.random()*6))+1;
var s2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",s2);
if(randomNumber1==randomNumber2)
{
  document.querySelector("h1").textContent="Draw!";
}
else if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").textContent="Player 1 Wins!";
}
else
{
  document.querySelector("h1").textContent="Player 2 Wins!";
}
