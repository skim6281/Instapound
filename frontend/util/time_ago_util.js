export const time_ago = (upload_date) => {
  const seconds = Math.floor(new Date() - new Date(upload_date))/1000;

  if (seconds > 604800){
    const weeks = Math.floor(seconds/604800);
    return weeks + "w";
  } else if (seconds > 86400) {
    const days = Math.floor(seconds/86400);
    return days + "d";
  } else if (seconds > 3600) {
    const hours = Math.floor(seconds/3600);
    return hours + "h";
  } else if (seconds > 60) {
    const minutes = Math.floor(seconds/60);
    return minutes + "m";
  } else {
    return seconds + "s";
  }

  return(upload_date);
};
