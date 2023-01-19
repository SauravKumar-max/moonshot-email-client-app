export function formatDate(date) {
  const genralDate = new Date(date);
  const localDate = genralDate.toLocaleDateString();
  const time = convertToMeridiemTime(genralDate.toLocaleTimeString());
  return `${localDate}  ${time}`;
}

function convertToMeridiemTime(time) {
  const timeArr = time.split(":");
  let ampm = "am";

  if (timeArr[0] >= 12) {
    ampm = "pm";
  }

  if (timeArr[0] > 12) {
    timeArr[0] = timeArr[0] - 12;
    if (timeArr[0] < 10) {
      timeArr[0] = "0" + timeArr[0];
    }
  }
  return `${timeArr[0]}:${timeArr[1]}${ampm}`;
}
