import DateTime from './datetime';
import actions from './handler';

const lock = document.getElementById('lock');
const login = document.getElementById('login');
const close = document.getElementById('close');
const time = document.getElementById('time');
const date = document.getElementById('date');

lock.addEventListener('keydown', e => {
  actions.slideUp(e.target);
});

close.addEventListener('click', () => {
  actions.slideDown(lock);
  lock.focus();
});

(function init() {
  lock.focus();

  const hammer = new Hammer(lock);
  hammer.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL });
  hammer.on('panup', () => {
    actions.slideUp(lock);
  });

  DateTime().update(time, date);
  setInterval(() => {
    DateTime().update(time, date);
  }, 3000);
})();
