//sleeped hours per day of week
const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 6;

    case "tuesday":
      return 7;

    case "wednesday":
      return 8;

    case "thursday":
      return 6;

    case "friday":
      return 7;

    case "saturday":
      return 12;

    case "sunday":
      return 8;

    default:
      return null;
  }
};

//sum of hours sleeped this week
const getActualSleepHours = () => {
  const actualSleepHours =
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");
  return actualSleepHours;
};

console.log(getActualSleepHours());

//ideal hours of sleep at week
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

console.log(getIdealSleepHours());

//calculate the sleep debt
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    return `You slept ${getActualSleepHours()} hours. Perfect amount of sleep.`;
  } else if (actualSleepHours > idealSleepHours) {
    return `You slept ${getActualSleepHours()} hours. You got more sleep than needed.`;
  } else {
    return `You slept ${getActualSleepHours()} hours. You should get more sleep.`;
  }
};

console.log(calculateSleepDebt());
