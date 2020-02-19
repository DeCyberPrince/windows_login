import getDateTime from './datetime';

const lock = document.getElementById('lock');
const login = document.getElementById('login');
const close = document.getElementById('close');
const time = document.getElementById('time');
const date = document.getElementById('date');
const pass = document.getElementById('passInput');
const name = document.getElementById('name');
const background = document.getElementById('background');

const config = {
  user: 'DeCyberPrince',
  background() {
    return `url('${this.backgroundPath}'`;
  },
  backgroundPath: '/assets/img/background.jpg'
};

lock.addEventListener('keydown', e => {
  e.target.style.transform = `translateY(-100%)`;
});

close.addEventListener('click', () => {
  lock.style.transform = 'translateY(0%)';
  lock.focus();
  setTimeout(() => {
    pass.value = '';
  }, 500);
});

function init() {
  name.innerText = config.user;

  lock.style.background = config.background();
  background.style.background = config.background();
  lock.style.backgroundSize = 'cover';
  background.style.backgroundSize = 'cover';

  console.log(background.style.background);

  lock.focus();
  date.innerText = getDateTime().date();
  time.innerText = getDateTime().time();

  const hammer = new Hammer(lock);
  hammer.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL });
  hammer.on('panup', () => {
    lock.style.transform = `translateY(-100%)`;
  });

  setInterval(() => {
    date.innerText = getDateTime().date();
    time.innerText = getDateTime().time();
  }, 5000);
}

init();

// background.addEventListener('mousemove', e => {
//   let x = e.pageX;
//   let y = e.pageY;
//   background.style.background = `radial-gradient(circle at ${x}px ${y}px, #c31432, #240b36)`;
// });
