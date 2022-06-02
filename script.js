function init() {
	author = document.getElementById("authorExpand");
	author.style.display = "none";
}

function expandAuthor() {
	if (author.style.display == "block") {
		author.style.display = "none";
	}
	else if (author.style.display == "none") {
		author.style.display = "block";
	}
}

function searchPosts() {
    let input = document.getElementById('1er432dgh').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('post');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}