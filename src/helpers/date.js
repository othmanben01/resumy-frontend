export const formatDate = (date) => {
  date.setDate(date.getDate() + 1);
  // 01, 02, 03, ... 29, 30, 31
  var dd = (date.getDate() < 10 ? "0" : "") + date.getDate();
  // 01, 02, 03, ... 10, 11, 12
  var MM = (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1);
  // 1970, 1971, ... 2015, 2016, ...
  var yyyy = date.getFullYear();

  // create the format you want
  return yyyy + "-" + MM + "-" + dd;
};

export const longDateFormat = (date_string) => {
  const d = new Date(date_string);
  return `${d.toLocaleString("default", { month: "long" })} ${d.getFullYear()}`;
};
