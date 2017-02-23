var links = document.getElementsByClassName("nav");
num_links = links.length
for(var i = 0; i < num_links; i++){
	var time = Math.random();
	link = links[i]
	link.style.animationDelay = (time * 6) +'s';	
}

function desc_switch(elt){
  var elt_desc = document.getElementById(elt.id)
  var current_nav = document.getElementsByClassName("nav current")
  var current_desc = document.getElementsByClassName("description current")
  current_nav[0].className = "nav"
  current_desc[0].className = "description"
  elt.className = "nav current"
  elt_desc.className = "description current"
}
