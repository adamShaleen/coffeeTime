$(document).ready(function() {

  $("#button").click(function() {

    // get current time
    var timeStamp = new Date();
    var hours = timeStamp.getHours();
    var minutes = timeStamp.getMinutes();

    // check to see if it's between 9:30-11:30 or 1:30-5
    if (hours >= 9 && hours <= 11 && minutes <= 30 || hours >= 13 && hours <= 17 && minutes <= 30) {
      $("#response").text("YES");
    } else {
      $("#response").text("NO");
    }
  });

}); // Closing
