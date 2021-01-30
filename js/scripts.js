function bestLanguage(arr) {
  let freq = [0,0,0];
  arr.forEach(function(value) {
    if (value === 1) {
      freq[0] += 1;
      
    }
    else if (value === 2) {
      freq[1] += 1;
    }
    else {
      freq[2] += 1;
    }
  })
 if (freq[0] > freq[1] && freq[0] > freq[2]) {
		return "Javascript"; 	
 }
 else if (freq[1] > freq[0] && freq[1] > freq[2]) {
 		return "Python";
 }
 else if (freq[2] > freq[1] && freq[2] > freq[0]) {
 		return "C#";
 }
 else {
 		return "either JavaScript, Python, OR C#. You can do anything";
 }
}

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const userName = $("input#name1").val();
    const userSubject = parseInt($("#subject").val());
    const userGoal = parseInt($("#goal").val());
    const userPet = parseInt($("#pet").val());
    const isHuman = $("input:radio[name=humanity]:checked").val();

    let surveyResults = [userSubject, userGoal, userPet];
    
    $("#nameOut").text(userName);

    if (isHuman === "no") {
      $("#output-1").hide();
      $("#output-2").toggle();
    }
    else {
      $("#language").text(bestLanguage(surveyResults));
      $("#output-2").hide();
      $("#output-1").toggle();
    }
  })
})