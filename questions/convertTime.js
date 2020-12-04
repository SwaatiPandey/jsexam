/**
 The function takes number of seconds as input and return an object with keys 
 hours
 minutes
 seconds
 The value corresponding to each key should be the conversion of seconds into correponding 
 time 
 */
const convertTime = (seconds) => {
  try {
    var result = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    let h = result.hours;
    let m = result.minutes;
    let s = result.seconds;
    if (isNaN(seconds)) {
      // console.log("Invalid Input");
      throw new Error("Invalid Input");
    }
    seconds = Number(seconds);
    h = Math.floor(seconds / 3600);
    m = Math.floor((seconds % 3600) / 60);
    s = Math.floor((seconds % 3600) % 60);

    result.hours = h;
    result.minutes = m;
    result.seconds = s;

    return result;
  } catch (err) {
    throw err;
  }
};
convertTime(30005);

module.exports = convertTime;
