function formatDuration (sec) {
    let seconds = sec;
    let minutes = 0;
    let hours = 0;
    let days = 0;
    let months = 0;
    let years = 0;
    let timeArr = [];
    
    if(isNaN(seconds)) return "now";
    
    if(seconds === 0) return "now";
    
    if(seconds % 60 === 0) {
      minutes = seconds / 60;
      seconds = 0;
    } else {
      minutes = Math.floor(seconds / 60);
      seconds = seconds - minutes * 60;
    }
    
    if(seconds === 1) timeArr.push("1 second");
    if(seconds > 1) timeArr.push(`${seconds} seconds`);
    
    if(minutes % 60 === 0) {
      hours = minutes / 60;
      minutes = 0;
    } else {
      hours = Math.floor(minutes / 60);
      minutes = minutes - hours * 60;
    }
    
    if(minutes === 1) timeArr.push("1 minute");
    if(minutes > 1) timeArr.push(`${minutes} minutes`);
    
    if(hours % 24 === 0) {
      days = hours / 24;
      hours = 0;
    } else {
      days = Math.floor(hours / 24);
      hours = hours - days * 24;
    }
    
    if(hours === 1) timeArr.push("1 hour");
    if(hours > 1) timeArr.push(`${hours} hours`);
    
    if(days % 365 === 0) {
      years = days / 365;
      days = 0;
    } else {
      years = Math.floor(days / 365);
      days = days - years * 365; 
    }
    
    if(days === 1) timeArr.push("1 day");
    if(days > 1) timeArr.push(`${days} days`);
    
    if(years === 1) timeArr.push("1 year");
    if(years > 1) timeArr.push(`${years} years`);
    
    timeArr = timeArr.reverse();
    
    for(let i in timeArr) {
      if((i == timeArr.length - 1) && (i != 0)) {
        timeArr[i] = ` and ${timeArr[i]}`;
      } else if(i == 0) {
        timeArr[i] = timeArr[i];
      } else {
        timeArr[i] = `, ${timeArr[i]}`;
      }
    }
    
    return timeArr.join("");
  }