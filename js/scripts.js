$(document).ready(function() {

  $("#button").click(function() {

    // get current time
    var timeStamp = new Date();
    var hours = timeStamp.getHours();
    var minutes = timeStamp.getMinutes();
    var amOrPm = "";

    if (hours < 12) {
      amOrPm = "AM";
    } else {
      amOrPm = "PM";
    }

    // check to see if it's between 9:30-11:30 or 1:30-5
    if ((hours >= 9 && minutes >= 30) && (hours <= 11 && minutes <= 30) || (hours >= 13 && minutes >= 30) && (hours <= 17 && minutes <= 30)) {

        // if minutes is less than 10 add the preceding zero
        if (minutes < 10) {
            $("#response").text("YES, because it's " + hours + ":0" + minutes + " " + amOrPm);
        }

        $("#response").text("YES, because it's " + hours + ":" + minutes + " " + amOrPm);
    } else {

        if (minutes < 10) {
            $("#response").text("NO, because it's " + hours + ":0" + minutes + " " + amOrPm);
        }
    $("#response").text("NO, because it's " + hours + ":" + minutes + " " + amOrPm);
    }

  });

}); // Closing
