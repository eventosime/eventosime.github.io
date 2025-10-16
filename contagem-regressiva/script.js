var deadline = new Date('2025-12-20T17:00:00').getTime();
    var startTime = new Date().getTime();

    var x = setInterval(function () {
      var now = new Date().getTime();
      var t = deadline - now;

      var dayElem = document.getElementById('day');
      var hourElem = document.getElementById('hour');
      var minuteElem = document.getElementById('minute');
      var secondElem = document.getElementById('second');

      if (t >= 0) {
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);

        if (dayElem) dayElem.innerHTML = days;
        if (hourElem) hourElem.innerHTML = ('0' + hours).slice(-2);
        if (minuteElem) minuteElem.innerHTML = ('0' + minutes).slice(-2);
        if (secondElem) secondElem.innerHTML = ('0' + seconds).slice(-2);

        // Update progress bar
        var totalTime = deadline - startTime;
        var elapsed = now - startTime;
        var progress = Math.min((elapsed / totalTime) * 100, 100);
        document.getElementById('progress-bar').style.width = progress + '%';
      } else {
        clearInterval(x);
        if (dayElem) dayElem.innerHTML = '0';
        if (hourElem) hourElem.innerHTML = '00';
        if (minuteElem) minuteElem.innerHTML = '00';
        if (secondElem) secondElem.innerHTML = '00';

        document.getElementById('main-title').textContent = 'Férias!!! WOW 🎉';
        document.getElementById('progress-bar').style.width = '100%';
      }
    }, 1000);