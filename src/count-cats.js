module.exports = function countCats(backyard) {
  let backyardLine = [].concat.apply([], backyard);
  let counter = 0;
  backyardLine.forEach(elem => {
    if(elem == "^^") {
      counter += 1;
    }
  });
  return counter;
};
