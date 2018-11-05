var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("navbar").style.top = "0";
	} else {
		document.getElementById("navbar").style.top = "-80px";
	}
	prevScrollpos = currentScrollPos;
}

window.onload = function() {  
	// Display job0 when page loads.
	jobSelect(0); 

	// Adds click listener to all navbar links.
	var allLinks = document.getElementsByTagName('a');
    	for (var i=0; i < allLinks.length; i++) { 
		var lnk = allLinks[i]; 
		if ((lnk.href && lnk.href.indexOf('#') != -1) &&  
			( (lnk.pathname == location.pathname) || 
	   		('/'+lnk.pathname == location.pathname) ) &&  
	        (lnk.search == location.search)) {   
			lnk.addEventListener("click", function() {
 				var id = this.href.substring(this.href.indexOf("#") + 1);   
   				scrollTo(document.getElementById(id));
			}); 
	    } 
	}

};

function jobSelect(val) {
	var jobs = document.getElementsByClassName("job-pane");   
	for(var i = 0; i < jobs.length; i++) {
		jobs[i].style.display = 'none';
	}
	var showJob = document.getElementById("job" + val);
	showJob.style.display = '';
}

function scrollTo(element) {
	var offset = element.offsetTop - 200; 
	window.scroll({
		behavior: 'smooth',
		left: 0,
		top: offset
	});
}
