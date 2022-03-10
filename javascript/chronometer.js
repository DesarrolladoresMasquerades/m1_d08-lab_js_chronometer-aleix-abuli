class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    if (!callback){
      this.intervalId = setInterval(
        ()=>{
          this.currentTime += 1;
        },
        1 * 1000)
    } else callback();
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime/60);
    
    return minutes;
  }

  getSeconds() {
    let seconds = 0;
    if(this.currentTime%60!==0) seconds += this.currentTime%60; // also let seconds = this.currentTime - this.getMinutes() * 60

    return seconds;
  }

  computeTwoDigitNumber(value) {
    let stringValue = value.toString();
    if(stringValue.length < 2) stringValue = '0' + stringValue;
    return stringValue;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0; 
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let time =  minutes + ':' + seconds;

    return time;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
