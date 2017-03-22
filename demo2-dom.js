document.getElementById("addClass").addEventListener("click", function(){
			document.getElementById("title").className = "active";
})
document.getElementById("Remove").addEventListener("click", function(){
	var elem = document.getElementById("title2");
	elem.parentNode.removeChild(elem);
})
document.getElementById("edit").addEventListener("click", function(){
	var elem = document.getElementById("title3");
	var para = document.createElement("P");  
	var t = document.createTextNode("This is a paragraph.");
	para.appendChild(t); 
	elem.appendChild(para)
})
