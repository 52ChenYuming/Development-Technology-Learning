let getNowFormatDate = function () {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = '0' + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate;
  }
  let currentDate = `${year}年${month}月${strDate}`;
  return currentDate;
};

module.exports = {
  getNowFormatDate,
};
