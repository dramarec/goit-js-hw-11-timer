import './styles.css';

class CountDownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.timerId = document.querySelector(`${selector}`);
    this.timer();
  }

  timer() {
    setInterval(() => {
      const currentTime = new Date();
      const time = this.targetDate - currentTime;

      const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = this.pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      const mins = this.pad(
        Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
      );
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

      this.timerId.querySelector('[data-value="days"]').textContent = `${days}`;
      this.timerId.querySelector('[data-value="hours"]').textContent = `${hours}`;
      this.timerId.querySelector('span[data-value="mins"]').textContent = `${mins}`;
      this.timerId.querySelector('span[data-value="secs"]').textContent = `${secs}`;

    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const countDown = new CountDownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2021'),
});
//
const countDown2 = new CountDownTimer({
  selector: '#timer-2',
  targetDate: new Date('dec 26, 2020'),
});
