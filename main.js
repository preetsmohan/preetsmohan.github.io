window.onload = (event) => {
  hash = window.location.hash.replace('#', '');
  if (hash === "") {
    desc_switch('home')
  }
  else {
    desc_switch(hash)
  }
};

window.addEventListener('hashchange',() =>{
  hash = window.location.hash.replace('#', '');
  if (hash === "") {
    desc_switch('home')
  }
  else {
    desc_switch(hash)
  }
});

function desc_switch(id){
  var elt_desc = document.getElementsByName(id)[0]
  console.log(elt_desc)
  var current_nav = document.getElementsByClassName("nav current")
  var current_desc = document.getElementsByClassName("description current")
  if (current_nav.length > 0) {
    current_nav[0].className = "nav"
    current_desc[0].className = "description"
  }
  elt = document.getElementById(id)
  console.log(elt)
  elt.className = "nav current"
  if (elt_desc.className === "description") {
    elt_desc.className = "description current"
  }
  window.location.hash = id;
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}
