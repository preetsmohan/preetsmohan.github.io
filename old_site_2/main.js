function desc_switch(elt){
  var elt_desc = document.getElementById(elt.id)
  console.log(elt_desc)
  var current_nav = document.getElementsByClassName("nav current")
  var current_desc = document.getElementsByClassName("description current")
  current_nav[0].className = "nav"
  current_desc[0].className = "description"
  elt.className = "nav current"
  if elt_desc.className = "description"{
    elt_desc.className = "description current"
  }
}
