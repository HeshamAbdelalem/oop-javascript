function StopWatch() {
  let runTime,
    stopTime,
    running,
    duration = null;

  this.start = function() {
    if (running) {
      throw new Error('You cannot start it because it is running already');
    }
    runTime = new Date();
    running = true;
  };

  this.stop = function() {
    if (!running) {
      throw new Error('You cannot stop it , because it is stopped already');
    }

    stopTime = new Date();
    running = false;

    let endTime = (stopTime.getTime() - runTime.getTime()) / 1000;

    duration += endTime;
  };

  this.reset = function() {
    runTime = null;
    stopTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, 'duration', {
    get: function() {
      return duration;
    }
  });
}

const sw = new StopWatch();
