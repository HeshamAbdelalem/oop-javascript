function StopWatch() {
  let runTime,
    stopTime,
    running,
    duration = null;

  Object.defineProperty(this, 'runTime', {
    get: function() {
      return runTime;
    }
  });

  Object.defineProperty(this, 'stopTime', {
    get: function() {
      return stopTime;
    }
  });

  Object.defineProperty(this, 'running', {
    get: function() {
      return running;
    }
  });

  Object.defineProperty(this, 'duration', {
    get: function() {
      return duration;
    },
    set: function(val) {
      duration = val;
    }
  });
}

StopWatch.prototype.start = function() {
  if (this.running) {
    throw new Error('You cannot start it because it is running already');
  }
  this.runTime = new Date();
  this.running = true;
};

StopWatch.prototype.stop = function() {
  if (!this.running) {
    throw new Error('You cannot stop it , because it is stopped already');
  }

  this.stopTime = new Date();
  this.running = false;

  let endTime = (stopTime.getTime() - runTime.getTime()) / 1000;

  this.duration += endTime;
};

StopWatch.prototype.reset = function() {
  this.runTime = null;
  this.stopTime = null;
  this.running = false;
  this.duration = 0;
};

const sw = new StopWatch();
