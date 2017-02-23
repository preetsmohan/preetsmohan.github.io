//thanks to: http://stackoverflow.com/questions/23981717/animation-css3-blinking-stars

var limit=200, // Max number of stars
body=document.body;
loop={
 //initilizeing
 start:function(){
  for (var i=0; i <= limit; i++) {
   var star=this.newStar();
   star.style.top=this.rand()*110+"%";
   star.style.left=this.rand()*100+"%";
   star.style.webkitAnimationDelay=(this.rand()*3)+"s";
   star.style.mozAnimationDelay=this.rand()+"s";
   body.appendChild(star);
  };
 },
 //to get random number
 rand:function(){
  return Math.random();
 },
 //createing html dom for star
 newStar:function(){
  var d = document.createElement('div');
  d.innerHTML = '<div class="star"></div>';
   return d.firstChild;
 },
};

loop.start();