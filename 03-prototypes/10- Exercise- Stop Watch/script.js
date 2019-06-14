function StopWatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function() {
    if (running) {
      throw new Error('IT IS ALREADY RUNNING');
    }
    running = true;
    startTime = new Date();
  };

  this.stop = function() {
    if (!running) {
      throw new Error('IT IS NOT RUNNING');
    }

    running = false;

    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function() {
    let startTime,
      endTime = null;
    let running = false;
    let duration = 0;
  };

  Object.defineProperty(this, 'duration', {
    get: function() {
      return duration;
    }
  });
}

const sw = new StopWatch();
