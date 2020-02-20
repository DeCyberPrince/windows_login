const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function(now = new Date(Date.now())) {
  return {
    date() {
      return `${weekDays[now.getDay()]}, ${Months[now.getMonth()]} ${now.getDate()}`;
    },
    time() {
      let hours = now.getHours();
      let minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours %= 12;
      hours = hours || 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      return `${hours}:${minutes} ${ampm}`;
    },
    update: function(timeElem, dateElem) {
      dateElem.innerText = this.date();
      timeElem.innerText = this.time();
    }
  };
}
