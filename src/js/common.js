const lock = document.getElementById('lock');
const login = document.getElementById('login');
const close = document.getElementById('close');
const time = document.getElementById('time');
const date = document.getElementById('date');

let hammer = new Hammer(lock);
hammer.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL });
hammer.on('panup', () => {
  lock.style.transform = `translateY(-100%)`;
});

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

lock.addEventListener('keydown', e => {
  e.target.style.transform = `translateY(-100%)`;
});

close.addEventListener('click', () => {
  lock.style.transform = 'translateY(0%)';
  lock.focus();
});

function init() {
  lock.focus();
  date.innerText = getDateTime().date();
  time.innerText = getDateTime().time();
}

function getDateTime(now = new Date(Date.now())) {
  return {
    date() {
      return `${weekDays[now.getDay()]}, ${Months[now.getMonth()]} ${now.getDate()}`;
    },
    time() {
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let ampm = hours >= 12 ? 'PM' : 'AM';
      hours %= 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      return `${hours}:${minutes} ${ampm}`;
    }
  };
}

init(
  setInterval(() => {
    date.innerText = getDateTime().date();
    time.innerText = getDateTime().time();
  }, 5000)
);

// background.addEventListener('mousemove', e => {
//   let x = e.pageX;
//   let y = e.pageY;
//   background.style.background = `radial-gradient(circle at ${x}px ${y}px, #c31432, #240b36)`;
// });
