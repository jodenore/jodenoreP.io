let date = new Date();

const dayOfTheWeek = date.getDay();

const heroDate = document.querySelector("[data-date]");

const getDay = () => {
  let weekDay;
  switch (true) {
    case dayOfTheWeek === 1:
      weekDay = "Monday";
      break;
    case dayOfTheWeek === 2:
      weekDay = "Tuesday";
      break;
    case dayOfTheWeek === 3:
      weekDay = "Wednesday";
      break;
    case dayOfTheWeek === 4:
      weekDay = "Thursday";
      break;
    case dayOfTheWeek === 5:
      weekDay = "Friday";
    default:
      break;
  }
  return weekDay;
};

heroDate.innerHTML = getDay();
