function traverseParents(childNode, callback) {
  var initialParent = childNode.parentNode;

  while (initialParent.toString() !== "[object HTMLDocument]") {
    callback(initialParent);
    initialParent = initialParent.parentNode;
  }
}

var destroyTarget = function(e) {
  e.preventDefault();
  e.target.style.display = "none";
};

var selectTarget = function(e) {
  traverseParents(e.target, function(target) {
    target.style.opacity = "1";
  });

  e.target.style.opacity = "0.5";

  e.target.addEventListener("mouseleave", function() {
    e.target.style.opacity = "1";
  });
};

document.body.style.cursor = "pointer";
document.addEventListener("contextmenu", destroyTarget);
document.addEventListener("mouseover", selectTarget);
