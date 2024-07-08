function getCurrentDate() {
  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const fomattedDate = today.toLocaleDateString("en-US", options);
  return fomattedDate;
}

function getDateDifferenceFromNow(updateTime) {
  const today = new Date();
  const then = new Date(updateTime);
  const diffMs = today - then;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  if (diffMs < oneHour) {
    const minutes = Math.round(diffMs / oneMinute);
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (diffMs < oneDay) {
    const hours = Math.round(diffMs / oneHour);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else {
    const options = {
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    return then.toLocaleDateString("en-US", options);
  }
}

export { getCurrentDate, getDateDifferenceFromNow };
