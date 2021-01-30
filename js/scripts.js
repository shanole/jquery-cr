function getModes(array) {
  let frequency = {}; // array of frequency.
  let maxFreq = 0; // holds the max frequency.
  let modes = [];

  for (var i in array) {
    frequency[array[i]] = (frequency[array[i]] || 0) + 1; // increment frequency.

    if (frequency[array[i]] > maxFreq) { // is this frequency > max so far ?
      maxFreq = frequency[array[i]]; // update max.
    }
  }

  for (var k in frequency) {
    if (frequency[k] == maxFreq) {
      modes.push(k);
    }
  }

  return modes;
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

    const bestLanguageValue = getModes(surveyResults);
    
    $("#nameOut").text(userName);

    if (isHuman === "no") {
      $("#not-human").show();
    }
    else {
      if (bestLanguageValue.length > 1) {
        $("#language").text("either JavaScript, Python, OR C#. You can do anything!")
      }
      else {
        if (bestLanguageValue[0]==="1") {
          $("#language").text("JavaScript")
        }
        else if (bestLanguageValue[0]==="2") {
          $("#language").text("Python")
        }
        else if (bestLanguageValue[0]==="3") {
          $("#language").text("C#")
        }
      }
      $("#output").show();
    }




    console.log(userName);
    console.log("survey results are: " + surveyResults);
    console.log("mode is: " + bestLanguageValue);
    console.log("length of mode list is: " + bestLanguageValue.length)
    console.log("are we human? " + isHuman);

    

  })
})