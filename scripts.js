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
};

function jobSelect(val) {
	var jobs = document.getElementsByClassName("job-pane");   
	for(var i = 0; i < jobs.length; i++) {
		jobs[i].style.display = 'none';
	}
	var showJob = document.getElementById("job" + val);
	showJob.style.display = '';
}