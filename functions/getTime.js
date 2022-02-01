function getTime() {
    stamp = new Date();
    hours = stamp.getHours();
    if (hours >= 18 && hours < 24) {
      time = "Boa noite";
    } else if (hours >= 12 && hours < 18) {
      time = "Boa tarde";
    } else if (hours >= 5 && hours < 12) {
      time = "Bom dia";
    } else if (hours >= 00 && hours < 5) {
      time = "Boa noite";
    }
    return time;
  }
  exports.getTime = getTime;
  