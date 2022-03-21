const sumItems = (array) => {
  const flatArray = array.flat(Infinity);

  return flatArray.length === 1
    ? flatArray[0]
    : flatArray[0] + sumItems(flatArray.slice(1));
};

module.exports = sumItems;