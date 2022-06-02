$(document).ready(function() {
  $("form#politicalMeter").submit(function(event) {
    event.preventDefault();
    const education = $("select#education").val();
    const gunControl = $("select#gunControl").val();
    
    if (education) {
      if (education === "yes1" && gunControl === "yes2") {
      $("#liberal").show();
          } 
    else if (education === "no1" && gunControl === "no2") {
      console.log(education, gunControl)
      $("#conservative").show();
    } 
    else {
      $("#moderate").show();
    }
  }
});
});

// if (education === "yes1" && gunControl === "yes2") {
//   $("#liberal").show();
// } else if (education === "no1" && gunControl === "no2") {
//   $("#conservative").show();
// } else {
//   $("#moderate").show();
// }