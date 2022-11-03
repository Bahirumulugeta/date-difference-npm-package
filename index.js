function getDifference(date) {  //The function that accept the previous date
  var startDate = new Date(date); // change to date format
  if (new Date() > startDate) {  //The current date should be greater than the previous date
    var diffDate = new Date(new Date() - startDate);
    let years = diffDate.toISOString().slice(0, 4) - 1970;
    if (years >= 1) return years + " years ago";
    else if (diffDate.getMonth() >= 1) 
      return diffDate.getMonth() + " months ago"; 
    else if (diffDate.getDate() - 1 >= 1)
      return diffDate.getDate() - 1 + " days ago"; 
    else if (diffDate.getHours() -2 >= 1)
      return diffDate.getHours() - 2 + " hours ago";
    else if (diffDate.getMinutes() >= 1)
      return diffDate.getMinutes() + " minutes ago";
    else return "just now";
  } else return "Date format error";
}
module.exports = getDifference;
