console.log("terminate");

document.body.style.removeProperty("cursor");
document.removeEventListener("contextmenu", destroyTarget);
document.removeEventListener("mouseover", selectTarget);
