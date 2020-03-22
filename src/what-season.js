module.exports = function getSeason(date) {
  if (arguments.length == 0) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) === '[object Date]') {
    const seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
    return seasons[date.getMonth()];
  }
  throw new Error();
};
