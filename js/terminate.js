console.log("terminate");
document.removeEventListener("contextmenu", function(e) {
  e.preventDefault();
  e.target.style.display = "none";
});

document.removeEventListener("mouseover", function(e) {

  traverseParents(e.target, function(target) {
    target.style.opacity = "1";
  });

  e.target.style.opacity = "0.5";
  e.target.style.cursor = "pointer";

  e.target.addEventListener("mouseleave", function() {
    e.target.style.opacity = "1";
  });

});
