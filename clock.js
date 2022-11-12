//grab the clock element and create a new Date() object;
const clock = document.querySelector('#clock');

//function to print the time every second
function getDateAndTime() {
  let date = new Date();
  /*Convert 24 hours to 12*/
  let ending = '';
  if (date.getHours() >= 12) {
    ending = 'PM';
    clock.innerHTML = `Today is: ${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${date
      .getDate()
      .toString()
      .padStart(2, '0')}-${date.getFullYear()} ${(date.getHours() - 12)
      .toString()
      .padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date
      .getSeconds()
      .toString()
      .padStart(2, '0')}${ending}`;
  } else {
    ending = 'AM';
    clock.innerHTML = `Today is: ${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${date
      .getDate()
      .toString()
      .padStart(2, '0')}-${date.getFullYear()} ${date
      .getHours()
      .toString()
      .padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date
      .getSeconds()
      .toString()
      .padStart(2, '0')}${ending}`;
  }

  setTimeout(getDateAndTime, 1000);
}

getDateAndTime();
