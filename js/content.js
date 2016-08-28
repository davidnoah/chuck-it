function traverseParents(childNode, callback) {
  var initialParent = childNode.parentNode;

  while (initialParent.toString() !== "[object HTMLDocument]") {
    callback(initialParent);
    initialParent = initialParent.parentNode;
  }
}

document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
  e.target.style.display = "none";
});

document.addEventListener("mouseover", function(e) {

  traverseParents(e.target, function(target) {
    target.style.opacity = "1";
  });

  e.target.style.opacity = "0.5";
  e.target.style.cursor = "pointer";

  e.target.addEventListener("mouseleave", function() {
    e.target.style.opacity = "1";
  });

});
